import{_ as e}from"./GiCellStatus.vue_vue_type_script_setup_true_lang-Bz_joLVP.js";import t from"./index-y1envKHK.js";import{d as a,n as l,U as s,ae as i,e as n,o,f as r,h as d,w as c,g as u,i as p,I as m,t as f,L as _,V as g,_ as h}from"./index-CGlxYqiM.js";import{u as x}from"./useTable-CX_ePLwN.js";import{b as y}from"./index-C7xvcKr5.js";import{d as w}from"./index-CC7LGbTl.js";import{u as k}from"./useDict-bKONWZua.js";import"./RightMenu-ygChTKjq.js";import"./index-Bvz4iN5B.js";import"./useBreakpoint-DZAtE_Gr.js";import"./index-D-ZbT48E.js";const v={class:"page"},b={class:"pane-right__content"},C={class:"gi_table_box"},j=h(a({__name:"Pane1",setup(a){const h=l(),{data:j}=k({code:"status"}),V=s({name:"",status:""}),{loading:S,tableData:D,getTableData:I,pagination:T,selectedKeys:A,select:U,selectAll:z,handleDelete:B}=x((e=>y({...V,...e})),{immediate:!1,formatResult:e=>e.map((e=>({...e,isEdit:!1})))});i((()=>{I()}));const q=()=>{h.push({path:"/data/form"})},M=()=>{h.push({path:"/data/form",query:{id:"ID123456"}})},O=()=>{if(!A.value.length)return g.warning("请选择删除项！");B((()=>w({ids:A.value})),{successTip:"批量删除成功！"})},R=()=>{if(!A.value.length)return g.warning("请勾选数据");g.success("点击了导出")};return(a,l)=>{const s=n("a-card"),i=n("a-col"),g=n("icon-plus"),x=n("a-button"),y=n("icon-delete"),k=n("icon-export"),W=n("a-space"),E=n("a-select"),G=n("a-input"),H=n("icon-search"),K=n("a-input-group"),L=n("icon-refresh"),N=n("a-row"),P=n("a-table-column"),X=n("a-progress"),$=e,F=n("a-popconfirm"),J=n("a-table");return o(),r("div",v,[d(N,{align:"stretch",gutter:14,class:"pane"},{default:c((()=>[d(i,{xs:0,sm:8,md:7,lg:6,xl:5,xxl:4,flex:"260px",class:"h-full ov-hidden"},{default:c((()=>[d(s,{title:"数据分类",bordered:!1,class:"gi_card pane-item pane-left"},{default:c((()=>[d(t,{placeholder:"请输入搜索关键词",onNodeClick:l[0]||(l[0]=e=>u(T).onChange(1))})])),_:1})])),_:1}),d(i,{xs:24,sm:16,md:17,lg:18,xl:19,xxl:20,flex:"1",class:"h-full ov-hidden"},{default:c((()=>[d(s,{title:"数据列表",bordered:!1,"header-style":{display:"none"},class:"gi_card pane-item pane-right"},{default:c((()=>[p("div",b,[d(N,{justify:"space-between"},{default:c((()=>[d(W,{wrap:""},{default:c((()=>[d(x,{type:"primary",onClick:q},{icon:c((()=>[d(g)])),_:1}),d(x,{type:"primary",status:"danger",onClick:O},{icon:c((()=>[d(y)])),default:c((()=>[m("删除")])),_:1}),d(x,{type:"primary",status:"success",onClick:R},{icon:c((()=>[d(k)])),_:1})])),_:1}),d(W,{wrap:""},{default:c((()=>[d(E,{modelValue:u(V).status,"onUpdate:modelValue":l[1]||(l[1]=e=>u(V).status=e),class:"gi_select_input",options:u(j),placeholder:"请选择","allow-clear":""},null,8,["modelValue","options"]),d(K,null,{default:c((()=>[d(G,{modelValue:u(V).name,"onUpdate:modelValue":l[2]||(l[2]=e=>u(V).name=e),placeholder:"请输入搜索关键词","allow-clear":""},null,8,["modelValue"]),d(x,{type:"primary",onClick:u(I)},{default:c((()=>[d(H)])),_:1},8,["onClick"])])),_:1}),d(x,{type:"primary",onClick:u(I)},{icon:c((()=>[d(L)])),_:1},8,["onClick"])])),_:1})])),_:1}),p("section",C,[d(J,{"row-key":"id",loading:u(S),bordered:{cell:!0},data:u(D),scroll:{x:"100%",y:"100%",minWidth:1e3},"row-selection":{type:"checkbox",showCheckedAll:!0},pagination:u(T),"selected-keys":u(A),onSelect:u(U),onSelectAll:u(z)},{columns:c((()=>[d(P,{title:"序号",width:68},{cell:c((e=>[m(f(e.rowIndex+1),1)])),_:1}),d(P,{title:"姓名","data-index":"name"}),d(P,{title:"地址","data-index":"address",ellipsis:"",tooltip:""}),d(P,{title:"比例",width:200},{cell:c((({record:e})=>{return[d(X,{status:(t=e.proportion,t<30?"danger":t<60?"warning":"success"),percent:e.proportion/100},null,8,["status","percent"])];var t})),_:1}),d(P,{title:"状态",width:100,align:"center"},{cell:c((({record:e})=>[d($,{status:e.status},null,8,["status"])])),_:1}),d(P,{title:"创建时间","data-index":"createTime",width:180}),d(P,{title:"操作",width:200,align:"center",fixed:u(_)()?void 0:"right"},{cell:c((({record:e})=>[d(W,null,{default:c((()=>[d(x,{type:"primary",size:"mini",onClick:M},{default:c((()=>[m("修改")])),_:1}),d(x,{size:"mini",onClick:t=>{return a=e,void h.push({path:"/data/detail",query:{id:a.id}});var a}},{default:c((()=>[m("详情")])),_:2},1032,["onClick"]),d(F,{type:"warning",content:"您确定要删除该项吗?",onBeforeOk:t=>{return B((()=>w({ids:[a.id]})),{content:`是否删除-${(a=e).name}?`,showModal:!1});var a}},{default:c((()=>[d(x,{type:"primary",status:"danger",size:"mini"},{default:c((()=>[m("删除")])),_:1})])),_:2},1032,["onBeforeOk"])])),_:2},1024)])),_:1},8,["fixed"])])),_:1},8,["loading","data","pagination","selected-keys","onSelect","onSelectAll"])])])])),_:1})])),_:1})])),_:1})])}}}),[["__scopeId","data-v-df56ac40"]]);export{j as default};
