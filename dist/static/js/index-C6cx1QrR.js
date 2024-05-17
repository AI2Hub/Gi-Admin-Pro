import{_ as e}from"./index-Bu1xOaxo.js";import{_ as t}from"./index-B8w8JKvq.js";import{_ as a}from"./GiCellStatus.vue_vue_type_script_setup_true_lang-Bz_joLVP.js";import{_ as n}from"./GiCellGender.vue_vue_type_script_setup_true_lang-BNXMj2tm.js";import{_ as s}from"./GiForm.vue_vue_type_script_setup_true_lang-3Uw0CXDv.js";import{u as l}from"./useBreakpoint-DZAtE_Gr.js";import{d as i,U as o,b as r,e as d,o as u,f as c,h as p,g as m,J as f,w as _,i as g,I as x,a1 as y,fg as h,V as v,y as w,z as b,_ as k}from"./index-CGlxYqiM.js";import{u as j}from"./useBreakpointIndex-U-o6L19f.js";import{b as C}from"./index-C7xvcKr5.js";import{u as I}from"./useDict-bKONWZua.js";import"./index-D-ZbT48E.js";const z=e=>(w("data-v-003ed0c2"),e=e(),b(),e),T={class:"table-page"},N=z((()=>g("span",null,"新增",-1))),V=z((()=>g("span",null,"删除",-1))),B=z((()=>g("span",null,"导入",-1))),G=["src"],S=k(i({name:"TableCustom2",__name:"index",setup(i){const{data:w}=I({code:"status"}),b=o({}),k=o({form:{layout:"inline"},col:{xs:24,sm:12,md:12,lg:8,xl:8,xxl:6},btns:{col:{xs:24,sm:12,md:12,lg:8,xl:8,xxl:6}},fold:{enable:!0,index:2,defaultCollapsed:!0}});j((e=>{k.fold&&(k.fold.index=e)}));const z=o([{type:"input",label:"姓名",field:"name"},{type:"input",label:"手机",field:"phone",props:{maxLength:11}},{type:"select",label:"类型",field:"status",options:w},{type:"date-picker",label:"创建日期",field:"createTime"},{type:"input",label:"地址",field:"address"}]),S=r(!1),D=r([]),R=[{title:"序号",width:66,align:"center",render:({rowIndex:e})=>y("span",{},e+1)},{title:"姓名",dataIndex:"name",width:120,render:({record:e})=>y(h,{onClick:()=>function(e){v.success(`点击了${e.name}`)}(e)},{default:()=>e.name})},{title:"头像",width:80,align:"center",slotName:"avatar"},{title:"手机号",dataIndex:"phone",width:150},{title:"性别",dataIndex:"gender",width:100,align:"center",slotName:"gender"},{title:"账户",dataIndex:"account",width:120},{title:"状态",width:100,slotName:"status",align:"center"},{title:"创建时间",dataIndex:"createTime",ellipsis:!0,tooltip:!0,sortable:{sortDirections:["ascend","descend"]}},{title:"地址",dataIndex:"address",ellipsis:!0,tooltip:!0},{title:"操作",width:200,slotName:"action",align:"center"}],{pagination:U,setTotal:A}=l((()=>F()));async function F(){try{S.value=!0;const e=await C({page:U.current,size:U.pageSize});D.value=e.data.records,A(e.data.total)}finally{S.value=!1}}F();const J=()=>{U.onChange(1)};const L=()=>{v.info("点击了新增")},O=()=>{v.error("点击了批量删除")},P=()=>{v.warning("点击了导入")},W=()=>new Promise((e=>setTimeout((()=>e(!0)),300)));return(l,i)=>{const o=s,r=d("icon-plus"),y=d("a-button"),h=d("icon-delete"),v=d("icon-export"),w=d("a-avatar"),j=n,C=a,I=d("a-popconfirm"),A=d("a-space"),X=t,$=e;return u(),c("div",T,[p(o,{modelValue:m(b),"onUpdate:modelValue":i[0]||(i[0]=e=>f(b)?b.value=e:null),options:m(k),columns:m(z),onSearch:J,onReset:J},null,8,["modelValue","options","columns"]),p(X,{"row-key":"id",loading:m(S),columns:R,data:m(D),scroll:{x:"100%",y:"100%",minWidth:1300},"row-selection":{type:"checkbox",showCheckedAll:!0},pagination:m(U),"disabled-column-keys":["序号","name"],onRefresh:F},{"custom-title":_((()=>[p(y,{type:"primary",onClick:L},{icon:_((()=>[p(r)])),default:_((()=>[N])),_:1}),p(y,{type:"primary",status:"danger",onClick:O},{icon:_((()=>[p(h)])),default:_((()=>[V])),_:1}),p(y,{onClick:P},{icon:_((()=>[p(v)])),default:_((()=>[B])),_:1})])),avatar:_((({record:e})=>[p(w,{size:28,shape:"circle"},{default:_((()=>[g("img",{src:e.avatar},null,8,G)])),_:2},1024)])),gender:_((({record:e})=>[p(j,{gender:e.gender},null,8,["gender"])])),status:_((({record:e})=>[p(C,{status:e.status},null,8,["status"])])),action:_((()=>[p(A,null,{default:_((()=>[p(y,{type:"primary",size:"mini"},{default:_((()=>[x("修改")])),_:1}),p(y,{size:"mini"},{default:_((()=>[x("详情")])),_:1}),p(I,{type:"warning",content:"您确定要删除该项吗?",onBeforeOk:W},{default:_((()=>[p(y,{type:"primary",status:"danger",size:"mini"},{default:_((()=>[x("删除")])),_:1})])),_:1})])),_:1})])),_:1},8,["loading","data","pagination"]),p($)])}}}),[["__scopeId","data-v-003ed0c2"]]);export{S as default};
