"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[11311],{84151:(e,t,s)=>{s.d(t,{Z:()=>y});var a=s(67294),i=s(86010),n=s(39960),o=s(53438),r=s(13919),c=s(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var p=s(99603),u=s(21702),d=s(92949);function m(e){let{href:t,children:s}=e;return a.createElement(n.default,{href:t,className:(0,i.default)("card padding--lg",l.cardContainer)},s)}function f(e){let{href:t,icon:s,title:n,description:o}=e;return a.createElement(m,{href:t},a.createElement("h2",{className:(0,i.default)("text--truncate",l.cardTitle),title:n},s,n),o&&a.createElement("p",{className:l.cardDescription,title:o},o))}function h(e){let{item:t}=e;const s=(0,o.Wl)(t),{colorMode:i}=(0,d.I)();return s?a.createElement(f,{href:s,icon:a.createElement(p.G,{icon:u.cC_,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}),title:t.label,description:t.customProps?.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const{colorMode:s}=(0,d.I)(),i=(0,r.Z)(t.href)?a.createElement(p.G,{icon:u.FL8,style:{marginRight:"0.5em"},color:"dark"===s?"#7ecfee":"#0033a1"}):a.createElement(p.G,{icon:u.wlW,style:{marginRight:"0.5em"},color:"dark"===s?"#7ecfee":"#0033a1"}),n=(0,o.xz)(t.docId??void 0);return a.createElement(f,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(g,{item:t});case"category":return a.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},57719:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=s(87462),i=(s(67294),s(3905)),n=s(8065),o=s(53438);const r={id:"access-profiles",title:"Access Profiles",description:"Access Profiles",custom_edit_url:null},c=void 0,l={unversionedId:"api/beta/access-profiles",id:"api/beta/access-profiles",title:"Access Profiles",description:"Access Profiles",source:"@site/docs/api/beta/access-profiles.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/access-profiles",permalink:"/docs/api/beta/access-profiles",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"access-profiles",title:"Access Profiles",description:"Access Profiles",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Introduction",permalink:"/docs/api/beta/identitynow-beta-api"},next:{title:"List Access Profiles",permalink:"/docs/api/beta/list-access-profiles"}},p={},u=[],d={toc:u},m="wrapper";function f(e){let{components:t,...s}=e;return(0,i.kt)(m,(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Use this API to implement and customize access profile functionality.\nWith this functionality in place, administrators can create access profiles and configure them for use throughout IdentityNow, enabling users to get the access they need quickly and securely."),(0,i.kt)("p",null,"Access profiles group entitlements, which represent access rights on sources."),(0,i.kt)("p",null,"For example, an Active Directory source in IdentityNow can have multiple entitlements: the first, 'Employees,' may represent the access all employees have at the organization, and a second, 'Developers,' may represent the access all developers have at the organization."),(0,i.kt)("p",null,"An administrator can then create a broader set of access in the form of an access profile, 'AD Developers' grouping the 'Employees' entitlement with the 'Developers' entitlement."),(0,i.kt)("p",null,"When users only need Active Directory employee access, they can request access to the 'Employees' entitlement."),(0,i.kt)("p",null,"When users need both Active Directory employee and developer access, they can request access to the 'AD Developers' access profile."),(0,i.kt)("p",null,"Access profiles are the most important units of access in IdentityNow. IdentityNow uses access profiles in many features, including the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Provisioning: When you use the Provisioning Service, lifecycle states and roles both grant access to users in the form of access profiles.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Certifications: You can approve or revoke access profiles in certification campaigns, just like entitlements.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Access Requests: You can assign access profiles to applications, and when a user requests access to the app associated with an access profile and someone approves the request, access is granted to both the application and its associated access profile.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Roles: You can group one or more access profiles into a role to quickly assign access items based on an identity's role."))),(0,i.kt)("p",null,"In IdentityNow, administrators can use the Access drop-down menu and select Access Profiles to view, configure, and delete existing access profiles, as well as create new ones.\nAdministrators can enable and disable an access profile, and they can also make the following configurations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Manage Entitlements: Manage the profile's access by adding and removing entitlements.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Access Requests: Configure access profiles to be requestable and establish an approval process for any requests that the access profile be granted or revoked.\nDo not configure an access profile to be requestable without first establishing a secure access request approval process for the access profile.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Multiple Account Options: Define the logic IdentityNow uses to provision access to an identity with multiple accounts on the source."))),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/access/access-profiles.html"},"Managing Access Profiles")," for more information about access profiles."),(0,i.kt)(n.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);