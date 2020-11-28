!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Router=t():e.Router=t()}(self,(function(){return e={779:(e,t,r)=>{var o=r(173);e.exports=function e(t,r,n){return o(r)||(n=r||n,r=[]),n=n||{},t instanceof RegExp?function(e,t){var r=e.source.match(/\((?!\?)/g);if(r)for(var o=0;o<r.length;o++)t.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return c(e,t)}(t,r):o(t)?function(t,r,o){for(var n=[],a=0;a<t.length;a++)n.push(e(t[a],r,o).source);return c(new RegExp("(?:"+n.join("|")+")",s(o)),r)}(t,r,n):function(e,t,r){return f(a(e,r),t,r)}(t,r,n)},e.exports.parse=a,e.exports.compile=function(e,t){return u(a(e,t),t)},e.exports.tokensToFunction=u,e.exports.tokensToRegExp=f;var n=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(e,t){for(var r,o=[],a=0,i=0,u="",c=t&&t.delimiter||"/";null!=(r=n.exec(e));){var s=r[0],f=r[1],h=r.index;if(u+=e.slice(i,h),i=h+s.length,f)u+=f[1];else{var y=e[i],v=r[2],g=r[3],d=r[4],b=r[5],m=r[6],O=r[7];u&&(o.push(u),u="");var P=null!=v&&null!=y&&y!==v,k="+"===m||"*"===m,j="?"===m||"*"===m,w=r[2]||c,R=d||b;o.push({name:g||a++,prefix:v||"",delimiter:w,optional:j,repeat:k,partial:P,asterisk:!!O,pattern:R?p(R):O?".*":"[^"+l(w)+"]+?"})}}return i<e.length&&(u+=e.substr(i)),u&&o.push(u),o}function i(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function u(e,t){for(var r=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(r[n]=new RegExp("^(?:"+e[n].pattern+")$",s(t)));return function(t,n){for(var a="",u=t||{},l=(n||{}).pretty?i:encodeURIComponent,p=0;p<e.length;p++){var c=e[p];if("string"!=typeof c){var s,f=u[c.name];if(null==f){if(c.optional){c.partial&&(a+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(o(f)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(s=l(f[h]),!r[p].test(s))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(s)+"`");a+=(0===h?c.prefix:c.delimiter)+s}}else{if(s=c.asterisk?encodeURI(f).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):l(f),!r[p].test(s))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+s+'"');a+=c.prefix+s}}else a+=c}return a}}function l(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function p(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function c(e,t){return e.keys=t,e}function s(e){return e&&e.sensitive?"":"i"}function f(e,t,r){o(t)||(r=t||r,t=[]);for(var n=(r=r||{}).strict,a=!1!==r.end,i="",u=0;u<e.length;u++){var p=e[u];if("string"==typeof p)i+=l(p);else{var f=l(p.prefix),h="(?:"+p.pattern+")";t.push(p),p.repeat&&(h+="(?:"+f+h+")*"),i+=h=p.optional?p.partial?f+"("+h+")?":"(?:"+f+"("+h+"))?":f+"("+h+")"}}var y=l(r.delimiter||"/"),v=i.slice(-y.length)===y;return n||(i=(v?i.slice(0,-y.length):i)+"(?:"+y+"(?=$))?"),i+=a?"$":n&&v?"":"(?="+y+"|$)",c(new RegExp("^"+i,s(r)),t)}},173:e=>{e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},844:function(e,t,r){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.buildVueRouter=t.buildVueRoutes=void 0;var n=r(366),a=r(883),i=r(789),u=r(169);t.buildVueRoutes=function(e,t){for(var r=e.routesMap,o=r.pathMap,l=r.finallyPathList,p=Object.keys(t),c=0;c<p.length;c++){var s=p[c],f=o[s],h=t[s];if(f){var y=i.getRoutePath(f,e).finallyPath;if(y instanceof Array)throw new Error("非 vueRouterDev 模式下，alias、aliasPath、path 无法提供数组类型！ "+JSON.stringify(f));null!=f.name&&(h.name=f.name);var v=h.path,g=h.alias;delete h.alias,h.path=y,"/"===v&&null!=g&&(h.alias=g,h.path=v),f.beforeEnter&&(h.beforeEnter=function(t,r,o){u.onTriggerEachHook(t,r,e,n.hookToggle.enterHooks,o)})}else a.warn(s+" 路由地址在路由表中未找到，确定是否传递漏啦",e,!0)}return l.includes("*")&&(t["*"]=o["*"]),t},t.buildVueRouter=function(e,t,r){var n;n="[object Array]"===i.getDataType(r)?r:Object.values(r);var a=e.options.h5,u=a.scrollBehavior,l=a.fallback,p=t.options.scrollBehavior;t.options.scrollBehavior=function(e,t,r){return p&&p(e,t,r),u(e,t,r)},t.fallback=l;var c=new t.constructor(o(o({},e.options.h5),{base:t.options.base,mode:t.options.mode,routes:n}));t.matcher=c.matcher}},147:function(e,t){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)});Object.defineProperty(t,"__esModule",{value:!0}),t.proxyH5Mount=t.proxyEachHook=t.MyArray=void 0;var n=function(e){function t(r,o,n,a){var i=e.call(this)||this;return i.router=r,i.vueEachArray=o,i.myEachHook=n,i.hookName=a,Object.setPrototypeOf(i,t.prototype),i}return o(t,e),t.prototype.push=function(e){var t=this;this.vueEachArray.splice(0,1,e),this[this.length]=function(e,r,o){t.myEachHook(e,r,(function(n){t.vueEachArray[0](e,r,(function(e){o(n)}))}),t.router,!0)}},t}(Array);t.MyArray=n,t.proxyEachHook=function(e,t){for(var r=["beforeHooks","afterHooks"],o=0;o<r.length;o++){var a=r[o],i=e.lifeCycle[a][0];if(i){var u=t[a];t[a]=new n(e,u,i,a)}}},t.proxyH5Mount=function(e){return 0===e.mount.length?!(!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)||document.getElementsByTagName("uni-page").length>0||(window.location.reload(),0)):(e.mount[0].app.$mount(),e.mount=[],!0)}},814:function(e,t){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.runtimeQuit=t.registerLoddingPage=void 0;var o=null;t.registerLoddingPage=function(e){var t=e.options.APP,o=t.loddingPageHook,n=t.loddingPageStyle;o(new plus.nativeObj.View("router-loadding",r({top:"0px",left:"0px",height:"100%",width:"100%"},n())))},t.runtimeQuit=function(e){void 0===e&&(e="再按一次退出应用");var t=+new Date;o?t-o<1e3&&plus.runtime.quit():(o=t,uni.showToast({title:e,icon:"none",position:"bottom",duration:1e3}),setTimeout((function(){o=null}),1e3))}},282:function(e,t,r){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.notCallProxyHook=t.proxyVueSortHookName=t.indexProxyHook=t.appProxyHook=t.lifeCycle=t.baseConfig=t.mpPlatformReg=void 0;var a=r(883),i=r(789);t.mpPlatformReg=/(^mp-weixin$)|(^mp-baidu$)|(^mp-alipay$)|(^mp-toutiao$)|(^mp-qq$)|(^mp-360$)/g,t.baseConfig={h5:{paramsToQuery:!1,vueRouterDev:!1,vueNext:!1,mode:"hash",base:"/",linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",scrollBehavior:function(e,t,r){return{x:0,y:0}},fallback:!0},APP:{loddingPageStyle:function(){return JSON.parse('{"backgroundColor":"#FFF"}')},loddingPageHook:function(e){e.show()},launchedHook:function(){plus.navigator.closeSplashscreen()},animation:{animationType:"pop-in",animationDuration:300}},platform:"h5",keepUniOriginNav:!1,debugger:!1,routerBeforeEach:function(e,t,r){r()},routerAfterEach:function(e,t){},routerErrorEach:function(e,t){a.err(e,t,!0)},detectBeforeLock:function(e,t,r){},routes:[{path:"/choose-location"},{path:"/open-location"},{path:"/preview-image"}]},t.lifeCycle={beforeHooks:[],afterHooks:[],routerBeforeHooks:[],routerAfterHooks:[],routerErrorHooks:[]},t.appProxyHook={app:{beforeCreate:[],created:[],beforeMount:[],mounted:[],onLaunch:[],onShow:[],onHide:[],beforeDestroy:[],destroyed:[]}},t.indexProxyHook={app:t.appProxyHook.app,index:function(e){e.onLaunch;var t=n(e,["onLaunch"]);return o(o({},t),{onLoad:[],onReady:[],onUnload:[],onResize:[]})}(i.copyData(t.appProxyHook.app))},t.proxyVueSortHookName={app:["beforeCreate","created","beforeMount","mounted","onLaunch","onShow","onHide","beforeDestroy","destroyed"],index:["beforeCreate","created","beforeMount","mounted","onLoad","onReady","onShow","onResize","onHide","beforeDestroy","destroyed","onUnload"]},t.notCallProxyHook=["onHide","beforeDestroy","destroyed","destroyed","onUnload","onResize"]},801:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createRouteMap=void 0;var o=r(883),n=r(789);t.createRouteMap=function(e,t){var r={finallyPathList:[],finallyPathMap:Object.create(null),aliasPathMap:Object.create(null),pathMap:Object.create(null),vueRouteMap:Object.create(null),nameMap:Object.create(null)};return t.forEach((function(t){var a=n.getRoutePath(t,e),i=a.finallyPath,u=a.aliasPath,l=a.path;if(null==l)throw new Error("请提供一个完整的路由对象，包括以绝对路径开始的 ‘path’ 字符串 "+JSON.stringify(t));if(i instanceof Array&&!e.options.h5.vueRouterDev&&"h5"===e.options.platform)throw new Error("非 vueRouterDev 模式下，route.alias 目前无法提供数组类型！ "+JSON.stringify(t));var p=i,c=u;"h5"!==e.options.platform&&0!==p.indexOf("/")&&"*"!==l&&o.warn("当前路由对象下，route："+JSON.stringify(t)+" 是否缺少了前缀 ‘/’",e,!0),r.finallyPathMap[p]||(r.finallyPathMap[p]=t,r.aliasPathMap[c]=t,r.pathMap[l]=t,r.finallyPathList.push(p),null!=t.name&&(r.nameMap[t.name]=t))})),r}},662:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.registerEachHooks=t.registerRouterHooks=t.registerHook=void 0;var o=r(366),n=r(169);function a(e,t){e[0]=t}t.registerHook=a,t.registerRouterHooks=function(e,t){return a(e.routerBeforeHooks,(function(e,r,o){t.routerBeforeEach(e,r,o)})),a(e.routerAfterHooks,(function(e,r){t.routerAfterEach(e,r)})),a(e.routerErrorHooks,(function(e,r){t.routerErrorEach(e,r)})),e},t.registerEachHooks=function(e,t,r){a(e.lifeCycle[t],(function(e,a,i,u,l){l?n.onTriggerEachHook(e,a,u,o.hookToggle[t],i):r(e,a,i)}))}},460:function(e,t,r){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.initMixins=t.getMixins=void 0;var n=r(801),a=r(844),i=r(147),u=r(282),l=r(814),p=r(845),c=r(890),s=!1,f=!1;function h(e){var t=e.options.platform;return u.mpPlatformReg.test(t)&&(t="app-lets"),{h5:{beforeCreate:function(){var t;if(this.$options.router){e.$route=this.$options.router;var r=[];(null===(t=e.options.h5)||void 0===t?void 0:t.vueRouterDev)?r=e.options.routes:(r=n.createRouteMap(e,this.$options.router.options.routes).finallyPathMap,e.routesMap.vueRouteMap=r,a.buildVueRoutes(e,r)),a.buildVueRouter(e,this.$options.router,r),i.proxyEachHook(e,this.$options.router)}}},"app-plus":{beforeCreate:function(){s||(s=!0,p.proxyPageHook(this,e,"appProxyHook","app"),l.registerLoddingPage(e))}},"app-lets":{beforeCreate:function(){s||(s=!0,p.proxyPageHook(this,e,"appletsProxyHook","app"))},onLoad:function(){f||(f=!0,p.proxyPageHook(this,e,"appletsProxyHook","index"),c.forceGuardEach(e))}}}[t]}t.getMixins=h,t.initMixins=function(e,t){var r=n.createRouteMap(t,t.options.routes);t.routesMap=r,e.mixin(o({},h(t)))}},789:function(e,t,r){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r},a=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var o=Array(e),n=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,u=a.length;i<u;i++,n++)o[n]=a[i];return o};Object.defineProperty(t,"__esModule",{value:!0}),t.restPageHook=t.replaceHook=t.lockDetectWarn=t.deepClone=t.baseClone=t.assertDeepObject=t.paramsToQuery=t.forMatNextToFrom=t.urlToJson=t.getUniCachePage=t.copyData=t.getDataType=t.routesForMapRoute=t.assertNewOptions=t.getRoutePath=t.notDeepClearNull=t.mergeConfig=t.voidFun=void 0;var i=r(282),u=r(169),l=r(883),p=r(890),c=r(779);function s(e,t){for(var r=Object.create(null),n=Object.keys(e).concat(["resolveQuery","parseQuery"]),i=0;i<n.length;i+=1){var u=n[i];null!=t[u]?t[u].constructor===Object?r[u]=o(o({},e[u]),t[u]):r[u]="routes"===u?a(e[u],t[u]):t[u]:r[u]=e[u]}return r}function f(e,t){var r=e.aliasPath||e.alias||e.path;return"h5"!==t.options.platform&&(r=e.path),{finallyPath:r,aliasPath:e.aliasPath||e.path,path:e.path,alias:e.alias}}function h(e){return Object.prototype.toString.call(e)}function y(e,t){for(var r=0,o=Object.keys(e);r<o.length;r++){var n=o[r],a=n;e[n]!==e&&("object"==typeof e[n]?(t[a]="[object Array]"===h(e[n])?[]:{},y(e[n],t[a])):t[a]=e[n])}}function v(e){var t="[object Array]"===h(e)?[]:{};return y(e,t),t}t.voidFun=function(){},t.mergeConfig=s,t.notDeepClearNull=function(e){for(var t in e)null==e[t]&&delete e[t];return e},t.getRoutePath=f,t.assertNewOptions=function(e){var t,r=e.platform,o=e.routes;if(null==r)throw new Error("你在实例化路由时必须传递 'platform'");if(null==o||0===o.length)throw new Error("你在实例化路由时必须传递 routes 为空，这是无意义的。");return"h5"===e.platform&&(null===(t=e.h5)||void 0===t?void 0:t.vueRouterDev)&&(i.baseConfig.routes=[]),s(i.baseConfig,e)},t.routesForMapRoute=function(e,t,r){var o;if(null===(o=e.options.h5)||void 0===o?void 0:o.vueRouterDev)return{path:t};for(var n="",a=e.routesMap,i=0;i<r.length;i++)for(var u=a[r[i]],l=0,p=Object.entries(u);l<p.length;l++){var s=p[l],f=s[0],y=s[1];if("*"!==f){var v=y,g=f;if("[object Array]"===h(u)&&(g=v),null!=c(g).exec(t))return"[object String]"===h(v)?a.finallyPathMap[v]:v}else""===n&&(n="*")}if(""!==n)return a.finallyPathMap[n];throw new Error(t+" 路径无法在路由表中找到！检查跳转路径及路由表")},t.getDataType=h,t.copyData=function(e){return JSON.parse(JSON.stringify(e))},t.getUniCachePage=function(e){var t=getCurrentPages();if(null==e)return t;if(0===t.length)return t;var r=t.reverse()[e];return null==r?[]:r},t.urlToJson=function(e){var t={},r=e.split("?"),o=r[0],n=r[1];if(null!=n)for(var a=0,i=n.split("&");a<i.length;a++){var u=i[a].split("=");t[u[0]]=u[1]}return{path:o,query:t}},t.forMatNextToFrom=function(e,t,r){var o=[t,r],n=o[0],a=o[1];if("h5"===e.options.platform){var i=e.options.h5,u=i.vueNext,l=i.vueRouterDev;u||l||(n=p.createRoute(e,void 0,n),a=p.createRoute(e,void 0,a))}else n=p.createRoute(e,void 0,v(n)),a=p.createRoute(e,void 0,v(a));return{matTo:n,matFrom:a}},t.paramsToQuery=function(e,t){var r;if("h5"===e.options.platform&&!(null===(r=e.options.h5)||void 0===r?void 0:r.paramsToQuery))return t;if("[object Object]"===h(t)){var a=t,i=a.name,l=a.params,p=n(a,["name","params"]),c=l;if("h5"!==e.options.platform&&null==c&&(c={}),null!=i&&null!=c){var s=e.routesMap.nameMap[i];null==s&&u.ERRORHOOK[0]({type:2,msg:"命名路由为："+i+" 的路由，无法在路由表中找到！",toRule:t},e);var y=f(s,e).finallyPath;if(!y.includes(":"))return o(o({},p),{path:y,query:c});u.ERRORHOOK[0]({type:2,msg:"动态路由："+y+" 无法使用 paramsToQuery！",toRule:t},e)}}return t},t.assertDeepObject=function(e){var t=null;try{t=JSON.stringify(e).match(/\{|\[|\}|\]/g)}catch(e){l.warnLock("传递的参数解析对象失败。"+e)}return null!=t&&t.length>3},t.baseClone=y,t.deepClone=v,t.lockDetectWarn=function(e,t,r,o,n){if("afterHooks"===n)o();else{var a=e.options.detectBeforeLock;a&&a(e,t,r),e.$lockStatus?e.options.routerErrorEach({type:2,msg:"当前页面正在处于跳转状态，请稍后再进行跳转...."},e):o()}},t.replaceHook=function(e,t,r,o){var n=t.$options,a=e[r][o];if(null!=a)for(var u=i.proxyVueSortHookName[o],l=function(e){var r=u[e],o=n[r];if("[object Array]"===h(o)){var l={options:[],hook:Function},p=o.splice(o.length-1,1,(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return l.options=e}))[0];l.hook=function(){o.splice(o.length-1,1,p),i.notCallProxyHook.includes(r)||p.apply(t,l.options)},a[r]=[l]}},p=0;p<u.length;p++)l(p)},t.restPageHook=function(e){var t="appletsProxyHook";"app-plus"===e.options.platform&&(t="appProxyHook");for(var r=0,o=Object.entries(e[t]);r<o.length;r++)for(var n=o[r][1],a=0,i=Object.entries(n);a<i.length;a++){var u=i[a][1][0];u&&u.hook&&u.hook()}}},883:(e,t)=>{"use strict";function r(e,t,r,o){if(void 0===o&&(o=!1),!o){var n="[object Object]"===t.toString();if(!1===t)return!1;if(n&&!1===t[e])return!1}return console[e](r),!0}Object.defineProperty(t,"__esModule",{value:!0}),t.warnLock=t.log=t.warn=t.err=t.isLog=void 0,t.isLog=r,t.err=function(e,t,o){r("error",t.options.debugger,e,o)},t.warn=function(e,t,o){r("warn",t.options.debugger,e,o)},t.log=function(e,t,o){r("log",t.options.debugger,e,o)},t.warnLock=function(e){console.warn(e)}},607:function(e,t,r){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||o(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),t.createRouter=t.RouterMount=t.runtimeQuit=void 0,n(r(366),t),n(r(309),t);var a=r(814);Object.defineProperty(t,"runtimeQuit",{enumerable:!0,get:function(){return a.runtimeQuit}});var i=r(963);Object.defineProperty(t,"RouterMount",{enumerable:!0,get:function(){return i.RouterMount}}),Object.defineProperty(t,"createRouter",{enumerable:!0,get:function(){return i.createRouter}})},366:(e,t)=>{"use strict";var r,o,n;Object.defineProperty(t,"__esModule",{value:!0}),t.rewriteMethodToggle=t.navtypeToggle=t.hookToggle=void 0,(n=t.hookToggle||(t.hookToggle={})).beforeHooks="beforeEach",n.afterHooks="afterEach",n.enterHooks="beforeEnter",(o=t.navtypeToggle||(t.navtypeToggle={})).push="navigateTo",o.replace="redirectTo",o.replaceAll="reLaunch",o.pushTab="switchTab",o.back="navigateBack",(r=t.rewriteMethodToggle||(t.rewriteMethodToggle={})).navigateTo="push",r.navigate="push",r.redirectTo="replace",r.reLaunch="replaceAll",r.switchTab="pushTab",r.navigateBack="back"},309:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},169:function(e,t,r){"use strict";var o=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.loopCallHook=t.transitionTo=t.onTriggerEachHook=t.callHook=t.callBeforeRouteLeave=t.HOOKLIST=t.ERRORHOOK=void 0;var n=r(789),a=r(890),i=r(147);function u(e,t,r){var o,a=n.getUniCachePage(0);if(Object.keys(a).length>0){var i=void 0;switch("h5"===e.options.platform?i=a.$options.beforeRouteLeave:null!=a.$vm&&(i=a.$vm.$options.beforeRouteLeave),n.getDataType(i)){case"[object Array]":o=(o=i[0]).bind(a);break;case"[object Function]":o=i.bind(a.$vm)}}return l(o,t,r,e)}function l(e,t,r,o,n){return void 0===n&&(n=!0),new Promise((function(a){null!=e&&e instanceof Function?!0===n?e(t,r,a,o,!1):(e(t,r,(function(){}),o,!1),a()):a()}))}function p(e,t,r,o,a,i){"h5"===e.options.platform?c(a,0,i,e,t,r,o):c(a.slice(0,4),0,(function(){i((function(){c(a.slice(4),0,n.voidFun,e,t,r,o)}))}),e,t,r,o)}function c(e,r,i,u,l,p,s){var f=n.routesForMapRoute(u,l.path,["finallyPathMap","pathMap"]);if(e.length-1<r)return i();var h=e[r],y=t.ERRORHOOK[0],v=n.forMatNextToFrom(u,l,p),g=v.matTo,d=v.matFrom;h(u,g,d,f).then((function(t){if(!1===t)y({type:0,msg:"管道函数传递 false 导航被终止!",matTo:g,matFrom:d,nextTo:t},u);else if("string"==typeof t||"object"==typeof t){var n=s,f=t;if("object"==typeof t){var h=t.NAVTYPE;f=o(t,["NAVTYPE"]),null!=h&&(n=h)}a.navjump(f,u,n,{from:p,next:i})}else null==t?(r++,c(e,r,i,u,l,p,s)):y({type:1,msg:"管道函数传递未知类型，无法被识别。导航被终止！",matTo:g,matFrom:d,nextTo:t},u)}))}t.ERRORHOOK=[function(e,t){return t.lifeCycle.routerErrorHooks[0](e,t)}],t.HOOKLIST=[function(e,t,r,o){return l(e.lifeCycle.routerBeforeHooks[0],t,r,e)},function(e,t,r,o){return u(e,t,r)},function(e,t,r,o){return l(e.lifeCycle.beforeHooks[0],t,r,e)},function(e,t,r,o){return l(o.beforeEnter,t,r,e)},function(e,t,r,o){return l(e.lifeCycle.afterHooks[0],t,r,e,!1)},function(e,t,r,o){return e.$lockStatus=!1,"h5"===e.options.platform&&i.proxyH5Mount(e),l(e.lifeCycle.routerAfterHooks[0],t,r,e,!1)}],t.callBeforeRouteLeave=u,t.callHook=l,t.onTriggerEachHook=function(e,r,o,n,a){var i=[];switch(n){case"beforeEach":i=t.HOOKLIST.slice(0,3);break;case"afterEach":i=t.HOOKLIST.slice(4);break;case"beforeEnter":i=t.HOOKLIST.slice(3,4)}p(o,e,r,"push",i,a)},t.transitionTo=p,t.loopCallHook=c},890:function(e,t,r){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.createRoute=t.forceGuardEach=t.navBack=t.navjump=t.lockNavjump=void 0;var n=r(366),a=r(99),i=r(789),u=r(169),l=r(845),p=r(169);function c(e,t,r,o){i.lockDetectWarn(t,e,r,(function(){"h5"!==t.options.platform&&(t.$lockStatus=!0),s(e,t,r,void 0,o)}))}function s(e,t,r,c,s){var f=a.queryPageToMap(e,t).rule;f.type=n.navtypeToggle[r];var h=i.paramsToQuery(t,f),y=a.resolveQuery(h,t);if("h5"===t.options.platform)"push"!==r&&(r="replace"),null!=c?c.next(o({replace:"push"!==r},y)):t.$route[r](y,y.success||i.voidFun,y.fail||i.voidFun);else{var v={path:""};if(null==c){var g=i.routesForMapRoute(t,y.path,["finallyPathMap","pathMap"]);y=o(o(o({},g),{params:{}}),y),v=l.createToFrom(y,t)}else v=c.from;l.createFullPath(y,v),u.transitionTo(t,y,v,r,p.HOOKLIST,(function(e){uni[n.navtypeToggle[r]](y,!0,e,s)}))}}function f(e,t,r){void 0===t&&(t=0);var u={name:"",meta:{},path:"",fullPath:"",NAVTYPE:"",query:{},params:{}};if("h5"===e.options.platform){var l={path:""};l=null!=r?r:e.$route.currentRoute;var p=i.copyData(l.params);delete p.__id__;var c=a.parseQuery(o(o({},p),i.copyData(l.query)),e);l=o(o({},l),{query:c}),u.path=l.path,u.fullPath=l.fullPath||"",u.query=l.query||{},u.NAVTYPE=n.rewriteMethodToggle[l.type||"reLaunch"]}else{var s={};if(null!=r)s=o(o({},r),{openType:r.type});else{var f=i.getUniCachePage(t);if(0===Object.keys(f).length)throw e.options.routerErrorEach({type:3,msg:"不存在的页面栈，请确保有足够的页面可用，当前 level:"+t},e),new Error("不存在的页面栈，请确保有足够的页面可用，当前 level:"+t);s=o(o({},f.$page),{query:f.options,fullPath:decodeURIComponent(f.$page.fullPath)}),"app-plus"!==e.options.platform&&(s.path="/"+f.route)}var h=s.openType;u.query=s.query,u.path=s.path,u.fullPath=s.fullPath,u.NAVTYPE=n.rewriteMethodToggle[h||"reLaunch"]}var y=i.routesForMapRoute(e,u.path,["finallyPathMap","pathMap"]),v=o(o({},u),y);return v.query=a.parseQuery(v.query,e),v}t.lockNavjump=c,t.navjump=s,t.navBack=function(e,t,r,o){i.lockDetectWarn(e,t,r,(function(){if("h5"===e.options.platform)e.$route.go(-t);else{e.$lockStatus=!0;var n=f(e,t),a={path:n.path,query:n.query};if("[object Object]"===i.getDataType(o)){var u=o,l=u.animationDuration,p=u.animationType;null!=l&&(a.animationDuration=l),null!=p&&(a.animationType=p)}s(a,e,r)}}))},t.forceGuardEach=function(e,t,r){if(void 0===t&&(t="replaceAll"),void 0===r&&(r=!1),"h5"===e.options.platform)throw new Error("在h5端上使用：forceGuardEach 是无意义的，目前 forceGuardEach 仅支持在非h5端上使用");var o=i.getUniCachePage(0);0===Object.keys(o).length&&e.options.routerErrorEach({type:3,msg:"不存在的页面栈，请确保有足够的页面可用，当前 level:0"},e);var n=o;c({path:"/"+n.route,query:n.options},e,t,r)},t.createRoute=f},845:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.proxyPageHook=t.createFullPath=t.createToFrom=void 0;var o=r(789),n=r(890),a=r(99);t.createToFrom=function(e,t){var r=o.getUniCachePage(0);return"[object Array]"===o.getDataType(r)?o.deepClone(e):n.createRoute(t)},t.createFullPath=function(e,t){if(null==e.fullPath){var r=a.stringifyQuery(e.query);e.fullPath=e.path+r}null==t.fullPath&&(r=a.stringifyQuery(t.query),t.fullPath=t.path+r)},t.proxyPageHook=function(e,t,r,n){o.replaceHook(t,e,r,n)}},99:function(e,t,r){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.stringifyQuery=t.parseQuery=t.resolveQuery=t.queryPageToMap=void 0;var n=r(789),a=r(169),i=r(883),u=/[!'()*]/g,l=function(e){return"%"+e.charCodeAt(0).toString(16)},p=/%2C/g,c=function(e){return encodeURIComponent(e).replace(u,l).replace(p,",")};t.queryPageToMap=function(e,t){var r={},i="",u=e.success,l=e.fail;if("[object Object]"===n.getDataType(e)){var p=e;if(null!=p.path){var c=n.urlToJson(p.path),s=c.path,f=c.query;i=n.routesForMapRoute(t,s,["finallyPathList","pathMap"]),r=o(o({},f),e.query||{}),p.path=s,p.query=r,delete e.params}else null!=p.name?null==(i=t.routesMap.nameMap[p.name])?a.ERRORHOOK[0]({type:2,msg:"命名路由为："+p.name+" 的路由，无法在路由表中找到！",toRule:e},t):(r=e.params||{},delete e.query):a.ERRORHOOK[0]({type:2,msg:e+" 解析失败，请检测当前路由表下是否有包含。",toRule:e},t)}else e=n.urlToJson(e),i=n.routesForMapRoute(t,e.path,["finallyPathList","pathMap"]),r=e.query;if("h5"===t.options.platform){n.getRoutePath(i,t).finallyPath.includes(":")&&null==e.name&&a.ERRORHOOK[0]({type:2,msg:"当有设置 alias或者aliasPath 为动态路由时，不允许使用 path 跳转。请使用 name 跳转！",route:i},t);var h=e.complete,y=e.success,v=e.fail;if("[object Function]"===n.getDataType(h)){var g=function(e,t){"[object Function]"===n.getDataType(t)&&t.apply(this,e),h.apply(this,e)};u=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];g.call(this,e,y)},l=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];g.call(this,e,v)}}}var d=e;return"[object Function]"===n.getDataType(d.success)&&(d.success=u),"[object Function]"===n.getDataType(d.fail)&&(d.fail=l),{rule:d,route:i,query:r}},t.resolveQuery=function(e,t){var r="query";null!=e.params&&(r="params"),null!=e.query&&(r="query");var o=n.copyData(e[r]||{}),a=t.options.resolveQuery;if(a){var u=a(o);"[object Object]"!==n.getDataType(u)?i.warn("请按格式返回参数： resolveQuery?:(jsonQuery:{[propName: string]: any;})=>{[propName: string]: any;}",t):e[r]=u}else{if(!n.assertDeepObject(o))return e;var l=JSON.stringify(o);e[r]={query:l}}return e},t.parseQuery=function(e,t){var r=t.options.parseQuery;if(r)e=r(n.copyData(e)),"[object Object]"!==n.getDataType(e)&&i.warn("请按格式返回参数： parseQuery?:(jsonQuery:{[propName: string]: any;})=>{[propName: string]: any;}",t);else if(Reflect.get(e,"query")){var o=Reflect.get(e,"query"),a={query:decodeURIComponent(o)};try{if("object"==typeof(a=JSON.parse(a.query)))return a}catch(e){i.warn("尝试解析深度对象失败，按原样输出。"+e,t)}}return e},t.stringifyQuery=function(e){var t=e?Object.keys(e).map((function(t){var r=e[t];if(void 0===r)return"";if(null===r)return c(t);if(Array.isArray(r)){var o=[];return r.forEach((function(e){void 0!==e&&(null===e?o.push(c(t)):o.push(c(t)+"="+c(e)))})),o.join("&")}return c(t)+"="+c(r)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}},314:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.rewriteMethod=void 0;var o=r(366),n=r(789),a=r(883),i=r(809),u=["navigateTo","redirectTo","reLaunch","switchTab","navigateBack"];t.rewriteMethod=function(e){!1===e.options.keepUniOriginNav&&u.forEach((function(t){var r=uni[t];uni[t]=function(u,l,p,c){void 0===l&&(l=!1),l?i.uniOriginJump(e,r,t,u,p,c):("app-plus"===e.options.platform&&0===Object.keys(e.appMain).length&&(e.appMain={NAVTYPE:t,path:u.url}),function(e,t,r){if("app-plus"===r.options.platform){var i=null;e&&(i=e.openType),null!=i&&"appLaunch"===i&&(t="reLaunch")}if("reLaunch"===t&&'{"url":"/"}'===JSON.stringify(e)&&(a.warn("uni-app 原生方法：reLaunch({url:'/'}) 默认被重写啦！你可以使用 this.$Router.replaceAll() 或者 uni.reLaunch({url:'/?xxx=xxx'})",r,!0),t="navigateBack",e={from:"backbutton"}),"navigateBack"===t){var u=1;null==e&&(e={delta:1}),"[object Number]"===n.getDataType(e.delta)&&(u=e.delta),r.back(u,e)}else{var l=o.rewriteMethodToggle[t],p=e.url;if(p.startsWith("/")||a.warn("uni-app 原生方法被重写时，只能使用绝对路径进行跳转。"+JSON.stringify(e),r,!0),"switchTab"===t){var c=n.routesForMapRoute(r,p,["pathMap","finallyPathList"]),s=n.getRoutePath(c,r).finallyPath;"[object Array]"===n.getDataType(s)&&a.warn("uni-app 原生方法跳转路径为："+p+"。此路为是tab页面时，不允许设置 alias 为数组的情况，并且不能为动态路由！当然你可以通过通配符*解决！",r,!0),"*"===s&&a.warn("uni-app 原生方法跳转路径为："+p+"。在路由表中找不到相关路由表！当然你可以通过通配符*解决！",r,!0),p=s}var f=e,h=f.events,y=f.success,v=f.fail,g=f.complete,d=f.animationType,b={path:p,events:h,success:y,fail:v,complete:g,animationDuration:f.animationDuration,animationType:d};r[l](n.notDeepClearNull(b))}}(u,t,e))}}))}},963:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createRouter=t.RouterMount=void 0;var o=r(282),n=r(789),a=r(662),i=r(460),u=r(890),l=r(314);t.createRouter=function(e){var t=n.assertNewOptions(e),r={options:t,mount:[],appProxyHook:o.appProxyHook,appletsProxyHook:o.indexProxyHook,appMain:{},$route:null,$lockStatus:!1,routesMap:{},lifeCycle:a.registerRouterHooks(o.lifeCycle,t),push:function(e){u.lockNavjump(e,r,"push")},replace:function(e){u.lockNavjump(e,r,"replace")},replaceAll:function(e){u.lockNavjump(e,r,"replaceAll")},pushTab:function(e){u.lockNavjump(e,r,"pushTab")},back:function(e,t){void 0===e&&(e=1),u.navBack(this,e,"back",t)},forceGuardEach:function(e,t){u.forceGuardEach(r,e,t)},beforeEach:function(e){a.registerEachHooks(r,"beforeHooks",e)},afterEach:function(e){a.registerEachHooks(r,"afterHooks",e)},install:function(e){l.rewriteMethod(this),i.initMixins(e,this),Object.defineProperty(e.prototype,"$Router",{get:function(){return r}}),Object.defineProperty(e.prototype,"$Route",{get:function(){return u.createRoute(r)}})}};return r.beforeEach((function(e,t,r){return r()})),r.afterEach((function(){})),r},t.RouterMount=function(e,t,r){if(void 0===r&&(r="#app"),"[object Array]"!==n.getDataType(t.mount))throw new Error("挂载路由失败，router.app 应该为数组类型。当前类型："+typeof t.mount);if(t.mount.push({app:e,el:r}),"h5"===t.options.platform){var o=t.$route;o.replace({path:o.currentRoute.fullPath})}}},809:function(e,t,r){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(n,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function u(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}l((o=o.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var r,o,n,a,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,o&&(n=2&a[0]?o.return:a[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;switch(o=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((n=(n=i.trys).length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){i.label=a[1];break}if(6===a[0]&&i.label<n[1]){i.label=n[1],n=a;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(a);break}n[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},i=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.formatOriginURLQuery=t.uniOriginJump=void 0;var u=r(99),l=r(789),p=0;function c(e,t,r){var o,n=t.url,a=t.path,i=t.query,p=t.animationType,c=t.animationDuration,s=t.events,f=t.success,h=t.fail,y=t.complete,v=u.stringifyQuery(i||{}),g=""===v?a||n:(a||n)+v,d={};return"app-plus"===e.options.platform&&"navigateBack"!==r&&(d=(null===(o=e.options.APP)||void 0===o?void 0:o.animation)||{}),l.notDeepClearNull({url:g,animationType:p||d.animationType,animationDuration:c||d.animationDuration,events:s,success:f,fail:h,complete:y})}t.uniOriginJump=function(e,t,r,u,s,f){var h=c(e,u,r),y=h.complete,v=i(h,["complete"]);0===p&&l.restPageHook(e),null!=f&&!1===f?(p++,y&&y.apply(null,{msg:"forceGuardEach强制触发并且不执行跳转"}),s&&s.apply(null,{msg:"forceGuardEach强制触发并且不执行跳转"})):t(o(o({},v),{complete:function(){for(var t,r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return n(this,void 0,void 0,(function(){var o,n;return a(this,(function(a){return 0===p&&(p++,"app-plus"===e.options.platform&&((o=plus.nativeObj.View.getViewById("router-loadding"))&&o.close(),(n=null===(t=e.options.APP)||void 0===t?void 0:t.launchedHook)&&n())),y&&y.apply(null,r),s&&s.apply(null,r),[2]}))}))}}))},t.formatOriginURLQuery=c}},t={},function r(o){if(t[o])return t[o].exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,r),n.exports}(607);var e,t}));