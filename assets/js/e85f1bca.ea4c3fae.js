"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[20591],{71698:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={id:"left-pad",title:"Left Pad",pagination_label:"Left Pad",sidebar_label:"Left Pad",sidebar_class_name:"leftPad",keywords:["transforms","operations","left","pad"],description:"Left pad of the input string.",slug:"/extensibility/transforms/operations/left-pad",tags:["Transforms","Transform Operations"]},s=void 0,o={unversionedId:"extensibility/transforms/operations/left-pad",id:"extensibility/transforms/operations/left-pad",title:"Left Pad",description:"Left pad of the input string.",source:"@site/docs/extensibility/transforms/operations/left-pad.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/left-pad",permalink:"/docs/extensibility/transforms/operations/left-pad",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/left-pad.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"darrell-thobe-sp",lastUpdatedAt:1709674012,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{id:"left-pad",title:"Left Pad",pagination_label:"Left Pad",sidebar_label:"Left Pad",sidebar_class_name:"leftPad",keywords:["transforms","operations","left","pad"],description:"Left pad of the input string.",slug:"/extensibility/transforms/operations/left-pad",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Last Index Of",permalink:"/docs/extensibility/transforms/operations/last-index-of"},next:{title:"Lookup",permalink:"/docs/extensibility/transforms/operations/lookup"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],d={toc:p},u="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Use the left pad transform to pad an incoming string with a user-supplied character out to a specific number of characters. This transform is often useful for data normalization situations in which data such as employee IDs are not uniform in length but need to be for downstream systems."),(0,r.kt)("admonition",{title:"Other Considerations",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If the input to the left pad transform is null, the transform returns a null value."))),(0,r.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,r.kt)("p",null,"In addition to the standard ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," attributes, the left pad transform requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"length")," attribute, which tells the transform how many characters to pad the incoming string to."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "padding": "0",\n    "length": "5"\n  },\n  "type": "leftPad",\n  "name": "Left Pad Transform"\n}\n')),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Required Attributes")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"leftPad"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"length")," - This is an integer value for the final output string's desired length."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"padding")," - This string value represents the character the transform will pad the incoming data to to get to the desired length.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'If no padding value is provided, the transform defaults to a single space (" ") character for padding.'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,'This transform takes the incoming attribute configured in the identity profile attribute UI and ensures it is padded out to 8 characters in length by adding "0"s to the left.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "1234"\nOutput: "00001234"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "padding": "0",\n    "length": "8"\n  },\n  "type": "leftPad",\n  "name": "Left Pad Transform"\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,"This transform takes the user's ",(0,r.kt)("inlineCode",{parentName:"p"},"employeeID"),' attribute from the HR source and ensures it is padded out to 7 characters in length by adding "x"s to the left.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "1234"\nOutput: "xxx1234"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "padding": "x",\n    "length": "7",\n    "input": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "employeeID"\n      },\n      "type": "accountAttribute"\n    }\n  },\n  "type": "leftPad",\n  "name": "Left Pad Transform"\n}\n')))}m.isMDXComponent=!0}}]);