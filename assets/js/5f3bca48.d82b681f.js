"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[86088],{84151:(e,t,i)=>{i.d(t,{Z:()=>g});var n=i(67294),r=i(86010),c=i(39960),a=i(53438),o=i(13919),s=i(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var d=i(99603),p=i(21702),u=i(92949);function m(e){let{href:t,children:i}=e;return n.createElement(c.default,{href:t,className:(0,r.default)("card padding--lg",l.cardContainer)},i)}function h(e){let{href:t,icon:i,title:c,description:a}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,r.default)("text--truncate",l.cardTitle),title:c},i,c),a&&n.createElement("p",{className:l.cardDescription,title:a},a))}function f(e){let{item:t}=e;const i=(0,a.Wl)(t),{colorMode:r}=(0,u.I)();return i?n.createElement(h,{href:i,icon:n.createElement(d.G,{icon:p.cC_,style:{marginRight:"0.5em"},color:"dark"===r?"#7ecfee":"#0033a1"}),title:t.label,description:t.customProps?.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){let{item:t}=e;const{colorMode:i}=(0,u.I)(),r=(0,o.Z)(t.href)?n.createElement(d.G,{icon:p.FL8,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}):n.createElement(d.G,{icon:p.wlW,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}),c=(0,a.xz)(t.docId??void 0);return n.createElement(h,{href:t.href,icon:r,title:t.label,description:t.description??c?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(b,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},33883:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=i(87462),r=(i(67294),i(3905)),c=i(8065),a=i(53438);const o={id:"public-identities",title:"Public Identities",description:"Public Identities",custom_edit_url:null},s=void 0,l={unversionedId:"api/v3/public-identities",id:"api/v3/public-identities",title:"Public Identities",description:"Public Identities",source:"@site/docs/api/v3/public-identities.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/public-identities",permalink:"/docs/api/v3/public-identities",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"public-identities",title:"Public Identities",description:"Public Identities",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Delete Personal Access Token",permalink:"/docs/api/v3/delete-personal-access-token"},next:{title:"Get a list of public identities",permalink:"/docs/api/v3/get-public-identities"}},d={},p=[],u={toc:p},m="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this API in conjunction with ",(0,r.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/api/v3/public-identities-config"},"Public Identites Config")," to enable non-administrators to view identities' publicly visible attributes.\nWith this functionality in place, non-administrators can view identity attributes other than the default attributes (email, lifecycle state, and manager), depending on which identity attributes their organization administrators have made public.\nThis can be helpful for access approvers, certification reviewers, managers viewing their direct reports' access, and source owners viewing their tasks."),(0,r.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);