webpackJsonp([0x67ef26645b2a,60335399758886],{143:function(e,t){e.exports={data:{pagesMarkdown:{edges:[{node:{fileAbsolutePath:"D:/web/gatsby_thefussyd/src/pages/resume/index.md",frontmatter:{title:"Resume",navTitle:"Resume"}}},{node:{fileAbsolutePath:"D:/web/gatsby_thefussyd/src/pages/about/index.md",frontmatter:{title:"About me",navTitle:"About"}}},{node:{fileAbsolutePath:"D:/web/gatsby_thefussyd/src/pages/grumblings/index.md",frontmatter:{title:"Grumblings",navTitle:null}}}]},pages:{edges:[{node:{path:"/dev-404-page/"}},{node:{path:"/offline-plugin-app-shell-fallback/"}},{node:{path:"/resume/"}},{node:{path:"/about/"}},{node:{path:"/grumblings/"}},{node:{path:"/talking-loud/"}},{node:{path:"/404/"}},{node:{path:"/"}},{node:{path:"/404.html"}}]},site:{siteMetadata:{title:"Keeping Up Time"}}},layoutContext:{}}},195:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=a(1),s=n(o),i=a(204),l=n(i),u=a(143),f=n(u);t.default=function(e){return s.default.createElement(l.default,r({},e,f.default))},e.exports=t.default},199:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),o=n(r),s=a(34),i=n(s),l=(a(2),function(e){var t="nav"+(e.classNames?" "+e.classNames:"");return console.log("props.classNames: "+e.classNames),o.default.createElement("nav",{style:e.style,className:"typist-hidden "+t},o.default.createElement("ul",{className:"nav__list"},e.items.sort(u).map(function(e){return o.default.createElement("li",{className:"nav__item",key:e.path},o.default.createElement(i.default,{className:"nav__link",to:e.path},e.title))})))}),u=function(e,t){return e.title<t.title?-1:t.title<e.title?1:0};t.default=l,e.exports=t.default},204:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.templateQuery=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=a(1),u=n(l),f=a(34),c=n(f),p=a(199),d=n(p);a(343);var h=a(116),m=a(15),g=function(e){function t(a){r(this,t);var n=o(this,e.call(this,a));return n.state={typistClassName:"typist-incomplete"},n.onTypistStateChange=n.onTypistStateChange.bind(n),n.getIsHome=n.getIsHome.bind(n),n}return s(t,e),t.prototype.onTypistStateChange=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];console.debug("onTypistComplete called");var t=e||this.getIsHome()?"typist-complete":"typist-incomplete";this.setState(function(e){return i({},e,{typistClassName:t})})},t.prototype.getIsHome=function(){var e="/";return f.withPrefix&&(e=(0,f.withPrefix)(e)),e===this.props.location.pathname},t.prototype.render=function(){var e=this,t=this.props,a=t.location,n=t.children,r=t.data;if(!r)return u.default.createElement("p",null,"Nothing here!");var o=r.pages.edges.map(function(e){return e.node.path}),s=r.pagesMarkdown.edges.map(function(e){var t=o.filter(function(t){return e.node.fileAbsolutePath.indexOf(t)!==-1&&"/"!==t})[0],a=e.node.frontmatter.navTitle?e.node.frontmatter.navTitle:e.node.frontmatter.title;return{title:a,path:t}}),l=(0,h.getPageSpecificClass)(a),f=u.default.createElement("div",{className:"header header_home"},u.default.createElement(d.default,{items:s,classNames:"header__nav"})),p=u.default.createElement("div",{className:"header header_page"},u.default.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:(0,m.rhythm)(-1)}},u.default.createElement(c.default,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/",onClick:function(){e.onTypistStateChange(!1)}},r.site.siteMetadata.title)),u.default.createElement(d.default,{items:s,classNames:"header__nav"}));return u.default.createElement("main",{className:"layout main layout_"+l+" "+this.state.typistClassName,style:{maxWidth:(0,m.rhythm)(24),minWidth:(0,m.rhythm)(14),padding:(0,m.rhythm)(1.5)+" "+(0,m.rhythm)(.75)}},this.getIsHome()?f:p,n(i({},this.props,{onTypistComplete:this.onTypistStateChange})))},t}(u.default.Component);t.default=g;t.templateQuery="** extracted graphql fragment **"},116:function(e,t,a){"use strict";t.__esModule=!0,t.getPageSpecificClass=t.getOrderFromPath=t.getCategoryFromPath=void 0;var n=a(34),r=function(e){var t=e.split(/[\\\/]/);return t[t.length-2]},o=function(e){var t=r(e);if("string"!=typeof t)return new Array("");var a=/^(\d+[-_])(.*)/;return a.test(t)?t.match(a):new Array(t)},s=function(e){var t=o(e),a=t?t[t.length-1]:"";return"string"==typeof a?a:e};t.getCategoryFromPath=function(e){var t=s(e),a=/[-_]/;return t.split(a).join(" ").replace("and","&")},t.getOrderFromPath=function(e){var t=o(e),a=/\d+/;return t&&3===t.length?t[1].match(a)[0]:"00"},t.getPageSpecificClass=function(e){var t=void 0,a="/",r=(0,n.withPrefix)(a),o=a!==r,s=o?e.pathname.substring(r.length):e.pathname.substring(1),i=s.indexOf("/")>-1;return t=e.pathname===a||e.pathname===r?"home":i?s.substring(0,s.indexOf("/")):s}},343:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-a66a80e3adab679cd9d6.js.map