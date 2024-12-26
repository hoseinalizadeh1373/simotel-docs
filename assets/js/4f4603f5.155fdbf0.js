"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[5995],{3106:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=t(4848),i=t(8453);const o={sidebar_position:2,title:void 0},r="Extention API",l={id:"developers/SimotelWebhooks/DialplanApiComponents/exten_api",title:"Extention API",description:"This component is used to forward a call to an extension. Its function is similar to the Extension component, but instead of statically defining the destination number, it retrieves the destination extension number via a web service and only forwards the call to that extension.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/3-SimotelWebhooks/3-DialplanApiComponents/3-exten_api.md",sourceDirName:"developers/3-SimotelWebhooks/3-DialplanApiComponents",slug:"/developers/SimotelWebhooks/DialplanApiComponents/exten_api",permalink:"/developers/SimotelWebhooks/DialplanApiComponents/exten_api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Settings",permalink:"/developers/SimotelWebhooks/DialplanApiComponents/setting"},next:{title:"Trunk API",permalink:"/developers/SimotelWebhooks/DialplanApiComponents/trunk_api"}},a={},d=[{value:"Component Parameters",id:"component-parameters",level:2},{value:"Component Outputs",id:"component-outputs",level:2},{value:"Web Service Format",id:"web-service-format",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"extention-api",children:"Extention API"})}),"\n",(0,s.jsxs)(n.p,{children:["This component is used to forward a call to an extension. Its function is similar to the ",(0,s.jsx)(n.strong,{children:"Extension"})," component, but instead of statically defining the destination number, it retrieves the destination extension number via a web service and only forwards the call to that extension."]}),"\n",(0,s.jsx)(n.h2,{id:"component-parameters",children:"Component Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"API Address"}),": The web service address to retrieve the destination extension number."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Timeout (sec)"}),": The duration the extension will ring (in seconds)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Options"}),": Call settings."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"component-outputs",children:"Component Outputs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"S (Success)"}),": If the call is successful, i.e., the extension answers the call."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"B (Busy)"}),": If the extension is busy."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"F (Fail)"}),": If the call fails for any reason."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"web-service-format",children:"Web Service Format"}),"\n",(0,s.jsxs)(n.p,{children:["Based on the ",(0,s.jsx)(n.code,{children:"API Method & API Version"})," settings, the component calls the web service and sends the following data (with the names mentioned) along with it:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"src"}),": The caller's number (Caller or CID)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"dst"}),": The entered number (Callee, DID, or Exten)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"data"}),": The data entered by the caller during the call (e.g., data entered in the IVR)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"unique_id"}),": The unique identifier of the call."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"app_name"}),": The name of the current component."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In response, the component receives the following output in JSON format."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'{\n  "ok": "1",\n  "extension": "120"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"And finally, the call is forwarded to the entered extension (here, 120)."})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);