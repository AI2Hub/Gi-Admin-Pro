import{d as n,r as c,B as p,C as u,o as v,c as m,h as e,a as h,w as f,b as g,p as b,l as x,K as I,g as C,t as k,_ as w}from"./index-c333f726.js";const a=s=>(b("data-v-506e4a8b"),s=s(),x(),s),y={class:"error-page"},B={class:"container"},E={class:"img-box"},S=["src"],D={class:"tip-box"},N=a(()=>e("div",{class:"ops"},"抱歉!",-1)),P=a(()=>e("div",{class:"tip"},"当前页面不存在...",-1)),T=a(()=>e("div",{class:"info"},"请检查您输入的网址是否正确，或点击下面的按钮返回首页",-1)),V=n({name:"ErrorPage"}),z=n({...V,props:{src:{default:""}},setup(s){const r=s,_=I(),o=c(5),t=c(0);p(()=>{l()}),u(()=>{clearInterval(t.value)});const i=()=>{_.back()},l=()=>{t.value=setInterval(()=>{o.value?o.value--:clearInterval(t.value)},1e3)};return(K,M)=>{const d=g("a-button");return v(),m("div",y,[e("section",B,[e("div",E,[e("img",{class:"img-parent",src:r.src},null,8,S)]),e("div",D,[N,P,T,h(d,{type:"primary",shape:"round",size:"large",onClick:i},{default:f(()=>[C(k(o.value)+" 返回首页",1)]),_:1})])])])}}});const U=w(z,[["__scopeId","data-v-506e4a8b"]]);export{U as E};
