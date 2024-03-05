"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[45850],{84151:(e,t,i)=>{i.d(t,{Z:()=>E});var n=i(67294),r=i(86010),o=i(39960),c=i(53438),a=i(13919),s=i(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var d=i(99603),m=i(21702),p=i(92949);function u(e){let{href:t,children:i}=e;return n.createElement(o.default,{href:t,className:(0,r.default)("card padding--lg",l.cardContainer)},i)}function f(e){let{href:t,icon:i,title:o,description:c}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,r.default)("text--truncate",l.cardTitle),title:o},i,o),c&&n.createElement("p",{className:l.cardDescription,title:c},c))}function h(e){let{item:t}=e;const i=(0,c.Wl)(t),{colorMode:r}=(0,p.I)();return i?n.createElement(f,{href:i,icon:n.createElement(d.G,{icon:m.cC_,style:{marginRight:"0.5em"},color:"dark"===r?"#7ecfee":"#0033a1"}),title:t.label,description:t.customProps?.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const{colorMode:i}=(0,p.I)(),r=(0,a.Z)(t.href)?n.createElement(d.G,{icon:m.FL8,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}):n.createElement(d.G,{icon:m.wlW,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}),o=(0,c.xz)(t.docId??void 0);return n.createElement(f,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function E(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},72011:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=i(87462),r=(i(67294),i(3905)),o=i(8065),c=i(53438);const a={id:"entitlements",title:"Entitlements",description:"Entitlements",custom_edit_url:null},s=void 0,l={unversionedId:"api/iiq/entitlements",id:"api/iiq/entitlements",title:"Entitlements",description:"Entitlements",source:"@site/docs/api/iiq/entitlements.tag.mdx",sourceDirName:"api/iiq",slug:"/api/iiq/entitlements",permalink:"/docs/api/iiq/entitlements",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"entitlements",title:"Entitlements",description:"Entitlements",custom_edit_url:null},sidebar:"iiqSideBar",previous:{title:"This endpoint simulates provisioning a set of access items, and then checks against a set of policies to determine if granting the access items would cause creation of new policy violations.",permalink:"/docs/api/iiq/check-policy-violations"},next:{title:"Returns all Entitlement resources.",permalink:"/docs/api/iiq/get-entitlements"}},d={},m=[],p={toc:m},u="wrapper";function f(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);