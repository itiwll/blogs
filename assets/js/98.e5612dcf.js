(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{420:function(t,s,a){"use strict";a.r(s);var n=a(9),o=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"一图胜千言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一图胜千言","aria-hidden":"true"}},[t._v("#")]),t._v(" 一图胜千言")]),t._v(" "),a("h2",{attrs:{id:"原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型","aria-hidden":"true"}},[t._v("#")]),t._v(" 原型")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1600/1*425LxRkFEldC5CJWyhZRBg.png",alt:""}})]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("cat1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" Cat"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n"),a("span",{attrs:{class:"token comment"}},[t._v("// cat1的构造函数找不到，会去找原型中的构造函数（Cat.prototype.constructor），最终找到Cat")]),t._v("\ncat1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" Cat"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" Cat\n")])])]),a("h2",{attrs:{id:"原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型链","aria-hidden":"true"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("含有__protp__的对象都是实例")])]),t._v(" "),a("li",[a("p",[t._v("Foo.prototype属于实例指向的原型链的一环（注意这里的Foo是定义，未实例化。简单理解可以认为这是一个类Class）")])]),t._v(" "),a("li",[a("p",[t._v("每个Foo.prototype都有构造函数constructor，指向Foo（简单理解是Class的构造函数指向Class）")])]),t._v(" "),a("li",[a("p",[t._v("构造函数是个函数，函数本身也有Function.prototype原型链")])]),t._v(" "),a("li",[a("p",[t._v("this是执行上下文环境的一个属性，而不是某个变量对象的属性")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 构造函数")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Foo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v('// 构造函数将会以特定模式创建对象：被创建的对象都会有"y"属性')]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" y"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n"),a("span",{attrs:{class:"token comment"}},[t._v('// "Foo.prototype"存放了新建对象的原型引用')]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 所以我们可以将之用于定义继承和共享属性或方法")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 所以，和上例一样，我们有了如下代码：")]),t._v("\n \n"),a("span",{attrs:{class:"token comment"}},[t._v('// 继承属性"x"')]),t._v("\nFoo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{attrs:{class:"token comment"}},[t._v('// 继承方法"calculate"')]),t._v("\nFoo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("calculate")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("z"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" z"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{attrs:{class:"token comment"}},[t._v('// 使用foo模式创建 "b" and "c"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("20")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("30")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{attrs:{class:"token comment"}},[t._v("// 调用继承的方法")]),t._v("\nb"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("calculate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("30")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 60")]),t._v("\nc"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("calculate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("40")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 80")]),t._v("\n \n"),a("span",{attrs:{class:"token comment"}},[t._v("// 让我们看看是否使用了预期的属性")]),t._v("\n \nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n \n  b"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" Foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n  c"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" Foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n \n  "),a("span",{attrs:{class:"token comment"}},[t._v('// "Foo.prototype"自动创建了一个特殊的属性"constructor"')]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 指向a的构造函数本身")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v('// 实例"b"和"c"可以通过授权找到它并用以检测自己的构造函数')]),t._v("\n \n  b"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" Foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n  c"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" Foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n  Foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" Foo "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n \n  b"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("calculate "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" b"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("calculate"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n  b"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("calculate "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" Foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("calculate "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n \n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://pic002.cnblogs.com/images/2011/349491/2011123111482169.png",alt:""}})]),t._v(" "),a("p",[t._v("理解上面内容后，对网络上常见的这张图就很好理解了：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://images2015.cnblogs.com/blog/752003/201701/752003-20170120135801843-1947643869.jpg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"前端优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 前端优化")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/10/14/041436b6f1575010917b7bb6530cf507?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})])])},[],!1,null,null,null);o.options.__file="一图胜千言.md";s.default=o.exports}}]);