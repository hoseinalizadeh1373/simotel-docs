"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[5143],{9843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(4848),s=n(8453),l=n(1470),a=n(9365);const i={title:"\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0622\u0648\u0627",sidebar_label:"\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0622\u0648\u0627"},o="Announce Edit",c={id:"developers/api/SimotelAPI/v4/announcement/announcements_edit",title:"\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0622\u0648\u0627",description:"\u0627\u0632 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0648\u06cc\u0631\u0627\u06cc\u0634 \u06a9\u0631\u062f\u0646 \u0622\u0648\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u0634\u0648\u062f.",source:"@site/i18n/fa/docusaurus-plugin-content-docs/current/developers/1-api/2-SimotelAPI/v4/8-announcement/4-announcements_edit.md",sourceDirName:"developers/1-api/2-SimotelAPI/v4/8-announcement",slug:"/developers/api/SimotelAPI/v4/announcement/announcements_edit",permalink:"/docs/developers/api/SimotelAPI/v4/announcement/announcements_edit",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0622\u0648\u0627",sidebar_label:"\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc \u0622\u0648\u0627"},sidebar:"docs",previous:{title:"\u062c\u0633\u062a\u062c\u0648\u06cc \u0622\u0648\u0627",permalink:"/docs/developers/api/SimotelAPI/v4/announcement/announcements_search"},next:{title:"\u062d\u0630\u0641 \u0622\u0648\u0627",permalink:"/docs/developers/api/SimotelAPI/v4/announcement/announcements_remove"}},u={},d=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"announce-edit",children:"Announce Edit"})}),"\n",(0,r.jsx)(t.p,{children:"\u0627\u0632 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0648\u06cc\u0631\u0627\u06cc\u0634 \u06a9\u0631\u062f\u0646 \u0622\u0648\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u0634\u0648\u062f."}),"\n",(0,r.jsx)(t.h2,{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"}),"\n",(0,r.jsx)("div",{class:"custom-table",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc[**]/\u0645\u0646\u0637\u0642\u06cc[*]"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["\u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627\u06cc \u0622\u0648\u0627 \u06a9\u0647 \u0627\u0632 ",(0,r.jsx)(t.a,{href:"/docs/developers/api/SimotelAPI/v4/announcement/announcements_search",children:"\u062c\u0633\u062a\u062c\u0648"})," \u0628\u062f\u0633\u062a \u0645\u06cc\u200c\u0622\u06cc\u062f"]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"6033876dc92de036d1390923"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"**"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"id_"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u0646\u0627\u0645 \u0622\u0648\u0627"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"test_sound_new"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"name"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:["\u0646\u0627\u0645 \u0641\u0627\u06cc\u0644\u200c\u0635\u0648\u062a\u06cc \u06a9\u0647 \u062f\u0631 \u067e\u0627\u0633\u062e \u0628\u0647 \u062f\u0631\u062e\u0648\u0627\u0633\u062a ",(0,r.jsx)(t.a,{href:"/docs/developers/api/SimotelAPI/v4/announcement/announcements_upload",children:"\u0622\u067e\u0644\u0648\u062f"})," \u0628\u0631\u06af\u0631\u062f\u0627\u0646\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f"]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"file-20200624051520-61681-announcement-wiresha_"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"filename"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Just for test"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"comment"})]})]})]})}),"\n",(0,r.jsx)(t.h2,{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",children:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"}),"\n","\n",(0,r.jsxs)(l.A,{defaultValue:"usageCode",values:[{label:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647",value:"usageCode"},{label:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc",value:"outputCode"}],children:[(0,r.jsx)(a.A,{value:"usageCode",children:(0,r.jsxs)(l.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Curl",value:"Curl"}],children:[(0,r.jsx)(a.A,{value:"PHP",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f PHP"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",children:"\t<?php\n\n\t$curl = curl_init();\n\n\tcurl_setopt_array($curl, array(\n\tCURLOPT_URL => 'http://192.168.51.20/api/v4/pbx/announcements/update',\n\tCURLOPT_RETURNTRANSFER => true,\n\tCURLOPT_ENCODING => '',\n\tCURLOPT_MAXREDIRS => 10,\n\tCURLOPT_TIMEOUT => 0,\n\tCURLOPT_FOLLOWLOCATION => true,\n\tCURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n\tCURLOPT_CUSTOMREQUEST => 'POST',\n\tCURLOPT_POSTFIELDS =>'{\n\t\t\"_id\":\"6033876dc92de036d1390923\",\n\t\t\"name\":\"test_sound_new\",\n\t\t\"filename\":\"file-20200624051520-61681-announcement-wiresha_\",\n\t\t\"comment\":\"Just for test\"\n\t}',\n\tCURLOPT_HTTPHEADER => array(\n\t\t'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG',\n\t\t'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==',\n\t\t'Content-Type: application/json'\n\t),\n\t));\n\n\t$response = curl_exec($curl);\n\n\t\tif (!curl_errno($curl)) {\n\t\t$httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);\n\t\techo 'response code:'.$httpcode, '<br/>';\n\t}\n\n\n\tcurl_close($curl);\n\techo $response;\n?>\n"})})]})}),(0,r.jsx)(a.A,{value:"JS",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f JS"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'\t<html>\n\t\t<head>\n\t\t\t<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n\t\t</head>\n\t\t<body>\n\t\t\t<script>\n\t\t\t\tvar settings = {\n\t\t\t\t"url": "http://192.168.51.20/api/v4/pbx/announcements/update",\n\t\t\t\t"method": "POST",\n\t\t\t\t"timeout": 0,\n\t\t\t\t"headers": {\n\t\t\t\t\t"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\n\t\t\t\t\t"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",\n\t\t\t\t\t"Content-Type": "application/json"\n\t\t\t\t},\n\t\t\t\t"data": JSON.stringify({\n\t\t\t\t\t"_id": "6033876dc92de036d1390923",\n\t\t\t\t\t"name": "test_sound_new",\n\t\t\t\t\t"filename": "file-20200624051520-61681-announcement-wiresha_",\n\t\t\t\t\t"comment": "Just for test"\n\t\t\t\t\t}),\n\t\t\t\t\t};\n\n\n\t\t\t\t\t$.ajax(settings).always(function (jqXHR) {\n\t\t\t\t\t\tconsole.log("response code: " + jqXHR.status + " " + jqXHR.statusText);\n\t\t\t\t\t\tconsole.log("response body: " + jqXHR.responseText);\n\t\t\t\t\t});\n\t\t\t<\/script>\n\t\t</body>\n\t</html>\n'})})]})}),(0,r.jsx)(a.A,{value:"Curl",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f Curl"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'\tcurl --location --request POST \'http://192.168.51.20/api/v4/pbx/announcements/update\' \\\n\t--header \'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG\' \\\n\t--header \'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==\' \\\n\t--header \'Content-Type: application/json\' \\\n\t--data-raw \'{\n\t\t"_id":"6033876dc92de036d1390923",\n\t\t"name":"test_sound_new",\n\t\t"filename":"file-20200624051520-61681-announcement-wiresha_",\n\t\t"comment":"Just for test"\n\t}\'\n'})})]})})]})}),(0,r.jsx)(a.A,{value:"outputCode",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'{\n    "success": 1,\n    "message": "Requested operation is done successfully",\n    "data": ""\n}\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var r=n(8215);const s={tabItem:"tabItem_Ymn6"};var l=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(6540),s=n(8215),l=n(3104),a=n(6347),i=n(205),o=n(7485),c=n(1682),u=n(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,l=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,d]=m({queryString:n,groupId:s}),[x,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:s}),j=(()=>{const e=c??x;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{j&&o(j)}),[j]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=n(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),s=i[n].value;s!==r&&(c(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,s.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:l}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function y(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...t,...e}),(0,b.jsx)(g,{...t,...e})]})}function A(e){const t=(0,f.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(6540);const s={},l=r.createContext(s);function a(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);