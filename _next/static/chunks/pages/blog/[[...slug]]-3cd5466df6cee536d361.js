_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"+Vjl":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("17x9"),i=n.n(o);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,i=void 0===o?24:o,l=e.title,u=void 0===l?"Twitter":l,s=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["color","size","title"]);return a.a.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:i,height:i,fill:r,viewBox:"0 0 24 24",ref:t},s),a.a.createElement("title",null,u),a.a.createElement("path",{d:"M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"}))}));l.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number]),title:i.a.string},t.a=l},"0JQy":function(e,t){var n="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",a="\\ud83c[\\udffb-\\udfff]",o="[^\\ud800-\\udfff]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",l="(?:"+r+"|"+a+")"+"?",u="[\\ufe0e\\ufe0f]?"+l+("(?:\\u200d(?:"+[o,i,c].join("|")+")[\\ufe0e\\ufe0f]?"+l+")*"),s="(?:"+[o+r+"?",r,i,c,n].join("|")+")",f=RegExp(a+"(?="+a+")|"+s+u,"g");e.exports=function(e){return e.match(f)||[]}},"0ZTe":function(e,t,n){var r=n("wy8a"),a=n("quyA"),o=n("Em2t"),i=n("dt0z");e.exports=function(e){return function(t){t=i(t);var n=a(t)?o(t):void 0,c=n?n[0]:t.charAt(0),l=n?r(n,1).join(""):t.slice(1);return c[e]()+l}}},"4hdO":function(e,t,n){"use strict";function r(e){document.body.scrollTop=document.documentElement.scrollTop=e}function a(e,t){requestAnimationFrame||r(e);var n=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop);if(n!==e){var a=e-n,o=void 0;requestAnimationFrame((function e(i){o||(o=i);var c=i-o,l=Math.min(1,c/t);r(n+a*(l*(2-l))),l<1&&requestAnimationFrame(e)}))}}n.d(t,"a",(function(){return a}))},"6acW":function(e,t,n){var r=n("dt0z"),a=n("gQMU");e.exports=function(e){return a(r(e).toLowerCase())}},"7ljp":function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return s})),n.d(t,"MDXProvider",(function(){return d})),n.d(t,"mdx",(function(){return h})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return f}));var r=n("q1tI"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),f=function(e){return function(t){var n=p(t.components);return a.a.createElement(e,i({},t,{components:n}))}},p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,d=s["".concat(i,".").concat(f)]||s[f]||g[f]||o;return n?a.a.createElement(d,l(l({ref:t},c),{},{components:n})):a.a.createElement(d,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"===typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},"9mAs":function(e,t,n){"use strict";var r=n("wx14"),a=n("q1tI"),o=n.n(a),i=n("4hdO"),c=n("anbt"),l=n("nOHt"),u=o.a.createElement;t.a=function(e){var t=Object(a.useContext)(c.a.State)||{height:0};if("#"!==e.href[0])throw new Error("ScrollLink href '".concat(e.href,"' must begin with a '#' character"));var n=e.href.substring(1),o=Object(l.useRouter)(),s=Object(a.useCallback)((function(){var e=document.getElementById(n);if(e){var r=e.offsetTop-t.height;Object(i.a)(r,500)}}),[n,t.height]);return Object(a.useEffect)((function(){o.asPath.substring(o.asPath.indexOf("#")+1)===n&&s()}),[n,o,s]),u("a",Object(r.a)({},e,{onClick:s}))}},ACoj:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("YFqc"),i=n.n(o),c=(n("Agq3"),a.a.createElement);t.a=function(e){var t=e.href,n=e.as,r=e.children,a=void 0===r?c("a",null,"Read more"):r;return c("span",{className:"read-more-link"},c(i.a,{href:t,as:n},a))}},Em2t:function(e,t,n){var r=n("bahg"),a=n("quyA"),o=n("0JQy");e.exports=function(e){return a(e)?o(e):r(e)}},J3Rv:function(e,t,n){n("aoOK");const r=n("q1tI"),{mdx:a,MDXProvider:o}=n("7ljp"),{useEffect:i}=n("q1tI");e.exports=function({compiledSource:e,renderedOutput:t,scope:n={}},{components:c}={}){const[l,u]=r.useState(r.createElement("span",{dangerouslySetInnerHTML:{__html:t}}));return"undefined"===typeof window||i(()=>{const t=window.requestIdleCallback(()=>{const i={mdx:a,...c,...n},l=Object.keys(i),s=Object.values(i),f=new Function("React",...l,e+"\n      return React.createElement(MDXContent, {});")(r,...s),p=r.createElement(o,{components:c},f);u(p),window.cancelIdleCallback(t)})},[e]),l}},NHiH:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return K}));var r=n("q1tI"),a=n.n(r),o=n("UMc4"),i=n("YFqc"),c=n.n(i),l=(n("ZKd4"),a.a.createElement),u=function(e){var t=e.categories;return l("div",{className:"blog-navbar"},l("h2",null,"Blog"),l("ul",null,l("li",null,l(c.a,{href:"/blog/[[...slug]]",as:"/blog/"},l("a",null,"All posts"))),t.map((function(e){return l("li",{key:e},l(c.a,{href:"/blog/[[...slug]]",as:"/blog/category/".concat(e,"/")},l("a",null,e)))}))))},s=(n("yodW"),a.a.createElement),f=function(e){return s(o.a,e,s("div",{className:"blog"},s(u,{categories:e.categories}),e.children))},p=n("wx14"),d=(n("S8sm"),a.a.createElement),g=function(e){return d(o.a,Object(p.a)({hashSmoothScroll:!0},e),d("div",{className:"blog-post"},d(u,{categories:e.categories}),e.children))},m=a.a.createElement,h=function(e){var t=e.date,n=new Intl.DateTimeFormat("en",{year:"numeric",month:"long",day:"numeric"}).formatToParts(new Date(t)),r=n.find((function(e){return"day"===e.type})).value+" "+n.find((function(e){return"month"===e.type})).value+" "+n.find((function(e){return"year"===e.type})).value;return m(a.a.Fragment,null,r)},v=n("ACoj"),b=(n("beur"),a.a.createElement),y=function(e){var t=e.post,n=t.meta.authors.map((function(e){return b("li",{key:e.github_id},b("img",{src:"https://github.com/".concat(e.github_id,".png?size=50")}),b("a",{href:"https://github.com/".concat(e.github_id),target:"_blank",rel:"noopener noreferrer"},e.name))}));return b("div",{className:"blog-entry"},b("div",{className:"blog-entry-meta"},b("span",{className:"blog-entry-date"},b(h,{date:t.date})),b(c.a,{href:"/blog/[[...slug]]",as:"/blog/category/".concat(t.meta.category,"/")},b("a",{className:"blog-entry-category"},t.meta.category))),b("h3",null,b(c.a,{href:"/blog/[[...slug]]",as:"/blog/".concat(t.slug,"/")},b("a",null,t.meta.title))),b("span",{className:"blog-entry-authors"},b("ul",null,n)),b("p",{className:"blog-entry-summary"},t.meta.summary||"*** PLEASE SPECIFY A MEANINGFUL SUMMARY ***"),b(v.a,{href:"/blog/[[...slug]]",as:"/blog/".concat(t.slug,"/")}))},w=n("TSYQ"),O=n.n(w),j=(n("4Nad"),a.a.createElement);function x(e,t){var n="/blog/";return void 0!==t&&(n+="category/".concat(t,"/")),1===e?n:"".concat(n,"page/").concat(e,"/")}var E,C,_=function(e){var t=e.currentPage,n=void 0===t?1:t,r=e.numPages,o=void 0===r?1:r,i=e.category;if(o<=1)return j(a.a.Fragment,null);var l=function(e,t){var n=e-2,r=e+3;n<0&&(n=0,r=5),r>t&&(r=t,n=Math.max(0,t-5));for(var a=[],o=n;o<r;++o)a.push(o+1);return a[0]>2&&a.unshift({text:"\u2026",id:"left-hellip"}),a[a.length-1]<t-1&&a.push({text:"\u2026",id:"right-hellip"}),1!==a[0]&&a.unshift(1),a[a.length-1]!==t&&a.push(t),a}(n,o);return l=l.map((function(e){var t=e===n,r=e.id||e,a=e.text||e;return Number.isInteger(a)?j("div",{className:O()("pagination-page",{active:t}),key:r},j(c.a,{href:"/blog/[[...slug]]",as:x(e,i)},j("a",null,a))):j("div",{className:"pagination-page disabled",key:r},a)})),n>1?l.unshift(j("div",{className:"pagination-page",key:"prev-page"},j(c.a,{href:"/blog/[[...slug]]",as:x(n-1,i)},j("a",null,"\xab")))):l.unshift(j("div",{className:"pagination-page disabled",key:"prev-page"},"\xab")),n<o?l.push(j("div",{className:"pagination-page",key:"next-page"},j(c.a,{href:"/blog/[[...slug]]",as:x(n+1,i)},j("a",null,"\xbb")))):l.push(j("div",{className:"pagination-page disabled",key:"next-page"},"\xbb")),j("div",{className:"pagination"},l)},N=(n("l3qQ"),a.a.createElement),k=function(e){var t=e.children,n=e.error,r=e.warning,a=e.info,o=e.title;return N("div",{className:O()("alert",{error:n,warning:r,info:a})},o&&N("div",{className:"alert-title"},o),t)},P=n("17x9"),T=n.n(P);var S=(C=E=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.call(this,n));return r.url=n.url,r.file=n.file,r.stylesheetAdded=!1,r.state={loading:!0,gistContent:""},r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.__nextGist=function(){return"embed_gist_callback_"+t.__gistCallbackId++},t.__addStylesheet=function(e){if(!this.stylesheetAdded){var t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.href=e,document.head.appendChild(t),this.stylesheetAdded=!0}},t.prototype.componentDidMount=function(){this._buildGist()},t.prototype._getID=function(){return this.url.match(/(\.com\/)(.*?)([^#]+)/).pop()},t.prototype._getFile=function(){if(null!=this.file)return"&file="+this.file;var e=this.url.split("#").pop();return null!=e.match(/file*/)?"&file="+e.replace("file-","").replace("-","."):""},t.prototype._tranformedURL=function(e){return"https://gist.github.com/"+this._getID()+".json?callback="+e+this._getFile()},t.prototype._buildGist=function(){var e=this,n=t.__nextGist();window[n]=function(n){t.__addStylesheet(n.stylesheet),e.setState({loading:!1,gistContent:n.div})};var r=document.createElement("script");r.type="text/javascript",r.src=this._tranformedURL(n),document.head.appendChild(r)},t.prototype.render=function(){return this.state.loading?a.a.createElement("div",null,"...waiting for Gist..."):a.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.gistContent}})},t}(a.a.PureComponent),E.__gistCallbackId=0,C);S.propTypes={};var I=S,A=n("9mAs"),M=n("6acW"),R=n.n(M),q=n("J3Rv"),z=n.n(q);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var L=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,i=void 0===o?24:o,c=F(e,["color","size"]);return a.a.createElement("svg",D({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),a.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),a.a.createElement("polyline",{points:"12 6 12 12 16 14"}))}));L.propTypes={color:T.a.string,size:T.a.oneOfType([T.a.string,T.a.number])},L.displayName="Clock";var H=L,U=n("+Vjl");function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var B=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,i=void 0===o?24:o,c=e.title,l=void 0===c?"LinkedIn":c,u=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["color","size","title"]);return a.a.createElement("svg",V({xmlns:"http://www.w3.org/2000/svg",width:i,height:i,fill:r,viewBox:"0 0 24 24",ref:t},u),a.a.createElement("title",null,l),a.a.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}))}));B.propTypes={color:T.a.string,size:T.a.oneOfType([T.a.string,T.a.number]),title:T.a.string};var G=B;function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var X=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,i=void 0===o?24:o,c=e.title,l=void 0===c?"Facebook":c,u=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["color","size","title"]);return a.a.createElement("svg",Q({xmlns:"http://www.w3.org/2000/svg",width:i,height:i,fill:r,viewBox:"0 0 24 24",ref:t},u),a.a.createElement("title",null,l),a.a.createElement("path",{d:"M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"}))}));X.propTypes={color:T.a.string,size:T.a.oneOfType([T.a.string,T.a.number]),title:T.a.string};var Y=X,J=a.a.createElement,W={Alert:k,Gist:I,Link:c.a,ScrollLink:A.a},K=!0;t.default=function(e){var t=e.post,n=e.prevPost,r=e.nextPost,o=e.relatedPosts,i=e.category,l=e.categories,u=e.page,s=e.posts,p=e.numPages;if(void 0===t){var d=s.map((function(e){return J(y,{key:e.slug,post:e})})),m="Blog";return void 0!==i&&(m="".concat(R()(i)," | ").concat(m)),u>1&&(m="Page ".concat(u," | ").concat(m)),J(f,{meta:{title:m},categories:l},J("div",{className:"blog-entries"},d),J(_,{currentPage:u,numPages:p,category:i}))}var v=z()(t.content,{components:W}),b="".concat("https://vertx-web-site.github.io","/blog/").concat(t.slug);return J(g,{meta:{title:"".concat(t.meta.title," | Blog")},categories:l},J("div",{className:"blog-post-main"},J("div",{className:"blog-post-content"},J("h1",null,t.meta.title),v),J("div",{className:"blog-post-sidebar"},t.meta.authors.map((function(e){return J("div",{className:"blog-post-author",key:e.github_id},J("img",{className:"blog-post-author-avatar",src:"https://github.com/".concat(e.github_id,".png?size=160")}),J("div",{className:"blog-post-author-name"},1===t.meta.authors.length&&"by ",J("a",{href:"https://github.com/".concat(e.github_id),target:"_blank",rel:"noopener noreferrer"},e.name)))})),J("div",{className:"blog-post-sidebar-date"},"Posted on ",J(h,{date:t.date})),"in ",J(c.a,{href:"/blog/[[...slug]]",as:"/blog/category/".concat(t.meta.category,"/")},J("a",{className:"blog-post-sidebar-category"},t.meta.category)),J("div",{className:"blog-post-sidebar-reading-time"},J(H,{className:"feather"})," ",t.readingTime.text),J("div",{className:"blog-post-sidebar-share-icons"},J("a",{href:"https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(t.meta.title),"&url=").concat(encodeURIComponent(b),"&via=vertx_project"),target:"_blank",rel:"noopener noreferrer"},J(U.a,null)),J("a",{href:"https://www.linkedin.com/sharing/share-offsite/?url=".concat(encodeURIComponent(b)),target:"_blank",rel:"noopener noreferrer"},J(G,null)),J("a",{href:"https://www.facebook.com/sharer.php?u=".concat(encodeURIComponent(b)),target:"_blank",rel:"noopener noreferrer"},J(Y,null))))),J("div",{className:"blog-post-next-prev"},J("div",{className:"blog-post-next-prev-entry"},n&&J(a.a.Fragment,null,J("h5",null,"Next post"),J(y,{post:n}))),J("div",{className:"blog-post-next-prev-entry"},r&&J(a.a.Fragment,null,J("h5",null,"Previous post"),J(y,{post:r})))),J("div",{className:"blog-post-related"},J("h5",null,"Related posts"),J("div",{className:"blog-post-related-posts"},o.map((function(e){return J(y,{key:e.slug,post:e})})))))}},QYtG:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[[...slug]]",function(){return n("NHiH")}])},UMc4:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("TSYQ"),i=n.n(o),c=n("nOHt"),l=n.n(c),u=n("4hdO"),s=n("anbt"),f=n("Cgje"),p=n("naWs"),d=(n("05nU"),a.a.createElement);function g(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.a=function(e){var t=e.meta,n=void 0===t?{}:t,a=e.narrow,o=e.hashSmoothScroll,c=void 0!==o&&o,m=e.children,h=Object(r.useContext)(s.a.State),v=Object(r.useRef)(),b=Object(r.useCallback)((function(e,t){var n=e.substring(e.indexOf("#")+1),r=document.getElementById(n);if(r){var a=r.offsetTop-h.height;Object(u.a)(a,t?200:500)}}),[h.height]),y=Object(r.useCallback)((function(e){b(e.newURL)}),[b]),w=Object(r.useCallback)((function(e){var t,n=g(e.current.querySelectorAll("a[href^='#']"));try{var r=function(){var e=t.value;e.onclick=function(t){t.preventDefault();var n=window.location.href;n.substring(n.indexOf("#"))!==e.getAttribute("href")?l.a.push(window.location.pathname+e.getAttribute("href")):b(n)}};for(n.s();!(t=n.n()).done;)r()}catch(a){n.e(a)}finally{n.f()}}),[b]);return Object(r.useEffect)((function(){return c&&(l.a.events.on("hashChangeStart",b),window.addEventListener("hashchange",y),w(v),b(window.location.href,!0)),function(){c&&(window.removeEventListener("hashchange",y),l.a.events.off("hashChangeStart",b))}}),[y,b,w,c]),d("main",{className:"page"},d(f.a,{title:n.title}),d("div",{className:"page-content"},d("div",{className:i()("container",{"container-narrow":a}),ref:v},m)),d(p.a,null))}},aoOK:function(e,t){"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})},bahg:function(e,t){e.exports=function(e){return e.split("")}},gQMU:function(e,t,n){var r=n("0ZTe")("toUpperCase");e.exports=r},quyA:function(e,t){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return n.test(e)}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},wy8a:function(e,t,n){var r=n("KxBF");e.exports=function(e,t,n){var a=e.length;return n=void 0===n?a:n,!t&&n>=a?e:r(e,t,n)}}},[["QYtG",0,2,1,4,3]]]);