(window.webpackJsonp=window.webpackJsonp||[]).push([["family/list-news/index"],{"./app/web/asset/images/logo-deng.png":function(e,t,s){e.exports=s.p+"img/logo-deng.21e0112f.png"},"./app/web/component/layout/standard/header/header.vue?vue&type=style&index=0&id=8049d7ae&lang=less&scoped=true&":function(e,t,s){"use strict";var n=s("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/web/component/layout/standard/header/header.vue?vue&type=style&index=0&id=8049d7ae&lang=less&scoped=true&");s.n(n).a},"./app/web/component/layout/standard/main.vue?vue&type=style&index=0&lang=css&":function(e,t,s){"use strict";var n=s("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./app/web/component/layout/standard/main.vue?vue&type=style&index=0&lang=css&");s.n(n).a},"./app/web/framework/vue/directive/index.js":function(e,t){},"./app/web/framework/vue/entry/client.js":function(e,t,s){"use strict";var n=s("./node_modules/vue/dist/vue.esm.js");n.default.filter("removeHtml",function(e){return e&&e.replace(/<(?:.|\n)*?>/gm,"").replace(/(&rdquo;)/g,'"').replace(/&ldquo;/g,'"').replace(/&mdash;/g,"-").replace(/&nbsp;/g,"").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/<[\w\s"':=\/]*/,"")});s("./app/web/framework/vue/directive/index.js");var o=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("LayoutHeader"),this._v(" "),t("LayoutContent",[t("div",{attrs:{slot:"content"},slot:"content"},[this._t("main")],2)])],1)};o._withStripped=!0;var a=s("./node_modules/element-ui/lib/element-ui.common.js"),d=s.n(a),l=(s("./node_modules/element-ui/lib/theme-chalk/index.css"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{staticClass:"header"},[s("div",{staticClass:"container"},[e._m(0),e._v(" "),s("div",{staticClass:"float-right"},[s("el-link",{attrs:{type:"primary",href:"/login"}},[e._v("登录/注册")]),e._v(" "),s("el-link",{staticClass:"present",attrs:{type:"primary",underline:!1,icon:"el-icon-present",title:"打赏一下"}})],1)]),e._v(" "),s("div",{staticClass:"container"},[s("el-menu",{staticClass:"el-menu-main",attrs:{"default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[s("el-menu-item",{attrs:{index:"1"}},[s("i",{staticClass:"el-icon-s-family"}),s("span",[e._v("主页")])]),e._v(" "),s("el-submenu",{attrs:{index:"2"}},[s("template",{slot:"title"},[e._v("家风故事")]),e._v(" "),s("el-menu-item",{attrs:{index:"2-1"}},[e._v("善良")]),e._v(" "),s("el-menu-item",{attrs:{index:"2-2"}},[e._v("节俭")]),e._v(" "),s("el-menu-item",{attrs:{index:"2-3"}},[e._v("团结")]),e._v(" "),s("el-submenu",{attrs:{index:"2-4"}},[s("template",{slot:"title"},[e._v("其他")]),e._v(" "),s("el-menu-item",{attrs:{index:"2-4-1"}},[e._v("选项1")]),e._v(" "),s("el-menu-item",{attrs:{index:"2-4-2"}},[e._v("选项2")]),e._v(" "),s("el-menu-item",{attrs:{index:"2-4-3"}},[e._v("选项3")])],2)],2),e._v(" "),s("el-menu-item",{attrs:{index:"3"}},[s("a",{attrs:{href:"/clansman",target:"_blank"}},[e._v("族谱")])]),e._v(" "),s("el-menu-item",{attrs:{index:"4",disabled:""}},[e._v("后台管理")])],1)],1)])}),i=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"float-left"},[t("img",{staticClass:"logo",attrs:{src:s("./app/web/asset/images/logo-deng.png")}}),this._v(" "),t("span",{staticClass:"family-name"},[t("span",{staticClass:"red"},[this._v("邓")]),this._v("氏家族")])])}];l._withStripped=!0;var r={components:{},data:function(){return{activeIndex:"1",selectedMenu:"/"}},computed:{},methods:{handleSelect:function(e,t){console.log(e,t)}},mounted:function(){this.selectedMenu=window.location.pathname.toLowerCase()}},u=(s("./app/web/component/layout/standard/header/header.vue?vue&type=style&index=0&id=8049d7ae&lang=less&scoped=true&"),s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),c=Object(u.a)(r,l,i,!1,null,"8049d7ae",null);c.options.__file="app/web/component/layout/standard/header/header.vue";var p=c.exports,m=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"main"},[this._t("content")],2)};m._withStripped=!0;var v={name:"v-content",data:function(){return{}},components:{},mounted:function(){}},_=Object(u.a)(v,m,[],!1,null,null,null);_.options.__file="app/web/component/layout/standard/content/content.vue";var f=_.exports;n.default.use(d.a);var h={components:{LayoutHeader:p,LayoutContent:f}},b=(s("./app/web/component/layout/standard/main.vue?vue&type=style&index=0&lang=css&"),Object(u.a)(h,o,[],!1,null,null,null));b.options.__file="app/web/component/layout/standard/main.vue";var x='<div><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>',w={name:"Layout",props:["title","description","keywords"],components:{MainLayout:b.exports},computed:{vTitle:function(){return this.$root.title||this.title||"Egg + Vue"},vKeywords:function(){return this.$root.keywords||this.keywords||"egg, vue, webpack, server side render"},vDescription:function(){return this.$root.description||this.description||"egg-vue-webpack server side render"},baseClass:function(){return this.$root.baseClass}},template:x};n.default.component(w.name,w);var y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e};t.a=function(e){n.default.prototype.$http=s("./node_modules/axios/index.js"),e.store?e.store.replaceState(y({},window.__INITIAL_STATE__,e.store.state)):window.__INITIAL_STATE__&&(e.data=y(window.__INITIAL_STATE__,e.data&&e.data())),new n.default(e).$mount("#app")}},"./app/web/page/home/list-news/index.vue":function(e,t,s){"use strict";var n=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"news-list"},[t("h3",[this._v("最新动态")]),this._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:this.tableData}},[t("el-table-column",{attrs:{prop:"name",label:"姓名"}}),this._v(" "),t("el-table-column",{attrs:{prop:"date",label:"日期"}})],1)],1)};n._withStripped=!0;var o={name:"",data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}},component:{}},a=(s("./app/web/page/family/list-news/carousel-photos.vue?vue&type=style&index=0&id=dd45cd24&lang=less&scoped=true&"),s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),d=Object(a.a)(o,n,[],!1,null,"dd45cd24",null);d.options.__file="app/web/page/family/list-news/carousel-photos.vue";t.a=d.exports},"./app/web/page/home/list-news/index.vue?vue&type=style&index=0&id=dd45cd24&lang=less&scoped=true&":function(e,t,s){"use strict";var n=s("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/web/page/family/list-news/carousel-photos.vue?vue&type=style&index=0&id=dd45cd24&lang=less&scoped=true&");s.n(n).a},"./node_modules/axios/index.js":function(e,t,s){e.exports=s("dll-reference vendor")(100)},"./node_modules/babel-loader/lib/index.js!./app/web/framework/vue/entry/client-loader.js!./app/web/page/home/list-news/index.vue":function(e,t,s){"use strict";s.r(t);var n=s("./app/web/framework/vue/entry/client.js"),o=s("./app/web/page/family/list-news/carousel-photos.vue"),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e};t.default=Object(n.a)(a({},o.a))},"./node_modules/element-ui/lib/element-ui.common.js":function(e,t,s){e.exports=s("dll-reference vendor")(119)},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/web/component/layout/standard/header/header.vue?vue&type=style&index=0&id=8049d7ae&lang=less&scoped=true&":function(e,t,s){},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./app/web/page/home/list-news/index.vue?vue&type=style&index=0&id=dd45cd24&lang=less&scoped=true&":function(e,t,s){},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./app/web/component/layout/standard/main.vue?vue&type=style&index=0&lang=css&":function(e,t,s){},"./node_modules/vue-loader/lib/runtime/componentNormalizer.js":function(e,t,s){"use strict";function n(e,t,s,n,o,a,d,l){var i,r="function"==typeof e?e.options:e;if(t&&(r.render=t,r.staticRenderFns=s,r._compiled=!0),n&&(r.functional=!0),a&&(r._scopeId="data-v-"+a),d?(i=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(d)},r._ssrRegister=i):o&&(i=l?function(){o.call(this,this.$root.$options.shadowRoot)}:o),i)if(r.functional){r._injectStyles=i;var u=r.render;r.render=function(e,t){return i.call(t),u(e,t)}}else{var c=r.beforeCreate;r.beforeCreate=c?[].concat(c,i):[i]}return{exports:e,options:r}}s.d(t,"a",function(){return n})},"./node_modules/vue/dist/vue.esm.js":function(e,t,s){e.exports=s("dll-reference vendor")(2)},"dll-reference vendor":function(e,t){e.exports=vendor}},[["./node_modules/babel-loader/lib/index.js!./app/web/framework/vue/entry/client-loader.js!./app/web/page/family/list-news/carousel-photos.vue","runtime","common"]]]);