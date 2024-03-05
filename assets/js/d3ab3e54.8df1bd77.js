"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[38831],{84151:(e,t,n)=>{n.d(t,{Z:()=>g});var s=n(67294),o=n(86010),a=n(39960),r=n(53438),i=n(13919),c=n(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var d=n(99603),p=n(21702),m=n(92949);function u(e){let{href:t,children:n}=e;return s.createElement(a.default,{href:t,className:(0,o.default)("card padding--lg",l.cardContainer)},n)}function h(e){let{href:t,icon:n,title:a,description:r}=e;return s.createElement(u,{href:t},s.createElement("h2",{className:(0,o.default)("text--truncate",l.cardTitle),title:a},n,a),r&&s.createElement("p",{className:l.cardDescription,title:r},r))}function f(e){let{item:t}=e;const n=(0,r.Wl)(t),{colorMode:o}=(0,m.I)();return n?s.createElement(h,{href:n,icon:s.createElement(d.G,{icon:p.cC_,style:{marginRight:"0.5em"},color:"dark"===o?"#7ecfee":"#0033a1"}),title:t.label,description:t.customProps?.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function k(e){let{item:t}=e;const{colorMode:n}=(0,m.I)(),o=(0,i.Z)(t.href)?s.createElement(d.G,{icon:p.FL8,style:{marginRight:"0.5em"},color:"dark"===n?"#7ecfee":"#0033a1"}):s.createElement(d.G,{icon:p.wlW,style:{marginRight:"0.5em"},color:"dark"===n?"#7ecfee":"#0033a1"}),a=(0,r.xz)(t.docId??void 0);return s.createElement(h,{href:t.href,icon:o,title:t.label,description:t.description??a?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return s.createElement(k,{item:t});case"category":return s.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},98848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var s=n(87462),o=(n(67294),n(3905)),a=n(8065),r=n(53438);const i={id:"personal-access-tokens",title:"Personal Access Tokens",description:"Personal Access Tokens",custom_edit_url:null},c=void 0,l={unversionedId:"api/beta/personal-access-tokens",id:"api/beta/personal-access-tokens",title:"Personal Access Tokens",description:"Personal Access Tokens",source:"@site/docs/api/beta/personal-access-tokens.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/personal-access-tokens",permalink:"/docs/api/beta/personal-access-tokens",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"personal-access-tokens",title:"Personal Access Tokens",description:"Personal Access Tokens",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Delete Password Sync Group by ID",permalink:"/docs/api/beta/delete-password-sync-group"},next:{title:"List Personal Access Tokens",permalink:"/docs/api/beta/list-personal-access-tokens"}},d={},p=[],m={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use this API to implement personal access token (PAT) functionality.\nWith this functionality in place, users can use PATs as an alternative to passwords for authentication in IdentityNow."),(0,o.kt)("p",null,"PATs embed user information into the client ID and secret.\nThis replaces the API clients' need to store and provide a username and password to establish a connection, improving IdentityNow organizations' integration security."),(0,o.kt)("p",null,"In IdentityNow, users can do the following to create and manage their PATs: Select the dropdown menu under their names, select Preferences, and then select Personal Access Tokens.\nThey must then provide a description about the token's purpose.\nThey can then select 'Create Token' at the bottom of the page to generate and view the Secret and Client ID."),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/common/generate_tokens.html"},"Managing Personal Access Tokens")," for more information about PATs."),(0,o.kt)(a.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);