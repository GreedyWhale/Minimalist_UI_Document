(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{187:function(e,t,i){"use strict";i.d(t,"a",function(){return r}),i.d(t,"b",function(){return m});i(25),i(95),i(13),i(24);var s=i(189),a=i.n(s),r=(i(190),function(){document.querySelectorAll("pre").forEach(function(e){a.a.highlightBlock(e)})}),m=function(e){return e.replace(/^ {8}/gm,"").trim()}},207:function(e,t,i){},414:function(e,t,i){"use strict";var s=i(207);i.n(s).a},434:function(e,t,i){"use strict";i.r(t);var s=i(188),a=i(187),r={name:"swiper-demos",components:{MSwiper:s.MSwiper,MSwiperItem:s.MSwiperItem},data:function(){return{trimFromCodeStr:a.b,code:'\n        <m-swiper>\n          <m-swiper-item name="1">\n            <div class="box box-red"></div>\n          </m-swiper-item>\n          <m-swiper-item name="2">\n            <div class="box box-green"></div>\n          </m-swiper-item>\n          <m-swiper-item name="3">\n            <div class="box box-yellow"></div>\n          </m-swiper-item>\n          <m-swiper-item name="4">\n            <div class="box box-blue"></div>\n          </m-swiper-item>\n        </m-swiper>\n      ',autocode:'\n        <m-swiper :autoplay="true">\n          <m-swiper-item name="1">\n            <div class="box box-red"></div>\n          </m-swiper-item>\n          <m-swiper-item name="2">\n            <div class="box box-green"></div>\n          </m-swiper-item>\n          <m-swiper-item name="3">\n            <div class="box box-yellow"></div>\n          </m-swiper-item>\n          <m-swiper-item name="4">\n            <div class="box box-blue"></div>\n          </m-swiper-item>\n        </m-swiper>\n      ',activeCode:'\n        <m-swiper active="2" arrow="always">\n          <m-swiper-item name="1">\n            <div class="box box-red"></div>\n          </m-swiper-item>\n          <m-swiper-item name="2">\n            <div class="box box-green"></div>\n          </m-swiper-item>\n          <m-swiper-item name="3">\n            <div class="box box-yellow"></div>\n          </m-swiper-item>\n          <m-swiper-item name="4">\n            <div class="box box-blue"></div>\n          </m-swiper-item>\n        </m-swiper>\n      ',visibleCode:'\n        <m-swiper :autoplay="true" :visible-dots="true" arrow="always">\n          <m-swiper-item name="1">\n            <div class="box box-red"></div>\n          </m-swiper-item>\n          <m-swiper-item name="2">\n            <div class="box box-green"></div>\n          </m-swiper-item>\n          <m-swiper-item name="3">\n            <div class="box box-yellow"></div>\n          </m-swiper-item>\n          <m-swiper-item name="4">\n            <div class="box box-blue"></div>\n          </m-swiper-item>\n        </m-swiper>\n      ',loopCode:'\n        <m-swiper :loop="false">\n          <m-swiper-item name="1">\n            <div class="box box-red"></div>\n          </m-swiper-item>\n          <m-swiper-item name="2">\n            <div class="box box-green"></div>\n          </m-swiper-item>\n          <m-swiper-item name="3">\n            <div class="box box-yellow"></div>\n          </m-swiper-item>\n          <m-swiper-item name="4">\n            <div class="box box-blue"></div>\n          </m-swiper-item>\n        </m-swiper>\n      ',arrowCode:'\n        <p>一直展示</p>\n        <m-swiper arrow="always">\n          <m-swiper-item name="1">\n            <div class="box box-red"></div>\n          </m-swiper-item>\n          <m-swiper-item name="2">\n            <div class="box box-green"></div>\n          </m-swiper-item>\n          <m-swiper-item name="3">\n            <div class="box box-yellow"></div>\n          </m-swiper-item>\n          <m-swiper-item name="4">\n            <div class="box box-blue"></div>\n          </m-swiper-item>\n        </m-swiper>\n        <p>鼠标悬停时展示</p>\n        <m-swiper arrow="hover">\n          <m-swiper-item name="1">\n            <div class="box box-red"></div>\n          </m-swiper-item>\n          <m-swiper-item name="2">\n            <div class="box box-green"></div>\n          </m-swiper-item>\n          <m-swiper-item name="3">\n            <div class="box box-yellow"></div>\n          </m-swiper-item>\n          <m-swiper-item name="4">\n            <div class="box box-blue"></div>\n          </m-swiper-item>\n        </m-swiper>\n        <p>隐藏</p>\n        <m-swiper arrow="never">\n          <m-swiper-item name="1">\n            <div class="box box-red"></div>\n          </m-swiper-item>\n          <m-swiper-item name="2">\n            <div class="box box-green"></div>\n          </m-swiper-item>\n          <m-swiper-item name="3">\n            <div class="box box-yellow"></div>\n          </m-swiper-item>\n          <m-swiper-item name="4">\n            <div class="box box-blue"></div>\n          </m-swiper-item>\n        </m-swiper>\n      ',verticalCode:'\n        <m-swiper :vertical="true" arrow="never" :autoplay="true">\n          <m-swiper-item name="1">\n            <div class="box box-red"></div>\n          </m-swiper-item>\n          <m-swiper-item name="2">\n            <div class="box box-green"></div>\n          </m-swiper-item>\n          <m-swiper-item name="3">\n            <div class="box box-yellow"></div>\n          </m-swiper-item>\n          <m-swiper-item name="4">\n            <div class="box box-blue"></div>\n          </m-swiper-item>\n        </m-swiper>\n      '}},mounted:function(){Object(a.a)()},updated:function(){Object(a.a)()}},m=(i(414),i(1)),n=Object(m.a)(r,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h3",{staticClass:"title"},[e._v("基础用法")]),e._v(" "),i("div",{staticClass:"components-wrappper"},[i("m-swiper",[i("m-swiper-item",{attrs:{name:"1"}},[i("div",{staticClass:"box box-red"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"2"}},[i("div",{staticClass:"box box-green"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"3"}},[i("div",{staticClass:"box box-yellow"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"4"}},[i("div",{staticClass:"box box-blue"})])],1),e._v(" "),i("div",{staticClass:"code"},[e._v("代码")]),e._v(" "),i("pre",[i("code",[e._v(e._s(e.trimFromCodeStr(e.code)))])])],1),e._v(" "),i("h3",{staticClass:"title"},[e._v("自动轮播")]),e._v(" "),i("div",{staticClass:"components-wrappper"},[i("m-swiper",{attrs:{autoplay:!0}},[i("m-swiper-item",{attrs:{name:"1"}},[i("div",{staticClass:"box box-red"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"2"}},[i("div",{staticClass:"box box-green"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"3"}},[i("div",{staticClass:"box box-yellow"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"4"}},[i("div",{staticClass:"box box-blue"})])],1),e._v(" "),i("div",{staticClass:"code"},[e._v("代码")]),e._v(" "),i("pre",[i("code",[e._v(e._s(e.trimFromCodeStr(e.autocode)))])])],1),e._v(" "),i("h3",{staticClass:"title"},[e._v("默认展示")]),e._v(" "),i("div",{staticClass:"components-wrappper"},[i("m-swiper",{attrs:{active:"2",arrow:"always"}},[i("m-swiper-item",{attrs:{name:"1"}},[i("div",{staticClass:"box box-red"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"2"}},[i("div",{staticClass:"box box-green"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"3"}},[i("div",{staticClass:"box box-yellow"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"4"}},[i("div",{staticClass:"box box-blue"})])],1),e._v(" "),i("div",{staticClass:"code"},[e._v("代码")]),e._v(" "),i("pre",[i("code",[e._v(e._s(e.trimFromCodeStr(e.activeCode)))])])],1),e._v(" "),i("h3",{staticClass:"title"},[e._v("隐藏指示器")]),e._v(" "),i("div",{staticClass:"components-wrappper"},[i("m-swiper",{attrs:{autoplay:!0,"visible-dots":!0,arrow:"always"}},[i("m-swiper-item",{attrs:{name:"1"}},[i("div",{staticClass:"box box-red"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"2"}},[i("div",{staticClass:"box box-green"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"3"}},[i("div",{staticClass:"box box-yellow"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"4"}},[i("div",{staticClass:"box box-blue"})])],1),e._v(" "),i("div",{staticClass:"code"},[e._v("代码")]),e._v(" "),i("pre",[i("code",[e._v(e._s(e.trimFromCodeStr(e.visibleCode)))])])],1),e._v(" "),i("h3",{staticClass:"title"},[e._v("不循环")]),e._v(" "),i("div",{staticClass:"components-wrappper"},[i("m-swiper",{attrs:{loop:!1}},[i("m-swiper-item",{attrs:{name:"1"}},[i("div",{staticClass:"box box-red"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"2"}},[i("div",{staticClass:"box box-green"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"3"}},[i("div",{staticClass:"box box-yellow"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"4"}},[i("div",{staticClass:"box box-blue"})])],1),e._v(" "),i("div",{staticClass:"code"},[e._v("代码")]),e._v(" "),i("pre",[i("code",[e._v(e._s(e.trimFromCodeStr(e.loopCode)))])])],1),e._v(" "),i("h3",{staticClass:"title"},[e._v("切换箭头")]),e._v(" "),i("div",{staticClass:"components-wrappper"},[i("p",[e._v("一直展示")]),e._v(" "),i("m-swiper",{attrs:{arrow:"always"}},[i("m-swiper-item",{attrs:{name:"1"}},[i("div",{staticClass:"box box-red"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"2"}},[i("div",{staticClass:"box box-green"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"3"}},[i("div",{staticClass:"box box-yellow"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"4"}},[i("div",{staticClass:"box box-blue"})])],1),e._v(" "),i("p",[e._v("鼠标悬停时展示")]),e._v(" "),i("m-swiper",{attrs:{arrow:"hover"}},[i("m-swiper-item",{attrs:{name:"1"}},[i("div",{staticClass:"box box-red"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"2"}},[i("div",{staticClass:"box box-green"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"3"}},[i("div",{staticClass:"box box-yellow"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"4"}},[i("div",{staticClass:"box box-blue"})])],1),e._v(" "),i("p",[e._v("隐藏")]),e._v(" "),i("m-swiper",{attrs:{arrow:"never"}},[i("m-swiper-item",{attrs:{name:"1"}},[i("div",{staticClass:"box box-red"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"2"}},[i("div",{staticClass:"box box-green"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"3"}},[i("div",{staticClass:"box box-yellow"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"4"}},[i("div",{staticClass:"box box-blue"})])],1),e._v(" "),i("div",{staticClass:"code"},[e._v("代码")]),e._v(" "),i("pre",[i("code",[e._v(e._s(e.trimFromCodeStr(e.arrowCode)))])])],1),e._v(" "),i("h3",{staticClass:"title"},[e._v("纵向")]),e._v(" "),i("div",{staticClass:"components-wrappper"},[i("m-swiper",{attrs:{vertical:!0,arrow:"never",autoplay:!0}},[i("m-swiper-item",{attrs:{name:"1"}},[i("div",{staticClass:"box box-red"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"2"}},[i("div",{staticClass:"box box-green"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"3"}},[i("div",{staticClass:"box box-yellow"})]),e._v(" "),i("m-swiper-item",{attrs:{name:"4"}},[i("div",{staticClass:"box box-blue"})])],1),e._v(" "),i("div",{staticClass:"code"},[e._v("代码")]),e._v(" "),i("pre",[i("code",[e._v(e._s(e.trimFromCodeStr(e.verticalCode)))])])],1),e._v(" "),i("h3",{staticClass:"title"},[e._v("API")]),e._v(" "),e._m(0),e._v(" "),i("h3",{staticClass:"title"},[e._v("MSwiper")]),e._v(" "),e._m(1),e._v(" "),i("h3",{staticClass:"title"},[e._v("事件")]),e._v(" "),e._m(2)])},[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("table",{staticClass:"table"},[i("thead",[i("tr",[i("th",[e._v("属性")]),i("th",[e._v("说明")]),i("th",[e._v("类型")]),i("th",[e._v("默认值")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("delay")]),e._v(" "),i("td",[e._v("轮播切换时间，单位ms")]),e._v(" "),i("td",[e._v("number")]),e._v(" "),i("td",[e._v("3000")])]),e._v(" "),i("tr",[i("td",[e._v("active")]),e._v(" "),i("td",[e._v("默认激活的面板，值为m-swiper-item的name")]),e._v(" "),i("td",[e._v("string | number")]),e._v(" "),i("td")]),e._v(" "),i("tr",[i("td",[e._v("autoplay")]),e._v(" "),i("td",[e._v("是否开启自动轮播")]),e._v(" "),i("td",[e._v("boolean")]),e._v(" "),i("td",[e._v("false")])]),e._v(" "),i("tr",[i("td",[e._v("visibleDots")]),e._v(" "),i("td",[e._v("是否隐藏指示器")]),e._v(" "),i("td",[e._v("boolean")]),e._v(" "),i("td",[e._v("false")])]),e._v(" "),i("tr",[i("td",[e._v("vertical")]),e._v(" "),i("td",[e._v("是否为纵向")]),e._v(" "),i("td",[e._v("boolean")]),e._v(" "),i("td",[e._v("false")])]),e._v(" "),i("tr",[i("td",[e._v("loop")]),e._v(" "),i("td",[e._v("是否开启无限轮播")]),e._v(" "),i("td",[e._v("boolean")]),e._v(" "),i("td",[e._v("true")])])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("table",{staticClass:"table"},[i("thead",[i("tr",[i("th",[e._v("属性")]),i("th",[e._v("说明")]),i("th",[e._v("类型")]),i("th",[e._v("默认值")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("name")]),e._v(" "),i("td",[e._v("当前面板的标识，必传，该属性的值唯一。")]),e._v(" "),i("td",[e._v("string | number")]),e._v(" "),i("td")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("table",{staticClass:"table"},[i("thead",[i("tr",[i("th",[e._v("事件名")]),e._v(" "),i("th",[e._v("说明")]),e._v(" "),i("th",[e._v("回调参数")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("change")]),e._v(" "),i("td",[e._v("激活面板发生改变时触发")]),e._v(" "),i("td",[e._v("(name: string | number, index: number)")])])])])}],!1,null,"9261a574",null);t.default=n.exports}}]);