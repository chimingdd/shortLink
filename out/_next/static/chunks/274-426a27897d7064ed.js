"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[274],{27274:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var i=a(57437),n=a(2265),s=a(25790),o=a(37721),l=a(213),r=a(20283),c=a(79225);async function u(e){return await (0,c.U)("shortLinkView/statistic",e)}async function d(e){return await (0,c.U)("project/idTitle",e)}async function y(e){return await (0,c.U)("shortLink/idTitle",e)}var p=()=>{let[e,t]=(0,n.useState)(0),[a,c]=(0,n.useState)(0),[p,x]=(0,n.useState)([]),[h,g]=(0,n.useState)([]),[m,j]=(0,n.useState)(),[v,f]=(0,n.useState)([{key:"30日展示量",value:0},{key:"30日点击量",value:0},{key:"30日咨询量",value:0}]),[b,k]=(0,n.useState)([{key:"7日展示量",value:0},{key:"7日点击量",value:0},{key:"7日咨询量",value:0}]),[_,w]=(0,n.useState)([{key:"今日展示量",value:0},{key:"今日点击量",value:0},{key:"今日咨询量",value:0}]),S=(e,t)=>(e[0].value=(null==t?void 0:t.show_count)||0,e[1].value=(null==t?void 0:t.click_count)||0,e[2].value=(null==t?void 0:t.chat_count)||0,e),Z=async()=>{let e=await d({});0==e.code&&x(e.data)},z=async()=>{let t=await y({project_id:e});0==t.code&&g(t.data)},C=async()=>{let t=await u({project_id:e,short_link_id:a});if(0==t.code){let e={show_count:[],click_count:[],chat_count:[]};for(let a in w(S(_,t.monthData)),k(S(b,t.sevenData)),f(S(v,t.todayData)),t.data)e.show_count.push({x:a.substring(5,10),type:"展示量",y:t.data[a].show_count}),e.click_count.push({x:a.substring(5,10),type:"点击量",y:t.data[a].click_count}),e.chat_count.push({x:a.substring(5,10),type:"咨询量",y:t.data[a].chat_count});let a={type:"common",seriesField:"color",data:[{id:"id1",values:e.show_count},{id:"id2",values:e.click_count},{id:"id3",values:e.chat_count}],series:[{type:"line",dataIndex:0,seriesField:"type",xField:"x",yField:"y",stack:!1,animationAppear:{point:{type:"moveIn",options:{direction:"y"},easing:"bounceOut",duration:1e3},line:{duration:1500,delay:1e3,easing:"cubicOut"}}},{type:"line",dataIndex:1,seriesField:"type",xField:"x",yField:"y",stack:!1,animationAppear:{point:{type:"moveIn",options:{direction:"y"},easing:"bounceOut",duration:1e3},line:{duration:1500,delay:1e3,easing:"cubicOut"}}},{type:"line",dataIndex:2,seriesField:"type",xField:"x",yField:"y",stack:!1,animationAppear:{point:{type:"moveIn",options:{direction:"y"},easing:"bounceOut",duration:1e3},line:{duration:1500,delay:1e3,easing:"cubicOut"}}}],axes:[{orient:"left"},{orient:"bottom",label:{visible:!0},type:"band"}],legends:{visible:!0,orient:"bottom"}};if(m)console.log(22),m.updateSpec(a);else{let e=new o.ZPm(a,{dom:"chart"});j(e),e.renderSync(),console.log(11)}}},I=!1;(0,n.useEffect)(()=>{I||(Z(),z(),C(),I=!0)},[a]);let L={marginRight:"10px"},P=async e=>{t(e),c(0),await z(),await C()};return(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)(l.Ph,{value:e,onChange:P,children:[(0,i.jsx)(r.Z,{value:0,children:"全部广告"}),p.map(e=>(0,i.jsx)(r.Z,{value:e.id,children:e.title},e.id))]}),(0,i.jsxs)(l.Ph,{value:a,style:{marginLeft:"12px"},onChange:e=>{c(e)},children:[(0,i.jsx)(r.Z,{value:0,children:"全部短链"}),h.map(e=>(0,i.jsx)(r.Z,{value:e.id,children:e.title},e.id))]})]}),(0,i.jsx)("div",{style:{marginTop:"12px"},children:(0,i.jsxs)(l.T,{children:[(0,i.jsx)(l.Zb,{shadows:"always",style:L,children:(0,i.jsx)(l.w5,{align:"center",data:v})}),(0,i.jsx)(l.Zb,{shadows:"always",style:L,children:(0,i.jsx)(l.w5,{align:"justify",data:b})}),(0,i.jsx)(l.Zb,{shadows:"always",style:L,children:(0,i.jsx)(l.w5,{align:"left",data:_})})]})}),(0,i.jsx)("div",{id:"chart",style:{height:"500px",marginTop:"12px"}})]})}},25790:function(e,t,a){a.d(t,{Z:function(){return _}});var i=a(57437),n=a(213),s=a(2265),o=a(16463),l=a(79225),r=a(1342),c=()=>{let{Footer:e}=n.Layout;return(0,i.jsx)(e,{style:{display:"flex",justifyContent:"space-between",padding:"20px",color:"var(--semi-color-text-2)",backgroundColor:"rgba(var(--semi-grey-0), 1)"},children:(0,i.jsxs)("span",{style:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(r.Z,{size:"large",style:{marginRight:"8px"}}),(0,i.jsx)("span",{children:"Copyright \xa9 2024 壹择科技. All Rights Reserved. "})]})})},u=a(37006),d=a(24408),y=e=>{var t;let{Header:a}=n.Layout;return(0,i.jsx)(a,{style:{backgroundColor:"var(--semi-color-bg-1)"},children:(0,i.jsx)(n.JL,{mode:"horizontal",footer:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.zx,{theme:"borderless",icon:(0,i.jsx)(u.Z,{size:"large"}),style:{color:"var(--semi-color-text-2)",marginRight:"12px"}}),(0,i.jsx)(n.zx,{theme:"borderless",icon:(0,i.jsx)(d.Z,{size:"large"}),style:{color:"var(--semi-color-text-2)",marginRight:"12px"}}),(0,i.jsx)(n.qE,{color:"orange",size:"small",children:null==e?void 0:null===(t=e.user)||void 0===t?void 0:t.name})]})})})},p=a(62509),x=a(17863),h=a(7931),g=a(49256),m=a(73600),j=a(20211),v=a(42132),f=a(47775),b=a(20357),k=e=>{let{Sider:t}=n.Layout,a=(0,o.useRouter)(),l=(0,o.usePathname)(),[r,c]=(0,s.useState)(l.substring(1)||"Home");return(0,i.jsx)(t,{style:{backgroundColor:"rgb(242, 242, 244)"},children:(0,i.jsx)(n.JL,{defaultSelectedKeys:[r],selectedKeys:[r],style:{maxWidth:220,height:"100%",backgroundColor:"var(--color-fill-0)"},items:[{itemKey:"Home",text:"首页",icon:(0,i.jsx)(p.Z,{size:"large"})},{itemKey:"Data",text:"基础数据",icon:(0,i.jsx)(x.Z,{size:"large"})},{itemKey:"Project",text:"广告管理",icon:(0,i.jsx)(h.Z,{size:"large"})},{itemKey:"Custom",text:"客户管理",icon:(0,i.jsx)(g.Z,{size:"large"})},{itemKey:"ShortLink",text:"短链管理",icon:(0,i.jsx)(m.Z,{size:"large"})},{itemKey:"Account",text:"账号管理",icon:(0,i.jsx)(j.Z,{size:"large"})},{itemKey:"Setting",text:"系统设置",icon:(0,i.jsx)(v.Z,{size:"large"})}],header:{logo:(0,i.jsx)(f.Z,{style:{fontSize:36}}),text:b.env.NEXT_PUBLIC_TITLE,style:{paddingBottom:"12px"}},footer:{collapseButton:!0},onSelect:e=>{a.push("/"+e.itemKey)}})})},_=e=>{let{children:t}=e,{Content:a}=n.Layout,r=function(e,t){let[a,i]=(0,s.useState)(null),[n,r]=(0,s.useState)(!1),c=(0,o.useRouter)();return(0,s.useEffect)(()=>{let a=localStorage.getItem("user");a&&i(JSON.parse(a));let s=async()=>{let{data:a,code:s}=await (0,l.U)("user/current",{}),o=!!a;i(0===s?a:null),0===s&&localStorage.setItem("user",JSON.stringify(a)),r(!0),e&&n&&(e&&!t&&!o||t&&o)&&c.push(e)};a||s()},[e,t,n,c]),a}("/Login",!1);return(0,i.jsxs)(n.Layout,{style:{height:"100%"},children:[(0,i.jsx)(k,{user:r}),(0,i.jsxs)(n.Layout,{children:[(0,i.jsx)(y,{user:r}),(0,i.jsx)(a,{style:{padding:"12px",backgroundColor:"#f9f9fa"},children:(0,i.jsx)("div",{style:{borderRadius:"10px",border:"1px solid var(--semi-color-border)",height:"auto",backgroundColor:"var(--semi-color-bg-0)",padding:"24px"},children:t})}),(0,i.jsx)(c,{})]})]})}},79225:function(e,t,a){a.d(t,{U:function(){return n},v:function(){return s}});var i=a(213);async function n(e,t){let a="";if(t){for(let e in t)a+="&"+e+"="+t[e];a="?"+a.substring(1)}let n={"Content-Type":"application/json",Accept:"application/json"};localStorage.getItem("access_token")&&(n.Authorization=localStorage.getItem("access_token"));let s=await fetch("https://crm.yizetech.com.cn/api/"+e+a,{method:"GET",headers:n}),o=await s.json();return 429===s.status?i.P_.open({title:"系统通知",content:"频率限制，请稍后再试"}):401===s.status?i.P_.open({title:"系统通知",content:"登录失效"}):200!==s.status&&i.P_.open({title:"系统通知",content:"接口异常"}),o}async function s(e,t){let a={"Content-Type":"application/json",Accept:"application/json"};localStorage.getItem("access_token")&&(a.Authorization=localStorage.getItem("access_token"));let n=await fetch("https://crm.yizetech.com.cn/api/"+e,{method:"POST",headers:a,body:JSON.stringify({...t})}),s=await n.json();return 429===n.status?i.P_.open({title:"系统通知",content:"频率限制，请稍后再试"}):401===n.status?i.P_.open({title:"系统通知",content:"登录失效"}):200!==n.status&&i.P_.open({title:"系统通知",content:"接口异常"}),s}}}]);