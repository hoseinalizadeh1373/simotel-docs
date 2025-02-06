"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[2008],{6150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"developers/SimotelAPI/v4/queues/queue_pauseagent","title":"\u0634\u0631\u0648\u0639 \u0627\u0633\u062a\u0631\u0627\u062d\u062a \u0627\u067e\u0631\u0627\u062a\u0648\u0631","description":"\u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0648\u0631\u0648\u062f \u0627\u067e\u0631\u0627\u062a\u0648\u0631 \u0628\u0647 \u062d\u0627\u0644\u062a \u0627\u0633\u062a\u0631\u0627\u062d\u062a \u062f\u0631 \u0635\u0641 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f.","source":"@site/i18n/fa/docusaurus-plugin-content-docs/current/developers/2-SimotelAPI/v4/6-queues/6-queue_pauseagent.md","sourceDirName":"developers/2-SimotelAPI/v4/6-queues","slug":"/developers/SimotelAPI/v4/queues/queue_pauseagent","permalink":"/fa/developers/SimotelAPI/v4/queues/queue_pauseagent","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_label":"\u0634\u0631\u0648\u0639 \u0627\u0633\u062a\u0631\u0627\u062d\u062a \u0627\u067e\u0631\u0627\u062a\u0648\u0631","title":"\u0634\u0631\u0648\u0639 \u0627\u0633\u062a\u0631\u0627\u062d\u062a \u0627\u067e\u0631\u0627\u062a\u0648\u0631"},"sidebar":"docs","previous":{"title":"\u0627\u0641\u0632\u0648\u062f\u0646 \u0627\u067e\u0631\u0627\u062a\u0648\u0631 \u0628\u0647 \u0635\u0641","permalink":"/fa/developers/SimotelAPI/v4/queues/queue_addagent"},"next":{"title":"\u062e\u0631\u0648\u062c \u0627\u0633\u062a\u0631\u0627\u062d\u062a \u0627\u067e\u0631\u0627\u062a\u0648\u0631","permalink":"/fa/developers/SimotelAPI/v4/queues/queue_resumagent"}}');var a=n(4848),s=n(8453),l=n(5537),u=n(9329);const o={sidebar_label:"\u0634\u0631\u0648\u0639 \u0627\u0633\u062a\u0631\u0627\u062d\u062a \u0627\u067e\u0631\u0627\u062a\u0648\u0631",title:"\u0634\u0631\u0648\u0639 \u0627\u0633\u062a\u0631\u0627\u062d\u062a \u0627\u067e\u0631\u0627\u062a\u0648\u0631"},i="Pause Agent",c={},d=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"pause-agent",children:"Pause Agent"})}),"\n",(0,a.jsx)(t.p,{children:"\u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0648\u0631\u0648\u062f \u0627\u067e\u0631\u0627\u062a\u0648\u0631 \u0628\u0647 \u062d\u0627\u0644\u062a \u0627\u0633\u062a\u0631\u0627\u062d\u062a \u062f\u0631 \u0635\u0641 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f."}),"\n",(0,a.jsx)(t.h2,{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"}),"\n",(0,a.jsx)("div",{class:"custom-table",children:(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc[**]/\u0645\u0646\u0637\u0642\u06cc[*]"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647\u200c\u0635\u0641"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"999"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"**"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"queue"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647\u200c\u0627\u067e\u0631\u0627\u062a\u0648\u0631"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"557"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"**"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"agent"})]})]})]})}),"\n",(0,a.jsx)(t.h2,{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",children:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"}),"\n","\n",(0,a.jsxs)(l.A,{defaultValue:"usageCode",values:[{label:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647",value:"usageCode"},{label:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc",value:"outputCode"}],children:[(0,a.jsx)(u.A,{value:"usageCode",children:(0,a.jsxs)(l.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Curl",value:"Curl"}],children:[(0,a.jsx)(u.A,{value:"PHP",children:(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f PHP"}),(0,a.jsx)("br",{}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"\t<?php\n\n\t$curl = curl_init();\n\n\tcurl_setopt_array($curl, array(\n\tCURLOPT_URL => 'http://192.168.51.20/api/v4/pbx/queues/pauseagent',\n\tCURLOPT_RETURNTRANSFER => true,\n\tCURLOPT_ENCODING => '',\n\tCURLOPT_MAXREDIRS => 10,\n\tCURLOPT_TIMEOUT => 0,\n\tCURLOPT_FOLLOWLOCATION => true,\n\tCURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n\tCURLOPT_CUSTOMREQUEST => 'POST',\n\tCURLOPT_POSTFIELDS =>'{\n\t\t\"queue\":\"999\",\n\t\t\"agent\":\"557\"\n\t}',\n\tCURLOPT_HTTPHEADER => array(\n\t\t'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG',\n\t\t'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==',\n\t\t'Content-Type: application/json'\n\t),\n\t));\n\n\t$response = curl_exec($curl);\n\n\t\tif (!curl_errno($curl)) {\n\t\t$httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);\n\t\techo 'response code:'.$httpcode, '<br/>';\n\t}\n\n\tcurl_close($curl);\n?>\n"})})]})}),(0,a.jsx)(u.A,{value:"JS",children:(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f JS"}),(0,a.jsx)("br",{}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'\t<html>\n\t\t<head>\n\t\t\t<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n\t\t</head>\n\t\t<body>\n\t\t\t\t<script>\n\t\t\t\t\tvar settings = {\n\t\t\t\t\t"url": "http://192.168.51.20/api/v4/pbx/queues/pauseagent",\n\t\t\t\t\t"method": "POST",\n\t\t\t\t\t"timeout": 0,\n\t\t\t\t\t"headers": {\n\t\t\t\t\t\t"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\n\t\t\t\t\t\t"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",\n\t\t\t\t\t\t"Content-Type": "application/json"\n\t\t\t\t\t},\n\t\t\t\t\t"data": JSON.stringify({\n\t\t\t\t\t\t"queue": "999",\n\t\t\t\t\t\t"agent": "557"\n\t\t\t\t\t\t}),\n\t\t\t\t\t};\n\n\t\t\t\t\t\t$.ajax(settings).always(function (jqXHR) {\n\t\t\t\t\t\t\tconsole.log("response code: " + jqXHR.status + " " + jqXHR.statusText);\n\t\t\t\t\t\t\tconsole.log("response body: " + jqXHR.responseText);\n\t\t\t\t\t\t});\n\t\t\t\t\t<\/script>\n\t\t</body>\n\t</html>\n'})})]})}),(0,a.jsx)(u.A,{value:"Curl",children:(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f Curl"}),(0,a.jsx)("br",{}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"\ncurl --location --request POST 'http://192.168.51.20/api/v4/pbx/queues/pauseagent' \\\n--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \\\n--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n\t\"queue\":\"999\",\n\t\"agent\":\"557\"\n}'\n"})})]})})]})}),(0,a.jsx)(u.A,{value:"outputCode",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:'{\n    "success": 1,\n    "message": "",\n    "data": {\n        "message": "Paused successfully",\n        "ok": 1\n    }\n}\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9329:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var r=n(8215);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},5537:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(6540),a=n(8215),s=n(5627),l=n(6347),u=n(372),o=n(604),i=n(1861),c=n(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[i,d]=x({queryString:n,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=i??m;return p({value:e,tabValues:s})?e:null})();(0,u.A)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(4848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:u}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=u[n].value;a!==r&&(i(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:u.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,f.jsx)(v,{...t,...e}),(0,f.jsx)(j,{...t,...e})]})}function A(e){const t=(0,b.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>u});var r=n(6540);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);