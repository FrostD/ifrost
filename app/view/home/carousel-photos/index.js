!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/public/",n(n.s=38)}([function(e,t,n){"use strict";function r(e,t,n,r,a,o,i,s){var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=c):a&&(c=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:u}}n.d(t,"a",function(){return r})},function(e,t){e.exports=require("vue")},function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n(5).default;e.exports.__inject__=function(e){a("77cfa333",r,!1,e)}},function(e,t,n){var r=n(16);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n(5).default;e.exports.__inject__=function(e){a("40ae1c4f",r,!1,e)}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([a]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){"use strict";function r(e,t,n,r){if(r||"undefined"==typeof __VUE_SSR_CONTEXT__||(r=__VUE_SSR_CONTEXT__),r){r.hasOwnProperty("styles")||(Object.defineProperty(r,"styles",{enumerable:!0,get:function(){return a(r._styles)}}),r._renderStyles=a);var o=r._styles||(r._styles={});t=function(e,t){for(var n=[],r={},a=0;a<t.length;a++){var o=t[a],i=o[0],s={id:e+":"+a,css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}(e,t),n?function(e,t){for(var n=0;n<t.length;n++)for(var r=t[n].parts,a=0;a<r.length;a++){var o=r[a],i=o.media||"default",s=e[i];s?s.ids.indexOf(o.id)<0&&(s.ids.push(o.id),s.css+="\n"+o.css):e[i]={ids:[o.id],css:o.css,media:o.media}}}(o,t):function(e,t){for(var n=0;n<t.length;n++)for(var r=t[n].parts,a=0;a<r.length;a++){var o=r[a];e[o.id]={ids:[o.id],css:o.css,media:o.media}}}(o,t)}}function a(e){var t="";for(var n in e){var r=e[n];t+='<style data-vue-ssr-id="'+r.ids.join(" ")+'"'+(r.media?' media="'+r.media+'"':"")+">"+r.css+"</style>"}return t}n.r(t),n.d(t,"default",function(){return r})},function(e,t,n){("object"==typeof e.exports?e.exports:window).noop=function(){}},function(e,t){e.exports=require("element-ui")},function(e,t,n){"use strict";var r=n(1),a=n.n(r);a.a.filter("removeHtml",e=>e&&e.replace(/<(?:.|\n)*?>/gm,"").replace(/(&rdquo;)/g,'"').replace(/&ldquo;/g,'"').replace(/&mdash;/g,"-").replace(/&nbsp;/g,"").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/<[\w\s"':=\/]*/,""));n(9);var o=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("LayoutHeader"),this._ssrNode(" "),t("LayoutContent",[t("div",{attrs:{slot:"content"},slot:"content"},[this._t("main")],2)])],2)};o._withStripped=!0;var i=n(7),s=n.n(i),c=(n(6),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"header"},[e._ssrNode('<div class="container" data-v-8049d7ae>',"</div>",[e._ssrNode('<div class="float-left" data-v-8049d7ae><img'+e._ssrAttr("src",n(10))+' class="logo" data-v-8049d7ae> <span class="family-name" data-v-8049d7ae><span class="red" data-v-8049d7ae>邓</span>氏家族</span></div> '),e._ssrNode('<div class="float-right" data-v-8049d7ae>',"</div>",[r("el-link",{attrs:{type:"primary",href:"/login"}},[e._v("登录/注册")]),e._ssrNode(" "),r("el-link",{staticClass:"present",attrs:{type:"primary",underline:!1,icon:"el-icon-present",title:"打赏一下"}})],2)],2),e._ssrNode(" "),e._ssrNode('<div class="container" data-v-8049d7ae>',"</div>",[r("el-menu",{staticClass:"el-menu-main",attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[r("el-menu-item",{attrs:{index:"1"}},[r("i",{staticClass:"el-icon-s-family"}),r("span",[e._v("主页")])]),e._v(" "),r("el-submenu",{attrs:{index:"2"}},[r("template",{slot:"title"},[e._v("家风故事")]),e._v(" "),r("el-menu-item",{attrs:{index:"2-1"}},[e._v("善良")]),e._v(" "),r("el-menu-item",{attrs:{index:"2-2"}},[e._v("节俭")]),e._v(" "),r("el-menu-item",{attrs:{index:"2-3"}},[e._v("团结")]),e._v(" "),r("el-submenu",{attrs:{index:"2-4"}},[r("template",{slot:"title"},[e._v("其他")]),e._v(" "),r("el-menu-item",{attrs:{index:"2-4-1"}},[e._v("选项1")]),e._v(" "),r("el-menu-item",{attrs:{index:"2-4-2"}},[e._v("选项2")]),e._v(" "),r("el-menu-item",{attrs:{index:"2-4-3"}},[e._v("选项3")])],2)],2),e._v(" "),r("el-menu-item",{attrs:{index:"3"}},[r("a",{attrs:{href:"/clansman",target:"_blank"}},[e._v("族谱")])]),e._v(" "),r("el-menu-item",{attrs:{index:"4",disabled:""}},[e._v("后台管理")])],1)],1)],2)});c._withStripped=!0;var u={components:{},data:()=>({activeIndex:"1",selectedMenu:"/"}),computed:{},methods:{handleSelect(e,t){console.log(e,t)}},mounted(){this.selectedMenu=window.location.pathname.toLowerCase()}},l=n(0);var d=Object(l.a)(u,c,[],!1,function(e){var t=n(11);t.__inject__&&t.__inject__(e)},"8049d7ae","57e6997e");d.options.__file="app/web/component/layout/standard/header/header.vue";var p=d.exports,f=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"main"},[this._t("content")],2)};f._withStripped=!0;var v={name:"v-content",data:()=>({}),components:{},mounted(){}};var _=Object(l.a)(v,f,[],!1,function(e){},null,"a11e6b5c");_.options.__file="app/web/component/layout/standard/content/content.vue";var m=_.exports;a.a.use(s.a);var h={components:{LayoutHeader:p,LayoutContent:m}};var g=Object(l.a)(h,o,[],!1,function(e){var t=n(15);t.__inject__&&t.__inject__(e)},null,"17fa5fda");g.options.__file="app/web/component/layout/standard/main.vue";var b={name:"Layout",props:["title","description","keywords"],components:{MainLayout:g.exports},computed:{vTitle(){return this.$root.title||this.title||"Egg + Vue"},vKeywords(){return this.$root.keywords||this.keywords||"egg, vue, webpack, server side render"},vDescription(){return this.$root.description||this.description||"egg-vue-webpack server side render"},baseClass(){return this.$root.baseClass}},template:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>{{title}}</title>\n  <meta name="keywords" :content="keywords">\n  <meta name="description" :content="description">\n  <meta http-equiv="content-type" content="text/html;charset=utf-8">\n  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user.js-scalable=no, minimal-ui">\n  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />\n</head>\n<body :class="baseClass">\n  <div id="app"><div><MainLayout><div slot="main"><slot></slot></div></MainLayout></div></div>\n</body>\n</html>'};function y(e){return e.store&&e.router?t=>{e.router.push(t.state.url);const n=e.router.getMatchedComponents();return n?Promise.all(n.map(t=>t.preFetch?t.preFetch(e.store):null)).then(()=>(t.state=Object.assign(e.store.state,t.state),new a.a(e))):Promise.reject({code:"404"})}:t=>{const n=new(a.a.extend(e))({data:t.state});return new Promise(e=>{e(n)})}}a.a.component(b.name,b),n.d(t,"a",function(){return y})},function(e,t){},function(e,t,n){e.exports=n.p+"img/logo-deng.21e0112f.png"},function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t.default=a.a},function(e,t,n){var r=n(13);(e.exports=n(4)(!1)).push([e.i,".header[data-v-8049d7ae] {\n  background: url("+r(n(14))+") no-repeat -20% top;\n  border-top: solid 5px #464646;\n}\n.header .container .float-left[data-v-8049d7ae] {\n  padding: 20px 0;\n}\n.header .container .float-left *[data-v-8049d7ae] {\n  float: left;\n}\n.header .container .float-left .logo[data-v-8049d7ae] {\n  width: 100px;\n  height: 100px;\n}\n.header .container .float-left .family-name[data-v-8049d7ae] {\n  font-size: 48px;\n  margin-left: 20px;\n  display: inline-block;\n  height: 48px;\n  padding: 26px 0;\n}\n.header .container .float-right[data-v-8049d7ae] {\n  padding: 58px 0;\n}\n.header .container .float-right *[data-v-8049d7ae] {\n  float: left;\n  line-height: 24px;\n  font-size: 16px;\n}\n.header .container .float-right .present[data-v-8049d7ae] {\n  margin-left: 10px;\n  font-size: 24px;\n}\n.header .container .el-menu-main .el-menu-item.is-active[data-v-8049d7ae] {\n  color: #409EFF;\n}\n",""])},function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,t,n){e.exports=n.p+"img/bg-abstract.507785ee.png"},function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t.default=a.a},function(e,t,n){(t=e.exports=n(4)(!1)).i(n(6),""),t.push([e.i,"body{margin:0}a{text-decoration:none}",""])},function(e,t,n){var r=n(32);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n(5).default;e.exports.__inject__=function(e){a("22209974",r,!1,e)}},,,,function(e,t,n){"use strict";var r=function(){var e=this.$createElement,t=this._self._c||e;return t("el-carousel",{staticClass:"carousel-photos",attrs:{interval:4e3,type:"card",height:"300px"}},this._l(5,function(e){return t("el-carousel-item",{key:e,style:{backgroundImage:"url("+n(25)("./banner-"+e+".jpg")}})}),1)};r._withStripped=!0;var a={props:[],data:()=>({}),component:{}},o=n(0);var i=Object(o.a)(a,r,[],!1,function(e){var t=n(31);t.__inject__&&t.__inject__(e)},"46825ecc","245b7aef");i.options.__file="app/web/page/family/carousel-photos/carousel-photos.vue";t.a=i.exports},,,,function(e,t,n){var r={"./banner-1.jpg":26,"./banner-2.jpg":27,"./banner-3.jpg":28,"./banner-4.jpg":29,"./banner-5.jpg":30};function a(e){var t=o(e);return n(t)}function o(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=25},function(e,t,n){e.exports=n.p+"img/banner-1.f8f1ff49.jpg"},function(e,t,n){e.exports=n.p+"img/banner-2.05293cab.jpg"},function(e,t,n){e.exports=n.p+"img/banner-3.5e6d98bb.jpg"},function(e,t,n){e.exports=n.p+"img/banner-4.b6a4e4ec.jpg"},function(e,t,n){e.exports=n.p+"img/banner-5.9e572a38.jpg"},function(e,t,n){"use strict";n.r(t);var r=n(17),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t.default=a.a},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,".carousel-photos .el-carousel__item[data-v-46825ecc] {\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-position: center;\n}\n",""])},,,,,,function(e,t,n){"use strict";n.r(t);var r=n(8),a=n(21),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=Object(r.a)(o({},a.a))}]));