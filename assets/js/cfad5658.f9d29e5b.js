"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[60260],{84151:(e,t,n)=>{n.d(t,{Z:()=>b});var i=n(67294),r=n(86010),a=n(39960),o=n(53438),c=n(13919),d=n(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var s=n(99603),m=n(21702),u=n(92949);function p(e){let{href:t,children:n}=e;return i.createElement(a.default,{href:t,className:(0,r.default)("card padding--lg",l.cardContainer)},n)}function g(e){let{href:t,icon:n,title:a,description:o}=e;return i.createElement(p,{href:t},i.createElement("h2",{className:(0,r.default)("text--truncate",l.cardTitle),title:a},n,a),o&&i.createElement("p",{className:l.cardDescription,title:o},o))}function f(e){let{item:t}=e;const n=(0,o.Wl)(t),{colorMode:r}=(0,u.I)();return n?i.createElement(g,{href:n,icon:i.createElement(s.G,{icon:m.cC_,style:{marginRight:"0.5em"},color:"dark"===r?"#7ecfee":"#0033a1"}),title:t.label,description:t.customProps?.description??(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const{colorMode:n}=(0,u.I)(),r=(0,c.Z)(t.href)?i.createElement(s.G,{icon:m.FL8,style:{marginRight:"0.5em"},color:"dark"===n?"#7ecfee":"#0033a1"}):i.createElement(s.G,{icon:m.wlW,style:{marginRight:"0.5em"},color:"dark"===n?"#7ecfee":"#0033a1"}),a=(0,o.xz)(t.docId??void 0);return i.createElement(g,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(h,{item:t});case"category":return i.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},58557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var i=n(87462),r=(n(67294),n(3905)),a=n(8065),o=n(53438);const c={id:"branding",title:"Branding",description:"Branding",custom_edit_url:null},d=void 0,l={unversionedId:"api/v3/branding",id:"api/v3/branding",title:"Branding",description:"Branding",source:"@site/docs/api/v3/branding.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/branding",permalink:"/docs/api/v3/branding",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"branding",title:"Branding",description:"Branding",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Auth User Update",permalink:"/docs/api/v3/patch-auth-user"},next:{title:"List of branding items",permalink:"/docs/api/v3/get-branding-list"}},s={},m=[],u={toc:m},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this API to implement and customize branding functionality.\nWith this functionality in place, administrators can get list of existing branding items, create new branding and configure them for use throughout IdentityNow.\nIt allows to customise color of navigation bar, action buttons, logo and emailFromAddress."),(0,r.kt)(a.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);