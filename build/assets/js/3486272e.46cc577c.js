"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[46290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(87462),a=n(67294),l=n(86010),i=n(12466),o=n(16550),u=n(91980),c=n(67392),s=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,c]=b({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,s.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),g=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var g=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),r=c[n].value;r!==o&&(p(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(N,(0,r.Z)({},e,t)))}function h(e){const t=(0,g.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},96316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),l=n(74866),i=n(85162);const o={sidebar_position:2},u="New State",c={unversionedId:"api/v4/callcenter_api/SimoTelClient/EventsApi/new_state",id:"api/v4/callcenter_api/SimoTelClient/EventsApi/new_state",title:"New State",description:"\u0647\u0646\u06af\u0627\u0645\u06cc\u200c \u0643\u0647 \u0648\u0636\u0639\u064a\u062a \u06a9\u0627\u0631\u0628\u0631\u06cc \u062f\u0631 \u0633\u06cc\u0645\u0648\u062a\u0644 \u062a\u063a\u06cc\u06cc\u0631 \u0645\u06cc\u200c\u06a9\u0646\u062f\u060c \u0631\u0648\u06cc\u062f\u0627\u062f NewState \u062a\u0648\u0644\u06cc\u062f\u200c \u0645\u06cc\u200c\u0634\u0648\u062f. \u0628\u0647\u200c\u0639\u0646\u0648\u0627\u0646\u200c\u0645\u062b\u0627\u0644 \u06a9\u0627\u0631\u0628\u0631\u06cc \u06a9\u0647 \u063a\u06cc\u0631\u0641\u0639\u0627\u0644\u200c",source:"@site/docs/api/v4/2-callcenter_api/3-SimoTelClient/2-EventsApi/1-new_state.md",sourceDirName:"api/v4/2-callcenter_api/3-SimoTelClient/2-EventsApi",slug:"/api/v4/callcenter_api/SimoTelClient/EventsApi/new_state",permalink:"/docs/api/v4/callcenter_api/SimoTelClient/EventsApi/new_state",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2}},s={},p=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f NewState",id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f-newstate",level:2}],d={toc:p},m="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"new-state"},"New State"),(0,a.kt)("p",null,"\u0647\u0646\u06af\u0627\u0645\u06cc\u200c \u0643\u0647 \u0648\u0636\u0639\u064a\u062a \u06a9\u0627\u0631\u0628\u0631\u06cc \u062f\u0631 \u0633\u06cc\u0645\u0648\u062a\u0644 \u062a\u063a\u06cc\u06cc\u0631 \u0645\u06cc\u200c\u06a9\u0646\u062f\u060c \u0631\u0648\u06cc\u062f\u0627\u062f NewState \u062a\u0648\u0644\u06cc\u062f\u200c \u0645\u06cc\u200c\u0634\u0648\u062f. \u0628\u0647\u200c\u0639\u0646\u0648\u0627\u0646\u200c\u0645\u062b\u0627\u0644 \u06a9\u0627\u0631\u0628\u0631\u06cc \u06a9\u0647 \u063a\u06cc\u0631\u0641\u0639\u0627\u0644\u200c\n\u0627\u0633\u062a(Idle \u06cc\u0627 \u062f\u0631 \u0627\u0646\u062a\u0638\u0627\u0631 \u062a\u0645\u0627\u0633)\u060c \u0647\u0646\u06af\u0627\u0645\u06cc \u06a9\u0647 \u062a\u0645\u0627\u0633\u06cc \u0628\u0631\u0627\u06cc \u0648\u06cc \u0627\u0631\u0633\u0627\u0644 \u0634\u0648\u062f \u062f\u0631 \u0647\u0646\u06af\u0627\u0645 \u0634\u0646\u06cc\u062f\u0647 \u0634\u062f\u0646 \u0635\u062f\u0627\u06cc \u0632\u0646\u06af \u0627\u06cc\u0646 \u0631\u0648\u06cc\u062f\u0627\u062f \u0628\u0627\nstate=Ringing \u0627\u06cc\u062c\u0627\u062f \u0634\u062f\u0647 \u0648 \u0628\u0647 \u0633\u0645\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c \u0647\u0646\u06af\u0627\u0645 \u067e\u0627\u0633\u062e\u06af\u0648\u06cc\u06cc \u062f\u0648\u0628\u0627\u0631\u0647 \u0647\u0645\u06cc\u0646 \u0631\u0648\u06cc\u062f\u0627\u062f \u0628\u0627 state=InUse \u0627\u06cc\u062c\u0627\u062f\n\u0645\u06cc\u200c\u06af\u0631\u062f\u062f \u0648 \u0628\u0647 \u0633\u0645\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,a.kt)("admonition",{title:"\u0647\u0634\u062f\u0627\u0631 ",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u062a\u0627 \u0632\u0645\u0627\u0646\u06cc \u06a9\u0647 \u0631\u0648\u06cc\u062f\u0627\u062f\u200c\u0647\u0627\u06cc \u0645\u062f \u0646\u0638\u0631 \u0634\u0645\u0627 \u062f\u0631 \u0628\u062e\u0634 API Events \u0627\u0646\u062a\u062e\u0627\u0628 \u0646\u0634\u0648\u0646\u062f\u060c\u0647\u06cc\u0686 \u0627\u0637\u0644\u0627\u0639\u0627\u062a\u06cc \u0628\u0647 \u0633\u0645\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0627\u0631\u0633\u0627\u0644 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.")),(0,a.kt)("h2",{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641\u200c\u0634\u062f\u0647"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0646\u0627\u0645 \u0631\u0648\u06cc\u062f\u0627\u062f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"NewState"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"event_name"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0645\u0627\u0631\u0647\u200c\u062f\u0627\u062e\u0644\u06cc(\u06a9\u0627\u0631\u0628\u0631\u06cc \u06a9\u0647 \u0631\u0648\u06cc\u062f\u0627\u062f \u0628\u0631\u0627\u06cc \u0648\u06cc \u062a\u0648\u0644\u06cc\u062f \u0634\u062f\u0647)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"553"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"exten"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0648\u0636\u0639\u06cc\u062a \u062c\u062f\u06cc\u062f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Idle - InUse Pause - ringing - Unavailable"),(0,a.kt)("td",{parentName:"tr",align:"center"},"InUse"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"state"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0637\u0631\u0641 \u0645\u0642\u0627\u0628\u0644 \u062a\u0645\u0627\u0633"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"09991101756"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"participant"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u062a\u0645\u0627\u0633 \u0648\u0631\u0648\u062f\u06cc \u06cc\u0627 \u062e\u0631\u0648\u062c\u06cc"),(0,a.kt)("td",{parentName:"tr",align:"center"},"in-out"),(0,a.kt)("td",{parentName:"tr",align:"center"},"in"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"direction"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0686\u0646\u0627\u0646\u06a9\u0647 \u06a9\u0627\u0631\u0628\u0631 \u062f\u0631 \u0635\u0641 \u0628\u0648\u062f\u0647 \u0628\u0627\u0634\u062f\u060c\u0646\u0627\u0645 \u0635\u0641 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u06af\u0631\u062f\u062f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"900"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"queue"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627\u06cc \u062a\u0645\u0627\u0633 \u06a9\u0647 \u062a\u0648\u0633\u0637 PBX \u062a\u0648\u0644\u06cc\u062f \u0645\u06cc\u200c\u06af\u0631\u062f\u062f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1510564538.919"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"cuid"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u0627\u067e\u0631\u0627\u062a\u0648\u0631 \u062f\u0631 \u062d\u0627\u0644 \u0634\u0645\u0627\u0631\u0647 \u06af\u06cc\u0631\u06cc \u0645\u06cc\u0628\u0627\u0634\u062f \u0648 \u0648\u0636\u0639\u06cc\u062a  state=InUse \u0645\u06cc \u0628\u0627\u0634\u062f(\u062f\u0631 \u0632\u0645\u0627\u0646\u06cc \u06a9\u0647 \u0627\u067e\u0631\u0627\u062a\u0648\u0631 \u0634\u0631\u0648\u0639 \u0628\u0647 \u0634\u0645\u0627\u0631\u0647 \u06af\u06cc\u0631\u06cc \u0645\u06cc\u06a9\u0646\u062f \u0627\u06cc\u0646 \u067e\u0627\u0631\u0627\u0645\u062a\u0631 \u0645\u0642\u062f\u0627\u0631 \u0645\u06cc\u06af\u06cc\u0631\u062f)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes-no"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"dialer"))))),(0,a.kt)("h2",{id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f-newstate"},"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f NewState"),(0,a.kt)(l.Z,{defaultValue:"InUse",values:[{label:"Idle",value:"Idle"},{label:"InUse",value:"InUse"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Idle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n"event_name": "NewState",\n"exten": "991",\n"state": "Idle",\n"unique_id": "1610778618.378"\n}\n'))),(0,a.kt)(i.Z,{value:"InUse",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n"event_name": "NewState",\n"exten": "991",\n"state": "InUse",\n"participant": "992",\n"direction": "out",\n"queue": "902",\n"unique_id": "1610778625.386"\n}\n')))))}b.isMDXComponent=!0}}]);