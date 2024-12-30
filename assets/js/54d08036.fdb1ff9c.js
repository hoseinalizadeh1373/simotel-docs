"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[2135],{6216:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var r=s(4848),i=s(8453);const t={title:void 0},l="Trunks",o={id:"pbx/pbx-menu/pbx/trunks",title:"Trunks",description:"A trunk is a communication path between the city gateway lines, E1, SIP trunks, or another server through which calls enter and exit. In this section, you can view the existing trunks in the Call Center, as well as create, delete, or edit a trunk. Simotel supports three protocols for trunks: SIP, IAX2, and DAHDI.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/pbx/3- pbx-menu/3-pbx/2-trunks.md",sourceDirName:"pbx/3- pbx-menu/3-pbx",slug:"/pbx/pbx-menu/pbx/trunks",permalink:"/pbx/pbx-menu/pbx/trunks",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"Docs",previous:{title:"Users",permalink:"/pbx/pbx-menu/pbx/users"},next:{title:"Queues",permalink:"/pbx/pbx-menu/pbx/queues"}},h={},a=[{value:"SIP Trunk Parameters",id:"sip-trunk-parameters",level:2},{value:"IAX2 Trunk Parameters",id:"iax2-trunk-parameters",level:2},{value:"DAHDI Trunk Parameters",id:"dahdi-trunk-parameters",level:2}];function c(e){const n={admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"trunks",children:"Trunks"})}),"\n",(0,r.jsx)(n.p,{children:"A trunk is a communication path between the city gateway lines, E1, SIP trunks, or another server through which calls enter and exit. In this section, you can view the existing trunks in the Call Center, as well as create, delete, or edit a trunk. Simotel supports three protocols for trunks: SIP, IAX2, and DAHDI."}),"\n",(0,r.jsx)(n.h2,{id:"sip-trunk-parameters",children:"SIP Trunk Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Name"}),": The display name of the trunk."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Register String"}),": Used for registering specific trunks (e.g., if a sip-user from another center needs to connect to the server, this user must be registered with a specific algorithm so that both parties are aware of each other's status)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active"}),": Activate or deactivate the trunk."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Deny"}),": Create an access restriction from an IP range."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Permit"}),": Grant access only from a specific IP range."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Dtmf Mode"}),": Type of DTMF sent."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Can Re-Invite"}),': Enable direct communication from the internal origin to any destination without passing through the server (if set to "yes").']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Direct Media"}),': Exchange media (audio and video) without passing through the server (if set to "yes").']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Context"}),": The context of the trunk."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Host"}),": By default, this menu is dynamic, but since the trunk should only register from a specific IP, you should enter the destination IP here."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type"}),": Select the internal type based on output only (User), input only (Peer), or both input and output (Friend)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NAT"}),': (Refer to "VoIP with Asterisk Softswitch Guide").']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Port"}),": The communication port."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Qualify"}),': Check for connection status (qualify = yes|no). If "yes," the PBX sends a SIP OPTIONS command every 2 seconds to check if the device is still online. This feature can also be used to maintain a UDP session for a device behind a network address translation (NAT), and if nat=yes, the connection is checked behind NAT, and the connection is maintained.']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Insecure"}),": No authentication required."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"port"}),": Ignore the port number from which the request originated, allowing the peer to match the IP address without the need to match the port number."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"invite"}),": No authentication required for incoming invite."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"port&invite"}),": Both of the above are applied simultaneously."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Disallow"}),': The codecs entered here will be disabled, and if "all" is entered, all codecs will be disabled.']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Allow"}),": Allow codecs in order of priority (before allowing other codecs, use disallow = all)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"More Option"}),": If you want to use a parameter that is not listed above, enter it and its value here. If you need to add multiple parameters, each should be on a separate line."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Description of the trunk."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"iax2-trunk-parameters",children:"IAX2 Trunk Parameters"}),"\n",(0,r.jsx)(n.admonition,{title:"Information",type:"info",children:(0,r.jsx)(n.p,{children:"Most IAX2 parameters are similar to SIP."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Name"}),": The display name of the trunk."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Register String"}),": Used for registering specific trunks (e.g., if an IAX2 user from another center needs to connect to the server, this user must be registered with a specific algorithm so that both parties are aware of each other's status)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active"}),": Activate or deactivate the trunk."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Deny"}),": Create an access restriction from an IP range."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Permit"}),": Grant access only from a specific IP range."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DTMF Mode"}),": Type of DTMF sent."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Context"}),": The context of the trunk."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Host"}),": By default, this menu is dynamic, but if the trunk should only register from a specific IP, you should enter the destination IP here."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Type"}),": Select the internal type based on output only (User), input only (Peer), or both input and output (Friend)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Port"}),": The communication port."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Qualify"}),': Check for connection status (qualify = yes|no). If "yes," the PBX sends a SIP OPTIONS command every 2 seconds to check if the device is still online. This feature can also be used to maintain a UDP session for a device behind a network address translation (NAT), and if nat=yes, the connection is checked behind NAT, and the connection is maintained.']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Disallow"}),': The codecs entered here will be disabled, and if "all" is entered, all codecs will be disabled.']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Allow"}),": Allow codecs in order of priority (before allowing other codecs, use disallow = all)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Trunk"}),": This parameter has two values, Yes and No, and is set to Yes to save on network bandwidth."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Transfer"}),": This parameter is similar to the Can Re-Invite and Direct Media parameters in the SIP user definition. It determines whether media traffic streams are transferred directly between two users. It can have the following values:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Yes"}),": In this case, the server tries to directly transfer both signaling and media streams between two users. However, if transcoding is required, this will not happen."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"No"}),": In this case, the server routes both signaling and media streams between the two users."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Mediaonly"}),": In this case, the server only routes the signaling streams, and media streams are directly transferred between the two users."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"More Option"}),": If you want to use a parameter that is not listed above, enter it and its value here. If you need to add multiple parameters, each should be on a separate line."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Description of the trunk."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"dahdi-trunk-parameters",children:"DAHDI Trunk Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Name"}),": The trunk name."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Group"}),": This parameter is used for grouping channels and creating outbound calls. When grouping channels, you can specify algorithms to determine which channels should be used to keep call distribution between channels balanced. These rules also apply to PRI cards. Channel selection order is as follows:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"g"}),": Channel selection order is from lowest to highest (1, 2, 3, 4, 5). For example, the first port is used for the first number. If the first port is busy, the second port is selected. The important thing is that selecting the second port depends on the first port being occupied (billing will be higher for lower-numbered ports)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"G"}),': This is exactly like "g" except that channels are selected from highest to lowest (5, 4, 3, 2, 1) (billing will be higher for higher-numbered ports).']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"r"}),": Channel selection from lowest to highest, in a round-robin manner. New calls are made on a new port, and billing will be the same for all ports."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"R"}),": Channel selection from highest to lowest, in a round-robin manner. New calls are made on a new port, and billing will be the same for all ports."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Active"}),": Activate or deactivate the trunk."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Description"}),": Description of the trunk."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var r=s(6540);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);