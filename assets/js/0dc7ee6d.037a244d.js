"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[77814],{84151:(e,t,i)=>{i.d(t,{Z:()=>y});var r=i(67294),a=i(86010),n=i(39960),l=i(53438),s=i(13919),o=i(95999);const c={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var g=i(99603),d=i(21702),v=i(92949);function b(e){let{href:t,children:i}=e;return r.createElement(n.default,{href:t,className:(0,a.default)("card padding--lg",c.cardContainer)},i)}function p(e){let{href:t,icon:i,title:n,description:l}=e;return r.createElement(b,{href:t},r.createElement("h2",{className:(0,a.default)("text--truncate",c.cardTitle),title:n},i,n),l&&r.createElement("p",{className:c.cardDescription,title:l},l))}function m(e){let{item:t}=e;const i=(0,l.Wl)(t),{colorMode:a}=(0,v.I)();return i?r.createElement(p,{href:i,icon:r.createElement(g.G,{icon:d.cC_,style:{marginRight:"0.5em"},color:"dark"===a?"#7ecfee":"#0033a1"}),title:t.label,description:t.customProps?.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const{colorMode:i}=(0,v.I)(),a=(0,s.Z)(t.href)?r.createElement(g.G,{icon:d.FL8,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}):r.createElement(g.G,{icon:d.wlW,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}),n=(0,l.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:a,title:t.label,description:t.description??n?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(u,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},37894:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=i(87462),a=(i(67294),i(3905)),n=i(8065),l=i(53438);const s={id:"available-event-triggers",title:"Available Event Triggers",pagination_label:"Available Event Triggers",sidebar_label:"Available Event Triggers",sidebar_class_name:"availableEventTriggers",keywords:["event","trigger","available"],description:"Event triggers that are generally available.",sidebar_position:7,slug:"/extensibility/event-triggers/available",tags:["Event Triggers","Available Event Triggers"]},o=void 0,c={unversionedId:"extensibility/event-triggers/available/available-event-triggers",id:"extensibility/event-triggers/available/available-event-triggers",title:"Available Event Triggers",description:"Event triggers that are generally available.",source:"@site/docs/extensibility/event-triggers/available/index.mdx",sourceDirName:"extensibility/event-triggers/available",slug:"/extensibility/event-triggers/available",permalink:"/docs/extensibility/event-triggers/available",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/index.mdx",tags:[{label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/docs/tags/available-event-triggers"}],version:"current",lastUpdatedBy:"darrell-thobe-sp",lastUpdatedAt:1709674012,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:7,frontMatter:{id:"available-event-triggers",title:"Available Event Triggers",pagination_label:"Available Event Triggers",sidebar_label:"Available Event Triggers",sidebar_class_name:"availableEventTriggers",keywords:["event","trigger","available"],description:"Event triggers that are generally available.",sidebar_position:7,slug:"/extensibility/event-triggers/available",tags:["Event Triggers","Available Event Triggers"]},sidebar:"openApiSidebar",previous:{title:"Responding to Response Required Triggers",permalink:"/docs/extensibility/event-triggers/responding-request-response-trigger"},next:{title:"Access Request Decision",permalink:"/docs/extensibility/event-triggers/triggers/access-request-decision"}},g={},d=[],v={toc:d},b="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(b,(0,r.Z)({},v,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The event triggers in this section are generally available to all ISC tenants. Event triggers currently in development are considered ",(0,a.kt)("a",{parentName:"p",href:"/docs/extensibility/event-triggers/early-access"},"Early Access")," and require a support ticket to be enabled in a tenant."),(0,a.kt)(n.Z,{items:(0,l.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);