"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[21457],{84151:(e,t,o)=>{o.d(t,{Z:()=>k});var r=o(67294),i=o(86010),n=o(39960),a=o(53438),c=o(13919),s=o(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var d=o(99603),p=o(21702),m=o(92949);function u(e){let{href:t,children:o}=e;return r.createElement(n.default,{href:t,className:(0,i.default)("card padding--lg",l.cardContainer)},o)}function f(e){let{href:t,icon:o,title:n,description:a}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,i.default)("text--truncate",l.cardTitle),title:n},o,n),a&&r.createElement("p",{className:l.cardDescription,title:a},a))}function w(e){let{item:t}=e;const o=(0,a.Wl)(t),{colorMode:i}=(0,m.I)();return o?r.createElement(f,{href:o,icon:r.createElement(d.G,{icon:p.cC_,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}),title:t.label,description:t.customProps?.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const{colorMode:o}=(0,m.I)(),i=(0,c.Z)(t.href)?r.createElement(d.G,{icon:p.FL8,style:{marginRight:"0.5em"},color:"dark"===o?"#7ecfee":"#0033a1"}):r.createElement(d.G,{icon:p.wlW,style:{marginRight:"0.5em"},color:"dark"===o?"#7ecfee":"#0033a1"}),n=(0,a.xz)(t.docId??void 0);return r.createElement(f,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(h,{item:t});case"category":return r.createElement(w,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},78621:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=o(87462),i=(o(67294),o(3905)),n=o(8065),a=o(53438);const c={id:"workflows",title:"Workflows",description:"Workflows",custom_edit_url:null},s=void 0,l={unversionedId:"api/v3/workflows",id:"api/v3/workflows",title:"Workflows",description:"Workflows",source:"@site/docs/api/v3/workflows.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/workflows",permalink:"/docs/api/v3/workflows",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"workflows",title:"Workflows",description:"Workflows",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Submit Account Selections",permalink:"/docs/api/v3/submit-account-selection"},next:{title:"List Workflows",permalink:"/docs/api/v3/list-workflows"}},d={},p=[],m={toc:p},u="wrapper";function f(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Workflows allow administrators to create custom automation scripts directly within IdentityNow.  These automation scripts respond to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/docs/event-triggers#how-to-get-started-with-event-triggers"},"event triggers")," and perform a series of actions to perform tasks that are either too cumbersome or not available in the IdentityNow UI.  Workflows can be configured via a graphical user interface within IdentityNow, or by creating and uploading a JSON formatted script to the Workflow service.  The Workflows API collection provides the necessary functionality to create, manage, and test your workflows via REST."),(0,i.kt)(n.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);