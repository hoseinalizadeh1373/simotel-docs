"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[9112],{9313:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(4848),a=t(8453);const r={title:void 0},s="Introduction to Matching Patterns",l={id:"pbx/advance-settings/matchpattern",title:"Introduction to Matching Patterns",description:'This section is summarized based on the definition of matching patterns mentioned in the book "VoIP Training Reference with Asterisk Softswitch" by engineers Mojtaba Esfandiari and Mojtaba Najafi Moghadam. For more information, please refer to the original book.',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/pbx/4-advance-settings/3-matchpattern.md",sourceDirName:"pbx/4-advance-settings",slug:"/pbx/advance-settings/matchpattern",permalink:"/pbx/advance-settings/matchpattern",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"Docs",previous:{title:"Creating an AMI Account",permalink:"/pbx/advance-settings/create_ami_user"},next:{title:"Call Recording in Storage",permalink:"/pbx/advance-settings/call_record_storage"}},o={},d=[{value:"Writing Matching Patterns",id:"writing-matching-patterns",level:3},{value:"Examples for Matching Algorithm",id:"examples-for-matching-algorithm",level:3}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"introduction-to-matching-patterns",children:"Introduction to Matching Patterns"})}),"\n",(0,i.jsx)(n.p,{children:'This section is summarized based on the definition of matching patterns mentioned in the book "VoIP Training Reference with Asterisk Softswitch" by engineers Mojtaba Esfandiari and Mojtaba Najafi Moghadam. For more information, please refer to the original book.'}),"\n",(0,i.jsx)(n.p,{children:"The matching pattern in Simotel is implemented similarly to the Asterisk matching pattern, with the difference that, unlike Asterisk, there is no need to use the underscore (_) at the beginning of the pattern."}),"\n",(0,i.jsx)(n.p,{children:"Typically, matching patterns use letters and symbols, each having a specific meaning."}),"\n",(0,i.jsx)(n.admonition,{title:"Information",type:"info",children:(0,i.jsxs)(n.p,{children:["Matching patterns are used in components like ",(0,i.jsx)(n.strong,{children:"IVR"})," and ",(0,i.jsx)(n.strong,{children:"Outgoing Route"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"writing-matching-patterns",children:"Writing Matching Patterns"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"X"}),": This letter represents a digit between 0 and 9. In other words, if this letter appears in the matching pattern, it can be replaced by any digit from 0 to 9. For example, in the following pattern, any number between 0 and 9 will execute the command below."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"X\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Z"}),": This letter signifies replacing a digit between 1 and 9. For example, in the following pattern, any number from 1 to 9 will execute the command below."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"Z\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"N"}),": This letter indicates replacing a digit between 2 and 9. For example, in the following pattern, any number between 2 and 9 will execute the command below."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"N\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[a-b]"}),": Represents a number between a and b. For example, in the following pattern, any number between 5 and 8 will be matched."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"[5-8]\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"[abcd]"}),": One of the numbers specified inside the brackets, either a, b, c, or d. For example, in the following pattern, any of the numbers 3, 5, 6, or 8 will be matched."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"[3568]\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"(period)"}),": Represents repeating at least one and at most an infinite number of digits and letters. For example, the following pattern includes all numbers that have at least 2 digits and start with a digit between 0 and 9."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"X.\n"})}),"\n",(0,i.jsx)(n.p,{children:"In the above example, note that the pattern must include at least one digit and can have an infinite number of digits and letters. The symbol (.) signifies repeating at least one digit."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"(bang)!"}),": The exclamation mark represents repeating at least zero and at most an infinite number of digits and letters. For example, the following pattern includes all numbers that have at least 1 digit and start with a digit between 0 and 9."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"1!\n"})}),"\n",(0,i.jsx)(n.h3,{id:"examples-for-matching-algorithm",children:"Examples for Matching Algorithm"}),"\n",(0,i.jsx)(n.p,{children:"To clarify the concept, let\u2019s explain the matching patterns with more examples."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"ZXX\n"})}),"\n",(0,i.jsx)(n.p,{children:"Includes any 3-digit number between 100 and 999 (e.g., 256 or 459)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"9X.\n"})}),"\n",(0,i.jsx)(n.p,{children:"Includes any number with at least three digits where the first digit is between 0 and 9 (e.g., 911 or 90912 or 90939899)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"ZXXXXXX\n"})}),"\n",(0,i.jsx)(n.p,{children:"Includes any 7-digit number (e.g., 2228045 or 4228045 where the first digit is not 0)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"[2-5]6[02468].\n"})}),"\n",(0,i.jsx)(n.p,{children:"Includes any 4-digit number where the first digit is between 2, 3, 4, or 5, the second digit is 6, and the third digit is 0, 2, 4, 6, or 8 (e.g., 368 or 262 or 566)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"[0-9a-zA-Z].\n"})}),"\n",(0,i.jsx)(n.p,{children:"Includes any number with at least 2 digits where the first digit is between 0 to 9 or a to z or A to Z. The second digit can be any combination of the previous (letter or digit) (e.g., 0912117 or 0098912117 or z0912117 or aZ0912117 or 0Az912117)."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var i=t(6540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);