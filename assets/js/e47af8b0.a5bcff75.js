"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[17147],{22326:(t,n,c)=>{c.r(n),c.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var e=c(87462),o=(c(67294),c(3905));const a={id:"account-unlock",title:"Account Unlock",pagination_label:"Account Unlock",sidebar_label:"Account Unlock",keywords:["connectivity","connectors","account unlock"],description:"Lock and unlock an account on the source.",slug:"/connectivity/saas-connectivity/commands/account-unlock",tags:["Connectivity","Connector Command"]},i=void 0,l={unversionedId:"connectivity/saas-connectivity/connector-commands/account-unlock",id:"connectivity/saas-connectivity/connector-commands/account-unlock",title:"Account Unlock",description:"Lock and unlock an account on the source.",source:"@site/docs/connectivity/saas-connectivity/connector-commands/account-unlock.md",sourceDirName:"connectivity/saas-connectivity/connector-commands",slug:"/connectivity/saas-connectivity/commands/account-unlock",permalink:"/docs/connectivity/saas-connectivity/commands/account-unlock",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-commands/account-unlock.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"},{label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"darrell-thobe-sp",lastUpdatedAt:1709674012,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{id:"account-unlock",title:"Account Unlock",pagination_label:"Account Unlock",sidebar_label:"Account Unlock",keywords:["connectivity","connectors","account unlock"],description:"Lock and unlock an account on the source.",slug:"/connectivity/saas-connectivity/commands/account-unlock",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Account Read",permalink:"/docs/connectivity/saas-connectivity/commands/account-read"},next:{title:"Account Update",permalink:"/docs/connectivity/saas-connectivity/commands/account-update"}},u={},s=[{value:"Example StdAccountUnlockInput",id:"example-stdaccountunlockinput",level:3},{value:"Example StdAccountUnlockOutput",id:"example-stdaccountunlockoutput",level:3},{value:"Description",id:"description",level:2}],d={toc:s},r="wrapper";function p(t){let{components:n,...c}=t;return(0,o.kt)(r,(0,e.Z)({},d,c,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Input/Output"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Data Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Input"),(0,o.kt)("td",{parentName:"tr",align:"center"},"StdAccountUnlockInput")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Output"),(0,o.kt)("td",{parentName:"tr",align:"center"},"StdAccountUnlockOutput")))),(0,o.kt)("h3",{id:"example-stdaccountunlockinput"},"Example StdAccountUnlockInput"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'"identity": "john.doe",\n"key": {\n    "simple": {\n        "id": "john.doe"\n    }\n}\n')),(0,o.kt)("h3",{id:"example-stdaccountunlockoutput"},"Example StdAccountUnlockOutput"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n')),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The account lock and account unlock commands provide ways to temporarily prevent access to an account. ISC only supports the unlock command, so accounts must be locked on the source level, but they can be unlocked through ISC, and ISC can store the account's status."),(0,o.kt)("p",null,"Implementing account unlock is similar to the other commands that update attributes on an account. The following code unlocks an account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},".stdAccountUnlock(async (context: Context, input: StdAccountUnlockInput, res: Response<StdAccountUnlockOutput>) => {\n    let account = await airtable.getAccount(input.key)\n    const change: AttributeChange = {\n        op: AttributeChangeOp.Set,\n        attribute: 'locked',\n        value: 'false'\n    }\n    account = await airtable.changeAccount(account, change)\n    res.send(account.toStdAccountUnlockOutput())\n})\n")))}p.isMDXComponent=!0}}]);