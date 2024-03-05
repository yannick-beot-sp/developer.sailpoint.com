"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[74918],{84151:(e,t,a)=>{a.d(t,{Z:()=>g});var i=a(67294),r=a(86010),n=a(39960),o=a(53438),s=a(13919),l=a(95999);const c={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var d=a(99603),p=a(21702),m=a(92949);function u(e){let{href:t,children:a}=e;return i.createElement(n.default,{href:t,className:(0,r.default)("card padding--lg",c.cardContainer)},a)}function h(e){let{href:t,icon:a,title:n,description:o}=e;return i.createElement(u,{href:t},i.createElement("h2",{className:(0,r.default)("text--truncate",c.cardTitle),title:n},a,n),o&&i.createElement("p",{className:c.cardDescription,title:o},o))}function w(e){let{item:t}=e;const a=(0,o.Wl)(t),{colorMode:r}=(0,m.I)();return a?i.createElement(h,{href:a,icon:i.createElement(d.G,{icon:p.cC_,style:{marginRight:"0.5em"},color:"dark"===r?"#7ecfee":"#0033a1"}),title:t.label,description:t.customProps?.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const{colorMode:a}=(0,m.I)(),r=(0,s.Z)(t.href)?i.createElement(d.G,{icon:p.FL8,style:{marginRight:"0.5em"},color:"dark"===a?"#7ecfee":"#0033a1"}):i.createElement(d.G,{icon:p.wlW,style:{marginRight:"0.5em"},color:"dark"===a?"#7ecfee":"#0033a1"}),n=(0,o.xz)(t.docId??void 0);return i.createElement(h,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(f,{item:t});case"category":return i.createElement(w,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},4560:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var i=a(87462),r=(a(67294),a(3905)),n=a(8065),o=a(53438);const s={id:"password-dictionary",title:"Password Dictionary",description:"Password Dictionary",custom_edit_url:null},l=void 0,c={unversionedId:"api/v3/password-dictionary",id:"api/v3/password-dictionary",title:"Password Dictionary",description:"Password Dictionary",source:"@site/docs/api/v3/password-dictionary.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/password-dictionary",permalink:"/docs/api/v3/password-dictionary",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"password-dictionary",title:"Password Dictionary",description:"Password Dictionary",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get Password Change Request Status",permalink:"/docs/api/v3/get-password-change-status"},next:{title:"Get Password Dictionary",permalink:"/docs/api/v3/get-password-dictionary"}},d={},p=[],m={toc:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this API to implement password dictionary functionality.",(0,r.kt)("br",{parentName:"p"}),"\n","With this functionality in place, administrators can create password dictionaries to prevent users from using certain words or characters in their passwords. "),(0,r.kt)("p",null,"A password dictionary is a list of words or characters that users are prevented from including in their passwords.\nThis can help protect users from themselves and force them to create passwords that are not easy to break. "),(0,r.kt)("p",null,"A password dictionary must meet the following requirements to for the API to handle them correctly: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It must be in .txt format.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All characters must be UTF-8 characters. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each line must contain a single word or character with no spaces or whitespace characters.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It must contain at least one line other than the locale string.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each line must not exceed 128 characters.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The file must not exceed 2500 lines. "))),(0,r.kt)("p",null,"Administrators should also consider the following when they create their dictionaries: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Lines starting with a # represent comments.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'All words in the password dictionary are case-insensitive.\nFor example, adding the word "password" to the dictionary also disallows the following: PASSWORD, Password, and PassWord.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The dictionary uses substring matching.\nFor example, adding the word \"spring\" to the dictionary also disallows the following: Spring124, 345SprinG, and 8spring.\nUsers can then select 'Change Password' to update their passwords. "))),(0,r.kt)("p",null,"Administrators must do the following to create a password dictionary: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create the text file that will contain the prohibited password values.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the dictionary is not in English, they must add a locale string to the top line: locale:",(0,r.kt)("inlineCode",{parentName:"p"},"languageCode"),"_",(0,r.kt)("inlineCode",{parentName:"p"},"countryCode")))),(0,r.kt)("p",null,"The languageCode value refers to the language's 2-letter ISO 639-1 code.\nThe countryCode value refers to the country's 2-letter ISO 3166-1 code."),(0,r.kt)("p",null,"Refer to this list ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html"},"https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html")," to see all the available ISO 639-1 language codes and ISO 3166-1 country codes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upload the .txt file to IdentityNow with ",(0,r.kt)("a",{parentName:"li",href:"https://developer.sailpoint.com/idn/api/v3/update-password-dictionary"},"Update Password Dictionary"),". Uploading a new file always overwrites the previous dictionary file.")),(0,r.kt)("p",null,"Administrators can then specify which password policies check new passwords against the password dictionary by doing the following: In the Admin panel, they can use the Password Mgmt dropdown menu to select Policies, select the policy, and select the 'Prevent use of words in this site's password dictionary' checkbox beside it."),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/pwd/adv_config.html"},"Configuring Advanced Password Management Options")," for more information about password dictionaries."),(0,r.kt)(n.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);