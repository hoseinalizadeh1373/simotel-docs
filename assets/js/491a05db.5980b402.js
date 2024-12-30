"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[3111],{7874:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(4848),r=t(8453);const i={title:void 0},s="Outgoing Route",a={id:"pbx/pbx-menu/dialplan/components/outgoing_route",title:"Outgoing Route",description:"Purpose",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/pbx/3- pbx-menu/6-dialplan/2-components/1-outgoing_route.md",sourceDirName:"pbx/3- pbx-menu/6-dialplan/2-components",slug:"/pbx/pbx-menu/dialplan/components/outgoing_route",permalink:"/pbx/pbx-menu/dialplan/components/outgoing_route",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"Docs",previous:{title:"Introduction",permalink:"/pbx/pbx-menu/dialplan/intro"},next:{title:"Incoming Route",permalink:"/pbx/pbx-menu/dialplan/components/incoming_route"}},l={},c=[{value:"Purpose",id:"purpose",level:2},{value:"Component Parameters",id:"component-parameters",level:2},{value:"Routing Parameters",id:"routing-parameters",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"outgoing-route",children:"Outgoing Route"})}),"\n",(0,o.jsx)(n.h2,{id:"purpose",children:"Purpose"}),"\n",(0,o.jsx)(n.p,{children:"Calls originating within the Call Center or from its internal components (such as IP phones) are considered outgoing calls and are forwarded to the Outgoing Route component. Calls are routed based on the context of the caller (e.g., the internal context set on the phone). In other words, the caller's context should be specified in the component's settings."}),"\n",(0,o.jsx)(n.p,{children:"In the Outgoing Route, appropriate routing rules are implemented for internal calls, city calls, and others."}),"\n",(0,o.jsx)(n.h2,{id:"component-parameters",children:"Component Parameters"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Context"}),": The context of the caller."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Check FeatureCode"}),": Option to use special codes. When enabled, the special code takes precedence over all defined patterns in the component."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Check SpeedDial"}),": Option to use speed dialing. When enabled, speed dial rules take priority over the patterns defined in the component. For example, if a number is dialed that has a speed dial defined, the number will first be converted to its reference number in SpeedDial, and then the patterns for the new number will be checked."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"routing-parameters",children:"Routing Parameters"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Pattern"}),": The outgoing pattern."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["Using patterns in OutgoingRoute is mandatory. If you are unfamiliar with pattern syntax, please refer to the section on ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"/pbx/advance-settings/matchpattern",children:"Pattern Matching Basics"})}),"."]})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(6540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);