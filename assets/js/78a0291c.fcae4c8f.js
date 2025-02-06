"use strict";(self.webpackChunkuimotelndefined=self.webpackChunkuimotelndefined||[]).push([[3294],{653:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"pbx/advance-settings/simotelhelper_tool","title":"simotelhelper Tool","description":"simotelhelper is a command-line tool for managing and maintaining Call Center services. It plays a crucial role in troubleshooting processes and is often one of the first tools used for system diagnostics.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/pbx/4-advance-settings/5-simotelhelper_tool.md","sourceDirName":"pbx/4-advance-settings","slug":"/pbx/advance-settings/simotelhelper_tool","permalink":"/pbx/advance-settings/simotelhelper_tool","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"Docs","previous":{"title":"Simotel Update","permalink":"/pbx/advance-settings/simotelupdate"},"next":{"title":"Settings for simotel.ini","permalink":"/pbx/advance-settings/simotel.ini"}}');var t=n(4848),o=n(8453);const i={title:void 0},r="simotelhelper Tool",a={},d=[{value:"simotelhelper help",id:"simotelhelper-help",level:2},{value:"simotelhelper check",id:"simotelhelper-check",level:2},{value:"simotelhelper db",id:"simotelhelper-db",level:2},{value:"simotelhelper db help",id:"simotelhelper-db-help",level:3},{value:"simotelhelper db backup",id:"simotelhelper-db-backup",level:3},{value:"simotelhelper db connect",id:"simotelhelper-db-connect",level:3},{value:"simotelhelper db repair",id:"simotelhelper-db-repair",level:3},{value:"simotelhelper db restore",id:"simotelhelper-db-restore",level:3},{value:"simotelhelper db start",id:"simotelhelper-db-start",level:3},{value:"simotelhelper db status",id:"simotelhelper-db-status",level:3},{value:"simotelhelper db stop",id:"simotelhelper-db-stop",level:3},{value:"simotelhelper iptables",id:"simotelhelper-iptables",level:2},{value:"simotelhelper patch",id:"simotelhelper-patch",level:3},{value:"simotelhelper serial",id:"simotelhelper-serial",level:2},{value:"simotelhelper serverstatus",id:"simotelhelper-serverstatus",level:2},{value:"simotelhelper timezone",id:"simotelhelper-timezone",level:2},{value:"simotelhelper update",id:"simotelhelper-update",level:2},{value:"simotelhelper version",id:"simotelhelper-version",level:2}];function h(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"simotelhelper-tool",children:"simotelhelper Tool"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"simotelhelper"})," is a command-line tool for managing and maintaining Call Center services. It plays a crucial role in troubleshooting processes and is often one of the first tools used for system diagnostics."]}),"\n",(0,t.jsx)(s.admonition,{title:"Information",type:"info",children:(0,t.jsx)(s.p,{children:"simotelhelper is a command-line tool, and you need shell access to the Linux server to use it."})}),"\n",(0,t.jsx)(s.admonition,{title:"Warning",type:"caution",children:(0,t.jsx)(s.p,{children:"It is recommended not to use this tool until you have a clear understanding of how the Call Center and its core services operate."})}),"\n",(0,t.jsx)(s.p,{children:"Below are the commands related to this tool, explained in detail."}),"\n",(0,t.jsx)(s.h2,{id:"simotelhelper-help",children:"simotelhelper help"}),"\n",(0,t.jsx)(s.p,{children:"This command outputs a guide of available commands."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Sample Output:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'root@simotel:~# simotelhelper help\nSimotel Helper\n\nUsage:\n  simotelhelper [flags]\n  simotelhelper [command]\n\nAvailable Commands:\n  check        check simotel tools and server\n  db           do something on database\n  help         Help about any command\n  initiate     initiate simotel\n  iptables     manage iptables\n  patch        patch\n  reinstall    doing update\n  scmid        show scmid\n  serial       show serial\n  serverstatus Server status\n  timezone     change server timezone\n  update       doing update\n  version      show simotel helper version\n\nFlags:\n  -h, --help          help for simotelhelper\n      --host string   Address of server (default "update.mysup.ir")\n      --port int      Port of server (default 4994)\n\nUse "simotelhelper [command] --help" for more information about a command.\n'})}),"\n",(0,t.jsx)(s.h2,{id:"simotelhelper-check",children:"simotelhelper check"}),"\n",(0,t.jsx)(s.p,{children:"This command checks the status of vital server services and provides a report."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Sample Output:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"root@simotel:~# simotelhelper check\n\nSimotel version : 6.2.22\nsimotelhelper version : 23\n\nSimotel package p38: 1\nSound PR: 8\nPBX configs version: 8\n\nSimotel: NOT RUNNING\nSimotelagi: RUNNING\nsimotelhelper: RUNNING\nMongodb: RUNNING\nRedis: RUNNING\nPBX: RUNNING\n"})}),"\n",(0,t.jsx)(s.p,{children:"As shown, the output includes information about the installed Simotel version, the simotelhelper version, sound file versions, and the status of Call Center services."}),"\n",(0,t.jsx)(s.h2,{id:"simotelhelper-db",children:"simotelhelper db"}),"\n",(0,t.jsx)(s.p,{children:"This command performs database-related tasks. The arguments related to this command are explained below."}),"\n",(0,t.jsx)(s.h3,{id:"simotelhelper-db-help",children:"simotelhelper db help"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'root@simotel:~# simotelhelper db help\ndo something on database\n\nUsage:\n  simotelhelper db [command]\n\nAvailable Commands:\n  backup      backup database by some strategies\n  connect     connect to mongodb cli\n  repair      repair database\n  restore     restore backup files to database\n  start       start database\n  status      show database status\n  stop        stop database\n\nFlags:\n  -h, --help   help for db\n\nGlobal Flags:\n      --host string   Address of server (default "update.mysup.ir")\n      --port int      Port of server (default 4994)\n\nUse "simotelhelper db [command] --help" for more information about a command.\nsubcommand is required\n'})}),"\n",(0,t.jsx)(s.p,{children:"The output provides a guide to the commands related to database management."}),"\n",(0,t.jsx)(s.h3,{id:"simotelhelper-db-backup",children:"simotelhelper db backup"}),"\n",(0,t.jsxs)(s.p,{children:["This command is responsible for creating backup files of the database. To see the types of backup strategies, use the command ",(0,t.jsx)(s.strong,{children:"simotelhelper db backup show"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Output of simotelhelper db backup show:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"root@simotel:~# simotelhelper db backup show\n\nstrategies     description\nall             backup full database (simotel and autodialer)\nall-no-reports  backup all simotel data expect reports\ncustom          selective backup\ndashboard       backup dashboards\ndialer          backup autodialer without reports\ndialer-report   backup autodialer reports\ndialer-sounds   backup autodialer sounds (announcements)\npbx             backup pbx entities, burst calls, voice mails and dial plan editor\nreports         backup cdr, cdr of queues, queue logs and poll\nsettings        backup setting\nsound           backup simotel sounds (announcements)\nvoice-mail      backup simotel voice mails with sounds (db format)\nweb-members     backup web accounts and account types\n"})}),"\n",(0,t.jsx)(s.p,{children:"This section displays various backup strategies, and by writing the name of the strategy before the command, the system will start backing up."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Output of simotelhelper db backup pbx:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"root@simotel:~# simotelhelper db backup pbx\nDEBUG 2021-06-23T12:03:04.454+0430      writing Simotel.dialplan_editor_history to archive '/var/spool/simotel/backup/cli/Simotel-pbx-20210623-1203.gz.creating'\n...\nDEBUG backup completed, successfully. /var/spool/simotel/backup/cli/Simotel-pbx-20210623-1203.gz\n"})}),"\n",(0,t.jsxs)(s.p,{children:["By entering this command, the system begins backing up the contents of the ",(0,t.jsx)(s.strong,{children:"pbx"})," section, and the backup file path is displayed (useful for restoring backups)."]}),"\n",(0,t.jsx)(s.h3,{id:"simotelhelper-db-connect",children:"simotelhelper db connect"}),"\n",(0,t.jsx)(s.p,{children:"This command allows direct connection to the MongoDB shell."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Output of simotelhelper db connect:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"root@simotel:~# simotelhelper db connect\nMongoDB shell version v4.4.0\nconnecting to: mongodb://127.0.0.1:27017/admin?compressors=disabled&gssapiServiceName=mongodb\n...\nWelcome to the MongoDB shell.\n"})}),"\n",(0,t.jsx)(s.admonition,{title:"Warning",type:"caution",children:(0,t.jsx)(s.p,{children:"If you are not familiar with designing and working with MongoDB databases, it is strongly advised not to use this command or make changes at the database level."})}),"\n",(0,t.jsx)(s.h3,{id:"simotelhelper-db-repair",children:"simotelhelper db repair"}),"\n",(0,t.jsx)(s.p,{children:"If there is an issue with the database's performance, this command can be used to resolve the problem."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Output of simotelhelper db repair:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'root@simotel:~# simotelhelper db repair\n---------------------------------\nSuccessfully stop mongodb\n---------------------------------\nDo you want to make a copy of "db" before repairing to "/usr/src/mongodb/dbdata/db-back-repair/" ? [y/n]\ny\n...\n{"t":{"$date":"2021-06-23T12:22:58.472+04:30"},"s":"I",  "c":"CONTROL",  "id":23138,   "ctx":"initandlisten","msg":"Shutting down","attr":{"exitCode":0}}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"simotelhelper-db-restore",children:"simotelhelper db restore"}),"\n",(0,t.jsx)(s.p,{children:"This command is responsible for restoring backups of the Call Center. It requires the backup file path as an input parameter."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Output of simotelhelper db restore BackupPath:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"root@simotel:~# simotelhelper db restore /var/spool/simotel/backup/cli/Simotel-pbx-20210623-1203.gz\n\nDrop collections of database before restore? [Y/n] ?\ny\nDEBUG 2021-06-23T12:29:44.190+0430      preparing collections to restore from\n...\nDEBUG 2021-06-23T12:29:44.685+0430      112 document(s) restored successfully. 0 document(s) failed to restore.\n"})}),"\n",(0,t.jsx)(s.h3,{id:"simotelhelper-db-start",children:"simotelhelper db start"}),"\n",(0,t.jsx)(s.p,{children:"This command starts the database."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Output of simotelhelper db start:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"root@simotel:~# simotelhelper db start\n---------------------------------\nSuccessfully start mongodb\n---------------------------------\nabout to fork child process, waiting until server is ready for connections.\n...\n"})}),"\n",(0,t.jsx)(s.h3,{id:"simotelhelper-db-status",children:"simotelhelper db status"}),"\n",(0,t.jsx)(s.p,{children:"This command displays the status of the database."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Output of simotelhelper db status:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"root@simotel:~# simotelhelper db status\n---------------------------------\nMongodb status: Running\n---------------------------------\n"})}),"\n",(0,t.jsx)(s.h3,{id:"simotelhelper-db-stop",children:"simotelhelper db stop"}),"\n",(0,t.jsx)(s.p,{children:"This command stops the database."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Output of simotelhelper db stop:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"root@simotel:~# simotelhelper db stop\n---------------------------------\nSuccessfully stop mongodb\n---------------------------------\n"})}),"\n",(0,t.jsx)(s.h2,{id:"simotelhelper-iptables",children:"simotelhelper iptables"}),"\n",(0,t.jsx)(s.p,{children:"This command manages iptables configurations."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Output of simotelhelper iptables --help:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'root@simotel:~# simotelhelper iptables --help\nmanage iptables\n\nUsage:\n  simotelhelper iptables [command]\n\nAvailable Commands:\n  apply       apply last iptables configuration\n  boot        manage iptables booting\n  export      export iptables\n  flush       flush(stop) iptables\n  import      import iptables\n  panel       manage iptables panel view\n\nFlags:\n  -h, --help   help for iptables\n\nGlobal Flags:\n      --host string   Address of server (default "update.mysup.ir")\n      --port int      Port of server (default 4994)\n\nUse "simotelhelper iptables [command] --help" for more information about a command.\n'})}),"\n",(0,t.jsx)(s.h3,{id:"simotelhelper-patch",children:"simotelhelper patch"}),"\n",(0,t.jsx)(s.p,{children:"This command manages patches provided for the Call Center."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Output of simotelhelper patch:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"root@simotel:~# simotelhelper patch\nchecking for new patches update\n4 update available for you.\navailable patches are:\n...\nChoose patch id:\n"})}),"\n",(0,t.jsx)(s.p,{children:"By entering the ID corresponding to each row, the latest patch for the system can be installed."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Output of simotelhelper patch more:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"root@simotel:~# simotelhelper patch more\navailable categories are:\n...\nChoose category id:\n"})}),"\n",(0,t.jsx)(s.p,{children:"This command provides a category of patches available for the Call Center version."}),"\n",(0,t.jsx)(s.h2,{id:"simotelhelper-serial",children:"simotelhelper serial"}),"\n",(0,t.jsx)(s.p,{children:"This command outputs the serial number assigned to the Call Center."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"root@simotel:~# simotelhelper serial\n5lWGi2aOHI7Kc9pOPFoLqh3MxhW8PkaMQK\n"})}),"\n",(0,t.jsx)(s.h2,{id:"simotelhelper-serverstatus",children:"simotelhelper serverstatus"}),"\n",(0,t.jsx)(s.p,{children:"This command provides information about the server and installed services."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Output of simotelhelper serverstatus:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'root@simotel:~# simotelhelper serverstatus\n{\n        "Host": {\n                "platform": "debian",\n                "platformVersion": "10.6",\n                "kernelVersion": "4.19.0-11-amd64",\n                ...\n        },\n        "Version": {\n                "Simotel": "6.2.22",\n                "SimotelEdition": "gold",\n                "Helper": "23"\n        },\n        ...\n}\n'})}),"\n",(0,t.jsx)(s.h2,{id:"simotelhelper-timezone",children:"simotelhelper timezone"}),"\n",(0,t.jsx)(s.p,{children:"This command manages the server's timezone."}),"\n",(0,t.jsx)(s.h2,{id:"simotelhelper-update",children:"simotelhelper update"}),"\n",(0,t.jsx)(s.p,{children:"This command installs new updates available for the system."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Output of simotelhelper update:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:'root@simotel:~# simotelhelper update\ndoing update\n\nUsage:\n  simotelhelper update [command]\n\nAvailable Commands:\n  check       check for new updates\n  dialer      update simotel dialer\n  helper      update simotel helper\n  simotel     update simotel simotel\n\nFlags:\n  -h, --help   help for update\n\nGlobal Flags:\n      --host string   Address of server (default "update.mysup.ir")\n      --port int      Port of server (default 4994)\n\nUse "simotelhelper update [command] --help" for more information about a command.\nsubcommand is required\n'})}),"\n",(0,t.jsx)(s.p,{children:"At this stage, one of the options must be selected to check for updates."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Output of simotelhelper update check:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"root@simotel:~# simotelhelper update check\nsimotel: up to date\nhelper: up to date\n"})}),"\n",(0,t.jsx)(s.h2,{id:"simotelhelper-version",children:"simotelhelper version"}),"\n",(0,t.jsx)(s.p,{children:"This command shows the version of simotelhelper installed on the server."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Output of simotelhelper version:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"root@simotel:~# simotelhelper version\nsimotelhelper version is 23\n"})})]})}function p(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>r});var l=n(6540);const t={},o=l.createContext(t);function i(e){const s=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(o.Provider,{value:s},e.children)}}}]);