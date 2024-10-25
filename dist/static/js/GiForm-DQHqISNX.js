import{d as e,k as l,J as a,b as o,S as t,ac as d,O as s,e as r,o as i,c as u,w as n,h as f,m as p,g as c,f as m,F as b,j as y,E as v,r as h,G as _,t as g,a as V,_ as k}from"./index-CarvrnfW.js";const x=k(e({__name:"GiForm",props:{modelValue:{},options:{default:()=>({})},columns:{}},emits:["update:modelValue","search","reset"],setup(e,{expose:k,emit:x}){var w;const C=e,$=x,q=l((()=>({grid:{cols:2},gridItem:{span:{xs:2,sm:1}},...C.options}))),F=a("formRef"),I=o((null==(w=C.options.fold)?void 0:w.defaultCollapsed)??!1),j=t({}),E=e=>{const l={};return"input"===e.type&&(l.allowClear=!0,l.placeholder=`请输入${e.label}`,l.maxLength=20),"input-number"===e.type&&(l.placeholder=`请输入${e.label}`),"textarea"===e.type&&(l.allowClear=!0,l.placeholder=`请填写${e.label}`,l.maxLength=200),"select"===e.type&&(l.allowClear=!0,l.placeholder=`请选择${e.label}`,l.options=j[e.field]||e.options),"cascader"===e.type&&(l.allowClear=!0,l.placeholder=`请选择${e.label}`,l.options=j[e.field]||e.options),"tree-select"===e.type&&(l.allowClear=!0,l.placeholder=`请选择${e.label}`,l.data=j[e.field]||e.data),"radio-group"===e.type&&(l.options=j[e.field]||e.options),"checkbox-group"===e.type&&(l.options=j[e.field]||e.options),"date-picker"===e.type&&(l.placeholder="请选择日期"),"time-picker"===e.type&&(l.allowClear=!0,l.placeholder="请选择时间"),{...l,...e.props}},O=e=>void 0!==e&&("boolean"==typeof e?e:"function"==typeof e?e(C.modelValue):void 0);k({formRef:F}),C.columns.forEach((e=>{e.request&&"function"==typeof e.request&&(null==e?void 0:e.init)&&e.request(C.modelValue).then((l=>{j[e.field]=e.resultFormat?e.resultFormat(l):l.data}))}));const R=[];C.columns.forEach((e=>{var l;const a=R.map((e=>e.field));(null==(l=e.cascader)?void 0:l.length)&&!a.includes(e.field)&&R.push(e)}));const B=l((()=>d(C.modelValue)));return s(B,((e,l)=>{R.forEach((a=>{if(e[a.field]!==l[a.field]){C.columns.filter((e=>{var l;return null==(l=null==a?void 0:a.cascader)?void 0:l.includes(e.field)})).forEach((l=>{l.request&&Boolean(e[a.field])?l.request(C.modelValue).then((e=>{j[l.field]=l.resultFormat?l.resultFormat(e):e.data,j[l.field].map((e=>e.value)).includes(C.modelValue[l.field])||$("update:modelValue",Object.assign(C.modelValue,{[l.field]:""}))})):l.request&&!e[a.field]&&(j[l.field]=[],$("update:modelValue",Object.assign(C.modelValue,{[l.field]:""})))}))}}))})),(e,l)=>{const a=r("a-alert"),o=r("a-form-item"),t=r("a-grid-item"),d=r("icon-search"),s=r("a-button"),k=r("icon-up"),x=r("icon-down"),w=r("a-space"),j=r("a-grid"),R=r("a-form");return i(),u(R,p({ref_key:"formRef",ref:F,"auto-label-width":!0},c(q).form,{model:e.modelValue}),{default:n((()=>[f(j,p({class:"w-full","col-gap":8},c(q).grid,{collapsed:c(I)}),{default:n((()=>{var r,F;return[(i(!0),m(b,null,y(e.columns,(l=>{var d,s;return i(),m(b,{key:l.field},[(s=l.hide,void 0!==s&&("boolean"==typeof s?s:"function"==typeof s?s(C.modelValue):void 0)?V("",!0):(i(),u(t,p({key:0,ref_for:!0},l.gridItemProps||C.options.gridItem,{span:l.span||(null==(d=c(q).gridItem)?void 0:d.span)}),{default:n((()=>[f(o,p({ref_for:!0},l.formItemProps,{label:l.label,field:l.field,rules:l.rules,disabled:O(l.disabled)}),{default:n((()=>[["group-title"].includes(l.type||"")?v(e.$slots,"group-title",{key:1},(()=>[f(a,p({ref_for:!0},l.props),{default:n((()=>[_(g(l.label),1)])),_:2},1040)]),!0):v(e.$slots,l.field,p({key:0,ref_for:!0},{disabled:O(l.disabled)}),(()=>[(i(),u(h(`a-${l.type}`),p({ref_for:!0},E(l),{"model-value":e.modelValue[l.field],"onUpdate:modelValue":e=>{return a=e,o=l.field,void $("update:modelValue",Object.assign(C.modelValue,{[o]:a}));var a,o}}),null,16,["model-value","onUpdate:modelValue"]))]),!0)])),_:2},1040,["label","field","rules","disabled"])])),_:2},1040,["span"])))],64)})),128)),(null==(r=c(q).btns)?void 0:r.hide)?V("",!0):(i(),u(t,{key:0,suffix:null==(F=c(q).fold)?void 0:F.enable},{default:n((()=>[f(w,{wrap:""},{default:n((()=>[v(e.$slots,"suffix",{},(()=>{var e;return[f(s,{type:"primary",onClick:l[0]||(l[0]=e=>$("search"))},{icon:n((()=>[f(d)])),default:n((()=>{var e;return[_(g((null==(e=c(q).btns)?void 0:e.searchBtnText)||"搜索"),1)]})),_:1}),f(s,{onClick:l[1]||(l[1]=e=>$("reset"))},{default:n((()=>l[3]||(l[3]=[_("重置")]))),_:1}),(null==(e=c(q).fold)?void 0:e.enable)?(i(),u(s,{key:0,class:"gi-form__fold-btn",type:"text",size:"mini",onClick:l[2]||(l[2]=e=>I.value=!c(I))},{icon:n((()=>[c(I)?(i(),u(x,{key:1})):(i(),u(k,{key:0}))])),default:n((()=>[_(g(c(I)?"展开":"收起"),1)])),_:1})):V("",!0)]}),!0)])),_:3})])),_:3},8,["suffix"]))]})),_:3},16,["collapsed"])])),_:3},16,["model"])}}}),[["__scopeId","data-v-b6418b51"]]);export{x as _};
