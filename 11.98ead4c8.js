(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{114:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const l=document.getSelection();let r=!1;l.rangeCount>0&&(r=l.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch(s){}return a.remove(),r&&(l.removeAllRanges(),l.addRange(r)),n&&n.focus(),o};e.exports=n,e.exports.default=n},115:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,l,r]=t;if(n&&r){n=parseInt(n),r=parseInt(r);const e=n<r?1:-1;"-"!==l&&".."!==l&&"\u2025"!==l||(r+=e);for(let t=n;t!==r;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},74:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(82),o=a(22),s=a(25),c=a(95),i=a(3),u=a(77),p=a(76),d=a(89),m=a(93),b=a(94),h=a(92),y=a(79),g=a(84),f=a(96),v=a(63),k=a.n(v);const j=(e,t)=>"link"===e.type?Object(p.isSamePath)(e.href,t):"category"===e.type&&e.items.some((e=>j(e,t)));function O({item:e,onItemClick:t,collapsible:a,activePath:r,...o}){const{items:s,label:c}=e,p=j(e,r),d=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)((()=>{t.current=e}),[e]),t.current}(p),[m,b]=Object(n.useState)((()=>!!a&&(!p&&e.collapsed))),h=Object(n.useRef)(null),[y,g]=Object(n.useState)(void 0),f=(e=!0)=>{var t;g(e?`${null===(t=h.current)||void 0===t?void 0:t.scrollHeight}px`:void 0)};Object(n.useEffect)((()=>{p&&!d&&m&&b(!1)}),[p,d,m]);const v=Object(n.useCallback)((e=>{e.preventDefault(),y||f(),setTimeout((()=>b((e=>!e))),100)}),[y]);return 0===s.length?null:l.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":m}),key:c},l.a.createElement("a",Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&p,[k.a.menuLinkText]:!a}),onClick:a?v:void 0,href:a?"#!":void 0},o),c),l.a.createElement("ul",{className:"menu__list",ref:h,style:{height:y},onTransitionEnd:()=>{m||f(!1)}},s.map((e=>l.a.createElement(C,{tabIndex:m?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:r})))))}function E({item:e,onItemClick:t,activePath:a,collapsible:n,...r}){const{href:o,label:s}=e,c=j(e,a);return l.a.createElement("li",{className:"menu__list-item",key:s},l.a.createElement(y.a,Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--active":c}),to:o},Object(g.a)(o)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},r),s))}function C(e){switch(e.item.type){case"category":return l.a.createElement(O,e);case"link":default:return l.a.createElement(E,e)}}var N=function({path:e,sidebar:t,sidebarCollapsible:a=!0,onCollapse:r,isHidden:o}){const[s,c]=Object(n.useState)(!1),{navbar:{hideOnScroll:i},hideableSidebar:y}=Object(p.useThemeConfig)(),{isAnnouncementBarClosed:g}=Object(d.a)(),{scrollY:v}=Object(h.a)();Object(m.a)(s);const j=Object(b.a)();return Object(n.useEffect)((()=>{j===b.b.desktop&&c(!1)}),[j]),l.a.createElement("div",{className:Object(u.a)(k.a.sidebar,{[k.a.sidebarWithHideableNavbar]:i,[k.a.sidebarHidden]:o})},i&&l.a.createElement(f.a,{tabIndex:-1,className:k.a.sidebarLogo}),l.a.createElement("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",k.a.menu,{"menu--show":s,[k.a.menuWithAnnouncementBar]:!g&&0===v})},l.a.createElement("button",{"aria-label":s?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{c(!s)}},s?l.a.createElement("span",{className:Object(u.a)(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{"aria-label":"Menu",className:k.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},t.map((t=>l.a.createElement(C,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),c(!1)},collapsible:a,activePath:e}))))),y&&l.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(u.a)("button button--secondary button--outline",k.a.collapseSidebarButton),onClick:r}))},x={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},S={Prism:a(23).a,theme:x};function T(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var w=/\r\n|\r|\n/,P=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},I=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},B=function(e,t){var a=e.plain,n=Object.create(null),l=e.styles.reduce((function(e,a){var n=a.languages,l=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=_({},e[t],l);e[t]=a})),e}),n);return l.root=a,l.plain=_({},a,{backgroundColor:null}),l};function D(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var L=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),T(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?B(e.theme,e.language):void 0;return t.themeDict=a})),T(this,"getLineProps",(function(e){var a=e.key,n=e.className,l=e.style,r=_({},D(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(r.style=o.plain),void 0!==l&&(r.style=void 0!==r.style?_({},r.style,l):l),void 0!==a&&(r.key=a),n&&(r.className+=" "+n),r})),T(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,l=a.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===l&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===l&&!n)return r[a[0]];var o=n?{display:"inline-block"}:{},s=a.map((function(e){return r[e]}));return Object.assign.apply(Object,[o].concat(s))}})),T(this,"getTokenProps",(function(e){var a=e.key,n=e.className,l=e.style,r=e.token,o=_({},D(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==l&&(o.style=void 0!==o.style?_({},o.style,l):l),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,l=e.children,r=this.getThemeDict(this.props),o=t.languages[a];return l({tokens:function(e){for(var t=[[]],a=[e],n=[0],l=[e.length],r=0,o=0,s=[],c=[s];o>-1;){for(;(r=n[o]++)<l[o];){var i=void 0,u=t[o],p=a[o][r];if("string"==typeof p?(u=o>0?u:["plain"],i=p):(u=I(u,p.type),p.alias&&(u=I(u,p.alias)),i=p.content),"string"==typeof i){var d=i.split(w),m=d.length;s.push({types:u,content:d[0]});for(var b=1;b<m;b++)P(s),c.push(s=[]),s.push({types:u,content:d[b]})}else o++,t.push(u),a.push(i),n.push(0),l.push(i.length)}o--,t.pop(),a.pop(),n.pop(),l.pop()}return P(s),c}(void 0!==o?t.tokenize(n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component),M=a(114),$=a.n(M),R=a(115),A=a.n(R),W={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},H=a(85);var F=()=>{const{prism:e}=Object(p.useThemeConfig)(),{isDarkTheme:t}=Object(H.a)(),a=e.theme||W,n=e.darkTheme||a;return t?n:a},z=a(64),J=a.n(z);const K=/{([\d,-]+)}/,V=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},Y=/(?:title=")(.*)(?:")/;var q=({children:e,className:t,metastring:a})=>{const{prism:r}=Object(p.useThemeConfig)(),[o,s]=Object(n.useState)(!1),[c,d]=Object(n.useState)(!1);Object(n.useEffect)((()=>{d(!0)}),[]);const m=Object(n.useRef)(null);let b=[],h="";const y=F();if(Array.isArray(e)&&(e=e.join("")),a&&K.test(a)){const e=a.match(K)[1];b=A()(e).filter((e=>e>0))}a&&Y.test(a)&&(h=a.match(Y)[1]);let g=t&&t.replace(/language-/,"");!g&&r.defaultLanguage&&(g=r.defaultLanguage);let f=e.replace(/\n$/,"");if(0===b.length&&void 0!==g){let t="";const a=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return V(["js","jsBlock"]);case"jsx":case"tsx":return V(["js","jsBlock","jsx"]);case"html":return V(["js","jsBlock","html"]);case"python":case"py":return V(["python"]);default:return V()}})(g),n=e.replace(/\n$/,"").split("\n");let l;for(let e=0;e<n.length;){const r=e+1,o=n[e].match(a);if(null!==o){switch(o.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":t+=`${r},`;break;case"highlight-start":l=r;break;case"highlight-end":t+=`${l}-${r-1},`}n.splice(e,1)}else e+=1}b=A()(t),f=n.join("\n")}const v=()=>{$()(f),s(!0),setTimeout((()=>s(!1)),2e3)};return l.a.createElement(L,Object(i.a)({},S,{key:String(c),theme:y,code:f,language:g}),(({className:e,style:t,tokens:a,getLineProps:n,getTokenProps:r})=>l.a.createElement(l.a.Fragment,null,h&&l.a.createElement("div",{style:t,className:J.a.codeBlockTitle},h),l.a.createElement("div",{className:J.a.codeBlockContent},l.a.createElement("div",{tabIndex:0,className:Object(u.a)(e,J.a.codeBlock,"thin-scrollbar",{[J.a.codeBlockWithTitle]:h})},l.a.createElement("div",{className:J.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=n({line:e,key:t});return b.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),l.a.createElement("div",Object(i.a)({key:t},a),e.map(((e,t)=>l.a.createElement("span",Object(i.a)({key:t},r({token:e,key:t}))))))})))),l.a.createElement("button",{ref:m,type:"button","aria-label":"Copy code to clipboard",className:Object(u.a)(J.a.copyButton),onClick:v},o?"Copied":"Copy")))))},G=(a(65),a(66)),Q=a.n(G);var U=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(p.useThemeConfig)();return t?l.a.createElement(e,a,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(u.a)("anchor",{[Q.a.enhancedAnchor]:!n}),id:t}),a.children,l.a.createElement("a",{className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#")):l.a.createElement(e,a)},X=a(67),Z=a.n(X);var ee={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?l.a.createElement(q,e):l.a.createElement("code",e):t},a:e=>l.a.createElement(y.a,e),pre:e=>l.a.createElement("div",Object(i.a)({className:Z.a.mdxCodeBlock},e)),h1:U("h1"),h2:U("h2"),h3:U("h3"),h4:U("h4"),h5:U("h5"),h6:U("h6")},te=a(97),ae=a(81),ne=a(68),le=a.n(ne);function re({currentDocRoute:e,versionMetadata:t,children:a}){var s,i;const{siteConfig:d,isClient:m}=Object(o.default)(),{pluginId:b,permalinkToSidebar:h,docsSidebars:y,version:g}=t,f=h[e.path],v=y[f],[k,j]=Object(n.useState)(!1),[O,E]=Object(n.useState)(!1),C=Object(n.useCallback)((()=>{O&&E(!1),j(!k)}),[O]);return l.a.createElement(c.a,{key:m,searchMetadatas:{version:g,tag:Object(p.docVersionSearchTag)(b,g)}},l.a.createElement("div",{className:le.a.docPage},v&&l.a.createElement("div",{className:Object(u.a)(le.a.docSidebarContainer,{[le.a.docSidebarContainerHidden]:k}),onTransitionEnd:e=>{e.currentTarget.classList.contains(le.a.docSidebarContainer)&&k&&E(!0)},role:"complementary"},l.a.createElement(N,{key:f,sidebar:v,path:e.path,sidebarCollapsible:null===(s=null===(i=d.themeConfig)||void 0===i?void 0:i.sidebarCollapsible)||void 0===s||s,onCollapse:C,isHidden:O}),O&&l.a.createElement("div",{className:le.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:C,onClick:C})),l.a.createElement("main",{className:le.a.docMainContainer},l.a.createElement("div",{className:Object(u.a)("container padding-vert--lg",le.a.docItemWrapper,{[le.a.docItemWrapperEnhanced]:k})},l.a.createElement(r.a,{components:ee},a)))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,r=t.find((e=>Object(ae.matchPath)(n.pathname,e)));return r?l.a.createElement(re,{currentDocRoute:r,versionMetadata:a},Object(s.a)(t)):l.a.createElement(te.default,e)}}}]);