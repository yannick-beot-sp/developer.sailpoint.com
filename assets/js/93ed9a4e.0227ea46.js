"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[69765],{84151:(e,t,n)=>{n.d(t,{Z:()=>y});var o=n(67294),s=n(86010),a=n(39960),r=n(53438),i=n(13919),l=n(95999);const c={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var d=n(99603),p=n(21702),u=n(92949);function h(e){let{href:t,children:n}=e;return o.createElement(a.default,{href:t,className:(0,s.default)("card padding--lg",c.cardContainer)},n)}function m(e){let{href:t,icon:n,title:a,description:r}=e;return o.createElement(h,{href:t},o.createElement("h2",{className:(0,s.default)("text--truncate",c.cardTitle),title:a},n,a),r&&o.createElement("p",{className:c.cardDescription,title:r},r))}function f(e){let{item:t}=e;const n=(0,r.Wl)(t),{colorMode:s}=(0,u.I)();return n?o.createElement(m,{href:n,icon:o.createElement(d.G,{icon:p.cC_,style:{marginRight:"0.5em"},color:"dark"===s?"#7ecfee":"#0033a1"}),title:t.label,description:t.customProps?.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const{colorMode:n}=(0,u.I)(),s=(0,i.Z)(t.href)?o.createElement(d.G,{icon:p.FL8,style:{marginRight:"0.5em"},color:"dark"===n?"#7ecfee":"#0033a1"}):o.createElement(d.G,{icon:p.wlW,style:{marginRight:"0.5em"},color:"dark"===n?"#7ecfee":"#0033a1"}),a=(0,r.xz)(t.docId??void 0);return o.createElement(m,{href:t.href,icon:s,title:t.label,description:t.description??a?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(g,{item:t});case"category":return o.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},70685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=n(87462),s=(n(67294),n(3905)),a=n(8065),r=n(53438);const i={id:"roles",title:"Roles",description:"Roles",custom_edit_url:null},l=void 0,c={unversionedId:"api/beta/roles",id:"api/beta/roles",title:"Roles",description:"Roles",source:"@site/docs/api/beta/roles.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/roles",permalink:"/docs/api/beta/roles",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"roles",title:"Roles",description:"Roles",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get identities for a suggested entitlement (for a role)",permalink:"/docs/api/beta/get-entitlement-changes-identities"},next:{title:"List Roles",permalink:"/docs/api/beta/list-roles"}},d={},p=[],u={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(h,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Use this API to implement and customize role functionality.\nWith this functionality in place, administrators can create roles and configure them for use throughout IdentityNow.\nIdentityNow can use established criteria to automatically assign the roles to qualified users. This enables users to get all the access they need quickly and securely and administrators to spend their time on other tasks."),(0,s.kt)("p",null,"Entitlements represent the most granular level of access in IdentityNow.\nAccess profiles represent the next level and often group entitlements.\nRoles represent the broadest level of access and often group access profiles."),(0,s.kt)("p",null,"For example, an Active Directory source in IdentityNow can have multiple entitlements: the first, 'Employees,' may represent the access all employees have at the organization, and a second, 'Developers,' may represent the access all developers have at the organization."),(0,s.kt)("p",null,"An administrator can then create a broader set of access in the form of an access profile, 'AD Developers' grouping the 'Employees' entitlement with the 'Developers' entitlement."),(0,s.kt)("p",null,"An administrator can then create an even broader set of access in the form of a role grouping the 'AD Developers' access profile with another profile, 'GitHub Developers,' grouping entitlements for the GitHub source."),(0,s.kt)("p",null,"When users only need Active Directory employee access, they can request access to the 'Employees' entitlement."),(0,s.kt)("p",null,"When users need both Active Directory employee and developer access, they can request access to the 'AD Developers' access profile."),(0,s.kt)("p",null,"When users need both the 'AD Developers' access profile and the 'GitHub Developers' access profile, they can request access to the role grouping both."),(0,s.kt)("p",null,"Roles often represent positions within organizations.\nFor example, an organization's accountant can access all the tools the organization's accountants need with the 'Accountant' role.\nIf the accountant switches to engineering, a qualified member of the organization can quickly revoke the accountant's 'Accountant' access and grant access to the 'Engineer' role instead, granting access to all the tools the organization's engineers need."),(0,s.kt)("p",null,"In IdentityNow, adminstrators can use the Access drop-down menu and select Roles to view, configure, and delete existing roles, as well as create new ones.\nAdministrators can enable and disable the role, and they can also make the following configurations:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Manage Access: Manage the role's access by adding or removing access profiles.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Define Assignment: Define the criteria IdentityNow uses to assign the role to identities.\nUse the first option, 'Standard Criteria,' to provide specific criteria for assignment like specific account attributes, entitlements, or identity attributes.\nUse the second, 'Identity List,' to specify the identities for assignment.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Access Requests: Configure roles to be requestable and establish an approval process for any requests that the role be granted or revoked.\nDo not configure a role to be requestable without establishing a secure access request approval process for that role first."))),(0,s.kt)("p",null,"Refer to ",(0,s.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/access/roles.html"},"Working with Roles")," for more information about roles."),(0,s.kt)(a.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);