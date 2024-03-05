"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[41950],{84151:(e,t,i)=>{i.d(t,{Z:()=>v});var r=i(67294),n=i(86010),o=i(39960),s=i(53438),a=i(13919),c=i(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var u=i(99603),d=i(21702),m=i(92949);function p(e){let{href:t,children:i}=e;return r.createElement(o.default,{href:t,className:(0,n.default)("card padding--lg",l.cardContainer)},i)}function g(e){let{href:t,icon:i,title:o,description:s}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,n.default)("text--truncate",l.cardTitle),title:o},i,o),s&&r.createElement("p",{className:l.cardDescription,title:s},s))}function h(e){let{item:t}=e;const i=(0,s.Wl)(t),{colorMode:n}=(0,m.I)();return i?r.createElement(g,{href:i,icon:r.createElement(u.G,{icon:d.cC_,style:{marginRight:"0.5em"},color:"dark"===n?"#7ecfee":"#0033a1"}),title:t.label,description:t.customProps?.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const{colorMode:i}=(0,m.I)(),n=(0,a.Z)(t.href)?r.createElement(u.G,{icon:d.FL8,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}):r.createElement(u.G,{icon:d.wlW,style:{marginRight:"0.5em"},color:"dark"===i?"#7ecfee":"#0033a1"}),o=(0,s.xz)(t.docId??void 0);return r.createElement(g,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},46633:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=i(87462),n=(i(67294),i(3905)),o=i(8065),s=i(53438);const a={id:"source-usages",title:"Source Usages",description:"Source Usages",custom_edit_url:null},c=void 0,l={unversionedId:"api/v3/source-usages",id:"api/v3/source-usages",title:"Source Usages",description:"Source Usages",source:"@site/docs/api/v3/source-usages.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/source-usages",permalink:"/docs/api/v3/source-usages",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"source-usages",title:"Source Usages",description:"Source Usages",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Check SOD violations",permalink:"/docs/api/v3/start-violation-check"},next:{title:"Finds status of source usage",permalink:"/docs/api/v3/get-status-by-source-id"}},u={},d=[],m={toc:d},p="wrapper";function g(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Use this API to implement source usage insight functionality.\nWith this functionality in place, administrators can gather information and insights about how their tenants' sources are being used.\nThis allows organizations to get the information they need to start optimizing and securing source usage."),(0,n.kt)(o.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);