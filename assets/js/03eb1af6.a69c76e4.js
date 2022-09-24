"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5521],{876:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var i=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(t),u=a,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return t?i.createElement(k,p(p({ref:n},s),{},{components:t})):i.createElement(k,p({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,p=new Array(r);p[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var d=2;d<r;d++)p[d]=t[d];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9921:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(7896),a=(t(2784),t(876));const r={id:"ApplicationCommandBase",title:"Interface: ApplicationCommandBase",sidebar_label:"ApplicationCommandBase",sidebar_position:0,custom_edit_url:null},p=void 0,o={unversionedId:"api/interfaces/ApplicationCommandBase",id:"api/interfaces/ApplicationCommandBase",title:"Interface: ApplicationCommandBase",description:"Properties",source:"@site/docs/api/interfaces/ApplicationCommandBase.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ApplicationCommandBase",permalink:"/docs/api/interfaces/ApplicationCommandBase",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ApplicationCommandBase",title:"Interface: ApplicationCommandBase",sidebar_label:"ApplicationCommandBase",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Activity",permalink:"/docs/api/interfaces/Activity"},next:{title:"ApplicationCommandOption",permalink:"/docs/api/interfaces/ApplicationCommandOption"}},l={},d=[{value:"Properties",id:"properties",level:2},{value:"default_member_permissions",id:"default_member_permissions",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"default_permission",id:"default_permission",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"description",id:"description",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"options",id:"options",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-5",level:4}],s={toc:d};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"default_member_permissions"},"default","_","member","_","permissions"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"default","_","member","_","permissions"),": (",(0,a.kt)("inlineCode",{parentName:"p"},'"CREATE_INSTANT_INVITE"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"KICK_MEMBERS"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"BAN_MEMBERS"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"ADMINISTRATOR"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"MANAGE_CHANNELS"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"MANAGE_GUILDS"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"ADD_REACTIONS"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"VIEW_AUDIT_LOG"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"PRIORITY_SPEAKER"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"STREAM"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"VIEW_CHANNEL"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"SEND_MESSAGES"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"SEND_TTS_MESSAGES"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"MANAGE_MESSAGES"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"EMBED_LINKS"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"ATTACH_FILES"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"READ_MESSAGE_HISTORY"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"MENTION_EVERYONE"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"USE_EXTERNAL_EMOJIS"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"VIEW_GUILD_INSIGHTS"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"CONNECT"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"SPEAK"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"MUTE_MEMBERS"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"DEAFEN_MEMBERS"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"MOVE_MEMBERS"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"USE_VAD"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"CHANGE_NICKNAME"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"MANAGE_NICKNAMES"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"MANAGE_ROLES"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"MANAGE_WEBHOOKS"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"MANAGE_EMOJIS"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"USE_SLASH_COMMANDS"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"REQUEST_TO_SPEAK"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"MANAGE_THREADS"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"USE_PUBLIC_THREADS"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"USE_PRIVATE_THREADS"'),")[] ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/enums/Permissions"},(0,a.kt)("inlineCode",{parentName:"a"},"Permissions")),"[]"),(0,a.kt)("p",null,"Default permissions for the user to have if they want to use this command"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/ApplicationCommand.ts#L34"},"packages/libcord/src/structures/ApplicationCommand.ts:34")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"default_permission"},"default","_","permission"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"default","_","permission"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"if the command are enable when the app is add to a guild"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Deprecated"))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/ApplicationCommand.ts#L39"},"packages/libcord/src/structures/ApplicationCommand.ts:39")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"description"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"the description of the command"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/ApplicationCommand.ts#L22"},"packages/libcord/src/structures/ApplicationCommand.ts:22")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"the name of the command"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/ApplicationCommand.ts#L18"},"packages/libcord/src/structures/ApplicationCommand.ts:18")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"options"},"options"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"options"),": (",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/ApplicationCommandOption"},(0,a.kt)("inlineCode",{parentName:"a"},"ApplicationCommandOption"))," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/ApplicationCommandOptionWithSubCommand"},(0,a.kt)("inlineCode",{parentName:"a"},"ApplicationCommandOptionWithSubCommand")),")[]"),(0,a.kt)("p",null,"the options of the command"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/ApplicationCommand.ts#L28"},"packages/libcord/src/structures/ApplicationCommand.ts:28")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type"},"type"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"type"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/enums/ApplicationCommandType"},(0,a.kt)("inlineCode",{parentName:"a"},"ApplicationCommandType"))),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/ApplicationCommand.ts#L24"},"packages/libcord/src/structures/ApplicationCommand.ts:24")))}m.isMDXComponent=!0}}]);