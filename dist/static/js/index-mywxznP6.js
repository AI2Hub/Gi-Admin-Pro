import{_ as e}from"./GiCellStatus.vue_vue_type_script_setup_true_lang-DzydMAba.js";import{_ as t}from"./AddDictModal.vue_vue_type_script_setup_true_lang-_nZC9DFS.js";import{_ as a}from"./index.vue_vue_type_script_setup_true_lang-BK7shxFM.js";import{d as l,H as i,U as n,e as s,o,f as d,h as r,w as u,g as c,i as p,D as _,t as m,W as f,fi as y}from"./index-IsiVy-8P.js";import{u as g}from"./useTable-cyd0-IRx.js";import{u as v}from"./useDict-BDMBUDNT.js";import"./regexp-LyZ7ySAN.js";import"./useResetReactive-C7EzzC28.js";import"./AddDictDataModal.vue_vue_type_script_setup_true_lang-CWcV8BDV.js";import"./useBreakpoint-BIrMVPob.js";import"./index-DH3fxrGb.js";const x={class:"gi_page dict-manage"},w=l({name:"SystemRole",__name:"index",setup(l){const{data:w}=v({code:"status"}),h=i("AddDictModalRef"),k=i("DictDataModalRef"),j=n({name:"",status:""}),{loading:D,tableData:C,pagination:S,selectedKeys:A,search:R,select:b,selectAll:M,fixed:V}=g((e=>y(e)),{immediate:!0}),z=()=>{j.name="",j.status="",R()},U=()=>{if(!A.value.length)return f.warning("请选择字典！")},T=()=>{var e;null==(e=h.value)||e.add()};return(l,i)=>{const n=s("icon-search"),f=s("a-input"),y=s("a-select"),g=s("a-button"),v=s("icon-refresh"),W=s("a-space"),B=s("icon-plus"),G=s("icon-delete"),H=s("a-row"),I=s("a-table-column"),K=e,N=s("icon-storage"),Q=s("icon-edit"),X=s("a-popconfirm"),Y=s("a-table"),q=s("a-card");return o(),d("div",x,[r(q,{title:"字典管理"},{default:u((()=>[r(W,{wrap:""},{default:u((()=>[r(f,{modelValue:c(j).name,"onUpdate:modelValue":i[0]||(i[0]=e=>c(j).name=e),placeholder:"字典类型名称/编码","allow-clear":"",style:{width:"250px"}},{prefix:u((()=>[r(n)])),_:1},8,["modelValue"]),r(y,{modelValue:c(j).status,"onUpdate:modelValue":i[1]||(i[1]=e=>c(j).status=e),options:c(w),placeholder:"状态","allow-clear":"",style:{width:"120px"}},null,8,["modelValue","options"]),r(g,{type:"primary",onClick:c(R)},{icon:u((()=>[r(n)])),default:u((()=>[i[2]||(i[2]=p("span",null,"查询",-1))])),_:1},8,["onClick"]),r(g,{onClick:z},{icon:u((()=>[r(v)])),default:u((()=>[i[3]||(i[3]=p("span",null,"重置",-1))])),_:1})])),_:1}),r(H,null,{default:u((()=>[r(W,{wrap:""},{default:u((()=>[r(g,{type:"primary",onClick:T},{icon:u((()=>[r(B)])),default:u((()=>[i[4]||(i[4]=p("span",null,"新增",-1))])),_:1}),r(g,{type:"primary",status:"danger",onClick:U},{icon:u((()=>[r(G)])),default:u((()=>[i[5]||(i[5]=p("span",null,"删除",-1))])),_:1})])),_:1})])),_:1}),r(Y,{"row-key":"id",data:c(C),bordered:{cell:!0},loading:c(D),scroll:{x:"100%",y:"100%",minWidth:1e3},pagination:c(S),"row-selection":{type:"checkbox",showCheckedAll:!0},"selected-keys":c(A),onSelect:c(b),onSelectAll:c(M)},{columns:u((()=>[r(I,{title:"序号",width:64},{cell:u((e=>[_(m(e.rowIndex+1),1)])),_:1}),r(I,{title:"字典名称","data-index":"name"}),r(I,{title:"字典编码","data-index":"code"}),r(I,{title:"状态",width:100,align:"center"},{cell:u((({record:e})=>[r(K,{status:e.status},null,8,["status"])])),_:1}),r(I,{title:"描述","data-index":"description",ellipsis:!0,tooltip:!0}),r(I,{title:"创建时间","data-index":"createTime",width:180}),r(I,{title:"操作",width:280,align:"center",fixed:c(V)},{cell:u((({record:e})=>[r(W,null,{default:u((()=>[r(g,{type:"primary",status:"success",size:"mini",onClick:t=>{return a=e,void(null==(l=k.value)||l.open({code:a.code}));var a,l}},{icon:u((()=>[r(N)])),default:u((()=>[i[6]||(i[6]=p("span",null,"字典数据",-1))])),_:2},1032,["onClick"]),r(g,{type:"primary",size:"mini",onClick:t=>{return a=e,void(null==(l=h.value)||l.edit(a.id));var a,l}},{icon:u((()=>[r(Q)])),default:u((()=>[i[7]||(i[7]=p("span",null,"编辑",-1))])),_:2},1032,["onClick"]),r(X,{type:"warning",content:"确定删除该角色吗?"},{default:u((()=>[r(g,{type:"primary",status:"danger",size:"mini"},{icon:u((()=>[r(G)])),default:u((()=>[i[8]||(i[8]=p("span",null,"删除",-1))])),_:1})])),_:1})])),_:2},1024)])),_:1},8,["fixed"])])),_:1},8,["data","loading","pagination","selected-keys","onSelect","onSelectAll"])])),_:1}),r(t,{ref_key:"AddDictModalRef",ref:h,onSaveSuccess:c(R)},null,8,["onSaveSuccess"]),r(a,{ref_key:"DictDataModalRef",ref:k},null,512)])}}});export{w as default};
