"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[1367],{7244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=n(4848),l=n(8453),s=n(1470),a=n(9365);const i={},c="Fax Add",d={id:"developers/api/SimotelAPI/v4/fax/fax_add",title:"Fax Add",description:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0648\u062f\u0646 \u0641\u06a9\u0633 \u0627\u0631\u0633\u0627\u0644\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.",source:"@site/i18n/fa/docusaurus-plugin-content-docs/current/developers/1-api/2-SimotelAPI/v4/12-fax/2-fax_add.md",sourceDirName:"developers/1-api/2-SimotelAPI/v4/12-fax",slug:"/developers/api/SimotelAPI/v4/fax/fax_add",permalink:"/docs/developers/api/SimotelAPI/v4/fax/fax_add",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"Fax Upload",permalink:"/docs/developers/api/SimotelAPI/v4/fax/fax_upload"},next:{title:"Fax Search",permalink:"/docs/developers/api/SimotelAPI/v4/fax/fax_search"}},o={},u=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}];function x(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"fax-add",children:"Fax Add"})}),"\n",(0,r.jsx)(t.p,{children:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0648\u062f\u0646 \u0641\u06a9\u0633 \u0627\u0631\u0633\u0627\u0644\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."}),"\n",(0,r.jsx)(t.admonition,{title:"\u0646\u06a9\u062a\u0647",type:"tip",children:(0,r.jsx)(t.p,{children:'\u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0641\u06a9\u0633 \u0628\u0647 \u0635\u0648\u0631\u062a \u0641\u0627\u06cc\u0644 \u0641\u06cc\u0644\u062f "file" \u0628\u0627\u06cc\u062f \u0645\u0642\u062f\u0627\u0631 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f \u0648 \u0641\u06cc\u0644\u062f "text" \u0627\u0632 JSON \u0648\u0631\u0648\u062f\u06cc \u062d\u0630\u0641 \u0634\u0648\u062f.'})}),"\n",(0,r.jsx)(t.h2,{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"}),"\n",(0,r.jsx)("div",{class:"custom-table",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc[**]/\u0645\u0646\u0637\u0642\u06cc[*]"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631 \u0647\u0627"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u06a9\u0646\u0646\u062f\u0647"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"username1"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"sender_id"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647 \u0645\u0642\u0635\u062f"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"112233"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"to"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u062f\u0627\u062e\u0644\u06cc \u0645\u0642\u0635\u062f"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"558"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"ext"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u062a\u0631\u0627\u0646\u06a9 \u062e\u0631\u0648\u062c\u06cc"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"trunk_name1"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"trunk_name"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["\u0646\u0627\u0645 \u0641\u0627\u06cc\u0644 \u0622\u067e\u0644\u0648\u062f \u0634\u062f\u0647 \u06a9\u0647 \u062f\u0631 \u062c\u0648\u0627\u0628 ",(0,r.jsx)(t.a,{href:"/docs/developers/api/SimotelAPI/v4/fax/fax_upload",children:"fax upload"})," \u0628\u0631\u06af\u0631\u062f\u0627\u0646\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f(\u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u0641\u06cc\u0644\u062f file \u0645\u0642\u062f\u0627\u0631 \u062f\u0627\u0631\u062f \u0641\u06cc\u0644\u062f text \u062d\u0630\u0641 \u0634\u0648\u062f)"]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"file-20200624051520-61681-fax-test"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"file"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u0628\u0631\u0627\u06cc \u0627\u0631\u0633\u0627\u0644 \u0641\u0627\u06cc\u0644 \u0645\u062a\u0646\u06cc"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"this is sample"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"just for test"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"description"})]})]})]})}),"\n",(0,r.jsx)(t.h2,{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",children:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"}),"\n","\n",(0,r.jsxs)(s.A,{defaultValue:"usageCode",values:[{label:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647",value:"usageCode"},{label:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc",value:"outputCode"}],children:[(0,r.jsx)(a.A,{value:"usageCode",children:(0,r.jsxs)(s.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"Curl",value:"Curl"}],children:[(0,r.jsx)(a.A,{value:"PHP",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f PHP"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",children:'\t<?php\r\n\r\n\t$curl = curl_init();\r\n\r\n\tcurl_setopt_array($curl, array(\r\n\t  CURLOPT_URL => \'http://192.168.51.20/api/v4/pbx/faxes/add\',\r\n\t  CURLOPT_RETURNTRANSFER => true,\r\n\t  CURLOPT_ENCODING => \'\',\r\n\t  CURLOPT_MAXREDIRS => 10,\r\n\t  CURLOPT_TIMEOUT => 0,\r\n\t  CURLOPT_FOLLOWLOCATION => true,\r\n\t  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\r\n\t  CURLOPT_CUSTOMREQUEST => \'POST\',\r\n\t  CURLOPT_POSTFIELDS =>\'{\r\n\t\t"sender_id":"username1",\r\n\t\t"to":"112233",\r\n\t\t"ext":"558",\r\n\t\t"trunk_name":"Cisco",\r\n\t\t"file":"file-20200624051520-61681-fax-test",\r\n\t\t"description":"Just for test"\r\n\t}\',\r\n\t  CURLOPT_HTTPHEADER => array(\r\n\t\t\'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG\',\r\n\t\t\'Authorization: Basic c2FkcjpTYWRyQDEyMw==\',\r\n\t\t\'Content-Type: application/json\'\r\n\t  ),\r\n\t));\r\n\r\n\t$response = curl_exec($curl);\r\n\r\n\tcurl_close($curl);\r\n\techo $response;\r\n?>\n'})})]})}),(0,r.jsx)(a.A,{value:"Curl",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f Curl"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'\tcurl --location --request POST \'http://192.168.51.20/api/v4/pbx/faxes/add\' \\\r\n\t--header \'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG\' \\\r\n\t--header \'Authorization: Basic c2FkcjpTYWRyQDEyMw==\' \\\r\n\t--header \'Content-Type: application/json\' \\\r\n\t--data-raw \'{\r\n\t\t"sender_id":"username1",\r\n\t\t"to":"112233",\r\n\t\t"ext":"558",\r\n\t\t"trunk_name":"Cisco",\r\n\t\t"file":"file-20200624051520-61681-fax-test",\r\n\t\t"description":"Just for test"\r\n\t}\'\n'})})]})})]})}),(0,r.jsx)(a.A,{value:"outputCode",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'{\r\n    "success": 1,\r\n    "message": "Requested operation is done successfully",\r\n    "data": {\r\n        "_id": "64b800977ec8cb8899ee28a2"\r\n    }\r\n}\n'})})})]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var r=n(8215);const l={tabItem:"tabItem_Ymn6"};var s=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,a),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(6540),l=n(8215),s=n(3104),a=n(6347),i=n(205),c=n(7485),d=n(1682),o=n(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const l=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(l.location.search);t.set(s,e),l.replace({...l.location,search:t.toString()})}),[s,l])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,s=x(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[d,u]=p({queryString:n,groupId:l}),[f,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,s]=(0,o.Dv)(n);return[l,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:l}),m=(()=>{const e=d??f;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{m&&c(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),j(e)}),[u,j,s]),tabValues:s}}var j=n(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),o=e=>{const t=e.currentTarget,n=c.indexOf(t),l=i[n].value;l!==r&&(d(t),a(l))},u=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:o,...s,className:(0,l.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,l.A)("tabs-container",m.tabList),children:[(0,b.jsx)(g,{...t,...e}),(0,b.jsx)(v,{...t,...e})]})}function A(e){const t=(0,j.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(6540);const l={},s=r.createContext(l);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);