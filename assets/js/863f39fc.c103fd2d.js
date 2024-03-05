"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[61345],{78705:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=a(87462),l=(a(67294),a(3905));const i={id:"cli-spconfig",title:"SP Config",pagination_label:"CLI-SPConfig",sidebar_label:"SPConfig",sidebar_position:5,sidebar_class_name:"cli-spconfig",keywords:["cli","spconfig"],description:"Learn how to use the CLI to SPConfig.",slug:"/tools/cli/spconfig",tags:["CLI"]},n=void 0,s={unversionedId:"tools/cli/cli-spconfig",id:"tools/cli/cli-spconfig",title:"SP Config",description:"Learn how to use the CLI to SPConfig.",source:"@site/docs/tools/cli/spconfig.md",sourceDirName:"tools/cli",slug:"/tools/cli/spconfig",permalink:"/docs/tools/cli/spconfig",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/cli/spconfig.md",tags:[{label:"CLI",permalink:"/docs/tags/cli"}],version:"current",lastUpdatedBy:"darrell-thobe-sp",lastUpdatedAt:1709674012,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:5,frontMatter:{id:"cli-spconfig",title:"SP Config",pagination_label:"CLI-SPConfig",sidebar_label:"SPConfig",sidebar_position:5,sidebar_class_name:"cli-spconfig",keywords:["cli","spconfig"],description:"Learn how to use the CLI to SPConfig.",slug:"/tools/cli/spconfig",tags:["CLI"]},sidebar:"openApiSidebar",previous:{title:"CLI-Set",permalink:"/docs/tools/cli/set"},next:{title:"CLI Transforms",permalink:"/docs/tools/cli/transforms"}},r={},p=[{value:"SPConfig",id:"spconfig",level:2},{value:"Commands",id:"commands",level:2},{value:"Download",id:"download",level:3},{value:"Flags",id:"flags",level:4},{value:"Import",id:"import",level:3},{value:"Flags",id:"flags-1",level:4},{value:"Export",id:"export",level:3},{value:"Flags",id:"flags-2",level:4},{value:"Status",id:"status",level:3},{value:"Flags",id:"flags-3",level:4},{value:"Template",id:"template",level:3},{value:"Flags",id:"flags-4",level:4}],d={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"spconfig"},"SPConfig"),(0,l.kt)("p",null,"Learn how to use the CLI to import and export configurations."),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/beta/sp-config"},"SP Config APIs")," to import configurations into ISC and export them out."),(0,l.kt)("p",null,"With the ",(0,l.kt)("inlineCode",{parentName:"p"},"spconfig")," command, you can access the same functionality."),(0,l.kt)("h2",{id:"commands"},"Commands"),(0,l.kt)("p",null,"To perform SPConfig operations, you can run these commands:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#spconfig"},"SPConfig")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#commands"},"Commands"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#download"},"Download"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#flags"},"Flags")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#import"},"Import"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#flags-1"},"Flags")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#export"},"Export"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#flags-2"},"Flags")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#status"},"Status"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#flags-3"},"Flags")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#template"},"Template"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#flags-4"},"Flags"))))))),(0,l.kt)("h3",{id:"download"},"Download"),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"download")," command to download import and export job results from ISC. The ",(0,l.kt)("inlineCode",{parentName:"p"},"download")," command is specified differently for ",(0,l.kt)("strong",{parentName:"p"},"Linux/Mac")," and ",(0,l.kt)("strong",{parentName:"p"},"Windows"),", respectively."),(0,l.kt)("p",null,"To download import and export job results from ISC on ",(0,l.kt)("strong",{parentName:"p"},"Linux/Mac"),", run this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sail spconfig download \\\n  --export {export job ID} \\\n  --export {export job ID}\n")),(0,l.kt)("p",null,"To download import and export job results from ISC on ",(0,l.kt)("strong",{parentName:"p"},"Windows"),", run this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sail spconfig download \\\n  --export {export job ID} \\\n  --import {import job ID}\n")),(0,l.kt)("h4",{id:"flags"},"Flags"),(0,l.kt)("p",null,"You can add these flags to the ",(0,l.kt)("inlineCode",{parentName:"p"},"download")," command:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"import"),": Add this flag to specify the import job ID to download."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export"),": Add this flag to specify the export job ID to download."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"folderPath"),": Add this flag to specify the folder path to save the download in. If the directory doesn't exist, the CLI creates it. The default folder path is the current working directory.")),(0,l.kt)("h3",{id:"import"},"Import"),(0,l.kt)("p",null,"To begin an import task in ISC, run this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sail spconfig import \\\n  --filePath path/to/the/import/file\n")),(0,l.kt)("h4",{id:"flags-1"},"Flags"),(0,l.kt)("p",null,"You can add these flags to the ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," command:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"folderPath"),": Add this flag to specify the folder path to save the import job in. If the directory doesn't exist, the CLI creates it. The default folder path is the current working directory.")),(0,l.kt)("h3",{id:"export"},"Export"),(0,l.kt)("p",null,"To begin an export task in ISC, run this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'sail spconfig export \\\n  --include {types to include} \\\n  --exclude {types to exclude} \\\n  --description "optional description for the export job"\n')),(0,l.kt)("h4",{id:"flags-2"},"Flags"),(0,l.kt)("p",null,"You can add these flags to the ",(0,l.kt)("inlineCode",{parentName:"p"},"export")," command:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"include"),": Add this flag to specify the types to include in the export job."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"exclude"),": Add this flag to specify the types to exclude from the export job."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"description"),": Add this flag to provide an optional description for the export job."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"folderPath"),": Use this flag to specify the folder path you want to save the export job in. If the directory doesn't exist, the CLI creates it. The default folder path is the current working directory."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wait"),": Use this boolean to specify whether the CLI should wait for the export job to finish before downloading the results. This flag is false by default. Setting it to true sets the CLI to wait until the job finishes before downloading the results.")),(0,l.kt)("h3",{id:"status"},"Status"),(0,l.kt)("p",null,"To check the status of import and export jobs in ISC, run this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sail spconfig status --import {import job ID to check} --export {export job ID to check}\n")),(0,l.kt)("h4",{id:"flags-3"},"Flags"),(0,l.kt)("p",null,"You can add these flags to the ",(0,l.kt)("inlineCode",{parentName:"p"},"status")," command:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"import"),": Add this flag to specify a list of import job IDs to check the status of. This examples shows how"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export"),": Add this flag to specify a list of export job IDs to check the status of.")),(0,l.kt)("h3",{id:"template"},"Template"),(0,l.kt)("p",null,"To begin exporting a template from ISC, run this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sail spconfig template\n")),(0,l.kt)("h4",{id:"flags-4"},"Flags"),(0,l.kt)("p",null,"You can add these flags to the ",(0,l.kt)("inlineCode",{parentName:"p"},"template")," command:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"folderPath"),": Use this flag to specify the folder path you want to save the template in. If the directory doesn't exist, the CLI creates it. The default folder path is the current working directory."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wait"),": Use this boolean to specify whether the CLI should wait for the export job to finish before downloading the results. This flag is false by default. Setting it to true sets the CLI to wait until the job finishes before downloading the results.")))}u.isMDXComponent=!0}}]);