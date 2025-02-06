"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[2353],{4534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>x});const l=JSON.parse('{"id":"developers/SimotelAPI/v4/users/users_add","title":"User Add","description":"This service is used to add internal users.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/2-SimotelAPI/v4/4-users/1-users_add.md","sourceDirName":"developers/2-SimotelAPI/v4/4-users","slug":"/developers/SimotelAPI/v4/users/users_add","permalink":"/developers/SimotelAPI/v4/users/users_add","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docs","previous":{"title":"Originate call","permalink":"/developers/SimotelAPI/v4/call-originate"},"next":{"title":"User Search","permalink":"/developers/SimotelAPI/v4/users/users_search"}}');var r=n(4848),s=n(8453),i=n(5537),c=n(9329);const d={sidebar_position:1,title:void 0},a="User Add",o={},x=[{value:"Parameters",id:"parameters",level:2},{value:"Sample Invocation",id:"sample-invocation",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"user-add",children:"User Add"})}),"\n",(0,r.jsx)(t.p,{children:"This service is used to add internal users."}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)("div",{class:"custom-table",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Defined Data"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Sample Data"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Required[**]/Optional[*]"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Parameters"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"User Type"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"SIP/IAX2"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"SIP"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"user_type"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"User Status"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"active"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"User Name"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"User2"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"**"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"name"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Extension Number"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"999"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"**"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"number"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"User CID"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"999"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"cid_number"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Password"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"999"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"**"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"secret"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Call Recording"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"call_record"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"push_notification"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Deny IP List"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"0.0.0.0/0.0.0.0"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"deny"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Permit IP List"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"0.0.0.0/0.0.0.0"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"permit"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"DTMF Standard"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"rfc2833"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"dtmfmode"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"canreinvite"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"directmedia"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"User Context"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"main_routing"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"context"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"dynamic"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"host"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"user"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"type"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no/Force Report & Co-Media"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"nat"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"5060"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"port"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"qualify"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"callgroup"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"pickupgroup"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"callcounter"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"faxdetect"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Call Waiting Limit"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"call_limit"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"trunk"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"yes/no"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"no"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"transfer"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"email"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"571"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"forward_policy->Busy"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"09158315762"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"forward_policy->No Answer"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"570"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"forward_policy->UnAvailable"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"2121"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"forward_policy->All"})]})]})]})}),"\n",(0,r.jsx)(t.h2,{id:"sample-invocation",children:"Sample Invocation"}),"\n","\n",(0,r.jsxs)(i.A,{defaultValue:"usageCode",values:[{label:"Example To Use",value:"usageCode"},{label:"Example Output",value:"outputCode"}],children:[(0,r.jsx)(c.A,{value:"usageCode",children:(0,r.jsxs)(i.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Curl",value:"Curl"}],children:[(0,r.jsx)(c.A,{value:"PHP",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Show Full Source Code PHP"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",children:'\n<?php\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => \'http://192.168.51.20/api/v4/pbx/users/add\',\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => \'\',\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 0,\n  CURLOPT_FOLLOWLOCATION => true,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => \'POST\',\n  CURLOPT_POSTFIELDS =>\'{\n      "user_type":"SIP",\n      "active":"yes",\n      "name":"User2",\n      "number":"99998",\n      "cid_number":"999",\n      "secret":"999",\n      "call_record":"no",\n      "push_notification":"no",\n      "deny":"0.0.0.0/0.0.0.0",\n      "permit":"0.0.0.0/0.0.0.0",\n      "dtmfmode":"rfc2833",\n      "canreinvite":"no",\n      "directmedia":"no",\n      "context":"main_routing",\n      "host":"dynamic",\n      "type":"user",\n      "nat":"no",\n      "port":"5060",\n      "qualify":"no",\n      "callgroup":"1",\n      "pickupgroup":"1",\n      "callcounter":"no",\n      "faxdetect":"no",\n      "call_limit":"",\n      "trunk":"no",\n      "transfer":"no",\n      "email":"",\n      "forward_policy":{"Busy":"571","No Answer":"09158315762","UnAvailable":"570","All":"2121"},\n      "more_options":""\n  }\',\n  CURLOPT_HTTPHEADER => array(\n    \'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG\',\n    \'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==\',\n    \'Content-Type: application/json\'\n  ),\n));\n\n$response = curl_exec($curl);\nif (!curl_errno($curl)) {\n  $httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);\n  echo \'response code:\'.$httpcode, \'<br/>\';\n}\ncurl_close($curl);\necho $response;\n?>\n\n'})})]})}),(0,r.jsx)(c.A,{value:"JS",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Show Full Source Code JS"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'\n<html>\n  <head>\n    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n  </head>\n  <body>\n    <script>\n      var settings = {\n        "url": "http://192.168.51.20/api/v4/pbx/users/add",\n        "method": "POST",\n        "timeout": 0,\n        "headers": {\n          "X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\n          "Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",\n          "Content-Type": "application/json"\n        },\n        "data": JSON.stringify({\n          "user_type": "SIP",\n          "active": "yes",\n          "name": "User2",\n          "number": "999",\n          "cid_number": "999",\n          "secret": "999",\n          "call_record": "no",\n          "push_notification": "no",\n          "deny": "0.0.0.0/0.0.0.0",\n          "permit": "0.0.0.0/0.0.0.0",\n          "dtmfmode": "rfc2833",\n          "canreinvite": "no",\n          "directmedia": "no",\n          "context": "main_routing",\n          "host": "dynamic",\n          "type": "user",\n          "nat": "no",\n          "port": "5060",\n          "qualify": "no",\n          "callgroup": "1",\n          "pickupgroup": "1",\n          "callcounter": "no",\n          "faxdetect": "no",\n          "call_limit": "",\n          "trunk": "no",\n          "transfer": "no",\n          "email": "",\n          "forward_policy": {\n            "Busy": "571",\n            "No Answer": "09158315762",\n            "UnAvailable": "570",\n            "All": "2121"\n          },\n          "more_options": ""\n        })\n      };\n\n      $.ajax(settings).always(function (jqXHR) {\n        console.log("response code: " + jqXHR.status + " " + jqXHR.statusText);\n        console.log("response body: " + jqXHR.responseText);\n      });\n    <\/script>\n  </body>\n</html>\n\n'})})]})}),(0,r.jsx)(c.A,{value:"Curl",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Show Full Source Code Curl"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'\ncurl --location --request POST \'http://192.168.51.20/api/v4/pbx/users/add\' \\\n--header \'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG\' \\\n--header \'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "user_type":"SIP",\n  "active":"yes",\n  "name":"User2",\n  "number":"999",\n  "cid_number":"999",\n  "secret":"999",\n  "call_record":"no",\n  "push_notification":"no",\n  "deny":"0.0.0.0/0.0.0.0",\n  "permit":"0.0.0.0/0.0.0.0",\n  "dtmfmode":"rfc2833",\n  "canreinvite":"no",\n  "directmedia":"no",\n  "context":"main_routing",\n  "host":"dynamic",\n  "type":"user",\n  "nat":"no",\n  "port":"5060",\n  "qualify":"no",\n  "callgroup":"1",\n  "pickupgroup":"1",\n  "callcounter":"no",\n  "faxdetect":"no",\n  "call_limit":"",\n  "trunk":"no",\n  "transfer":"no",\n  "email":"",\n  "forward_policy":{"Busy":"571","No Answer":"09158315762","UnAvailable":"570","All":"2121"},\n  "more_options":""\n}\'\n\n'})})]})})]})}),(0,r.jsx)(c.A,{value:"outputCode",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'\n{\n  "status": "success",\n  "message": "User created successfully",\n  "user_id": "999"\n}\n\n'})})})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},9329:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var l=n(8215);const r={tabItem:"tabItem_Ymn6"};var s=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,i),hidden:n,children:t})}},5537:(e,t,n)=>{n.d(t,{A:()=>v});var l=n(6540),r=n(8215),s=n(5627),i=n(6347),c=n(372),d=n(604),a=n(1861),o=n(8749);function x(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return x(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:r}}=e;return{value:t,label:n,attributes:l,default:r}}))}(n);return function(e){const t=(0,a.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d.aZ)(s),(0,l.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=u(e),[i,d]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:s}))),[a,x]=y({queryString:n,groupId:r}),[j,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,o.Dv)(n);return[r,(0,l.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),A=(()=>{const e=a??j;return h({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{A&&d(A)}),[A]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),x(e),g(e)}),[x,g,s]),tabValues:s}}var g=n(9136);const A={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var p=n(4848);function m(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:a}=(0,s.a_)(),o=e=>{const t=e.currentTarget,n=d.indexOf(t),r=c[n].value;r!==l&&(a(t),i(r))},x=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>{d.push(e)},onKeyDown:x,onClick:o,...s,className:(0,r.A)("tabs__item",A.tabItem,s?.className,{"tabs__item--active":l===t}),children:n??t},t)}))})}function f(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,l.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function b(e){const t=j(e);return(0,p.jsxs)("div",{className:(0,r.A)("tabs-container",A.tabList),children:[(0,p.jsx)(m,{...t,...e}),(0,p.jsx)(f,{...t,...e})]})}function v(e){const t=(0,g.A)();return(0,p.jsx)(b,{...e,children:x(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var l=n(6540);const r={},s=l.createContext(r);function i(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);