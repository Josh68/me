webpackJsonp([0x67ef26645b2a,60335399758886],{143:function(e,t){e.exports={data:{pagesMarkdown:{edges:[{node:{fileAbsolutePath:"D:/web/gatsby_thefussyd/src/pages/resume/index.md",frontmatter:{title:"Resume",navTitle:"Resume"}}},{node:{fileAbsolutePath:"D:/web/gatsby_thefussyd/src/pages/about/index.md",frontmatter:{title:"About me",navTitle:"About"}}},{node:{fileAbsolutePath:"D:/web/gatsby_thefussyd/src/pages/grumblings/index.md",frontmatter:{title:"Grumblings",navTitle:null}}}]},pages:{edges:[{node:{path:"/dev-404-page/"}},{node:{path:"/offline-plugin-app-shell-fallback/"}},{node:{path:"/resume/"}},{node:{path:"/about/"}},{node:{path:"/grumblings/"}},{node:{path:"/talking-loud/"}},{node:{path:"/404/"}},{node:{path:"/"}},{node:{path:"/404.html"}}]},site:{siteMetadata:{title:"Keeping Up Time"}}},layoutContext:{}}},195:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=a(1),s=n(l),i=a(204),o=n(i),u=a(143),d=n(u);t.default=function(e){return s.default.createElement(o.default,r({},e,d.default))},e.exports=t.default},199:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),l=n(r),s=a(112),i=n(s),o=(a(2),function(e){var t="nav"+(e.classNames?" "+e.classNames:"");return console.log("props.classNames: "+e.classNames),l.default.createElement("nav",{style:e.style,className:"typist-hidden "+t},l.default.createElement("ul",{className:"nav__list"},e.items.sort(u).map(function(e){return l.default.createElement("li",{className:"nav__item",key:e.path},l.default.createElement(i.default,{className:"nav__link",to:e.path},e.title))})))}),u=function(e,t){return e.title<t.title?-1:t.title<e.title?1:0};t.default=o,e.exports=t.default},204:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.templateQuery=void 0;var r=a(1),l=n(r),s=a(112),i=n(s),o=a(199),u=n(o);a(343);var d=a(116),f=a(15),m=function(e){var t=e.location,a=e.children,n=e.data;if(!n)return l.default.createElement("p",null,"Nothing here!");var r=n.pages.edges.map(function(e){return e.node.path}),o=n.pagesMarkdown.edges.map(function(e){var t=r.filter(function(t){return e.node.fileAbsolutePath.indexOf(t)!==-1&&"/"!==t})[0],a=e.node.frontmatter.navTitle?e.node.frontmatter.navTitle:e.node.frontmatter.title;return{title:a,path:t}}),m=(0,d.getPageSpecificClass)(t,!0),c=void 0,h="/";s.withPrefix&&(h=(0,s.withPrefix)(h));var p=!1,g="typist-incomplete";return p=t.pathname===h,console.debug("isHome: "+p+"; location.pathname: "+t.pathname+"; rootPath: "+h),p?c=l.default.createElement("div",{className:"header header_home"},l.default.createElement(u.default,{items:o,classNames:"header__nav"})):(g="",c=l.default.createElement("div",{className:"header header_page"},l.default.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:(0,f.rhythm)(-1)}},l.default.createElement(i.default,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n.site.siteMetadata.title)),l.default.createElement(u.default,{items:o,classNames:"header__nav"}))),l.default.createElement("main",{className:"layout main layout_"+m+" "+g,style:{maxWidth:(0,f.rhythm)(24),minWidth:(0,f.rhythm)(14),padding:(0,f.rhythm)(1.5)+" "+(0,f.rhythm)(.75)}},c,a())};t.default=m;t.templateQuery="** extracted graphql fragment **"},116:function(e,t,a){"use strict";t.__esModule=!0;var n=function(e){var t=e.split(/[\\\/]/);return t[t.length-2]},r=function(e){var t=n(e);if("string"!=typeof t)return new Array("");var a=/^(\d+[-_])(.*)/;return a.test(t)?t.match(a):new Array(t)},l=function(e){var t=r(e),a=t?t[t.length-1]:"";return"string"==typeof a?a:e};t.getCategoryFromPath=function(e){var t=l(e),a=/[-_]/;return t.split(a).join(" ").replace("and","&")},t.getOrderFromPath=function(e){var t=r(e),a=/\d+/;return t&&3===t.length?t[1].match(a)[0]:"00"},t.getPageSpecificClass=function(e,t){var a=e.pathname.substring(1),n=a.indexOf("/")>-1,r="/",l=void 0;return"undefined"!=typeof t&&t&&(r="/me/"),l=e.pathname===r?"home":n?a.substring(0,a.indexOf("/")):a}},343:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-0470022616d3b2844957.js.map