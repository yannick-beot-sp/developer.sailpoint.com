"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[38126],{84151:(e,t,i)=>{i.d(t,{Z:()=>g});var o=i(67294),n=i(86010),r=i(39960),c=i(53438),a=i(13919),l=i(95999);const s={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var d=i(99603),p=i(21702),m=i(92949);function u(e){let{href:t,children:i}=e;return o.createElement(r.default,{href:t,className:(0,n.default)("card padding--lg",s.cardContainer)},i)}function f(e){let{href:t,icon:i,title:r,description:c}=e;return o.createElement(u,{href:t},o.createElement("h2",{className:(0,n.default)("text--truncate",s.cardTitle),title:r},i,r),c&&o.createElement("p",{className:s.cardDescription,title:c},c))}function y(e){let{item:t}=e;const i=(0,c.Wl)(t),{colorMode:n}=(0,m.I)();return i?o.createElement(f,{href:i,icon:o.createElement(d.G,{icon:p.cC_,style:{marginRight:"0.5em"},color:"dark"===n?"#7ecfee":"#0033a1"}),title:t.label,description:t.customProps?.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const{colorMode:i}=(0,m.I)(),n=(0,a.Z)(t.href)?o.createElement(d.G,{icon:p.FL8,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}):o.createElement(d.G,{icon:p.wlW,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}),r=(0,c.xz)(t.docId??void 0);return o.createElement(f,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(h,{item:t});case"category":return o.createElement(y,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},14285:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=i(87462),n=(i(67294),i(3905)),r=i(8065),c=i(53438);const a={id:"policy-violations",title:"PolicyViolations",description:"PolicyViolations",custom_edit_url:null},l=void 0,s={unversionedId:"api/iiq/policy-violations",id:"api/iiq/policy-violations",title:"PolicyViolations",description:"PolicyViolations",source:"@site/docs/api/iiq/policy-violations.tag.mdx",sourceDirName:"api/iiq",slug:"/api/iiq/policy-violations",permalink:"/docs/api/iiq/policy-violations",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"policy-violations",title:"PolicyViolations",description:"PolicyViolations",custom_edit_url:null},sidebar:"iiqSideBar",previous:{title:"Returns an ObjectConfig resource based on its name or id.",permalink:"/docs/api/iiq/get-object-config-by-id"},next:{title:"Returns all PolicyViolation resources.",permalink:"/docs/api/iiq/get-policy-violations"}},d={},p=[],m={toc:p},u="wrapper";function f(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(r.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);