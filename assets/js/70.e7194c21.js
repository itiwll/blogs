(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{393:function(t,_,l){"use strict";l.r(_);var v=l(9),i=Object(v.a)({},function(){var t=this,_=t.$createElement,l=t._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"http流程-url输入后发生了什么"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#http流程-url输入后发生了什么","aria-hidden":"true"}},[t._v("#")]),t._v(" Http流程-url输入后发生了什么")]),t._v(" "),l("ol",[l("li",[l("p",[t._v("发起http请求，解析域名")])]),t._v(" "),l("li",[l("p",[t._v("DNS")]),t._v(" "),l("ol",[l("li",[t._v("Chrome搜索自身DNS缓存。chrome输入"),l("code",[t._v("chrome://net-internals/#dns")]),t._v("可查看到")]),t._v(" "),l("li",[t._v("搜索操作系统自身DNS缓存")]),t._v(" "),l("li",[t._v("读取本地HOST文件")]),t._v(" "),l("li",[t._v("以上都查询不到时，浏览器发送一个DNS的系统调用，DNS请求到达宽带运营商服务器。")]),t._v(" "),l("li",[t._v("宽带运营商服务器查询自身缓存")]),t._v(" "),l("li",[t._v("没查询时，发起一个迭代（顶级域--次级域名--...）的DNS解析请求,直到获取到域名对应的IP地址。")])])]),t._v(" "),l("li",[l("p",[t._v("拿到域名对应的IP并缓存")]),t._v(" "),l("ol",[l("li",[t._v("宽带运营商服务器缓存DNS")]),t._v(" "),l("li",[t._v("结果返回操作系统并缓存DNS")]),t._v(" "),l("li",[t._v("结果返回浏览器并缓存DNS")])])]),t._v(" "),l("li",[l("p",[t._v("得到目标IP，发起Http“三次握手”，建立起TCP/IP连接")])]),t._v(" "),l("li",[l("p",[t._v("连接成功后，浏览器向服务器发起标准Http请求")])]),t._v(" "),l("li",[l("p",[t._v("服务器收到请求后，经过后端处理返回结果。（前后端分离）")])]),t._v(" "),l("li",[l("p",[t._v("返回Html页面等资源，html包含css/js等资源，重复以上http请求")])]),t._v(" "),l("li",[l("p",[t._v("构建DOM树以及CSS DOM树、Render树")])])]),t._v(" "),l("p",[t._v("script标签阻止html渲染\n脚本运行延迟html解析\nhttp请求数减少\n多个脚本文件压缩成1个或2个（针对http1.1）")])])},[],!1,null,null,null);i.options.__file="Http流程-url输入后发生了什么.md";_.default=i.exports}}]);