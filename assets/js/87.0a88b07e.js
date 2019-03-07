(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{329:function(t,a,s){"use strict";s.r(a);var n=s(14),o=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"h5-video踩坑记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#h5-video踩坑记录","aria-hidden":"true"}},[t._v("#")]),t._v(" H5 Video踩坑记录")]),t._v(" "),s("p",[t._v("临时接手一个即将上线的公司项目，纯H5活动页，内容不多，但对还原度和各机型兼容性（尤其是Android机型）有极高要求。涉及的问题很多，这里重点说下在H5中Video的一系列坑。插个技术选型问题，"),s("strong",[t._v("不复杂的活动页")]),t._v("建议使用jquery技术栈，而不是使用vue和reactjs等。后者的优点在于组件系统，可复用度高，适合大型项目。活动页一般UI改动频繁，动效多，适合jquery插件生态，添加也方便。笔者半道接替该vue项目，中间要加一些新特性，还得看看有没有对应的vue轮子，十分麻烦。")]),t._v(" "),s("p",[t._v("效果请戳："),s("a",{attrs:{href:"https://3.163.com/jd",target:"_blank",rel:"noopener noreferrer"}},[t._v("H5 Video"),s("OutboundLink")],1),t._v("（在移动端模式查看）")]),t._v(" "),s("h2",{attrs:{id:"_1-基本video属性设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本video属性设置","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.基本video属性设置")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("poster：视频未播放前的代替图片，如果未设置该属性，默认使用视频第一帧（但小部分机型兼容性不好）。"),s("strong",[t._v("建议添加")])])]),t._v(" "),s("li",[s("p",[t._v("muted: 静音. "),s("strong",[t._v("建议添加")])])]),t._v(" "),s("li",[s("p",[t._v("webkit-playsinline/playsinline: 视频播放时局域播放，不脱离文档流 。基本保证"),s("strong",[t._v("iphone")]),t._v("手机在H5页面内播放。个别不支持可以引入第三方库"),s("a",{attrs:{href:"'https://github.com/bfred-it/iphone-inline-video"}},[t._v("iphone-inline-video")]),t._v("。"),s("strong",[t._v("建议添加")])])]),t._v(" "),s("li",[s("p",[t._v('x5-video-player-type="h5"/x5-playsinline: 启用同层H5播放器，保证anroid手机在H5页面内播放，但在各android机型下表现不一。'),s("strong",[t._v("建议添加")])])])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("video")]),t._v("\n    "),s("span",{attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("video"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{attrs:{class:"token attr-name"}},[t._v(":poster")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("startSource"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{attrs:{class:"token attr-name"}},[t._v("muted")]),t._v("\n    "),s("span",{attrs:{class:"token attr-name"}},[t._v("x-webkit-airplay")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("allow"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{attrs:{class:"token attr-name"}},[t._v("x5-video-player-type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("h5"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("x5-playsinline")]),t._v("\n    "),s("span",{attrs:{class:"token attr-name"}},[t._v("webkit-playsinline")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("playsinline")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("source")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("videoSource"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("video/mp4"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("video")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"_2-自动播放"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-自动播放","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.自动播放")]),t._v(" "),s("p",[s("strong",[t._v("先说结论：如果需要微信/网易云音乐/微博/QQ/浏览器等各平台完美自动播放，不行")]),t._v("。正确的解决方案：让视觉设计引导用户点击屏幕，进行播放视频。或者如果产品能接受，只要用户接触屏幕就开始播放(监听touchstart事件)。错误方式："),s("s",[t._v("video标签autoplay")]),t._v(" 、"),s("s",[t._v("js执行video.play")]),t._v("、"),s("s",[t._v("load完成后执行play()")])]),t._v(" "),s("p",[s("strong",[t._v("只在微信端传播")]),t._v("。微信浏览器是经过特殊处理的，可以通过回调WeixinJSBridgeReady解决，适用于iPhone和anroid。注意自动播放的视频要无音轨或者手动muted。见示例代码：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v(" 必须加在微信api资源 "),s("span",{attrs:{class:"token operator"}},[t._v("--")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"http://res.wx.qq.com/open/js/jweixin-1.0.0.js"')]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" that "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WeixinJSBridge"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    WeixinJSBridge"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("invoke")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'getNetworkType'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        video"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("play")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"WeixinJSBridgeReady"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        WeixinJSBridge"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("invoke")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'getNetworkType'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            video"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("play")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_3-视频开始短暂黑屏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-视频开始短暂黑屏","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.视频开始短暂黑屏")]),t._v(" "),s("p",[t._v("部分android机型点击播放视频时，会出现短暂1~2s的黑屏。该问题出现可能是还没请求完成可顺利播放的视频。")]),t._v(" "),s("p",[t._v("解决方案：在视频上叠加一个div，把它的背景图换成首帧图。监听"),s("strong",[t._v("timeupdate")]),t._v("事件，有视频播放时移除该div。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("play"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("video")]),t._v("\n        "),s("span",{attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("video"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{attrs:{class:"token attr-name"}},[t._v(":class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("playing"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(": playing}"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{attrs:{class:"token attr-name"}},[t._v(":poster")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("startSource"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{attrs:{class:"token attr-name"}},[t._v("x-webkit-airplay")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("allow"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{attrs:{class:"token attr-name"}},[t._v("x5-video-player-type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("h5"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{attrs:{class:"token attr-name"}},[t._v("x5-playsinline")]),t._v("\n        "),s("span",{attrs:{class:"token attr-name"}},[t._v("webkit-playsinline")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("playsinline")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("source")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("videoSource"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("video/mp4"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("video")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("["),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("cover-start"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("]"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("!playing"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("videoNode"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'timeupdate'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 当视频的currentTime大于0.1时表示黑屏时间已过，已有视频画面，可以移除浮层")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("videoNode"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentTime "),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0.1")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("playing"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("playing "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"_4-部分android机跳到x5-player播放视频"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-部分android机跳到x5-player播放视频","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.部分Android机跳到x5 player播放视频")]),t._v(" "),s("p",[t._v("有些android在微信或浏览器，播放视频会跳到x5 player播放器中。这种video位于页面最顶层，无法被遮盖，说不定播完会推送腾讯视频信息，而且不会自动关掉。")]),t._v(" "),s("p",[t._v("解决方案：利用timeupdate事件，当视频快要结束时，手动remove掉整个视频。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("videoNode"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'timeupdate'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 兼容Android X5在浏览器行为.时间为视频时长")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("videoNode"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentTime "),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("56.9")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isShowVideo "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"_5-视频canplay的坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-视频canplay的坑","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.视频canplay的坑")]),t._v(" "),s("p",[t._v("换了引导用户的视频方案后，前面有个loading页面。产品希望视频加载好后，loading消失并视频可点击。但是ios下canplay和canplaythrough事件都不会执行回调。ios是点击播放后才会去加载视频流。android下会执行canplay事件回调，但视频流也是边下边播。所以无法准确获得视频可加载时间点")]),t._v(" "),s("p",[t._v("总结：H5现在视频标准不完善，除了"),s("strong",[t._v("timeupdate")]),t._v("、"),s("strong",[t._v("ended")]),t._v("事件外，其他事件慎用。")]),t._v(" "),s("h2",{attrs:{id:"_6-safari可以缩放视频"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-safari可以缩放视频","aria-hidden":"true"}},[t._v("#")]),t._v(" 6.safari可以缩放视频")]),t._v(" "),s("p",[t._v("通常情况在meta的viewport中设置"),s("strong",[t._v("user-scalable=no")]),t._v("即可。但是IOS 10以后的safari中，apple为了提高Safari中网站的辅助功能，即使网站在视口中设置该属性，用户也可以手动缩放。")]),t._v(" "),s("p",[t._v("解决方案：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// IOS10 Safari不识别meta，故需要js hack")]),t._v("\ndocument"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'touchstart'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("touches "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("touches"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    event"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("preventDefault")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])},[],!1,null,null,null);o.options.__file="project-h5-video-summary.md";a.default=o.exports}}]);