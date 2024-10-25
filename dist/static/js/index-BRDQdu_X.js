import{_ as e}from"./index-CUktOpYs.js";import{_ as t}from"./index-DsEu8Ma7.js";import{_ as a}from"./GiCellStatus.vue_vue_type_script_setup_true_lang-CnjzUVwI.js";import{_ as n}from"./GiCellGender.vue_vue_type_script_setup_true_lang-BCM38Epj.js";import{_ as s}from"./GiForm-DQHqISNX.js";import{d as i,S as l,b as o,e as r,o as d,f as p,h as u,g as c,H as m,w as f,i as _,G as g,a0 as x,ff as h,U as y,_ as b}from"./index-CarvrnfW.js";import{u as w}from"./useBreakpoint-CjBpUD0M.js";import{u as k}from"./useDict-Bu1ViEBi.js";import{b as v}from"./index-_G_QMv-F.js";import"./index-BRh-UKtD.js";const j={class:"table-page"},C=["src"],I=b(i({name:"TableCustom2",__name:"index",setup(i){const{data:b}=k({code:"status"}),I=l({}),T=l({form:{layout:"inline"},grid:{cols:{xs:1,sm:2,md:3,lg:4,xl:4,xxl:4}},btns:{},fold:{enable:!0,index:2,defaultCollapsed:!0}}),z=l([{type:"input",label:"姓名",field:"name"},{type:"input",label:"手机",field:"phone",props:{maxLength:11}},{type:"select",label:"类型",field:"status",options:b},{type:"date-picker",label:"创建日期",field:"createTime"},{type:"input",label:"地址",field:"address"}]),G=o(!1),D=[{title:"序号",width:66,align:"center",render:({rowIndex:e})=>x("span",{},e+1)},{title:"姓名",dataIndex:"name",width:120,render:({record:e})=>x(h,{onClick:()=>function(e){y.success(`点击了${e.name}`)}(e)},{default:()=>e.name})},{title:"头像",width:80,align:"center",slotName:"avatar"},{title:"手机号",dataIndex:"phone",width:150},{title:"性别",dataIndex:"gender",width:100,align:"center",slotName:"gender"},{title:"账户",dataIndex:"account",width:120},{title:"状态",width:100,slotName:"status",align:"center"},{title:"创建时间",dataIndex:"createTime",ellipsis:!0,tooltip:!0,sortable:{sortDirections:["ascend","descend"]}},{title:"地址",dataIndex:"address",ellipsis:!0,tooltip:!0},{title:"操作",width:200,slotName:"action",align:"center"}],{tableData:N,getTableData:R,pagination:S,search:V}=w((e=>v(e)));const B=()=>{y.info("点击了新增")},U=()=>{y.error("点击了批量删除")},O=()=>{y.warning("点击了导入")},A=()=>new Promise((e=>setTimeout((()=>e(!0)),300)));return(i,l)=>{const o=s,x=r("icon-plus"),h=r("a-button"),y=r("icon-delete"),b=r("icon-export"),w=r("a-avatar"),k=n,v=a,F=r("a-popconfirm"),H=r("a-space"),J=t,L=e;return d(),p("div",j,[u(o,{modelValue:c(I),"onUpdate:modelValue":l[0]||(l[0]=e=>m(I)?I.value=e:null),options:c(T),columns:c(z),onSearch:c(V),onReset:c(V)},null,8,["modelValue","options","columns","onSearch","onReset"]),u(J,{"row-key":"id",loading:c(G),columns:D,data:c(N),scroll:{x:"100%",y:"100%",minWidth:1300},"row-selection":{type:"checkbox",showCheckedAll:!0},pagination:c(S),"disabled-column-keys":["序号","name"],onRefresh:c(R)},{"custom-title":f((()=>[u(h,{type:"primary",onClick:B},{icon:f((()=>[u(x)])),default:f((()=>[l[1]||(l[1]=_("span",null,"新增",-1))])),_:1}),u(h,{type:"primary",status:"danger",onClick:U},{icon:f((()=>[u(y)])),default:f((()=>[l[2]||(l[2]=_("span",null,"删除",-1))])),_:1}),u(h,{onClick:O},{icon:f((()=>[u(b)])),default:f((()=>[l[3]||(l[3]=_("span",null,"导入",-1))])),_:1})])),avatar:f((({record:e})=>[u(w,{size:28,shape:"circle"},{default:f((()=>[_("img",{src:e.avatar},null,8,C)])),_:2},1024)])),gender:f((({record:e})=>[u(k,{gender:e.gender},null,8,["gender"])])),status:f((({record:e})=>[u(v,{status:e.status},null,8,["status"])])),action:f((()=>[u(H,null,{default:f((()=>[u(h,{type:"primary",size:"mini"},{default:f((()=>l[4]||(l[4]=[g("修改")]))),_:1}),u(h,{size:"mini"},{default:f((()=>l[5]||(l[5]=[g("详情")]))),_:1}),u(F,{type:"warning",content:"您确定要删除该项吗?",onBeforeOk:A},{default:f((()=>[u(h,{type:"primary",status:"danger",size:"mini"},{default:f((()=>l[6]||(l[6]=[g("删除")]))),_:1})])),_:1})])),_:1})])),_:1},8,["loading","data","pagination","onRefresh"]),u(L)])}}}),[["__scopeId","data-v-6c199766"]]);export{I as default};
