_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"20a2":function(e,t,n){e.exports=n("nOHt")},"4hdO":function(e,t,n){"use strict";function r(e){document.body.scrollTop=document.documentElement.scrollTop=e}function a(e,t){requestAnimationFrame||r(e);var n=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop);if(n!==e){var a=e-n,i=void 0;requestAnimationFrame((function e(o){i||(i=o);var c=o-i,s=Math.min(1,c/t);r(n+a*(s*(2-s))),s<1&&requestAnimationFrame(e)}))}}n.d(t,"a",(function(){return a}))},"5PhN":function(e,t,n){"use strict";var r=n("nKUr"),a=n("YFqc"),i=n.n(a);n("3mOU");t.a=function(e){var t=e.href,n=e.title,a=e.icon,o=e.children,c=Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("h4",{children:[a&&Object(r.jsx)("span",{className:"card-content-icon",children:a}),n]}),o]});return void 0!==t&&(c=t.match(/^https?:\/\//)?Object(r.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",className:"card-link",children:c}):Object(r.jsx)(i.a,{href:t,children:Object(r.jsx)("a",{className:"card-link",children:c})})),c}},"7ljp":function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return u})),n.d(t,"MDXProvider",(function(){return f})),n.d(t,"mdx",(function(){return b})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return d}));var r=n("q1tI"),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),d=function(e){return function(t){var n=p(t.components);return a.a.createElement(e,o({},t,{components:n}))}},p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"===typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?a.a.createElement(f,s(s({ref:t},c),{},{components:n})):a.a.createElement(f,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"===typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},A4L8:function(e,t,n){"use strict";var r=n("cpVT"),a=n("nKUr"),i=n("UMc4");n("Divk");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){return Object(a.jsx)(i.a,c(c({narrow:!0,hashSmoothScroll:!0},e),{},{children:Object(a.jsx)("div",{className:"guide",children:e.children})}))}},SjRH:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n("cpVT"),a=n("dhJC"),i=(n("q1tI"),n("7ljp")),o=(n("5PhN"),n("xMSN"),n("ySU+"));n("YFqc");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={title:"What's new in Vert.x 4"},u={meta:l},d=o.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.mdx)(d,s(s(s({},u),n),{},{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",s({},{id:"whats-new-in-vertx-4"}),Object(i.mdx)("a",s({parentName:"h1"},{"aria-hidden":!0,tabIndex:-1,className:"heading-anchor",href:"#whats-new-in-vertx-4"})),"What\u2019s new in Vert.x 4"),Object(i.mdx)("p",null,"Vert.x 4 comes with plenty of new ex\xadcit\xading fea\xadtures, some of them have been de\xadvel\xadoped in Vert.x 3 and made avail\xadable\nas tech pre\xadviews."),Object(i.mdx)("p",null,"Here is an high\xadlight of the most im\xadpor\xadtant fea\xadtures sup\xadported in Vert.x 4."),Object(i.mdx)("h2",s({},{id:"future-model"}),Object(i.mdx)("a",s({parentName:"h2"},{"aria-hidden":!0,tabIndex:-1,className:"heading-anchor",href:"#future-model"})),"Future model"),Object(i.mdx)("p",null,"Vert.x 4 uses fu\xadtures over call\xadbacks for mod\xadel\xadling asyn\xadchro\xadnous op\xader\xada\xadtions."),Object(i.mdx)("h2",s({},{id:"distributed-tracing"}),Object(i.mdx)("a",s({parentName:"h2"},{"aria-hidden":!0,tabIndex:-1,className:"heading-anchor",href:"#distributed-tracing"})),"Distributed tracing"),Object(i.mdx)("p",null,"Mon\xadi\xadtor your mi\xadcroser\xadvices with Vert.x trac\xading sup\xadport\xading both ",Object(i.mdx)("a",s({parentName:"p"},{href:"https://opentracing.io/"}),"Open\xadtrac\xading")," or ",Object(i.mdx)("a",s({parentName:"p"},{href:"https://zipkin.io/"}),"Zip\xadking"),"."),Object(i.mdx)("h2",s({},{id:"reactive-sql-clients"}),Object(i.mdx)("a",s({parentName:"h2"},{"aria-hidden":!0,tabIndex:-1,className:"heading-anchor",href:"#reactive-sql-clients"})),"Reactive SQL clients"),Object(i.mdx)("p",null,"A new set of high per\xadfor\xadmance re\xadac\xadtive SQL clients, fully in\xadte\xadgrated with Vert.x met\xadrics and Vert.x trac\xading."),Object(i.mdx)("h2",s({},{id:"sql-templating"}),Object(i.mdx)("a",s({parentName:"h2"},{"aria-hidden":!0,tabIndex:-1,className:"heading-anchor",href:"#sql-templating"})),"SQL templating"),Object(i.mdx)("p",null,"SQL Client Tem\xadplates is a li\xadbrary de\xadsigned to fa\xadcil\xadi\xadtate the ex\xade\xadcu\xadtion of SQL queries."),Object(i.mdx)("h2",s({},{id:"web"}),Object(i.mdx)("a",s({parentName:"h2"},{"aria-hidden":!0,tabIndex:-1,className:"heading-anchor",href:"#web"})),"Web"),Object(i.mdx)("p",null,"Vert.x web sup\xadport for sub routers have been im\xadproved to fix many of the flaws in 3.x."),Object(i.mdx)("p",null,"Web ses\xadsions can now be stored on a ex\xadter\xadnal data\xadbase, redis as a back\xadend is pro\xadvided out of the box."),Object(i.mdx)("p",null,"Web val\xadi\xadda\xadtion has never been so easy using the lat\xadest Json Schema stan\xaddards thanks to Vert.x Web val\xadi\xadda\xadtion."),Object(i.mdx)("p",null,"The re\xadvamped Ope\xadnAPI im\xadple\xadmen\xadta\xadtion uses it to en\xadforce Con\xadtract Dri\xadven De\xadvel\xadop\xadment."),Object(i.mdx)("h2",s({},{id:"reactive-redis-client"}),Object(i.mdx)("a",s({parentName:"h2"},{"aria-hidden":!0,tabIndex:-1,className:"heading-anchor",href:"#reactive-redis-client"})),"Reactive Redis client"),Object(i.mdx)("p",null,"New client API with sup\xadport for all redis con\xadnec\xadtion modes, sin\xadgle, sen\xadtinel and clus\xadter."),Object(i.mdx)("p",null,"Un\xadder\xadly\xading pro\xadto\xadcol up\xadgraded to han\xaddle the new ",Object(i.mdx)("inlineCode",{parentName:"p"},"RESP3")," for\xadmat (which al\xadlows richer types to be used)."),Object(i.mdx)("p",null,"Sup\xadport for all redis com\xadmands (ex\xadist\xading and fu\xadture added ones), as well as, sup\xadport for any redis ex\xadten\xadsion is now\npos\xadsi\xadble using the same sin\xadgle api."),Object(i.mdx)("h2",s({},{id:"authentication-and-authorization"}),Object(i.mdx)("a",s({parentName:"h2"},{"aria-hidden":!0,tabIndex:-1,className:"heading-anchor",href:"#authentication-and-authorization"})),"Authentication and Authorization"),Object(i.mdx)("p",null,"New mod\xadules ",Object(i.mdx)("inlineCode",{parentName:"p"},"vertx-auth-properties")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"vertx-auth-ldap")," to re\xadplace the dep\xadre\xadcated ",Object(i.mdx)("inlineCode",{parentName:"p"},"shiro")," auth."),Object(i.mdx)("p",null,"New mod\xadule ",Object(i.mdx)("inlineCode",{parentName:"p"},"vertx-auth-sql")," to work with re\xadac\xadtive sql clients in\xadstead of block\xading jdbc clients."),Object(i.mdx)("p",null,"New mod\xadule ",Object(i.mdx)("inlineCode",{parentName:"p"},"vertx-auth-webauth")," as a FIDO2 ver\xadi\xadfied im\xadple\xadmen\xadta\xadtion of FIDO2/We\xadbau\xadthn Relay Party."),Object(i.mdx)("h2",s({},{id:"improved-metrics"}),Object(i.mdx)("a",s({parentName:"h2"},{"aria-hidden":!0,tabIndex:-1,className:"heading-anchor",href:"#improved-metrics"})),"Improved metrics"),Object(i.mdx)("p",null,"????"))}p.isMDXComponent=!0},UMc4:function(e,t,n){"use strict";var r=n("nKUr"),a=n("TSYQ"),i=n.n(a),o=n("q1tI"),c=n("20a2"),s=n.n(c),l=n("4hdO"),u=n("anbt"),d=n("Cgje"),p=n("naWs");n("05nU");function f(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw i}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.a=function(e){var t=e.meta,n=void 0===t?{}:t,a=e.narrow,c=e.hashSmoothScroll,m=void 0!==c&&c,h=e.children,b=Object(o.useContext)(u.a.State),O=Object(o.useRef)(),j=Object(o.useCallback)((function(e,t){var n=e.substring(e.indexOf("#")+1),r=document.getElementById(n);if(r){var a=r.offsetTop-b.height;Object(l.a)(a,t?200:500)}}),[b.height]),v=Object(o.useCallback)((function(e){j(e.newURL)}),[j]),x=Object(o.useCallback)((function(e){var t,n=f(e.current.querySelectorAll("a[href^='#']"));try{var r=function(){var e=t.value;e.onclick=function(t){t.preventDefault();var n=window.location.href;n.substring(n.indexOf("#"))!==e.getAttribute("href")?s.a.push(window.location.pathname+e.getAttribute("href")):j(n)}};for(n.s();!(t=n.n()).done;)r()}catch(a){n.e(a)}finally{n.f()}}),[j]);return Object(o.useEffect)((function(){return m&&(s.a.events.on("hashChangeStart",j),window.addEventListener("hashchange",v),x(O),j(window.location.href,!0)),function(){m&&(window.removeEventListener("hashchange",v),s.a.events.off("hashChangeStart",j))}}),[v,j,x,m]),Object(r.jsxs)("main",{className:"page",children:[Object(r.jsx)(d.a,{title:n.title}),Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)("div",{className:i()("container",{"container-narrow":a}),ref:O,children:h})}),Object(r.jsx)(p.a,{})]})}},dhJC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},qIom:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/whats-new-in-vert-x-4",function(){return n("SjRH")}])},xMSN:function(e,t,n){"use strict";var r=n("nKUr"),a=(n("XXpc"),n("TSYQ")),i=n.n(a);t.a=function(e){var t=e.columns,n=void 0===t?1:t,a=e.children;return Object(r.jsx)("div",{className:i()("cards","cards-cols-".concat(n)),children:a})}},"ySU+":function(e,t,n){"use strict";var r=n("cpVT"),a=n("nKUr"),i=n("A4L8");n("53C2");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){return Object(a.jsx)(i.a,c(c({},e),{},{children:Object(a.jsx)("div",{className:"intro",children:e.children})}))}}},[["qIom",0,2,1,4,3]]]);