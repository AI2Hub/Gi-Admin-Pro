import{_ as e}from"./GiForm.vue_vue_type_script_setup_true_lang-3Uw0CXDv.js";import{u as a}from"./index-D-ZbT48E.js";import{_ as s}from"./index-Qw7LP-v6.js";import{d as t,U as l,e as o,o as n,c as i,w as u,h as r,g as p,J as d,i as m,f6 as c,a1 as f,Q as _,V as x}from"./index-CGlxYqiM.js";const g=m("span",null,"查看JSON配置",-1),b=t({__name:"Card1",setup(t){const{width:m}=a(),b=l({name:"",phone:"",status:""}),h={form:{layout:"inline"},col:{xs:24,sm:12},fold:{enable:!0,index:0},btns:{col:{xs:24,sm:12}}},y=l([{type:"input",label:"姓名",field:"name",props:{maxLength:4}},{type:"input",label:"手机",field:"phone",props:{maxLength:11}},{type:"select",label:"状态",field:"status",options:[{label:"启用",value:1},{label:"禁用",value:0}],props:{placeholder:"状态"}}]),j=()=>{c.open({title:"数据结构",content:()=>f(s,{codeJson:JSON.stringify(_(y),null,"\t")}),width:m.value<500?"100%":560})},v=()=>{x.info("点击了搜索")},w=()=>{x.info("点击了重置")};return(a,t)=>{const l=o("icon-code"),m=o("a-button"),c=e,f=o("a-col"),_=o("a-row"),x=o("a-card");return n(),i(x,{title:"配置表单-查询"},{extra:u((()=>[r(m,{type:"primary",status:"warning",onClick:j},{icon:u((()=>[r(l)])),default:u((()=>[g])),_:1})])),default:u((()=>[r(_,{gutter:30},{default:u((()=>[r(f,{xs:24,sm:24,md:12},{default:u((()=>[r(c,{modelValue:p(b),"onUpdate:modelValue":t[0]||(t[0]=e=>d(b)?b.value=e:null),class:"gi_mb",options:h,columns:p(y),onSearch:v,onReset:w},null,8,["modelValue","columns"])])),_:1}),r(f,{xs:24,sm:24,md:12},{default:u((()=>[r(s,{"code-json":JSON.stringify(p(b),null,"\t")},null,8,["code-json"])])),_:1})])),_:1})])),_:1})}}});export{b as _};
