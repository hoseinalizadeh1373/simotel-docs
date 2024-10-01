"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[5295],{502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=t(4848),r=t(8453);const a={},i="\u0627\u06cc\u062c\u0627\u062f \u062d\u0633\u0627\u0628 AMI",c={id:"simotel/advance-settings/create_ami_user",title:"\u0627\u06cc\u062c\u0627\u062f \u062d\u0633\u0627\u0628 AMI",description:"\u0628\u0631\u0627\u06cc \u0627\u06cc\u062c\u0627\u062f \u062f\u0633\u062a\u0631\u0633\u06cc AMI \u062f\u0631 \u0645\u0631\u06a9\u0632\u062a\u0645\u0627\u0633 \u0633\u06cc\u0645\u0648\u062a\u0644 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u062f\u0633\u062a\u0631\u0633\u06cc shell \u0644\u06cc\u0646\u0648\u06a9\u0633 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f.\u062f\u0631 \u0627\u0628\u062a\u062f\u0627 \u0641\u0627\u06cc\u0644 \u0632\u06cc\u0631 \u0631\u0627 \u0628\u0627 \u0648\u06cc\u0631\u0627\u06cc\u0634\u06af\u0631 \u0645\u062a\u0646 nano \u0628\u0627\u0632 \u06a9\u0646\u06cc\u062f",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/simotel/4-advance-settings/4-create_ami_user.md",sourceDirName:"simotel/4-advance-settings",slug:"/simotel/advance-settings/create_ami_user",permalink:"/en/docs/simotel/advance-settings/create_ami_user",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"Docs",previous:{title:"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a simotel.ini",permalink:"/en/docs/simotel/advance-settings/simotel.ini"},next:{title:"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0627\u0644\u06af\u0648\u200c\u0647\u0627\u06cc \u062a\u0637\u0627\u0628\u0642",permalink:"/en/docs/simotel/advance-settings/matchpattern"}},o={},l=[];function d(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u0627\u06cc\u062c\u0627\u062f-\u062d\u0633\u0627\u0628-ami",children:"\u0627\u06cc\u062c\u0627\u062f \u062d\u0633\u0627\u0628 AMI"})}),"\n",(0,s.jsx)(n.p,{children:"\u0628\u0631\u0627\u06cc \u0627\u06cc\u062c\u0627\u062f \u062f\u0633\u062a\u0631\u0633\u06cc AMI \u062f\u0631 \u0645\u0631\u06a9\u0632\u062a\u0645\u0627\u0633 \u0633\u06cc\u0645\u0648\u062a\u0644 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u062f\u0633\u062a\u0631\u0633\u06cc shell \u0644\u06cc\u0646\u0648\u06a9\u0633 \u0645\u06cc\u200c\u0628\u0627\u0634\u062f.\u062f\u0631 \u0627\u0628\u062a\u062f\u0627 \u0641\u0627\u06cc\u0644 \u0632\u06cc\u0631 \u0631\u0627 \u0628\u0627 \u0648\u06cc\u0631\u0627\u06cc\u0634\u06af\u0631 \u0645\u062a\u0646 nano \u0628\u0627\u0632 \u06a9\u0646\u06cc\u062f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\nroot@simotel:~# nano /etc/asterisk/manager.conf\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u062f\u0631 \u0627\u0646\u062a\u0647\u0627\u06cc \u0641\u0627\u06cc\u0644 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u062d\u0633\u0627\u0628\u200c\u06a9\u0627\u0631\u0628\u0631\u06cc \u0648 \u0631\u0645\u0632\u0639\u0628\u0648\u0631 \u062e\u0648\u062f \u0631\u0627 \u0645\u0637\u0627\u0628\u0642 \u0628\u0627 \u0627\u0644\u06af\u0648\u06cc \u067e\u0627\u06cc\u06cc\u0646 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\n[ami_user_test] \u0646\u0627\u0645 \u062d\u0633\u0627\u0628\u200c \u06a9\u0627\u0631\u0628\u0631\u06cc\nsecret = testpassword \u0631\u0645\u0632\u0639\u0628\u0648\u0631 \u062d\u0633\u0627\u0628 \u200c\u06a9\u0627\u0631\u0628\u0631\u06cc\ndeny = 0.0.0.0/0.0.0.0\npermit = 127.0.0.1/255.255.255.255   \u0645\u062c\u0627\u0632 \u0628\u0647 \u062f\u0633\u062a\u0631\u0633\u06cc ip \nread = call,user,agent,cdr   \u062f\u0633\u062a\u0631\u0633\u06cc\u200c\u0647\u0627\u06cc \u062e\u0648\u0627\u0646\u062f\u0646 \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc\nwrite = system,call,agent,originate   \u062f\u0633\u062a\u0631\u0633\u06cc\u200c\u0647\u0627\u06cc \u0646\u0648\u0634\u062a\u0646 \u062d\u0633\u0627\u0628\u200c \u06a9\u0627\u0631\u0628\u0631\u06cc\n\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u062f\u0631 \u0646\u0638\u0631 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u062f \u0628\u0631\u0627\u06cc \u062e\u0648\u0627\u0646\u062f\u0646 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0648 \u06cc\u0627 \u0627\u06cc\u062c\u0627\u062f \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0631 \u0633\u06cc\u0633\u062a\u0645 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 AMI \u0628\u0627\u06cc\u062f \u062d\u0633\u0627\u0628\u200c\u06a9\u0627\u0631\u0628\u0631\u06cc \u0633\u0637\u062d \u062f\u0633\u062a\u0631\u0633\u06cc \u0645\u0631\u0628\u0648\u0637\u0647 \u0631\u0627 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f.\u062f\u0631 \u067e\u0627\u06cc\u06cc\u0646 \u0644\u06cc\u0633\u062a\u06cc \u06a9\u0627\u0645\u0644 \u0627\u0632 \u0633\u0637\u0648\u062d \u062f\u0633\u062a\u0631\u0633\u06cc\u200c \u0642\u0631\u0627\u0631 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\nread = system,call,log,verbose,agent,user,config,dtmf,reporting,cdr,dialplan\nwrite = system,call,agent,user,config,command,reporting,originate,message\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u062f\u0631 \u0646\u0647\u0627\u06cc\u062a \u0646\u06cc\u0632 \u0628\u0627 \u062f\u0633\u062a\u0648\u0631 \u0632\u06cc\u0631 \u0633\u0631\u0648\u06cc\u0633 \u0627\u0633\u062a\u0631\u06cc\u0633\u06a9 \u0631\u0627 \u0631\u06cc\u0633\u062a \u06a9\u0631\u062f\u0647 \u0648 \u062d\u0633\u0627\u0628\u200c\u06a9\u0627\u0631\u0628\u0631\u06cc \u0641\u0639\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c\u0628\u0627 \u0631\u06cc\u0633\u062a \u0627\u0633\u062a\u0631\u06cc\u0633\u06a9 \u062a\u0645\u0627\u0633\u200c\u0647\u0627\u06cc \u062c\u0627\u0631\u06cc \u0645\u0631\u06a9\u0632\u062a\u0645\u0627\u0633 \u0642\u0637\u0639 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\nroot@simotel:~# service asterisk restart\n\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(6540);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);