"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[2222],{84151:(e,t,i)=>{i.d(t,{Z:()=>w});var o=i(67294),n=i(86010),r=i(39960),a=i(53438),s=i(13919),c=i(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var d=i(99603),u=i(21702),p=i(92949);function f(e){let{href:t,children:i}=e;return o.createElement(r.default,{href:t,className:(0,n.default)("card padding--lg",l.cardContainer)},i)}function m(e){let{href:t,icon:i,title:r,description:a}=e;return o.createElement(f,{href:t},o.createElement("h2",{className:(0,n.default)("text--truncate",l.cardTitle),title:r},i,r),a&&o.createElement("p",{className:l.cardDescription,title:a},a))}function g(e){let{item:t}=e;const i=(0,a.Wl)(t),{colorMode:n}=(0,p.I)();return i?o.createElement(m,{href:i,icon:o.createElement(d.G,{icon:u.cC_,style:{marginRight:"0.5em"},color:"dark"===n?"#7ecfee":"#0033a1"}),title:t.label,description:t.customProps?.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const{colorMode:i}=(0,p.I)(),n=(0,s.Z)(t.href)?o.createElement(d.G,{icon:u.FL8,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}):o.createElement(d.G,{icon:u.wlW,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}),r=(0,a.xz)(t.docId??void 0);return o.createElement(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function w(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(h,{item:t});case"category":return o.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},51961:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var o=i(87462),n=(i(67294),i(3905)),r=i(8065),a=i(53438);const s={id:"password-configuration",title:"Password Configuration",description:"Password Configuration",custom_edit_url:null},c=void 0,l={unversionedId:"api/beta/password-configuration",id:"api/beta/password-configuration",title:"Password Configuration",description:"Password Configuration",source:"@site/docs/api/beta/password-configuration.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/password-configuration",permalink:"/docs/api/beta/password-configuration",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"password-configuration",title:"Password Configuration",description:"Password Configuration",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get list of time zones",permalink:"/docs/api/beta/get-valid-time-zones"},next:{title:"Get Password Org Config",permalink:"/docs/api/beta/get-password-org-config"}},d={},u=[],p={toc:u},f="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(f,(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use this API to implement organization password configuration functionality.\nWith this functionality in place, organization administrators can create organization-specific password configurations."),(0,n.kt)("p",null,"These configurations include details like custom password instructions, as well as digit token length and duration."),(0,n.kt)("p",null,"Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/pwd/pwd_reset.html"},"Configuring User Authentication for Password Resets")," for more information about organization password configuration functionality."),(0,n.kt)(r.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);