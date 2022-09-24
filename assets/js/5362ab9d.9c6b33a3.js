"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[649],{876:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>k});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),h=p(n),k=r,u=h["".concat(d,".").concat(k)]||h[k]||c[k]||i;return n?a.createElement(u,l(l({ref:t},o),{},{components:n})):a.createElement(u,l({ref:t},o))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7896),r=(n(2784),n(876));const i={id:"TextChannel",title:"Class: TextChannel",sidebar_label:"TextChannel",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"api/classes/TextChannel",id:"api/classes/TextChannel",title:"Class: TextChannel",description:"Hierarchy",source:"@site/docs/api/classes/TextChannel.md",sourceDirName:"api/classes",slug:"/api/classes/TextChannel",permalink:"/docs/api/classes/TextChannel",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"TextChannel",title:"Class: TextChannel",sidebar_label:"TextChannel",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"StageChannel",permalink:"/docs/api/classes/StageChannel"},next:{title:"Thread",permalink:"/docs/api/classes/Thread"}},d={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"client",id:"client",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"guild",id:"guild",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"id",id:"id",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"lastMessageId",id:"lastmessageid",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"messages",id:"messages",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"nsfw",id:"nsfw",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"parentId",id:"parentid",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"permissionOverwrites",id:"permissionoverwrites",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"position",id:"position",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"rateLimitPerUser",id:"ratelimitperuser",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"threads",id:"threads",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"topic",id:"topic",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"type",id:"type",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"Accessors",id:"accessors",level:2},{value:"mention",id:"mention",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"Methods",id:"methods",level:2},{value:"createMessage",id:"createmessage",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"edit",id:"edit",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"send",id:"send",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-19",level:4}],o={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel"},(0,r.kt)("inlineCode",{parentName:"a"},"GuildChannel"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TextChannel"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/NewsChannel"},(0,r.kt)("inlineCode",{parentName:"a"},"NewsChannel"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new TextChannel"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"client"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"client")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/classes/Client"},(0,r.kt)("inlineCode",{parentName:"a"},"Client")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"APITextChannel"))))),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel"},"GuildChannel"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel#constructor"},"constructor")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/channels/TextChannel.ts#L25"},"packages/libcord/src/structures/channels/TextChannel.ts:25")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"client"},"client"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"client"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Client"},(0,r.kt)("inlineCode",{parentName:"a"},"Client"))),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel"},"GuildChannel"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel#client"},"client")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/Base.ts#L8"},"packages/libcord/src/structures/Base.ts:8")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"guild"},"guild"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"guild"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Guild"},(0,r.kt)("inlineCode",{parentName:"a"},"Guild"))),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel"},"GuildChannel"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel#guild"},"guild")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/channels/GuildChannel.ts#L14"},"packages/libcord/src/structures/channels/GuildChannel.ts:14")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"id"},"id"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel"},"GuildChannel"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel#id"},"id")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/channels/Channel.ts#L8"},"packages/libcord/src/structures/channels/Channel.ts:8")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"lastmessageid"},"lastMessageId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"lastMessageId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/channels/TextChannel.ts#L21"},"packages/libcord/src/structures/channels/TextChannel.ts:21")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"messages"},"messages"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"messages"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Collection"},(0,r.kt)("inlineCode",{parentName:"a"},"Collection")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Message"},(0,r.kt)("inlineCode",{parentName:"a"},"Message")),">"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/channels/TextChannel.ts#L22"},"packages/libcord/src/structures/channels/TextChannel.ts:22")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel"},"GuildChannel"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel#name"},"name")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/channels/GuildChannel.ts#L13"},"packages/libcord/src/structures/channels/GuildChannel.ts:13")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"nsfw"},"nsfw"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"nsfw"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel"},"GuildChannel"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel#nsfw"},"nsfw")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/channels/GuildChannel.ts#L15"},"packages/libcord/src/structures/channels/GuildChannel.ts:15")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"parentid"},"parentId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"parentId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel"},"GuildChannel"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel#parentid"},"parentId")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/channels/GuildChannel.ts#L17"},"packages/libcord/src/structures/channels/GuildChannel.ts:17")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"permissionoverwrites"},"permissionOverwrites"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"permissionOverwrites"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/PermissionOverwrite"},(0,r.kt)("inlineCode",{parentName:"a"},"PermissionOverwrite")),"[] = ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")),(0,r.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel"},"GuildChannel"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel#permissionoverwrites"},"permissionOverwrites")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/channels/GuildChannel.ts#L18"},"packages/libcord/src/structures/channels/GuildChannel.ts:18")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"position"},"position"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"position"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel"},"GuildChannel"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel#position"},"position")),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/channels/GuildChannel.ts#L16"},"packages/libcord/src/structures/channels/GuildChannel.ts:16")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ratelimitperuser"},"rateLimitPerUser"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"rateLimitPerUser"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/channels/TextChannel.ts#L20"},"packages/libcord/src/structures/channels/TextChannel.ts:20")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"threads"},"threads"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"threads"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"default")),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/channels/TextChannel.ts#L23"},"packages/libcord/src/structures/channels/TextChannel.ts:23")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"topic"},"topic"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"topic"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/channels/TextChannel.ts#L19"},"packages/libcord/src/structures/channels/TextChannel.ts:19")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"type"},"type"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"type"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/enums/ChannelTypes#text"},(0,r.kt)("inlineCode",{parentName:"a"},"Text"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/enums/ChannelTypes#news"},(0,r.kt)("inlineCode",{parentName:"a"},"News"))),(0,r.kt)("h4",{id:"overrides-1"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel"},"GuildChannel"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel#type"},"type")),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/channels/TextChannel.ts#L18"},"packages/libcord/src/structures/channels/TextChannel.ts:18")),(0,r.kt)("h2",{id:"accessors"},"Accessors"),(0,r.kt)("h3",{id:"mention"},"mention"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"mention"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,r.kt)("p",null,"GuildChannel.mention"),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/channels/Channel.ts#L19"},"packages/libcord/src/structures/channels/Channel.ts:19")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"createmessage"},"createMessage"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"createMessage"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"content"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Message"},(0,r.kt)("inlineCode",{parentName:"a"},"Message")),">"),(0,r.kt)("p",null,"Sends a message in a text channel"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"content")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/classes/Embed"},(0,r.kt)("inlineCode",{parentName:"a"},"Embed"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/interfaces/MessageOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageOptions"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"the content to send can be an embed, object or string")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Message"},(0,r.kt)("inlineCode",{parentName:"a"},"Message")),">"),(0,r.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/channels/TextChannel.ts#L57"},"packages/libcord/src/structures/channels/TextChannel.ts:57")),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"createMessage"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"msg"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Message"},(0,r.kt)("inlineCode",{parentName:"a"},"Message")),">"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"msg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/classes/Embed"},(0,r.kt)("inlineCode",{parentName:"a"},"Embed"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/interfaces/MessageOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageOptions")))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Message"},(0,r.kt)("inlineCode",{parentName:"a"},"Message")),">"),(0,r.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/channels/TextChannel.ts#L60"},"packages/libcord/src/structures/channels/TextChannel.ts:60")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"edit"},"edit"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"edit"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/VoiceChannel"},(0,r.kt)("inlineCode",{parentName:"a"},"VoiceChannel"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel"},(0,r.kt)("inlineCode",{parentName:"a"},"GuildChannel"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/TextChannel"},(0,r.kt)("inlineCode",{parentName:"a"},"TextChannel"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/CategoryChannel"},(0,r.kt)("inlineCode",{parentName:"a"},"CategoryChannel")),">"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/interfaces/ChannelEditOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"ChannelEditOptions")))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/VoiceChannel"},(0,r.kt)("inlineCode",{parentName:"a"},"VoiceChannel"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel"},(0,r.kt)("inlineCode",{parentName:"a"},"GuildChannel"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/TextChannel"},(0,r.kt)("inlineCode",{parentName:"a"},"TextChannel"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/CategoryChannel"},(0,r.kt)("inlineCode",{parentName:"a"},"CategoryChannel")),">"),(0,r.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel"},"GuildChannel"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/GuildChannel#edit"},"edit")),(0,r.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/channels/GuildChannel.ts#L71"},"packages/libcord/src/structures/channels/GuildChannel.ts:71")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"send"},"send"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"send"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"content"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Message"},(0,r.kt)("inlineCode",{parentName:"a"},"Message")),">"),(0,r.kt)("p",null,"Sends a message in a text channel"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Deprecated"))),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"content")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/classes/Embed"},(0,r.kt)("inlineCode",{parentName:"a"},"Embed"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/interfaces/MessageOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageOptions"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"the content to send can be an embed, object or string")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/Message"},(0,r.kt)("inlineCode",{parentName:"a"},"Message")),">"),(0,r.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Libcord/libcord/blob/7f25db4/packages/libcord/src/structures/channels/TextChannel.ts#L49"},"packages/libcord/src/structures/channels/TextChannel.ts:49")))}c.isMDXComponent=!0}}]);