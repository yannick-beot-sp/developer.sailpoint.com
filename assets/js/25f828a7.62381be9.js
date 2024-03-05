"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[30992],{56405:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(67294),c=n(57273),a=n(44996);const s={zoomIn:"zoomIn_Zi5X",mermaidContainer:"mermaidContainer_KO9S"};function r(e){let{children:t,diagram:n}=e;c.Z.contentLoaded();const[r,o]=i.useState(0),[l,d]=i.useState({cursor:"grab",clickX:0,clickY:0,offsetX:0,offsetY:0}),[u,m]=i.useState({x:0,y:0}),[g,p]=i.useState(!1);function h(e){e.screenX?(d({cursor:"grabbing",clickX:e.screenX,clickY:e.screenY,offsetX:u.x,offsetY:u.y}),m({x:u.x,y:u.y})):(d({cursor:"grabbing",clickX:e.changedTouches[0].screenX,clickY:e.changedTouches[0].screenY,offsetX:u.x,offsetY:u.y}),m({x:u.x,y:u.y}))}function f(e){d({cursor:"grab",clickX:0,clickY:0})}function y(e){"grabbing"===l.cursor&&(e.screenX?m({x:l.clickX-e.screenX+l.offsetX,y:l.clickY-e.screenY+l.offsetY}):m({x:l.clickX-e.changedTouches[0].screenX+l.offsetX,y:l.clickY-e.changedTouches[0].screenY+l.offsetY}))}let v,k;return i.useEffect((()=>{let e=!1;return setTimeout((()=>{e||p(!0)}),100),()=>{e=!0}})),!0===g?(k=i.createElement("div",null),v=i.createElement("div",{id:"mermaid",draggable:"false",className:"mermaid",style:{position:"relative",top:-u.y+"px",left:-u.x+"px",width:"calc(100% + "+r+"px)",maxHeight:"1000px"}},n)):(k=i.createElement("div",null,"Diagram Loading ..."),v=i.createElement("div",{id:"mermaid",draggable:"false",className:"mermaid",style:{visibility:"hidden",position:"relative",top:-u.y+"px",left:-u.x+"px",width:"calc(100% + "+r+"px)",maxHeight:"1000px"}},n)),i.createElement("div",null,i.createElement("img",{className:s.zoomIn,onClick:e=>{o(r+300)},src:(0,a.default)("/icons/magnifying-glass-plus-regular.svg")}),i.createElement("img",{className:s.zoomIn,onClick:e=>function(e){o(0),d({cursor:"grab",clickX:e.screenX,clickY:e.screenY,offsetX:0,offsetY:0}),m({x:0,y:0})}(e),src:(0,a.default)("/icons/house-regular.svg")}),i.createElement("img",{className:s.zoomIn,onClick:e=>{o(r-300)},src:(0,a.default)("/icons/magnifying-glass-minus-regular.svg")}),i.createElement("div",{style:{cursor:l.cursor},className:s.mermaidContainer,onMouseMove:e=>y(e),onTouchMove:e=>y(e),onMouseDown:e=>h(e),onTouchStart:e=>h(e),onMouseUp:e=>f(),onTouchEnd:e=>f(),onMouseLeave:e=>f()},k,v))}},84151:(e,t,n)=>{n.d(t,{Z:()=>y});var i=n(67294),c=n(86010),a=n(39960),s=n(53438),r=n(13919),o=n(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var d=n(99603),u=n(21702),m=n(92949);function g(e){let{href:t,children:n}=e;return i.createElement(a.default,{href:t,className:(0,c.default)("card padding--lg",l.cardContainer)},n)}function p(e){let{href:t,icon:n,title:a,description:s}=e;return i.createElement(g,{href:t},i.createElement("h2",{className:(0,c.default)("text--truncate",l.cardTitle),title:a},n,a),s&&i.createElement("p",{className:l.cardDescription,title:s},s))}function h(e){let{item:t}=e;const n=(0,s.Wl)(t),{colorMode:c}=(0,m.I)();return n?i.createElement(p,{href:n,icon:i.createElement(d.G,{icon:u.cC_,style:{marginRight:"0.5em"},color:"dark"===c?"#7ecfee":"#0033a1"}),title:t.label,description:t.customProps?.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const{colorMode:n}=(0,m.I)(),c=(0,r.Z)(t.href)?i.createElement(d.G,{icon:u.FL8,style:{marginRight:"0.5em"},color:"dark"===n?"#7ecfee":"#0033a1"}):i.createElement(d.G,{icon:u.wlW,style:{marginRight:"0.5em"},color:"dark"===n?"#7ecfee":"#0033a1"}),a=(0,s.xz)(t.docId??void 0);return i.createElement(p,{href:t.href,icon:c,title:t.label,description:t.description??a?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(f,{item:t});case"category":return i.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},15692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=n(87462),c=(n(67294),n(3905)),a=(n(56405),n(8065)),s=n(53438);const r={id:"access-intelligence-center",title:"Access Intelligence Center",pagination_label:"Access Intelligence Center",sidebar_label:"Access Intelligence Center",sidebar_position:5,sidebar_class_name:"AccessIntelligenceCenter",keywords:["data listing","data share","secure data sharing"],description:"Custom dashboards for data analysis.",slug:"/reporting/access-intelligence-center",tags:["AccessIntelligenceCenter","AIC"],hide_table_of_contents:!0},o="Overview",l={unversionedId:"reporting/access-intelligence-center/access-intelligence-center",id:"reporting/access-intelligence-center/access-intelligence-center",title:"Access Intelligence Center",description:"Custom dashboards for data analysis.",source:"@site/docs/reporting/access-intelligence-center/index.md",sourceDirName:"reporting/access-intelligence-center",slug:"/reporting/access-intelligence-center",permalink:"/docs/reporting/access-intelligence-center",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/reporting/access-intelligence-center/index.md",tags:[{label:"AccessIntelligenceCenter",permalink:"/docs/tags/access-intelligence-center"},{label:"AIC",permalink:"/docs/tags/aic"}],version:"current",lastUpdatedBy:"darrell-thobe-sp",lastUpdatedAt:1709674012,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:5,frontMatter:{id:"access-intelligence-center",title:"Access Intelligence Center",pagination_label:"Access Intelligence Center",sidebar_label:"Access Intelligence Center",sidebar_position:5,sidebar_class_name:"AccessIntelligenceCenter",keywords:["data listing","data share","secure data sharing"],description:"Custom dashboards for data analysis.",slug:"/reporting/access-intelligence-center",tags:["AccessIntelligenceCenter","AIC"],hide_table_of_contents:!0},sidebar:"openApiSidebar",previous:{title:"Reporting",permalink:"/docs/reporting"},next:{title:"Access Intelligence Center ER Diagram",permalink:"/docs/reporting/aic-er-diagram"}},d={},u=[{value:"Identity Security Cloud Documentation",id:"identity-security-cloud-documentation",level:2},{value:"Technical Documentation and Videos",id:"technical-documentation-and-videos",level:2}],m={toc:u},g="wrapper";function p(e){let{components:t,...n}=e;return(0,c.kt)(g,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"overview"},"Overview"),(0,c.kt)("p",null,"The Access Intelligence Center (AIC) allows you to discover key insights into your identity and administration program. You can view and create dashboards to customize the data you view."),(0,c.kt)("p",null,"The Access Intelligence Center dashboard is an identity program overview focusing on identity relationships. Data displayed in the Access Intelligence Center include showing identities, requests, and certifications."),(0,c.kt)("p",null,"The AIC Audit dashboard focuses on more tangible audit events, such as access requests, certifications, lifecycle state, addition and removal of entitlements, and creation or deletion of accounts."),(0,c.kt)("p",null,"With Reader permission, users can view any public sheets available and make selections to further filter the data. With Authoring permission, users can view public sheets, create new public or private sheets, and bookmark certain filters for future use."),(0,c.kt)("h2",{id:"identity-security-cloud-documentation"},"Identity Security Cloud Documentation"),(0,c.kt)("p",null,"For information on how to use AIC in your environment, see the documentation ",(0,c.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/ai/access_insights/access_intelligence.html"},"here")),(0,c.kt)("h2",{id:"technical-documentation-and-videos"},"Technical Documentation and Videos"),(0,c.kt)("p",null,"For Entity Relationship (ER) Diagrams that represent the data model in AIC as well as other documentation see the following pages"),(0,c.kt)(a.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);