"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[5734],{7391:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var l=n(4848),r=n(8453),s=n(1470),i=n(9365);const a={},c="Voicemail Add",o={id:"developers/api/SimotelAPI/v4/voicemail/voicemail_add",title:"Voicemail Add",description:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0648\u062f\u0646 \u0635\u0646\u062f\u0648\u0642 \u0635\u0648\u062a\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.",source:"@site/i18n/fa/docusaurus-plugin-content-docs/current/developers/1-api/2-SimotelAPI/v4/9-voicemail/1-voicemail_add.md",sourceDirName:"developers/1-api/2-SimotelAPI/v4/9-voicemail",slug:"/developers/api/SimotelAPI/v4/voicemail/voicemail_add",permalink:"/fa/docs/developers/api/SimotelAPI/v4/voicemail/voicemail_add",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"Announce Remove",permalink:"/fa/docs/developers/api/SimotelAPI/v4/announcement/announcements_remove"},next:{title:"Voicemail Search",permalink:"/fa/docs/developers/api/SimotelAPI/v4/voicemail/voicemail_search"}},d={},u=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}];function x(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"voicemail-add",children:"Voicemail Add"})}),"\n",(0,l.jsx)(t.p,{children:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0648\u062f\u0646 \u0635\u0646\u062f\u0648\u0642 \u0635\u0648\u062a\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."}),"\n",(0,l.jsx)(t.h2,{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"}),"\n",(0,l.jsx)("div",{class:"custom-table",children:(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc[**]/\u0645\u0646\u0637\u0642\u06cc[*]"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0646\u0627\u0645 \u0635\u0646\u062f\u0648\u0642\u200c\u0635\u0648\u062a\u06cc"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"test voicemail"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"**"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"name"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647 \u0635\u0646\u062f\u0648\u0642\u200c\u0635\u0648\u062a\u06cc"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"999"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"**"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"number"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0631\u0645\u0632\u0639\u0628\u0648\u0631"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"999"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"**"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"password"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0622\u062f\u0631\u0633 \u0627\u06cc\u0645\u06cc\u0644"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"email"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u067e\u0633\u0648\u0631\u062f"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"required_password"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"allow_change_password"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0648\u0636\u0639\u06cc\u062a \u0627\u0631\u0633\u0627\u0644 \u0627\u06cc\u0645\u06cc\u0644"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"send_email"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0627\u0641\u0632\u0648\u062f\u0646 \u0641\u0627\u06cc\u0644 \u0635\u0648\u062a\u06cc \u0628\u0647 \u0627\u06cc\u0645\u06cc\u0644"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"attach_file_email"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"play_busy"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"play_unavailable"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"play_welcome"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Play_CID"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Play_Envelope"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Delete_Voicemail"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"more_options"})]})]})]})}),"\n",(0,l.jsx)(t.h2,{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",children:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"}),"\n","\n",(0,l.jsxs)(s.A,{defaultValue:"usageCode",values:[{label:"\u0646\u0645\u0648\u0646\u0647 \u06a9\u062f \u0627\u0633\u062a\u0641\u0627\u062f\u0647",value:"usageCode"},{label:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc",value:"outputCode"}],children:[(0,l.jsx)(i.A,{value:"usageCode",children:(0,l.jsxs)(s.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Curl",value:"Curl"}],children:[(0,l.jsx)(i.A,{value:"PHP",children:(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f PHP"}),(0,l.jsx)("br",{}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-php",children:'\t<?php\n\n\t$curl = curl_init();\n\n\tcurl_setopt_array($curl, array(\n\tCURLOPT_URL => \'http://192.168.51.20/api/v4/voicemails/voicemails/add\',\n\tCURLOPT_RETURNTRANSFER => true,\n\tCURLOPT_ENCODING => \'\',\n\tCURLOPT_MAXREDIRS => 10,\n\tCURLOPT_TIMEOUT => 0,\n\tCURLOPT_FOLLOWLOCATION => true,\n\tCURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n\tCURLOPT_CUSTOMREQUEST => \'POST\',\n\tCURLOPT_POSTFIELDS =>\'{\n\t\t"name":"test voicemail",\n\t\t"number":"999",\n\t\t"password":"999",\n\t\t"email":"",\n\t\t"required_password":"no",\n\t\t"allow_change_password":"no",\n\t\t"send_email":"no",\n\t\t"attach_file_email":"no",\n\t\t"play_busy":"no",\n\t\t"play_unavailable":"no",\n\t\t"play_welcome":"no",\n\t\t"Play_CID":"no",\n\t\t"Play_Envelope":"no",\n\t\t"Delete_Voicemail":"no",\n\t\t"more_options":""\n\t}\',\n\tCURLOPT_HTTPHEADER => array(\n\t\t\'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG\',\n\t\t\'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==\',\n\t\t\'Content-Type: application/json\'\n\t),\n\t));\n\n\t$response = curl_exec($curl);\n\n\t\tif (!curl_errno($curl)) {\n\t\t$httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);\n\t\techo \'response code:\'.$httpcode, \'<br/>\';\n\t}\n\n\tcurl_close($curl);\n\techo $response;\n?>\n'})})]})}),(0,l.jsx)(i.A,{value:"JS",children:(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f JS"}),(0,l.jsx)("br",{}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:'\t<html>\n\t\t<head>\n\t\t\t<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n\t\t</head>\n\t\t<body>\n\t\t\t<script>\n\t\t\t\tvar settings = {\n\t\t\t\t"url": "http://192.168.51.20/api/v4/voicemails/voicemails/add",\n\t\t\t\t"method": "POST",\n\t\t\t\t"timeout": 0,\n\t\t\t\t"headers": {\n\t\t\t\t\t"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\n\t\t\t\t\t"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",\n\t\t\t\t\t"Content-Type": "application/json"\n\t\t\t\t},\n\t\t\t\t"data": JSON.stringify({\n\t\t\t\t\t"name": "test voicemail",\n\t\t\t\t\t"number": "999",\n\t\t\t\t\t"password": "999",\n\t\t\t\t\t"email": "",\n\t\t\t\t\t"required_password": "no",\n\t\t\t\t\t"allow_change_password": "no",\n\t\t\t\t\t"send_email": "no",\n\t\t\t\t\t"attach_file_email": "no",\n\t\t\t\t\t"play_busy": "no",\n\t\t\t\t\t"play_unavailable": "no",\n\t\t\t\t\t"play_welcome": "no",\n\t\t\t\t\t"Play_CID": "no",\n\t\t\t\t\t"Play_Envelope": "no",\n\t\t\t\t\t"Delete_Voicemail": "no",\n\t\t\t\t\t"more_options": ""\n\t\t\t\t\t}),\n\t\t\t\t};\n\n\n\t\t\t\t\t$.ajax(settings).always(function (jqXHR) {\n\t\t\t\t\t\tconsole.log("response code: " + jqXHR.status + " " + jqXHR.statusText);\n\t\t\t\t\t\tconsole.log("response body: " + jqXHR.responseText);\n\t\t\t\t\t});\n\t\t\t<\/script>\n\t\t</body>\n\t</html>\n'})})]})}),(0,l.jsx)(i.A,{value:"Curl",children:(0,l.jsxs)(n,{children:[(0,l.jsx)("summary",{children:"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u062f Curl"}),(0,l.jsx)("br",{}),(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:'\tcurl --location --request POST \'http://192.168.51.21/api/v4/voicemails/voicemails/add\' \\\n\t--header \'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG\' \\\n\t--header \'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==\' \\\n\t--header \'Content-Type: application/json\' \\\n\t--data-raw \'{\n\t\t"name":"test voicemail",\n\t\t"number":"999",\n\t\t"password":"999",\n\t\t"email":"",\n\t\t"required_password":"no",\n\t\t"allow_change_password":"no",\n\t\t"send_email":"no",\n\t\t"attach_file_email":"no",\n\t\t"play_busy":"no",\n\t\t"play_unavailable":"no",\n\t\t"play_welcome":"no",\n\t\t"Play_CID":"no",\n\t\t"Play_Envelope":"no",\n\t\t"Delete_Voicemail":"no",\n\t\t"more_options":""\n\t}\'\n'})})]})})]})}),(0,l.jsx)(i.A,{value:"outputCode",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:'{\n    "success": 1,\n    "message": "Requested operation is done successfully",\n    "data": {\n        "_id": "64b7f79011294d248a477216"\n    }\n}\n'})})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var l=n(8215);const r={tabItem:"tabItem_Ymn6"};var s=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,i),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>f});var l=n(6540),r=n(8215),s=n(3104),i=n(6347),a=n(205),c=n(7485),o=n(1682),d=n(679);function u(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:r}}=e;return{value:t,label:n,attributes:l,default:r}}))}(n);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(s),(0,l.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=x(e),[i,c]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:s}))),[o,u]=p({queryString:n,groupId:r}),[y,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Dv)(n);return[r,(0,l.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),m=(()=>{const e=o??y;return h({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{m&&c(m)}),[m]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),j(e)}),[u,j,s]),tabValues:s}}var j=n(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function A(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=a[n].value;r!==l&&(o(t),i(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":l===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,l.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function b(e){const t=y(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,g.jsx)(A,{...t,...e}),(0,g.jsx)(v,{...t,...e})]})}function f(e){const t=(0,j.A)();return(0,g.jsx)(b,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var l=n(6540);const r={},s=l.createContext(r);function i(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);