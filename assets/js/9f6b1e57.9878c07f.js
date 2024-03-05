"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[78308],{84151:(e,t,i)=>{i.d(t,{Z:()=>g});var o=i(67294),n=i(86010),a=i(39960),s=i(53438),c=i(13919),r=i(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var p=i(99603),d=i(21702),u=i(92949);function h(e){let{href:t,children:i}=e;return o.createElement(a.default,{href:t,className:(0,n.default)("card padding--lg",l.cardContainer)},i)}function m(e){let{href:t,icon:i,title:a,description:s}=e;return o.createElement(h,{href:t},o.createElement("h2",{className:(0,n.default)("text--truncate",l.cardTitle),title:a},i,a),s&&o.createElement("p",{className:l.cardDescription,title:s},s))}function f(e){let{item:t}=e;const i=(0,s.Wl)(t),{colorMode:n}=(0,u.I)();return i?o.createElement(m,{href:i,icon:o.createElement(p.G,{icon:d.cC_,style:{marginRight:"0.5em"},color:"dark"===n?"#7ecfee":"#0033a1"}),title:t.label,description:t.customProps?.description??(0,r.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const{colorMode:i}=(0,u.I)(),n=(0,c.Z)(t.href)?o.createElement(p.G,{icon:d.FL8,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}):o.createElement(p.G,{icon:d.wlW,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}),a=(0,s.xz)(t.docId??void 0);return o.createElement(m,{href:t.href,icon:n,title:t.label,description:t.description??a?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(y,{item:t});case"category":return o.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},33459:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var o=i(87462),n=(i(67294),i(3905)),a=i(8065),s=i(53438);const c={id:"sod-policy",title:"SOD Policy",description:"SOD Policy",custom_edit_url:null},r=void 0,l={unversionedId:"api/v3/sod-policy",id:"api/v3/sod-policy",title:"SOD Policy",description:"SOD Policy",source:"@site/docs/api/v3/sod-policy.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/sod-policy",permalink:"/docs/api/v3/sod-policy",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"sod-policy",title:"SOD Policy",description:"SOD Policy",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Update the time check configuration",permalink:"/docs/api/v3/update-status-check-details"},next:{title:"Create SOD policy",permalink:"/docs/api/v3/create-sod-policy"}},p={},d=[],u={toc:d},h="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(h,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Use this API to implement and manage "separation of duties" (SOD) policies.\nWith SOD policy functionality in place, administrators can organize the access in their tenants to prevent individuals from gaining conflicting or excessive access. '),(0,n.kt)("p",null,"\"Separation of duties\" refers to the concept that people shouldn't have conflicting sets of access - all their access should be configured in a way that protects your organization's assets and data.",(0,n.kt)("br",{parentName:"p"}),"\n","For example, people who record monetary transactions shouldn't be able to issue payment for those transactions.\nAny changes to major system configurations should be approved by someone other than the person requesting the change. "),(0,n.kt)("p",null,'Organizations can use "separation of duties" (SOD) policies to enforce and track their internal security rules throughout their tenants.\nThese SOD policies limit each user\'s involvement in important processes and protects the organization from individuals gaining excessive access. '),(0,n.kt)("p",null,"To create SOD policies in IdentityNow, administrators use 'Search' and then access 'Policies'.\nTo create a policy, they must configure two lists of access items. Each access item can only be added to one of the two lists.\nThey can search for the entitlements they want to add to these access lists."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: You can have a maximum of 500 policies of any type (including general policies) in your organization. In each access-based SOD policy, you can have a maximum of 50 entitlements in each access list.  ")),(0,n.kt)("p",null,"Once a SOD policy is in place, if an identity has access items on both lists, a SOD violation will trigger.\nThese violations are included in SOD violation reports that other users will see in emails at regular intervals if they're subscribed to the SOD policy.\nThe other users can then better help to enforce these SOD policies. "),(0,n.kt)("p",null,"To create a subscription to a SOD policy in IdentityNow, administrators use 'Search' and then access 'Layers'.\nThey can create a subscription to the policy and schedule it to run at a regular interval. "),(0,n.kt)("p",null,"Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/sod/manage-policies.html"},"Managing Policies")," for more information about SOD policies. "),(0,n.kt)("p",null,"Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/sod/policy-violations.html#subscribe-to-an-sod-policy"},"Subscribe to a SOD Policy")," for more information about SOD policy subscriptions."),(0,n.kt)(a.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);