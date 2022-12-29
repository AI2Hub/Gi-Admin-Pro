import"./index-03184213.js";import"./viewer-fd111406.js";import"./index-cab4b3d6.js";import{u as L}from"./useApiSystem-a1967ee3.js";import{f as M,h as z,j as F,J as S,r as a,o as u,c as f,w as t,a as e,u as E,V as v,ad as G,b as H,e as y,a1 as K,i as O,p as P,d as Q,_ as X}from"./_plugin-vue_export-helper-916c4ad5.js";import"./runtime-dom.esm-bundler-fb8da9e1.js";import"./index-47217453.js";import"./vue-router-7a234af7.js";import"./index-faf5766f.js";const Y=M({__name:"EditDeptModal",setup(g,{expose:x}){const b=z(""),c=z(!1),_=F(()=>b.value?"编辑部门":"新增部门"),{deptList:V,getDeptList:I}=L(),o=S({id:"",parentId:"",name:"",sort:0,status:1});return x({add:()=>{b.value="",c.value=!0},edit:async d=>{V.value.length||await I(),b.value=d,c.value=!0}}),(d,n)=>{const m=a("a-tree-select"),r=a("a-form-item"),D=a("a-input"),C=a("a-input-number"),i=a("a-radio"),U=a("a-radio-group"),k=a("a-form"),R=a("a-modal");return u(),f(R,{visible:c.value,"onUpdate:visible":n[4]||(n[4]=l=>c.value=l),title:E(_)},{default:t(()=>[e(k,{ref:"formRef",model:o,size:"medium","auto-label-width":""},{default:t(()=>[e(r,{label:"上级部门",name:"parentId"},{default:t(()=>[e(m,{modelValue:o.parentId,"onUpdate:modelValue":n[0]||(n[0]=l=>o.parentId=l),"allow-clear":"",data:E(V),placeholder:"请选择",fieldNames:{key:"id",title:"name",children:"children"}},null,8,["modelValue","data"])]),_:1}),e(r,{label:"部门名称",field:"name",rules:[{required:!0,message:"请输入部门名称"},{min:3,max:10,message:"长度在 3 - 10个字符"}],"validate-trigger":["change","input"]},{default:t(()=>[e(D,{modelValue:o.name,"onUpdate:modelValue":n[1]||(n[1]=l=>o.name=l),placeholder:"请输入部门名称","allow-clear":""},null,8,["modelValue"])]),_:1}),e(r,{label:"排序",name:"sort",rules:[{required:!0,message:"请输入排序序号"}]},{default:t(()=>[e(C,{modelValue:o.sort,"onUpdate:modelValue":n[2]||(n[2]=l=>o.sort=l),style:{width:"120px"}},null,8,["modelValue"])]),_:1}),e(r,{label:"状态",name:"status"},{default:t(()=>[e(U,{modelValue:o.status,"onUpdate:modelValue":n[3]||(n[3]=l=>o.status=l)},{default:t(()=>[e(i,{value:1},{default:t(()=>[v("正常")]),_:1}),e(i,{value:0},{default:t(()=>[v("禁用")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title"])}}}),w=g=>(P("data-v-0da0f05b"),g=g(),Q(),g),Z={class:"dept-manage"},ee=w(()=>y("span",null,"部门名称",-1)),te=w(()=>y("span",null,"状态",-1)),ae=w(()=>y("span",null,"搜索",-1)),oe=w(()=>y("span",null,"重置",-1)),ne=w(()=>y("span",null,"新增部门",-1)),le={class:"table-box"},se=M({name:"DeptManage"}),de=M({...se,setup(g){const{deptList:x,getDeptList:b}=L(),c=z(),_=S({name:"",status:""}),V=()=>{b()},I=()=>{_.name="",_.status=""},o=()=>{var p;(p=c.value)==null||p.add()},N=p=>{var d;(d=c.value)==null||d.edit(p.id)};return(p,d)=>{const n=a("a-input"),m=a("a-space"),r=a("a-option"),D=a("a-select"),C=a("icon-search"),i=a("a-button"),U=a("icon-sync"),k=a("icon-plus"),R=a("a-row"),l=a("IconDown"),$=a("IconRight"),h=a("a-table-column"),B=a("a-tag"),q=a("icon-edit"),A=a("icon-delete"),T=a("a-popconfirm"),j=a("a-table"),J=G("loading");return u(),H("div",Z,[e(m,{size:20,class:"head"},{default:t(()=>[e(m,null,{default:t(()=>[ee,e(n,{modelValue:_.name,"onUpdate:modelValue":d[0]||(d[0]=s=>_.name=s),placeholder:"请输入部门名称","allow-clear":"",style:{width:"250px"}},null,8,["modelValue"])]),_:1}),e(m,null,{default:t(()=>[te,e(D,{modelValue:_.status,"onUpdate:modelValue":d[1]||(d[1]=s=>_.status=s),placeholder:"部门状态",style:{width:"120px"}},{default:t(()=>[e(r,{value:1},{default:t(()=>[v("正常")]),_:1}),e(r,{value:0},{default:t(()=>[v("禁用")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(i,{type:"primary",onClick:V},{icon:t(()=>[e(C)]),default:t(()=>[ae]),_:1}),e(i,{onClick:I},{icon:t(()=>[e(U)]),default:t(()=>[oe]),_:1})]),_:1})]),_:1}),e(R,{class:"head"},{default:t(()=>[e(i,{type:"primary",onClick:o},{icon:t(()=>[e(k)]),default:t(()=>[ne]),_:1})]),_:1}),y("section",le,[K((u(),f(j,{ref:"tableRef","row-key":"id",data:E(x),scroll:{x:"100%",y:"100%",minWidth:900},pagination:!1,expandable:{width:80}},{"expand-icon":t(({expanded:s})=>[s?(u(),f(l,{key:0})):(u(),f($,{key:1}))]),columns:t(()=>[e(h,{title:"部门名称","data-index":"name"}),e(h,{title:"排序","data-index":"sort",width:100}),e(h,{title:"状态",width:100},{cell:t(({record:s})=>[s.status==1?(u(),f(B,{key:0,color:"green"},{default:t(()=>[v("正常")]),_:1})):(u(),f(B,{key:1,color:"red"},{default:t(()=>[v("禁用")]),_:1}))]),_:1}),e(h,{title:"创建时间","data-index":"createTime",width:200}),e(h,{title:"操作",width:150,align:"left"},{cell:t(({record:s})=>[e(m,null,{default:t(()=>[e(i,{type:"primary",size:"mini",onClick:W=>N(s)},{icon:t(()=>[e(q)]),_:2},1032,["onClick"]),s.parentId?(u(),f(i,{key:0,type:"primary",status:"success",size:"mini",onClick:W=>o(s)},{icon:t(()=>[e(k)]),_:2},1032,["onClick"])):O("",!0),e(T,{type:"warning",content:"您确定要删除该项吗?"},{default:t(()=>[e(i,{type:"primary",status:"danger",size:"mini"},{icon:t(()=>[e(A)]),_:1})]),_:1})]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[J,p.loading]])]),e(Y,{ref_key:"EditDeptModalRef",ref:c},null,512)])}}});const ye=X(de,[["__scopeId","data-v-0da0f05b"]]);export{ye as default};
