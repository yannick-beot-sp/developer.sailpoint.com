"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[88145],{84151:(e,t,i)=>{i.d(t,{Z:()=>v});var n=i(67294),o=i(86010),a=i(39960),r=i(53438),s=i(13919),c=i(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var d=i(99603),p=i(21702),m=i(92949);function u(e){let{href:t,children:i}=e;return n.createElement(a.default,{href:t,className:(0,o.default)("card padding--lg",l.cardContainer)},i)}function f(e){let{href:t,icon:i,title:a,description:r}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,o.default)("text--truncate",l.cardTitle),title:a},i,a),r&&n.createElement("p",{className:l.cardDescription,title:r},r))}function h(e){let{item:t}=e;const i=(0,r.Wl)(t),{colorMode:o}=(0,m.I)();return i?n.createElement(f,{href:i,icon:n.createElement(d.G,{icon:p.cC_,style:{marginRight:"0.5em"},color:"dark"===o?"#7ecfee":"#0033a1"}),title:t.label,description:t.customProps?.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const{colorMode:i}=(0,m.I)(),o=(0,s.Z)(t.href)?n.createElement(d.G,{icon:p.FL8,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}):n.createElement(d.G,{icon:p.wlW,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}),a=(0,r.xz)(t.docId??void 0);return n.createElement(f,{href:t.href,icon:o,title:t.label,description:t.description??a?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},19640:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=i(87462),o=(i(67294),i(3905)),a=i(8065),r=i(53438);const s={id:"non-employee",title:"NERM API Specifications",pagination_label:"NERM API Specifications",sidebar_label:"NERM API Specifications",sidebar_position:1,sidebar_class_name:"nermApiSpecifications",keywords:["api","specifications"],description:"NERM API specifications.",slug:"/api/nerm",tags:["API Specifications"]},c=void 0,l={unversionedId:"api/non-employee",id:"api/non-employee",title:"NERM API Specifications",description:"NERM API specifications.",source:"@site/docs/api/non-employee.md",sourceDirName:"api",slug:"/api/nerm",permalink:"/docs/api/nerm",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/api/non-employee.md",tags:[{label:"API Specifications",permalink:"/docs/tags/api-specifications"}],version:"current",lastUpdatedBy:"darrell-thobe-sp",lastUpdatedAt:1709674012,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:1,frontMatter:{id:"non-employee",title:"NERM API Specifications",pagination_label:"NERM API Specifications",sidebar_label:"NERM API Specifications",sidebar_position:1,sidebar_class_name:"nermApiSpecifications",keywords:["api","specifications"],description:"NERM API specifications.",slug:"/api/nerm",tags:["API Specifications"]},sidebar:"openApiSidebar",previous:{title:"Delete the specified Auth Profile",permalink:"/docs/api/beta/delete-profile-config"},next:{title:"Getting Started",permalink:"/docs/api/nerm/getting-started"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Discuss",id:"discuss",level:2}],m={toc:p},u="wrapper";function f(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/ne-admin/help/"},"Non-Employee Risk Management (NERM)")," is an add-on to Identity Security Cloud (ISC) that helps organizations track non-employees such as contractors, partners, and vendors, and their lifecycles within the organization. "),(0,o.kt)("p",null,"The Non-Employee Risk Management (NERM) APIs provide developers with a way to interact with the NERM add-on and extend it. Developers can leverage these APIs to customize their platform experiences and build new solutions and integrations that meet their needs. "),(0,o.kt)(a.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}),(0,o.kt)("h2",{id:"discuss"},"Discuss"),(0,o.kt)("p",null,"The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions. "),(0,o.kt)("p",null,"To learn more about the NERM APIs and discuss them with SailPoint Developer Community members, go to the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/discuss/tag/nerm"},"SailPoint Developer Community Forum"),"."))}f.isMDXComponent=!0}}]);