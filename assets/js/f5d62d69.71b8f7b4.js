"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[80569],{91984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const a={id:"source-account-deleted",title:"Source Account Deleted",pagination_label:"Source Account Deleted",sidebar_label:"Source Account Deleted",sidebar_class_name:"sourceAccountDeleted",keywords:["event","trigger","source","account","deleted","early access"],description:"Fires after a source account is deleted.",slug:"/extensibility/event-triggers/triggers/source-account-deleted",tags:["Event Triggers","Early Access Event Triggers","Fire and Forget"]},o=void 0,s={unversionedId:"extensibility/event-triggers/early-access/source-account-deleted",id:"extensibility/event-triggers/early-access/source-account-deleted",title:"Source Account Deleted",description:"Fires after a source account is deleted.",source:"@site/docs/extensibility/event-triggers/early-access/source-account-deleted.md",sourceDirName:"extensibility/event-triggers/early-access",slug:"/extensibility/event-triggers/triggers/source-account-deleted",permalink:"/docs/extensibility/event-triggers/triggers/source-account-deleted",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/early-access/source-account-deleted.md",tags:[{label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{label:"Early Access Event Triggers",permalink:"/docs/tags/early-access-event-triggers"},{label:"Fire and Forget",permalink:"/docs/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"darrell-thobe-sp",lastUpdatedAt:1709674012,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{id:"source-account-deleted",title:"Source Account Deleted",pagination_label:"Source Account Deleted",sidebar_label:"Source Account Deleted",sidebar_class_name:"sourceAccountDeleted",keywords:["event","trigger","source","account","deleted","early access"],description:"Fires after a source account is deleted.",slug:"/extensibility/event-triggers/triggers/source-account-deleted",tags:["Event Triggers","Early Access Event Triggers","Fire and Forget"]},sidebar:"openApiSidebar",previous:{title:"Source Account Created",permalink:"/docs/extensibility/event-triggers/triggers/source-account-created"},next:{title:"Source Account Updated",permalink:"/docs/extensibility/event-triggers/triggers/source-account-updated"}},c={},d=[{value:"Event Context",id:"event-context",level:2},{value:"Additional information and links",id:"additional-information-and-links",level:2}],l={toc:d},u="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This is an early access event trigger. Please contact support to have it enabled in your tenant.")),(0,i.kt)("h2",{id:"event-context"},"Event Context"),(0,i.kt)("p",null,"Source Account Deleted events occur whenever an account is deleted from its source during an account aggregation operation. The account may have been manually removed or deleted as the result of a provisioning event. The trigger cannot determine whether the account deletion happened on a source or in Identity Security Cloud. It omits events related to Identity Security Cloud accounts, such as the Identity Security Cloud Admin."),(0,i.kt)("p",null,"Use this event trigger to watch for deletions of authoritative accounts, such as an account deleted on Workday."),(0,i.kt)("p",null,"This is an example input from this trigger:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "b7264868-7201-415f-9118-b581d431c688",\n  "id": "ee769173319b41d19ccec35ba52f237b",\n  "nativeIdentifier": "E009",\n  "sourceId": "2c918082814e693601816e09471b29b6",\n  "sourceName": "Active Directory",\n  "identityId": "ee769173319b41d19ccec6c235423237b",\n  "identityName": "john.doe",\n  "attributes": {\n    "firstname": "John",\n    "lastname": "Doe",\n    "email": "john.doe@gmail.com",\n    "department": "Sales",\n    "displayName": "John Doe",\n    "created": "2020-04-27T16:48:33.597Z",\n    "employeeNumber": "E009",\n    "uid": "E009",\n    "inactive": "true",\n    "phone": null,\n    "identificationNumber": "E009"\n  }\n}\n')),(0,i.kt)("h2",{id:"additional-information-and-links"},"Additional information and links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,i.kt)("a",{parentName:"li",href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget"},"FIRE_AND_FORGET"))))}g.isMDXComponent=!0}}]);