"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[70209],{66225:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={id:"manager-correlation-rule",title:"Manager Correlation Rule",pagination_label:"Manager Correlation Rule",sidebar_label:"Manager Correlation Rule",sidebar_class_name:"managerCorrelationRule",keywords:["cloud","rules","manager correlation"],description:"This rule calculates a manager relationship between identities.",slug:"/extensibility/rules/cloud-rules/manager-correlation-rule",tags:["Rules"]},i=void 0,o={unversionedId:"extensibility/rules/cloud-rules/manager-correlation-rule",id:"extensibility/rules/cloud-rules/manager-correlation-rule",title:"Manager Correlation Rule",description:"This rule calculates a manager relationship between identities.",source:"@site/docs/extensibility/rules/cloud-rules/manager_correlation_rule.md",sourceDirName:"extensibility/rules/cloud-rules",slug:"/extensibility/rules/cloud-rules/manager-correlation-rule",permalink:"/docs/extensibility/rules/cloud-rules/manager-correlation-rule",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/cloud-rules/manager_correlation_rule.md",tags:[{label:"Rules",permalink:"/docs/tags/rules"}],version:"current",lastUpdatedBy:"darrell-thobe-sp",lastUpdatedAt:1709674012,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{id:"manager-correlation-rule",title:"Manager Correlation Rule",pagination_label:"Manager Correlation Rule",sidebar_label:"Manager Correlation Rule",sidebar_class_name:"managerCorrelationRule",keywords:["cloud","rules","manager correlation"],description:"This rule calculates a manager relationship between identities.",slug:"/extensibility/rules/cloud-rules/manager-correlation-rule",tags:["Rules"]},sidebar:"openApiSidebar",previous:{title:"Identity Attribute Rule",permalink:"/docs/extensibility/rules/cloud-rules/identity-attribute-rule"},next:{title:"Connector Executed Rules",permalink:"/docs/extensibility/rules/connector-rules"}},u={},s=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2},{value:"Template",id:"template",level:2},{value:"Example - Find a manager based on the manager.email attribute",id:"example---find-a-manager-based-on-the-manageremail-attribute",level:2}],d={toc:s},m="wrapper";function p(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This rule calculates a manager relationship between identities."),(0,r.kt)("p",null,"Use this rule to correlate an identity's manager for the following scenarios:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The authoritative source has multiple accounts for an identity and you must pick the manager data from the ",(0,r.kt)("inlineCode",{parentName:"li"},"active")," account."),(0,r.kt)("li",{parentName:"ul"},"You need to do a lookup from an employee number to other data."),(0,r.kt)("li",{parentName:"ul"},"The identity changes types, for example, from consultant to employee with the manager coming from a different authoritative source.")),(0,r.kt)("p",null,"The manager correlation rule runs before configured manager account correlation."),(0,r.kt)("h2",{id:"execution"},"Execution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cloud Execution")," - This rule executes in the Identity Security Cloud cloud, and it has read-only access to Identity Security Cloud data models, but it does not have access to on-premise sources or connectors."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Logging")," - Logging statements are currently only visible to SailPoint personnel.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rule Execution",src:a(44490).Z,width:"1594",height:"635"})),(0,r.kt)("h2",{id:"input"},"Input"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.log4j.Logger"),(0,r.kt)("td",{parentName:"tr",align:null},"Logger to log statements. ",(0,r.kt)("em",{parentName:"td"},"Note: This executes in the cloud, and logging is currently not exposed to anyone other than SailPoint."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"idn"),(0,r.kt)("td",{parentName:"tr",align:null},"sailpoint.server.IdnRuleUtil"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a read-only starting point for using the SailPoint API. From this passed reference, the rule can interrogate the Identity Security Cloud data model including identities or account information via helper methods as described in ",(0,r.kt)("a",{parentName:"td",href:"/docs/extensibility/rules/rule-utility"},"IdnRuleUtil"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"link"),(0,r.kt)("td",{parentName:"tr",align:null},"sailpoint.object.Link"),(0,r.kt)("td",{parentName:"tr",align:null},"Read-only representation of account data that has been aggregated. Use this as a basis to determine manager linkages to a specific manager identity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"managerAttributeValue"),(0,r.kt)("td",{parentName:"tr",align:null},"java.lang.Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Attribute value stored in the manager attribute.")))),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"returnMap"),(0,r.kt)("td",{parentName:"tr",align:null},"java.util.Map"),(0,r.kt)("td",{parentName:"tr",align:null},"Map object containing a reference to the identity attributes to identify the manager's identity. These should contain both ",(0,r.kt)("inlineCode",{parentName:"td"},"identityAttributeName")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"identityAttributeValue")," as keys.")))),(0,r.kt)("h2",{id:"template"},"Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="ManagerCorrelation">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n')),(0,r.kt)("h2",{id:"example---find-a-manager-based-on-the-manageremail-attribute"},"Example - Find a manager based on the manager.email attribute"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Manager Email Correlation" type="ManagerCorrelation">\n  <Description>Finds a manager based on the manager.email attribute.</Description>\n  <Source><![CDATA[\n\nMap returnMap = new HashMap();\n\nString managerEmail = link.getAttribute( "manager.email" );\nreturnMap.put( "identityAttributeName", "email");\nreturnMap.put( "identityAttributeValue", managerEmail );\n\nreturn returnMap;\n\n  ]]></Source>\n</Rule>\n')))}p.isMDXComponent=!0},44490:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloud_execution-7029b7fdcb50a6ea04ef055f18117067.png"}}]);