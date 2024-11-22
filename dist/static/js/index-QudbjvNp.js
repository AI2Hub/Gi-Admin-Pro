import{_ as e}from"./GiCellStatus.vue_vue_type_script_setup_true_lang-BCDP2vY_.js";import{_ as t}from"./AddDictModal.vue_vue_type_script_setup_true_lang-B_0J1eSJ.js";import{_ as a}from"./index.vue_vue_type_script_setup_true_lang-BACRHreO.js";import{d as l,J as i,S as n,e as s,o,f as d,h as r,w as u,g as c,i as p,G as m,t as _,K as f,U as y,f9 as g}from"./index-B3chAJQx.js";import{u as v}from"./useBreakpoint-Dp8d8L0Y.js";import{u as h}from"./useDict-6FczVQBh.js";import{d as w}from"./index-C4aoj-e3.js";import"./regexp-LyZ7ySAN.js";import"./useForm-CGIU6xq4.js";import"./AddDictDataModal.vue_vue_type_script_setup_true_lang-Bnz_lRWA.js";import"./index-LnDUpks-.js";const x={class:"gi_page dict-manage"},k=l({name:"SystemRole",__name:"index",setup(l){const{data:k}=h({code:"status"}),D=i("AddDictModalRef"),j=i("DictDataModalRef"),C=n({name:"",status:""}),{loading:S,tableData:A,pagination:M,selectedKeys:b,search:V,select:R,selectAll:z,handleDelete:B}=v((e=>g(e)),{immediate:!0}),U=()=>{C.name="",C.status="",V()},G=()=>{if(!b.value.length)return y.warning("请选择字典！");B((()=>w({ids:b.value})))},K=()=>{var e;null==(e=D.value)||e.add()};return(l,i)=>{const n=s("icon-search"),y=s("a-input"),g=s("a-select"),v=s("a-button"),h=s("icon-refresh"),O=s("a-space"),W=s("icon-plus"),F=s("icon-delete"),I=s("a-row"),J=s("a-table-column"),L=e,N=s("icon-storage"),T=s("icon-edit"),X=s("a-popconfirm"),Y=s("a-table"),Z=s("a-card");return o(),d("div",x,[r(Z,{title:"字典管理"},{default:u((()=>[r(O,{wrap:""},{default:u((()=>[r(y,{modelValue:c(C).name,"onUpdate:modelValue":i[0]||(i[0]=e=>c(C).name=e),placeholder:"字典类型名称/编码","allow-clear":"",style:{width:"250px"}},{prefix:u((()=>[r(n)])),_:1},8,["modelValue"]),r(g,{modelValue:c(C).status,"onUpdate:modelValue":i[1]||(i[1]=e=>c(C).status=e),options:c(k),placeholder:"状态","allow-clear":"",style:{width:"120px"}},null,8,["modelValue","options"]),r(v,{type:"primary",onClick:c(V)},{icon:u((()=>[r(n)])),default:u((()=>[i[2]||(i[2]=p("span",null,"查询",-1))])),_:1},8,["onClick"]),r(v,{onClick:U},{icon:u((()=>[r(h)])),default:u((()=>[i[3]||(i[3]=p("span",null,"重置",-1))])),_:1})])),_:1}),r(I,null,{default:u((()=>[r(O,{wrap:""},{default:u((()=>[r(v,{type:"primary",onClick:K},{icon:u((()=>[r(W)])),default:u((()=>[i[4]||(i[4]=p("span",null,"新增",-1))])),_:1}),r(v,{type:"primary",status:"danger",onClick:G},{icon:u((()=>[r(F)])),default:u((()=>[i[5]||(i[5]=p("span",null,"删除",-1))])),_:1})])),_:1})])),_:1}),r(Y,{"row-key":"id",data:c(A),bordered:{cell:!0},loading:c(S),scroll:{x:"100%",y:"100%",minWidth:1e3},pagination:c(M),"row-selection":{type:"checkbox",showCheckedAll:!0},"selected-keys":c(b),onSelect:c(R),onSelectAll:c(z)},{columns:u((()=>[r(J,{title:"序号",width:64},{cell:u((e=>[m(_(e.rowIndex+1),1)])),_:1}),r(J,{title:"字典名称","data-index":"name"}),r(J,{title:"字典编码","data-index":"code"}),r(J,{title:"状态",width:100,align:"center"},{cell:u((({record:e})=>[r(L,{status:e.status},null,8,["status"])])),_:1}),r(J,{title:"描述","data-index":"description"}),r(J,{title:"创建时间","data-index":"createTime",width:180}),r(J,{title:"操作",width:280,align:"center",fixed:c(f)()?void 0:"right"},{cell:u((({record:e})=>[r(O,null,{default:u((()=>[r(v,{type:"primary",status:"success",size:"mini",onClick:t=>{return a=e,void(null==(l=j.value)||l.open({code:a.code}));var a,l}},{icon:u((()=>[r(N)])),default:u((()=>[i[6]||(i[6]=p("span",null,"字典数据",-1))])),_:2},1032,["onClick"]),r(v,{type:"primary",size:"mini",onClick:t=>{return a=e,void(null==(l=D.value)||l.edit(a.id));var a,l}},{icon:u((()=>[r(T)])),default:u((()=>[i[7]||(i[7]=p("span",null,"编辑",-1))])),_:2},1032,["onClick"]),r(X,{type:"warning",content:"确定删除该角色吗?",onBeforeOk:t=>{return a=e,B((()=>w({ids:[a.id]})),{showModal:!1});var a}},{default:u((()=>[r(v,{type:"primary",status:"danger",size:"mini"},{icon:u((()=>[r(F)])),default:u((()=>[i[8]||(i[8]=p("span",null,"删除",-1))])),_:1})])),_:2},1032,["onBeforeOk"])])),_:2},1024)])),_:1},8,["fixed"])])),_:1},8,["data","loading","pagination","selected-keys","onSelect","onSelectAll"])])),_:1}),r(t,{ref_key:"AddDictModalRef",ref:D,onSaveSuccess:c(V)},null,8,["onSaveSuccess"]),r(a,{ref_key:"DictDataModalRef",ref:j},null,512)])}}});export{k as default};
