"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[28774],{65684:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var o=r(87462),s=(r(67294),r(3905));const l={id:"powershell-sdk-error-handling",title:"Error Handling with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Error Handling",sidebar_position:7,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","error"],description:"Learn how to delete resources using the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/error-handling",tags:["SDK"]},n=void 0,a={unversionedId:"tools/sdk/powershell/powershell-sdk-error-handling",id:"tools/sdk/powershell/powershell-sdk-error-handling",title:"Error Handling with the PowerShell SDK",description:"Learn how to delete resources using the PowerShell SDK in this guide.",source:"@site/docs/tools/sdk/powershell/error-handling.md",sourceDirName:"tools/sdk/powershell",slug:"/tools/sdk/powershell/error-handling",permalink:"/docs/tools/sdk/powershell/error-handling",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/powershell/error-handling.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"darrell-thobe-sp",lastUpdatedAt:1709674012,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:7,frontMatter:{id:"powershell-sdk-error-handling",title:"Error Handling with the PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"Error Handling",sidebar_position:7,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk","error"],description:"Learn how to delete resources using the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell/error-handling",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"PowerShell SDK",permalink:"/docs/tools/sdk/powershell/retries"},next:{title:"TypeScript SDK",permalink:"/docs/tools/sdk/typescript"}},i={},d=[],p={toc:d},h="wrapper";function c(e){let{components:t,...r}=e;return(0,s.kt)(h,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The SDK uses the Invoke-WebRequest cmdlet to handle HTTP requests. Invoke-WebRequest will throw a terminating error for any response that falls out of the range of 2xx. A non-2xx response will immediately halt the program and produce a stack trace."),(0,s.kt)("p",null,"You can use a ",(0,s.kt)("inlineCode",{parentName:"p"},"try/catch")," function to intercept any non success response and take actions on the results, such as logging the message or performing additional actions before exiting the program:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-powershell"},'# Catch any non 2xx response and log the status code and error message\ntry {\n    Get-Transforms -Filters "id eq" \n}\ncatch {\n    Write-Host $_.Exception.Response.StatusCode.value__\n    Write-Host $_.ErrorDetails\n}\n')),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"catch")," block will handle the error, and the script execution will continue. If you want to stop the scripts execution, include an ",(0,s.kt)("inlineCode",{parentName:"p"},"Exit")," in the ",(0,s.kt)("inlineCode",{parentName:"p"},"catch")," block:"),(0,s.kt)("p",null,"This code ensures that the ",(0,s.kt)("inlineCode",{parentName:"p"},"Get-AccessProfiles")," cmdlet will never be called:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-powershell"},'# Catch any non 2xx response and log the status code and error message. Stop the script with the Exit keyword.\ntry {\n    Get-Transforms -Filters "id eq" \n}\ncatch {\n    Write-Host $_.Exception.Response.StatusCode.value__\n    Write-Host $_.ErrorDetails\n    Exit\n}\n\nGet-AccessProfiles\n')))}c.isMDXComponent=!0}}]);