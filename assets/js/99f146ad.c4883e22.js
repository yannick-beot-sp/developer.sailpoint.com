"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[84106],{84151:(e,t,a)=>{a.d(t,{Z:()=>C});var r=a(67294),n=a(86010),i=a(39960),c=a(53438),s=a(13919),l=a(95999);const o={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var d=a(99603),u=a(21702),m=a(92949);function p(e){let{href:t,children:a}=e;return r.createElement(i.default,{href:t,className:(0,n.default)("card padding--lg",o.cardContainer)},a)}function g(e){let{href:t,icon:a,title:i,description:c}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,n.default)("text--truncate",o.cardTitle),title:i},a,i),c&&r.createElement("p",{className:o.cardDescription,title:c},c))}function f(e){let{item:t}=e;const a=(0,c.Wl)(t),{colorMode:n}=(0,m.I)();return a?r.createElement(g,{href:a,icon:r.createElement(d.G,{icon:u.cC_,style:{marginRight:"0.5em"},color:"dark"===n?"#7ecfee":"#0033a1"}),title:t.label,description:t.customProps?.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const{colorMode:a}=(0,m.I)(),n=(0,s.Z)(t.href)?r.createElement(d.G,{icon:u.FL8,style:{marginRight:"0.5em"},color:"dark"===a?"#7ecfee":"#0033a1"}):r.createElement(d.G,{icon:u.wlW,style:{marginRight:"0.5em"},color:"dark"===a?"#7ecfee":"#0033a1"}),i=(0,c.xz)(t.docId??void 0);return r.createElement(g,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function C(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(h,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},60557:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905)),i=a(8065),c=a(53438);const s={id:"managed-clusters",title:"Managed Clusters",description:"Managed Clusters",custom_edit_url:null},l=void 0,o={unversionedId:"api/beta/managed-clusters",id:"api/beta/managed-clusters",title:"Managed Clusters",description:"Managed Clusters",source:"@site/docs/api/beta/managed-clusters.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/managed-clusters",permalink:"/docs/api/beta/managed-clusters",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"managed-clusters",title:"Managed Clusters",description:"Managed Clusters",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Handle status request from client",permalink:"/docs/api/beta/update-managed-client-status"},next:{title:"Get a specified ManagedCluster.",permalink:"/docs/api/beta/get-managed-cluster"}},d={},u=[],m={toc:u},p="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Operations for accessing and managing client Clusters, including Log Configuration"),(0,n.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);