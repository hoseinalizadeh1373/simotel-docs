"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[106],{7923:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(4848),s=t(8453);const i={},o="Exten API",a={id:"developers/api/Scenarios/exten_api",title:"Exten API",description:"\u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0645\u06cc\u200c\u0634\u0648\u062f \u0642\u0628\u0644 \u0627\u0632 \u0645\u0637\u0627\u0644\u0639\u0647 \u0627\u06cc\u0646 \u0645\u0637\u0644\u0628\u060c\u0627\u0628\u062a\u062f\u0627 \u0627\u06cc\u0646\u062c\u0627 \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f.",source:"@site/i18n/fa/docusaurus-plugin-content-docs/current/developers/1-api/4-Scenarios/2-exten_api.md",sourceDirName:"developers/1-api/4-Scenarios",slug:"/developers/api/Scenarios/exten_api",permalink:"/docs/developers/api/Scenarios/exten_api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"docs",previous:{title:"Smart API",permalink:"/docs/developers/api/Scenarios/smart_api"},next:{title:"\u062a\u0645\u0627\u0633 \u062f\u0648\u0637\u0631\u0641\u0647",permalink:"/docs/developers/api/Scenarios/call_originate"}},c={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"exten-api",children:"Exten API"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u062a\u0648\u0635\u06cc\u0647",type:"tip",children:(0,r.jsxs)(n.p,{children:["\u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0645\u06cc\u200c\u0634\u0648\u062f \u0642\u0628\u0644 \u0627\u0632 \u0645\u0637\u0627\u0644\u0639\u0647 \u0627\u06cc\u0646 \u0645\u0637\u0644\u0628\u060c\u0627\u0628\u062a\u062f\u0627 ",(0,r.jsx)(n.a,{href:"../SimotelWebhooks/DialplanApiComponents/exten_api",children:"\u0627\u06cc\u0646\u062c\u0627"})," \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f."]})}),"\n",(0,r.jsx)(n.p,{children:"\u0641\u0631\u0636 \u06a9\u0646\u06cc\u062f \u0646\u06cc\u0627\u0632 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u0632\u0645\u0627\u0646\u06cc \u06a9\u0647 \u0645\u0634\u062a\u0631\u06cc \u0628\u0627 \u0645\u062c\u0645\u0648\u0639\u0647 \u0634\u0645\u0627 \u062a\u0645\u0627\u0633 \u06af\u0631\u0641\u062a \u0627\u06af\u0631 \u0622\u0646 \u0645\u0634\u062a\u0631\u06cc \u0637\u06cc \u06f2\u06f4 \u0633\u0627\u0639\u062a \u06af\u0630\u0634\u062a\u0647 \u0628\u0627  \u0645\u062c\u0645\u0648\u0639\u0647 \u0634\u0645\u0627 \u062a\u0645\u0627\u0633 \u062f\u0627\u0634\u062a\u0647 \u0648 \u0628\u0627 \u06cc\u06a9\u06cc \u0627\u0632 \u06a9\u0627\u0631\u0645\u0646\u062f\u0627\u0646\r\n\u0645\u062c\u0645\u0648\u0639\u0647 \u062f\u0631 \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0648\u062f\u0647 \u0627\u0633\u062a \u062d\u0627\u0644 \u0646\u06cc\u0632 \u0633\u06cc\u0633\u062a\u0645 \u062a\u0645\u0627\u0633 \u062c\u0627\u0631\u06cc \u0645\u0634\u062a\u0631\u06cc \u0631\u0627 \u0628\u0647 \u0647\u0645\u0627\u0646 \u06a9\u0627\u0631\u0645\u0646\u062f \u0645\u062a\u0635\u0644 \u0628\u06a9\u0646\u062f \u0648 \u0645\u0633\u062a\u0642\u06cc\u0645\u0627 \u062a\u0644\u0641\u0646 \u0627\u0648 \u0632\u0646\u06af \u0628\u062e\u0648\u0631\u062f."}),"\n",(0,r.jsx)(n.p,{children:"\u0628\u0631\u0627\u06cc \u067e\u06cc\u0627\u062f\u0647 \u0633\u0627\u0632\u06cc \u0627\u06cc\u0646 \u0633\u0646\u0627\u0631\u06cc\u0648 \u06a9\u0627\u0641\u06cc\u0633\u062a \u0627\u0632 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a Exten API \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f\u060c\u0632\u0645\u0627\u0646\u06cc \u06a9\u0647 \u062a\u0645\u0627\u0633\u06cc \u0648\u0627\u0631\u062f \u0633\u06cc\u0633\u062a\u0645 \u0634\u062f \u0645\u0633\u062a\u0642\u06cc\u0645\u0627 \u0628\u0647 Exten API \u0645\u062a\u0635\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c \u062f\u0631 \u0627\u06cc\u0646\u062c\u0627\r\n\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062a\u0645\u0627\u0633 \u06af\u06cc\u0631\u0646\u062f\u0647 \u0628\u0647 \u0633\u0645\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0634\u0645\u0627 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u06a9\u0647 \u0634\u0627\u0645\u0644"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'{\r\n  "src": "09155441",\r\n  "dst": "31041000",\r\n  "data": "",\r\n  "unique_id": "",\r\n  "app_name": "Extension API"\r\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u062f\u0631 \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0634\u0645\u0627\u0631\u0647 \u0645\u0628\u062f\u0627\u0621 09155441  \u0628\u0627 \u0645\u062c\u0645\u0648\u0639\u0647 \u062a\u0645\u0627\u0633 \u06af\u0631\u0641\u062a\u0647 \u0627\u0633\u062a\u060c\u062d\u0627\u0644 \u0646\u06cc\u0627\u0632 \u0627\u0633\u062a \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a\u06cc \u0627\u0632 \u0631\u0648\u06cc\u062f\u0627\u062f",(0,r.jsx)(n.code,{children:"New State"})," \u0628\u0647 \u0627\u06cc\u0646 \u0646\u062a\u06cc\u062c\u0647\r\n\u0628\u0631\u0633\u06cc\u0645 \u06a9\u0647 \u0622\u06cc\u0627 \u0637\u06cc \u06f2\u06f4\u0633\u0627\u0639\u062a \u06af\u0630\u0634\u062a\u0647 \u062a\u0645\u0627\u0633\u06cc \u0627\u0632 \u0627\u06cc\u0646 \u0634\u0645\u0627\u0631\u0647 \u062a\u0648\u0633\u0637 \u062f\u0627\u062e\u0644\u06cc \u067e\u0627\u0633\u062e\u200c\u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u06cc\u0627 \u062e\u06cc\u0631\u060c\u0628\u0631\u0627\u06cc \u0645\u062b\u0627\u0644 \u062f\u0631 \u0627\u06cc\u0646 \u0633\u0646\u0627\u0631\u06cc\u0648 \u062f\u0627\u062e\u0644\u06cc 200 \u062f\u0631 \u0631\u0648\u0632 \u06af\u0630\u0634\u062a\u0647 \u0628\u0647 \u062a\u0645\u0627\u0633 \u0627\u06cc\u0646\r\n\u0634\u0645\u0627\u0631\u0647 \u067e\u0627\u0633\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a \u0628\u0646\u0627\u0628\u0631\u0627\u06cc\u0646 \u0646\u06cc\u0627\u0632 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u062f\u0631 \u062c\u0648\u0627\u0628 \u062e\u0631\u0648\u062c\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0628\u0647 \u0633\u0645\u062a Exten API \u0627\u0631\u0633\u0627\u0644 \u06a9\u0646\u062f."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'{\r\n  "ok": "1",\r\n  "extension": "200"\r\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u062a\u0645\u0627\u0633 \u0628\u0647 \u062f\u0627\u062e\u0644\u06cc 200 \u0645\u062a\u0635\u0644 \u0634\u062f\u0647 \u0648 \u062a\u0644\u0641\u0646 \u062f\u0627\u062e\u0644\u06cc 200 \u0634\u0631\u0648\u0639 \u0628\u0647 \u0632\u0646\u06af \u062e\u0648\u0631\u062f\u0646 \u0645\u06cc\u200c\u06a9\u0646\u062f\u060c \u0628\u0631\u0627\u06cc \u06a9\u0633\u0628 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0634\u062a\u0631 \u062f\u0631\u0645\u0648\u0631\u062f \u0631\u0648\u06cc\u062f\u0627\u062f ",(0,r.jsx)(n.code,{children:"New State"})," ",(0,r.jsx)(n.a,{href:"../SimotelWebhooks/Events/new_state",children:"\u0627\u06cc\u0646\u062c\u0627"})," \u0645\u0631\u0627\u062c\u0639\u0647 \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u0633\u0646\u0627\u0631\u06cc\u0648\u06cc \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u0634\u062f\u0647 \u062f\u0631 \u062f\u0627\u06cc\u0644\u200c\u067e\u0644\u0646"})}),"\n",(0,r.jsx)("a",{href:"https://dialplan.mysup.ir/live/plan/gmcnmdul9rpb79j7ufs8jlybn857qth81y0hi02m5rhfmbma2f",target:"_blank",children:(0,r.jsx)("img",{src:"https://dialplan.mysup.ir/live/thumb/gmcnmdul9rpb79j7ufs8jlybn857qth81y0hi02m5rhfmbma2f/plan.png"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(6540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);