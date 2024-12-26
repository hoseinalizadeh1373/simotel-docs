"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[3494],{9407:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(4848),i=t(8453);const r={title:void 0},o="IVR API",l={id:"developers/SimotelWebhooks/DialplanApiComponents/ivr_api",title:"IVR API",description:"This component is similar to the IVR component, with the difference that it sends the number entered by the caller to the web service, and the web service then returns the name of the output where the call should exit.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/3-SimotelWebhooks/3-DialplanApiComponents/5-ivr_api.md",sourceDirName:"developers/3-SimotelWebhooks/3-DialplanApiComponents",slug:"/developers/SimotelWebhooks/DialplanApiComponents/ivr_api",permalink:"/developers/SimotelWebhooks/DialplanApiComponents/ivr_api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"docs",previous:{title:"Trunk API",permalink:"/developers/SimotelWebhooks/DialplanApiComponents/trunk_api"},next:{title:"Smart API",permalink:"/developers/SimotelWebhooks/DialplanApiComponents/smart_api"}},h={},c=[{value:"Component Parameters",id:"component-parameters",level:2},{value:"Web Service Format",id:"web-service-format",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ivr-api",children:"IVR API"})}),"\n",(0,s.jsx)(n.p,{children:"This component is similar to the IVR component, with the difference that it sends the number entered by the caller to the web service, and the web service then returns the name of the output where the call should exit."}),"\n",(0,s.jsx)(n.h2,{id:"component-parameters",children:"Component Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"API Address"}),": The web service URL to determine the destination extension number."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Announcement"}),": The audio file played when entering the IVR."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Timeout Announcement"}),": The message played when a timeout occurs."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Invalid Announcement"}),": The message played when the caller enters an invalid number."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Enable Direct Dial"}),": If enabled, the caller can dial an internal number of a defined user in the system."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Repeat Loop"}),": The number of times the IVR will repeat if the caller does not enter a number."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Timeout (Sec)"}),": The time given for the caller to enter the second digit after entering the first one (in seconds). Setting it to zero disables the timeout feature."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Max Digits"}),": The maximum number of digits the caller can enter."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Case"}),": The number that, if entered by the user, triggers the corresponding output."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Text"}),": A label used for display purposes in the component for easy identification."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"web-service-format",children:"Web Service Format"}),"\n",(0,s.jsxs)(n.p,{children:["Based on the settings in the ",(0,s.jsx)(n.code,{children:"API Method & API Version"})," menu, the component calls the web service and sends the following data:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"src"}),": The caller\u2019s number (Caller or CID)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"dst"}),": The entered number (Callee or DID or Exten)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"data"}),": The data entered by the caller during the call (e.g., data entered in the IVR)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"unique_id"}),": The unique ID of the call."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"app_name"}),": The name of the current component."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In response, the component receives the following output in JSON format."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'{\n  "ok": "1",\n  "case": "3"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Finally, the call exits from the desired output (in this case, 3)."})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);