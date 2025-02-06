"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[6263],{6505:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"developers/SimotelAPI/v4/queues/queues_add","title":"Queue Add","description":"This service is used to add a queue.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/2-SimotelAPI/v4/6-queues/1-queues_add.md","sourceDirName":"developers/2-SimotelAPI/v4/6-queues","slug":"/developers/SimotelAPI/v4/queues/queues_add","permalink":"/developers/SimotelAPI/v4/queues/queues_add","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"docs","previous":{"title":"Trunk Remove","permalink":"/developers/SimotelAPI/v4/trunks/trunks_remove"},"next":{"title":"Queue Search","permalink":"/developers/SimotelAPI/v4/queues/queues_search"}}');var r=n(4848),s=n(8453),i=n(5537),c=n(9329);const d={title:void 0},a="Queue Add",u={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Sample Invocation",id:"sample-invocation",level:2}];function x(t){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...t.components},{Details:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"queue-add",children:"Queue Add"})}),"\n",(0,r.jsx)(e.p,{children:"This service is used to add a queue."}),"\n",(0,r.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)("div",{class:"custom-table",children:(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"Description"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"Defined Data"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"Sample Data"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"Required Parameters[**]/Logical[*]"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"Parameters"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"Queue Name"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"NasimTelecom"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"**"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"name"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"Queue Number"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"9009"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"**"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"number"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"Call Strategy"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"Ring All/Least Recent/Fewest Calls/Random/RR Memory/RR Ordered/Linear/W Random"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"ringall"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"strategy"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"no"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"ringinuse"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"Queue Call Recording"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"yes"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"call_record"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"yes"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"setinterfacevar"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"yes"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"autofill"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"yes"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"setqueuevar"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"yes"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"setqueueentryvar"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"no"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"persistentmembers"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"no"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"shared_lastcall"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"no"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"announce_holdtime"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"yes"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"announce_position"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no/Strict"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"strict"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"joinempty"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"yes"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"leavewhenempty"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"yes/no"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"no"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"reportholdtime"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"0"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"maxlen"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"120"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"announce_frequency"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"60"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"min_announce_frequency"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"120"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"periodic_announce_frequency"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"Queue Hold Music"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"gole orkideh"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"music"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"queue-callswaiting"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"queue_callswaiting"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"queue-thankyou"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"queue_thankyou"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"queue-thereare"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"queue_thereare"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"queue-youarenext"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"queue_youarenext"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"5"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"retry"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"60"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"servicelevel"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"30"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"timeout"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"10"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"weight"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"1"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"*"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"wrapuptime"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"..."}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"}})]})]})]})}),"\n",(0,r.jsx)(e.h2,{id:"sample-invocation",children:"Sample Invocation"}),"\n","\n",(0,r.jsxs)(i.A,{defaultValue:"usageCode",values:[{label:"Example Code To Use",value:"usageCode"},{label:"Example Output",value:"outputCode"}],children:[(0,r.jsx)(c.A,{value:"usageCode",children:(0,r.jsxs)(i.A,{defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Curl",value:"Curl"}],children:[(0,r.jsx)(c.A,{value:"PHP",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Show Full Source Code PHP"}),(0,r.jsx)("br",{}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-php",children:'\t<?php\n\t$curl = curl_init();\n\n\tcurl_setopt_array($curl, array(\n\tCURLOPT_URL => \'http://192.168.51.20/api/v4/pbx/queues/add\',\n\tCURLOPT_RETURNTRANSFER => true,\n\tCURLOPT_ENCODING => \'\',\n\tCURLOPT_MAXREDIRS => 10,\n\tCURLOPT_TIMEOUT => 0,\n\tCURLOPT_FOLLOWLOCATION => true,\n\tCURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n\tCURLOPT_CUSTOMREQUEST => \'POST\',\n\tCURLOPT_POSTFIELDS =>\'{\n\t\t"name":"NasimTelecom",\n\t\t"number":"9009",\n\t\t"strategy":"ringall",\n\t\t"ringinuse":"no",\n\t\t"call_record":"yes",\n\t\t"setinterfacevar":"yes",\n\t\t"autofill":"yes",\n\t\t"setqueuevar":"yes",\n\t\t"setqueueentryvar":"yes",\n\t\t"persistentmembers":"no",\n\t\t"shared_lastcall":"no",\n\t\t"announce_holdtime":"no",\n\t\t"announce_position":"yes",\n\t\t"joinempty":"strict",\n\t\t"leavewhenempty":"yes",\n\t\t"reportholdtime":"no",\n\t\t"maxlen":"0",\n\t\t"announce_frequency":"120",\n\t\t"min_announce_frequency":"60",\n\t\t"periodic_announce_frequency":"120",\n\t\t"music":"gole orkideh",\n\t\t"queue_callswaiting":"queue-callswaiting",\n\t\t"queue_thankyou":"queue-thankyou",\n\t\t"queue_thereare":"queue-thereare",\n\t\t"queue_youarenext":"queue-youarenext",\n\t\t"retry":"5",\n\t\t"servicelevel":"60",\n\t\t"timeout":"30",\n\t\t"weight":"10",\n\t\t"wrapuptime":"1",\n\t\t"monitor_type":"MixMonitor",\n\t\t"monitor_format":"wav",\n\t\t"more_options":""\n\t}\',\n\tCURLOPT_HTTPHEADER => array(\n\t\t\'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG\',\n\t\t\'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==\',\n\t\t\'Content-Type: application/json\'\n\t),\n\t));\n\n\t$response = curl_exec($curl);\n\n\tif (!curl_errno($curl)) {\n\t\t$httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);\n\t\techo \'response code:\'.$httpcode, \'<br/>\';\n\t}\n\n\tcurl_close($curl);\n\techo $response;\n?>\n'})})]})}),(0,r.jsx)(c.A,{value:"JS",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Show Full Source Code JS"}),(0,r.jsx)("br",{}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'\t<html>\n\t\t<head>\n\t\t\t<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n\t\t</head>\n\t\t\t<body>\n\t\t\t\t<script>\n\t\t\t\t\tvar settings = {\n\t\t\t\t\t"url": "http://192.168.51.20/api/v4/pbx/queues/add",\n\t\t\t\t\t"method": "POST",\n\t\t\t\t\t"timeout": 0,\n\t\t\t\t\t"headers": {\n\t\t\t\t\t\t"X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\n\t\t\t\t\t\t"Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",\n\t\t\t\t\t\t"Content-Type": "application/json"\n\t\t\t\t\t},\n\t\t\t\t\t"data": JSON.stringify({\n\t\t\t\t\t\t"name": "NasimTelecom",\n\t\t\t\t\t\t"number": "9009",\n\t\t\t\t\t\t"strategy": "ringall",\n\t\t\t\t\t\t"ringinuse": "no",\n\t\t\t\t\t\t"call_record": "yes",\n\t\t\t\t\t\t"setinterfacevar": "yes",\n\t\t\t\t\t\t"autofill": "yes",\n\t\t\t\t\t\t"setqueuevar": "yes",\n\t\t\t\t\t\t"setqueueentryvar": "yes",\n\t\t\t\t\t\t"persistentmembers": "no",\n\t\t\t\t\t\t"shared_lastcall": "no",\n\t\t\t\t\t\t"announce_holdtime": "no",\n\t\t\t\t\t\t"announce_position": "yes",\n\t\t\t\t\t\t"joinempty": "strict",\n\t\t\t\t\t\t"leavewhenempty": "yes",\n\t\t\t\t\t\t"reportholdtime": "no",\n\t\t\t\t\t\t"maxlen": "0",\n\t\t\t\t\t\t"announce_frequency": "120",\n\t\t\t\t\t\t"min_announce_frequency": "60",\n\t\t\t\t\t\t"periodic_announce_frequency": "120",\n\t\t\t\t\t\t"music": "gole orkideh",\n\t\t\t\t\t\t"queue_callswaiting": "queue-callswaiting",\n\t\t\t\t\t\t"queue_thankyou": "queue-thankyou",\n\t\t\t\t\t\t"queue_thereare": "queue-thereare",\n\t\t\t\t\t\t"queue_youarenext": "queue-youarenext",\n\t\t\t\t\t\t"retry": "5",\n\t\t\t\t\t\t"servicelevel": "60",\n\t\t\t\t\t\t"timeout": "30",\n\t\t\t\t\t\t"weight": "10",\n\t\t\t\t\t\t"wrapuptime": "1",\n\t\t\t\t\t\t"monitor_type": "MixMonitor",\n\t\t\t\t\t\t"monitor_format": "wav",\n\t\t\t\t\t\t"more_options": ""\n\t\t\t\t\t\t}),\n\t\t\t\t\t};\n\n\n\t\t\t\t\t\t$.ajax(settings).always(function (jqXHR) {\n\t\t\t\t\t\t\tconsole.log("response code: " + jqXHR.status + " " + jqXHR.statusText);\n\t\t\t\t\t\t\tconsole.log("response body: " + jqXHR.responseText);\n\t\t\t\t\t\t});\n\t\t\t\t<\/script>\n\t\t</body>\n\t</html>\n'})})]})}),(0,r.jsx)(c.A,{value:"Curl",children:(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Show Full Source Code Curl"}),(0,r.jsx)("br",{}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'\n\tcurl --location --request POST \'http://192.168.51.20/api/v4/pbx/queues/add\' \\\n\t--header \'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG\' \\\n\t--header \'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==\' \\\n\t--header \'Content-Type: application/json\' \\\n\t--data-raw \'{\n\t\t"name":"NasimTelecom",\n\t\t"number":"9009",\n\t\t"strategy":"ringall",\n\t\t"ringinuse":"no",\n\t\t"call_record":"yes",\n\t\t"setinterfacevar":"yes",\n\t\t"autofill":"yes",\n\t\t"setqueuevar":"yes",\n\t\t"setqueueentryvar":"yes",\n\t\t"persistentmembers":"no",\n\t\t"shared_lastcall":"no",\n\t\t"announce_holdtime":"no",\n\t\t"announce_position":"yes",\n\t\t"joinempty":"strict",\n\t\t"leavewhenempty":"yes",\n\t\t"reportholdtime":"no",\n\t\t"maxlen":"0",\n\t\t"announce_frequency":"120",\n\t\t"min_announce_frequency":"60",\n\t\t"periodic_announce_frequency":"120",\n\t\t"music":"gole orkideh",\n\t\t"queue_callswaiting":"queue-callswaiting",\n\t\t"queue_thankyou":"queue-thankyou",\n\t\t"queue_thereare":"queue-thereare",\n\t\t"queue_youarenext":"queue-youarenext",\n\t\t"retry":"5",\n\t\t"servicelevel":"60",\n\t\t"timeout":"30",\n\t\t"weight":"10",\n\t\t"wrapuptime":"1",\n\t\t"monitor_type":"MixMonitor",\n\t\t"monitor_format":"wav",\n\t\t"more_options":""\n\t}\'\n'})})]})})]})}),(0,r.jsx)(c.A,{value:"outputCode",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:'\n  {\n"success": 1,\n"message": "Requested operation is done successfully",\n"data": {\n  "_id": "64b78b96dc412c6dd0306ecc"\n  \t }\n  }\n\n'})})})]})]})}function h(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(x,{...t})}):x(t)}},9329:(t,e,n)=>{n.d(e,{A:()=>i});n(6540);var l=n(8215);const r={tabItem:"tabItem_Ymn6"};var s=n(4848);function i(t){let{children:e,hidden:n,className:i}=t;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,i),hidden:n,children:e})}},5537:(t,e,n)=>{n.d(e,{A:()=>b});var l=n(6540),r=n(8215),s=n(5627),i=n(6347),c=n(372),d=n(604),a=n(1861),u=n(8749);function o(t){return l.Children.toArray(t).filter((t=>"\n"!==t)).map((t=>{if(!t||(0,l.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(t){const{values:e,children:n}=t;return(0,l.useMemo)((()=>{const t=e??function(t){return o(t).map((t=>{let{props:{value:e,label:n,attributes:l,default:r}}=t;return{value:e,label:n,attributes:l,default:r}}))}(n);return function(t){const e=(0,a.XI)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function h(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function y(t){let{queryString:e=!1,groupId:n}=t;const r=(0,i.W6)(),s=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,d.aZ)(s),(0,l.useCallback)((t=>{if(!s)return;const e=new URLSearchParams(r.location.search);e.set(s,t),r.replace({...r.location,search:e.toString()})}),[s,r])]}function j(t){const{defaultValue:e,queryString:n=!1,groupId:r}=t,s=x(t),[i,d]=(0,l.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const l=n.find((t=>t.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:e,tabValues:s}))),[a,o]=y({queryString:n,groupId:r}),[j,g]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[r,s]=(0,u.Dv)(n);return[r,(0,l.useCallback)((t=>{n&&s.set(t)}),[n,s])]}({groupId:r}),A=(()=>{const t=a??j;return h({value:t,tabValues:s})?t:null})();(0,c.A)((()=>{A&&d(A)}),[A]);return{selectedValue:i,selectValue:(0,l.useCallback)((t=>{if(!h({value:t,tabValues:s}))throw new Error(`Can't select invalid tab value=${t}`);d(t),o(t),g(t)}),[o,g,s]),tabValues:s}}var g=n(9136);const A={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(4848);function p(t){let{className:e,block:n,selectedValue:l,selectValue:i,tabValues:c}=t;const d=[],{blockElementScrollPositionUntilNextRender:a}=(0,s.a_)(),u=t=>{const e=t.currentTarget,n=d.indexOf(e),r=c[n].value;r!==l&&(a(e),i(r))},o=t=>{let e=null;switch(t.key){case"Enter":u(t);break;case"ArrowRight":{const n=d.indexOf(t.currentTarget)+1;e=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(t.currentTarget)-1;e=d[n]??d[d.length-1];break}}e?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},e),children:c.map((t=>{let{value:e,label:n,attributes:s}=t;return(0,m.jsx)("li",{role:"tab",tabIndex:l===e?0:-1,"aria-selected":l===e,ref:t=>{d.push(t)},onKeyDown:o,onClick:u,...s,className:(0,r.A)("tabs__item",A.tabItem,s?.className,{"tabs__item--active":l===e}),children:n??e},e)}))})}function v(t){let{lazy:e,children:n,selectedValue:s}=t;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=i.find((t=>t.props.value===s));return t?(0,l.cloneElement)(t,{className:(0,r.A)("margin-top--md",t.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((t,e)=>(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==s})))})}function f(t){const e=j(t);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",A.tabList),children:[(0,m.jsx)(p,{...e,...t}),(0,m.jsx)(v,{...e,...t})]})}function b(t){const e=(0,g.A)();return(0,m.jsx)(f,{...t,children:o(t.children)},String(e))}},8453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>c});var l=n(6540);const r={},s=l.createContext(r);function i(t){const e=l.useContext(s);return l.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),l.createElement(s.Provider,{value:e},t.children)}}}]);