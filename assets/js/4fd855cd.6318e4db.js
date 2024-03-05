"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[72172],{66556:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var o=t(87462),a=(t(67294),t(3905));const i={id:"logging",title:"Logging",pagination_label:"Logging",sidebar_label:"Logging",sidebar_position:5,sidebar_class_name:"logging",keywords:["connectivity","connectors","logging"],description:"You can use this feature to read the logs of your connectors.",slug:"/connectivity/saas-connectivity/in-depth/logging",tags:["Connectivity"]},s=void 0,c={unversionedId:"connectivity/saas-connectivity/in-depth/logging",id:"connectivity/saas-connectivity/in-depth/logging",title:"Logging",description:"You can use this feature to read the logs of your connectors.",source:"@site/docs/connectivity/saas-connectivity/in-depth/logging.md",sourceDirName:"connectivity/saas-connectivity/in-depth",slug:"/connectivity/saas-connectivity/in-depth/logging",permalink:"/docs/connectivity/saas-connectivity/in-depth/logging",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/in-depth/logging.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"}],version:"current",lastUpdatedBy:"darrell-thobe-sp",lastUpdatedAt:1709674012,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:5,frontMatter:{id:"logging",title:"Logging",pagination_label:"Logging",sidebar_label:"Logging",sidebar_position:5,sidebar_class_name:"logging",keywords:["connectivity","connectors","logging"],description:"You can use this feature to read the logs of your connectors.",slug:"/connectivity/saas-connectivity/in-depth/logging",tags:["Connectivity"]},sidebar:"openApiSidebar",previous:{title:"Linting",permalink:"/docs/connectivity/saas-connectivity/in-depth/linting"},next:{title:"Handling Rate Limits",permalink:"/docs/connectivity/saas-connectivity/in-depth/handling-rate-limits"}},l={},r=[{value:"Printing Logs with the CLI",id:"printing-logs-with-the-cli",level:2},{value:"Logging with console.log",id:"logging-with-consolelog",level:2},{value:"Logging using the SDK",id:"logging-using-the-sdk",level:2},{value:"Configuring the SDK to Mask Sensitive Values",id:"configuring-the-sdk-to-mask-sensitive-values",level:2}],d={toc:r},g="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(g,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"printing-logs-with-the-cli"},"Printing Logs with the CLI"),(0,a.kt)("p",null,"Fetch logs from ISC by issuing the ",(0,a.kt)("inlineCode",{parentName:"p"},"sail conn logs")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ sail conn logs\n\n[2022-07-14T11:04:24.276-04:00] ERROR | connectorMessage \u25b6\ufe0e {"commandType":"std:test-connection","invocationId":"49213a1c-0ba5-48f4-bceb-b6b5b0ec18d5","message":"Connector error ConnectorError: unable to connect, check your connection parameters and API key\\n    at /app/index.js:1:441187\\n    at runMicrotasks (\\u003canonymous\\u003e)\\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)\\n    at async /app/index.js:1:441923\\n    at async Connector._exec (/app/index.js:1:5872)\\n    at async /usr/bin/index.js:1:77407 {\\n  type: \'generic\'\\n}\\n","requestId":"cca732a2-084d-4433-9bd5-ed22fa397d8d","version":2}\n[2022-07-14T11:04:24.310-04:00] INFO  | commandOutcome   \u25b6\ufe0e {"commandType":"std:test-connection","completed":true,"elapsed":62,"error":"[ConnectorError] unable to connect, check your connection parameters and API key","message":"command failed","requestId":"cca732a2-084d-4433-9bd5-ed22fa397d8d","version":2}\n[2022-07-14T11:04:24.442-04:00] INFO  | invokeCommand    \u25b6\ufe0e Command execution started : std:test-connection, for connector version 29.\n[2022-07-14T11:04:24.442-04:00] INFO  | invokeCommand    \u25b6\ufe0e Command invocation complete : std:test-connection, for connector version: 29. Elapsed time 144.178\xb5s\n[2022-07-14T11:04:24.812-04:00] INFO  | commandOutcome   \u25b6\ufe0e {"commandType":"std:test-connection","completed":true,"elapsed":369,"message":"command completed","requestId":"cca732a2-084d-4433-9bd5-ed22fa397d8d","version":29}\n[2022-07-14T11:04:24.890-04:00] INFO  | invokeCommand    \u25b6\ufe0e Command execution started : std:test-connection, for connector version 8.\n[2022-07-14T11:04:24.890-04:00] INFO  | invokeCommand    \u25b6\ufe0e Command invocation complete : std:test-connection, for connector version: 8. Elapsed time 125.749\xb5s\n[2022-07-14T11:04:24.941-04:00] INFO  | commandOutcome   \u25b6\ufe0e {"commandType":"std:test-connection","completed":true,"elapsed":49,"message":"command completed","requestId":"cca732a2-084d-4433-9bd5-ed22fa397d8d","version":8}\n')),(0,a.kt)("p",null,"To tail the logs to see output as it happens, execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"sail conn logs tail")," command."),(0,a.kt)("p",null,"It can also be helpful to execute the logs command along with grep to filter your results to a specific connector or text:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sail conn logs | grep 'connector version 29'\n[2022-07-14T11:04:24.442-04:00] INFO  | invokeCommand    \u25b6\ufe0e Command execution started : std:test-connection, for connector version 29.\n")),(0,a.kt)("h2",{id:"logging-with-consolelog"},"Logging with console.log"),(0,a.kt)("p",null,"anywhere that you use console.log in your code will expose the output to the logs. The following example has a printed statement in the index.ts file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Connector must be exported as module property named connector\nexport const connector = async () => {\n\n...\n    // Use the vendor SDK, or implement own client as necessary, to initialize a client\n    const airtable = new AirtableClient(config)\n    return createConnector()\n        .stdTestConnection(async (context: Context, input: undefined, res: Response<StdTestConnectionOutput>) => {\n            // print the output to the console\n            console.log('testing connector logging')\n            res.send(await airtable.testConnection())\n        })\n\n...\n\n")),(0,a.kt)("p",null,"When you run the ",(0,a.kt)("inlineCode",{parentName:"p"},"sail conn logs")," command, you will see the following in the output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ sail conn logs tail\n\n[2022-07-14T11:23:05.418-04:00] INFO  | connectorMessage \u25b6\ufe0e {"commandType":"std:test-connection","invocationId":"e5c73502-2c03-4b22-aa0d-5b67655e8f2d","message":"testing connector logging\\n","requestId":"93370aa663d94bebb509bf5661f18650","version":9}\n[2022-07-14T11:23:06.085-04:00] INFO  | commandOutcome   \u25b6\ufe0e {"commandType":"std:test-connection","completed":true,"elapsed":1071,"message":"command completed","requestId":"93370aa663d94bebb509bf5661f18650","version":9}\n')),(0,a.kt)("h2",{id:"logging-using-the-sdk"},"Logging using the SDK"),(0,a.kt)("p",null,"Use the built in logging tool to simplify the logging process and enhance your logger\u2019s capabilities. To start, import the logger from the sdk:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import { logger as SDKLogger } from '@sailpoint/connector-sdk'")),(0,a.kt)("p",null,"Next, add a simple configuration for the logger to use throughout your application."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/logger/logger.ts"},"logger.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {logger as SDKLogger} from '@sailpoint/connector-sdk';\n\nexport const logger = SDKLogger.child(\n  // specify your connector name\n  {connectorName: 'Airtable'},\n);\n")),(0,a.kt)("p",null,"Now you can import your logger into your project and start logging."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts"},"index.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// Connector must be exported as module property named connector\nexport const connector = async () => {\n\n...\n    // Use the vendor SDK, or implement own client as necessary, to initialize a client\n    const airtable = new AirtableClient(config)\n    return createConnector()\n        .stdAccountList(async (context: Context, input: undefined, res: Response<StdAccountListOutput>) => {\n            const accounts = await airtable.getAllAccounts()\n\n            // use the logger to send accounts that are fetched\n            logger.info(accounts, "fetched the following accounts from Airtable")\n            for (const account of accounts) {\n                res.send(account.toStdAccountListOutput())\n            }\n        })\n\n...\n\n')),(0,a.kt)("h2",{id:"configuring-the-sdk-to-mask-sensitive-values"},"Configuring the SDK to Mask Sensitive Values"),(0,a.kt)("p",null,"The SDK Logger uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pinojs/pino"},"Pino")," under the hood, which has the built-in capability to search and remove json paths that can contain sensitive information."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udea7 Never expose any Personal Identifiable Information in any logging operations.")),(0,a.kt)("p",null,"Start by looking at line 116 to 122 in your logger configuration, which looks like the one below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {logger as SDKLogger} from '@sailpoint/connector-sdk';\n\nexport const logger = SDKLogger.child(\n  // specify your connector name\n  {connectorName: 'Airtable'},\n  // This is optional for  removing specific information you might not want to be logged\n  {\n    redact: {\n      paths: [\n        '*.password',\n        '*.username',\n        '*.email',\n        '*.id',\n        '*.firstName',\n        '*.lastName',\n        '*.displayName',\n      ],\n      censor: '****',\n    },\n  },\n);\n")),(0,a.kt)("p",null,"Now compare that with the object you want to remove information from while still logging information in it:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/models/AirtableAccount.ts"},"AirtableAccount.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"export class AirtableAccount {\n    airtableId!: string\n    displayName!: string\n    email!: string\n    id!: string\n    department!: string\n    firstName!: string\n    lastName!: string\n    enabled = true\n    locked = false\n    password!: string\n    entitlments!: Array<string>\n}\n")),(0,a.kt)("p",null,"Now when you log the contents of an ",(0,a.kt)("inlineCode",{parentName:"p"},"AirtableAccount")," object, you will see all the fields redacted. For example, in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts"},"index.ts")," we log the ",(0,a.kt)("inlineCode",{parentName:"p"},"accounts")," in the following code snippet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'.stdAccountList(async (context: Context, input: undefined, res: Response<StdAccountListOutput>) => {\n    const accounts = await airtable.getAllAccounts()\n\n    logger.info(accounts, "fetched the following accounts from Airtable")\n    for (const account of accounts) {\n        res.send(account.toStdAccountListOutput())\n    }\n})\n')),(0,a.kt)("p",null,"which results in the following log output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ sail conn logs\n\n[2022-07-14T11:19:29.368-04:00] INFO  | invokeCommand    \u25b6\ufe0e Command invocation complete : std:account:list, for connector version: 8. Elapsed time 111.836542ms\n[2022-07-14T11:19:30.629-04:00] INFO  | connectorMessage \u25b6\ufe0e {"0":{"airtableId":"recdUN76q9KibYMir","department":"sailpoint admins","displayName":"****","email":"****","enabled":true,"entitlments":["administrator","sailpoint"],"firstName":"****","id":"****","lastName":"****","locked":false},"1":{"airtableId":"recXJEzpeySmtlIOF","department":"external","displayName":"****","email":"****","enabled":true,"entitlments":["administrator"],"firstName":"****","id":"****","lastName":"****","locked":false},"2":{"airtableId":"recnsv3VJ1K4k867v","department":"external","displayName":"****","email":"****","enabled":true,"entitlments":[""],"firstName":"****","id":"****","lastName":"****","locked":false},"commandType":"std:account:list","connectorName":"Airtable","invocationId":"541bcc2f-1d42-4c78-b201-de3ea46552e0","message":"fetched the following accounts from Airtable","requestId":"379a8a4510944daf9d02b51a29ae863e","version":8}\n[2022-07-14T11:19:30.678-04:00] INFO  | commandOutcome   \u25b6\ufe0e {"commandType":"std:account:list","completed":true,"elapsed":1290,"message":"command completed","requestId":"379a8a4510944daf9d02b51a29ae863e","version":8}\n')),(0,a.kt)("p",null,'You can see that any of the PII information has now been transformed into "',"*","*","*","*",'"'))}p.isMDXComponent=!0}}]);