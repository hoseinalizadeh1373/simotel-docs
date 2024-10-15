"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[2602],{8701:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(4848),l=n(8453),s=n(1470),a=n(9365);const o={},u="Group Add",i={id:"developers/Autodialer_API/group/group_add",title:"Group Add",description:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0648\u062f\u0646 \u06af\u0631\u0648\u0647\u06cc \u0634\u0645\u0627\u0631\u0647\u200c\u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/5-Autodialer_API/3-group/2-group_add.md",sourceDirName:"developers/5-Autodialer_API/3-group",slug:"/developers/Autodialer_API/group/group_add",permalink:"/developers/Autodialer_API/group/group_add",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"Group Upload",permalink:"/developers/Autodialer_API/group/group_upload"},next:{title:"Group Search",permalink:"/developers/Autodialer_API/group/group_search"}},c={},d=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}];function p(t){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...t.components},{Details:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"group-add",children:"Group Add"})}),"\n",(0,r.jsx)(e.p,{children:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0648\u062f\u0646 \u06af\u0631\u0648\u0647\u06cc \u0634\u0645\u0627\u0631\u0647\u200c\u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."}),"\n",(0,r.jsx)(e.h1,{id:"\u0631\u0648\u0634-\u062f\u0648\u0645-\u0628\u0631\u0627\u06cc-\u0645\u062b\u0627\u0644-php",children:"\u0631\u0648\u0634 \u062f\u0648\u0645 \u0628\u0631\u0627\u06cc \u0645\u062b\u0627\u0644 php"}),"\n",(0,r.jsx)(e.p,{children:"\u062f\u0631 \u0631\u0648\u0634 \u062f\u0648\u0645 \u062f\u0631 \u0645\u062b\u0627\u0644 php \u0634\u0645\u0627 \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u0639\u062f \u0627\u0632 \u0628\u0627\u0631\u06af\u0632\u0627\u0631\u06cc \u0641\u0627\u06cc\u0644 filename , .csv \u0631\u0627 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0641\u06cc\u0644\u062f \u0648\u0631\u0648\u062f\u06cc \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f ."}),"\n",(0,r.jsx)(e.h2,{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"}),"\n",(0,r.jsx)("div",{class:"custom-table",children:(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc[**]/\u0645\u0646\u0637\u0642\u06cc[*]"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\u0646\u0627\u0645 \u06af\u0631\u0648\u0647"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"test_group"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"**"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"name"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647\u200c\u0647\u0627"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:'"1111", "2222", "3333"'}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"numbers"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"just for test"}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"description"})]})]})]})}),"\n",(0,r.jsx)(e.h2,{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",children:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"}),"\n","\n",(0,r.jsxs)(s.A,{defaultValue:"usageCode",values:[{label:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647",value:"usageCode"},{label:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc",value:"outputCode"}],children:[(0,r.jsx)(a.A,{value:"usageCode",children:(0,r.jsxs)(s.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"PHP-example2",value:"PHP-example2"},{label:"JS",value:"JS"},{label:"Curl",value:"Curl"}],children:[(0,r.jsx)(a.A,{value:"PHP",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f PHP"}),(0,r.jsx)("br",{}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:'\t<?php\n\n\t$curl = curl_init();\n\n\tcurl_setopt_array($curl, array(\n\t  CURLOPT_URL => "http://192.168.51.21/api/v4/autodialer/groups/add",\n\t  CURLOPT_RETURNTRANSFER => true,\n\t  CURLOPT_ENCODING => "",\n\t  CURLOPT_MAXREDIRS => 10,\n\t  CURLOPT_TIMEOUT => 0,\n\t  CURLOPT_FOLLOWLOCATION => true,\n\t  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n\t  CURLOPT_CUSTOMREQUEST => "POST",\n\t  CURLOPT_POSTFIELDS =>"{\\r\\n    \\"name\\":\\"test_group\\",\\r\\n    \\"filename\\":"file-20231029073840-53485-book1csv.csv",\\r\\n    \\"description\\":\\"just for test\\"\\r\\n}",\n\t  CURLOPT_HTTPHEADER => array(\n\t\t"X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\n\t\t"Authorization: Basic dGVzdDpBYTEyMzQ1Ng==",\n\t\t"Content-Type: application/json"\n\t  ),\n\t));\n\n\t$response = curl_exec($curl);\n\n\t\tif (!curl_errno($curl)) {\n\t\t$httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);\n\t\techo \'response code:\'.$httpcode, \'<br/>\';\n\t}\n\n\tcurl_close($curl);\n\techo $response;\n?>\n'})})]})}),(0,r.jsx)(a.A,{value:"PHP-example2",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f PHP"}),(0,r.jsx)("br",{}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:'\t<?php\n\n\t$curl = curl_init();\n\n\tcurl_setopt_array($curl, array(\n\t  CURLOPT_URL => "http://192.168.51.21/api/v4/autodialer/groups/add",\n\t  CURLOPT_RETURNTRANSFER => true,\n\t  CURLOPT_ENCODING => "",\n\t  CURLOPT_MAXREDIRS => 10,\n\t  CURLOPT_TIMEOUT => 0,\n\t  CURLOPT_FOLLOWLOCATION => true,\n\t  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n\t  CURLOPT_CUSTOMREQUEST => "POST",\n\t  CURLOPT_POSTFIELDS =>"{\\r\\n    \\"name\\":\\"test_group\\",\\r\\n    \\"numbers\\":[\\"1111\\", \\"2222\\", \\"3333\\"],\\r\\n    \\"description\\":\\"just for test\\"\\r\\n}",\n\t  CURLOPT_HTTPHEADER => array(\n\t\t"X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\n\t\t"Authorization: Basic dGVzdDpBYTEyMzQ1Ng==",\n\t\t"Content-Type: application/json"\n\t  ),\n\t));\n\n\t$response = curl_exec($curl);\n\n\t\tif (!curl_errno($curl)) {\n\t\t$httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);\n\t\techo \'response code:\'.$httpcode, \'<br/>\';\n\t}\n\n\tcurl_close($curl);\n\techo $response;\n?>\n'})})]})}),(0,r.jsx)(a.A,{value:"JS",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f JS"}),(0,r.jsx)("br",{}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'\t<html>\n\t\t\t<head>\n\t\t\t\t<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n\t\t\t</head>\n\t\t<body>\n\t\t\t<script>\n\t\t\t\tvar settings = {\n\t\t\t\t  "url": "http://192.168.51.21/api/v4/autodialer/groups/add",\n\t\t\t\t  "method": "POST",\n\t\t\t\t  "timeout": 0,\n\t\t\t\t  "headers": {\n\t\t\t\t\t"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\n\t\t\t\t\t"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",\n\t\t\t\t\t"Content-Type": "application/json"\n\t\t\t\t  },\n\t\t\t\t  "data": JSON.stringify({\n\t\t\t\t\t  "name": "test_group",\n\t\t\t\t\t  "numbers": [\n\t\t\t\t\t\t"1111",\n\t\t\t\t\t\t"2222",\n\t\t\t\t\t\t"3333"\n\t\t\t\t\t  ],\n\t\t\t\t\t  "description": "just for test"\n\t\t\t\t\t}),\n\t\t\t\t};\n\n\t\t\t\t\t$.ajax(settings).always(function (jqXHR) {\n\t\t\t\t\t\tconsole.log("response code: " + jqXHR.status + " " + jqXHR.statusText);\n\t\t\t\t\t\tconsole.log("response body: " + jqXHR.responseText);\n\t\t\t\t\t});\n\t\t\t<\/script>\n\t\t</body>\n\t</html>\n'})})]})}),(0,r.jsx)(a.A,{value:"Curl",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f Curl"}),(0,r.jsx)("br",{}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'\tcurl --location --request POST \'http://192.168.51.21/api/v4/autodialer/groups/add\' \\\n\t--header \'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG\' \\\n\t--header \'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==\' \\\n\t--header \'Content-Type: application/json\' \\\n\t--data-raw \'{\n\t\t"name":"test_group",\n\t\t"numbers":["1111", "2222", "3333"],\n\t\t"description":"just for test"\n\t}\'\n'})})]})})]})}),(0,r.jsx)(a.A,{value:"outputCode",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:'{\n    "success": 1,\n    "message": "Requested operation is done successfully",\n    "data": {\n        "_id": "653e0c4f95e63077f8379be7"\n    }\n}\n'})})})]})]})}function h(t={}){const{wrapper:e}={...(0,l.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(p,{...t})}):p(t)}},9365:(t,e,n)=>{n.d(e,{A:()=>a});n(6540);var r=n(8215);const l={tabItem:"tabItem_Ymn6"};var s=n(4848);function a(t){let{children:e,hidden:n,className:a}=t;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,a),hidden:n,children:e})}},1470:(t,e,n)=>{n.d(e,{A:()=>T});var r=n(6540),l=n(8215),s=n(3104),a=n(6347),o=n(205),u=n(7485),i=n(1682),c=n(679);function d(t){return r.Children.toArray(t).filter((t=>"\n"!==t)).map((t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??function(t){return d(t).map((t=>{let{props:{value:e,label:n,attributes:r,default:l}}=t;return{value:e,label:n,attributes:r,default:l}}))}(n);return function(t){const e=(0,i.XI)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function h(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function x(t){let{queryString:e=!1,groupId:n}=t;const l=(0,a.W6)(),s=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,u.aZ)(s),(0,r.useCallback)((t=>{if(!s)return;const e=new URLSearchParams(l.location.search);e.set(s,t),l.replace({...l.location,search:e.toString()})}),[s,l])]}function g(t){const{defaultValue:e,queryString:n=!1,groupId:l}=t,s=p(t),[a,u]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=n.find((t=>t.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:s}))),[i,d]=x({queryString:n,groupId:l}),[g,m]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[l,s]=(0,c.Dv)(n);return[l,(0,r.useCallback)((t=>{n&&s.set(t)}),[n,s])]}({groupId:l}),j=(()=>{const t=i??g;return h({value:t,tabValues:s})?t:null})();(0,o.A)((()=>{j&&u(j)}),[j]);return{selectedValue:a,selectValue:(0,r.useCallback)((t=>{if(!h({value:t,tabValues:s}))throw new Error(`Can't select invalid tab value=${t}`);u(t),d(t),m(t)}),[d,m,s]),tabValues:s}}var m=n(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function f(t){let{className:e,block:n,selectedValue:r,selectValue:a,tabValues:o}=t;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),c=t=>{const e=t.currentTarget,n=u.indexOf(e),l=o[n].value;l!==r&&(i(e),a(l))},d=t=>{let e=null;switch(t.key){case"Enter":c(t);break;case"ArrowRight":{const n=u.indexOf(t.currentTarget)+1;e=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(t.currentTarget)-1;e=u[n]??u[u.length-1];break}}e?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},e),children:o.map((t=>{let{value:e,label:n,attributes:s}=t;return(0,b.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:t=>u.push(t),onKeyDown:d,onClick:c,...s,className:(0,l.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":r===e}),children:n??e},e)}))})}function v(t){let{lazy:e,children:n,selectedValue:s}=t;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=a.find((t=>t.props.value===s));return t?(0,r.cloneElement)(t,{className:(0,l.A)("margin-top--md",t.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==s})))})}function A(t){const e=g(t);return(0,b.jsxs)("div",{className:(0,l.A)("tabs-container",j.tabList),children:[(0,b.jsx)(f,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function T(t){const e=(0,m.A)();return(0,b.jsx)(A,{...t,children:d(t.children)},String(e))}},8453:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>o});var r=n(6540);const l={},s=r.createContext(l);function a(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(l):t.components||l:a(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);