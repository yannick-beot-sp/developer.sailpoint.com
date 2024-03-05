"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[4093],{84151:(e,t,i)=>{i.d(t,{Z:()=>I});var o=i(67294),a=i(86010),s=i(39960),r=i(53438),n=i(13919),c=i(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var d=i(99603),p=i(21702),u=i(92949);function m(e){let{href:t,children:i}=e;return o.createElement(s.default,{href:t,className:(0,a.default)("card padding--lg",l.cardContainer)},i)}function f(e){let{href:t,icon:i,title:s,description:r}=e;return o.createElement(m,{href:t},o.createElement("h2",{className:(0,a.default)("text--truncate",l.cardTitle),title:s},i,s),r&&o.createElement("p",{className:l.cardDescription,title:r},r))}function y(e){let{item:t}=e;const i=(0,r.Wl)(t),{colorMode:a}=(0,u.I)();return i?o.createElement(f,{href:i,icon:o.createElement(d.G,{icon:p.cC_,style:{marginRight:"0.5em"},color:"dark"===a?"#7ecfee":"#0033a1"}),title:t.label,description:t.customProps?.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const{colorMode:i}=(0,u.I)(),a=(0,n.Z)(t.href)?o.createElement(d.G,{icon:p.FL8,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}):o.createElement(d.G,{icon:p.wlW,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}),s=(0,r.xz)(t.docId??void 0);return o.createElement(f,{href:t.href,icon:a,title:t.label,description:t.description??s?.description})}function I(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(h,{item:t});case"category":return o.createElement(y,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},64316:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=i(87462),a=(i(67294),i(3905)),s=i(8065),r=i(53438);const n={id:"identity-security-cloud",title:"Identity Security Cloud API Specifications",pagination_label:"Identity Security Cloud API Specifications",sidebar_label:"Identity Security Cloud API Specifications",sidebar_position:1,sidebar_class_name:"iscSpecifications",keywords:["api","specifications"],description:"ISC API specifications.",slug:"/api",tags:["API Specifications"]},c=void 0,l={unversionedId:"api/identity-security-cloud",id:"api/identity-security-cloud",title:"Identity Security Cloud API Specifications",description:"ISC API specifications.",source:"@site/docs/api/identity-security-cloud.md",sourceDirName:"api",slug:"/api",permalink:"/docs/api",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/api/identity-security-cloud.md",tags:[{label:"API Specifications",permalink:"/docs/tags/api-specifications"}],version:"current",lastUpdatedBy:"darrell-thobe-sp",lastUpdatedAt:1709674012,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:1,frontMatter:{id:"identity-security-cloud",title:"Identity Security Cloud API Specifications",pagination_label:"Identity Security Cloud API Specifications",sidebar_label:"Identity Security Cloud API Specifications",sidebar_position:1,sidebar_class_name:"iscSpecifications",keywords:["api","specifications"],description:"ISC API specifications.",slug:"/api",tags:["API Specifications"]},sidebar:"openApiSidebar",previous:{title:"API Specifications",permalink:"/docs/api/api-specifications"},next:{title:"Getting Started",permalink:"/docs/api/getting-started"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Discuss",id:"discuss",level:2}],u={toc:p},m="wrapper";function f(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Identity Security Cloud (ISC) APIs provide developers with a way to interact with the ISC platform and extend it. Developers can leverage these APIs to customize their platform experiences and build new solutions and integrations that meet their needs. "),(0,a.kt)(s.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}),(0,a.kt)("h2",{id:"discuss"},"Discuss"),(0,a.kt)("p",null,"The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions. "),(0,a.kt)("p",null,"To learn more about the ISC APIs and discuss them with SailPoint Developer Community members, go to the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/discuss/tags/c/isc/6/apis"},"SailPoint Developer Community Forum"),"."))}f.isMDXComponent=!0}}]);