"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[63192],{84151:(e,t,i)=>{i.d(t,{Z:()=>y});var a=i(67294),n=i(86010),r=i(39960),o=i(53438),s=i(13919),c=i(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var p=i(99603),d=i(21702),m=i(92949);function u(e){let{href:t,children:i}=e;return a.createElement(r.default,{href:t,className:(0,n.default)("card padding--lg",l.cardContainer)},i)}function h(e){let{href:t,icon:i,title:r,description:o}=e;return a.createElement(u,{href:t},a.createElement("h2",{className:(0,n.default)("text--truncate",l.cardTitle),title:r},i,r),o&&a.createElement("p",{className:l.cardDescription,title:o},o))}function f(e){let{item:t}=e;const i=(0,o.Wl)(t),{colorMode:n}=(0,m.I)();return i?a.createElement(h,{href:i,icon:a.createElement(p.G,{icon:d.cC_,style:{marginRight:"0.5em"},color:"dark"===n?"#7ecfee":"#0033a1"}),title:t.label,description:t.customProps?.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const{colorMode:i}=(0,m.I)(),n=(0,s.Z)(t.href)?a.createElement(p.G,{icon:d.FL8,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}):a.createElement(p.G,{icon:d.wlW,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}),r=(0,o.xz)(t.docId??void 0);return a.createElement(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(g,{item:t});case"category":return a.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},50522:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=i(87462),n=(i(67294),i(3905)),r=i(8065),o=i(53438);const s={id:"certification-campaigns",title:"Certification Campaigns",description:"Certification Campaigns",custom_edit_url:null},c=void 0,l={unversionedId:"api/v3/certification-campaigns",id:"api/v3/certification-campaigns",title:"Certification Campaigns",description:"Certification Campaigns",source:"@site/docs/api/v3/certification-campaigns.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/certification-campaigns",permalink:"/docs/api/v3/certification-campaigns",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"certification-campaigns",title:"Certification Campaigns",description:"Certification Campaigns",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Delete a branding item",permalink:"/docs/api/v3/delete-branding"},next:{title:"List Campaigns",permalink:"/docs/api/v3/get-active-campaigns"}},p={},d=[],m={toc:d},u="wrapper";function h(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use this API to implement certification campaign functionality.\nWith this functionality in place, administrators can create, customize, and manage certification campaigns for their organizations' use.\nCertification campaigns provide IdentityNow users with an interactive review process they can use to identify and verify access to systems.\nCampaigns help organizations reduce risk of inappropriate access and satisfy audit requirements. "),(0,n.kt)("p",null,"A certification refers to IdentityNow's mechanism for reviewing a user's access to entitlements (sets of permissions) and approving or removing that access.\nThese certifications serve as a way of showing that a user's access has been reviewed and approved.\nMultiple certifications by different reviewers are often required to approve a user's access.\nA set of multiple certifications is called a certification campaign. "),(0,n.kt)("p",null,"For example, an organization may use a Manager Certification campaign as a way of showing that a user's access has been reviewed and approved by multiple managers.\nOnce this campaign has been completed, IdentityNow would provision all the access the user needs, nothing more. "),(0,n.kt)("p",null,"IdentityNow provides two simple campaign types users can create without using search queries, Manager and Source Owner campaigns:"),(0,n.kt)("p",null,"You can create these types of campaigns without using any search queries in IdentityNow: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"ManagerCampaign: IdentityNow provides this campaign type as a way to ensure that an identity's access is certified by their managers.\nYou only need to provide a name and description to create one. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Source Owner Campaign: IdentityNow provides this campaign type as a way to ensure that an identity's access to a source is certified by its source owners.\nYou only need to provide a name and description to create one.\nYou can specify the sources whose owners you want involved or just run it across all sources. "))),(0,n.kt)("p",null,"For more information about these campaign types, refer to ",(0,n.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/certs/starting_campaign.html"},"Starting a Manager or Source Owner Campaign"),"."),(0,n.kt)("p",null,'One useful way to create certification campaigns in IdentityNow is to use a specific search and then run a campaign on the results returned by that search.\nThis allows you to be much more specific about whom you are certifying in your campaigns and what access you are certifying in your campaigns.\nFor example, you can search for all identities who are managed by "Amanda.Ross" and also have the access to the "Accounting" role and then run a certification campaign based on that search to ensure that the returned identities are appropriately certified. '),(0,n.kt)("p",null,"You can use IdentityNow search queries to create these types of campaigns: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Identities: Use this campaign type to review and revoke access items for specific identities.\nYou can either build a search query and create a campaign certifying all identities returned by that query, or you can search for individual identities and add those identities to the certification campaign. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Access Items: Use this campaign type to review and revoke a set of roles, access profiles, or entitlements from the identities that have them.\nYou can either build a search query and create a campaign certifying all access items returned by that query, or you can search for individual access items and add those items to the certification campaign. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Role Composition: Use this campaign type to review a role's composition, including its title, description, and membership criteria.\nYou can either build a search query and create a campaign certifying all roles returned by that query, or you can search for individual roles and add those roles to the certification campaign. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Uncorrelated Accounts: Use this campaign type to certify source accounts that aren't linked to an authoritative identity in IdentityNow.\nYou can use this campaign type to view all the uncorrelated accounts for a source and certify them. "))),(0,n.kt)("p",null,"For more information about search-based campaigns, refer to ",(0,n.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/certs/starting_search_campaign.html"},"Starting a Campaign from Search"),"."),(0,n.kt)("p",null,"Once you have generated your campaign, it becomes available for preview.\nAn administrator can review the campaign and make changes, or if it's ready and accurate, activate it. "),(0,n.kt)("p",null,"Once the campaign is active, organization administrators or certification administrators can designate other IdentityNow users as certification reviewers.\nThose reviewers can view any of the certifications they either need to review (active) or have already reviewed (completed)."),(0,n.kt)("p",null,"When a certification campaign is in progress, certification reviewers see the listed active certifications whose involved identities they can review.\nReviewers can then make decisions to grant or revoke access, as well as reassign the ceritifcation to another reviewer. If the reviewer chooses this option, they must provide a reason for reassignment in the form of a comment."),(0,n.kt)("p",null,"Once a reviewer has made decisions on all the certification's involved access items, he or she must \"Sign Off\" to complete the review process.\nDoing so converts the certification into read-only status, preventing any further changes to the review decisions and deleting the work item (task) from the reviewer's list of work items. "),(0,n.kt)("p",null,"Once all the reviewers have signed off, the certification campaign either completes or, if any reviewers decided to revoke access for any of the involved identities, it moves into a remediation phase.\nIn the remediation phase, identities' entitlements are altered to remove any entitlements marked for revocation.\nIn this situation, the certification campaign completes once all the remediation requests are completed. "),(0,n.kt)("p",null,"The end of a certification campaign is determined by its deadline, its completion status, or by an administrator's decision. "),(0,n.kt)("p",null,"For more information about certifications and certification campaigns, refer to ",(0,n.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/user-help/certifications.html"},"Certifications"),"."),(0,n.kt)(r.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);