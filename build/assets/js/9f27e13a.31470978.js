"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[68788],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(87462),a=n(67294),o=n(86010),l=n(12466),i=n(16550),u=n(91980),c=n(67392),s=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,c]=f({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,s.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),v=(()=>{const e=u??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var v=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),r=c[n].value;r!==i&&(p(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function T(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(T,(0,r.Z)({},e,t)))}function k(e){const t=(0,v.Z)();return a.createElement(g,(0,r.Z)({key:String(t)},e))}},72356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(74866),l=n(85162);const i={},u="Audio Download",c={unversionedId:"api/v4/callcenter_api/SimoTelAPI/report/audio_download",id:"api/v4/callcenter_api/SimoTelAPI/report/audio_download",title:"Audio Download",description:"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u062f\u0627\u0646\u0644\u0648\u062f \u0641\u0627\u06cc\u0644 \u0635\u0648\u062a\u06cc \u0645\u06a9\u0627\u0644\u0645\u0627\u062a \u0636\u0628\u0637 \u0634\u062f\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.\u0646\u0627\u0645 \u0641\u0627\u06cc\u0644 \u0635\u0648\u062a\u06cc \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u067e\u0627\u0631\u0645\u062a\u0631 \u062f\u0631 \u0631\u0648\u06cc\u062f\u0627\u062f CDR \u0628\u0647 \u0633\u0645\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.",source:"@site/docs/api/v4/2-callcenter_api/2-SimoTelAPI/13-report/3-audio_download.md",sourceDirName:"api/v4/2-callcenter_api/2-SimoTelAPI/13-report",slug:"/api/v4/callcenter_api/SimoTelAPI/report/audio_download",permalink:"/docs/api/v4/callcenter_api/SimoTelAPI/report/audio_download",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"docs",previous:{title:"Quick Info",permalink:"/docs/api/v4/callcenter_api/SimoTelAPI/report/quick_info"},next:{title:"CDR Search",permalink:"/docs/api/v4/callcenter_api/SimoTelAPI/report/report_cdr_search"}},s={},p=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc",level:2}],d={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"audio-download"},"Audio Download"),(0,a.kt)("p",null,"\u0627\u0632 \u0627\u06cc\u0646 \u0633\u0631\u0648\u06cc\u0633 \u0628\u0631\u0627\u06cc \u062f\u0627\u0646\u0644\u0648\u062f \u0641\u0627\u06cc\u0644 \u0635\u0648\u062a\u06cc \u0645\u06a9\u0627\u0644\u0645\u0627\u062a \u0636\u0628\u0637 \u0634\u062f\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.\u0646\u0627\u0645 \u0641\u0627\u06cc\u0644 \u0635\u0648\u062a\u06cc \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u067e\u0627\u0631\u0645\u062a\u0631 \u062f\u0631 \u0631\u0648\u06cc\u062f\u0627\u062f ",(0,a.kt)("inlineCode",{parentName:"p"},"CDR")," \u0628\u0647 \u0633\u0645\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,a.kt)("h2",{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641 \u0634\u062f\u0647"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647 \u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc \u0636\u0631\u0648\u0631\u06cc","[**]","/\u0645\u0646\u0637\u0642\u06cc","[*]"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0646\u0627\u0645 \u0641\u0627\u06cc\u0644\u200c\u0635\u0648\u062a\u06cc \u0645\u06a9\u0627\u0644\u0645\u0647 \u06a9\u0647 \u0627\u0632 \u062c\u0633\u062a\u062c\u0648 \u0628\u062f\u0633\u062a \u0645\u06cc\u200c\u0622\u06cc\u062f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"20200921_1600675211.10033.1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"**"),(0,a.kt)("td",{parentName:"tr",align:"center"},"file")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," \u062f\u0631 \u062c\u0648\u0627\u0628 \u0641\u0627\u06cc\u0644 \u0635\u0648\u062a\u06cc \u0645\u0631\u0628\u0648\u0637\u0647 \u0628\u0631\u0627\u06cc \u062f\u0627\u0646\u0644\u0648\u062f \u0628\u0647 \u0633\u0645\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f. ")),(0,a.kt)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"},"\u0646\u0645\u0648\u0646\u0647 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc"),(0,a.kt)(o.Z,{className:"unique-tabs",defaultValue:"PHP",values:[{label:"PHP",value:"PHP"},{label:"JS",value:"JS"},{label:"Linux",value:"Linux"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"PHP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\n  CURLOPT_URL => 'http://192.168.51.20//api/v4/reports/audio/download',\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => '',\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 0,\n  CURLOPT_FOLLOWLOCATION => true,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => 'POST',\n  CURLOPT_POSTFIELDS =>'{\n    \"file\":\"20200921_1600675211.10033.1.mp3\"\n}',\n  CURLOPT_HTTPHEADER => array(\n    'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG',\n    'Authorization: Basic c2FkcjpTYWRyQDEyMw==',\n    'Content-Type: application/json'\n  ),\n));\n\n$response = curl_exec($curl);\n\ncurl_close($curl);\necho $response;\n"))),(0,a.kt)(l.Z,{value:"JS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<html>\n    <head>\n        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"><\/script>\n    </head>\n    <body>\n        <script>\n            var settings = {\n              "url": "http://192.168.51.20//api/v4/reports/audio/download",\n              "method": "POST",\n              "timeout": 0,\n              "headers": {\n                "X-APIKEY": "9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG",\n                "Authorization": "Basic c2FkcjpTYWRyQDEyMw==",\n                "Content-Type": "application/json"\n              },\n              "data": JSON.stringify({\n                "file": "20200921_1600675211.10033.1.mp3"\n              }),\n            };\n\n            $.ajax(settings).done(function (response) {\n              console.log(response);\n            });\n        <\/script>\n    </body>\n</html>\n'))),(0,a.kt)(l.Z,{value:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl --location --request POST 'http://192.168.51.20//api/v4/reports/audio/download' \\\n--header 'X-APIKEY: 9UV0BWKRL83PYIH9Gv1fI85d41lO4S932EeX3wHC47sHjMJOMG' \\\n--header 'Authorization: Basic c2FkcjpTYWRyQDEyMw==' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"file\":\"20200921_1600675211.10033.1.mp3\"\n}'\n")))))}f.isMDXComponent=!0}}]);