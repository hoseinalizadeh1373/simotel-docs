"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[51424],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),v=a,d=p["".concat(i,".").concat(v)]||p[v]||m[v]||s;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=v;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},35641:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const s={},o="Server Status",l={unversionedId:"simotel/callcenter-docs/maintenance/server_status",id:"version-6.2.0/simotel/callcenter-docs/maintenance/server_status",title:"Server Status",description:"\u0627\u0632\u0622\u0646\u200c\u062c\u0627 \u06a9\u0647 \u0645\u0631\u06a9\u0632 \u062a\u0645\u0627\u0633 \u06cc\u06a9 \u0633\u06cc\u0633\u062a\u0645 \u0627\u0631\u062a\u0628\u0627\u0637\u06cc \u0648 \u0645\u0647\u0645 \u062f\u0631 \u0647\u0631 \u0633\u0627\u0632\u0645\u0627\u0646 \u0645\u062d\u0633\u0648\u0628 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c \u0627\u0645\u06a9\u0627\u0646 \u0646\u0638\u0627\u0631\u062a \u0648 \u062e\u0637\u0627\u06cc\u0627\u0628\u06cc \u0627\u0632 \u0622\u0646 \u0627\u0647\u0645\u06cc\u062a \u062f\u0627\u0631\u062f. \u0628\u0631\u0627\u06cc \u062d\u0635\u0648\u0644 \u0627\u0637\u0645\u06cc\u0646\u0627\u0646 \u0627\u0632 \u0627\u062c\u0631\u0627\u06cc \u0635\u062d\u06cc\u062d \u0627\u062c\u0632\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0645\u0631\u0643\u0632 \u062a\u0645\u0627\u0633\u060c \u0633\u06cc\u0645\u0648\u062a\u0644 \u0648\u0636\u0639\u06cc\u062a \u0633\u0631\u0648\u06cc\u0633\u200c\u200c\u0647\u0627\u06cc \u062f\u0627\u062e\u0644\u06cc \u0631\u0627 \u062f\u0631 \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u0646\u0645\u0627\u06cc\u0634 \u0645\u06cc\u200c\u062f\u0647\u062f. \u062f\u0631 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0647\u0645\u0686\u0646\u06cc\u0646 \u0627\u0645\u0643\u0627\u0646\u0627\u062a\u06cc \u0628\u0631\u0627\u06cc \u0631\u06cc\u0628\u0648\u062a \u06a9\u0631\u062f\u0646 \u0633\u0631\u0648\u0631 \u0648 \u062a\u063a\u06cc\u06cc\u0631 \u0633\u0627\u0639\u062a \u0633\u0631\u0648\u0631 \u062f\u0631\u0646\u0638\u0631 \u06af\u0631\u0641\u062a\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a.",source:"@site/versioned_docs/version-6.2.0/simotel/3- callcenter-docs/8-maintenance/5-server_status.md",sourceDirName:"simotel/3- callcenter-docs/8-maintenance",slug:"/simotel/callcenter-docs/maintenance/server_status",permalink:"/docs/6.2.0/simotel/callcenter-docs/maintenance/server_status",draft:!1,tags:[],version:"6.2.0",sidebarPosition:5,frontMatter:{},sidebar:"version-6.2.0/Docs",previous:{title:"Activity Log",permalink:"/docs/6.2.0/simotel/callcenter-docs/maintenance/activity_log"},next:{title:"General Settings",permalink:"/docs/6.2.0/simotel/callcenter-docs/maintenance/settings/general_settings"}},i={},c=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc Server Status",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-server-status",level:2},{value:"Server Status HA",id:"server-status-ha",level:2},{value:"\u0628\u062e\u0634 Channels Status",id:"\u0628\u062e\u0634-channels-status",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"server-status"},"Server Status"),(0,a.kt)("p",null,"\u0627\u0632\u0622\u0646\u200c\u062c\u0627 \u06a9\u0647 \u0645\u0631\u06a9\u0632 \u062a\u0645\u0627\u0633 \u06cc\u06a9 \u0633\u06cc\u0633\u062a\u0645 \u0627\u0631\u062a\u0628\u0627\u0637\u06cc \u0648 \u0645\u0647\u0645 \u062f\u0631 \u0647\u0631 \u0633\u0627\u0632\u0645\u0627\u0646 \u0645\u062d\u0633\u0648\u0628 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c \u0627\u0645\u06a9\u0627\u0646 \u0646\u0638\u0627\u0631\u062a \u0648 \u062e\u0637\u0627\u06cc\u0627\u0628\u06cc \u0627\u0632 \u0622\u0646 \u0627\u0647\u0645\u06cc\u062a \u062f\u0627\u0631\u062f. \u0628\u0631\u0627\u06cc \u062d\u0635\u0648\u0644 \u0627\u0637\u0645\u06cc\u0646\u0627\u0646 \u0627\u0632 \u0627\u062c\u0631\u0627\u06cc \u0635\u062d\u06cc\u062d \u0627\u062c\u0632\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0645\u0631\u0643\u0632 \u062a\u0645\u0627\u0633\u060c \u0633\u06cc\u0645\u0648\u062a\u0644 \u0648\u0636\u0639\u06cc\u062a \u0633\u0631\u0648\u06cc\u0633\u200c\u200c\u0647\u0627\u06cc \u062f\u0627\u062e\u0644\u06cc \u0631\u0627 \u062f\u0631 \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u0646\u0645\u0627\u06cc\u0634 \u0645\u06cc\u200c\u062f\u0647\u062f. \u062f\u0631 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0647\u0645\u0686\u0646\u06cc\u0646 \u0627\u0645\u0643\u0627\u0646\u0627\u062a\u06cc \u0628\u0631\u0627\u06cc \u0631\u06cc\u0628\u0648\u062a \u06a9\u0631\u062f\u0646 \u0633\u0631\u0648\u0631 \u0648 \u062a\u063a\u06cc\u06cc\u0631 \u0633\u0627\u0639\u062a \u0633\u0631\u0648\u0631 \u062f\u0631\u0646\u0638\u0631 \u06af\u0631\u0641\u062a\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a."),(0,a.kt)("h2",{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-server-status"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc Server Status"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Reset Server"),": \u0628\u0627 \u06a9\u0644\u06cc\u06a9 \u0628\u0631\u0631\u0648\u06cc \u0627\u06cc\u0646 \u06af\u0632\u06cc\u0646\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646 \u0633\u0631\u0648\u0631 \u0631\u0627 \u0631\u06cc\u0633\u062a \u06a9\u0631\u062f."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Remove Server"),":\u0627\u06cc\u0646 \u0642\u0627\u0628\u0644\u06cc\u062a \u0632\u0645\u0627\u0646\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u06a9\u0647 \u0686\u0646\u062f\u06cc\u0646 Server Status \u062f\u0631 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u0648\u062f \u0648 \u0628\u0631\u0627\u06cc \u062d\u0630\u0641 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Adjust Server Time"),": \u0627\u0632 \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u0628\u0631\u0627\u06cc \u062a\u063a\u06cc\u06cc\u0631 \u0633\u0627\u0639\u062a \u0633\u0631\u0648\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.")),(0,a.kt)("h2",{id:"server-status-ha"},"Server Status HA"),(0,a.kt)("p",null,"\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0633\u0631\u0648\u06cc\u0633 HA \u0628\u0631 \u0631\u0648\u06cc \u0633\u0631\u0648\u0631 \u0631\u0627\u0647\u200c\u0627\u0646\u062f\u0627\u0632\u06cc \u0634\u062f\u0647 \u0628\u0627\u0634\u062f \u0628\u0647 \u062c\u0627\u06cc \u0645\u0642\u062f\u0627\u0631 ",(0,a.kt)("inlineCode",{parentName:"p"},"Current server is not in HA mode.")," \u0648\u0636\u0639\u06cc\u062a \u0633\u0631\u0648\u0631\u0647\u0627\u06cc HA \u0634\u062f\u0647 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c \u062f\u0631\u200c\u0627\u06cc\u0646 \u0628\u062e\u0634 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0648\u0636\u0639\u06cc\u062a \u0633\u0631\u0648\u0631\u200c\u0647\u0627\u06cc HA \u0631\u0627 \u0645\u0627\u0646\u06cc\u062a\u0648\u0631 \u06a9\u0646\u06cc\u062f. \u0627\u0637\u0644\u0627\u0639\u0627\u062a\u06cc \u06a9\u0647 \u062f\u0631\u0627\u06cc\u0646 \u0628\u062e\u0634 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u0634\u0627\u0645\u0644"),(0,a.kt)("p",null,"\u06f1. ",(0,a.kt)("strong",{parentName:"p"},"Uptime"),": \u0632\u0645\u0627\u0646 \u0641\u0639\u0627\u0644 \u0628\u0648\u062f\u0646 \u0647\u0631 \u0633\u0631\u0648\u0631 \u0631\u0627 \u0646\u0634\u0627\u0646 \u0645\u06cc\u200c\u062f\u0647\u062f."),(0,a.kt)("p",null,"\u06f2. ",(0,a.kt)("strong",{parentName:"p"},"State"),": \u0648\u0636\u0639\u06cc\u062a \u0633\u0631\u0648\u0631\u0647\u0627 \u06a9\u0647 \u0634\u0627\u0645\u0644: ",(0,a.kt)("strong",{parentName:"p"},"PRIMARY"),"(\u0633\u0631\u0648\u0631 \u0632\u06cc\u0631\u0628\u0627\u0631)\u060c ",(0,a.kt)("strong",{parentName:"p"},"SECONDARY"),"(\u0633\u0631\u0648\u0631 \u062c\u0627\u06cc\u06af\u0632\u06cc\u0646)\u060c ",(0,a.kt)("strong",{parentName:"p"},"ARBITER"),"(\u0633\u0631\u0648\u0631 \u0631\u0627\u06cc\u200c\u062f\u0647\u0646\u062f\u0647) \u0645\u06cc\u200c\u0628\u0627\u0634\u062f."),(0,a.kt)("p",null,"\u06f3. ",(0,a.kt)("strong",{parentName:"p"},"Syncing"),": \u0648\u0636\u0639\u06cc\u062a \u0647\u0645\u06af\u0627\u0645\u200c\u0633\u0627\u0632\u06cc \u067e\u0627\u06cc\u06af\u0627\u0647 \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u0633\u0631\u0648\u0631\u0647\u0627 \u0631\u0627 \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u06a9\u0646\u062f. \u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u062f\u0631 \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a ",(0,a.kt)("strong",{parentName:"p"},"connection refused")," \u0645\u0634\u0627\u0647\u062f\u0647 \u0634\u0648\u062f \u06cc\u0639\u0646\u06cc \u067e\u0627\u06cc\u06af\u0627\u0647\u200c\u062f\u0627\u062f\u0647 \u0633\u0631\u0648\u0631 \u0641\u0639\u0627\u0644 \u0646\u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u0648 \u0633\u0631\u0648\u06cc\u0633 HA \u0628\u0647 \u0645\u0634\u06a9\u0644 \u0628\u0631\u0645\u06cc\u200c\u062e\u0648\u0631\u062f."),(0,a.kt)("p",null,"\u06f4. ",(0,a.kt)("strong",{parentName:"p"},"Priority"),": \u0627\u0644\u0648\u06cc\u062a \u0647\u0631\u06cc\u06a9 \u0627\u0632 \u0633\u0631\u0648\u0631\u0647\u0627 \u0631\u0627 \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u06a9\u0646\u062f."),(0,a.kt)("p",null,"\u06f5. ",(0,a.kt)("strong",{parentName:"p"},"Votes"),": \u0645\u06cc\u0632\u0627\u0646 \u0631\u0627\u06cc \u0647\u0631 \u0633\u0631\u0648\u0631 \u062f\u0631 \u062a\u0635\u0645\u06cc\u0645 \u06af\u06cc\u0631\u06cc \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0635\u062d\u062a\u200c\u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u0631\u0627 \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u06a9\u0646\u062f."),(0,a.kt)("h2",{id:"\u0628\u062e\u0634-channels-status"},"\u0628\u062e\u0634 Channels Status"),(0,a.kt)("p",null,"\u062f\u0631 \u0627\u06cc\u0646 \u0642\u0633\u0645\u062a \u06a9\u0627\u0646\u0627\u0644\u200c\u0647\u0627\u06cc \u062a\u0645\u0627\u0633 \u062f\u0631\u06af\u06cc\u0631 \u062f\u0631 \u0633\u0631\u0648\u0631 \u0648 \u0648\u0636\u0639\u06cc\u062a \u0622\u0646\u0647\u0627 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f. \u0628\u0627 \u06a9\u0644\u06cc\u06a9 \u0628\u0631 \u0631\u0648\u0631\u06cc \u274c \u06a9\u0627\u0646\u0627\u0644 \u0628\u0631\u0642\u0631\u0627\u0631 \u0634\u062f\u0647 \u0628\u0633\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."))}m.isMDXComponent=!0}}]);