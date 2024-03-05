"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[62042],{39586:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>n,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var l=s(87462),o=(s(67294),s(3905));const r={id:"powershell-sdk-delete",title:"Deleting resources with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Delete a resource",sidebar_position:4,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","delete"],description:"Learn how to delete resources using the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/delete",tags:["SDK"]},a=void 0,i={unversionedId:"tools/sdk/powershell/powershell-sdk-delete",id:"tools/sdk/powershell/powershell-sdk-delete",title:"Deleting resources with the PowerShell SDK",description:"Learn how to delete resources using the PowerShell SDK in this guide.",source:"@site/docs/tools/sdk/powershell/deleting-resources.md",sourceDirName:"tools/sdk/powershell",slug:"/tools/sdk/powershell/delete",permalink:"/docs/tools/sdk/powershell/delete",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/powershell/deleting-resources.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"darrell-thobe-sp",lastUpdatedAt:1709674012,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:4,frontMatter:{id:"powershell-sdk-delete",title:"Deleting resources with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Delete a resource",sidebar_position:4,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","delete"],description:"Learn how to delete resources using the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/delete",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"PowerShell SDK",permalink:"/docs/tools/sdk/powershell/update"},next:{title:"PowerShell SDK",permalink:"/docs/tools/sdk/powershell/paginate"}},n={},d=[],p={toc:d},h="wrapper";function c(e){let{components:t,...s}=e;return(0,o.kt)(h,(0,l.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use the SDK to delete resources. These cmdlets will typically start with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Remove")," keyword."),(0,o.kt)("p",null,"Here is an example script that searches for the previously created Workgroup by name and calls the delete cmdlet to remove it from your environment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"$WorkGroup = Get-BetaWorkgroups -Filters 'name eq \"DB Access Governance Group\"'\n\nRemove-BetaWorkgroup -Id $WorkGroup.id -WithHttpInfo\n")),(0,o.kt)("p",null,"Using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tools/sdk/powershell/getting-started#withhttpinfo-switch"},"WithHttpInfo Switch")," in the script above, we can verify the operation completed successfully by the 204 status code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"Name                           Value\n----                           -----\nResponse                       \nStatusCode                     204\nHeaders                        {[Date, System.String[]], [Connection, System.String[]], [Server, System.String[]], [Vary, System.String[]]\u2026}\n")))}c.isMDXComponent=!0}}]);