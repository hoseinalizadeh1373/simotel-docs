"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[8502],{1519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"developers/SimotelAPI/v4/announcement/announcements_add","title":"\u0627\u0641\u0632\u0648\u062f\u0646 \u0622\u0648\u0627","description":"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0648\u062f\u0646 \u0622\u0648\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.","source":"@site/i18n/fa/docusaurus-plugin-content-docs/current/developers/2-SimotelAPI/v4/8-announcement/2-announcements_add.md","sourceDirName":"developers/2-SimotelAPI/v4/8-announcement","slug":"/developers/SimotelAPI/v4/announcement/announcements_add","permalink":"/fa/developers/SimotelAPI/v4/announcement/announcements_add","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_label":"\u0627\u0641\u0632\u0648\u062f\u0646 \u0622\u0648\u0627","title":"\u0627\u0641\u0632\u0648\u062f\u0646 \u0622\u0648\u0627"},"sidebar":"docs","previous":{"title":"\u0628\u0627\u0631\u06af\u0632\u0627\u0631\u06cc \u0641\u0627\u06cc\u0644 \u0635\u0648\u062a\u06cc","permalink":"/fa/developers/SimotelAPI/v4/announcement/announcements_upload"},"next":{"title":"\u062c\u0633\u062a\u062c\u0648\u06cc \u0622\u0648\u0627","permalink":"/fa/developers/SimotelAPI/v4/announcement/announcements_search"}}');var s=n(4848),a=n(8453),l=n(5537),o=n(9329);const i={sidebar_label:"\u0627\u0641\u0632\u0648\u062f\u0646 \u0622\u0648\u0627",title:"\u0627\u0641\u0632\u0648\u062f\u0646 \u0622\u0648\u0627"},c="Announce Add",u={},d=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"announce-add",children:"Announce Add"})}),"\n",(0,s.jsx)(t.p,{children:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0648\u062f\u0646 \u0622\u0648\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."}),"\n",(0,s.jsx)(t.h2,{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"}),"\n",(0,s.jsx)("div",{class:"custom-table",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc[**]/\u0645\u0646\u0637\u0642\u06cc[*]"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u0646\u0627\u0645"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"test_sound"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"**"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:["\u0646\u0627\u0645 \u0641\u0627\u06cc\u0644\u200c\u0635\u0648\u062a\u06cc \u06a9\u0647 \u062f\u0631 \u067e\u0627\u0633\u062e \u0628\u0647 \u062f\u0631\u062e\u0648\u0627\u0633\u062a ",(0,s.jsx)(t.a,{href:"/developers/SimotelAPI/v4/announcement/announcements_upload",children:"\u0622\u067e\u0644\u0648\u062f"})," \u0628\u0631\u06af\u0631\u062f\u0627\u0646\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f"]}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"file-20200624051520-61681-announcement-wiresha-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"**"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"filename"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Just for test"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"comment"})]})]})]})}),"\n",(0,s.jsx)(t.h2,{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",children:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"}),"\n","\n",(0,s.jsxs)(l.A,{defaultValue:"usageCode",values:[{label:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647",value:"usageCode"},{label:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc",value:"outputCode"}],children:[(0,s.jsx)(o.A,{value:"usageCode",children:(0,s.jsxs)(l.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Curl",value:"Curl"}],children:[(0,s.jsx)(o.A,{value:"PHP",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f PHP"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"\t<?php\n\n\t$curl = curl_init();\n\n\tcurl_setopt_array($curl, array(\n\tCURLOPT_URL => 'http://192.168.51.20/api/v4/pbx/announcements/add',\n\tCURLOPT_RETURNTRANSFER => true,\n\tCURLOPT_ENCODING => '',\n\tCURLOPT_MAXREDIRS => 10,\n\tCURLOPT_TIMEOUT => 0,\n\tCURLOPT_FOLLOWLOCATION => true,\n\tCURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n\tCURLOPT_CUSTOMREQUEST => 'POST',\n\tCURLOPT_POSTFIELDS =>'{\n\t\t\"name\":\"test_sound\",\n\t\t\"filename\":\"file-20200624051520-61681-announcement-wiresha_\",\n\t\t\"comment\":\"Just for test\"\n\t}',\n\tCURLOPT_HTTPHEADER => array(\n\t\t'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG',\n\t\t'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==',\n\t\t'Content-Type: application/json'\n\t),\n\t));\n\n\t$response = curl_exec($curl);\n\n\t\tif (!curl_errno($curl)) {\n\t\t$httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);\n\t\techo 'response code:'.$httpcode, '<br/>';\n\t}\n\n\n\n\tcurl_close($curl);\n\techo $response;\n?>\n"})})]})}),(0,s.jsx)(o.A,{value:"JS",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f JS"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'\t\t<html>\n\t\t\t\t<head>\n\t\t\t\t\t<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n\t\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t<script>\n\t\t\t\t\tvar settings = {\n\t\t\t\t\t"url": "http://192.168.51.20/api/v4/pbx/announcements/add",\n\t\t\t\t\t"method": "POST",\n\t\t\t\t\t"timeout": 0,\n\t\t\t\t\t"headers": {\n\t\t\t\t\t\t"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\n\t\t\t\t\t\t"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",\n\t\t\t\t\t\t"Content-Type": "application/json"\n\t\t\t\t\t},\n\t\t\t\t\t"data": JSON.stringify({\n\t\t\t\t\t\t"name": "test_sound",\n\t\t\t\t\t\t"filename": "file-20200624051520-61681-announcement-wiresha_",\n\t\t\t\t\t\t"comment": "Just for test"\n\t\t\t\t\t\t}),\n\t\t\t\t\t\t};\n\n\n\t\t\t\t\t\t$.ajax(settings).always(function (jqXHR) {\n\t\t\t\t\t\t\tconsole.log("response code: " + jqXHR.status + " " + jqXHR.statusText);\n\t\t\t\t\t\t\tconsole.log("response body: " + jqXHR.responseText);\n\t\t\t\t\t\t});\n\t\t\t\t<\/script>\n\t\t\t</body>\n\t\t</html>\n'})})]})}),(0,s.jsx)(o.A,{value:"Curl",children:(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f Curl"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'\tcurl --location --request POST \'http://192.168.51.20/api/v4/pbx/announcements/add\' \\\n\t--header \'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG\' \\\n\t--header \'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==\' \\\n\t--header \'Content-Type: application/json\' \\\n\t--data-raw \'{\n\t\t"name":"test_sound",\n\t\t"filename":"file-20200624051520-61681-announcement-wiresha_",\n\t\t"comment":"Just for test"\n\t}\'\n'})})]})})]})}),(0,s.jsx)(o.A,{value:"outputCode",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'{\n\t"success": 1,\n\t"message": "Requested operation is done successfully",\n\t"data": {\n\t\t"_id": "64b7f58b7a302f4de51ae494"\n\t}\n}\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9329:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var r=n(8215);const s={tabItem:"tabItem_Ymn6"};var a=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:n,children:t})}},5537:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(6540),s=n(8215),a=n(5627),l=n(6347),o=n(372),i=n(604),c=n(1861),u=n(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:n,groupId:s}),[x,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),b=(()=>{const e=c??x;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=n(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(4848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),s=o[n].value;s!==r&&(c(t),l(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=x(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,j.jsx)(v,{...t,...e}),(0,j.jsx)(g,{...t,...e})]})}function A(e){const t=(0,f.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(6540);const s={},a=r.createContext(s);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);