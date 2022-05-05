var w=Object.defineProperty,I=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var g=(d,n,e)=>n in d?w(d,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[n]=e,V=(d,n)=>{for(var e in n||(n={}))S.call(n,e)&&g(d,e,n[e]);if(E)for(var e of E(n))N.call(n,e)&&g(d,e,n[e]);return d},B=(d,n)=>I(d,R(n));import{_ as T,d as D,f as z,r as q,g as s,o as L,c as j,b as u,a as i,w as a,u as t,v as G,p as H,e as J,h as r}from"./index.fc138369.js";const K=d=>(H("data-v-73b33d3c"),d=d(),J(),d),M={class:"form-manage"},O={class:"content"},P=K(()=>i("div",null,"\u8BF7\u8F93\u5165\u4E2D\u6587\u59D3\u540D",-1)),Q=r("\u7537"),W=r("\u5973"),X=r("\u672C\u79D1"),Y=r("\u5927\u4E13"),Z=r("\u7855\u58EB"),$=r("\u6211\u5DF2\u9605\u8BFB"),ee=r("\u91CD\u7F6E"),ue=r("\u63D0\u4EA4"),ae=D({name:"BaseForm"}),te=D(B(V({},ae),{setup(d){const n=z([{key:"01",title:"\u5B66\u751F\u4F1A",children:[{key:"011",title:"\u7EC4\u7EC7\u90E8"},{key:"012",title:"\u5BA3\u4F20\u90E8"}]},{key:"02",title:"\u4F53\u80B2\u90E8",children:[{key:"021",title:"\u5BA3\u4F20\u90E8"},{key:"022",title:"\u7B56\u5212\u90E8"},{key:"023",title:"\u7EC4\u7EC7\u90E8"}]}]),e=q({name:"",age:"",sex:"1",birthday:"",grade:"1",rangDate:[],dept:[],startTime:"",endTime:"",isRead:!1}),b={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D"},{maxLength:4,message:"\u59D3\u540D\u4E0D\u8D85\u8FC74\u4E2A\u5B57\u7B26"}]};return(le,l)=>{const h=s("a-page-header"),p=s("a-input"),_=s("a-form-item"),c=s("a-radio"),v=s("a-radio-group"),x=s("a-date-picker"),y=s("a-tree-select"),m=s("a-option"),k=s("a-select"),C=s("a-range-picker"),U=s("a-checkbox"),f=s("a-button"),F=s("a-space"),A=s("a-form");return L(),j("div",M,[u(h,{title:"\u57FA\u7840\u8868\u5355",subtitle:"Base Form","show-back":!1}),i("section",O,[u(F,{size:50},{default:a(()=>[u(A,{model:t(e),size:"small",class:"form"},{default:a(()=>[u(_,{field:"name",label:"\u59D3\u540D",rules:b.name,"validate-trigger":["change","input"]},{extra:a(()=>[P]),default:a(()=>[u(p,{modelValue:t(e).name,"onUpdate:modelValue":l[0]||(l[0]=o=>t(e).name=o),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},null,8,["modelValue"])]),_:1},8,["rules"]),u(_,{field:"age",label:"\u5E74\u9F84"},{default:a(()=>[u(p,{modelValue:t(e).age,"onUpdate:modelValue":l[1]||(l[1]=o=>t(e).age=o),placeholder:"\u8BF7\u8F93\u5165\u5E74\u9F84"},null,8,["modelValue"])]),_:1}),u(_,{field:"sex",label:"\u6027\u522B"},{default:a(()=>[u(v,{modelValue:t(e).sex,"onUpdate:modelValue":l[2]||(l[2]=o=>t(e).sex=o)},{default:a(()=>[u(c,{value:"1"},{default:a(()=>[Q]),_:1}),u(c,{value:"2"},{default:a(()=>[W]),_:1})]),_:1},8,["modelValue"])]),_:1}),u(_,{field:"birthday",label:"\u751F\u65E5"},{default:a(()=>[u(x,{modelValue:t(e).birthday,"onUpdate:modelValue":l[3]||(l[3]=o=>t(e).birthday=o),placeholder:"\u8BF7\u9009\u62E9\u51FA\u751F\u65E5\u671F"},null,8,["modelValue"])]),_:1}),u(_,{field:"dept",label:"\u90E8\u95E8"},{default:a(()=>[u(y,{data:n.value,modelValue:t(e).dept,"onUpdate:modelValue":l[4]||(l[4]=o=>t(e).dept=o),multiple:"",placeholder:"\u8BF7\u9009\u62E9\u90E8\u95E8"},null,8,["data","modelValue"])]),_:1}),u(_,{field:"grade",label:"\u5B66\u5386"},{default:a(()=>[u(k,{modelValue:t(e).grade,"onUpdate:modelValue":l[5]||(l[5]=o=>t(e).grade=o),placeholder:"\u8BF7\u9009\u62E9\u5B66\u5386",style:{width:"120px"}},{default:a(()=>[u(m,{value:"1"},{default:a(()=>[X]),_:1}),u(m,{value:"2"},{default:a(()=>[Y]),_:1}),u(m,{value:"3"},{default:a(()=>[Z]),_:1})]),_:1},8,["modelValue"])]),_:1}),u(_,{field:"rangDate",label:"\u5728\u6821\u65E5\u671F\u8303\u56F4"},{default:a(()=>[u(C,{modelValue:t(e).rangDate,"onUpdate:modelValue":l[6]||(l[6]=o=>t(e).rangDate=o)},null,8,["modelValue"])]),_:1}),u(_,{field:"isRead"},{default:a(()=>[u(U,{modelValue:t(e).isRead,"onUpdate:modelValue":l[7]||(l[7]=o=>t(e).isRead=o)},{default:a(()=>[$]),_:1},8,["modelValue"])]),_:1}),u(_,null,{default:a(()=>[u(F,null,{default:a(()=>[u(f,null,{default:a(()=>[ee]),_:1}),u(f,{type:"primary"},{default:a(()=>[ue]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),i("div",null,[i("pre",null,G(t(e)),1)])]),_:1})])])}}}));var ne=T(te,[["__scopeId","data-v-73b33d3c"]]);export{ne as default};
