"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[13781],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),c=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return t?a.createElement(f,o(o({ref:n},s),{},{components:t})):a.createElement(f,o({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6818:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=t(87462),r=(t(67294),t(3905)),l=t(74866),o=t(85162);const i={},u="Announce Search",c={unversionedId:"callcenter_api/SimoTelAPI/announcement/announcements_search",id:"version-4.0.0/callcenter_api/SimoTelAPI/announcement/announcements_search",title:"Announce Search",description:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u062c\u0633\u062a\u062c\u0648 \u062f\u0631 \u0622\u0648\u0627\u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.",source:"@site/api_versioned_docs/version-4.0.0/1-callcenter_api/3-SimoTelAPI/7-announcement/3-announcements_search.md",sourceDirName:"1-callcenter_api/3-SimoTelAPI/7-announcement",slug:"/callcenter_api/SimoTelAPI/announcement/announcements_search",permalink:"/api/api_versioned_docs/version-4.0.0/callcenter_api/SimoTelAPI/announcement/announcements_search",draft:!1,tags:[],version:"4.0.0",sidebarPosition:3,frontMatter:{},sidebar:"version-4.0.0/docs",previous:{title:"Announce Add",permalink:"/api/api_versioned_docs/version-4.0.0/callcenter_api/SimoTelAPI/announcement/announcements_add"},next:{title:"Announce Edit",permalink:"/api/api_versioned_docs/version-4.0.0/callcenter_api/SimoTelAPI/announcement/announcements_edit"}},s={},p=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a",id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u062f\u0631\u062e\u0648\u0627\u0633\u062a",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}],d={toc:p},m="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"announce-search"},"Announce Search"),(0,r.kt)("p",null,"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u062c\u0633\u062a\u062c\u0648 \u062f\u0631 \u0622\u0648\u0627\u0647\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,r.kt)("h2",{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc","[**]","/\u0645\u0646\u0637\u0642\u06cc","[*]"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u06cc\u0627\u0641\u062a\u0646 \u0645\u0648\u0627\u0631\u062f \u0645\u0634\u0627\u0628\u0647"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true/false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:"center"},"**"),(0,r.kt)("td",{parentName:"tr",align:"center"},"alike")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u0646\u0627\u0645 \u0641\u0627\u06cc\u0644 \u0635\u0648\u062a\u06cc"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"conditions->name")))),(0,r.kt)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u062f\u0631\u062e\u0648\u0627\u0633\u062a"},"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'{\n    "success": 1,\n    "message": "",\n    "data": [\n        {\n            "_id": "5ea534550a1a2b1d207b1426",\n            "filename": "file-20200426071221-22185-whatsapp-audio-2020-_.wav",\n            "name": "3",\n            "comment": "",\n            "date": "1399-02-07 11:42:21"\n        },\n        {\n            "_id": "5ea534650a1a2b12f6133357",\n            "filename": "file-20200426071237-58502-whatsapp-audio-2020-_.wav",\n            "name": "1",\n            "comment": "",\n            "date": "1399-02-07 11:42:37"\n        },\n        {\n            "_id": "5f832be7095d8456d8453638",\n            "filename": "file-20201011155935-37443-123mp3mp3_.wav",\n            "name": "123",\n            "comment": "",\n            "date": "1399-07-20 19:29:35"\n        }\n    ]\n}\n')),(0,r.kt)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"},"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"),(0,r.kt)(l.Z,{className:"unique-tabs",defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Linux",value:"Linux"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => 'http://192.168.51.21//api/v4/pbx/announcements/search',\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => '',\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 0,\n  CURLOPT_FOLLOWLOCATION => true,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => 'POST',\n  CURLOPT_POSTFIELDS =>'{\n    \"alike\":\"true\",\n    \"conditions\":{\"name\":\"\"}\n}',\n  CURLOPT_HTTPHEADER => array(\n    'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG',\n    'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==',\n    'Content-Type: application/json'\n  ),\n));\n\n$response = curl_exec($curl);\n\n    if (!curl_errno($curl)) {\n    $httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);\n    echo 'response code:'.$httpcode, '<br/>';\n}\n\ncurl_close($curl);\necho $response;\n"))),(0,r.kt)(o.Z,{value:"JS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<html>\n    <head>\n        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n    </head>\n    <body>\n        <script>\n            var settings = {\n              "url": "http://192.168.51.21//api/v4/pbx/announcements/search",\n              "method": "POST",\n              "timeout": 0,\n              "headers": {\n                "X-APIKEY": "vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG",\n                "Authorization": "Basic dGVzdDpBYTEyMzQ1Ng==",\n                "Content-Type": "application/json"\n              },\n              "data": JSON.stringify({\n                  "alike": "true",\n                  "conditions": {\n                    "name": ""\n                  }\n                }),\n            };\n\n\n                $.ajax(settings).always(function (jqXHR) {\n                    console.log("response code: " + jqXHR.status + " " + jqXHR.statusText);\n                    console.log("response body: " + jqXHR.responseText);\n                });\n        <\/script>\n    </body>\n</html>\n'))),(0,r.kt)(o.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl --location --request POST 'http://192.168.51.21//api/v4/pbx/announcements/search' \\\n--header 'X-APIKEY: vZKtIKWsld0egNlkzHo8i5LVBqLNBSWARCQsPOSgDjFmAHM3tG' \\\n--header 'Authorization: Basic dGVzdDpBYTEyMzQ1Ng==' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"alike\":\"true\",\n    \"conditions\":{\"name\":\"\"}\n}'\n")))))}f.isMDXComponent=!0},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),r=t(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(87462),r=t(67294),l=t(86010),o=t(12466),i=t(16550),u=t(91980),c=t(67392),s=t(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[u,c]=f({queryString:t,groupId:a}),[p,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,s.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),h=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),b(e)}),[c,b,l]),tabValues:l}}var h=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:n,block:t,selectedValue:i,selectValue:u,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=s.indexOf(n),a=c[t].value;a!==i&&(p(n),u(a))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>s.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":i===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function T(e){const n=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},r.createElement(g,(0,a.Z)({},e,n)),r.createElement(y,(0,a.Z)({},e,n)))}function k(e){const n=(0,h.Z)();return r.createElement(T,(0,a.Z)({key:String(n)},e))}}}]);