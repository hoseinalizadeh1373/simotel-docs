"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[4320],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61073:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:1},i="SA \u0686\u06cc\u0633\u062a",c={unversionedId:"api/callcenter_api/SimoTelAPI/whatis",id:"api/callcenter_api/SimoTelAPI/whatis",title:"SA \u0686\u06cc\u0633\u062a",description:"SA \u0645\u062c\u0645\u0648\u0639\u0647 \u0627\u0632 API\u0647\u0627 \u0647\u0633\u062a\u0646\u062f \u06a9\u0647 \u0628\u0627 \u0627\u0631\u0633\u0627\u0644 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0627\u0632 \u0633\u0645\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0628\u0647 \u0633\u0645\u062a \u0633\u06cc\u0645\u0648\u062a\u0644 \u0634\u0631\u0648\u0639 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f\u060c \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u062f\u0631 \u0642\u0627\u0644\u0628 \u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f RestAPI \u0627\u06cc\u062c\u0627\u062f \u06af\u0631\u062f\u06cc\u062f\u0647 \u0627\u0633\u062a. \u0628\u0631\u0627\u06cc \u0645\u062b\u0627\u0644 \u0628\u0627 \u0627\u0631\u0633\u0627\u0644 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u062a\u0645\u0627\u0633\u200c\u062f\u0648\u0637\u0631\u0641\u0647 \u0627\u0632 \u0633\u0645\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0628\u0647 \u0633\u0645\u062a \u0633\u06cc\u0645\u0648\u062a\u0644\u060c\u067e\u0633 \u0627\u0632 \u062f\u0631\u06cc\u0627\u0641\u062a \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0645\u0631\u06a9\u0632 \u062a\u0645\u0627\u0633 \u0634\u0631\u0648\u0639 \u0628\u0647 \u0627\u06cc\u062c\u0627\u062f \u062a\u0645\u0627\u0633 \u062f\u0648\u0637\u0631\u0641\u0647 \u0645\u06cc\u200c\u06a9\u0646\u062f.",source:"@site/docs/api/2-callcenter_api/2-SimoTelAPI/1-whatis.md",sourceDirName:"api/2-callcenter_api/2-SimoTelAPI",slug:"/api/callcenter_api/SimoTelAPI/whatis",permalink:"/docs/api/callcenter_api/SimoTelAPI/whatis",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1}},l={},p=[],s={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sa-\u0686\u06cc\u0633\u062a"},"SA \u0686\u06cc\u0633\u062a"),(0,o.kt)("p",null,"SA \u0645\u062c\u0645\u0648\u0639\u0647 \u0627\u0632 API\u0647\u0627 \u0647\u0633\u062a\u0646\u062f \u06a9\u0647 \u0628\u0627 \u0627\u0631\u0633\u0627\u0644 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0627\u0632 \u0633\u0645\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0628\u0647 \u0633\u0645\u062a \u0633\u06cc\u0645\u0648\u062a\u0644 \u0634\u0631\u0648\u0639 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f\u060c \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u062f\u0631 \u0642\u0627\u0644\u0628 \u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f RestAPI \u0627\u06cc\u062c\u0627\u062f \u06af\u0631\u062f\u06cc\u062f\u0647 \u0627\u0633\u062a. \u0628\u0631\u0627\u06cc \u0645\u062b\u0627\u0644 \u0628\u0627 \u0627\u0631\u0633\u0627\u0644 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u062a\u0645\u0627\u0633\u200c\u062f\u0648\u0637\u0631\u0641\u0647 \u0627\u0632 \u0633\u0645\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0628\u0647 \u0633\u0645\u062a \u0633\u06cc\u0645\u0648\u062a\u0644\u060c\u067e\u0633 \u0627\u0632 \u062f\u0631\u06cc\u0627\u0641\u062a \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0645\u0631\u06a9\u0632 \u062a\u0645\u0627\u0633 \u0634\u0631\u0648\u0639 \u0628\u0647 \u0627\u06cc\u062c\u0627\u062f \u062a\u0645\u0627\u0633 \u062f\u0648\u0637\u0631\u0641\u0647 \u0645\u06cc\u200c\u06a9\u0646\u062f."))}f.isMDXComponent=!0}}]);