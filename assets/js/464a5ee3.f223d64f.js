"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[76026],{47237:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>k,contentTitle:()=>y,default:()=>x,frontMatter:()=>h,metadata:()=>b,toc:()=>g});var t=s(87462),l=(s(67294),s(3905)),i=s(58219),r=(s(62316),s(51039)),m=s.n(r),n=(s(82723),s(9487)),o=s(41429),p=s(5397),d=s(4667),u=s(9472),c=s(42425);const h={id:"get-user-role",sidebar_label:"Find user role pairing by id",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVd9vGzcM/lcIPm2AHCeOs3UH7CHD0sHD2g5JupfAGGiJZ6u9ky76kdow7n8fqLMTd866xA/nO5GSvo/8SG7RdxwoWe9mBitccvoYOVz7hlGh4aiD7cSKFc5c7aH2AQhix9rWVkOOHCD4hqEjG6xbosJEy4jVHT7aIs4VdhSo5cRBbFt01DJWaA0qtHJ6R2l1fOWv4GtIKwa/+MQ6QfIQOAXLD6wgd4YSK/ABDDecBHLg+2wDG6xSyKww6hW3hNUW06aTG2Pawax9aClhhTkXFLymtmvE5Wwy/cG8WZyPSE9+Gk1Pzy5Gb84upiPDNJ2eT+nH85qw7+dyW+y8ixzlgsnpqfx9zeBq3bFObGDvKhQIHqixsnafOSZUqL1L7JLsp65rrC4pGX+Kcsj2mMUQDlTYBUlgsgMECfnfEvL/d7XmJUEJTOaDazZDOHuF+fl9rXV/sFumFVbnE4UtrQ8/j08RnC9B0CsUOi/z7RUmm0oK9yIeTbAvP4XT59LzCxm4HrIAI8iOFk3JkPaihcQnr8mNd/yhLur+d+j3sGauJP532dqr//b7S7zKNVch+BCxnw8kLp4jMXOJg6MGbjg8cICyB0ZSKTk4NuAdZLciZxo2wGvNZWd8Fblvq4nlymNkl9ByjLRkGNYX1i1LOQ/+h0V340PYQPQtp5V4fWGX4EvwbrnLYK9QbH7XpgSCtIwKx4+qj+OtNT0qjCUQQ6fJocEKVyl1sRqPt4kdufSeWu5PnHfcdo3fMJ9o346ps6jwgYIVHRRiT+4Du5pyI4oj3bL2Rw3rtriDdDegGO1Swi96yjH5loNwmQs+nYNNmwJwwRQ4XGYhczc/NN9I9Acch06PyRBSuOtx8j04odq9vN2Xx63/zA6SPH/e+ByG11Iw1tVeTpRwDRTOTk5PTg+0+P7q+h1c/jk75rpi2BtBk4MFyzwofElrjhHIGWi9sfUGJKo+R+mDPgfNEayDAobdgw3eteySKLKxml0s4d4NiXez24K18zG15A4sb60zxzMIFhso3esrvNsnrb98lA1xTrxO464hK1U7CGq7U9/dU8+NqLCyRobdyscktu12QZE/hqbvZfk+c5Ccz59EVhRgbJR3g1VNTeRvAP/uejffvofXz8Zn2ewWyW2K9JssX6jwM2+G+dzPe4UrJsOhgB0Ml1q6yMGWo+4hQn4s2N+uJIX/ANK/5P4=",sidebar_class_name:"get api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find user role pairing by id' (get-user-role)"},y=void 0,b={unversionedId:"api/nerm/v1/get-user-role",id:"api/nerm/v1/get-user-role",title:"get-user-role",description:"Find user role pairing by id",source:"@site/docs/api/nerm/v1/get-user-role.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/get-user-role",permalink:"/docs/api/nerm/v1/get-user-role",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find user role pairing by id' (get-user-role)",tags:[],version:"current",frontMatter:{id:"get-user-role",sidebar_label:"Find user role pairing by id",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVd9vGzcM/lcIPm2AHCeOs3UH7CHD0sHD2g5JupfAGGiJZ6u9ky76kdow7n8fqLMTd866xA/nO5GSvo/8SG7RdxwoWe9mBitccvoYOVz7hlGh4aiD7cSKFc5c7aH2AQhix9rWVkOOHCD4hqEjG6xbosJEy4jVHT7aIs4VdhSo5cRBbFt01DJWaA0qtHJ6R2l1fOWv4GtIKwa/+MQ6QfIQOAXLD6wgd4YSK/ABDDecBHLg+2wDG6xSyKww6hW3hNUW06aTG2Pawax9aClhhTkXFLymtmvE5Wwy/cG8WZyPSE9+Gk1Pzy5Gb84upiPDNJ2eT+nH85qw7+dyW+y8ixzlgsnpqfx9zeBq3bFObGDvKhQIHqixsnafOSZUqL1L7JLsp65rrC4pGX+Kcsj2mMUQDlTYBUlgsgMECfnfEvL/d7XmJUEJTOaDazZDOHuF+fl9rXV/sFumFVbnE4UtrQ8/j08RnC9B0CsUOi/z7RUmm0oK9yIeTbAvP4XT59LzCxm4HrIAI8iOFk3JkPaihcQnr8mNd/yhLur+d+j3sGauJP532dqr//b7S7zKNVch+BCxnw8kLp4jMXOJg6MGbjg8cICyB0ZSKTk4NuAdZLciZxo2wGvNZWd8Fblvq4nlymNkl9ByjLRkGNYX1i1LOQ/+h0V340PYQPQtp5V4fWGX4EvwbrnLYK9QbH7XpgSCtIwKx4+qj+OtNT0qjCUQQ6fJocEKVyl1sRqPt4kdufSeWu5PnHfcdo3fMJ9o346ps6jwgYIVHRRiT+4Du5pyI4oj3bL2Rw3rtriDdDegGO1Swi96yjH5loNwmQs+nYNNmwJwwRQ4XGYhczc/NN9I9Acch06PyRBSuOtx8j04odq9vN2Xx63/zA6SPH/e+ByG11Iw1tVeTpRwDRTOTk5PTg+0+P7q+h1c/jk75rpi2BtBk4MFyzwofElrjhHIGWi9sfUGJKo+R+mDPgfNEayDAobdgw3eteySKLKxml0s4d4NiXez24K18zG15A4sb60zxzMIFhso3esrvNsnrb98lA1xTrxO464hK1U7CGq7U9/dU8+NqLCyRobdyscktu12QZE/hqbvZfk+c5Ccz59EVhRgbJR3g1VNTeRvAP/uejffvofXz8Zn2ewWyW2K9JssX6jwM2+G+dzPe4UrJsOhgB0Ml1q6yMGWo+4hQn4s2N+uJIX/ANK/5P4=",sidebar_class_name:"get api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find user role pairing by id' (get-user-role)"},sidebar:"openApiSidebar",previous:{title:"Update multiple user role pairings",permalink:"/docs/api/nerm/v1/patch-user-roles"},next:{title:"Update a user role pairing by id",permalink:"/docs/api/nerm/v1/patch-user-role"}},k={},g=[{value:"Request",id:"request",level:2}],f={toc:g},T="wrapper";function x(e){let{components:a,...s}=e;return(0,l.kt)(T,(0,t.Z)({},f,s,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"openapi__heading"},"Find user role pairing by id"),(0,l.kt)(m(),{method:"get",path:"/user_roles/{id}",mdxType:"MethodEndpoint"}),(0,l.kt)("p",null,"Info for a specific user role pairing"),(0,l.kt)("h2",{id:"request"},"Request"),(0,l.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(o.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"ID of the object to retrieve, update, or delete",required:!0,schema:{type:"string",format:"uuid",example:"1246d8b3-ac29-4015-8154-dea4434a73fa"}},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)(i.Z,{mdxType:"ApiTabs"},(0,l.kt)(c.default,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Expected response to a valid request")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"user_role"),(0,l.kt)("span",{className:"openapi-schema__name"}," object"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",readOnly:!0},mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",schema:{type:"string",minLength:32,maxLength:32,readOnly:!0},mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"user_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"role_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}))))))),(0,l.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:'{\n  "user_role": {\n    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "uid": "string",\n    "user_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n    "role_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.default,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Bad Request - unable to complete.")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--info"},"oneOf"),(0,l.kt)(u.default,{mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"InvalidJson",value:"0-item-properties",mdxType:"TabItem"},(0,l.kt)(d.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."},mdxType:"SchemaItem"})),(0,l.kt)(c.default,{label:"ValidationErrors",value:"1-item-properties",mdxType:"TabItem"},(0,l.kt)(d.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"},mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}},mdxType:"SchemaItem"}))))))),(0,l.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.default,{label:"500",value:"500",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"},mdxType:"SchemaItem"})))),(0,l.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}x.isMDXComponent=!0}}]);