import{_ as i,o as t,b as l,R as a,f as _,r as p,e as o,c,g as m,t as u,i as f,Q as v}from"./_plugin-vue_export-helper-916c4ad5.js";const h={},k={class:"gi-option"};function y(e,n){return t(),l("ul",k,[a(e.$slots,"default",{},void 0,!0)])}const O=i(h,[["render",y],["__scopeId","data-v-1ad5e92d"]]),g={class:"wrap"},C={class:"icon-wrapper"},I=_({name:"GiOptionItem"}),B=_({...I,props:{icon:{default:""},label:{default:""},more:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:n}){const d=()=>{n("click")};return(s,G)=>{const r=p("IconRight");return t(),l("li",{class:v(["gi-option-item",{more:e.more,active:e.active}]),onClick:d},[o("section",g,[o("span",C,[a(s.$slots,"icon",{},()=>[(t(),c(m(e.icon),{size:16,"stroke-width":2}))],!0)]),a(s.$slots,"default",{},()=>[o("span",null,u(e.label),1)],!0)]),e.more?(t(),c(r,{key:0})):f("",!0)],2)}}});const $=i(B,[["__scopeId","data-v-d57a5a3b"]]);export{O as G,$ as a};
