"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[53253],{67792:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=s(87462),i=(s(67294),s(3905));const r={id:"typescript-sdk-getting-started",title:"Getting Started with The TypeScript SDK",pagination_label:"Getting Started",sidebar_label:"Getting Started",sidebar_position:1,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","start"],description:"Learn how to use the TypeScript SDK in this guide.",slug:"/tools/sdk/typescript/getting-started",tags:["SDK"]},a=void 0,o={unversionedId:"tools/sdk/typescript/typescript-sdk-getting-started",id:"tools/sdk/typescript/typescript-sdk-getting-started",title:"Getting Started with The TypeScript SDK",description:"Learn how to use the TypeScript SDK in this guide.",source:"@site/docs/tools/sdk/typescript/getting-started.md",sourceDirName:"tools/sdk/typescript",slug:"/tools/sdk/typescript/getting-started",permalink:"/docs/tools/sdk/typescript/getting-started",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/typescript/getting-started.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"darrell-thobe-sp",lastUpdatedAt:1709674012,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:1,frontMatter:{id:"typescript-sdk-getting-started",title:"Getting Started with The TypeScript SDK",pagination_label:"Getting Started",sidebar_label:"Getting Started",sidebar_position:1,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","start"],description:"Learn how to use the TypeScript SDK in this guide.",slug:"/tools/sdk/typescript/getting-started",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"TypeScript SDK",permalink:"/docs/tools/sdk/typescript"},next:{title:"Create a resource",permalink:"/docs/tools/sdk/typescript/create"}},p={},l=[{value:"List Transforms in your tenant",id:"list-transforms-in-your-tenant",level:3},{value:"Use query parameters to filter your tenant&#39;s transform list",id:"use-query-parameters-to-filter-your-tenants-transform-list",level:3}],d={toc:l},c="wrapper";function u(t){let{components:e,...s}=t;return(0,i.kt)(c,(0,n.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Once your SDK is installed and configured, you can start accessing the SDK's different functionalities. To learn how to install and configure the Typescript SDK, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/tools/sdk/typescript"},"Installation and Configuration"),"."),(0,i.kt)("p",null,"This guide will walk through some examples of this functionality."),(0,i.kt)("p",null,"To make sure that your SDK is connecting to the APIs you need, you can specify the API within the curly brackets in ",(0,i.kt)("inlineCode",{parentName:"p"},"import {}"),' at the top of the "index.ts" file. In this example, you could add ',(0,i.kt)("inlineCode",{parentName:"p"},"Configuration")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TransformsApi")," to add the functionality to list transforms."),(0,i.kt)("h3",{id:"list-transforms-in-your-tenant"},"List Transforms in your tenant"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import {Configuration, TransformsApi} from "sailpoint-api-client"\n\nconst getTransforms = async() => {\n    // Initialize configuration, this requests a token using your configured credentials \n    // to be able to call out to APIs\n    let apiConfig = new Configuration()\n\n    // Initialize the TransformsApi, this creates an instance of the TransformsApi.\n    // The configuration object is passed in so that the API can add your token to the request\n    let api = new TransformsApi(apiConfig)\n\n    // Call out to your tenant to get the list of transforms.\n    let transforms = await api.listTransforms()\n    console.log(transforms)\n}\n\ngetTransforms()\n')),(0,i.kt)("p",null,"To compile the file, first run the ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc src/index.ts")," command. This command creates a corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")," file you can use to run the SDK."),(0,i.kt)("p",null,"To run the SDK, run the ",(0,i.kt)("inlineCode",{parentName:"p"},"node src/index.js")," command. This command sends the request and outputs a list of transforms stored in your tenant."),(0,i.kt)("h3",{id:"use-query-parameters-to-filter-your-tenants-transform-list"},"Use query parameters to filter your tenant's transform list"),(0,i.kt)("p",null,'Using the same SDK function, you can list your transforms but limit the results to only what you want. This example wants a list of no more than 10 transforms that start with the name "Test":'),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/docs/api/v3/list-transforms"},"List Transforms")," for all its supported query parameters."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import {Configuration, TransformsApi} from "sailpoint-api-client"\n\nconst getTransforms = async() => {\n    let apiConfig = new Configuration()\n    let api = new TransformsApi(apiConfig)\n    let transforms = await api.listTransforms({limit: 10, filters: \'name sw "Test"\'})\n    console.log(transforms)\n}\n\ngetTransforms()\n')),(0,i.kt)("p",null,"Run this command to compile and run the code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tsc src/index.ts && node src/index.js\n")))}u.isMDXComponent=!0}}]);