"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[106],{7923:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(4848),r=t(8453);const s={sidebar_label:"\u0633\u0646\u0627\u0631\u06cc\u0648 Exten API"},o="Exten API",a={id:"developers/api/Scenarios/exten_api",title:"exten_api",description:"\u0633\u0646\u0627\u0631\u06cc\u0648 Exten API | \u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0633\u06cc\u0645\u0648\u062a\u0644",source:"@site/i18n/fa/docusaurus-plugin-content-docs/current/developers/1-api/4-Scenarios/2-exten_api.md",sourceDirName:"developers/1-api/4-Scenarios",slug:"/developers/api/Scenarios/exten_api",permalink:"/fa/docs/developers/api/Scenarios/exten_api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"\u0633\u0646\u0627\u0631\u06cc\u0648 Exten API"},sidebar:"docs",previous:{title:"\u0633\u0646\u0627\u0631\u06cc\u0648 Smart API",permalink:"/fa/docs/developers/api/Scenarios/smart_api"},next:{title:"\u0633\u0646\u0627\u0631\u06cc\u0648 \u062a\u0645\u0627\u0633 \u062f\u0648 \u0637\u0631\u0641\u0647",permalink:"/fa/docs/developers/api/Scenarios/call_originate"}},c={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{children:(0,i.jsx)("title",{children:"\u0633\u0646\u0627\u0631\u06cc\u0648 Exten API | \u0645\u0633\u062a\u0646\u062f\u0627\u062a \u0633\u06cc\u0645\u0648\u062a\u0644"})}),"\n",(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"exten-api",children:"Exten API"})}),"\n",(0,i.jsx)(n.admonition,{title:"\u062a\u0648\u0635\u06cc\u0647",type:"tip",children:(0,i.jsxs)(n.p,{children:["\u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0645\u06cc\u200c\u0634\u0648\u062f \u0642\u0628\u0644 \u0627\u0632 \u0645\u0637\u0627\u0644\u0639\u0647 \u0627\u06cc\u0646 \u0645\u0637\u0644\u0628\u060c\u0627\u0628\u062a\u062f\u0627 ",(0,i.jsx)(n.a,{href:"../SimotelWebhooks/DialplanApiComponents/exten_api",children:"\u0627\u06cc\u0646\u062c\u0627"})," \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f."]})}),"\n",(0,i.jsx)(n.p,{children:"\u0641\u0631\u0636 \u06a9\u0646\u06cc\u062f \u0646\u06cc\u0627\u0632 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u0632\u0645\u0627\u0646\u06cc \u06a9\u0647 \u0645\u0634\u062a\u0631\u06cc \u0628\u0627 \u0645\u062c\u0645\u0648\u0639\u0647 \u0634\u0645\u0627 \u062a\u0645\u0627\u0633 \u06af\u0631\u0641\u062a \u0627\u06af\u0631 \u0622\u0646 \u0645\u0634\u062a\u0631\u06cc \u0637\u06cc \u06f2\u06f4 \u0633\u0627\u0639\u062a \u06af\u0630\u0634\u062a\u0647 \u0628\u0627  \u0645\u062c\u0645\u0648\u0639\u0647 \u0634\u0645\u0627 \u062a\u0645\u0627\u0633 \u062f\u0627\u0634\u062a\u0647 \u0648 \u0628\u0627 \u06cc\u06a9\u06cc \u0627\u0632 \u06a9\u0627\u0631\u0645\u0646\u062f\u0627\u0646\n\u0645\u062c\u0645\u0648\u0639\u0647 \u062f\u0631 \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0648\u062f\u0647 \u0627\u0633\u062a \u062d\u0627\u0644 \u0646\u06cc\u0632 \u0633\u06cc\u0633\u062a\u0645 \u062a\u0645\u0627\u0633 \u062c\u0627\u0631\u06cc \u0645\u0634\u062a\u0631\u06cc \u0631\u0627 \u0628\u0647 \u0647\u0645\u0627\u0646 \u06a9\u0627\u0631\u0645\u0646\u062f \u0645\u062a\u0635\u0644 \u0628\u06a9\u0646\u062f \u0648 \u0645\u0633\u062a\u0642\u06cc\u0645\u0627 \u062a\u0644\u0641\u0646 \u0627\u0648 \u0632\u0646\u06af \u0628\u062e\u0648\u0631\u062f."}),"\n",(0,i.jsx)(n.p,{children:"\u0628\u0631\u0627\u06cc \u067e\u06cc\u0627\u062f\u0647 \u0633\u0627\u0632\u06cc \u0627\u06cc\u0646 \u0633\u0646\u0627\u0631\u06cc\u0648 \u06a9\u0627\u0641\u06cc\u0633\u062a \u0627\u0632 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a Exten API \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f\u060c\u0632\u0645\u0627\u0646\u06cc \u06a9\u0647 \u062a\u0645\u0627\u0633\u06cc \u0648\u0627\u0631\u062f \u0633\u06cc\u0633\u062a\u0645 \u0634\u062f \u0645\u0633\u062a\u0642\u06cc\u0645\u0627 \u0628\u0647 Exten API \u0645\u062a\u0635\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c \u062f\u0631 \u0627\u06cc\u0646\u062c\u0627\n\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062a\u0645\u0627\u0633 \u06af\u06cc\u0631\u0646\u062f\u0647 \u0628\u0647 \u0633\u0645\u062a \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u0634\u0645\u0627 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u06a9\u0647 \u0634\u0627\u0645\u0644"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'{\n  "src": "09155441",\n  "dst": "31041000",\n  "data": "",\n  "unique_id": "",\n  "app_name": "Extension API"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u062f\u0631 \u0627\u06cc\u0646 \u0645\u062b\u0627\u0644 \u0634\u0645\u0627\u0631\u0647 \u0645\u0628\u062f\u0627\u0621 09155441  \u0628\u0627 \u0645\u062c\u0645\u0648\u0639\u0647 \u062a\u0645\u0627\u0633 \u06af\u0631\u0641\u062a\u0647 \u0627\u0633\u062a\u060c\u062d\u0627\u0644 \u0646\u06cc\u0627\u0632 \u0627\u0633\u062a \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a\u06cc \u0627\u0632 \u0631\u0648\u06cc\u062f\u0627\u062f",(0,i.jsx)(n.code,{children:"New State"})," \u0628\u0647 \u0627\u06cc\u0646 \u0646\u062a\u06cc\u062c\u0647\n\u0628\u0631\u0633\u06cc\u0645 \u06a9\u0647 \u0622\u06cc\u0627 \u0637\u06cc \u06f2\u06f4\u0633\u0627\u0639\u062a \u06af\u0630\u0634\u062a\u0647 \u062a\u0645\u0627\u0633\u06cc \u0627\u0632 \u0627\u06cc\u0646 \u0634\u0645\u0627\u0631\u0647 \u062a\u0648\u0633\u0637 \u062f\u0627\u062e\u0644\u06cc \u067e\u0627\u0633\u062e\u200c\u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u06cc\u0627 \u062e\u06cc\u0631\u060c\u0628\u0631\u0627\u06cc \u0645\u062b\u0627\u0644 \u062f\u0631 \u0627\u06cc\u0646 \u0633\u0646\u0627\u0631\u06cc\u0648 \u062f\u0627\u062e\u0644\u06cc 200 \u062f\u0631 \u0631\u0648\u0632 \u06af\u0630\u0634\u062a\u0647 \u0628\u0647 \u062a\u0645\u0627\u0633 \u0627\u06cc\u0646\n\u0634\u0645\u0627\u0631\u0647 \u067e\u0627\u0633\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a \u0628\u0646\u0627\u0628\u0631\u0627\u06cc\u0646 \u0646\u06cc\u0627\u0632 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u062f\u0631 \u062c\u0648\u0627\u0628 \u062e\u0631\u0648\u062c\u06cc \u0632\u06cc\u0631 \u0631\u0627 \u0628\u0647 \u0633\u0645\u062a Exten API \u0627\u0631\u0633\u0627\u0644 \u06a9\u0646\u062f."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'{\n  "ok": "1",\n  "extension": "200"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u062f\u0631 \u0627\u06cc\u0646 \u0645\u0631\u062d\u0644\u0647 \u062a\u0645\u0627\u0633 \u0628\u0647 \u062f\u0627\u062e\u0644\u06cc 200 \u0645\u062a\u0635\u0644 \u0634\u062f\u0647 \u0648 \u062a\u0644\u0641\u0646 \u062f\u0627\u062e\u0644\u06cc 200 \u0634\u0631\u0648\u0639 \u0628\u0647 \u0632\u0646\u06af \u062e\u0648\u0631\u062f\u0646 \u0645\u06cc\u200c\u06a9\u0646\u062f\u060c \u0628\u0631\u0627\u06cc \u06a9\u0633\u0628 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0634\u062a\u0631 \u062f\u0631\u0645\u0648\u0631\u062f \u0631\u0648\u06cc\u062f\u0627\u062f ",(0,i.jsx)(n.code,{children:"New State"})," ",(0,i.jsx)(n.a,{href:"../SimotelWebhooks/Events/new_state",children:"\u0627\u06cc\u0646\u062c\u0627"})," \u0645\u0631\u0627\u062c\u0639\u0647 \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u0633\u0646\u0627\u0631\u06cc\u0648\u06cc \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u0634\u062f\u0647 \u062f\u0631 \u062f\u0627\u06cc\u0644\u200c\u067e\u0644\u0646"})}),"\n",(0,i.jsx)("a",{href:"https://dialplan.mysup.ir/live/plan/gmcnmdul9rpb79j7ufs8jlybn857qth81y0hi02m5rhfmbma2f",target:"_blank",children:(0,i.jsx)("img",{src:"https://dialplan.mysup.ir/live/thumb/gmcnmdul9rpb79j7ufs8jlybn857qth81y0hi02m5rhfmbma2f/plan.png"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);