import{d as a,e,a2 as s,o as t,a as n,w as o,z as c,j as d,i,L as r,x as u,r as p,t as l,ai as m,h as f,aj as v,ak as y,al as _,_ as g}from"./index-CG4-mVeE.js";const j={class:"message-mask"},k={class:"message"},x={class:"content"},z=g(a({__name:"Message",props:{type:{default:"success"},content:{default:""},duration:{default:2e3},destroy:{type:Function,default:void 0}},setup(a){const g=a,z={success:{content:"操作成功",icon:v},warning:{content:"警告信息",icon:y},error:{content:"操作错误",icon:_}},L=e(!1);return s((()=>{L.value=!0,setTimeout((()=>{L.value=!1}),g.duration)})),(a,e)=>(t(),n(r,{name:"fade-mask",mode:"out-in",appear:"",onAfterLeave:a.destroy},{default:o((()=>[c(d("div",j,[i(r,{name:"zoom-message",mode:"out-in",appear:""},{default:o((()=>[d("section",k,[d("div",{class:u(["icon",g.type])},[(t(),n(p(z[g.type].icon),{size:80}))],2),d("p",x,l(g.content||z[g.type].content),1)])])),_:1})],512),[[m,f(L)]])])),_:1},8,["onAfterLeave"]))}}),[["__scopeId","data-v-051a3928"]]);export{z as default};
