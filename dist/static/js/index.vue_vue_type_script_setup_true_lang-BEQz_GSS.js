import{a8 as a,d as e,G as t,e as s,K as l,f as n,o as u,a as o,w as i,i as r,D as d,h as c,E as p,M as f}from"./index-pvGzmBmd.js";const m=e({__name:"index",setup(e){const m=t(),y=s(""),_=async()=>{const e=await a.get("/test/success");f.success("请求成功啦，哈哈~"),y.value=e.data},k=async()=>{await a.get("/test/fail"),f.success("请求成功")},w=()=>{m.editToken("token123456"),f.info("token已过期, 请刷新页面, 登录成功会返回此页面")},{setTabTitle:b}=l(),g=s(""),C=()=>{b(g.value)};return(a,e)=>{const t=n("a-button"),s=n("a-space"),l=n("a-input"),f=n("a-card");return u(),o(f,{title:"API测试",bordered:!1},{default:i((()=>[r(s,{fill:"",wrap:""},{default:i((()=>[r(t,{type:"primary",onClick:_},{default:i((()=>e[1]||(e[1]=[d("成功接口请求")]))),_:1}),r(t,{type:"primary",status:"danger",onClick:k},{default:i((()=>e[2]||(e[2]=[d("失败接口请求")]))),_:1}),r(t,{type:"primary",status:"warning",onClick:w},{default:i((()=>e[3]||(e[3]=[d("设置token过期")]))),_:1})])),_:1}),r(s,{fill:"",wrap:""},{default:i((()=>[r(l,{modelValue:c(g),"onUpdate:modelValue":e[0]||(e[0]=a=>p(g)?g.value=a:null),placeholder:"输入当前tab页签名称"},null,8,["modelValue"]),r(t,{type:"primary",onClick:C},{default:i((()=>e[4]||(e[4]=[d("修改")]))),_:1})])),_:1})])),_:1})}}});export{m as _};
