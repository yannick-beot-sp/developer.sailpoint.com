"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[99926],{77728:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),c=(n(67294),n(3905));const o={id:"account-enable-customizer",title:"Account Enable",pagination_label:"Account Enable",sidebar_label:"Account Enable",keywords:["connectivity","connectors","Account Enable"],description:"Intercept the account enable command.",slug:"/connectivity/saas-connectivity/customizers/commands/account-enable",tags:["Connectivity","Connector Command"]},i=void 0,l={unversionedId:"connectivity/saas-connectivity/connector-customizers/customizer-commands/account-enable-customizer",id:"connectivity/saas-connectivity/connector-customizers/customizer-commands/account-enable-customizer",title:"Account Enable",description:"Intercept the account enable command.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-enable.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers/customizer-commands",slug:"/connectivity/saas-connectivity/customizers/commands/account-enable",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-enable",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-enable.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"},{label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"darrell-thobe-sp",lastUpdatedAt:1709674012,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{id:"account-enable-customizer",title:"Account Enable",pagination_label:"Account Enable",sidebar_label:"Account Enable",keywords:["connectivity","connectors","Account Enable"],description:"Intercept the account enable command.",slug:"/connectivity/saas-connectivity/customizers/commands/account-enable",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Account Disable",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-disable"},next:{title:"Account List",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-list"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Example StdAccountEnableInput",id:"example-stdaccountenableinput",level:3},{value:"Example StdAccountEnableOutput",id:"example-stdaccountenableoutput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before account-enable command",id:"before-account-enable-command",level:3},{value:"After account-enable command",id:"after-account-enable-command",level:3}],r={toc:u},m="wrapper";function d(t){let{components:e,...n}=t;return(0,c.kt)(m,(0,a.Z)({},r,n,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"overview"},"Overview"),(0,c.kt)("p",null,"Use these commands to intercept the ",(0,c.kt)("a",{parentName:"p",href:"../../commands/account-enable"},"account-enable")," command."),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"left"},"Input/Output"),(0,c.kt)("th",{parentName:"tr",align:"center"},"Data Type"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"left"},"Input"),(0,c.kt)("td",{parentName:"tr",align:"center"},"StdAccountEnableInput")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"left"},"Output"),(0,c.kt)("td",{parentName:"tr",align:"center"},"StdAccountEnableOutput")))),(0,c.kt)("h3",{id:"example-stdaccountenableinput"},"Example StdAccountEnableInput"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},'"identity": "john.doe",\n"key": {\n    "simple": {\n        "id": "john.doe"\n    }\n}\n')),(0,c.kt)("h3",{id:"example-stdaccountenableoutput"},"Example StdAccountEnableOutput"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n')),(0,c.kt)("h2",{id:"implementation"},"Implementation"),(0,c.kt)("h3",{id:"before-account-enable-command"},"Before account-enable command"),(0,c.kt)("p",null,"Use this logic to implement the command: "),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},"    .beforeStdAccountEnable(async (context: Context, input: StdAccountEnableInput) => {\n        logger.info(`Running before account, for account ${input.identity}`)\n        return input\n    })\n")),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"input")," object can be mutated and returned, but the same data type must still be returned."),(0,c.kt)("h3",{id:"after-account-enable-command"},"After account-enable command"),(0,c.kt)("p",null,"Use this logic to implement the command: "),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},"    .afterStdAccountEnable(async (context: Context, output: StdAccountEnableOutput) => {\n        logger.info(`Running after account enable for account ${output.identity}`)\n        return output\n    })\n")),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"output")," object can be mutated and returned, but the same data type must still be returned."))}d.isMDXComponent=!0}}]);