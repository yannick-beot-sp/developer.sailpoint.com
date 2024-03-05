"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[7236],{48623:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const s={id:"rule",title:"Rule",pagination_label:"Rule",sidebar_label:"Rule",sidebar_class_name:"rule",keywords:["transforms","operations","rule"],description:"Reuse rule logic that has already been written for a previous use case.",slug:"/extensibility/transforms/operations/rule",tags:["Transforms","Transform Operations"]},i=void 0,o={unversionedId:"extensibility/transforms/operations/rule",id:"extensibility/transforms/operations/rule",title:"Rule",description:"Reuse rule logic that has already been written for a previous use case.",source:"@site/docs/extensibility/transforms/operations/rule.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/rule",permalink:"/docs/extensibility/transforms/operations/rule",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/rule.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"darrell-thobe-sp",lastUpdatedAt:1709674012,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{id:"rule",title:"Rule",pagination_label:"Rule",sidebar_label:"Rule",sidebar_class_name:"rule",keywords:["transforms","operations","rule"],description:"Reuse rule logic that has already been written for a previous use case.",slug:"/extensibility/transforms/operations/rule",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Right Pad",permalink:"/docs/extensibility/transforms/operations/right-pad"},next:{title:"Split",permalink:"/docs/extensibility/transforms/operations/split"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],p={toc:u},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Like the reference transform, the rule transform allows you to reuse logic that has already been written for a previous use case. However, you can use the rule transform to reuse code contained within a Generic rule that either is not possible through only transforms or is too complex to maintain with Seaspray."),(0,n.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,n.kt)("p",null,"In addition to the standard ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," attributes, the structure of a rule transform requires the ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," of the rule you want to reference:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "name": "Generic Calculation Rule"\n  },\n  "type": "rule",\n  "name": "Rule Transform"\n}\n')),(0,n.kt)("h2",{id:"attributes"},"Attributes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Required Attributes")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,n.kt)("inlineCode",{parentName:"li"},"rule"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"attributes.name")," - This is the name of the Generic rule the transform must invoke."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The rule transform can implement variables within the attributes list. These variables can be defined as static string values or even as the results of other transforms. Any variables defined here are passed to the Generic rule and are available for calculation within that code."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,n.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,'If you had a "Generate Random Number" rule that produced a random integer value, this transform would invoke that rule and return the output of the code contained within it.'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "name": "Generate Random Number"\n  },\n  "type": "rule",\n  "name": "Rule Transform"\n}\n')),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\xa0"),(0,n.kt)("p",null,"This transform shows a more complex use case in which you have a Generic rule written to perform various string manipulation tasks. If the manner the rule code uses to determine which task to run is passed to it by the ",(0,n.kt)("inlineCode",{parentName:"p"},"operation")," variable and the operation is intended to get the last n characters of a string, n can be provided to the rule via the ",(0,n.kt)("inlineCode",{parentName:"p"},"numChars")," variable. This transform invokes rule code to get the last three characters of the string passed to it with the UI configuration."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "name": "Cloud Services Deployment Utility",\n    "operation": "getEndOfString",\n    "input": {\n      "type": "trim"\n    },\n    "numChars": "3"\n  },\n  "type": "rule",\n  "name": "Rule Transform"\n}\n')))}d.isMDXComponent=!0}}]);