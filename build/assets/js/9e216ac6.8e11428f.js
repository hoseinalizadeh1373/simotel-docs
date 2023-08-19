"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[91128],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),m=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},c=function(t){var e=m(t.components);return r.createElement(d.Provider,{value:e},t.children)},k="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,d=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),k=m(n),N=a,g=k["".concat(d,".").concat(N)]||k[N]||o[N]||i;return n?r.createElement(g,p(p({ref:e},c),{},{components:n})):r.createElement(g,p({ref:e},c))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,p=new Array(i);p[0]=N;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l[k]="string"==typeof t?t:a,p[1]=l;for(var m=2;m<i;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}N.displayName="MDXCreateElement"},87102:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const i={},p="CDR Queue",l={unversionedId:"api/callcenter_api/SimoTelClient/EventsApi/cdr_queue",id:"api/callcenter_api/SimoTelClient/EventsApi/cdr_queue",title:"CDR Queue",description:"\u067e\u0633 \u0627\u0632 \u0627\u062a\u0635\u0627\u0644 \u062a\u0645\u0627\u0633\u200c\u06af\u06cc\u0631\u0646\u062f\u0647 \u0628\u0647 \u06cc\u06a9\u06cc \u0627\u0632 \u0627\u067e\u0631\u0627\u062a\u0648\u0631\u0647\u0627\u06cc \u0635\u0641 \u0631\u0648\u06cc\u062f\u0627\u062f CDRQueue \u0627\u06cc\u062c\u0627\u062f \u0645\u06cc\u200c\u06af\u0631\u062f\u062f.",source:"@site/docs/api/1-callcenter_api/3-SimoTelClient/1-EventsApi/9-cdr_queue.md",sourceDirName:"api/1-callcenter_api/3-SimoTelClient/1-EventsApi",slug:"/api/callcenter_api/SimoTelClient/EventsApi/cdr_queue",permalink:"/docs/api/callcenter_api/SimoTelClient/EventsApi/cdr_queue",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"docs",previous:{title:"Outgoing Fax",permalink:"/docs/api/callcenter_api/SimoTelClient/EventsApi/outgoing_fax"},next:{title:"VoiceMail",permalink:"/docs/api/callcenter_api/SimoTelClient/EventsApi/voicemail"}},d={},m=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f CDR Queue",id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f-cdr-queue",level:2}],c={toc:m},k="wrapper";function o(t){let{components:e,...n}=t;return(0,a.kt)(k,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cdr-queue"},"CDR Queue"),(0,a.kt)("p",null,"\u067e\u0633 \u0627\u0632 \u0627\u062a\u0635\u0627\u0644 \u062a\u0645\u0627\u0633\u200c\u06af\u06cc\u0631\u0646\u062f\u0647 \u0628\u0647 \u06cc\u06a9\u06cc \u0627\u0632 \u0627\u067e\u0631\u0627\u062a\u0648\u0631\u0647\u0627\u06cc \u0635\u0641 \u0631\u0648\u06cc\u062f\u0627\u062f CDRQueue \u0627\u06cc\u062c\u0627\u062f \u0645\u06cc\u200c\u06af\u0631\u062f\u062f."),(0,a.kt)("h2",{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0646\u0627\u0645 \u0631\u0648\u06cc\u062f\u0627\u062f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"CdrQueue"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"event_name"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627\u06cc \u062a\u0645\u0627\u0633"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1610004672.198"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"cuid"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0646\u0627\u0633\u0647 \u062a\u0645\u0627\u0633 \u062f\u0648 \u0637\u0631\u0641\u0647"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"orig.call.1683107010.780601"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"originated_call_id"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0645\u0627\u0631\u0647 \u0645\u0628\u062f\u0627\u0621"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"991"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"src"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0645\u0627\u0631\u0647 \u0645\u0642\u0635\u062f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"992"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"dst"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0645\u0627\u0631\u0647 \u0635\u0641"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"901"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"queue"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0645\u062f\u062a \u0645\u06a9\u0627\u0644\u0645\u0647"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"11"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"billsec"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0645\u062f\u062a \u0627\u0646\u062a\u0638\u0627\u0631"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"10"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"wait"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u06a9\u0644 \u0645\u062f\u062a \u062a\u0645\u0627\u0633"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"21"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"duration"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0645\u062f\u062a \u0627\u0646\u062a\u0638\u0627\u0631 \u062f\u0631 \u0635\u0641"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"10"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"agent_wait"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0648\u0636\u0639\u06cc\u062a \u062a\u0645\u0627\u0633"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"ANSWERED"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"disposition"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"queue_status"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0642\u0637\u0639 \u06a9\u0646\u0646\u062f \u062a\u0645\u0627\u0633"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"caller"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"hangup"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"comment"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0646\u0627\u0645 \u0641\u0627\u06cc\u0644 \u0635\u0648\u062a\u06cc \u0645\u06a9\u0627\u0644\u0645\u0647"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"20210107_1610004672.198.mp3"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"record"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2021-01-07 07:31:23.860004"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"answeredtime"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2021-01-07 07:31:13.289281"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"ringtime"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0632\u0645\u0627\u0646 \u0634\u0631\u0648\u0639 \u0645\u06a9\u0627\u0644\u0645\u0647"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2021-01-07 07:31:13.247554"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"starttime"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0632\u0645\u0627\u0646 \u067e\u0627\u06cc\u0627\u0646 \u0645\u06a9\u0627\u0644\u0645\u0647"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2021-01-07 07:31:35.077859"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"endtime"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"991"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"detail->src"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"992"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"detail->dst"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"11"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"detail->billsec"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"10"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"detail->wait"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"ANSWERED"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"detail->disposition"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"detail->comment"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"detail->tries"))))),(0,a.kt)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f-cdr-queue"},"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f CDR Queue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "event_name": "CdrQueue",\n  "unique_id": "1610782193.391",\n  "src": "992",\n  "dst": "993",\n  "queue": "902",\n  "billsec": "31",\n  "wait": "3",\n  "duration": "34",\n  "agent_wait": "3",\n  "disposition": "ANSWERED",\n  "hangup": "agent",\n  "queue_status": "CONTINUE",\n  "record": "20210116_1610782193.391.mp3",\n  "answeredtime": "2021-01-16 07:29:56.819506",\n  "ringtime": "2021-01-16 07:29:53.382906",\n  "starttime": "2021-01-16 07:29:53.310319",\n  "endtime": "2021-01-16 07:30:28.794906",\n  "detail": [\n    {\n      "src": "992",\n      "dst": "993",\n      "billsec": "31",\n      "wait": "3",\n      "disposition": "ANSWERED",\n      "comment": "",\n      "tries": "1"\n    }\n  ]\n}\n')))}o.isMDXComponent=!0}}]);