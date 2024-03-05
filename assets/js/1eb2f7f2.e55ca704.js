"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[8085],{72585:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var a=t(87462),l=(t(67294),t(3905));const n={id:"cli-sanitize",title:"Sanitize",pagination_label:"CLI-Sanitize",sidebar_label:"Sanitize",sidebar_position:2,sidebar_class_name:"cli",keywords:["cli","sanitize"],description:"Learn how to use the CLI to sanitize your HAR files in this guide.",slug:"/tools/cli/sanitize",tags:["CLI"]},s=void 0,o={unversionedId:"tools/cli/cli-sanitize",id:"tools/cli/cli-sanitize",title:"Sanitize",description:"Learn how to use the CLI to sanitize your HAR files in this guide.",source:"@site/docs/tools/cli/sanitize.md",sourceDirName:"tools/cli",slug:"/tools/cli/sanitize",permalink:"/docs/tools/cli/sanitize",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/cli/sanitize.md",tags:[{label:"CLI",permalink:"/docs/tags/cli"}],version:"current",lastUpdatedBy:"darrell-thobe-sp",lastUpdatedAt:1709674012,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:2,frontMatter:{id:"cli-sanitize",title:"Sanitize",pagination_label:"CLI-Sanitize",sidebar_label:"Sanitize",sidebar_position:2,sidebar_class_name:"cli",keywords:["cli","sanitize"],description:"Learn how to use the CLI to sanitize your HAR files in this guide.",slug:"/tools/cli/sanitize",tags:["CLI"]},sidebar:"openApiSidebar",previous:{title:"CLI Connectors",permalink:"/docs/tools/cli/connectors"},next:{title:"CLI-Search",permalink:"/docs/tools/cli/search"}},r={},c=[{value:"Sanitize",id:"sanitize",level:2},{value:"Functionality",id:"functionality",level:3},{value:"Command",id:"command",level:3}],u={toc:c},p="wrapper";function d(e){let{components:i,...t}=e;return(0,l.kt)(p,(0,a.Z)({},u,t,{components:i,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"sanitize"},"Sanitize"),(0,l.kt)("p",null,"Learn how to use the CLI to sanitize your HAR files in this guide."),(0,l.kt)("p",null,"When you're troubleshooting issues you encounter using Identity Security Cloud, some of the most helpful data can be contained in a HAR file collected from your browser's API calls made while replicating the issue."),(0,l.kt)("p",null,"The problem lies in the amount of information, specifically sensitive information that the HAR file contains, due to the nature of the data it's capturing. The CLI is very useful for this. You can use the CLI to sanitize the HAR file, which removes sensitive information but still still leaves the file in a useful state for troubleshooting the issue."),(0,l.kt)("p",null,"The existing support guide for collecting and sanitizing the HAR file ",(0,l.kt)("a",{parentName:"p",href:"https://support.sailpoint.com/csm?id=kb_article_view&sysparm_article=KB0011711#_gl=1*17esz5f*_gcl_au*MTczOTU0NDU4NC4xNjkxNjc5NzY2"},"can be found here"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#sanitize"},"Sanitize"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#functionality"},"Functionality")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#command"},"Command"))))),(0,l.kt)("h3",{id:"functionality"},"Functionality"),(0,l.kt)("p",null,"The sanitize command sanitizes a HAR file of sensitive data.\nIt only removes access tokens matching the Identity Security Cloud format and origin urls similar to the examples below:"),(0,l.kt)("p",null,"Access Token"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiI1OGViMDZhNC1kY2Q3LTRlOTYtOGZhYy1jY2EyYWZjMDNlNjEiLCJpbnRlcm5hbCI6dHJ1ZSwicG9kIjoiY29vayIsIm9yZyI6ImV4YW1wbGUiLCJpZGVudGl0eV9pZCI6ImZmODA4MTgxNTVmZThjMDgwMTU1ZmU4ZDkyNWIwMzE2IiwidXNlcl9uYW1lIjoic2xwdC5zZXJ2aWNlcyIsInN0cm9uZ19hdXRoIjp0cnVlLCJhdXRob3JpdGllcyI6WyJPUkdfQURNSU4iXSwiY2xpZW50X2lkIjoibktCUE93akpIOExYU2pJbCIsInN0cm9uZ19hdXRoX3N1cHBvcnRlZCI6dHJ1ZSwidXNlcl9pZCI6IjU5NTgyNiIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE1NjU4ODgzMTksImp0aSI6ImM5OGQxMjM2LTQ1MTMtNGM4OS1hMGQwLTBjYjlmMzI3NmI1NiJ9.SAY4ZQkXGi2cY_qz57Ah9_zDq4-bnF-oDJKotXa-LCY\n")),(0,l.kt)("p",null,"Origin URLs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "origin",\n    "value": "https://example.identitynow.com"\n}\n')),(0,l.kt)("h3",{id:"command"},"Command"),(0,l.kt)("p",null,"To use the CLI to sanitize HAR files, you can run this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sail sanitize ./path/to/har/file.har\n")),(0,l.kt)("p",null,"You can also sanitize multiple files at once:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sail sanitize ./path/to/har/file1.har ./path/to/har/file2.har ./path/to/har/file3.har\n")))}d.isMDXComponent=!0}}]);