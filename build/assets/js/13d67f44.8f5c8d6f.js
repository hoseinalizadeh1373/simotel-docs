"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[21677],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,u=m["".concat(p,".").concat(f)]||m[f]||d[f]||i;return r?n.createElement(u,o(o({ref:t},s),{},{components:r})):n.createElement(u,o({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},66997:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:2},o="Transfer",l={unversionedId:"api/callcenter_api/SimoTelWebHooks/EventsApi/transfer",id:"version-6.2.0/api/callcenter_api/SimoTelWebHooks/EventsApi/transfer",title:"Transfer",description:"\u0647\u0646\u06af\u0627\u0645\u06cc\u200c \u0643\u0647 \u06a9\u0627\u0631\u0628\u0631\u06cc \u062f\u0631 \u0633\u06cc\u0645\u0648\u062a\u0644 \u062a\u0645\u0627\u0633 \u062c\u0627\u0631\u06cc \u0631\u0627 \u0627\u0646\u062a\u0642\u0627\u0644\u200c \u0645\u06cc\u200c\u062f\u0647\u062f \u0631\u0648\u064a\u062f\u0627\u062f Transfer \u0627\u064a\u062c\u0627\u062f \u0645\u06cc\u200c\u06af\u0631\u062f\u062f.",source:"@site/versioned_docs/version-6.2.0/api/1-callcenter_api/2-SimoTelWebHooks/1-EventsApi/2-transfer.md",sourceDirName:"api/1-callcenter_api/2-SimoTelWebHooks/1-EventsApi",slug:"/api/callcenter_api/SimoTelWebHooks/EventsApi/transfer",permalink:"/docs/6.2.0/api/callcenter_api/SimoTelWebHooks/EventsApi/transfer",draft:!1,tags:[],version:"6.2.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-6.2.0/docs",previous:{title:"New State",permalink:"/docs/6.2.0/api/callcenter_api/SimoTelWebHooks/EventsApi/new_state"},next:{title:"Incoming Call",permalink:"/docs/6.2.0/api/callcenter_api/SimoTelWebHooks/EventsApi/incoming_call"}},p={},c=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f Transfer",id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f-transfer",level:2}],s={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transfer"},"Transfer"),(0,a.kt)("p",null,"\u0647\u0646\u06af\u0627\u0645\u06cc\u200c \u0643\u0647 \u06a9\u0627\u0631\u0628\u0631\u06cc \u062f\u0631 \u0633\u06cc\u0645\u0648\u062a\u0644 \u062a\u0645\u0627\u0633 \u062c\u0627\u0631\u06cc \u0631\u0627 \u0627\u0646\u062a\u0642\u0627\u0644\u200c \u0645\u06cc\u200c\u062f\u0647\u062f \u0631\u0648\u064a\u062f\u0627\u062f Transfer \u0627\u064a\u062c\u0627\u062f \u0645\u06cc\u200c\u06af\u0631\u062f\u062f."),(0,a.kt)("h2",{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641\u200c\u0634\u062f\u0647"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0646\u0627\u0645 \u0631\u0648\u06cc\u062f\u0627\u062f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Transfer"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"event_name"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0645\u0627\u0631\u0647 \u062f\u0627\u062e\u0644\u06cc \u06a9\u0627\u0631\u0628\u0631\u06cc \u06a9\u0647 \u0642\u0635\u062f \u062f\u0627\u0631\u062f \u062a\u0645\u0627\u0633 711 \u0631\u0627 \u0628\u0647 553 \u0627\u0646\u062a\u0642\u0627\u0644 \u062f\u0647\u062f."),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"553"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"transfer"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0645\u0627\u0631\u0647\u200c\u0627\u06cc \u06a9\u0647 \u0642\u0631\u0627\u0631 \u0627\u0633\u062a \u062a\u0645\u0627\u0633\u0634 \u0627\u0646\u062a\u0642\u0627\u0644 \u062f\u0627\u062f\u0647\u200c \u0634\u0648\u062f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"711"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"transferred_from"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0645\u0627\u0631\u0647\u200c\u0627\u06cc \u06a9\u0647 \u0642\u0631\u0627\u0631 \u0627\u0633\u062a \u062a\u0645\u0627\u0633 \u062c\u0627\u0631\u06cc \u0622\u0646 \u0627\u0646\u062a\u0642\u0627\u0644 \u06cc\u0627\u0628\u062f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"557"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"transferred_to"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627\u06cc \u062a\u0645\u0627\u0633 \u06a9\u0647 \u062a\u0648\u0633\u0637 PBX \u062a\u0648\u0644\u06cc\u062f \u0645\u06cc\u200c\u06af\u0631\u062f\u062f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1510564538.919"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"unique_id"))))),(0,a.kt)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f-transfer"},"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f Transfer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "event_name": "Transfer",\n  "unique_id": "1613906376.30",\n  "transferer": "993",\n  "transferred_from": "991",\n  "transferred_to": "993"\n}\n\u2026\n')))}d.isMDXComponent=!0}}]);