"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[58198],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},37919:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const i={},a="Extension API",c={unversionedId:"simotel/callcenter-docs/dialplan/components/extension_api",id:"simotel/callcenter-docs/dialplan/components/extension_api",title:"Extension API",description:"\u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u062a\u0645\u0627\u0633 \u0628\u0647 \u0633\u0645\u062a \u06cc\u06a9 \u062f\u0627\u062e\u0644\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f. \u0639\u0645\u0644\u06a9\u0631\u062f \u0622\u0646 \u0645\u0634\u0627\u0628\u0647 Extension \u0627\u0633\u062a\u060c \u0628\u0627 \u0627\u06cc\u0646 \u062a\u0641\u0627\u0648\u062a \u06a9\u0647 \u0627\u0632 \u0637\u0631\u06cc\u0642 \u0648\u0628\u200c\u200c\u0633\u0631\u0648\u06cc\u0633\u060c \u0634\u0645\u0627\u0631\u0647 \u062f\u0627\u062e\u0644\u06cc \u0645\u0642\u0635\u062f \u0631\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u0648 \u062a\u0646\u0647\u0627 \u062a\u0645\u0627\u0633 \u0631\u0627 \u0628\u0631\u0627\u06cc \u0622\u0646 \u062f\u0627\u062e\u0644\u06cc \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u200c\u0646\u0645\u0627\u06cc\u062f (\u0628\u0631\u0627\u06cc \u062a\u0648\u0636\u06cc\u062d\u0627\u062a \u0628\u06cc\u0634\u062a\u0631 \u0628\u0647 \u0627\u06cc\u0646\u062c\u0627 \u0645\u0631\u0627\u062c\u0639\u0647 \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f).",source:"@site/docs/simotel/3- callcenter-docs/6-dialplan/2-components/7-extension_api.md",sourceDirName:"simotel/3- callcenter-docs/6-dialplan/2-components",slug:"/simotel/callcenter-docs/dialplan/components/extension_api",permalink:"/docs/simotel/callcenter-docs/dialplan/components/extension_api",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"Docs",previous:{title:"Extension",permalink:"/docs/simotel/callcenter-docs/dialplan/components/extension"},next:{title:"Queue",permalink:"/docs/simotel/callcenter-docs/dialplan/components/queue"}},l={},s=[],p={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"extension-api"},"Extension API"),(0,o.kt)("p",null,"\u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u062a\u0645\u0627\u0633 \u0628\u0647 \u0633\u0645\u062a \u06cc\u06a9 \u062f\u0627\u062e\u0644\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f. \u0639\u0645\u0644\u06a9\u0631\u062f \u0622\u0646 \u0645\u0634\u0627\u0628\u0647 Extension \u0627\u0633\u062a\u060c \u0628\u0627 \u0627\u06cc\u0646 \u062a\u0641\u0627\u0648\u062a \u06a9\u0647 \u0627\u0632 \u0637\u0631\u06cc\u0642 \u0648\u0628\u200c\u200c\u0633\u0631\u0648\u06cc\u0633\u060c \u0634\u0645\u0627\u0631\u0647 \u062f\u0627\u062e\u0644\u06cc \u0645\u0642\u0635\u062f \u0631\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u0648 \u062a\u0646\u0647\u0627 \u062a\u0645\u0627\u0633 \u0631\u0627 \u0628\u0631\u0627\u06cc \u0622\u0646 \u062f\u0627\u062e\u0644\u06cc \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u200c\u0646\u0645\u0627\u06cc\u062f (\u0628\u0631\u0627\u06cc \u062a\u0648\u0636\u06cc\u062d\u0627\u062a \u0628\u06cc\u0634\u062a\u0631 \u0628\u0647 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/api/callcenter_api/SimoTelClient/ComponentsApi/exten_api"},"\u0627\u06cc\u0646\u062c\u0627"))," \u0645\u0631\u0627\u062c\u0639\u0647 \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f)."))}m.isMDXComponent=!0}}]);