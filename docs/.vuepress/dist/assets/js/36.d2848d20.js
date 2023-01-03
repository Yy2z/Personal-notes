(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{554:function(a,t,r){"use strict";r.r(t);var v=r(4),_=Object(v.a)({},function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"路由"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#路由","aria-hidden":"true"}},[a._v("#")]),a._v(" 路由")]),a._v(" "),r("h2",{attrs:{id:"前端路由"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前端路由","aria-hidden":"true"}},[a._v("#")]),a._v(" 前端路由")]),a._v(" "),r("p",[a._v("定义：在单页面应用，大部分页面结构不变，只改变部分内容的使用")]),a._v(" "),r("p",[a._v("优点：用户体验好，不需要每次都从服务器全部获取，快速展现给用户")]),a._v(" "),r("p",[a._v("缺点：使用浏览器的前进，后退键的时候会重新发送请求，没有合理地利用缓存。单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置")]),a._v(" "),r("h2",{attrs:{id:"后端路由"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#后端路由","aria-hidden":"true"}},[a._v("#")]),a._v(" 后端路由")]),a._v(" "),r("p",[a._v("通过用户请求的url导航到具体的html页面；每跳转到不同的URL，都是重新访问服务端，然后服务端返回页面，页面也可以是服务端获取数据，然后和模板组合，返回HTML，也可以是直接返回模板HTML，然后由前端js再去请求数据，使用前端模板和数据进行组合，生成想要的HTML")]),a._v(" "),r("h2",{attrs:{id:"前后端路由对比"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前后端路由对比","aria-hidden":"true"}},[a._v("#")]),a._v(" 前后端路由对比")]),a._v(" "),r("p",[a._v("从性能和用户体验的层面来比较的话，后端路由每次访问一个新页面的时候都要向服务器发送请求，然后服务器再响应请求，这个过程肯定会有延迟。而前端路由在访问一个新页面的时候仅仅是变换了一下路径而已，没有了网络延迟，对于用户体验来说会有相当大的提升。")]),a._v(" "),r("p",[a._v("在某些场合中，用ajax请求，可以让页面无刷新，页面变了但Url没有变化，用户就不能复制到想要的地址，用前端路由做单页面网页就很好的解决了这个问题。但是前端路由使用浏览器的前进，后退键的时候会重新发送请求，没有合理地利用缓存。")]),a._v(" "),r("h1",{attrs:{id:"单、多页面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#单、多页面","aria-hidden":"true"}},[a._v("#")]),a._v(" 单、多页面")]),a._v(" "),r("h2",{attrs:{id:"单页面的优势"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#单页面的优势","aria-hidden":"true"}},[a._v("#")]),a._v(" 单页面的优势")]),a._v(" "),r("p",[a._v("不存在页面切换问题，因为只在同一个页面间切换，会更流畅，而且可以附加各种动画和过度效果，用户体验更好。")]),a._v(" "),r("p",[a._v("可以用到vue的路由和状态保持，不用担心切换造成的数据不同步。")]),a._v(" "),r("p",[a._v("打包方便，有现成的脚手架可以用，也比较不容易出问题")]),a._v(" "),r("h2",{attrs:{id:"单页面的劣势"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#单页面的劣势","aria-hidden":"true"}},[a._v("#")]),a._v(" 单页面的劣势")]),a._v(" "),r("p",[a._v("所有逻辑和业务都在一个页面上，逻辑上不是很清楚，当业务变得复杂的时候改动起来就比较麻烦")]),a._v(" "),r("p",[a._v("鸡蛋都在一个篮子里，只要一个地方出现错误，可能导致整个页面出错")]),a._v(" "),r("p",[a._v("所有代码都在一个页面，首次加载耗时较长，页面体积较大")]),a._v(" "),r("p",[a._v("只有一张Web页面的应用，是一种从Web服务器加载的富客户端，单页面跳转仅刷新局部资源 ，公共资源(js、css等)仅需加载一次 页面跳转：使用js中的append/remove或者show/hide的方式来进行页面内容的更换； 数据传递：可通过全局变量或者参数传递，进行相关数据交互")]),a._v(" "),r("p",[a._v("使用场景： 适用于高度追求高度支持搜索引擎的应用")]),a._v(" "),r("h2",{attrs:{id:"多页面的优势"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#多页面的优势","aria-hidden":"true"}},[a._v("#")]),a._v(" 多页面的优势")]),a._v(" "),r("p",[a._v("逻辑清楚，各个页面按照功能和逻辑划分，不用担心业务复杂度")]),a._v(" "),r("p",[a._v("单个页面体积较小，加载速度比较有保证")]),a._v(" "),r("p",[a._v("多页面跳转需要刷新所有资源，每个公共资源(js、css等)需选择性重新加载")]),a._v(" "),r("p",[a._v('页面跳转：使用window.location.href = "./index.html"进行页面间的跳转；')]),a._v(" "),r("p",[a._v('数据传递：可以使用path?account="123"&password=""路径携带数据传递的方式，或者localstorage、cookie等存储方式')]),a._v(" "),r("p",[a._v("使用场景： 高要求的体验度，追求界面流畅的应用")]),a._v(" "),r("h2",{attrs:{id:"多页面的劣势"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#多页面的劣势","aria-hidden":"true"}},[a._v("#")]),a._v(" 多页面的劣势")]),a._v(" "),r("p",[a._v("重复代码较多")]),a._v(" "),r("p",[a._v("页面经常需要切换，切换效果取决于浏览器和网络情况，对用户体验会有一定负面影响")]),a._v(" "),r("p",[a._v("无法充分利用vue的路由和状态保持，在多个页面之间共享和同步数据状态会成为一个难题")])])},[],!1,null,null,null);t.default=_.exports}}]);