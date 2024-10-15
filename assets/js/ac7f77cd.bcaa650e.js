"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[2635],{4130:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(4848),l=n(8453),a=n(1470),s=n(9365);const i={},c="BlackList Search",o={id:"developers/SimotelAPI/v4/blacklist/blacklist_search",title:"BlackList Search",description:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u062c\u0633\u062a\u062c\u0648 \u062f\u0631 \u0634\u0645\u0627\u0631\u0647\u200c\u0647\u0627\u06cc \u0645\u0648\u062c\u0648\u062f \u062f\u0631  \u0644\u06cc\u0633\u062a \u0633\u06cc\u0627\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/2-SimotelAPI/v4/10-blacklist/2-blacklist_search.md",sourceDirName:"developers/2-SimotelAPI/v4/10-blacklist",slug:"/developers/SimotelAPI/v4/blacklist/blacklist_search",permalink:"/developers/SimotelAPI/v4/blacklist/blacklist_search",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"BlackList Add",permalink:"/developers/SimotelAPI/v4/blacklist/blacklist_add"},next:{title:"BlackList Edit",permalink:"/developers/SimotelAPI/v4/blacklist/blacklist_edit"}},u={},d=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}];function h(t){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...t.components},{Details:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"blacklist-search",children:"BlackList Search"})}),"\n",(0,r.jsx)(e.p,{children:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u062c\u0633\u062a\u062c\u0648 \u062f\u0631 \u0634\u0645\u0627\u0631\u0647\u200c\u0647\u0627\u06cc \u0645\u0648\u062c\u0648\u062f \u062f\u0631  \u0644\u06cc\u0633\u062a \u0633\u06cc\u0627\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."}),"\n",(0,r.jsx)(e.h2,{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"}),"\n",(0,r.jsx)("div",{class:"custom-table",children:(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc[**]/\u0645\u0646\u0637\u0642\u06cc[*]"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\u06cc\u0627\u0641\u062a\u0646 \u0645\u0648\u0631\u0627\u062f \u0645\u0634\u0627\u0628\u0647"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"true/false"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"true"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"**"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"alike"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647 \u0645\u062f\u0646\u0638\u0631"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"557"}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"number"})]})]})]})}),"\n",(0,r.jsx)(e.h2,{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",children:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"}),"\n","\n",(0,r.jsxs)(a.A,{defaultValue:"usageCode",values:[{label:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647",value:"usageCode"},{label:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc",value:"outputCode"}],children:[(0,r.jsx)(s.A,{value:"usageCode",children:(0,r.jsxs)(a.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Curl",value:"Curl"}],children:[(0,r.jsx)(s.A,{value:"PHP",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f PHP"}),(0,r.jsx)("br",{}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:"\t<?php\n\n\t$curl = curl_init();\n\n\tcurl_setopt_array($curl, array(\n\t  CURLOPT_URL => 'http://192.168.51.20/api/v4/pbx/blacklists/search',\n\t  CURLOPT_RETURNTRANSFER => true,\n\t  CURLOPT_ENCODING => '',\n\t  CURLOPT_MAXREDIRS => 10,\n\t  CURLOPT_TIMEOUT => 0,\n\t  CURLOPT_FOLLOWLOCATION => true,\n\t  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n\t  CURLOPT_CUSTOMREQUEST => 'POST',\n\t  CURLOPT_POSTFIELDS =>'{\n\t\t\"alike\":\"true\",\n\t\t\"conditions\":{\n\t\t\t\"name\":\"\",\n\t\t\t\"number\":\"557\"\n\t\t}\n\t}',\n\t  CURLOPT_HTTPHEADER => array(\n\t\t'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG',\n\t\t'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==',\n\t\t'Content-Type: application/json'\n\t  ),\n\t));\n\n\t$response = curl_exec($curl);\n\n\t\tif (!curl_errno($curl)) {\n\t\t$httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);\n\t\techo 'response code:'.$httpcode, '<br/>';\n\t}\n\n\tcurl_close($curl);\n\techo $response;\n?>\n"})})]})}),(0,r.jsx)(s.A,{value:"JS",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f JS"}),(0,r.jsx)("br",{}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'\t<html>\n\t\t\t<head>\n\t\t\t\t<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n\t\t\t</head>\n\t\t<body>\n\t\t\t\t<script>\n\t\t\t\t\tvar settings = {\n\t\t\t\t\t  "url": "http://192.168.51.20/api/v4/pbx/blacklists/search",\n\t\t\t\t\t  "method": "POST",\n\t\t\t\t\t  "timeout": 0,\n\t\t\t\t\t  "headers": {\n\t\t\t\t\t\t"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\n\t\t\t\t\t\t"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",\n\t\t\t\t\t\t"Content-Type": "application/json"\n\t\t\t\t\t  },\n\t\t\t\t\t  "data": JSON.stringify({\n\t\t\t\t\t\t  "alike": "true",\n\t\t\t\t\t\t  "conditions": {\n\t\t\t\t\t\t\t"name": "",\n\t\t\t\t\t\t\t"number": "557"\n\t\t\t\t\t\t  }\n\t\t\t\t\t}),\n\t\t\t\t\t};\n\n\n\t\t\t\t\t\t$.ajax(settings).always(function (jqXHR) {\n\t\t\t\t\t\t\tconsole.log("response code: " + jqXHR.status + " " + jqXHR.statusText);\n\t\t\t\t\t\t\tconsole.log("response body: " + jqXHR.responseText);\n\t\t\t\t\t\t});\n\t\t\t\t<\/script>\n\t\t</body>\n\t</html>\n'})})]})}),(0,r.jsx)(s.A,{value:"Curl",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f Curl"}),(0,r.jsx)("br",{}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'\tcurl --location --request POST \'http://192.168.51.20/api/v4/pbx/blacklists/search\' \\\n\t--header \'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG\' \\\n\t--header \'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==\' \\\n\t--header \'Content-Type: application/json\' \\\n\t--data-raw \'{\n\t\t"alike":"true",\n\t\t"conditions":{\n\t\t\t"name":"",\n\t\t\t"number":"557"\n\t\t}\n\t}\'\n'})})]})})]})}),(0,r.jsx)(s.A,{value:"outputCode",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:'{\n    "success": 1,\n    "message": "",\n    "data": [\n        {\n            "_id": "64b7fb70e50df5528e6ce5ba",\n            "number": "557",\n            "comment": "",\n            "date": "1402-04-28 19:34:16"\n        }\n    ]\n}\n'})})})]})]})}function p(t={}){const{wrapper:e}={...(0,l.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(h,{...t})}):h(t)}},9365:(t,e,n)=>{n.d(e,{A:()=>s});n(6540);var r=n(8215);const l={tabItem:"tabItem_Ymn6"};var a=n(4848);function s(t){let{children:e,hidden:n,className:s}=t;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,s),hidden:n,children:e})}},1470:(t,e,n)=>{n.d(e,{A:()=>A});var r=n(6540),l=n(8215),a=n(3104),s=n(6347),i=n(205),c=n(7485),o=n(1682),u=n(679);function d(t){return r.Children.toArray(t).filter((t=>"\n"!==t)).map((t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??function(t){return d(t).map((t=>{let{props:{value:e,label:n,attributes:r,default:l}}=t;return{value:e,label:n,attributes:r,default:l}}))}(n);return function(t){const e=(0,o.XI)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function p(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function b(t){let{queryString:e=!1,groupId:n}=t;const l=(0,s.W6)(),a=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,c.aZ)(a),(0,r.useCallback)((t=>{if(!a)return;const e=new URLSearchParams(l.location.search);e.set(a,t),l.replace({...l.location,search:e.toString()})}),[a,l])]}function m(t){const{defaultValue:e,queryString:n=!1,groupId:l}=t,a=h(t),[s,c]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=n.find((t=>t.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:a}))),[o,d]=b({queryString:n,groupId:l}),[m,x]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[l,a]=(0,u.Dv)(n);return[l,(0,r.useCallback)((t=>{n&&a.set(t)}),[n,a])]}({groupId:l}),v=(()=>{const t=o??m;return p({value:t,tabValues:a})?t:null})();(0,i.A)((()=>{v&&c(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((t=>{if(!p({value:t,tabValues:a}))throw new Error(`Can't select invalid tab value=${t}`);c(t),d(t),x(t)}),[d,x,a]),tabValues:a}}var x=n(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(4848);function j(t){let{className:e,block:n,selectedValue:r,selectValue:s,tabValues:i}=t;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),u=t=>{const e=t.currentTarget,n=c.indexOf(e),l=i[n].value;l!==r&&(o(e),s(l))},d=t=>{let e=null;switch(t.key){case"Enter":u(t);break;case"ArrowRight":{const n=c.indexOf(t.currentTarget)+1;e=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(t.currentTarget)-1;e=c[n]??c[c.length-1];break}}e?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},e),children:i.map((t=>{let{value:e,label:n,attributes:a}=t;return(0,f.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:t=>c.push(t),onKeyDown:d,onClick:u,...a,className:(0,l.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===e}),children:n??e},e)}))})}function g(t){let{lazy:e,children:n,selectedValue:a}=t;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=s.find((t=>t.props.value===a));return t?(0,r.cloneElement)(t,{className:(0,l.A)("margin-top--md",t.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==a})))})}function y(t){const e=m(t);return(0,f.jsxs)("div",{className:(0,l.A)("tabs-container",v.tabList),children:[(0,f.jsx)(j,{...e,...t}),(0,f.jsx)(g,{...e,...t})]})}function A(t){const e=(0,x.A)();return(0,f.jsx)(y,{...t,children:d(t.children)},String(e))}},8453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>i});var r=n(6540);const l={},a=r.createContext(l);function s(t){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(l):t.components||l:s(t.components),r.createElement(a.Provider,{value:e},t.children)}}}]);