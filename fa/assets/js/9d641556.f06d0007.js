"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[6237],{170:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=s(4848),t=s(8453);const r={sidebar_label:"\u0633\u0646\u0627\u0631\u06cc\u0648 Smart API",title:"\u0633\u0646\u0627\u0631\u06cc\u0648 Smart API"},i="Smart API",o={id:"developers/Scenarios/smart_api",title:"\u0633\u0646\u0627\u0631\u06cc\u0648 Smart API",description:"\u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0645\u06cc\u200c\u0634\u0648\u062f \u0642\u0628\u0644 \u0627\u0632 \u0645\u0637\u0627\u0644\u0639\u0647 \u0627\u06cc\u0646 \u0645\u0637\u0644\u0628\u060c \u0627\u0628\u062a\u062f\u0627 \u0627\u06cc\u0646\u062c\u0627  \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f.",source:"@site/i18n/fa/docusaurus-plugin-content-docs/current/developers/4-Scenarios/1-smart_api.md",sourceDirName:"developers/4-Scenarios",slug:"/developers/Scenarios/smart_api",permalink:"/fa/developers/Scenarios/smart_api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"\u0633\u0646\u0627\u0631\u06cc\u0648 Smart API",title:"\u0633\u0646\u0627\u0631\u06cc\u0648 Smart API"},sidebar:"docs",previous:{title:"\u0645\u0639\u0631\u0641\u06cc Smart API",permalink:"/fa/developers/SimotelWebhooks/DialplanApiComponents/smart_api"},next:{title:"\u0633\u0646\u0627\u0631\u06cc\u0648 Exten API",permalink:"/fa/developers/Scenarios/exten_api"}},l={},c=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"smart-api",children:"Smart API"})}),"\n",(0,a.jsx)(n.admonition,{title:"\u062a\u0648\u0635\u06cc\u0647",type:"tip",children:(0,a.jsxs)(n.p,{children:["\u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0645\u06cc\u200c\u0634\u0648\u062f \u0642\u0628\u0644 \u0627\u0632 \u0645\u0637\u0627\u0644\u0639\u0647 \u0627\u06cc\u0646 \u0645\u0637\u0644\u0628\u060c \u0627\u0628\u062a\u062f\u0627 ",(0,a.jsx)(n.a,{href:"../SimotelWebhooks/DialplanApiComponents/smart_api",children:"\u0627\u06cc\u0646\u062c\u0627"}),"  \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f."]})}),"\n",(0,a.jsx)(n.p,{children:"\u0633\u0646\u0627\u0631\u064a\u0648: \u0641\u0631\u0636 \u0643\u0646\u064a\u062f \u0643\u0647 \u0642\u0631\u0627\u0631 \u0627\u0633\u062a \u0639\u062f\u062f\u06cc \u0627\u0632 \u0643\u0627\u0631\u0628\u0631 \u062f\u0631\u064a\u0627\u0641\u062a \u0646\u0645\u0627\u064a\u064a\u062f. \u0648 \u0642\u0635\u062f \u062f\u0627\u0631\u06cc\u062f \u062f\u0631\u0635\u0648\u0631\u062a\u06cc \u200c\u200c\u0643\u0647 \u0639\u062f\u062f \u0648\u0627\u0631\u062f \u0634\u062f\u0647 \u06f1 \u0628\u0627\u0634\u062f\u060c \u062a\u0645\u0627\u0633 \u0631\u0627 \u0628\u0647 \u0645\u0633\u064a\u0631 A \u0648 \u062f\u0631\u0635\u0648\u0631\u062a\u06cc \u200c\u200c\u0643\u0647 \u06f2 \u0628\u0627\u0634\u062f\u060c\n\u0628\u0647 \u0645\u0633\u064a\u0631 B \u0647\u062f\u0627\u064a\u062a \u0643\u0646\u064a\u062f."}),"\n",(0,a.jsx)(n.p,{children:"\u0628\u0631\u0627\u06cc \u067e\u06cc\u0627\u062f\u0647\u200c\u200c\u0633\u0627\u0632\u06cc \u0633\u0646\u0627\u0631\u06cc\u0648\u06cc \u0628\u0627\u0644\u0627 \u0628\u0647 \u062f\u0648 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a SmartApi \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u06cc\u062f. \u0646\u0627\u0645 \u0627\u0648\u0644\u06cc \u0631\u0627 s1 \u0648 \u062f\u0648\u0645\u06cc \u0631\u0627 s2 \u0628\u06af\u0630\u0627\u0631\u06cc\u062f. \u062f\u0631 \u0642\u0633\u0645\u062a Api address \u0627\u0632 \u0647\u0631 \u062f\u0648 \u0643\u0627\u0645\u067e\u0648\u0646\u0646\u062a\u060c\n\u0622\u062f\u0631\u0633 \u0648\u0628\u200c \u0633\u0631\u0648\u06cc\u0633 \u0631\u0627 \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u064a\u064a\u062f. \u062f\u0631 \u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0627\u0648\u0644 \u06cc\u06a9 \u0645\u0633\u06cc\u0631 \u0627\u06cc\u062c\u0627\u062f \u06a9\u0646\u06cc\u062f \u0648 \u0634\u0646\u0627\u0633\u0647 \u0622\u0646 (case) \u0631\u0627 \u0639\u0628\u0627\u0631\u062a go-s2 \u062a\u0639\u0631\u06cc\u0641 \u0648 \u062e\u0631\u0648\u062c\u06cc \u0622\u0646 \u0631\u0627 \u0628\u0647 \u0643\u0627\u0645\u067e\u0648\u0646\u0646\u062a s2 \u0645\u062a\u0635\u0644\n\u06a9\u0646\u06cc\u062f. \u062f\u0631 \u0643\u0627\u0645\u067e\u0648\u0646\u0646\u062a s2 \u0646\u064a\u0632 \u062f\u0648 \u0645\u0633\u064a\u0631 \u0628\u0627 \u0634\u0646\u0627\u0633\u0647\u200c\u200c\u0647\u0627\u06cc go-a \u0648 go-b \u0628\u06af\u0630\u0627\u0631\u064a\u062f \u0648 \u0622\u0646\u200c\u0647\u0627 \u0631\u0627 \u0628\u0647 \u0645\u0633\u064a\u0631\u0647\u0627\u06cc A(\u0635\u0641 \u0641\u0631\u0648\u0634) \u0648 B(\u0635\u0641 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc) \u0643\u0647 \u062f\u0631 \u0635\u0648\u0631\u062a \u0633\u0646\u0627\u0631\u064a\u0648 \u0630\u0643\u0631 \u0634\u062f\u0647\u200c\u0627\u0646\u062f \u0645\u062a\u0635\u0644 \u0646\u0645\u0627\u064a\u064a\u062f."}),"\n",(0,a.jsx)(n.p,{children:"\u0628\u0631\u0627\u06cc \u0645\u0634\u0627\u0647\u062f\u0647 \u0633\u0646\u0627\u0631\u06cc\u0648 \u0628\u0631\u0631\u0648\u06cc \u0639\u06a9\u0633 \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f."}),"\n",(0,a.jsx)("a",{href:"https://dialplan.mysup.ir/live/plan/fdckb8z6kula9q4o3jyug872z3otnhgmdco6w0gzawg7cte78a",target:"_blank",children:(0,a.jsx)("img",{src:"https://dialplan.mysup.ir/live/thumb/fdckb8z6kula9q4o3jyug872z3otnhgmdco6w0gzawg7cte78a/plan.png"})}),"\n",(0,a.jsx)(n.p,{children:"\u0627\u0643\u0646\u0648\u0646 \u0641\u0631\u0636 \u0643\u0646\u064a\u062f \u062a\u0645\u0627\u0633\u06cc \u0648\u0627\u0631\u062f \u0643\u0627\u0645\u067e\u0648\u0646\u0646\u062a s1 \u0634\u062f\u0647 \u0627\u0633\u062a.\u0648\u0628\u200c \u0633\u0631\u0648\u06cc\u0633 \u0628\u0627 \u0645\u0642\u0627\u062f\u064a\u0631 \u0632\u064a\u0631 \u0641\u0631\u0627\u062e\u0648\u0627\u0646\u06cc \u0645\u06cc\u200c\u0634\u0648\u062f"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'{\n  "src": "09155441",\n  "dst": "789",\n  "app_name": "s1",\n  "data": ""\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u0648\u0628\u200c \u0633\u0631\u0648\u06cc\u0633 \u062f\u0631 \u062c\u0648\u0627\u0628 \u062e\u0648\u0627\u0633\u062a\u0627\u0631 \u0627\u062c\u0631\u0627\u06cc \u062a\u0648\u0627\u0628\u0639 \u0632\u06cc\u0631 \u0648 \u062f\u0631\u06cc\u0627\u0641\u062a \u062f\u0627\u062f\u0647 \u0627\u0632 \u06a9\u0627\u0631\u0628\u0631\u200c \u0645\u06cc\u200c\u0634\u0648\u062f."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'{\n  "ok": "1",\n  "commands": "PlayAnnouncement(\'welcome-file\');GetData(\'enter-data-file\', 10, 1);Exit(\'go-s2\')"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u0628\u0627 \u0627\u062c\u0631\u0627\u06cc \u062f\u0633\u062a\u0648\u0631\u0627\u062a \u0641\u0648\u0642\u060c \u0646\u062e\u0633\u062a \u0641\u0627\u064a\u0644 \u0635\u0648\u062a\u06cc \u062e\u0648\u0634\u200c\u0622\u0645\u062f\u06af\u0648\u064a\u06cc \u067e\u062e\u0634 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c \u0633\u067e\u0633 \u0627\u0632 \u0643\u0627\u0631\u0628\u0631 \u062e\u0648\u0627\u0633\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u0643\u0647 \u0639\u062f\u062f\u06cc \u0631\u0627 \u0648\u0627\u0631\u062f \u0643\u0646\u062f \u0648 \u067e\u0633 \u0627\u0632 \u0622\u0646 \u062a\u0645\u0627\u0633 \u0627\u0632 \u0645\u0633\u064a\u0631 go-s2\n\u0628\u0647 \u0633\u0645\u062a \u0643\u0627\u0645\u067e\u0648\u0646\u0646\u062a s2 \u0645\u0646\u062a\u0642\u0644 \u0645\u06cc\u200c\u06af\u0631\u062f\u062f."}),"\n",(0,a.jsx)(n.p,{children:"\u062f\u0631 \u0643\u0627\u0645\u067e\u0648\u0646\u0646\u062a s2\u060c \u062f\u0631\u062e\u0648\u0627\u0633\u062a\u06cc \u0645\u0634\u0627\u0628\u0647 s2 \u0628\u0647 \u0633\u0645\u062a \u0633\u0631\u0648\u0631 \u0641\u0631\u0633\u062a\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c \u0627\u0645\u0627 \u0628\u0627 \u062f\u0648 \u062a\u0641\u0627\u0648\u062a \u0627\u0635\u0644\u06cc: \u0627\u0648\u0644 \u0646\u0627\u0645 \u0643\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0639\u0648\u0636 \u0645\u06cc\u200c\u0634\u0648\u062f \u062a\u0627 \u0648\u0628\u200c\u0633\u0631\u0648\u06cc\u0633 \u062a\u0641\u0627\u0648\u062a \u0645\u0646\u0628\u0639 \u062f\u0631\u062e\u0648\u0627\u0633\u062a\u200c\u062f\u0647\u0646\u062f\u0647\n\u0631\u0627 \u0645\u062a\u0648\u062c\u0647 \u0634\u0648\u062f \u0648 \u062f\u0648\u0645\u060c \u062f\u0627\u062f\u0647 data \u062d\u0627\u0648\u06cc \u0647\u0645\u0627\u0646 \u0645\u0642\u062f\u0627\u0631\u06cc \u0627\u0633\u062a \u0643\u0647 \u0643\u0627\u0631\u0628\u0631 \u062f\u0631 \u0645\u0631\u062d\u0644\u0647 \u0642\u0628\u0644 \u0648\u0627\u0631\u062f \u0643\u0631\u062f\u0647 \u0627\u0633\u062a."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'{\n  "src": "09155441",\n  "dst": "789",\n  "app_name": "s2",\n  "data": "2"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u0648\u0628\u200c \u0633\u0631\u0648\u06cc\u0633 \u0643\u0647 \u0639\u062f\u062f \u0648\u0627\u0631\u062f\u0634\u062f\u0647 \u0643\u0627\u0631\u0628\u0631 \u0631\u0627 \u062f\u0631 \u062c\u0648\u0627\u0628 \u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0631\u062f\u0647\u060c \u0645\u0633\u064a\u0631 \u0645\u0646\u0627\u0633\u0628 \u0628\u0631\u0627\u06cc \u062e\u0631\u0648\u062c \u0648\u06cc \u0631\u0627 \u0645\u0634\u062e\u0635 \u0645\u064a\u200c\u0643\u0646\u062f."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'{\n  "ok": "1",\n  "commands": "Exit(\'go-b\');"\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var a=s(6540);const t={},r=a.createContext(t);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);