"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[27157],{84151:(e,t,i)=>{i.d(t,{Z:()=>v});var o=i(67294),n=i(86010),a=i(39960),r=i(53438),s=i(13919),l=i(95999);const c={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var d=i(99603),p=i(21702),u=i(92949);function h(e){let{href:t,children:i}=e;return o.createElement(a.default,{href:t,className:(0,n.default)("card padding--lg",c.cardContainer)},i)}function m(e){let{href:t,icon:i,title:a,description:r}=e;return o.createElement(h,{href:t},o.createElement("h2",{className:(0,n.default)("text--truncate",c.cardTitle),title:a},i,a),r&&o.createElement("p",{className:c.cardDescription,title:r},r))}function f(e){let{item:t}=e;const i=(0,r.Wl)(t),{colorMode:n}=(0,u.I)();return i?o.createElement(m,{href:i,icon:o.createElement(d.G,{icon:p.cC_,style:{marginRight:"0.5em"},color:"dark"===n?"#7ecfee":"#0033a1"}),title:t.label,description:t.customProps?.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const{colorMode:i}=(0,u.I)(),n=(0,s.Z)(t.href)?o.createElement(d.G,{icon:p.FL8,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}):o.createElement(d.G,{icon:p.wlW,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}),a=(0,r.xz)(t.docId??void 0);return o.createElement(m,{href:t.href,icon:n,title:t.label,description:t.description??a?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(g,{item:t});case"category":return o.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},38673:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var o=i(87462),n=(i(67294),i(3905)),a=i(8065),r=i(53438);const s={id:"sod-violations",title:"SOD Violations",description:"SOD Violations",custom_edit_url:null},l=void 0,c={unversionedId:"api/beta/sod-violations",id:"api/beta/sod-violations",title:"SOD Violations",description:"SOD Violations",source:"@site/docs/api/beta/sod-violations.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/sod-violations",permalink:"/docs/api/beta/sod-violations",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"sod-violations",title:"SOD Violations",description:"SOD Violations",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Download custom violation report",permalink:"/docs/api/beta/get-custom-violation-report"},next:{title:"Predict SOD violations for identity.",permalink:"/docs/api/beta/start-predict-sod-violations"}},d={},p=[],u={toc:p},h="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(h,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Use this API to check for current "separation of duties" (SOD) policy violations as well as potential future SOD policy violations.\nWith SOD violation functionality in place, administrators can get information about current SOD policy violations and predict whether an access change will trigger new violations, which helps to prevent them from occurring at all. '),(0,n.kt)("p",null,"\"Separation of duties\" refers to the concept that people shouldn't have conflicting sets of access - all their access should be configured in a way that protects your organization's assets and data.",(0,n.kt)("br",{parentName:"p"}),"\n","For example, people who record monetary transactions shouldn't be able to issue payment for those transactions.\nAny changes to major system configurations should be approved by someone other than the person requesting the change. "),(0,n.kt)("p",null,'Organizations can use "separation of duties" (SOD) policies to enforce and track their internal security rules throughout their tenants.\nThese SOD policies limit each user\'s involvement in important processes and protects the organization from individuals gaining excessive access. '),(0,n.kt)("p",null,"Once a SOD policy is in place, if an identity has conflicting access items, a SOD violation will trigger.\nThese violations are included in SOD violation reports that other users will see in emails at regular intervals if they're subscribed to the SOD policy.\nThe other users can then better help to enforce these SOD policies."),(0,n.kt)("p",null,"Administrators can use the SOD violations APIs to check a set of identities for any current SOD violations, and they can use them to check whether adding an access item would potentially trigger a SOD violation.\nThis second option is a good way to prevent SOD violations from triggering at all. "),(0,n.kt)("p",null,"Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/sod/policy-violations.html"},"Handling Policy Violations")," for more information about SOD policy violations. "),(0,n.kt)(a.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);