"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[773],{8965:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(4848),a=r(8453),l=r(1470),s=r(9365);const o={sidebar_label:"\u0628\u0627\u0631\u06af\u0632\u0627\u0631\u06cc \u06af\u0631\u0648\u0647"},u="Group Upload",i={id:"developers/api/Autodialer_API/group/group_upload",title:"group_upload",description:"\u0628\u0627\u0631\u06af\u0632\u0627\u0631\u06cc \u06af\u0631\u0648\u0647 | \u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0633\u06cc\u0645\u0648\u062a\u0644",source:"@site/i18n/fa/docusaurus-plugin-content-docs/current/developers/1-api/5-Autodialer_API/3-group/1-group_upload.md",sourceDirName:"developers/1-api/5-Autodialer_API/3-group",slug:"/developers/api/Autodialer_API/group/group_upload",permalink:"/fa/docs/developers/api/Autodialer_API/group/group_upload",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"\u0628\u0627\u0631\u06af\u0632\u0627\u0631\u06cc \u06af\u0631\u0648\u0647"},sidebar:"docs",previous:{title:"\u062d\u0630\u0641  \u0645\u062e\u0627\u0637\u0628",permalink:"/fa/docs/developers/api/Autodialer_API/contact/contact_delete"},next:{title:"\u0627\u0641\u0632\u0648\u062f\u0646 \u06af\u0631\u0648\u0647",permalink:"/fa/docs/developers/api/Autodialer_API/group/group_add"}},c={},d=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components},{Details:r,Head:o}=t;return r||f("Details",!0),o||f("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{children:(0,n.jsx)("title",{children:"\u0628\u0627\u0631\u06af\u0632\u0627\u0631\u06cc \u06af\u0631\u0648\u0647 | \u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0633\u06cc\u0645\u0648\u062a\u0644"})}),"\n",(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"group-upload",children:"Group Upload"})}),"\n",(0,n.jsx)(t.p,{children:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0648\u062f\u0646 \u06af\u0631\u0648\u0647\u06cc \u0627\u0632 \u0634\u0645\u0627\u0631\u0647\u200c\u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c\u062f\u0631 \u0627\u06cc\u0646 \u0631\u0648\u0634 \u062a\u0645\u0627\u0645\u06cc \u0634\u0645\u0627\u0631\u0647\u200c\u0647\u0627 \u062f\u0631 \u06cc\u06a9 \u0641\u0627\u06cc\u0644 \u0627\u06a9\u0633\u0644 \u0628\u0627 \u067e\u0633\u0648\u0646\u062f csv \u0642\u0631\u0627\u0631 \u0645\u06cc\u200c\u06af\u06cc\u0631\u0646\u062f."}),"\n",(0,n.jsx)(t.h2,{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"}),"\n",(0,n.jsx)("div",{class:"custom-table",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc[**]/\u0645\u0646\u0637\u0642\u06cc[*]"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u0645\u0633\u06cc\u0631 \u0641\u0627\u06cc\u0644 \u0627\u06a9\u0633\u0644"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,n.jsxs)(t.td,{style:{textAlign:"center"},children:["c",":users","\\users\\Desktop\\test.csv"]}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"**"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"file"})]})})]})}),"\n",(0,n.jsx)(t.h2,{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",children:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"}),"\n","\n",(0,n.jsxs)(l.A,{defaultValue:"usageCode",values:[{label:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647",value:"usageCode"},{label:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc",value:"outputCode"}],children:[(0,n.jsx)(s.A,{value:"usageCode",children:(0,n.jsxs)(l.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Curl",value:"Curl"}],children:[(0,n.jsx)(s.A,{value:"PHP",children:(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f PHP"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"\t<?php\n\n\t$curl = curl_init();\n\n\tcurl_setopt_array($curl, array(\n\t  CURLOPT_URL => 'http://192.168.51.20/api/v4/autodialer/groups/upload',\n\t  CURLOPT_RETURNTRANSFER => true,\n\t  CURLOPT_ENCODING => '',\n\t  CURLOPT_MAXREDIRS => 10,\n\t  CURLOPT_TIMEOUT => 0,\n\t  CURLOPT_FOLLOWLOCATION => true,\n\t  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n\t  CURLOPT_CUSTOMREQUEST => 'POST',\n\t  CURLOPT_POSTFIELDS => array('file'=> new CURLFILE('/C:/Users/Vsadrnia/Desktop/test.csv')),\n\t  CURLOPT_HTTPHEADER => array(\n\t\t'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG',\n\t\t'Authorization: Basic c2FkcjpTYWRyQDEyMw=='\n\t  ),\n\t));\n\n\t$response = curl_exec($curl);\n\n\tcurl_close($curl);\n\techo $response;\n?>\n"})})]})}),(0,n.jsx)(s.A,{value:"JS",children:(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f JS"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'\t<html>\n\t\t\t<head>\n\t\t\t\t<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n\t\t\t</head>\n\t\t<body>\n\t\t\t<script>\n\t\t\t\tvar form = new FormData();\n\t\t\t\tform.append("file", fileInput.files[0], "/C:/Users/Vsadrnia/Desktop/test.csv");\n\n\t\t\t\tvar settings = {\n\t\t\t\t  "url": "http://192.168.51.20/api/v4/autodialer/groups/upload",\n\t\t\t\t  "method": "POST",\n\t\t\t\t  "timeout": 0,\n\t\t\t\t  "headers": {\n\t\t\t\t\t"X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",\n\t\t\t\t\t"Authorization": "Basic c2FkcjpTYWRyQDEyMw=="\n\t\t\t\t  },\n\t\t\t\t  "processData": false,\n\t\t\t\t  "mimeType": "multipart/form-data",\n\t\t\t\t  "contentType": false,\n\t\t\t\t  "data": form\n\t\t\t\t};\n\n\t\t\t\t$.ajax(settings).done(function (response) {\n\t\t\t\t  console.log(response);\n\t\t\t\t});\n\t\t\t<\/script>\n\t\t</body>\n\t</html>\n'})})]})}),(0,n.jsx)(s.A,{value:"Curl",children:(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f Curl"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"\tcurl --location --request POST 'http://192.168.51.20/api/v4/autodialer/groups/upload' \\\n\t--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \\\n\t--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \\\n\t--form 'file=@\"/C:/Users/Vsadrnia/Desktop/test.csv\"'\n"})})]})})]})}),(0,n.jsx)(s.A,{value:"outputCode",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'{\n    "success": 1,\n    "message": "",\n    "data": {\n        "filename": "file-20231029073636-66787-book1csv.csv"\n    }\n}\n'})})})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}function f(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},9365:(e,t,r)=>{r.d(t,{A:()=>s});r(6540);var n=r(8215);const a={tabItem:"tabItem_Ymn6"};var l=r(4848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>A});var n=r(6540),a=r(8215),l=r(3104),s=r(6347),o=r(205),u=r(7485),i=r(1682),c=r(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=p(e),[s,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,d]=f({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),v=(()=>{const e=i??m;return h({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{v&&u(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=r(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(4848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),a=o[r].value;a!==n&&(i(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:l}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function y(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function A(e){const t=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var n=r(6540);const a={},l=n.createContext(a);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);