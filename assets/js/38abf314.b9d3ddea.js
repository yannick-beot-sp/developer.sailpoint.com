"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[16601],{84151:(e,t,i)=>{i.d(t,{Z:()=>g});var a=i(67294),n=i(86010),s=i(39960),c=i(53438),o=i(13919),l=i(95999);const r={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var f=i(99603),d=i(21702),p=i(92949);function h(e){let{href:t,children:i}=e;return a.createElement(s.default,{href:t,className:(0,n.default)("card padding--lg",r.cardContainer)},i)}function m(e){let{href:t,icon:i,title:s,description:c}=e;return a.createElement(h,{href:t},a.createElement("h2",{className:(0,n.default)("text--truncate",r.cardTitle),title:s},i,s),c&&a.createElement("p",{className:r.cardDescription,title:c},c))}function u(e){let{item:t}=e;const i=(0,c.Wl)(t),{colorMode:n}=(0,p.I)();return i?a.createElement(m,{href:i,icon:a.createElement(f.G,{icon:d.cC_,style:{marginRight:"0.5em"},color:"dark"===n?"#7ecfee":"#0033a1"}),title:t.label,description:t.customProps?.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const{colorMode:i}=(0,p.I)(),n=(0,o.Z)(t.href)?a.createElement(f.G,{icon:d.FL8,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}):a.createElement(f.G,{icon:d.wlW,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}),s=(0,c.xz)(t.docId??void 0);return a.createElement(m,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(y,{item:t});case"category":return a.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},74519:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=i(87462),n=(i(67294),i(3905)),s=i(8065),c=i(53438);const o={id:"lifecycle-states",title:"Lifecycle States",description:"Lifecycle States",custom_edit_url:null},l=void 0,r={unversionedId:"api/v3/lifecycle-states",id:"api/v3/lifecycle-states",title:"Lifecycle States",description:"Lifecycle States",source:"@site/docs/api/v3/lifecycle-states.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/lifecycle-states",permalink:"/docs/api/v3/lifecycle-states",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"lifecycle-states",title:"Lifecycle States",description:"Lifecycle States",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Update security network configuration.",permalink:"/docs/api/v3/patch-auth-org-network-config"},next:{title:"Set Lifecycle State",permalink:"/docs/api/v3/set-lifecycle-state"}},f={},d=[],p={toc:d},h="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(h,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use this API to implement and customize lifecycle state functionality.\nWith this functionality in place, administrators can create and configure custom lifecycle states for use across their organizations, which is key to controlling which users have access, when they have access, and the access they have."),(0,n.kt)("p",null,"A lifecycle state describes a user's status in a company. For example, two lifecycle states come by default with IdentityNow: 'Active' and 'Inactive.'\nWhen an active employee takes an extended leave of absence from a company, his or her lifecycle state may change to 'Inactive,' for security purposes.\nThe inactive employee would lose access to all the applications, sources, and sensitive data during the leave of absence, but when the employee returns and becomes active again, all that access would be restored.\nThis saves administrators the time that would otherwise be spent provisioning the employee's access to each individual tool, reviewing the employee's certification history, etc. "),(0,n.kt)("p",null,"Administrators can create a variety of custom lifecycle states. Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/provisioning/lifecycle.html#planning-new-lifecycle-states"},"Planning New Lifecycle States")," for some custom lifecycle state ideas."),(0,n.kt)("p",null,"Administrators must define the criteria for being in each lifecycle state, and they must define how IdentityNow manages users' access to apps and sources for each lifecycle state."),(0,n.kt)("p",null,"In IdentityNow, administrators can manage lifecycle states by going to Admin > Identities > Identity Profile, selecting the identity profile whose lifecycle states they want to manage, selecting the 'Provisioning' tab, and using the left panel to either select the lifecycle state they want to modify or create a new lifecycle state. "),(0,n.kt)("p",null,"In the 'Provisioning' tab, administrators can make the following access changes to an identity profile's lifecycle state: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Enable/disable the lifecycle state for the identity profile.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Enable/disable source accounts for the identity profile's lifecycle state.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Add existing access profiles to grant to the identity profiles in that lifecycle state.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create a new access profile to grant to the identity profile in that lifecycle state."))),(0,n.kt)("p",null,"Access profiles granted in a previous lifecycle state are automatically revoked when the identity moves to a new lifecycle state.\nTo maintain access across multiple lifecycle states, administrators must grant the access profiles in each lifecycle state.\nFor example, if an administrator wants users with the 'HR Employee' identity profile to maintain their building access in both the 'Active' and 'Leave of Absence' lifecycle states, the administrator must grant the access profile for that building access to both lifecycle states."),(0,n.kt)("p",null,"During scheduled refreshes, IdentityNow evaluates lifecycle states to determine whether their assigned identities have the access defined in the lifecycle states' access profiles.\nIf the identities are missing access, IdentityNow provisions that access. "),(0,n.kt)("p",null,"Administrators can also use the 'Provisioning' tab to configure email notifications for IdentityNow to send whenever an identity with that identity profile has a lifecycle state change.\nRefer to ",(0,n.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/provisioning/lifecycle.html#configuring-lifecycle-state-notifications"},"Configuring Lifecycle State Notifications")," for more information on how to do so."),(0,n.kt)("p",null,"An identity's lifecycle state can have four different statuses: the lifecycle state's status can be 'Active,' it can be 'Not Set,' it can be 'Not Valid,' or it 'Does Not Match Technical Name Case.'\nRefer to ",(0,n.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/provisioning/lifecycle.html#moving-identities-into-lifecycle-states"},"Moving Identities into Lifecycle States")," for more information about these different lifecycle state statuses. "),(0,n.kt)("p",null,"Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/provisioning/lifecycle.html"},"Setting Up Lifecycle States")," for more information about lifecycle states."),(0,n.kt)(s.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);