"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[1962],{26916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(87462),s=(n(67294),n(3905));const o={id:"connectivity-customizers-linking",title:"Linking a customizer to a connector",pagination_label:"Linking to a Source",sidebar_label:"Linking to a Source",sidebar_position:6,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"Link connectivity customizers to sources.",slug:"/connectivity/saas-connectivity/customizers/linking",tags:["Connectivity"]},c="Linking a connectivity customizer to a source",a={unversionedId:"connectivity/saas-connectivity/connector-customizers/connectivity-customizers-linking",id:"connectivity/saas-connectivity/connector-customizers/connectivity-customizers-linking",title:"Linking a customizer to a connector",description:"Link connectivity customizers to sources.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/link.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers",slug:"/connectivity/saas-connectivity/customizers/linking",permalink:"/docs/connectivity/saas-connectivity/customizers/linking",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/link.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"}],version:"current",lastUpdatedBy:"darrell-thobe-sp",lastUpdatedAt:1709674012,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:6,frontMatter:{id:"connectivity-customizers-linking",title:"Linking a customizer to a connector",pagination_label:"Linking to a Source",sidebar_label:"Linking to a Source",sidebar_position:6,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"Link connectivity customizers to sources.",slug:"/connectivity/saas-connectivity/customizers/linking",tags:["Connectivity"]},sidebar:"openApiSidebar",previous:{title:"Build and Upload",permalink:"/docs/connectivity/saas-connectivity/customizers/upload"},next:{title:"Testing and Debugging",permalink:"/docs/connectivity/saas-connectivity/customizers/testing"}},r={},l=[{value:"Initial requirements",id:"initial-requirements",level:3},{value:"Link to a source",id:"link-to-a-source",level:3},{value:"Unlink from a source",id:"unlink-from-a-source",level:3}],u={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"linking-a-connectivity-customizer-to-a-source"},"Linking a connectivity customizer to a source"),(0,s.kt)("h3",{id:"initial-requirements"},"Initial requirements"),(0,s.kt)("p",null,"Before you can link a connector customizer to a source, you must have a SaaS source in Identity Security Cloud, as well as a Customizer built and deployed. You can use the following commands to get a list of valid sources, as well as customizers:"),(0,s.kt)("p",null,"Use this command to find sources:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sail conn instances list\n")),(0,s.kt)("p",null,"This similar looking list of instances will be returned:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"+--------------------------------------+--------------------------+---------------+\n|                  ID                  |           NAME           | CUSTOMIZER ID |\n+--------------------------------------+--------------------------+---------------+\n| 0327d0a4-5e94-4803-90a6-c0819349ecca | airtable test            |               |\n| 05da3fa2-17f0-4bd4-9e2a-ab93d7dffe68 | Discourse                |               |\n| 069b9398-8ed9-433d-943f-3cb32952524f | github                   |               |\n| 0dbb53b0-2e62-4a8e-9efe-97555755025d | Smartsheet               |               |\n| edfc9bfb-b55c-482f-b1aa-b4d51caf7558 | Discourse-Current-V2     |               |\n+--------------------------------------+--------------------------+---------------+\n")),(0,s.kt)("p",null,"Use this command to find customizers:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sail conn customizers list\n")),(0,s.kt)("p",null,"This similar looking list of customizers will be returned:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"+--------------------------------------+---------------------+---------+\n|                  ID                  |        NAME         | VERSION |\n+--------------------------------------+---------------------+---------+\n| 7b968fab-0f40-49f0-b13b-8bf529fc0b82 | airtable-customizer |       1 |\n+--------------------------------------+---------------------+---------+\n")),(0,s.kt)("h3",{id:"link-to-a-source"},"Link to a source"),(0,s.kt)("p",null,"To link a source to a customizer, find the source ID in the instance list and a customizer from the customizer list. Then issue this command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sail conn customizers link -i edfc9bfb-b55c-482f-b1aa-b4d51caf7558 -c 7b968fab-0f40-49f0-b13b-8bf529fc0b82\n")),(0,s.kt)("p",null,"The output will indicate that the customizer has succesfully linked to the connector instance:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"+--------------------------------------+----------------------+--------------------------------------+\n|                  ID                  |         NAME         |            CUSTOMIZER ID             |\n+--------------------------------------+----------------------+--------------------------------------+\n| edfc9bfb-b55c-482f-b1aa-b4d51caf7558 | Discourse-Current-V2 | 7b968fab-0f40-49f0-b13b-8bf529fc0b82 |\n+--------------------------------------+----------------------+--------------------------------------+\n")),(0,s.kt)("h3",{id:"unlink-from-a-source"},"Unlink from a source"),(0,s.kt)("p",null,"To unlink a customizer from a source, issue the unlink command and pass the source instance ID: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sail conn customizers unlink -i edfc9bfb-b55c-482f-b1aa-b4d51caf7558\n")))}m.isMDXComponent=!0}}]);