"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[2082],{3749:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=r(4848),l=r(8453),a=r(1470),s=r(9365);const o={},i="Fax Upload",u={id:"developers/api/SimotelAPI/v4/fax/fax_upload",title:"Fax Upload",description:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u0641\u0627\u06cc\u0644\u200c\u0647\u0627 \u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u062f\u0631 \u0627\u0631\u0633\u0627\u0644 \u0641\u06a9\u0633 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.",source:"@site/i18n/fa/docusaurus-plugin-content-docs/current/developers/1-api/2-SimotelAPI/v4/12-fax/1-fax_upload.md",sourceDirName:"developers/1-api/2-SimotelAPI/v4/12-fax",slug:"/developers/api/SimotelAPI/v4/fax/fax_upload",permalink:"/docs/developers/api/SimotelAPI/v4/fax/fax_upload",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"WhiteList Remove",permalink:"/docs/developers/api/SimotelAPI/v4/whitelist/whitelist_remove"},next:{title:"Fax Add",permalink:"/docs/developers/api/SimotelAPI/v4/fax/fax_add"}},c={},d=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"fax-upload",children:"Fax Upload"})}),"\n",(0,n.jsx)(t.p,{children:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u0641\u0627\u06cc\u0644\u200c\u0647\u0627 \u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u062f\u0631 \u0627\u0631\u0633\u0627\u0644 \u0641\u06a9\u0633 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."}),"\n",(0,n.jsx)(t.h2,{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"}),"\n",(0,n.jsx)("div",{class:"custom-table",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc[**]/\u0645\u0646\u0637\u0642\u06cc[*]"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"\u0646\u0627\u0645 \u0641\u0627\u06cc\u0644"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"**"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"file"})]})})]})}),"\n",(0,n.jsx)(t.h2,{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",children:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"}),"\n","\n",(0,n.jsxs)(a.A,{defaultValue:"usageCode",values:[{label:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647",value:"usageCode"},{label:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc",value:"outputCode"}],children:[(0,n.jsx)(s.A,{value:"usageCode",children:(0,n.jsxs)(a.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"Curl",value:"Curl"}],children:[(0,n.jsx)(s.A,{value:"PHP",children:(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f PHP"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"\t<?php\r\n\r\n\t$curl = curl_init();\r\n\r\n\tcurl_setopt_array($curl, array(\r\n\t  CURLOPT_URL => 'http://192.168.51.21/api/v4/pbx/faxes/upload',\r\n\t  CURLOPT_RETURNTRANSFER => true,\r\n\t  CURLOPT_ENCODING => '',\r\n\t  CURLOPT_MAXREDIRS => 10,\r\n\t  CURLOPT_TIMEOUT => 0,\r\n\t  CURLOPT_FOLLOWLOCATION => true,\r\n\t  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\r\n\t  CURLOPT_CUSTOMREQUEST => 'POST',\r\n\t  CURLOPT_POSTFIELDS => array('file'=> new CURLFILE('/path/to/file')),\r\n\t  CURLOPT_HTTPHEADER => array(\r\n\t\t'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG',\r\n\t\t'Authorization: Basic dGVzdDpBYTEyMzQ1Ng=='\r\n\t  ),\r\n\t));\r\n\r\n\t$response = curl_exec($curl);\r\n\r\n\t\tif (!curl_errno($curl)) {\r\n\t\t$httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);\r\n\t\techo 'response code:'.$httpcode, '<br/>';\r\n\t}\r\n\r\n\tcurl_close($curl);\r\n\techo $response;\r\n?>\n"})})]})}),(0,n.jsx)(s.A,{value:"Curl",children:(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f Curl"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"\tcurl --location --request POST 'http://192.168.51.21/api/v4/pbx/faxes/upload' \\\r\n\t--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \\\r\n\t--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \\\r\n\t--form 'file=@\"/path/to/file\"'\n"})})]})})]})}),(0,n.jsx)(s.A,{value:"outputCode",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'{\r\n    "success": 1,\r\n    "message": "1 file(s) uploaded successfully",\r\n    "data": {\r\n        "filename": "sen_file-20210316094328-60069-simotel5128editi_.tiff"\r\n    }\r\n}\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>s});r(6540);var n=r(8215);const l={tabItem:"tabItem_Ymn6"};var a=r(4848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,s),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(6540),l=r(8215),a=r(3104),s=r(6347),o=r(205),i=r(7485),u=r(1682),c=r(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:l}}=e;return{value:t,label:r,attributes:n,default:l}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const l=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(l.location.search);t.set(a,e),l.replace({...l.location,search:t.toString()})}),[a,l])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:l}=e,a=h(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[u,d]=f({queryString:r,groupId:l}),[x,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,a]=(0,c.Dv)(r);return[l,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:l}),b=(()=>{const e=u??x;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=r(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(4848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),l=o[r].value;l!==n&&(u(t),s(l))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,l.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function A(e){const t=x(e);return(0,v.jsxs)("div",{className:(0,l.A)("tabs-container",b.tabList),children:[(0,v.jsx)(g,{...t,...e}),(0,v.jsx)(j,{...t,...e})]})}function y(e){const t=(0,m.A)();return(0,v.jsx)(A,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var n=r(6540);const l={},a=n.createContext(l);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);