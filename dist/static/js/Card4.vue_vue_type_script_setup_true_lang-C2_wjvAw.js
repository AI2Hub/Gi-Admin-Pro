import{_ as e}from"./index-Qw7LP-v6.js";import{_ as a}from"./GiForm.vue_vue_type_script_setup_true_lang-3Uw0CXDv.js";import{O as l,a as s}from"./regexp-LyZ7ySAN.js";import{af as t,d as r,U as o,$ as u,b as n,e as i,o as d,c as m,w as c,h as p,g as f,J as y,I as _,V as g}from"./index-CGlxYqiM.js";const v=e=>t.get("/area/list",e),b=r({__name:"Card4",setup(t){const r=o({name:"",phone:"",province:"",city:"",area:""});u((()=>{r.province="440000",r.city="440300",r.area="440307"}));const b=n(),x={form:{},col:{xs:24,sm:12},btns:{hide:!0}},h=o([{type:"input",label:"姓名",field:"name",props:{maxLength:4},rules:[{required:!0,message:"请输入姓名"},{maxLength:4,message:"姓名不超过4个字符"},{match:l,message:"仅支持中文姓名"}]},{type:"input",label:"手机",field:"phone",props:{maxLength:11},rules:[{required:!0,message:"请输入手机号"},{match:s,message:"手机号格式不正确"}]},{type:"select",label:"省",field:"province",col:{xs:24,sm:12,md:12,lg:8},request:()=>v({type:"province"}),resultFormat:e=>e.data.map((e=>({label:e.label,value:e.code}))),cascader:["city"],init:!0},{type:"select",label:"市",field:"city",col:{xs:24,sm:12,md:12,lg:8},request:e=>v({type:"city",code:e.province}),resultFormat:e=>e.data.map((e=>({label:e.label,value:e.code}))),cascader:["area"]},{type:"select",label:"区",field:"area",col:{xs:24,sm:12,md:12,lg:8},request:e=>v({type:"area",code:e.city}),resultFormat:e=>e.data.map((e=>({label:e.label,value:e.code})))},{type:"input",label:"",field:"btns",span:24}]),j=async()=>{var e,a;if(await(null==(a=null==(e=b.value)?void 0:e.formRef)?void 0:a.validate()))return!1;g.success("验证通过")},q=()=>{var e,a;null==(a=null==(e=b.value)?void 0:e.formRef)||a.resetFields()};return(l,s)=>{const t=i("a-button"),o=i("a-space"),u=i("a-row"),n=i("a-col"),g=i("a-alert"),v=i("a-card");return d(),m(v,{title:"配置表单-动态级联"},{extra:c((()=>[])),default:c((()=>[p(u,{gutter:30},{default:c((()=>[p(n,{xs:24,sm:24,md:12},{default:c((()=>[p(f(a),{ref_key:"formRef",ref:b,modelValue:f(r),"onUpdate:modelValue":s[0]||(s[0]=e=>y(r)?r.value=e:null),options:x,columns:f(h)},{btns:c((()=>[p(u,{justify:"end",class:"w-full"},{default:c((()=>[p(o,null,{default:c((()=>[p(t,{type:"primary",onClick:j},{default:c((()=>[_("提交")])),_:1}),p(t,{onClick:q},{default:c((()=>[_("重置")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","columns"])])),_:1}),p(n,{xs:24,sm:24,md:12},{default:c((()=>[p(g,{type:"warning",class:"gi_mb"},{default:c((()=>[_("具体配置看源码")])),_:1}),p(e,{"code-json":JSON.stringify(f(r),null,"\t")},null,8,["code-json"])])),_:1})])),_:1})])),_:1})}}});export{b as _};
