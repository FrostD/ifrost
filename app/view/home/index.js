!function(t,e){for(var n in e)t[n]=e[n]}(exports,function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/public/",n(n.s=43)}([function(t,e,n){"use strict";function a(t,e,n,a,r,i,o,s){var c,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),a&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},d._ssrRegister=c):r&&(c=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(t,e){return c.call(e),l(t,e)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:d}}n.d(e,"a",function(){return a})},function(t,e){t.exports=require("vue")},function(t,e,n){var a=n(12);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n(5).default;t.exports.__inject__=function(t){r("77cfa333",a,!1,t)}},function(t,e,n){var a=n(16);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n(5).default;t.exports.__inject__=function(t){r("40ae1c4f",a,!1,t)}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var r=(o=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),i=a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"});return[n].concat(i).concat([r]).join("\n")}var o;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(a[i]=!0)}for(r=0;r<t.length;r++){var o=t[r];"number"==typeof o[0]&&a[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){"use strict";function a(t,e,n,a){if(a||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),a){a.hasOwnProperty("styles")||(Object.defineProperty(a,"styles",{enumerable:!0,get:function(){return r(a._styles)}}),a._renderStyles=r);var i=a._styles||(a._styles={});e=function(t,e){for(var n=[],a={},r=0;r<e.length;r++){var i=e[r],o=i[0],s={id:t+":"+r,css:i[1],media:i[2],sourceMap:i[3]};a[o]?a[o].parts.push(s):n.push(a[o]={id:o,parts:[s]})}return n}(t,e),n?function(t,e){for(var n=0;n<e.length;n++)for(var a=e[n].parts,r=0;r<a.length;r++){var i=a[r],o=i.media||"default",s=t[o];s?s.ids.indexOf(i.id)<0&&(s.ids.push(i.id),s.css+="\n"+i.css):t[o]={ids:[i.id],css:i.css,media:i.media}}}(i,e):function(t,e){for(var n=0;n<e.length;n++)for(var a=e[n].parts,r=0;r<a.length;r++){var i=a[r];t[i.id]={ids:[i.id],css:i.css,media:i.media}}}(i,e)}}function r(t){var e="";for(var n in t){var a=t[n];e+='<style data-vue-ssr-id="'+a.ids.join(" ")+'"'+(a.media?' media="'+a.media+'"':"")+">"+a.css+"</style>"}return e}n.r(e),n.d(e,"default",function(){return a})},function(t,e,n){("object"==typeof t.exports?t.exports:window).noop=function(){}},function(t,e){t.exports=require("element-ui")},function(t,e,n){"use strict";var a=n(1),r=n.n(a);r.a.filter("removeHtml",t=>t&&t.replace(/<(?:.|\n)*?>/gm,"").replace(/(&rdquo;)/g,'"').replace(/&ldquo;/g,'"').replace(/&mdash;/g,"-").replace(/&nbsp;/g,"").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/<[\w\s"':=\/]*/,""));n(9);var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("LayoutHeader"),this._ssrNode(" "),e("LayoutContent",[e("div",{attrs:{slot:"content"},slot:"content"},[this._t("main")],2)])],2)};i._withStripped=!0;var o=n(7),s=n.n(o),c=(n(6),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[t._ssrNode('<div class="container" data-v-8049d7ae>',"</div>",[t._ssrNode('<div class="float-left" data-v-8049d7ae><img'+t._ssrAttr("src",n(10))+' class="logo" data-v-8049d7ae> <span class="family-name" data-v-8049d7ae><span class="red" data-v-8049d7ae>邓</span>氏家族</span></div> '),t._ssrNode('<div class="float-right" data-v-8049d7ae>',"</div>",[a("el-link",{attrs:{type:"primary",href:"/login"}},[t._v("登录/注册")]),t._ssrNode(" "),a("el-link",{staticClass:"present",attrs:{type:"primary",underline:!1,icon:"el-icon-present",title:"打赏一下"}})],2)],2),t._ssrNode(" "),t._ssrNode('<div class="container" data-v-8049d7ae>',"</div>",[a("el-menu",{staticClass:"el-menu-main",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[a("el-menu-item",{attrs:{index:"1"}},[a("i",{staticClass:"el-icon-s-family"}),a("span",[t._v("主页")])]),t._v(" "),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[t._v("家风故事")]),t._v(" "),a("el-menu-item",{attrs:{index:"2-1"}},[t._v("善良")]),t._v(" "),a("el-menu-item",{attrs:{index:"2-2"}},[t._v("节俭")]),t._v(" "),a("el-menu-item",{attrs:{index:"2-3"}},[t._v("团结")]),t._v(" "),a("el-submenu",{attrs:{index:"2-4"}},[a("template",{slot:"title"},[t._v("其他")]),t._v(" "),a("el-menu-item",{attrs:{index:"2-4-1"}},[t._v("选项1")]),t._v(" "),a("el-menu-item",{attrs:{index:"2-4-2"}},[t._v("选项2")]),t._v(" "),a("el-menu-item",{attrs:{index:"2-4-3"}},[t._v("选项3")])],2)],2),t._v(" "),a("el-menu-item",{attrs:{index:"3"}},[a("a",{attrs:{href:"/clansman",target:"_blank"}},[t._v("族谱")])]),t._v(" "),a("el-menu-item",{attrs:{index:"4",disabled:""}},[t._v("后台管理")])],1)],1)],2)});c._withStripped=!0;var d={components:{},data:()=>({activeIndex:"1",selectedMenu:"/"}),computed:{},methods:{handleSelect(t,e){console.log(t,e)}},mounted(){this.selectedMenu=window.location.pathname.toLowerCase()}},l=n(0);var u=Object(l.a)(d,c,[],!1,function(t){var e=n(11);e.__inject__&&e.__inject__(t)},"8049d7ae","57e6997e");u.options.__file="app/web/component/layout/standard/header/header.vue";var p=u.exports,f=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"main"},[this._t("content")],2)};f._withStripped=!0;var v={name:"v-content",data:()=>({}),components:{},mounted(){}};var _=Object(l.a)(v,f,[],!1,function(t){},null,"a11e6b5c");_.options.__file="app/web/component/layout/standard/content/content.vue";var h=_.exports;r.a.use(s.a);var m={components:{LayoutHeader:p,LayoutContent:h}};var g=Object(l.a)(m,i,[],!1,function(t){var e=n(15);e.__inject__&&e.__inject__(t)},null,"17fa5fda");g.options.__file="app/web/component/layout/standard/main.vue";var x={name:"Layout",props:["title","description","keywords"],components:{MainLayout:g.exports},computed:{vTitle(){return this.$root.title||this.title||"Egg + Vue"},vKeywords(){return this.$root.keywords||this.keywords||"egg, vue, webpack, server side render"},vDescription(){return this.$root.description||this.description||"egg-vue-webpack server side render"},baseClass(){return this.$root.baseClass}},template:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>{{title}}</title>\n  <meta name="keywords" :content="keywords">\n  <meta name="description" :content="description">\n  <meta http-equiv="content-type" content="text/html;charset=utf-8">\n  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user.js-scalable=no, minimal-ui">\n  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />\n</head>\n<body :class="baseClass">\n  <div id="app"><div><MainLayout><div slot="main"><slot></slot></div></MainLayout></div></div>\n</body>\n</html>'};function y(t){return t.store&&t.router?e=>{t.router.push(e.state.url);const n=t.router.getMatchedComponents();return n?Promise.all(n.map(e=>e.preFetch?e.preFetch(t.store):null)).then(()=>(e.state=Object.assign(t.store.state,e.state),new r.a(t))):Promise.reject({code:"404"})}:e=>{const n=new(r.a.extend(t))({data:e.state});return new Promise(t=>{t(n)})}}r.a.component(x.name,x),n.d(e,"a",function(){return y})},function(t,e){},function(t,e,n){t.exports=n.p+"img/logo-deng.21e0112f.png"},function(t,e,n){"use strict";n.r(e);var a=n(2),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e.default=r.a},function(t,e,n){var a=n(13);(t.exports=n(4)(!1)).push([t.i,".header[data-v-8049d7ae] {\n  background: url("+a(n(14))+") no-repeat -20% top;\n  border-top: solid 5px #464646;\n}\n.header .container .float-left[data-v-8049d7ae] {\n  padding: 20px 0;\n}\n.header .container .float-left *[data-v-8049d7ae] {\n  float: left;\n}\n.header .container .float-left .logo[data-v-8049d7ae] {\n  width: 100px;\n  height: 100px;\n}\n.header .container .float-left .family-name[data-v-8049d7ae] {\n  font-size: 48px;\n  margin-left: 20px;\n  display: inline-block;\n  height: 48px;\n  padding: 26px 0;\n}\n.header .container .float-right[data-v-8049d7ae] {\n  padding: 58px 0;\n}\n.header .container .float-right *[data-v-8049d7ae] {\n  float: left;\n  line-height: 24px;\n  font-size: 16px;\n}\n.header .container .float-right .present[data-v-8049d7ae] {\n  margin-left: 10px;\n  font-size: 24px;\n}\n.header .container .el-menu-main .el-menu-item.is-active[data-v-8049d7ae] {\n  color: #409EFF;\n}\n",""])},function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e,n){t.exports=n.p+"img/bg-abstract.507785ee.png"},function(t,e,n){"use strict";n.r(e);var a=n(3),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e.default=r.a},function(t,e,n){(e=t.exports=n(4)(!1)).i(n(6),""),e.push([t.i,"body{margin:0}a{text-decoration:none}",""])},function(t,e,n){var a=n(32);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n(5).default;t.exports.__inject__=function(t){r("22209974",a,!1,t)}},function(t,e,n){var a=n(34);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n(5).default;t.exports.__inject__=function(t){r("8a0a80a8",a,!1,t)}},function(t,e,n){var a=n(36);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n(5).default;t.exports.__inject__=function(t){r("5e666010",a,!1,t)}},function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"news-list"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(t.dataTitle))]),t._v(" "),n("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("刷新")])],1),t._v(" "),t._l(4,function(e){return n("div",{key:e,staticClass:"text item"},[t._v("\n        "+t._s("dataTitle "+e)+"\n    ")])})],2)};a._withStripped=!0;var r={props:["dataTitle","dataList"],data:()=>({}),component:{}},i=n(0);var o=Object(i.a)(r,a,[],!1,function(t){},"6fee4688","03b52ad1");o.options.__file="app/web/page/family/card-news/carousel-photos.vue";e.a=o.exports},function(t,e,n){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("el-carousel",{staticClass:"carousel-photos",attrs:{interval:4e3,type:"card",height:"300px"}},this._l(5,function(t){return e("el-carousel-item",{key:t,style:{backgroundImage:"url("+n(25)("./banner-"+t+".jpg")}})}),1)};a._withStripped=!0;var r={props:[],data:()=>({}),component:{}},i=n(0);var o=Object(i.a)(r,a,[],!1,function(t){var e=n(31);e.__inject__&&e.__inject__(t)},"46825ecc","245b7aef");o.options.__file="app/web/page/family/carousel-photos/carousel-photos.vue";e.a=o.exports},function(t,e,n){"use strict";var a=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"family-story"},[this._ssrNode('<h1 class="card-header" data-v-514ca596>我们从哪里来</h1> <div class="card-content" data-v-514ca596>'+this._ssrEscape(this._s(this.data.desc))+'</div> <div class="card-footer" data-v-514ca596>\n        上传于2018年8月 口述：邓树田\n    </div>')])};a._withStripped=!0;var r={name:"",props:["data"],data:()=>({}),component:{}},i=n(0);var o=Object(i.a)(r,a,[],!1,function(t){var e=n(33);e.__inject__&&e.__inject__(t)},"514ca596","ecc1b93e");o.options.__file="app/web/page/family/family-story/carousel-photos.vue";e.a=o.exports},function(t,e,n){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"news-list"},[this._ssrNode("<h3 data-v-dd45cd24>最新动态</h3> "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:this.tableData}},[e("el-table-column",{attrs:{prop:"name",label:"姓名"}}),this._v(" "),e("el-table-column",{attrs:{prop:"date",label:"日期"}})],1)],2)};a._withStripped=!0;var r={name:"",data:()=>({tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}),component:{}},i=n(0);var o=Object(i.a)(r,a,[],!1,function(t){var e=n(35);e.__inject__&&e.__inject__(t)},"dd45cd24","65ed30fa");o.options.__file="app/web/page/family/list-news/carousel-photos.vue";e.a=o.exports},function(t,e,n){var a=n(41);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n(5).default;t.exports.__inject__=function(t){r("35a55772",a,!1,t)}},function(t,e,n){var a={"./banner-1.jpg":26,"./banner-2.jpg":27,"./banner-3.jpg":28,"./banner-4.jpg":29,"./banner-5.jpg":30};function r(t){var e=i(t);return n(e)}function i(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(a)},r.resolve=i,t.exports=r,r.id=25},function(t,e,n){t.exports=n.p+"img/banner-1.f8f1ff49.jpg"},function(t,e,n){t.exports=n.p+"img/banner-2.05293cab.jpg"},function(t,e,n){t.exports=n.p+"img/banner-3.5e6d98bb.jpg"},function(t,e,n){t.exports=n.p+"img/banner-4.b6a4e4ec.jpg"},function(t,e,n){t.exports=n.p+"img/banner-5.9e572a38.jpg"},function(t,e,n){"use strict";n.r(e);var a=n(17),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e.default=r.a},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".carousel-photos .el-carousel__item[data-v-46825ecc] {\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-position: center;\n}\n",""])},function(t,e,n){"use strict";n.r(e);var a=n(18),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e.default=r.a},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".family-story[data-v-514ca596] {\n  min-height: 400px;\n}\n.family-story .card-content[data-v-514ca596] {\n  line-height: 24px;\n  text-indent: 32px;\n}\n.family-story .card-footer[data-v-514ca596] {\n  margin-top: 10px;\n  text-align: right;\n}\n",""])},function(t,e,n){"use strict";n.r(e);var a=n(19),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e.default=r.a},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".news-list[data-v-dd45cd24] {\n  padding-top: 20px;\n}\n.news-list h3[data-v-dd45cd24] {\n  font-size: 24px;\n  margin: 8px;\n}\n",""])},,,,function(t,e,n){"use strict";n.r(e);var a=n(24),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e.default=r.a},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".family[data-v-3e5a3c4a] {\n  padding-bottom: 100px;\n}\n",""])},,function(t,e,n){"use strict";n.r(e);var a=n(8),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{attrs:{description:"vue server side render",keywords:"egg, vue, webpack, server side render"}},[n("div",{staticClass:"family container"},[n("carousel-photos"),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:18}},[t.family?n("family-story",{attrs:{data:t.family}}):t._e(),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("card-news",{attrs:{"data-title":"家风家训"}})],1),t._v(" "),n("el-col",{attrs:{span:12}},[n("card-news",{attrs:{"data-title":"老辈故事"}})],1),t._v(" "),n("el-col",{attrs:{span:6}})],1)],1),t._v(" "),n("el-col",{attrs:{span:6}},[n("news-list")],1)],1)],1)])};r._withStripped=!0;var i=n(21),o=n(22),s=n(23),c=n(20),d={components:{carouselPhotos:i.a,familyStory:o.a,newsList:s.a,cardNews:c.a},data:()=>({isFinish:!1,isLoading:!1}),computed:{lists(){return this.list}},methods:{fetch(){this.$http.get(`${location.origin}/pager?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`).then(t=>{console.log("res",t),t.data.list&&t.data.list.length?(this.total=t.data.total,this.list=this.list.concat(t.data.list)):this.isFinish=!0,this.isLoading=!1})},loadPage(){this.isFinish||this.isLoading||(this.isLoading=!0,this.pageIndex++,setTimeout(()=>{this.fetch()},1500))}},mounted(){console.log(this.family)}},l=n(0);var u=Object(l.a)(d,r,[],!1,function(t){var e=n(40);e.__inject__&&e.__inject__(t)},"3e5a3c4a","5270d630");u.options.__file="app/web/page/family/carousel-photos.vue";var p=u.exports,f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};e.default=Object(a.a)(f({},p))}]));