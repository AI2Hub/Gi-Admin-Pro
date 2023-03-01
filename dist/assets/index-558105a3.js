import{_ as A,a as E}from"./logo-2a8d7f3e.js";import{d as c,o as u,c as f,h as o,a as e,p as C,l as $,_ as b,K as P,u as R,eK as Y,I as q,r as v,b as n,w as s,g as p,k as D,M as g}from"./index-c333f726.js";import"./index-578bfdd4.js";import{u as F}from"./useLoading-bdf07e12.js";import"./index-203b2448.js";const H="/gi-demo/assets/login-img-1c12ae60.svg",J={height:"1337",width:"1337"},O=o("path",{id:"path-1",opacity:"1","fill-rule":"evenodd",d:"M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"},null,-1),Q={id:"linearGradient-2",x1:"0.79",y1:"0.62",x2:"0.21",y2:"0.86"},W=["stop-color"],X=["stop-color"],oo=o("g",{opacity:"1"},[o("use",{"xlink:href":"#path-1",fill:"url(#linearGradient-2)","fill-opacity":"1"})],-1),eo=c({__name:"CornerTop",props:{startColor:{default:"#28aff0"},endColor:{default:"#120fc4"}},setup(t){return(r,_)=>(u(),f("svg",J,[o("defs",null,[O,o("linearGradient",Q,[o("stop",{offset:"0","stop-color":t.startColor,"stop-opacity":"1"},null,8,W),o("stop",{offset:"1","stop-color":t.endColor,"stop-opacity":"1"},null,8,X)])]),oo]))}}),to={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",height:"896",width:"967.8852157128662"},so=o("path",{id:"path-2",opacity:"1","fill-rule":"evenodd",d:"M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896 C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806 200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"},null,-1),no={id:"linearGradient-3",x1:"0.5",y1:"0",x2:"0.5",y2:"1"},lo=["stop-color"],ao=["stop-color"],io=o("g",{opacity:"1"},[o("use",{"xlink:href":"#path-2",fill:"url(#linearGradient-3)","fill-opacity":"1"})],-1),co=c({__name:"CornerBottom",props:{startColor:{default:"#28aff0"},endColor:{default:"#120fc4"}},setup(t){return(r,_)=>(u(),f("svg",to,[o("defs",null,[so,o("linearGradient",no,[o("stop",{offset:"0","stop-color":t.startColor,"stop-opacity":"1"},null,8,lo),o("stop",{offset:"1","stop-color":t.endColor,"stop-opacity":"1"},null,8,ao)])]),io]))}}),m=t=>(C("data-v-871dfe83"),t=t(),$(),t),ro={class:"login-bg"},_o={class:"corner-top-box"},po={class:"corner-bottom-box"},uo=m(()=>o("div",{class:"fly bg-fly-circle1"},null,-1)),fo=m(()=>o("div",{class:"fly bg-fly-circle2"},null,-1)),mo=m(()=>o("div",{class:"fly bg-fly-circle3"},null,-1)),ho=m(()=>o("div",{class:"fly bg-fly-circle4"},null,-1)),go=c({__name:"index",setup(t){return(r,_)=>(u(),f("div",ro,[o("div",_o,[e(eo)]),o("div",po,[e(co)]),uo,fo,mo,ho]))}});const yo=b(go,[["__scopeId","data-v-871dfe83"]]),k=t=>(C("data-v-112ce968"),t=t(),$(),t),wo={class:"login"},xo={class:"login-box animated flipInY"},vo=k(()=>o("div",{class:"login-left"},[o("img",{class:"login-img",src:H})],-1)),Co={class:"login-right"},$o=k(()=>o("h3",{class:"login-form-title"},[o("img",{class:"logo",src:E}),o("span",null,"Admin Pro")],-1)),bo=c({name:"Login"}),ko=c({...bo,setup(t){const r=P(),_=R(),V=Y(),l=q({username:"admin",password:"123456"}),y=v(!1),{loading:S,setLoading:h}=F(),I=v(""),G=async()=>{try{if(!l.username)return g.warning("请输入账户名称");if(!l.password)return g.warning("请输入账户密码");h(!0),await _.login(l),r.push("/"),h(!1),V.init(),g.success("登录成功")}catch(w){I.value=w.message}finally{h(!1)}};return(w,a)=>{const z=n("icon-user"),B=n("a-input"),d=n("a-form-item"),M=n("icon-lock"),T=n("a-input-password"),L=n("a-checkbox"),N=n("a-link"),U=n("a-row"),x=n("a-button"),K=n("a-space"),Z=n("a-form"),j=A;return u(),f("div",wo,[o("section",xo,[vo,o("div",Co,[e(Z,{model:l,style:{width:"84%"},"label-col-style":{display:"none"},"wrapper-col-style":{flex:1}},{default:s(()=>[$o,e(d,{field:"username"},{default:s(()=>[e(B,{modelValue:l.username,"onUpdate:modelValue":a[0]||(a[0]=i=>l.username=i),placeholder:"账号",size:"medium","allow-clear":""},{prefix:s(()=>[e(z,{"stroke-width":1,style:{fontSize:"20px"}})]),_:1},8,["modelValue"])]),_:1}),e(d,{field:"password"},{default:s(()=>[e(T,{modelValue:l.password,"onUpdate:modelValue":a[1]||(a[1]=i=>l.password=i),placeholder:"密码",size:"medium","allow-clear":""},{prefix:s(()=>[e(M,{"stroke-width":1,style:{fontSize:"20px"}})]),_:1},8,["modelValue"])]),_:1}),e(d,null,{default:s(()=>[e(U,{justify:"space-between",align:"center",style:{width:"100%"}},{default:s(()=>[e(L,{modelValue:y.value,"onUpdate:modelValue":a[2]||(a[2]=i=>y.value=i)},{default:s(()=>[p("记住密码")]),_:1},8,["modelValue"]),e(N,null,{default:s(()=>[p("忘记密码")]),_:1})]),_:1})]),_:1}),e(d,null,{default:s(()=>[e(K,{direction:"vertical",fill:"",style:{width:"100%"}},{default:s(()=>[e(x,{type:"primary",size:"large",long:"",loading:D(S),onClick:G},{default:s(()=>[p("登录")]),_:1},8,["loading"]),e(x,{type:"text",size:"large",long:"",class:"register-btn"},{default:s(()=>[p("注册账号")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])])]),e(j,{class:"theme-btn"}),e(yo)])}}});const Bo=b(ko,[["__scopeId","data-v-112ce968"]]);export{Bo as default};
