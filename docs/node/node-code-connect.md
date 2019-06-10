# Connect源码解析

源码非常简单，递归调用顺序寻找中间件，不断的调用next。做下笔记，备注下源码细节。

增加中间件：
``` js
module.exports = createServer;

function createServer() {
  function app(req, res, next){
      app.handle(req, res, next); // 执行中间件
    }
  merge(app, proto);
  merge(app, EventEmitter.prototype);
  app.route = '/';
  app.stack = [];
  return app;
}

// 增加中间件
proto.use = function use(route, fn) {
  var handle = fn;
  var path = route;

  // 核心就这一句，往数组中增加一项
  this.stack.push({ route: path, handle: handle });
  return this;
};
```

处理中间件：
``` js
proto.handle = function handle(req, res, out) {
  var index = 0;
  var protohost = getProtohost(req.url) || '';
  var removed = '';
  var slashAdded = false;
  var stack = this.stack;

  // final function handler
  var done = out || finalhandler(req, res, {
    env: env,
    onerror: logerror
  });

  // store the original URL
  req.originalUrl = req.originalUrl || req.url;

  function next(err) {
    if (slashAdded) {
      req.url = req.url.substr(1);
      slashAdded = false;
    }

    if (removed.length !== 0) {
      req.url = protohost + removed + req.url.substr(protohost.length);
      removed = '';
    }

     // 遍历stack，拿到下一个layer
    var layer = stack[index++];

    // all done
    if (!layer) {
      defer(done, err);
      return;
    }

    // route data
    var path = parseUrl(req).pathname || '/';
    var route = layer.route;

    // 错误处理
    // skip this layer if the route doesn't match
    if (path.toLowerCase().substr(0, route.length) !== route.toLowerCase()) {
      return next(err);
    }
    // skip if route match does not border "/", ".", or end
    var c = path.length > route.length && path[route.length];
    if (c && c !== '/' && c !== '.') {
      return next(err);
    }

    // trim off the part of the url that matches the route
    if (route.length !== 0 && route !== '/') {
      removed = route;
      req.url = protohost + req.url.substr(protohost.length + removed.length);

      // ensure leading slash
      if (!protohost && req.url[0] !== '/') {
        req.url = '/' + req.url;
        slashAdded = true;
      }
    }

    // 匹配到layer，执行handle函数
    call(layer.handle, route, err, req, res, next);
  }

  next(); // 开始next
};

function call(handle, route, err, req, res, next) {
  var arity = handle.length;
  var error = err;
  var hasError = Boolean(err);

  try {
    if (hasError && arity === 4) {
      handle(err, req, res, next); // 处理错误next
      return;
    } else if (!hasError && arity < 4) {
      // 执行handle函数。
      // next函数是其参数，如果要传递下一个，执行next函数
      handle(req, res, next);
      return;
    }
  } catch (e) {
    error = e;
  }

  // 继续next
  next(error);
}
```