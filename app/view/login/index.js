!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/public/",n(n.s=44)}([function(e,t,n){"use strict";function a(e,t,n,a,r,o,i,s){var c,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),a&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=c):r&&(c=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(e,t){return c.call(t),l(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:d}}n.d(t,"a",function(){return a})},function(e,t){e.exports=require("vue")},function(e,t,n){var a=n(12);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n(5).default;e.exports.__inject__=function(e){r("77cfa333",a,!1,e)}},function(e,t,n){var a=n(16);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n(5).default;e.exports.__inject__=function(e){r("40ae1c4f",a,!1,e)}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var r=(i=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),o=a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"});return[n].concat(o).concat([r]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(a[o]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&a[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){"use strict";function a(e,t,n,a){if(a||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),a){a.hasOwnProperty("styles")||(Object.defineProperty(a,"styles",{enumerable:!0,get:function(){return r(a._styles)}}),a._renderStyles=r);var o=a._styles||(a._styles={});t=function(e,t){for(var n=[],a={},r=0;r<t.length;r++){var o=t[r],i=o[0],s={id:e+":"+r,css:o[1],media:o[2],sourceMap:o[3]};a[i]?a[i].parts.push(s):n.push(a[i]={id:i,parts:[s]})}return n}(e,t),n?function(e,t){for(var n=0;n<t.length;n++)for(var a=t[n].parts,r=0;r<a.length;r++){var o=a[r],i=o.media||"default",s=e[i];s?s.ids.indexOf(o.id)<0&&(s.ids.push(o.id),s.css+="\n"+o.css):e[i]={ids:[o.id],css:o.css,media:o.media}}}(o,t):function(e,t){for(var n=0;n<t.length;n++)for(var a=t[n].parts,r=0;r<a.length;r++){var o=a[r];e[o.id]={ids:[o.id],css:o.css,media:o.media}}}(o,t)}}function r(e){var t="";for(var n in e){var a=e[n];t+='<style data-vue-ssr-id="'+a.ids.join(" ")+'"'+(a.media?' media="'+a.media+'"':"")+">"+a.css+"</style>"}return t}n.r(t),n.d(t,"default",function(){return a})},function(e,t,n){("object"==typeof e.exports?e.exports:window).noop=function(){}},function(e,t){e.exports=require("element-ui")},function(e,t,n){"use strict";var a=n(1),r=n.n(a);r.a.filter("removeHtml",e=>e&&e.replace(/<(?:.|\n)*?>/gm,"").replace(/(&rdquo;)/g,'"').replace(/&ldquo;/g,'"').replace(/&mdash;/g,"-").replace(/&nbsp;/g,"").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/<[\w\s"':=\/]*/,""));n(9);var o=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("LayoutHeader"),this._ssrNode(" "),t("LayoutContent",[t("div",{attrs:{slot:"content"},slot:"content"},[this._t("main")],2)])],2)};o._withStripped=!0;var i=n(7),s=n.n(i),c=(n(6),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header"},[e._ssrNode('<div class="container" data-v-8049d7ae>',"</div>",[e._ssrNode('<div class="float-left" data-v-8049d7ae><img'+e._ssrAttr("src",n(10))+' class="logo" data-v-8049d7ae> <span class="family-name" data-v-8049d7ae><span class="red" data-v-8049d7ae>邓</span>氏家族</span></div> '),e._ssrNode('<div class="float-right" data-v-8049d7ae>',"</div>",[a("el-link",{attrs:{type:"primary",href:"/login"}},[e._v("登录/注册")]),e._ssrNode(" "),a("el-link",{staticClass:"present",attrs:{type:"primary",underline:!1,icon:"el-icon-present",title:"打赏一下"}})],2)],2),e._ssrNode(" "),e._ssrNode('<div class="container" data-v-8049d7ae>',"</div>",[a("el-menu",{staticClass:"el-menu-main",attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[a("el-menu-item",{attrs:{index:"1"}},[a("i",{staticClass:"el-icon-s-family"}),a("span",[e._v("主页")])]),e._v(" "),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[e._v("家风故事")]),e._v(" "),a("el-menu-item",{attrs:{index:"2-1"}},[e._v("善良")]),e._v(" "),a("el-menu-item",{attrs:{index:"2-2"}},[e._v("节俭")]),e._v(" "),a("el-menu-item",{attrs:{index:"2-3"}},[e._v("团结")]),e._v(" "),a("el-submenu",{attrs:{index:"2-4"}},[a("template",{slot:"title"},[e._v("其他")]),e._v(" "),a("el-menu-item",{attrs:{index:"2-4-1"}},[e._v("选项1")]),e._v(" "),a("el-menu-item",{attrs:{index:"2-4-2"}},[e._v("选项2")]),e._v(" "),a("el-menu-item",{attrs:{index:"2-4-3"}},[e._v("选项3")])],2)],2),e._v(" "),a("el-menu-item",{attrs:{index:"3"}},[a("a",{attrs:{href:"/clansman",target:"_blank"}},[e._v("族谱")])]),e._v(" "),a("el-menu-item",{attrs:{index:"4",disabled:""}},[e._v("后台管理")])],1)],1)],2)});c._withStripped=!0;var d={components:{},data:()=>({activeIndex:"1",selectedMenu:"/"}),computed:{},methods:{handleSelect(e,t){console.log(e,t)}},mounted(){this.selectedMenu=window.location.pathname.toLowerCase()}},l=n(0);var u=Object(l.a)(d,c,[],!1,function(e){var t=n(11);t.__inject__&&t.__inject__(e)},"8049d7ae","57e6997e");u.options.__file="app/web/component/layout/standard/header/header.vue";var p=u.exports,f=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"main"},[this._t("content")],2)};f._withStripped=!0;var v={name:"v-content",data:()=>({}),components:{},mounted(){}};var m=Object(l.a)(v,f,[],!1,function(e){},null,"a11e6b5c");m.options.__file="app/web/component/layout/standard/content/content.vue";var _=m.exports;r.a.use(s.a);var h={components:{LayoutHeader:p,LayoutContent:_}};var g=Object(l.a)(h,o,[],!1,function(e){var t=n(15);t.__inject__&&t.__inject__(e)},null,"17fa5fda");g.options.__file="app/web/component/layout/standard/main.vue";var y={name:"Layout",props:["title","description","keywords"],components:{MainLayout:g.exports},computed:{vTitle(){return this.$root.title||this.title||"Egg + Vue"},vKeywords(){return this.$root.keywords||this.keywords||"egg, vue, webpack, server side render"},vDescription(){return this.$root.description||this.description||"egg-vue-webpack server side render"},baseClass(){return this.$root.baseClass}},template:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>{{title}}</title>\n  <meta name="keywords" :content="keywords">\n  <meta name="description" :content="description">\n  <meta http-equiv="content-type" content="text/html;charset=utf-8">\n  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user.js-scalable=no, minimal-ui">\n  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />\n</head>\n<body :class="baseClass">\n  <div id="app"><div><MainLayout><div slot="main"><slot></slot></div></MainLayout></div></div>\n</body>\n</html>'};function x(e){return e.store&&e.router?t=>{e.router.push(t.state.url);const n=e.router.getMatchedComponents();return n?Promise.all(n.map(t=>t.preFetch?t.preFetch(e.store):null)).then(()=>(t.state=Object.assign(e.store.state,t.state),new r.a(e))):Promise.reject({code:"404"})}:t=>{const n=new(r.a.extend(e))({data:t.state});return new Promise(e=>{e(n)})}}r.a.component(y.name,y),n.d(t,"a",function(){return x})},function(e,t){},function(e,t,n){e.exports=n.p+"img/logo-deng.21e0112f.png"},function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t.default=r.a},function(e,t,n){var a=n(13);(e.exports=n(4)(!1)).push([e.i,".header[data-v-8049d7ae] {\n  background: url("+a(n(14))+") no-repeat -20% top;\n  border-top: solid 5px #464646;\n}\n.header .container .float-left[data-v-8049d7ae] {\n  padding: 20px 0;\n}\n.header .container .float-left *[data-v-8049d7ae] {\n  float: left;\n}\n.header .container .float-left .logo[data-v-8049d7ae] {\n  width: 100px;\n  height: 100px;\n}\n.header .container .float-left .family-name[data-v-8049d7ae] {\n  font-size: 48px;\n  margin-left: 20px;\n  display: inline-block;\n  height: 48px;\n  padding: 26px 0;\n}\n.header .container .float-right[data-v-8049d7ae] {\n  padding: 58px 0;\n}\n.header .container .float-right *[data-v-8049d7ae] {\n  float: left;\n  line-height: 24px;\n  font-size: 16px;\n}\n.header .container .float-right .present[data-v-8049d7ae] {\n  margin-left: 10px;\n  font-size: 24px;\n}\n.header .container .el-menu-main .el-menu-item.is-active[data-v-8049d7ae] {\n  color: #409EFF;\n}\n",""])},function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,t,n){e.exports=n.p+"img/bg-abstract.507785ee.png"},function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t.default=r.a},function(e,t,n){(t=e.exports=n(4)(!1)).i(n(6),""),t.push([e.i,"body{margin:0}a{text-decoration:none}",""])},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(8),r=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"login"},[])};r._withStripped=!0;var o={name:"",data:()=>({}),component:{}},i=n(0);var s=Object(i.a)(o,r,[],!1,function(e){},"4c652ac3","0e85c10e");s.options.__file="app/web/page/login/carousel-photos.vue";var c=s.exports,d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.default=Object(a.a)(d({},c))}]));