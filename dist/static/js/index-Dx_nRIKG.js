import{_ as e}from"./index-BZE5fDfe.js";import{_ as n}from"./index-nBUI5_KH.js";import{_ as t}from"./GiCellStatus.vue_vue_type_script_setup_true_lang-CJUs3QPe.js";import{_ as a}from"./GiCellGender.vue_vue_type_script_setup_true_lang-CY3DizE5.js";import{_ as o}from"./GiForm-D2LzhpHD.js";import{d as i,S as s,k as l,b as r,e as d,o as c,f as p,h as m,g as u,H as g,w as f,i as b,G as y,a2 as h,ff as w,U as x,ag as _,_ as k}from"./index-B_H-0aOB.js";import{u as v}from"./useBreakpoint-BPvpvw3e.js";import{u as C}from"./useDict-W4bbc9i9.js";import{b as I}from"./index-DLJUdIJG.js";import{_ as G}from"./index-CWjC7o0Y.js";import"./index-D5rwG4lw.js";const T={class:"table-page"},D=["src"],j=k(i({name:"TableCustom2",__name:"index",setup(i){const{data:k}=C({code:"status"}),j=s({}),N=s({form:{layout:"inline"},grid:{cols:{xs:1,sm:2,md:3,lg:4,xl:4,xxl:4}},fold:{enable:!0,defaultCollapsed:!0}}),z=l((()=>[{type:"input",label:"姓名",field:"name"},{type:"input",label:"手机",field:"phone",props:{maxLength:11}},{type:"select",label:"类型",field:"status",options:k.value},{type:"date-picker",label:"创建日期",field:"createTime"},{type:"input",label:"地址",field:"address"}])),P=r(!1),V=[{title:"序号",width:66,align:"center",render:({rowIndex:e})=>h("span",{},e+1)},{title:"姓名",dataIndex:"name",width:120,render:({record:e})=>h(w,{onClick:()=>function(e){x.success(`点击了${e.name}`)}(e)},{default:()=>e.name})},{title:"头像",width:80,align:"center",slotName:"avatar"},{title:"手机号",dataIndex:"phone",width:150},{title:"性别",dataIndex:"gender",width:100,align:"center",slotName:"gender"},{title:"账户",dataIndex:"account",width:120},{title:"状态",width:100,slotName:"status",align:"center"},{title:"创建时间",dataIndex:"createTime",ellipsis:!0,tooltip:!0,sortable:{sortDirections:["ascend","descend"]}},{title:"地址",dataIndex:"address",ellipsis:!0,tooltip:!0},{title:"操作",width:200,slotName:"action",align:"center"}],{tableData:F,getTableData:M,pagination:O,search:S}=v((e=>I(e)));const L=()=>{x.info("点击了新增")},A=()=>{x.error("点击了批量删除")},J=()=>{x.warning("点击了导入")},R=()=>new Promise((e=>setTimeout((()=>e(!0)),300))),$=()=>{_.open({title:"数据结构",content:()=>h(G,{codeJson:"\n<template>\n  <div class=\"table-page\">\n    <GiForm v-model=\"form\" :options=\"options\" :columns=\"QueryFormColumns\" @search=\"search\" @reset=\"search\">\n    </GiForm>\n\n    <GiTable row-key=\"id\" :loading=\"loading\" :columns=\"columns\" :data=\"tableData\"\n      :scroll=\"{ x: '100%', y: '100%', minWidth: 1300 }\" :row-selection=\"{ type: 'checkbox', showCheckedAll: true }\"\n      :pagination=\"pagination\" :disabled-column-keys=\"['序号', 'name']\" @refresh=\"getTableData\">\n      <template #custom-title>\n        <a-button type=\"primary\" @click=\"onAdd\">\n          <template #icon><icon-plus /></template>\n          <span>新增</span>\n        </a-button>\n        <a-button type=\"primary\" status=\"danger\" @click=\"onMulDelete\">\n          <template #icon><icon-delete /></template>\n          <span>删除</span>\n        </a-button>\n        <a-button @click=\"onImport\">\n          <template #icon><icon-export /></template>\n          <span>导入</span>\n        </a-button>\n        <a-button type=\"primary\" status=\"warning\" @click=\"onViewCode\">\n          <template #icon><icon-code /></template>\n        </a-button>\n      </template>\n      <template #avatar=\"{ record }\">\n        <a-avatar :size=\"28\" shape=\"circle\">\n          <img :src=\"record.avatar\" />\n        </a-avatar>\n      </template>\n      <template #gender=\"{ record }\">\n        <GiCellGender :gender=\"record.gender\"></GiCellGender>\n      </template>\n      <template #status=\"{ record }\">\n        <GiCellStatus :status=\"record.status\"></GiCellStatus>\n      </template>\n      <template #action>\n        <a-space>\n          <a-button type=\"primary\" size=\"mini\">修改</a-button>\n          <a-button size=\"mini\">详情</a-button>\n          <a-popconfirm type=\"warning\" content=\"您确定要删除该项吗?\" @before-ok=\"onDelete\">\n            <a-button type=\"primary\" status=\"danger\" size=\"mini\">删除</a-button>\n          </a-popconfirm>\n        </a-space>\n      </template>\n    </GiTable>\n\n    <GiFooter></GiFooter>\n  </div>\n</template>\n\n<script setup lang=\"ts\">\nimport { Drawer, Link, Message, type PopconfirmInstance, type TableInstance } from '@arco-design/web-vue'\nimport CodeJson from './code-json'\nimport { useTable } from '@/hooks'\nimport { useDict } from '@/hooks/app'\nimport { type PersonItem, getPersonList } from '@/apis/person'\nimport type { Columns, Options } from '@/components/GiForm'\nimport GiCodeView from '@/components/GiCodeView/index.vue'\n\ndefineOptions({ name: 'TableCustom2' })\nconst { data: statusOptions } = useDict({ code: 'status' })\nconst form = reactive({})\n\nconst options: Options = reactive({\n  form: { layout: 'inline' },\n  grid: { cols: { xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 } },\n  btns: {},\n  fold: { enable: true, index: 2, defaultCollapsed: true }\n})\n\nconst QueryFormColumns = computed<Columns>(() => [\n  {\n    type: 'input',\n    label: '姓名',\n    field: 'name'\n  },\n  {\n    type: 'input',\n    label: '手机',\n    field: 'phone',\n    props: {\n      maxLength: 11\n    }\n  },\n  {\n    type: 'select',\n    label: '类型',\n    field: 'status',\n    options: statusOptions.value\n  },\n  {\n    type: 'date-picker',\n    label: '创建日期',\n    field: 'createTime'\n  },\n  {\n    type: 'input',\n    label: '地址',\n    field: 'address'\n  }\n])\n\nconst loading = ref(false)\nconst columns: TableInstance['columns'] = [\n  { title: '序号', width: 66, align: 'center', render: ({ rowIndex }) => h('span', {}, rowIndex + 1) },\n  {\n    title: '姓名',\n    dataIndex: 'name',\n    width: 120,\n    render: ({ record }) =>\n      h(Link, { onClick: () => onClickName(record as PersonItem) }, { default: () => record.name })\n  },\n  { title: '头像', width: 80, align: 'center', slotName: 'avatar' },\n  { title: '手机号', dataIndex: 'phone', width: 150 },\n  { title: '性别', dataIndex: 'gender', width: 100, align: 'center', slotName: 'gender' },\n  { title: '账户', dataIndex: 'account', width: 120 },\n  { title: '状态', width: 100, slotName: 'status', align: 'center' },\n  {\n    title: '创建时间',\n    dataIndex: 'createTime',\n    ellipsis: true,\n    tooltip: true,\n    sortable: {\n      sortDirections: ['ascend', 'descend']\n    }\n  },\n  { title: '地址', dataIndex: 'address', ellipsis: true, tooltip: true },\n  { title: '操作', width: 200, slotName: 'action', align: 'center' }\n]\n\nconst { tableData, getTableData, pagination, search } = useTable((p) => getPersonList(p))\n\nfunction onClickName(record: PersonItem) {\n  Message.success(`点击了${ record.name } `)\n}\n\nconst onAdd = () => {\n  Message.info('点击了新增')\n}\n\nconst onMulDelete = () => {\n  Message.error('点击了批量删除')\n}\n\nconst onImport = () => {\n  Message.warning('点击了导入')\n}\n\nconst onDelete: PopconfirmInstance['onBeforeOk'] = () => {\n  return new Promise((resolve) => setTimeout(() => resolve(true), 300))\n}\n\n// 查看代码\nconst onViewCode = () => {\n  Drawer.open({\n    title: '数据结构',\n    content: () => h(GiCodeView, { codeJson: CodeJson, type: 'vue' }),\n    width: '100%'\n  })\n}\n<\/script>\n\n<style lang=\"scss\" scoped>\n.table-page {\n  height: 100%;\n  overflow: hidden;\n  margin: $margin;\n  background: var(--color-bg-1);\n  padding: $padding;\n  padding-bottom: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n}\n</style>\n",type:"vue"}),width:"100%"})};return(i,s)=>{const l=o,r=d("icon-plus"),h=d("a-button"),w=d("icon-delete"),x=d("icon-export"),_=d("icon-code"),k=d("a-avatar"),v=a,C=t,I=d("a-popconfirm"),G=d("a-space"),B=n,Q=e;return c(),p("div",T,[m(l,{modelValue:u(j),"onUpdate:modelValue":s[0]||(s[0]=e=>g(j)?j.value=e:null),options:u(N),columns:u(z),onSearch:u(S),onReset:u(S)},null,8,["modelValue","options","columns","onSearch","onReset"]),m(B,{"row-key":"id",loading:u(P),columns:V,data:u(F),scroll:{x:"100%",y:"100%",minWidth:1300},"row-selection":{type:"checkbox",showCheckedAll:!0},pagination:u(O),"disabled-column-keys":["序号","name"],onRefresh:u(M)},{"custom-title":f((()=>[m(h,{type:"primary",onClick:L},{icon:f((()=>[m(r)])),default:f((()=>[s[1]||(s[1]=b("span",null,"新增",-1))])),_:1}),m(h,{type:"primary",status:"danger",onClick:A},{icon:f((()=>[m(w)])),default:f((()=>[s[2]||(s[2]=b("span",null,"删除",-1))])),_:1}),m(h,{onClick:J},{icon:f((()=>[m(x)])),default:f((()=>[s[3]||(s[3]=b("span",null,"导入",-1))])),_:1}),m(h,{type:"primary",status:"warning",onClick:$},{icon:f((()=>[m(_)])),_:1})])),avatar:f((({record:e})=>[m(k,{size:28,shape:"circle"},{default:f((()=>[b("img",{src:e.avatar},null,8,D)])),_:2},1024)])),gender:f((({record:e})=>[m(v,{gender:e.gender},null,8,["gender"])])),status:f((({record:e})=>[m(C,{status:e.status},null,8,["status"])])),action:f((()=>[m(G,null,{default:f((()=>[m(h,{type:"primary",size:"mini"},{default:f((()=>s[4]||(s[4]=[y("修改")]))),_:1}),m(h,{size:"mini"},{default:f((()=>s[5]||(s[5]=[y("详情")]))),_:1}),m(I,{type:"warning",content:"您确定要删除该项吗?",onBeforeOk:R},{default:f((()=>[m(h,{type:"primary",status:"danger",size:"mini"},{default:f((()=>s[6]||(s[6]=[y("删除")]))),_:1})])),_:1})])),_:1})])),_:1},8,["loading","data","pagination","onRefresh"]),m(Q)])}}}),[["__scopeId","data-v-1ecea0fc"]]);export{j as default};
