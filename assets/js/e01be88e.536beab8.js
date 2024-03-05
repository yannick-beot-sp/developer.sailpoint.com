"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[55164],{72771:(i,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>I,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(87462),n=(t(67294),t(3905));const o={id:"ip-address-allow-list",title:"IP Address Allow List",pagination_label:"IP Address Allow List",sidebar_label:"IP Address Allow List",sidebar_position:2,sidebar_class_name:"allowList",keywords:["connectivity","connectors","workflows","allowlist","ip address"],description:"Create an IP Address Allow List\u200b.",slug:"/guides/ip-address-allow-list",tags:["Connectivity","connectors","workflows","allowlist","ip address"]},r=void 0,a={unversionedId:"guides/ip-address-allow-list",id:"guides/ip-address-allow-list",title:"IP Address Allow List",description:"Create an IP Address Allow List\u200b.",source:"@site/docs/guides/ip-address-allow-list.md",sourceDirName:"guides",slug:"/guides/ip-address-allow-list",permalink:"/docs/guides/ip-address-allow-list",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/guides/ip-address-allow-list.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"},{label:"connectors",permalink:"/docs/tags/connectors"},{label:"workflows",permalink:"/docs/tags/workflows"},{label:"allowlist",permalink:"/docs/tags/allowlist"},{label:"ip address",permalink:"/docs/tags/ip-address"}],version:"current",lastUpdatedBy:"darrell-thobe-sp",lastUpdatedAt:1709674012,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:2,frontMatter:{id:"ip-address-allow-list",title:"IP Address Allow List",pagination_label:"IP Address Allow List",sidebar_label:"IP Address Allow List",sidebar_position:2,sidebar_class_name:"allowList",keywords:["connectivity","connectors","workflows","allowlist","ip address"],description:"Create an IP Address Allow List\u200b.",slug:"/guides/ip-address-allow-list",tags:["Connectivity","connectors","workflows","allowlist","ip address"]},sidebar:"openApiSidebar",previous:{title:"Disable Access Profile Requests",permalink:"/docs/guides/disable-access-profile-requests"},next:{title:"Service Accounts",permalink:"/docs/guides/service-accounts"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Finding your Tenant&#39;s Region",id:"finding-your-tenants-region",level:2},{value:"Finding your tenant using the admin console",id:"finding-your-tenant-using-the-admin-console",level:3},{value:"Finding your tenant programatically using the IP address returned by Identity Security Cloud",id:"finding-your-tenant-programatically-using-the-ip-address-returned-by-identity-security-cloud",level:3},{value:"Using your region to create the allow-list URL",id:"using-your-region-to-create-the-allow-list-url",level:2},{value:"Limitations",id:"limitations",level:2}],R={toc:d},E="wrapper";function I(i){let{components:e,...o}=i;return(0,n.kt)(E,(0,s.Z)({},R,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Some SaaS services like Workflows and SaaS Connectivity might need to reach out to internal resources to perform operations inside a customer environment. Instead of opening up those internal resources to the entire internet, you can create an IP Address Allow List so that you can be sure that all SaaS resources can access them while restricting the IP Address range to only allow what is required"),(0,n.kt)("h2",{id:"finding-your-tenants-region"},"Finding your Tenant's Region"),(0,n.kt)("p",null,"In order to create an IP Address Allow list, you need to know what region your tenant is hosted in. If you don't know this, you can find it by using one of two processes:"),(0,n.kt)("h3",{id:"finding-your-tenant-using-the-admin-console"},"Finding your tenant using the admin console"),(0,n.kt)("p",null,"Go to the admin console in Identity Security Cloud and find the 'Org Details' section. You will find your tenant's host region there:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:t(57976).Z,width:"1833",height:"1325"})),(0,n.kt)("h3",{id:"finding-your-tenant-programatically-using-the-ip-address-returned-by-identity-security-cloud"},"Finding your tenant programatically using the IP address returned by Identity Security Cloud"),(0,n.kt)("p",null,"If you can't access the admin console or you want to dynamically find the region through code, follow these steps to find it:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Find the IP address of your tenant by sending an API request in Postman or through any other API framework:")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:t(89643).Z,width:"1093",height:"94"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"After a succesful call to Identity Security Cloud, hover over the globe icon in the response window in postman to get the IP address:")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:t(26152).Z,width:"939",height:"301"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download the ",(0,n.kt)("a",{parentName:"p",href:"https://ip-ranges.amazonaws.com/ip-ranges.json"},"IP Address ranges from AWS"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Compare the IP address found when calling Identity Security Cloud to the list provided by AWS to determine where your tenant is hosted. You can run a simple Python script to easily find what region the IP address belongs to:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from ipaddress import ip_network, ip_address\nimport json\n\ndef find_aws_region(ip):\n  # You can download this file from https://ip-ranges.amazonaws.com/ip-ranges.json\n  ip_json = json.load(open('ip-ranges.json'))\n  prefixes = ip_json['prefixes']\n  my_ip = ip_address(ip)\n  region = 'Unknown'\n  for prefix in prefixes:\n    if my_ip in ip_network(prefix['ip_prefix']):\n      region = prefix['region']\n      break\n  # output should be something like us-east-1\n  print(region)\n\n# simply add your IP address here:\nfind_aws_region('54.234.204.155') \n")),(0,n.kt)("h2",{id:"using-your-region-to-create-the-allow-list-url"},"Using your region to create the allow-list URL"),(0,n.kt)("p",null,"The URL used to find your range of allow list URLs can be constructed using the region found above and the file format desired."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://files.accessiq.sailpoint.com/network/REGION/FILENAME\n")),(0,n.kt)("p",null,"Where REGION is the region of your Identity Security Cloud Tenant and FILENAME is one of the three following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"source_ips.yaml\nsource_ips.json\nsource_ips.txt\n")),(0,n.kt)("p",null,"For example, if a tenant is hosted in the us-east-1 region, to fetch a yaml representation of the IP address range, use the following URL:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://files.accessiq.sailpoint.com/network/us-east-1/source_ips.yaml\n")),(0,n.kt)("p",null,"which will result in a file similar to the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'"region": "us-east-1"\n"source_ips":\n- "52.204.100.58/32"\n- "52.205.92.24/32"\n- "52.206.146.115/32"\n')),(0,n.kt)("p",null,"These IP Address ranges can now be used as an allow list to permit any call from your Identity Security Cloud tenant to access your internal network."),(0,n.kt)("h2",{id:"limitations"},"Limitations"),(0,n.kt)("p",null,"These IP Address ranges can change at any time. The implementation will need to account for this by regularily updating the allow list."))}I.isMDXComponent=!0},57976:(i,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/idn-console-0c57b67730eb992c178cf05f8cc2d03c.PNG"},89643:(i,e,t)=>{t.d(e,{Z:()=>s});const s="data:image/png;base64,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Yv3dYlr+yVAkvcnr47Gf86GcWlAoIsmf2ZW9NQxXzwA7imMDlf5YyIFi//d1sd1GQDMC7CwF/hbr2RLs0X89hoiIiIiIKFtyEopEyxgeOTyBp94b139BJlmpGsdvxDKP1CSZl1HRb7uZ//NTl1s2FKGls+BQhIiIiIiIiOYtt6HIj7swFKGsYyhCRERERES0dBiKZF4YilDWMRQhIiIiIiJaOgxFMi8MRSjrGIoQEREREREtHYYimReGIpR1DEWIiIiIiIiWDkORzAtDEco6hiJERERERERLh6FI5oWhCBEREREREdEthKFI5oWhCBEREREREdEthKFI5oWhCBEREREREdEthKFI5oWhCBEREREREdEthKFI5mXZhiLHjx/XJoiIiIiIiIgocw0NDeqv5P5927WkjfN8LEsdivx8x6jaKzFaKNLc3IxQKKQ9QERERERERESzk+1o2Z5O59H6iaQN9HwsSx2KPOmeUHslRgtF+vv70dbWhps3b2oPEhEREREREVF6Xq9Xa0+n0/7NNHuLqLKUocjPq0bxfueU2isxWigitbe3a8EIe4wQERERERERpSbbzTIQke3oTMhgRPYYyfdwZKlCEdlD5JQ/ovZGvGgoIsmES3b9kfdEycFiWFhYWFhYWFhYWFhYWFhYYkW2l2W7ebYeIvTjEBeKEBERERERERHlC4YiRERERERERJSXGIoQERERERERUV5iKEJEREREREREeYmhCBERERERERHlJYYiRERERERERJSXGIoQERERERERUV5iKEJEREREREREeYmhCBERERERERHlJYYiRERERERERJSXGIoQERERERERUV5iKEJEREREREREeYmhCBERERERERHlJYYiRERERERERJSXGIoQERERERERUV5iKEJEREREREREeYmhCBERERERERHlJYYiRMvZTBij18NqIo3JcUxOq7+JiIiIiIh+LCJhTM6ov5eAKRRpg+vhQhQa5Rk76poHkEFzjAIeOMpr4ZtLZc1EEJqIqAmpE+5yt/jvwoU+rUZxqRt+NT0fkYkQIsaB6W9E2aZqnAqq6WWqs6EM1SdH1JRhBKfeFNs+rCazYjHWmdzgyU3Y2m4cWGFc9Fbhv994DA+8sRXO86b3GnBj/aEvMKkml4Ks/7JyozhQ09AMf0jNnCO5LneXmlhCCe/pqBeBeb6nH52E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"},26152:(i,e,t)=>{t.d(e,{Z:()=>s});const s=t.p+"assets/images/postman2-2e960bc2e74389e4bce8e285e9e99d69.PNG"}}]);