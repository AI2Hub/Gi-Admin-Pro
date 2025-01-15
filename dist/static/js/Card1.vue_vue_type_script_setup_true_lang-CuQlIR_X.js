import{_ as n}from"./GiForm-DfUBgVih.js";import{u as e}from"./index-CrPAF3hj.js";import{_ as o}from"./index-CQ1dOvPc.js";import{d as t,S as a,e as s,o as l,c as r,w as i,h as p,i as m,g as c,H as d,a5 as u,a3 as f,V as h}from"./index-BB3GXKEF.js";const w=t({__name:"Card1",setup(t){const{width:w}=e(),g=a({name:"",phone:"",status:""}),y=a([{type:"input",label:"姓名",field:"name",props:{maxLength:4}},{type:"input",label:"手机",field:"phone",props:{maxLength:11}},{type:"select",label:"状态",field:"status",options:[{label:"启用",value:1},{label:"禁用",value:0}],props:{placeholder:"自定义placeholder"}}]),b=()=>{u.open({title:"数据结构",content:()=>f(o,{codeJson:"\n<template>\n  <a-card title=\"配置表单-查询\">\n    <template #extra>\n      <a-button type=\"primary\" status=\"warning\" @click=\"onViewCode\">\n        <template #icon><icon-code /></template>\n        <span>查看代码</span>\n      </a-button>\n    </template>\n    <a-row :gutter=\"30\">\n      <a-col :xs=\"24\" :sm=\"24\" :md=\"12\">\n        <GiForm v-model=\"form\" class=\"gi_mb\" search :columns=\"columns\" @search=\"search\" @reset=\"reset\">\n        </GiForm>\n      </a-col>\n      <a-col :xs=\"24\" :sm=\"24\" :md=\"12\">\n        <GiCodeView :code-json=\"JSON.stringify(form, null, '\t')\"></GiCodeView>\n      </a-col>\n    </a-row>\n  </a-card>\n</template>\n\n<script setup lang=\"ts\">\nimport { Drawer, Message } from '@arco-design/web-vue'\nimport { useWindowSize } from '@vueuse/core'\nimport Card1Json from './code/card1-json'\nimport type { ColumnItem } from '@/components/GiForm'\nimport GiCodeView from '@/components/GiCodeView/index.vue'\n\nconst { width } = useWindowSize()\n\nconst form = reactive({\n  name: '',\n  phone: '',\n  status: ''\n})\n\nconst columns: ColumnItem[] = reactive([\n  {\n    type: 'input',\n    label: '姓名',\n    field: 'name',\n    props: {\n      maxLength: 4\n    }\n  },\n  {\n    type: 'input',\n    label: '手机',\n    field: 'phone',\n    props: {\n      maxLength: 11\n    }\n  },\n  {\n    type: 'select',\n    label: '状态',\n    field: 'status',\n    options: [\n      { label: '启用', value: 1 },\n      { label: '禁用', value: 0 }\n    ],\n    props: {\n      placeholder: '自定义placeholder'\n    }\n  }\n])\n\nconst onViewCode = () => {\n  Drawer.open({\n    title: '数据结构',\n    content: () => h(GiCodeView, { codeJson: Card1Json, type: 'vue' }),\n    width: width.value < 500 ? '100%' : 560\n  })\n}\n\nconst search = () => {\n  Message.info('点击了搜索')\n}\n\nconst reset = () => {\n  Message.info('点击了重置')\n}\n<\/script>\n\n<style lang=\"scss\" scoped></style>\n",type:"vue"}),width:w.value<500?"100%":560})},v=()=>{h.info("点击了搜索")},x=()=>{h.info("点击了重置")};return(e,t)=>{const a=s("icon-code"),u=s("a-button"),f=n,h=s("a-col"),w=s("a-row"),C=s("a-card");return l(),r(C,{title:"配置表单-查询"},{extra:i((()=>[p(u,{type:"primary",status:"warning",onClick:b},{icon:i((()=>[p(a)])),default:i((()=>[t[1]||(t[1]=m("span",null,"查看代码",-1))])),_:1})])),default:i((()=>[p(w,{gutter:30},{default:i((()=>[p(h,{xs:24,sm:24,md:12},{default:i((()=>[p(f,{modelValue:c(g),"onUpdate:modelValue":t[0]||(t[0]=n=>d(g)?g.value=n:null),class:"gi_mb",search:"",columns:c(y),onSearch:v,onReset:x},null,8,["modelValue","columns"])])),_:1}),p(h,{xs:24,sm:24,md:12},{default:i((()=>[p(o,{"code-json":JSON.stringify(c(g),null,"\t")},null,8,["code-json"])])),_:1})])),_:1})])),_:1})}}});export{w as _};
