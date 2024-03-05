"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[54234],{94934:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>d});var r=i(87462),a=(i(67294),i(3905));const s={id:"source-deleted",title:"Source Deleted",pagination_label:"Source Deleted",sidebar_label:"Source Deleted",sidebar_class_name:"sourceDeleted",keywords:["event","trigger","source","deleted","available"],description:"Fires after a source is deleted.",slug:"/extensibility/event-triggers/triggers/source-deleted",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},l=void 0,n={unversionedId:"extensibility/event-triggers/available/source-deleted",id:"extensibility/event-triggers/available/source-deleted",title:"Source Deleted",description:"Fires after a source is deleted.",source:"@site/docs/extensibility/event-triggers/available/source-deleted.md",sourceDirName:"extensibility/event-triggers/available",slug:"/extensibility/event-triggers/triggers/source-deleted",permalink:"/docs/extensibility/event-triggers/triggers/source-deleted",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/source-deleted.md",tags:[{label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/docs/tags/available-event-triggers"},{label:"Fire and Forget",permalink:"/docs/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"darrell-thobe-sp",lastUpdatedAt:1709674012,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{id:"source-deleted",title:"Source Deleted",pagination_label:"Source Deleted",sidebar_label:"Source Deleted",sidebar_class_name:"sourceDeleted",keywords:["event","trigger","source","deleted","available"],description:"Fires after a source is deleted.",slug:"/extensibility/event-triggers/triggers/source-deleted",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"openApiSidebar",previous:{title:"Source Created",permalink:"/docs/extensibility/event-triggers/triggers/source-created"},next:{title:"Source Updated",permalink:"/docs/extensibility/event-triggers/triggers/source-updated"}},o={},d=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],c={toc:d},g="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(g,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"event-context"},"Event Context"),(0,a.kt)("p",null,"Source Deleted events occur when a source is successfully deleted via the API or the Admin UI. Some uses cases for this trigger include the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Provide evidence to show auditors that connector logic and sources are not manipulated outside of proper change control processes."),(0,a.kt)("li",{parentName:"ul"},"Alert admins when a source was deleted incorrectly.")),(0,a.kt)("p",null,"This is an example input from this trigger:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "2c9180866166b5b0016167c32ef31a66",\n  "name": "Test source",\n  "type": "DIRECT_CONNECT",\n  "deleted": "2021-03-29T22:01:50.474Z",\n  "connector": "active-directory",\n  "actor": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  }\n}\n')),(0,a.kt)("h2",{id:"additional-information-and-links"},"Additional Information and Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,a.kt)("a",{parentName:"li",href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget"},"FIRE_AND_FORGET"))))}u.isMDXComponent=!0}}]);