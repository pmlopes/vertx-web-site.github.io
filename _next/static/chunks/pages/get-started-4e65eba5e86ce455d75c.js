_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"20a2":function(e,t,n){e.exports=n("nOHt")},"4hdO":function(e,t,n){"use strict";function a(e){document.body.scrollTop=document.documentElement.scrollTop=e}function r(e,t){requestAnimationFrame||a(e);var n=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop);if(n!==e){var r=e-n,s=void 0;requestAnimationFrame((function e(c){s||(s=c);var o=c-s,m=Math.min(1,o/t);a(n+r*(m*(2-m))),m<1&&requestAnimationFrame(e)}))}}n.d(t,"a",(function(){return r}))},"5PhN":function(e,t,n){"use strict";var a=n("nKUr"),r=n("YFqc"),s=n.n(r);n("3mOU");t.a=function(e){var t=e.href,n=e.title,r=e.icon,c=e.children,o=Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsxs)("h4",{children:[r&&Object(a.jsx)("span",{className:"card-content-icon",children:r}),n]}),c]});return void 0!==t&&(o=t.match(/^https?:\/\//)?Object(a.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",className:"card-link",children:o}):Object(a.jsx)(s.a,{href:t,children:Object(a.jsx)("a",{className:"card-link",children:o})})),o}},"7ljp":function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return d})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return b})),n.d(t,"useMDXComponents",(function(){return i})),n.d(t,"withMDXComponents",(function(){return p}));var a=n("q1tI"),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),p=function(e){return function(t){var n=i(t.components);return r.a.createElement(e,c({},t,{components:n}))}},i=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"===typeof e?e(t):m(m({},t),e)),n},u=function(e){var t=i(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=i(n),p=a,u=d["".concat(c,".").concat(p)]||d[p]||j[p]||s;return n?r.a.createElement(u,m(m({ref:t},o),{},{components:n})):r.a.createElement(u,m({ref:t},o))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var s=n.length,c=new Array(s);c[0]=h;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"===typeof e?e:a,c[1]=o;for(var l=2;l<s;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},A4L8:function(e,t,n){"use strict";var a=n("cpVT"),r=n("nKUr"),s=n("UMc4");n("Divk");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){return Object(r.jsx)(s.a,o(o({narrow:!0,hashSmoothScroll:!0},e),{},{children:Object(r.jsx)("div",{className:"guide",children:e.children})}))}},DHTk:function(e,t,n){"use strict";var a=n("nKUr"),r=n("TSYQ"),s=n.n(r),c=n("q1tI");n("i0N+");t.a=function(e){var t=e.wide,n=e.children,r=c.Children.map(n,(function(e){return e.props.title})),o=Object(c.useState)(r[0]),m=o[0],l=o[1];return Object(a.jsxs)("div",{className:s()("code-examples",{wide:t}),children:[Object(a.jsx)("div",{className:"code-examples-tabs",children:r.map((function(e){return Object(a.jsx)("div",{className:s()("code-examples-tab",{active:m===e}),onClick:function(){return l(e)},children:e},e)}))}),Object(a.jsx)("div",{className:"code-examples-content",children:c.Children.map(n,(function(e){return Object(c.cloneElement)(e,{active:m===e.props.title})}))})]})}},Sp2p:function(e,t,n){"use strict";var a=n("nKUr"),r=n("TSYQ"),s=n.n(r);n("wL3L");t.a=function(e){e.title;var t=e.active,n=e.children;return Object(a.jsx)("div",{className:s()("code-examples-example",{active:t}),children:n})}},UMc4:function(e,t,n){"use strict";var a=n("nKUr"),r=n("TSYQ"),s=n.n(r),c=n("q1tI"),o=n("20a2"),m=n.n(o),l=n("4hdO"),d=n("anbt"),p=n("Cgje"),i=n("naWs");n("05nU");function u(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,c=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){o=!0,s=e},f:function(){try{c||null==n.return||n.return()}finally{if(o)throw s}}}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.a=function(e){var t=e.meta,n=void 0===t?{}:t,r=e.narrow,o=e.hashSmoothScroll,j=void 0!==o&&o,h=e.children,b=Object(c.useContext)(d.a.State),O=Object(c.useRef)(),x=Object(c.useCallback)((function(e,t){var n=e.substring(e.indexOf("#")+1),a=document.getElementById(n);if(a){var r=a.offsetTop-b.height;Object(l.a)(r,t?200:500)}}),[b.height]),N=Object(c.useCallback)((function(e){x(e.newURL)}),[x]),f=Object(c.useCallback)((function(e){var t,n=u(e.current.querySelectorAll("a[href^='#']"));try{var a=function(){var e=t.value;e.onclick=function(t){t.preventDefault();var n=window.location.href;n.substring(n.indexOf("#"))!==e.getAttribute("href")?m.a.push(window.location.pathname+e.getAttribute("href")):x(n)}};for(n.s();!(t=n.n()).done;)a()}catch(r){n.e(r)}finally{n.f()}}),[x]);return Object(c.useEffect)((function(){return j&&(m.a.events.on("hashChangeStart",x),window.addEventListener("hashchange",N),f(O),x(window.location.href,!0)),function(){j&&(window.removeEventListener("hashchange",N),m.a.events.off("hashChangeStart",x))}}),[N,x,f,j]),Object(a.jsxs)("main",{className:"page",children:[Object(a.jsx)(p.a,{title:n.title}),Object(a.jsx)("div",{className:"page-content",children:Object(a.jsx)("div",{className:s()("container",{"container-narrow":r}),ref:O,children:h})}),Object(a.jsx)(i.a,{})]})}},WBQt:function(e,t){e.exports="/_next/static/images/starter-screenshot-a834ef7edd5b3a6b5229664ab5a45917.png"},ZTs3:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return x})),n.d(t,"default",(function(){return g}));var a=n("cpVT"),r=n("dhJC"),s=(n("q1tI"),n("7ljp")),c=n("5PhN"),o=n("xMSN"),m=n("nKUr"),l=n("A4L8");n("rNF+");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i=function(e){return Object(m.jsx)(l.a,p(p({},e),{},{children:Object(m.jsx)("div",{className:"get-started",children:e.children})}))},u=(n("YFqc"),n("Sp2p")),j=n("DHTk"),h=n("+AYO");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={title:"Get started"},N={meta:x},f=i;function g(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.mdx)(f,O(O(O({},N),a),{},{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",O({},{id:"get-started-with-vertx"}),Object(s.mdx)("a",O({parentName:"h1"},{"aria-hidden":!0,tabIndex:-1,className:"heading-anchor",href:"#get-started-with-vertx"})),"Get started with Vert.x"),Object(s.mdx)("p",null,"In this guide, you\u2019ll learn how to get started with a new Vert.x Web project."),Object(s.mdx)("p",null,"Be\xadfore start\xading, you need:"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"JDK 1.8 or higher"),Object(s.mdx)("li",{parentName:"ul"},"A text ed\xadi\xadtor or IDE"),Object(s.mdx)("li",{parentName:"ul"},"Maven 3 or higher"),Object(s.mdx)("li",{parentName:"ul"},"curl or ",Object(s.mdx)("a",O({parentName:"li"},{href:"https://httpie.org/"}),"HTTPie")," or a browser to per\xadform HTTP re\xadquests")),Object(s.mdx)("h2",O({},{id:"1-bootstrap"}),Object(s.mdx)("a",O({parentName:"h2"},{"aria-hidden":!0,tabIndex:-1,className:"heading-anchor",href:"#1-bootstrap"})),Object(s.mdx)("span",{className:"get-started-step"},"1")," Bootstrap"),Object(s.mdx)("p",null,"To cre\xadate a new project, go to ",Object(s.mdx)("a",O({parentName:"p"},{href:"https://start.vertx.io"}),"start.vertx.io"),"."),Object(s.mdx)("a",{href:"https://start.vertx.io",className:"get-started-screenshot"},Object(s.mdx)("img",{src:n("WBQt")})),Object(s.mdx)("p",null,"Choose the ver\xadsion of Vert.x you want to use, choose Java as the lan\xadguage, Maven as the build tool, and\ntype the group id and ar\xadti\xadfact id you want. Then, add ",Object(s.mdx)("strong",{parentName:"p"},"Vert.x Web")," as a de\xadpen\xaddency by typ\xading it in the \u201cDe\xadpen\xadden\xadcies\u201d text box. When you\u2019re done, hit the ",Object(s.mdx)("strong",{parentName:"p"},"Gen\xader\xadate Project")," but\xadton.\nSave the zip on your com\xadputer and unzip it in a folder of your choice."),Object(s.mdx)("p",null,"The gen\xader\xadated project con\xadtains:"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"The Maven build de\xadscrip\xadtor ",Object(s.mdx)("inlineCode",{parentName:"li"},"pom.xml")," con\xadfig\xadured to build and run your ap\xadpli\xadca\xadtion"),Object(s.mdx)("li",{parentName:"ul"},"A sam\xadple Ver\xadti\xadcle and a sam\xadple test using JUnit 5"),Object(s.mdx)("li",{parentName:"ul"},"An ed\xadi\xadtor con\xadfig\xadu\xadra\xadtion to en\xadforce code style"),Object(s.mdx)("li",{parentName:"ul"},"A Git con\xadfig\xadu\xadra\xadtion to ig\xadnore files")),Object(s.mdx)("p",null,"If you want to try it now, you can down\xadload this sam\xadple project using"),Object(s.mdx)("a",{href:"https://start.vertx.io/starter.zip?vertxDependencies=vertx-web&vertxVersion=".concat(h.latestRelease.version,"&jdkVersion=11")},"Maven")," or using ",Object(s.mdx)("a",{href:"https://start.vertx.io/starter.zip?vertxDependencies=vertx-web&buildTool=gradle&vertxVersion=".concat(h.latestRelease.version,"&jdkVersion=11")},"Gradle"),".",Object(s.mdx)("h2",O({},{id:"2-code"}),Object(s.mdx)("a",O({parentName:"h2"},{"aria-hidden":!0,tabIndex:-1,className:"heading-anchor",href:"#2-code"})),Object(s.mdx)("span",{className:"get-started-step"},"2")," Code"),Object(s.mdx)("p",null,"Open the project in the ed\xadi\xadtor of your choice and nav\xadi\xadgate to ",Object(s.mdx)("inlineCode",{parentName:"p"},"src/main/java/com/example/starter/MainVerticle.java"),".\nThis source file con\xadtains a sam\xadple ",Object(s.mdx)("inlineCode",{parentName:"p"},"Verticle")," (the Vert.x de\xadploy\xadment unit) that starts an HTTP server.\nYou\u2019re going to mod\xadify it to greet who\xadever per\xadforms re\xadquests to your server.\nChange the code as fol\xadlows:"),Object(s.mdx)(j.a,{mdxType:"CodeExamples"},Object(s.mdx)(u.a,{title:"Java",mdxType:"CodeExample"},Object(s.mdx)("pre",null,Object(s.mdx)("code",O({parentName:"pre"},{className:"hljs language-java"}),Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-keyword"}),"public")," ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-class"}),Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-keyword"}),"class")," ",Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-title"}),"MainVerticle")," ",Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-keyword"}),"extends")," ",Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-title"}),"AbstractVerticle")," "),"{\n  ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-meta"}),"@Override"),"\n  ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-function"}),Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-keyword"}),"public")," ",Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-keyword"}),"void")," ",Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-title"}),"start"),Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-params"}),"()")," ",Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-keyword"}),"throws")," Exception "),"{\n    ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Create a Router"),"\n    Router router = Router.router(vertx);\n\n    ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Mount the handler for all incoming requests at every path and HTTP method"),"\n    router.route().handler(context -> {\n      ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Get the address of the request"),"\n      String address = context.request().connection().remoteAddress().toString();\n      ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),'// Get the query parameter "name"'),"\n      MultiMap queryParams = context.queryParams();\n      String name = queryParams.contains(",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'"name"'),") ? queryParams.get(",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'"name"'),") : ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'"unknown"'),";\n      ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Write a json response"),"\n      context.json(\n        ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-keyword"}),"new")," JsonObject()\n          .put(",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'"name"'),", name)\n          .put(",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'"address"'),", address)\n          .put(",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'"message"'),", ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'"Hello "')," + name + ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'" connected from "')," + address)\n      );\n    });\n\n    ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Create the HTTP server"),"\n    vertx.createHttpServer()\n      ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Handle every request using the router"),"\n      .requestHandler(router)\n      ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Start listening"),"\n      .listen(",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-number"}),"8888"),")\n      ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Print the port"),"\n      .onSuccess(server ->\n        System.out.println(\n          ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'"HTTP server started on port "')," + server.actualPort()\n        )\n      );\n  }\n}\n"))),Object(s.mdx)(u.a,{title:"Kotlin",mdxType:"CodeExample"},Object(s.mdx)("pre",null,Object(s.mdx)("code",O({parentName:"pre"},{className:"hljs language-kotlin"}),Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-class"}),Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-keyword"}),"class")," ",Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-title"}),"MainVerticle")," : ",Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-type"}),"AbstractVerticle")),"() {\n  ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-keyword"}),"override")," ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-function"}),Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-keyword"}),"fun")," ",Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-title"}),"start"),Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-params"}),"()"))," {\n    ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Create a Router"),"\n    ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-keyword"}),"val")," router = Router.router(vertx)\n\n    ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Mount the handler for all incoming requests at every path and HTTP method"),"\n    router.route().handler { context ->\n      ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Get the address of the request"),"\n      ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-keyword"}),"val")," address = context.request().connection().remoteAddress().toString()\n      ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),'// Get the query parameter "name"'),"\n      ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-keyword"}),"val")," queryParams = context.queryParams()\n      ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-keyword"}),"val")," name = queryParams.",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-keyword"}),"get"),"(",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'"name"'),") ?: ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'"unknown"'),"\n      ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Write a json response"),"\n      context.json(\n          json {\n            obj(\n              ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'"name"')," to name,\n              ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'"address"')," to address,\n              ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'"message"')," to ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'"Hello ',Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-variable"}),"$name")," connected from ",Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-variable"}),"$address"),'"'),"\n            )\n          }\n      )\n    }\n\n    ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Create the HTTP server"),"\n    vertx.createHttpServer()\n        ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Handle every request using the router"),"\n        .requestHandler(router)\n        ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Start listening"),"\n        .listen(",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-number"}),"8888"),")\n        ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Print the port"),"\n        .onSuccess { server ->\n          println(",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'"HTTP server started on port "')," + server.actualPort())\n        }\n  }\n}\n"))),Object(s.mdx)(u.a,{title:"Groovy",mdxType:"CodeExample"},Object(s.mdx)("pre",null,Object(s.mdx)("code",O({parentName:"pre"},{className:"hljs language-groovy"}),Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-class"}),Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-keyword"}),"class")," ",Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-title"}),"MainVerticle")," ",Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-keyword"}),"extends")," ",Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-title"}),"AbstractVerticle")," {"),"\n  ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-meta"}),"@Override"),"\n  ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-keyword"}),"void")," start() {\n    ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Create a Router"),"\n    ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-keyword"}),"def")," router = Router.router(vertx)\n\n    ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Mount the handler for all incoming requests at every path and HTTP method"),"\n    router.route().handler { context ->\n      ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Get the address of the request"),"\n      ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-keyword"}),"def")," address = context.request().connection().remoteAddress().toString()\n      ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),'// Get the query parameter "name"'),"\n      ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-keyword"}),"def")," queryParams = context.queryParams()\n      String name = queryParams.get(",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'"name"'),") ?: ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'"unknown"'),"\n      ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Write a json response"),"\n      context.json(\n        ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-keyword"}),"new")," JsonObject()\n          .put(",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'"name"'),", name)\n          .put(",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'"address"'),", address)\n          .put(",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'"message"'),", ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'"Hello "')," + name + ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'" connected from "')," + address)\n      )\n    }\n\n    ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Create the HTTP server"),"\n    vertx.createHttpServer()\n      ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Handle every request using the router"),"\n      .requestHandler(router)\n      ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Start listening"),"\n      .listen(",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-number"}),"8888"),")\n      ",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-comment"}),"// Print the port"),"\n      .onSuccess { server ->\n        println(",Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-string"}),'"HTTP server started on port "')," + server.actualPort())\n      }\n  }\n}\n")))),Object(s.mdx)("p",null,"This code cre\xadates a Vert.x Web Router (the ob\xadject used to route HTTP re\xadquests to spe\xadcific re\xadquest han\xaddlers)\nand starts an HTTP Server on port ",Object(s.mdx)("inlineCode",{parentName:"p"},"8888"),". On each re\xadquest, it re\xadturns a JSON ob\xadject con\xadtain\xading the ad\xaddress of the re\xadquest, the query pa\xadra\xadme\xadter ",Object(s.mdx)("inlineCode",{parentName:"p"},"name"),", and a greet\xading mes\xadsage."),Object(s.mdx)("h2",O({},{id:"3-run"}),Object(s.mdx)("a",O({parentName:"h2"},{"aria-hidden":!0,tabIndex:-1,className:"heading-anchor",href:"#3-run"})),Object(s.mdx)("span",{className:"get-started-step"},"3")," Run"),Object(s.mdx)("p",null,"To run the code, open a ter\xadmi\xadnal and nav\xadi\xadgate to your project folder.\nBuild the ap\xadpli\xadca\xadtion as fol\xadlows:"),Object(s.mdx)("pre",null,Object(s.mdx)("code",O({parentName:"pre"},{className:"hljs language-better-shell"}),Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-meta"}),"$"),Object(s.mdx)("span",O({parentName:"code"},{className:"bash"})," mvn package"),"\n")),Object(s.mdx)("p",null,"Then, run the ap\xadpli\xadca\xadtion:"),Object(s.mdx)("pre",null,Object(s.mdx)("code",O({parentName:"pre"},{className:"hljs language-better-shell"}),Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-meta"}),"$"),Object(s.mdx)("span",O({parentName:"code"},{className:"bash"})," mvn ",Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-built_in"}),"exec"),":java"),"\nHTTP server started on port 8888\napr 03, 2020 11:49:21 AM io.vertx.core.impl.launcher.commands.VertxIsolatedDeployer\nINFO: Succeeded in deploying verticle\n")),Object(s.mdx)("p",null,"Now that the server is up and run\xadning, try to send a re\xadquest:"),Object(s.mdx)(j.a,{mdxType:"CodeExamples"},Object(s.mdx)(u.a,{title:"HTTPie",mdxType:"CodeExample"},Object(s.mdx)("pre",null,Object(s.mdx)("code",O({parentName:"pre"},{className:"hljs language-better-shell"}),Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-meta"}),"$"),Object(s.mdx)("span",O({parentName:"code"},{className:"bash"})," http http://localhost:8888"),'\nHTTP/1.1 200 OK\ncontent-length: 115\ncontent-type: application/json; charset=utf-8\n\n{\n    "address": "0:0:0:0:0:0:0:1:32806",\n    "message": "Hello unknown connected from 0:0:0:0:0:0:0:1:32806",\n    "name": "unknown"\n}\n',Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-meta"}),"\n$"),Object(s.mdx)("span",O({parentName:"code"},{className:"bash"})," http http://localhost:8888\\?name\\=",Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-string"}),'"Francesco"')),'\nHTTP/1.1 200 OK\ncontent-length: 119\ncontent-type: application/json; charset=utf-8\n\n{\n    "address": "0:0:0:0:0:0:0:1:32822",\n    "message": "Hello Francesco connected from 0:0:0:0:0:0:0:1:32822",\n    "name": "Francesco"\n}\n'))),Object(s.mdx)(u.a,{title:"curl",mdxType:"CodeExample"},Object(s.mdx)("pre",null,Object(s.mdx)("code",O({parentName:"pre"},{className:"hljs language-better-shell"}),Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-meta"}),"$"),Object(s.mdx)("span",O({parentName:"code"},{className:"bash"})," curl -v http://localhost:8888"),'\n*   Trying ::1:8888...\n* Connected to localhost (::1) port 8888 (#0)\n> GET / HTTP/1.1\n> Host: localhost:8888\n> User-Agent: curl/7.69.1\n> Accept: */*\n>\n* Mark bundle as not supporting multiuse\n< HTTP/1.1 200 OK\n< content-type: application/json; charset=utf-8\n< content-length: 115\n<\n* Connection #0 to host localhost left intact\n{"name":"unknown","address":"0:0:0:0:0:0:0:1:59610","message":"Hello unknown connected from 0:0:0:0:0:0:0:1:59610"}\n',Object(s.mdx)("span",O({parentName:"code"},{className:"hljs-meta"}),"\n$"),Object(s.mdx)("span",O({parentName:"code"},{className:"bash"})," curl -v http://localhost:8888\\?name\\=",Object(s.mdx)("span",O({parentName:"span"},{className:"hljs-string"}),'"Francesco"')),'\n*   Trying ::1:8888...\n* Connected to localhost (::1) port 8888 (#0)\n> GET /?name=Francesco HTTP/1.1\n> Host: localhost:8888\n> User-Agent: curl/7.69.1\n> Accept: */*\n>\n* Mark bundle as not supporting multiuse\n< HTTP/1.1 200 OK\n< content-type: application/json; charset=utf-8\n< content-length: 119\n<\n* Connection #0 to host localhost left intact\n{"name":"Francesco","address":"0:0:0:0:0:0:0:1:59708","message":"Hello Francesco connected from 0:0:0:0:0:0:0:1:59708"}\n')))),Object(s.mdx)("h2",O({},{id:"4-go-further"}),Object(s.mdx)("a",O({parentName:"h2"},{"aria-hidden":!0,tabIndex:-1,className:"heading-anchor",href:"#4-go-further"})),Object(s.mdx)("span",{className:"get-started-step"},"4")," Go further"),Object(s.mdx)("p",null,"Now that you have had a taste of how easy and fun it is to get started with Vert.x, here are a few point\xaders to help guide you fur\xadther along your jour\xadney:"),Object(s.mdx)(o.a,{columns:3,mdxType:"Cards"},Object(s.mdx)(c.a,{href:"/introduction-to-vertx-and-reactive/",title:"Intro",mdxType:"Card"},"Read our short introduction into reactive programming with Eclipse Vert.x"),Object(s.mdx)(c.a,{href:"/docs/",title:"Documentation",mdxType:"Card"},"Deep dive through the documentation to check out all Vert.x modules"),Object(s.mdx)(c.a,{href:"https://how-to.vertx.io/",title:"How-tos",mdxType:"Card"},"Check out the Vert.x How-tos to get pragmatic guides for specific topics")))}g.isMDXComponent=!0},dhJC:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))},mJ3S:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/get-started",function(){return n("ZTs3")}])},xMSN:function(e,t,n){"use strict";var a=n("nKUr"),r=(n("XXpc"),n("TSYQ")),s=n.n(r);t.a=function(e){var t=e.columns,n=void 0===t?1:t,r=e.children;return Object(a.jsx)("div",{className:s()("cards","cards-cols-".concat(n)),children:r})}}},[["mJ3S",0,2,1,4,5,3]]]);