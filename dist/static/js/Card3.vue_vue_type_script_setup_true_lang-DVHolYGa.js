import{u as e}from"./index-BRh-UKtD.js";import{c as a,d as l}from"./data-DMJbYYJT.js";import{O as t,a as s}from"./regexp-LyZ7ySAN.js";import{_ as r}from"./GiForm-DQHqISNX.js";import{S as i,ac as o,U as u,d as n,b as d,e as p,o as m,c,w as f,h as b,G as v,g as y,H as h,M as g,a0 as _}from"./index-CarvrnfW.js";import{u as w}from"./useForm-Dpygny4b.js";const x=n({__name:"Card3",setup(n){const{width:x}=e(),k={btns:{hide:!0}},V=[{type:"input",label:"姓名",field:"name",props:{maxLength:4},rules:[{required:!0,message:"请输入姓名"},{maxLength:4,message:"姓名不超过4个字符"},{match:t,message:"仅支持中文姓名"}]},{type:"input",label:"手机",field:"phone",props:{maxLength:11},rules:[{required:!0,message:"请输入手机号"},{match:s,message:"手机号格式不正确"}]},{type:"select",label:"性别",field:"sex",options:[{label:"男",value:1},{label:"女",value:0}]},{type:"date-picker",label:"生日",field:"birthday"},{type:"checkbox-group",label:"爱好",field:"hobbys",span:2,options:[{label:"电影",value:"01"},{label:"音乐",value:"02"},{label:"旅行",value:"03"},{label:"游戏",value:"04"}]},{type:"input-number",label:"排序",field:"sort",props:{min:0}},{type:"radio-group",label:"状态",field:"status",options:[{label:"启用",value:1},{label:"禁用",value:0}]},{type:"rate",label:"评分",field:"mark"},{type:"switch",label:"是否隐藏",field:"hide",formItemProps:{extra:"隐藏成绩项"}},{type:"slider",label:"成绩",field:"grade"},{type:"cascader",label:"城市",field:"city",options:a},{type:"tree-select",label:"部门",field:"dept",data:l},{type:"textarea",label:"备注",field:"remark",span:2,formItemProps:{extra:"这里是额外信息"}}],{columns:j,resetColumns:C,setPropsValue:O}=function(e){const a=()=>o(e),l=i(a());return{columns:l,resetColumns:()=>{Object.assign(l,a())},setValue:(e,a,t)=>{if(!l.length)return;const s=l.find((a=>a.field===e));s?s[a]=t:u.warning(`没有这个field属性值-${e}，请检查！`)},setPropsValue:(e,a,t)=>{if(!l.length)return;const s=l.find((a=>a.field===e));s?(s.props||(s.props={}),s.props[a]=t):u.warning(`没有这个field属性值-${e}，请检查！`)}}}(V),{form:P,resetForm:U}=w({name:"",remark:"这是备注这是备注",status:1}),L=d(),F=()=>{C(),U(),g.open({title:"新增",width:"90%",modalStyle:{maxWidth:"600px"},fullscreen:x.value<600,content:()=>_(r,{ref:e=>L.value=e,options:k,columns:j,modelValue:P,"onUpdate:modelValue":e=>Object.assign(P,e)}),onBeforeOk:async()=>{var e,a;try{return!(await(null==(a=null==(e=L.value)?void 0:e.formRef)?void 0:a.validate()))&&(await new Promise((e=>setTimeout((()=>e(!0)),300))),u.success("新增成功！"),!0)}catch{return!1}}})},S=()=>{O("status","disabled",!0),O("hide","disabled",!0);const e={title:"编辑",width:"90%",modalStyle:{maxWidth:"600px"},fullscreen:x.value<600,content:()=>_(r,{ref:e=>L.value=e,options:k,columns:j,modelValue:P,"onUpdate:modelValue":e=>Object.assign(P,e)}),onBeforeOk:async()=>{var e,a;try{return!(await(null==(a=null==(e=L.value)?void 0:e.formRef)?void 0:a.validate()))&&(await new Promise((e=>setTimeout((()=>e(!0)),300))),u.success("编辑成功！"),!0)}catch{return!1}}},a=g.open(e);setTimeout((()=>{P.name="张三",a.update(e)}),300)},T=d(!1),q=d(!1),B=()=>{C(),q.value=!1,T.value=!0},G=()=>{O("status","disabled",!0),O("hide","disabled",!0),q.value=!0,T.value=!0};return(e,a)=>{const l=p("a-alert"),t=p("a-button"),s=p("a-space"),i=p("a-card"),o=p("a-drawer");return m(),c(i,{title:"配置表单-弹窗"},{default:f((()=>[b(l,null,{default:f((()=>a[2]||(a[2]=[v("此示例编辑模式会禁用状态、是否隐藏")]))),_:1}),b(i,{title:"表单-模态框",bordered:!0,class:"gi_mt"},{default:f((()=>[b(s,null,{default:f((()=>[b(t,{type:"primary",onClick:F},{default:f((()=>a[3]||(a[3]=[v("新增")]))),_:1}),b(t,{type:"primary",status:"success",onClick:S},{default:f((()=>a[4]||(a[4]=[v("编辑")]))),_:1})])),_:1})])),_:1}),b(i,{title:"表单-抽屉",bordered:!0,class:"gi_mt"},{default:f((()=>[b(s,null,{default:f((()=>[b(t,{type:"primary",onClick:B},{default:f((()=>a[5]||(a[5]=[v("新增")]))),_:1}),b(t,{type:"primary",status:"success",onClick:G},{default:f((()=>a[6]||(a[6]=[v("编辑")]))),_:1})])),_:1})])),_:1}),b(o,{visible:y(T),"onUpdate:visible":a[1]||(a[1]=e=>h(T)?T.value=e:null),title:y(q)?"编辑":"新增",width:y(x)>=600?600:"100%"},{default:f((()=>[b(y(r),{modelValue:y(P),"onUpdate:modelValue":a[0]||(a[0]=e=>h(P)?P.value=e:null),options:k,columns:y(j)},null,8,["modelValue","columns"])])),_:1},8,["visible","title","width"])])),_:1})}}});export{x as _};
