"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[17499],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},o="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,m=c(t,["components","mdxType","originalType","parentName"]),o=d(n),N=a,g=o["".concat(p,".").concat(N)]||o[N]||k[N]||i;return n?r.createElement(g,l(l({ref:e},m),{},{components:n})):r.createElement(g,l({ref:e},m))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=N;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c[o]="string"==typeof t?t:a,l[1]=c;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}N.displayName="MDXCreateElement"},79511:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={},l="CDR Queue",c={unversionedId:"callcenter_api/SimoTelEventAPI/events/cdr_queue",id:"version-4.0.0/callcenter_api/SimoTelEventAPI/events/cdr_queue",title:"CDR Queue",description:"\u067e\u0633 \u0627\u0632 \u0627\u062a\u0635\u0627\u0644 \u062a\u0645\u0627\u0633\u200c\u06af\u06cc\u0631\u0646\u062f\u0647 \u0628\u0647 \u06cc\u06a9\u06cc \u0627\u0632 \u0627\u067e\u0631\u0627\u062a\u0648\u0631\u0647\u0627\u06cc \u0635\u0641 \u0631\u0648\u06cc\u062f\u0627\u062f CDRQueue \u0627\u06cc\u062c\u0627\u062f \u0645\u06cc\u200c\u06af\u0631\u062f\u062f.",source:"@site/api_versioned_docs/version-4.0.0/1-callcenter_api/2-SimoTelEventAPI/2-events/9-cdr_queue.md",sourceDirName:"1-callcenter_api/2-SimoTelEventAPI/2-events",slug:"/callcenter_api/SimoTelEventAPI/events/cdr_queue",permalink:"/api/api_versioned_docs/version-4.0.0/callcenter_api/SimoTelEventAPI/events/cdr_queue",draft:!1,tags:[],version:"4.0.0",sidebarPosition:9,frontMatter:{},sidebar:"version-4.0.0/docs",previous:{title:"Outgoing Fax",permalink:"/api/api_versioned_docs/version-4.0.0/callcenter_api/SimoTelEventAPI/events/outgoing_fax"},next:{title:"VoiceMail",permalink:"/api/api_versioned_docs/version-4.0.0/callcenter_api/SimoTelEventAPI/events/voicemail"}},p={},d=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f CDR Queue",id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f-cdr-queue",level:2}],m={toc:d},o="wrapper";function k(t){let{components:e,...n}=t;return(0,a.kt)(o,(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cdr-queue"},"CDR Queue"),(0,a.kt)("p",null,"\u067e\u0633 \u0627\u0632 \u0627\u062a\u0635\u0627\u0644 \u062a\u0645\u0627\u0633\u200c\u06af\u06cc\u0631\u0646\u062f\u0647 \u0628\u0647 \u06cc\u06a9\u06cc \u0627\u0632 \u0627\u067e\u0631\u0627\u062a\u0648\u0631\u0647\u0627\u06cc \u0635\u0641 \u0631\u0648\u06cc\u062f\u0627\u062f CDRQueue \u0627\u06cc\u062c\u0627\u062f \u0645\u06cc\u200c\u06af\u0631\u062f\u062f."),(0,a.kt)("h2",{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0646\u0627\u0645 \u0631\u0648\u06cc\u062f\u0627\u062f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"CdrQueue"),(0,a.kt)("td",{parentName:"tr",align:"center"},"event_name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627\u06cc \u062a\u0645\u0627\u0633"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1610004672.198"),(0,a.kt)("td",{parentName:"tr",align:"center"},"unique_id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0645\u0627\u0631\u0647 \u0645\u0628\u062f\u0627\u0621"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"991"),(0,a.kt)("td",{parentName:"tr",align:"center"},"src")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0645\u0627\u0631\u0647 \u0645\u0642\u0635\u062f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"992"),(0,a.kt)("td",{parentName:"tr",align:"center"},"dst")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0645\u0627\u0631\u0647 \u0635\u0641"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"901"),(0,a.kt)("td",{parentName:"tr",align:"center"},"queue")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0645\u062f\u062a \u0645\u06a9\u0627\u0644\u0645\u0647"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"11"),(0,a.kt)("td",{parentName:"tr",align:"center"},"billsec")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0645\u062f\u062a \u0627\u0646\u062a\u0638\u0627\u0631"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"10"),(0,a.kt)("td",{parentName:"tr",align:"center"},"wait")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u06a9\u0644 \u0645\u062f\u062a \u062a\u0645\u0627\u0633"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"21"),(0,a.kt)("td",{parentName:"tr",align:"center"},"duration")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0645\u062f\u062a \u0627\u0646\u062a\u0638\u0627\u0631 \u062f\u0631 \u0635\u0641"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"10"),(0,a.kt)("td",{parentName:"tr",align:"center"},"agent_wait")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0648\u0636\u0639\u06cc\u062a \u062a\u0645\u0627\u0633"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"ANSWERED"),(0,a.kt)("td",{parentName:"tr",align:"center"},"disposition")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"queue_status")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0642\u0637\u0639 \u06a9\u0646\u0646\u062f \u062a\u0645\u0627\u0633"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"caller"),(0,a.kt)("td",{parentName:"tr",align:"center"},"hangup")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"comment")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0646\u0627\u0645 \u0641\u0627\u06cc\u0644 \u0635\u0648\u062a\u06cc \u0645\u06a9\u0627\u0644\u0645\u0647"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"20210107_1610004672.198.mp3"),(0,a.kt)("td",{parentName:"tr",align:"center"},"record")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2021-01-07 07:31:23.860004"),(0,a.kt)("td",{parentName:"tr",align:"center"},"answeredtime")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2021-01-07 07:31:13.289281"),(0,a.kt)("td",{parentName:"tr",align:"center"},"ringtime")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0632\u0645\u0627\u0646 \u0634\u0631\u0648\u0639 \u0645\u06a9\u0627\u0644\u0645\u0647"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2021-01-07 07:31:13.247554"),(0,a.kt)("td",{parentName:"tr",align:"center"},"starttime")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0632\u0645\u0627\u0646 \u067e\u0627\u06cc\u0627\u0646 \u0645\u06a9\u0627\u0644\u0645\u0647"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2021-01-07 07:31:35.077859"),(0,a.kt)("td",{parentName:"tr",align:"center"},"endtime")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"991"),(0,a.kt)("td",{parentName:"tr",align:"center"},"detail->src")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"992"),(0,a.kt)("td",{parentName:"tr",align:"center"},"detail->dst")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"11"),(0,a.kt)("td",{parentName:"tr",align:"center"},"detail->billsec")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"10"),(0,a.kt)("td",{parentName:"tr",align:"center"},"detail->wait")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"ANSWERED"),(0,a.kt)("td",{parentName:"tr",align:"center"},"detail->disposition")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"detail->comment")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"detail->tries")))),(0,a.kt)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f-cdr-queue"},"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f CDR Queue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "event_name": "CdrQueue",\n  "unique_id": "1610782193.391",\n  "src": "992",\n  "dst": "993",\n  "queue": "902",\n  "billsec": "31",\n  "wait": "3",\n  "duration": "34",\n  "agent_wait": "3",\n  "disposition": "ANSWERED",\n  "hangup": "agent",\n  "queue_status": "CONTINUE",\n  "record": "20210116_1610782193.391.mp3",\n  "answeredtime": "2021-01-16 07:29:56.819506",\n  "ringtime": "2021-01-16 07:29:53.382906",\n  "starttime": "2021-01-16 07:29:53.310319",\n  "endtime": "2021-01-16 07:30:28.794906",\n  "detail": [\n    {\n      "src": "992",\n      "dst": "993",\n      "billsec": "31",\n      "wait": "3",\n      "disposition": "ANSWERED",\n      "comment": "",\n      "tries": "1"\n    }\n  ]\n}\n')))}k.isMDXComponent=!0}}]);