"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[1423],{6541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"developers/SimotelWebhooks/Events/new_state","title":"\u062a\u063a\u06cc\u06cc\u0631 \u0648\u0636\u0639\u06cc\u062a \u06a9\u0627\u0631\u0628\u0631","description":"\u0647\u0646\u06af\u0627\u0645\u06cc\u200c \u0643\u0647 \u0648\u0636\u0639\u064a\u062a \u06a9\u0627\u0631\u0628\u0631\u06cc \u062f\u0631 \u0633\u06cc\u0645\u0648\u062a\u0644 \u062a\u063a\u06cc\u06cc\u0631 \u0645\u06cc\u200c\u06a9\u0646\u062f\u060c \u0631\u0648\u06cc\u062f\u0627\u062f NewState \u062a\u0648\u0644\u06cc\u062f\u200c \u0645\u06cc\u200c\u0634\u0648\u062f. \u0628\u0647\u200c\u0639\u0646\u0648\u0627\u0646\u200c \u0645\u062b\u0627\u0644 \u06a9\u0627\u0631\u0628\u0631\u06cc \u06a9\u0647 \u063a\u06cc\u0631\u0641\u0639\u0627\u0644\u200c","source":"@site/i18n/fa/docusaurus-plugin-content-docs/current/developers/3-SimotelWebhooks/2-Events/19-new_state.md","sourceDirName":"developers/3-SimotelWebhooks/2-Events","slug":"/developers/SimotelWebhooks/Events/new_state","permalink":"/fa/developers/SimotelWebhooks/Events/new_state","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"\u062a\u063a\u06cc\u06cc\u0631 \u0648\u0636\u0639\u06cc\u062a \u06a9\u0627\u0631\u0628\u0631","title":"\u062a\u063a\u06cc\u06cc\u0631 \u0648\u0636\u0639\u06cc\u062a \u06a9\u0627\u0631\u0628\u0631"},"sidebar":"docs","previous":{"title":"\u06af\u0632\u0627\u0631\u0634 \u062a\u0645\u0627\u0633 \u0627\u0646\u0628\u0648\u0647","permalink":"/fa/developers/SimotelWebhooks/Events/AutoDialerReport"},"next":{"title":"\u0645\u0639\u0631\u0641\u06cc ComponentApi","permalink":"/fa/developers/SimotelWebhooks/DialplanApiComponents/whatis"}}');var l=n(4848),s=n(8453),a=n(5537),i=n(9329);const c={sidebar_position:2,sidebar_label:"\u062a\u063a\u06cc\u06cc\u0631 \u0648\u0636\u0639\u06cc\u062a \u06a9\u0627\u0631\u0628\u0631",title:"\u062a\u063a\u06cc\u06cc\u0631 \u0648\u0636\u0639\u06cc\u062a \u06a9\u0627\u0631\u0628\u0631"},o="NewState",d={},u=[{value:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f",id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f",level:2},{value:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f NewState",id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f-newstate",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"newstate",children:"NewState"})}),"\n",(0,l.jsx)(t.p,{children:"\u0647\u0646\u06af\u0627\u0645\u06cc\u200c \u0643\u0647 \u0648\u0636\u0639\u064a\u062a \u06a9\u0627\u0631\u0628\u0631\u06cc \u062f\u0631 \u0633\u06cc\u0645\u0648\u062a\u0644 \u062a\u063a\u06cc\u06cc\u0631 \u0645\u06cc\u200c\u06a9\u0646\u062f\u060c \u0631\u0648\u06cc\u062f\u0627\u062f NewState \u062a\u0648\u0644\u06cc\u062f\u200c \u0645\u06cc\u200c\u0634\u0648\u062f. \u0628\u0647\u200c\u0639\u0646\u0648\u0627\u0646\u200c \u0645\u062b\u0627\u0644 \u06a9\u0627\u0631\u0628\u0631\u06cc \u06a9\u0647 \u063a\u06cc\u0631\u0641\u0639\u0627\u0644\u200c\n\u0627\u0633\u062a (Idle \u06cc\u0627 \u062f\u0631 \u0627\u0646\u062a\u0638\u0627\u0631 \u062a\u0645\u0627\u0633)\u060c \u0647\u0646\u06af\u0627\u0645\u06cc \u06a9\u0647 \u062a\u0645\u0627\u0633\u06cc \u0628\u0631\u0627\u06cc \u0648\u06cc \u0627\u0631\u0633\u0627\u0644 \u0634\u0648\u062f \u062f\u0631 \u0647\u0646\u06af\u0627\u0645 \u0634\u0646\u06cc\u062f\u0647 \u0634\u062f\u0646 \u0635\u062f\u0627\u06cc \u0632\u0646\u06af\u060c \u0627\u06cc\u0646 \u0631\u0648\u06cc\u062f\u0627\u062f \u0628\u0627\nstate=Ringing \u0627\u06cc\u062c\u0627\u062f \u0634\u062f\u0647 \u0648 \u0628\u0647 \u0633\u0645\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c \u0647\u0646\u06af\u0627\u0645 \u067e\u0627\u0633\u062e\u06af\u0648\u06cc\u06cc \u062f\u0648\u0628\u0627\u0631\u0647 \u0647\u0645\u06cc\u0646 \u0631\u0648\u06cc\u062f\u0627\u062f \u0628\u0627 state=InUse \u0627\u06cc\u062c\u0627\u062f\n\u0645\u06cc\u200c\u06af\u0631\u062f\u062f \u0648 \u0628\u0647 \u0633\u0645\u062a \u0648\u0628\u200c \u0633\u0631\u0648\u06cc\u0633 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f."}),"\n",(0,l.jsx)(t.admonition,{title:"\u0647\u0634\u062f\u0627\u0631",type:"caution",children:(0,l.jsx)(t.p,{children:"\u062a\u0627 \u0632\u0645\u0627\u0646\u06cc \u06a9\u0647 \u0631\u0648\u06cc\u062f\u0627\u062f\u200c\u0647\u0627\u06cc \u0645\u062f \u0646\u0638\u0631 \u0634\u0645\u0627 \u062f\u0631 \u0628\u062e\u0634 API Events \u0627\u0646\u062a\u062e\u0627\u0628 \u0646\u0634\u0648\u0646\u062f\u060c \u0647\u06cc\u0686 \u0627\u0637\u0644\u0627\u0639\u0627\u062a\u06cc \u0628\u0647 \u0633\u0645\u062a \u0648\u0628\u200c \u0633\u0631\u0648\u06cc\u0633 \u0627\u0631\u0633\u0627\u0644 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f."})}),"\n",(0,l.jsx)(t.h2,{id:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f",children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f"}),"\n",(0,l.jsx)("div",{class:"custom-table",children:(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u062a\u0639\u0631\u06cc\u0641\u200c\u0634\u062f\u0647"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u200c\u0647\u0627"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0646\u0627\u0645 \u0631\u0648\u06cc\u062f\u0627\u062f"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"NewState"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"event_name"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0634\u0645\u0627\u0631\u0647\u200c\u062f\u0627\u062e\u0644\u06cc (\u06a9\u0627\u0631\u0628\u0631\u06cc \u06a9\u0647 \u0631\u0648\u06cc\u062f\u0627\u062f \u0628\u0631\u0627\u06cc \u0648\u06cc \u062a\u0648\u0644\u06cc\u062f \u0634\u062f\u0647)"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"553"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"exten"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0648\u0636\u0639\u06cc\u062a \u062c\u062f\u06cc\u062f"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Idle - InUse Pause - ringing - Unavailable"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"InUse"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"state"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0637\u0631\u0641 \u0645\u0642\u0627\u0628\u0644 \u062a\u0645\u0627\u0633"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"09991101756"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"participant"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u062a\u0645\u0627\u0633 \u0648\u0631\u0648\u062f\u06cc \u06cc\u0627 \u062e\u0631\u0648\u062c\u06cc"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"in-out"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"in"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"direction"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0686\u0646\u0627\u0646\u06a9\u0647 \u06a9\u0627\u0631\u0628\u0631 \u062f\u0631 \u0635\u0641 \u0628\u0648\u062f\u0647 \u0628\u0627\u0634\u062f\u060c \u0646\u0627\u0645 \u0635\u0641 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u06af\u0631\u062f\u062f"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"900"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"queue"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0634\u0646\u0627\u0633\u0647 \u06cc\u06a9\u062a\u0627\u06cc \u062a\u0645\u0627\u0633 \u06a9\u0647 \u062a\u0648\u0633\u0637 PBX \u062a\u0648\u0644\u06cc\u062f \u0645\u06cc\u200c\u06af\u0631\u062f\u062f"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"1510564538.919"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"cuid"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"\u0627\u067e\u0631\u0627\u062a\u0648\u0631 \u062f\u0631 \u062d\u0627\u0644 \u0634\u0645\u0627\u0631\u0647 \u06af\u06cc\u0631\u06cc \u0645\u06cc \u0628\u0627\u0634\u062f \u0648 \u0648\u0636\u0639\u06cc\u062a  state=InUse \u0645\u06cc \u0628\u0627\u0634\u062f (\u062f\u0631 \u0632\u0645\u0627\u0646\u06cc \u06a9\u0647 \u0627\u067e\u0631\u0627\u062a\u0648\u0631 \u0634\u0631\u0648\u0639 \u0628\u0647 \u0634\u0645\u0627\u0631\u0647 \u06af\u06cc\u0631\u06cc \u0645\u06cc\u06a9\u0646\u062f \u0627\u06cc\u0646 \u067e\u0627\u0631\u0627\u0645\u062a\u0631 \u0645\u0642\u062f\u0627\u0631 \u0645\u06cc\u06af\u06cc\u0631\u062f)"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes-no"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"yes"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"dialer"})})]})]})]})}),"\n",(0,l.jsx)(t.h2,{id:"\u0646\u0645\u0648\u0646\u0647-\u062e\u0631\u0648\u062c\u06cc-\u0631\u0648\u06cc\u062f\u0627\u062f-newstate",children:"\u0646\u0645\u0648\u0646\u0647 \u062e\u0631\u0648\u062c\u06cc \u0631\u0648\u06cc\u062f\u0627\u062f NewState"}),"\n","\n",(0,l.jsxs)(a.A,{defaultValue:"InUse",values:[{label:"Idle",value:"Idle"},{label:"InUse",value:"InUse"}],children:[(0,l.jsx)(i.A,{value:"Idle",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:'\t{\n\t"event_name": "NewState",\n\t"exten": "991",\n\t"state": "Idle",\n\t"unique_id": "1610778618.378"\n\t}\n'})})}),(0,l.jsx)(i.A,{value:"InUse",children:(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:'\t{\n\t"event_name": "NewState",\n\t"exten": "991",\n\t"state": "InUse",\n\t"participant": "992",\n\t"direction": "out",\n\t"queue": "902",\n\t"unique_id": "1610778625.386"\n\t}\n'})})})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},9329:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var r=n(8215);const l={tabItem:"tabItem_Ymn6"};var s=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,a),hidden:n,children:t})}},5537:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(6540),l=n(8215),s=n(5627),a=n(6347),i=n(372),c=n(604),o=n(1861),d=n(8749);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}(n);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const l=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(l.location.search);t.set(s,e),l.replace({...l.location,search:t.toString()})}),[s,l])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,s=h(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[o,u]=p({queryString:n,groupId:l}),[b,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,s]=(0,d.Dv)(n);return[l,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:l}),j=(()=>{const e=o??b;return x({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{j&&c(j)}),[j]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=n(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(4848);function f(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),l=i[n].value;l!==r&&(o(t),a(l))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{c.push(e)},onKeyDown:u,onClick:d,...s,className:(0,l.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=b(e);return(0,m.jsxs)("div",{className:(0,l.A)("tabs-container",j.tabList),children:[(0,m.jsx)(f,{...t,...e}),(0,m.jsx)(v,{...t,...e})]})}function A(e){const t=(0,g.A)();return(0,m.jsx)(y,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(6540);const l={},s=r.createContext(l);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);