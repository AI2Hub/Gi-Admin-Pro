import{u as a}from"./useBreakpoint-DZAtE_Gr.js";import{b as e,M as t,V as s}from"./index-CGlxYqiM.js";function n(n,l){const{formatResult:o,onSuccess:i,immediate:r,rowKey:c}=l||{},{pagination:u,setTotal:d}=a((()=>p())),v=e(!1),y=e([]);async function p(){try{v.value=!0;const a=await n({page:u.current,size:u.pageSize}),e=Array.isArray(a.data)?a.data:a.data.records;y.value=o?o(e):e;const t=Array.isArray(a.data)?e.length:a.data.total;d(t),i&&i()}finally{v.value=!1}}(r??!0)&&p();const f=e([]);return{loading:v,tableData:y,getTableData:p,search:()=>{f.value=[],u.onChange(1)},pagination:u,selectedKeys:f,select:a=>{f.value=a},selectAll:a=>{const e=c??"id",t=y.value.filter((a=>!(null==a?void 0:a.disabled)));f.value=a?t.map((a=>a[e])):[]},handleDelete:async(a,e)=>{const n=async()=>{try{const t=await a();return t.success&&(s.success((null==e?void 0:e.successTip)||"删除成功！"),f.value=[],p()),t.success}catch(t){return!1}};if(!((null==e?void 0:e.showModal)??!0))return n();t.warning({title:(null==e?void 0:e.title)||"提示",content:(null==e?void 0:e.content)||"是否确认删除？",hideCancel:!1,maskClosable:!1,onBeforeOk:n})}}}export{n as u};
