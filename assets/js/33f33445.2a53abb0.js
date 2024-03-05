"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[82832],{84151:(e,t,i)=>{i.d(t,{Z:()=>g});var r=i(67294),a=i(86010),s=i(39960),c=i(53438),n=i(13919),o=i(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var d=i(99603),u=i(21702),p=i(92949);function m(e){let{href:t,children:i}=e;return r.createElement(s.default,{href:t,className:(0,a.default)("card padding--lg",l.cardContainer)},i)}function b(e){let{href:t,icon:i,title:s,description:c}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,a.default)("text--truncate",l.cardTitle),title:s},i,s),c&&r.createElement("p",{className:l.cardDescription,title:c},c))}function h(e){let{item:t}=e;const i=(0,c.Wl)(t),{colorMode:a}=(0,p.I)();return i?r.createElement(b,{href:i,icon:r.createElement(d.G,{icon:u.cC_,style:{marginRight:"0.5em"},color:"dark"===a?"#7ecfee":"#0033a1"}),title:t.label,description:t.customProps?.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const{colorMode:i}=(0,p.I)(),a=(0,n.Z)(t.href)?r.createElement(d.G,{icon:u.FL8,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}):r.createElement(d.G,{icon:u.wlW,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}),s=(0,c.xz)(t.docId??void 0);return r.createElement(b,{href:t.href,icon:a,title:t.label,description:t.description??s?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},94231:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>b,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var r=i(87462),a=(i(67294),i(3905)),s=i(8065),c=i(53438);const n={id:"requestable-objects",title:"Requestable Objects",description:"Requestable Objects",custom_edit_url:null},o=void 0,l={unversionedId:"api/v3/requestable-objects",id:"api/v3/requestable-objects",title:"Requestable Objects",description:"Requestable Objects",source:"@site/docs/api/v3/requestable-objects.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/requestable-objects",permalink:"/docs/api/v3/requestable-objects",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"requestable-objects",title:"Requestable Objects",description:"Requestable Objects",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get Report File",permalink:"/docs/api/v3/get-report"},next:{title:"Requestable Objects List",permalink:"/docs/api/v3/list-requestable-objects"}},d={},u=[],p={toc:u},m="wrapper";function b(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use this API to implement requestable object functionality.\nWith this functionality in place, administrators can determine which access items can be requested with the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/api/v3/access-requests"},"Access Request APIs"),", along with their statuses.\nThis can be helpful for administrators who are implementing and customizing access request functionality as a way of checking which items are requestable as they are created, assigned, and made available."),(0,a.kt)(s.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}b.isMDXComponent=!0}}]);