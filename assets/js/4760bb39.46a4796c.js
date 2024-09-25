"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[1646],{4304:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>u,metadata:()=>i,toc:()=>d});var r=n(4848),a=n(8453),l=n(1470),s=n(9365);const u={},c="Batch Add Agent",i={id:"developers/api/SimotelAPI/v4/queues/queue_batchaddagent",title:"Batch Add Agent",description:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0648\u062f\u0646 \u062f\u0633\u062a\u0647\u200c\u0627\u06cc \u0627\u067e\u0631\u0627\u062a\u0648\u0631\u0647\u0627 \u0628\u0647 \u0635\u0641 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/1-api/2-SimotelAPI/v4/6-queues/9-queue_batchaddagent.md",sourceDirName:"developers/1-api/2-SimotelAPI/v4/6-queues",slug:"/developers/api/SimotelAPI/v4/queues/queue_batchaddagent",permalink:"/docs/developers/api/SimotelAPI/v4/queues/queue_batchaddagent",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"docs",previous:{title:"Remove Agent",permalink:"/docs/developers/api/SimotelAPI/v4/queues/queue_removeagent"},next:{title:"Batch pause Agent",permalink:"/docs/developers/api/SimotelAPI/v4/queues/queue_batchpauseagent"}},o={},d=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}];function h(t){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...t.components},{Details:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"batch-add-agent",children:"Batch Add Agent"})}),"\n",(0,r.jsx)(e.p,{children:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0648\u062f\u0646 \u062f\u0633\u062a\u0647\u200c\u0627\u06cc \u0627\u067e\u0631\u0627\u062a\u0648\u0631\u0647\u0627 \u0628\u0647 \u0635\u0641 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."}),"\n",(0,r.jsx)(e.h2,{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"}),"\n",(0,r.jsx)("div",{class:"custom-table",children:(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc[**]/\u0645\u0646\u0637\u0642\u06cc[*]"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647 \u0635\u0641"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"999"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"**"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"queue"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647 \u062f\u0627\u062e\u0644\u06cc"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"570"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"**"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"source"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647 \u0627\u067e\u0631\u0627\u062a\u0648\u0631"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"570"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"**"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"agents"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\u0627\u0648\u0644\u0648\u06cc\u062a \u062f\u0631 \u0635\u0641"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"1"}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"penalty"})]})]})]})}),"\n",(0,r.jsx)(e.h2,{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",children:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"}),"\n","\n",(0,r.jsxs)(l.A,{defaultValue:"usageCode",values:[{label:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647",value:"usageCode"},{label:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc",value:"outputCode"}],children:[(0,r.jsx)(s.A,{value:"usageCode",children:(0,r.jsxs)(l.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Curl",value:"Curl"}],children:[(0,r.jsx)(s.A,{value:"PHP",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f PHP"}),(0,r.jsx)("br",{}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:'\t<?php\n\n\t$curl = curl_init();\n\n\tcurl_setopt_array($curl, array(\n\tCURLOPT_URL => \'http://192.168.51.20/api/v4/pbx/queues/batchaddagent\',\n\tCURLOPT_RETURNTRANSFER => true,\n\tCURLOPT_ENCODING => \'\',\n\tCURLOPT_MAXREDIRS => 10,\n\tCURLOPT_TIMEOUT => 0,\n\tCURLOPT_FOLLOWLOCATION => true,\n\tCURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n\tCURLOPT_CUSTOMREQUEST => \'POST\',\n\tCURLOPT_POSTFIELDS =>\'{\n\t\t"agents":[\n\t\t\t{"queue": "10000", "source": "570", "agent": "570", "penalty": ""},\n\t\t\t{"queue": "10000", "source": "553", "agent": "553", "penalty": ""}\n\t\t]\n\t}\',\n\tCURLOPT_HTTPHEADER => array(\n\t\t\'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG\',\n\t\t\'Authorization: Basic c2Fkcjo=\',\n\t\t\'Content-Type: application/json\'\n\t),\n\t));\n\n\t$response = curl_exec($curl);\n\n\tcurl_close($curl);\n\techo $response;\n?>\n'})})]})}),(0,r.jsx)(s.A,{value:"JS",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f JS"}),(0,r.jsx)("br",{}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'\t<html>\n\t\t<head>\n\t\t\t<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n\t\t</head>\n\t\t<body>\n\t\t\t\t<script>\n\t\t\t\t\tvar settings = {\n\t\t\t\t\t"url": "http://192.168.51.20/api/v4/pbx/queues/batchaddagent",\n\t\t\t\t\t"method": "POST",\n\t\t\t\t\t"timeout": 0,\n\t\t\t\t\t"headers": {\n\t\t\t\t\t\t"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",\n\t\t\t\t\t\t"Authorization": "Basic c2Fkcjo=",\n\t\t\t\t\t\t"Content-Type": "application/json"\n\t\t\t\t\t},\n\t\t\t\t\t"data": JSON.stringify({\n\t\t\t\t\t\t"agents": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"queue": "10000",\n\t\t\t\t\t\t\t"source": "570",\n\t\t\t\t\t\t\t"agent": "570",\n\t\t\t\t\t\t\t"penalty": ""\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"queue": "10000",\n\t\t\t\t\t\t\t"source": "553",\n\t\t\t\t\t\t\t"agent": "553",\n\t\t\t\t\t\t\t"penalty": ""\n\t\t\t\t\t\t}\n\t\t\t\t\t\t]\n\t\t\t\t\t}),\n\t\t\t\t\t};\n\n\t\t\t\t\t$.ajax(settings).done(function (response) {\n\t\t\t\t\tconsole.log(response);\n\t\t\t\t\t});\n\t\t\t\t<\/script>\n\t\t</body>\n\t</html>\n'})})]})}),(0,r.jsx)(s.A,{value:"Curl",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f Curl"}),(0,r.jsx)("br",{}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'\tcurl --location --request POST \'http://192.168.51.20/api/v4/pbx/queues/batchaddagent\' \\\n\t--header \'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG\' \\\n\t--header \'Authorization: Basic c2Fkcjo=\' \\\n\t--header \'Content-Type: application/json\' \\\n\t--data-raw \'{\n\t\t"agents":[\n\t\t\t{"queue": "10000", "source": "570", "agent": "570", "penalty": ""},\n\t\t\t{"queue": "10000", "source": "553", "agent": "553", "penalty": ""}\n\t\t]\n\t}\'\n'})})]})})]})}),(0,r.jsx)(s.A,{value:"outputCode",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:'{\n    "success": 1,\n    "message": "",\n    "data": {\n        "Data": [\n            {\n                "agents": "570",\n                "message": "Added successfully",\n                "ok": 1,\n                "penalty": "",\n                "queue": "10000",\n                "source": "570"\n            },\n            {\n                "agents": "553",\n                "message": "Added successfully",\n                "ok": 1,\n                "penalty": "",\n                "queue": "10000",\n                "source": "553"\n            }\n        ],\n        "ok": 1\n    }\n}\n'})})})]})]})}function p(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(h,{...t})}):h(t)}},9365:(t,e,n)=>{n.d(e,{A:()=>s});n(6540);var r=n(8215);const a={tabItem:"tabItem_Ymn6"};var l=n(4848);function s(t){let{children:e,hidden:n,className:s}=t;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:e})}},1470:(t,e,n)=>{n.d(e,{A:()=>A});var r=n(6540),a=n(8215),l=n(3104),s=n(6347),u=n(205),c=n(7485),i=n(1682),o=n(679);function d(t){return r.Children.toArray(t).filter((t=>"\n"!==t)).map((t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??function(t){return d(t).map((t=>{let{props:{value:e,label:n,attributes:r,default:a}}=t;return{value:e,label:n,attributes:r,default:a}}))}(n);return function(t){const e=(0,i.XI)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function p(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function x(t){let{queryString:e=!1,groupId:n}=t;const a=(0,s.W6)(),l=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,c.aZ)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(a.location.search);e.set(l,t),a.replace({...a.location,search:e.toString()})}),[l,a])]}function g(t){const{defaultValue:e,queryString:n=!1,groupId:a}=t,l=h(t),[s,c]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=n.find((t=>t.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:l}))),[i,d]=x({queryString:n,groupId:a}),[g,b]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[a,l]=(0,o.Dv)(n);return[a,(0,r.useCallback)((t=>{n&&l.set(t)}),[n,l])]}({groupId:a}),m=(()=>{const t=i??g;return p({value:t,tabValues:l})?t:null})();(0,u.A)((()=>{m&&c(m)}),[m]);return{selectedValue:s,selectValue:(0,r.useCallback)((t=>{if(!p({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);c(t),d(t),b(t)}),[d,b,l]),tabValues:l}}var b=n(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(4848);function v(t){let{className:e,block:n,selectedValue:r,selectValue:s,tabValues:u}=t;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),o=t=>{const e=t.currentTarget,n=c.indexOf(e),a=u[n].value;a!==r&&(i(e),s(a))},d=t=>{let e=null;switch(t.key){case"Enter":o(t);break;case"ArrowRight":{const n=c.indexOf(t.currentTarget)+1;e=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(t.currentTarget)-1;e=c[n]??c[c.length-1];break}}e?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},e),children:u.map((t=>{let{value:e,label:n,attributes:l}=t;return(0,j.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:t=>c.push(t),onKeyDown:d,onClick:o,...l,className:(0,a.A)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":r===e}),children:n??e},e)}))})}function f(t){let{lazy:e,children:n,selectedValue:l}=t;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=s.find((t=>t.props.value===l));return t?(0,r.cloneElement)(t,{className:(0,a.A)("margin-top--md",t.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==l})))})}function y(t){const e=g(t);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(f,{...e,...t})]})}function A(t){const e=(0,b.A)();return(0,j.jsx)(y,{...t,children:d(t.children)},String(e))}},8453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>u});var r=n(6540);const a={},l=r.createContext(a);function s(t){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function u(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:s(t.components),r.createElement(l.Provider,{value:e},t.children)}}}]);