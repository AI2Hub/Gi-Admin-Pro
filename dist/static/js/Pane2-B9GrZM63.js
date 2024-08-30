import{_ as n}from"./index-Di-NXMIM.js";import{d as e,ae as t,b as a,e as o,o as r,c as i,w as l,h as s,I as c,i as p,g as d,M as u,y as m,z as g,_ as b}from"./index-JnUDrixV.js";import{u as w}from"./useBreakpoint-Bgw8rwYt.js";import{b as f}from"./index-BEgyPwub.js";import{_ as y}from"./GiCellStatus.vue_vue_type_script_setup_true_lang-D0GFp84H.js";import"./index-BlgP3rgD.js";const x=n=>(m("data-v-a19f4623"),n=n(),g(),n),_=x((()=>p("span",null,"这里采用 模板 + tsx 方式使用表格，具体看代码使用",-1))),h=x((()=>p("span",null,"查看代码",-1))),v={class:"gi_table_box"},C=b(e({__name:"Pane2",setup(e){const m=[{title:"序号",width:68,render:({rowIndex:n})=>s("span",null,[n+1])},{title:"姓名",dataIndex:"name"},{title:"创建时间",dataIndex:"createTime",width:180},{title:"地址",dataIndex:"address",ellipsis:!0,tooltip:!0},{title:"比例",width:68,align:"center",render:({record:n})=>s(o("a-progress"),{size:"mini",status:I(n.proportion),percent:n.proportion/100},null)},{title:"状态",width:100,align:"center",render:({record:n})=>s(y,{status:n.status},null)},{title:"操作",width:200,align:"center",render:()=>s(o("a-space"),null,{default:()=>[s(o("a-button"),{type:"primary",size:"mini"},{default:()=>[s(o("icon-edit"),null,null)]}),s(o("a-button"),{size:"mini"},{default:()=>[c("详情")]}),s(o("a-popconfirm"),{type:"warning",content:"您确定要删除该项吗?",onBeforeOk:()=>new Promise((n=>setTimeout((()=>n(!0)),300)))},{default:()=>[s(o("a-button"),{type:"primary",status:"danger",size:"mini"},{default:()=>[s(o("icon-delete"),null,null)]})]})]})}],{tableData:g,getTableData:b,pagination:x,loading:C}=w((n=>f(n)));function I(n){return n<30?"danger":n<60?"warning":"success"}t((()=>{b()}));const T=a([]),k=n=>{T.value=n},D=n=>{T.value=n?g.value.map((n=>n.id)):[]};const P=()=>{u.open({title:"查看代码",content:()=>s(n,{type:"vue",codeJson:'\n<template>\n  <a-card :bordered="false" class="gi_card pane2">\n    <a-row justify="space-between" align="center" wrap>\n      <a-space wrap>\n        <a-alert type="normal">\n          <template #icon>\n            <icon-exclamation-circle-fill />\n          </template>\n          <span>这里采用 模板 + tsx 方式使用表格，具体看代码使用</span>\n        </a-alert>\n      </a-space>\n\n      <a-space wrap>\n        <a-button type="primary" status="success" @click="onViewCode">\n          <template #icon><icon-code /></template>\n          <span>查看代码</span>\n        </a-button>\n        <a-button type="primary">导出</a-button>\n      </a-space>\n    </a-row>\n\n    <section class="gi_table_box">\n      <a-table row-key="id" :loading="loading" :bordered="{ cell: true }" :columns="columns" :data="tableData"\n        :scroll="{ x: \'100%\', y: \'100%\', minWidth: 1000 }" :row-selection="{ type: \'checkbox\', showCheckedAll: true }"\n        :pagination="pagination" @select="select" @select-all="selectAll">\n      </a-table>\n    </section>\n  </a-card>\n</template>\n\n<script lang="tsx" setup>\nimport type { PopconfirmInstance, TableColumnData, TableInstance } from \'@arco-design/web-vue\'\nimport { Modal } from \'@arco-design/web-vue\'\nimport Pane2Code from \'./Pane2Code\'\nimport { useTable } from \'@/hooks\'\nimport { getPersonList } from \'@/apis/person\'\nimport GiCellStatus from \'@/components/GiCell/GiCellStatus.vue\'\n\nconst columns: TableColumnData[] = [\n  {\n    title: \'序号\',\n    width: 68,\n    render: ({ rowIndex }) => <span>{rowIndex + 1}</span>\n  },\n  {\n    title: \'姓名\',\n    dataIndex: \'name\'\n  },\n  {\n    title: \'创建时间\',\n    dataIndex: \'createTime\',\n    width: 180\n  },\n  {\n    title: \'地址\',\n    dataIndex: \'address\',\n    ellipsis: true,\n    tooltip: true\n  },\n  {\n    title: \'比例\',\n    width: 68,\n    align: \'center\',\n    render: ({ record }) => (\n      <a-progress size="mini" status={getProportionColor(record.proportion)} percent={record.proportion / 100} />\n    )\n  },\n  {\n    title: \'状态\',\n    width: 100,\n    align: \'center\',\n    render: ({ record }) => {\n      return <GiCellStatus status={record.status} />\n    }\n  },\n  {\n    title: \'操作\',\n    width: 200,\n    align: \'center\',\n    render: () => (\n      <a-space>\n        <a-button type="primary" size="mini">\n          <icon-edit></icon-edit>\n        </a-button>\n        <a-button size="mini">详情</a-button>\n        <a-popconfirm type="warning" content="您确定要删除该项吗?" onBeforeOk={() => onDelete()}>\n          <a-button type="primary" status="danger" size="mini">\n            <icon-delete />\n          </a-button>\n        </a-popconfirm>\n      </a-space>\n    )\n  }\n]\n\nconst { tableData, getTableData, pagination, loading } = useTable((p) => getPersonList(p))\n\nonActivated(() => {\n  getTableData()\n})\n\n// 比例进度条颜色\nfunction getProportionColor(proportion: number) {\n  if (proportion < 30) return \'danger\'\n  if (proportion < 60) return \'warning\'\n  return \'success\'\n}\n\n// 勾选\nconst selectRowKeys = ref<(string | number)[]>([])\nconst select: TableInstance[\'onSelect\'] = (rowKeys) => {\n  selectRowKeys.value = rowKeys\n}\n\n// 全选\nconst selectAll: TableInstance[\'onSelectAll\'] = (checked) => {\n  selectRowKeys.value = checked ? tableData.value.map((i) => i.id) : []\n}\n\n// 删除\nfunction onDelete() {\n  return new Promise((resolve) => setTimeout(() => resolve(true), 300))\n}\n\n// 查看代码\nconst onViewCode = () => {\n  Modal.open({\n    title: \'查看代码\',\n    content: () => <gi-code-view type="vue" codeJson={Pane2Code}></gi-code-view>,\n    fullscreen: true\n  })\n}\n<\/script>\n\n<style lang="scss" scoped>\n.pane2 {\n  flex: 1;\n  margin: $margin;\n}\n</style>\n'},null),fullscreen:!0})};return(n,e)=>{const t=o("icon-exclamation-circle-fill"),a=o("a-alert"),u=o("a-space"),b=o("icon-code"),w=o("a-button"),f=o("a-row"),y=o("a-table"),I=o("a-card");return r(),i(I,{bordered:!1,class:"gi_card pane2"},{default:l((()=>[s(f,{justify:"space-between",align:"center",wrap:""},{default:l((()=>[s(u,{wrap:""},{default:l((()=>[s(a,{type:"normal"},{icon:l((()=>[s(t)])),default:l((()=>[_])),_:1})])),_:1}),s(u,{wrap:""},{default:l((()=>[s(w,{type:"primary",status:"success",onClick:P},{icon:l((()=>[s(b)])),default:l((()=>[h])),_:1}),s(w,{type:"primary"},{default:l((()=>[c("导出")])),_:1})])),_:1})])),_:1}),p("section",v,[s(y,{"row-key":"id",loading:d(C),bordered:{cell:!0},columns:m,data:d(g),scroll:{x:"100%",y:"100%",minWidth:1e3},"row-selection":{type:"checkbox",showCheckedAll:!0},pagination:d(x),onSelect:k,onSelectAll:D},null,8,["loading","data","pagination"])])])),_:1})}}}),[["__scopeId","data-v-a19f4623"]]);export{C as default};
