webpackJsonp([0x67ef26645b2a,60335399758886],{143:function(e,t){e.exports={data:{pagesMarkdown:{edges:[{node:{fileAbsolutePath:"/home/jas/Web/gatsby_thefussyd/src/pages/grumblings/index.md",frontmatter:{title:"Grumblings",navTitle:null}}},{node:{fileAbsolutePath:"/home/jas/Web/gatsby_thefussyd/src/pages/resume/index.md",frontmatter:{title:"Resume",navTitle:"Resume"}}},{node:{fileAbsolutePath:"/home/jas/Web/gatsby_thefussyd/src/pages/about/index.md",frontmatter:{title:"About me",navTitle:"About"}}}]},pages:{edges:[{node:{path:"/dev-404-page/"}},{node:{path:"/offline-plugin-app-shell-fallback/"}},{node:{path:"/grumblings/"}},{node:{path:"/resume/"}},{node:{path:"/talking-loud/"}},{node:{path:"/about/"}},{node:{path:"/404/"}},{node:{path:"/"}},{node:{path:"/404.html"}}]},site:{siteMetadata:{title:"Keeping Up Time"}}},layoutContext:{}}},195:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=a(1),s=n(l),o=a(204),i=n(o),u=a(143),d=n(u);t.default=function(e){return s.default.createElement(i.default,r({},e,d.default))},e.exports=t.default},199:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),l=n(r),s=a(34),o=n(s),i=(a(2),function(e){var t="nav"+(e.classNames?" "+e.classNames:"");return console.log("props.classNames: "+e.classNames),l.default.createElement("nav",{style:e.style,className:"typist-hidden "+t},l.default.createElement("ul",{className:"nav__list"},e.items.sort(u).map(function(e){return l.default.createElement("li",{className:"nav__item",key:e.path},l.default.createElement(o.default,{className:"nav__link",to:e.path},e.title))})))}),u=function(e,t){return e.title<t.title?-1:t.title<e.title?1:0};t.default=i,e.exports=t.default},204:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.templateQuery=void 0;var r=a(1),l=n(r),s=a(34),o=n(s),i=a(199),u=n(i);a(343);var d=a(116),m=a(15),f=function(e){var t=e.location,a=e.children,n=e.data,r=void 0,i="/";if(!n)return l.default.createElement("p",null,"Nothing here!");var f=n.pages.edges.map(function(e){return e.node.path}),c=n.pagesMarkdown.edges.map(function(e){var t=f.filter(function(t){return e.node.fileAbsolutePath.indexOf(t)!==-1&&"/"!==t})[0],a=e.node.frontmatter.navTitle?e.node.frontmatter.navTitle:e.node.frontmatter.title;return{title:a,path:t}}),h=(0,d.getPageSpecificClass)(t);s.withPrefix&&(i=(0,s.withPrefix)(i));var p=!1,g="typist-incomplete";return p=t.pathname===i,console.debug("isHome: "+p+"; location.pathname: "+t.pathname+"; rootPath: "+i),p?r=l.default.createElement("div",{className:"header header_home"},l.default.createElement(u.default,{items:c,classNames:"header__nav"})):(g="",r=l.default.createElement("div",{className:"header header_page"},l.default.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:(0,m.rhythm)(-1)}},l.default.createElement(o.default,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n.site.siteMetadata.title)),l.default.createElement(u.default,{items:c,classNames:"header__nav"}))),l.default.createElement("main",{className:"layout main layout_"+h+" "+g,style:{maxWidth:(0,m.rhythm)(24),minWidth:(0,m.rhythm)(14),padding:(0,m.rhythm)(1.5)+" "+(0,m.rhythm)(.75)}},r,a())};t.default=f;t.templateQuery="** extracted graphql fragment **"},116:function(e,t,a){"use strict";t.__esModule=!0,t.getPageSpecificClass=t.getOrderFromPath=t.getCategoryFromPath=void 0;var n=a(34),r=function(e){var t=e.split(/[\\\/]/);return t[t.length-2]},l=function(e){var t=r(e);if("string"!=typeof t)return new Array("");var a=/^(\d+[-_])(.*)/;return a.test(t)?t.match(a):new Array(t)},s=function(e){var t=l(e),a=t?t[t.length-1]:"";return"string"==typeof a?a:e};t.getCategoryFromPath=function(e){var t=s(e),a=/[-_]/;return t.split(a).join(" ").replace("and","&")},t.getOrderFromPath=function(e){var t=l(e),a=/\d+/;return t&&3===t.length?t[1].match(a)[0]:"00"},t.getPageSpecificClass=function(e){var t=void 0,a="/",r=(0,n.withPrefix)(a),l=a!==r,s=l?e.pathname.substring(r.length):e.pathname.substring(1),o=s.indexOf("/")>-1;return t=e.pathname===a||e.pathname===r?"home":o?s.substring(0,s.indexOf("/")):s}},343:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-3bf56dcb0b7cf9ede63d.js.map