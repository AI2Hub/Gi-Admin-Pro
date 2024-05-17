import{_ as e}from"./index-Bvz4iN5B.js";import{_ as a}from"./AddMenuModal.vue_vue_type_script_setup_true_lang-DeL6tXAb.js";import{d as l,b as t,U as i,e as n,o,f as s,h as d,w as r,g as c,c as u,I as m,t as p,a as _,fd as f,F as y,r as k,v as g,L as h,i as v,f6 as w,a1 as x}from"./index-CGlxYqiM.js";import{a as z}from"./menu-Q_OXyaHD.js";import{d as j}from"./index-CC7LGbTl.js";import{u as b}from"./useDict-bKONWZua.js";import{u as C}from"./useTable-CX_ePLwN.js";import{_ as V}from"./index-Qw7LP-v6.js";import"./index-0R2aIxBh.js";import"./index-D-ZbT48E.js";import"./useForm-B97193bL.js";import"./useBreakpoint-DZAtE_Gr.js";const I={class:"gi_page menu-manage"},M=v("span",null,"新增",-1),S=v("span",null,"搜索",-1),A=v("span",null,"重置",-1),D=v("span",null,"编辑",-1),R=v("span",null,"删除",-1),U=l({name:"SystemMenu",__name:"index",setup(l){const{data:v}=b({code:"status"}),U=t(),B=t(),O=t(!1),F=()=>{var e;O.value=!O.value,null==(e=B.value)||e.expandAll(O.value)},J=i({name:"",status:""}),{loading:W,tableData:H,search:L,handleDelete:N}=C((()=>z()),{immediate:!0}),T=()=>{J.name="",J.status="",L()},X=()=>{var e;null==(e=U.value)||e.add()},q=()=>{w.open({title:"数据结构",content:()=>x(V,{codeJson:JSON.stringify(H.value,null,"\t")}),width:560})};return(l,t)=>{const i=n("icon-plus"),w=n("a-button"),x=n("icon-list"),z=n("icon-mind-mapping"),b=n("a-tooltip"),C=n("icon-code"),V=n("a-space"),E=n("icon-search"),G=n("a-input"),K=n("a-select"),P=n("icon-refresh"),Q=n("a-row"),Y=n("IconDown"),Z=n("IconRight"),$=n("a-table-column"),ee=n("a-tag"),ae=e,le=n("a-switch"),te=n("icon-edit"),ie=n("icon-delete"),ne=n("a-popconfirm"),oe=n("a-table"),se=n("a-card");return o(),s("div",I,[d(se,{title:"菜单管理"},{default:r((()=>[d(Q,{justify:"space-between"},{default:r((()=>[d(V,{wrap:""},{default:r((()=>[d(w,{type:"primary",onClick:X},{icon:r((()=>[d(i)])),default:r((()=>[M])),_:1}),d(b,{content:"展开/折叠"},{default:r((()=>[d(w,{type:"primary",status:"success",onClick:F},{icon:r((()=>[c(O)?(o(),u(z,{key:1})):(o(),u(x,{key:0}))])),_:1})])),_:1}),d(b,{content:"查看数据结构"},{default:r((()=>[d(w,{type:"primary",status:"warning",onClick:q},{icon:r((()=>[d(C)])),_:1})])),_:1})])),_:1}),d(V,{wrap:""},{default:r((()=>[d(G,{modelValue:c(J).name,"onUpdate:modelValue":t[0]||(t[0]=e=>c(J).name=e),placeholder:"输入菜单名称搜索","allow-clear":"",style:{width:"250px"}},{prefix:r((()=>[d(E)])),_:1},8,["modelValue"]),d(K,{modelValue:c(J).status,"onUpdate:modelValue":t[1]||(t[1]=e=>c(J).status=e),options:c(v),placeholder:"菜单状态",style:{width:"120px"}},null,8,["modelValue","options"]),d(w,{type:"primary",onClick:c(L)},{icon:r((()=>[d(E)])),default:r((()=>[S])),_:1},8,["onClick"]),d(w,{onClick:T},{icon:r((()=>[d(P)])),default:r((()=>[A])),_:1})])),_:1})])),_:1}),d(oe,{ref_key:"tableRef",ref:B,"row-key":"id",data:c(H),loading:c(W),bordered:{cell:!0},scroll:{x:"100%",y:"100%",minWidth:1700},pagination:!1,size:"mini"},{"expand-icon":r((({expanded:e})=>[e?(o(),u(Y,{key:0})):(o(),u(Z,{key:1}))])),columns:r((()=>[d($,{title:"菜单名称"},{cell:r((({record:e})=>[m(p(e.title||""),1)])),_:1}),d($,{title:"类型",width:80,align:"center"},{cell:r((({record:e})=>[1===e.type?(o(),u(ee,{key:0,size:"small",color:"orangered"},{default:r((()=>[m("目录")])),_:1})):_("",!0),2===e.type?(o(),u(ee,{key:1,size:"small",color:"green"},{default:r((()=>[m("菜单")])),_:1})):_("",!0),3===e.type?(o(),u(ee,{key:2,size:"small"},{default:r((()=>[m("按钮")])),_:1})):_("",!0)])),_:1}),d($,{title:"排序",width:80,align:"center"},{cell:r((({record:e})=>[m(p(e.sort||0),1)])),_:1}),d($,{title:"路由路径","data-index":"path"}),d($,{title:"路由名称"},{cell:r((({record:e})=>[m(p(c(f)(e.path)),1)])),_:1}),d($,{title:"组件路径","data-index":"component"}),d($,{title:"权限标识","data-index":"permission"}),d($,{title:"菜单图标","data-index":"icon",width:100,align:"center"},{cell:r((({record:e})=>[e.svgIcon?(o(),u(ae,{key:0,size:24,name:e.svgIcon},null,8,["name"])):(o(),s(y,{key:1},[e.icon?(o(),u(k(e.icon),{key:0,size:24})):_("",!0)],64))])),_:1}),d($,{title:"状态",width:80,align:"center"},{cell:r((({record:e})=>[d(le,{type:"round",size:"small","model-value":e.status,"checked-value":1,"unchecked-value":0},null,8,["model-value"])])),_:1}),d($,{title:"是否缓存",width:100,align:"center"},{cell:r((({record:e})=>[e.keepAlive?(o(),u(ee,{key:0,size:"small",color:"green"},{default:r((()=>[m("是")])),_:1})):(o(),u(ee,{key:1,size:"small",color:"red"},{default:r((()=>[m("否")])),_:1}))])),_:1}),d($,{title:"是否隐藏",width:100,align:"center"},{cell:r((({record:e})=>[e.hidden?(o(),u(ee,{key:0,size:"small",color:"green"},{default:r((()=>[m("是")])),_:1})):(o(),u(ee,{key:1,size:"small",color:"red"},{default:r((()=>[m("否")])),_:1}))])),_:1}),d($,{title:"是否外链",width:100,align:"center"},{cell:r((({record:e})=>[c(g)(e.path)?(o(),u(ee,{key:0,size:"small",color:"green"},{default:r((()=>[m("是")])),_:1})):(o(),u(ee,{key:1,size:"small",color:"red"},{default:r((()=>[m("否")])),_:1}))])),_:1}),d($,{title:"操作",width:200,align:"left",fixed:c(h)()?void 0:"right"},{cell:r((({record:e})=>[d(V,null,{default:r((()=>[d(w,{type:"primary",size:"mini",onClick:a=>{return l=e,void(null==(t=U.value)||t.edit(l.id));var l,t}},{icon:r((()=>[d(te)])),default:r((()=>[D])),_:2},1032,["onClick"]),[1,2].includes(e.type)?(o(),u(w,{key:0,type:"primary",status:"success",size:"mini"},{icon:r((()=>[d(i)])),_:1})):_("",!0),d(ne,{type:"warning",content:"您确定要删除该项吗?",onBeforeOk:a=>(async e=>N((()=>j({ids:[e.id]})),{showModal:!1}))(e)},{default:r((()=>[d(w,{type:"primary",status:"danger",size:"mini"},{icon:r((()=>[d(ie)])),default:r((()=>[R])),_:1})])),_:2},1032,["onBeforeOk"])])),_:2},1024)])),_:1},8,["fixed"])])),_:1},8,["data","loading"])])),_:1}),d(a,{ref_key:"AddMenuModalRef",ref:U,menus:c(H),onSaveSuccess:c(L)},null,8,["menus","onSaveSuccess"])])}}});export{U as default};
