var ke=Object.defineProperty,ge=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var G=(n,e,o)=>e in n?ke(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,R=(n,e)=>{for(var o in e||(e={}))we.call(e,o)&&G(n,o,e[o]);if(L)for(var o of L(e))be.call(e,o)&&G(n,o,e[o]);return n},V=(n,e)=>ge(n,Ce(e));import{_ as g}from"./index.80bad6d2.js";import{r as i,o as r,g as y,a as t,w as a,C as U,D as Z,z as m,h as f,e as w,i as k,v as M,U as T,u as _,Z as q,P as K,f as O,c as v,t as N,X as Q,V as ee,H as te,j as D,s as Fe,L as $e,E as Ie,W as De,T as Me,l as Ne,A as Ee,p as Te,Y as Pe,y as W,F as H,B as J,M as X,I as Be}from"./vendor.1acd98e9.js";import{c as Se}from"./index.f05c0956.js";import{o as ze,b as ne}from"./index.f95e1b7b.js";const Oe={},je=n=>(U("data-v-4b15ad41"),n=n(),Z(),n),Ae={class:"file-aside"},Le=je(()=>f("div",{class:"title"},"\u6587\u4EF6\u7BA1\u7406",-1)),Ge=m("\u6587\u4EF6\u7C7B\u578B"),Re=m(" \u5168\u90E8"),Ve=m(" \u56FE\u7247"),We=m(" \u6587\u6863"),He=m(" \u89C6\u9891"),Je=m(" \u97F3\u4E50"),Xe=m(" \u5176\u4ED6");function Ye(n,e){const o=i("icon-apps"),u=i("GiSvgIcon"),l=i("a-menu-item"),d=i("a-sub-menu"),s=i("a-menu");return r(),y("div",Ae,[t(s,{style:{width:"250px",height:"100%","border-radius":"2px"},"default-open-keys":["0"],"default-selected-keys":["0_0"]},{default:a(()=>[Le,t(d,{key:"0"},{icon:a(()=>[t(o)]),title:a(()=>[Ge]),default:a(()=>[t(l,{key:"0_0"},{icon:a(()=>[t(u,{class:"icon",name:"menu-file"})]),default:a(()=>[Re]),_:1}),t(l,{key:"0_1"},{icon:a(()=>[t(u,{class:"icon",name:"file-image"})]),default:a(()=>[Ve]),_:1}),t(l,{key:"0_2"},{icon:a(()=>[t(u,{class:"icon",name:"file-txt"})]),default:a(()=>[We]),_:1}),t(l,{key:"0_3"},{icon:a(()=>[t(u,{class:"icon",name:"file-video"})]),default:a(()=>[He]),_:1}),t(l,{key:"0_4"},{icon:a(()=>[t(u,{class:"icon",name:"file-music"})]),default:a(()=>[Je]),_:1}),t(l,{key:"0_5"},{icon:a(()=>[t(u,{class:"icon",name:"file-other"})]),default:a(()=>[Xe]),_:1})]),_:1})]),_:1})])}var Ue=g(Oe,[["render",Ye],["__scopeId","data-v-4b15ad41"]]);const j=n=>(U("data-v-b5de0e6c"),n=n(),Z(),n),Ze={class:"file-nav-path"},qe=["onClick"],Ke=j(()=>f("span",{class:"path-item"},"\u5168\u90E8",-1)),Qe=j(()=>f("span",{class:"path-item"},"\u6587\u4EF6\u59391",-1)),et=j(()=>f("span",{class:"path-item"},"\u5206\u7C7B",-1)),tt=w({setup(n){let e=k(!1),o=k(null);const u=()=>{e.value=!0,K(()=>{o.value.focus()})},l=()=>{e.value=!1};return(d,s)=>{const p=i("a-input"),h=i("a-breadcrumb-item"),c=i("a-breadcrumb");return r(),y("div",Ze,[M(t(p,{ref_key:"inputRef",ref:o,size:"medium",placeholder:"\u8BF7\u8F93\u5165\u8DEF\u5F84","allow-clear":"",onBlur:l},null,512),[[T,_(e)]]),M(f("section",{class:"path",onClick:q(u,["self"])},[t(c,null,{default:a(()=>[t(h,null,{default:a(()=>[Ke]),_:1}),t(h,null,{default:a(()=>[Qe]),_:1}),t(h,null,{default:a(()=>[et]),_:1})]),_:1})],8,qe),[[T,!_(e)]])])}}});var nt=g(tt,[["__scopeId","data-v-b5de0e6c"]]);const at=[{name:"\u5168\u90E8",value:"all",icon:"icon-stamp"},{name:"\u56FE\u7247",value:"image",icon:"icon-file-image"},{name:"\u6587\u6863",value:"document",icon:"icon-file"},{name:"\u89C6\u9891",value:"video",icon:"icon-video-camera"},{name:"\u97F3\u4E50",value:"music",icon:"icon-file-audio"},{name:"\u5176\u4ED6",value:"other",icon:"icon-bulb"}],E={mp3:"file-music",mp4:"file-video",dir:"file-dir",ppt:"file-ppt",doc:"file-wps",docx:"file-wps",xls:"file-excel",xlsx:"file-excel",txt:"file-txt",rar:"file-rar",zip:"file-zip",html:"file-html",css:"file-css",js:"file-js",other:"file-other"},Y=["jpg","png","gif","jpeg"];const ot=["src"],it=w({props:{data:{type:Object,default:()=>{}}},setup(n){const e=n;let o=O(()=>Y.includes(e.data.extendName)),u=O(()=>e.data.isDir?E.dir:Y.includes(e.data.extendName)?e.data.src:Object.keys(E).includes(e.data.extendName)?E[e.data.extendName]:E.other);return(l,d)=>{const s=i("GiSvgIcon");return _(o)?(r(),y("img",{key:0,class:"img",src:e.data.src},null,8,ot)):(r(),v(s,{key:1,class:"svg",name:_(u)},null,8,["name"]))}}});var ae=g(it,[["__scopeId","data-v-df851a1a"]]);const lt={class:"file-image"},st={class:"file-name"},ct=["onClick"],ut=w({props:{data:{type:Object,default:()=>{}},checked:{type:Boolean,default:!1},checkMode:{type:Boolean,default:!1}},emits:["click","check","contextmenu"],setup(n,{emit:e}){const o=n;let u=O(()=>`${o.data.name}${o.data.extendName?`.${o.data.extendName}`:""}`);const l=()=>{console.log("\u70B9\u51FB\u4E86"),o.checkMode?e("check",o.data):e("click",o.data)},d=p=>{p.preventDefault(),e("contextmenu",p,o.data)},s=p=>{e("check",o.data)};return(p,h)=>{const c=i("a-checkbox");return r(),y("div",{class:"file-card",onClick:l,onContextmenu:d},[f("div",lt,[t(ae,{data:n.data},null,8,["data"])]),f("div",st,N(_(u)),1),M(f("section",{class:Q(["check-mode",{checked:n.checked}]),onClick:q(l,["stop"])},[t(c,{class:"checkbox","model-value":n.checked,onChange:s},null,8,["model-value"])],10,ct),[[T,n.checkMode]])],32)}}});var dt=g(ut,[["__scopeId","data-v-12d81dc4"]]);const _t={class:"file-list-wrap"},rt=["onContextmenu"],mt={class:"file-image"},pt=w({props:{data:{type:Array,default:()=>[]}},emits:["click","contextmenu"],setup(n,{emit:e}){const o=n,u=d=>{e("click",d)},l=(d,s)=>{d.preventDefault(),e("contextmenu",s)};return(d,s)=>{const p=i("a-table-column"),h=i("a-table");return r(),y("div",_t,[t(h,{data:o.data,bordered:!1,pagination:!1,onRowClick:u},{columns:a(()=>[t(p,{title:"\u540D\u79F0"},{cell:a(({record:c})=>[f("div",{class:"file-name",onContextmenu:P=>l(P,c)},[f("div",mt,[t(ae,{data:c},null,8,["data"])]),f("span",null,N(c.name),1)],40,rt)]),_:1}),t(p,{title:"\u6269\u5C55\u540D","data-index":"extendName",width:"100"}),t(p,{title:"\u66F4\u6539\u65F6\u95F4","data-index":"updateTime",width:"200"})]),_:1},8,["data"])])}}});var ft=g(pt,[["__scopeId","data-v-35c32dac"]]);const ht=[{id:"001",type:"files",name:"\u6587\u4EF6\u5939",extendName:"",src:null,updateTime:"2022-01-20 18:30:00",isDir:!0,filePath:"/"},{id:"002",type:"files",name:"\u6587\u4EF6\u59391",extendName:"",src:null,updateTime:"2022-01-20 18:30:00",isDir:!0,filePath:"/"},{id:"003",type:"file",name:"\u54C8\u54C8",extendName:"doc",src:null,updateTime:"2022-01-20 18:30:00",isDir:!1,filePath:"/"},{id:"004",type:"file",name:"\u54C8\u54C8",extendName:"mp3",src:null,updateTime:"2022-01-20 18:30:00",isDir:!1,filePath:"/"},{id:"005",type:"file",name:"\u54C8\u54C8",extendName:"mp4",src:null,updateTime:"2022-01-20 18:30:00",isDir:!1,filePath:"/"},{id:"006",type:"file",name:"\u538B\u7F29\u5305",extendName:"zip",src:null,updateTime:"2022-01-20 18:30:00",isDir:!1,filePath:"/"},{id:"007",type:"file",name:"\u9879\u76EE",extendName:"rar",src:null,updateTime:"2022-01-20 18:30:00",isDir:!1,filePath:"/"},{id:"008",type:"file",name:"\u6570\u636E\u8868\u683C",extendName:"xls",src:null,updateTime:"2022-01-20 18:30:00",isDir:!1,filePath:"/"},{id:"009",type:"file",name:"PPT\u6F14\u793A",extendName:"ppt",src:null,updateTime:"2022-01-20 18:30:00",isDir:!1,filePath:"/"},{id:"010",type:"file",name:"\u6587\u672C",extendName:"txt",src:null,updateTime:"2022-01-20 18:30:00",isDir:!1,filePath:"/"},{id:"011",type:"file",name:"\u672A\u77E5\u6587\u4EF6",extendName:"",src:null,updateTime:"2022-01-20 18:30:00",isDir:!1,filePath:"/"},{id:"012",type:"file",name:"\u9996\u9875",extendName:"html",src:null,updateTime:"2022-01-20 18:30:00",filePath:"/"},{id:"013",type:"file",name:"\u6837\u5F0F",extendName:"css",src:null,updateTime:"2022-01-20 18:30:00",isDir:!1,filePath:"/"},{id:"014",type:"file",name:"\u4EE3\u7801",extendName:"js",src:null,updateTime:"2022-01-20 18:30:00",isDir:!1,filePath:"/"},{id:"106",type:"file",name:"\u56FE\u7247",extendName:"png",src:"https://img0.baidu.com/it/u=2746352008,2041591833&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360",updateTime:"2022-01-20 18:30:00",isDir:!1,filePath:"/"},{id:"107",type:"file",name:"\u5934\u50CF",extendName:"png",src:"https://img2.baidu.com/it/u=304294273,3088990845&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",updateTime:"2022-01-20 18:30:00",isDir:!1,filePath:"/"},{id:"108",type:"file",name:"\u5934\u50CF1",extendName:"png",src:"https://img0.baidu.com/it/u=3745738950,3664021749&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",updateTime:"2022-01-20 18:30:00",isDir:!1,filePath:"/"},{id:"109",type:"file",name:"\u5934\u50CF2",extendName:"png",src:"https://img1.baidu.com/it/u=1817951587,3188870642&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",updateTime:"2022-01-20 18:30:00",isDir:!1,filePath:"/"},{id:"110",type:"file",name:"\u5934\u50CF3",extendName:"png",src:"https://img0.baidu.com/it/u=2927161611,205964738&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360",updateTime:"2022-01-20 18:30:00",isDir:!1,filePath:"/"}];const vt={},yt={class:"option"};function xt(n,e){return r(),y("div",yt,[ee(n.$slots,"default",{},void 0,!0)])}var kt=g(vt,[["render",xt],["__scopeId","data-v-2106a7ce"]]);const gt={class:"wrap"},Ct=w({props:{icon:{type:String,default:""},label:{type:String,default:""},mode:{type:String,default:""},active:{type:Boolean,default:!1}},emits:["click"],setup(n,{emit:e}){const o=()=>{e("click")};return(u,l)=>{const d=i("IconRight");return r(),y("div",{class:Q(["option-item",{more:n.mode==="more",active:n.active}]),onClick:o},[f("section",gt,[(r(),v(te(n.icon),{size:"16","stroke-width":2,style:{"margin-right":"2px"}})),ee(u.$slots,"default",{},()=>[f("span",null,N(n.label),1)],!0)]),n.mode==="more"?(r(),v(d,{key:0})):D("",!0)],2)}}});var wt=g(Ct,[["__scopeId","data-v-ce82651a"]]);const bt=w({components:{Option:kt,OptionItem:wt},props:{axis:{type:Object,default:()=>({x:0,y:0})},fileInfo:Object,onClick:Function,onCancel:Function},setup(n){let e=k(!1),o=k({}),u=k(0),l=k(0),d=k(null);const s=()=>{const c={};n.axis.x>window.innerWidth-u.value?c.right=window.innerWidth-n.axis.x+"px":c.left=n.axis.x+2+"px",n.axis.y>window.innerHeight-l.value?(c.bottom=window.innerHeight-n.axis.y+"px",c["transform-origin"]="center bottom"):(c.top=n.axis.y+2+"px",c["transform-origin"]="center top"),c["z-index"]=1e3,o.value=c};ze(d,()=>{e.value=!1,n.onCancel()});const p=c=>{e.value=!1,n.onClick(c)},h=Fe(ne());return $e(()=>[h.width,h.height],()=>{e.value=!1,n.onCancel()}),Ie(()=>{setTimeout(()=>{e.value=!0,K(()=>{u.value=d.value.offsetWidth,l.value=d.value.offsetHeight,s()})},100)}),{showContentMenu:e,contentMenuStyle:o,contextMenuRef:d,handleClickMenuItem:p}}}),Ft=m("\u7F16\u8F91"),$t=m("\u5220\u9664"),It=m("\u590D\u5236"),Dt=m("\u4E0B\u8F7D"),Mt=m("\u89E3\u538B"),Nt=m("\u89E3\u538B1"),Et=m("\u89E3\u538B2");function Tt(n,e,o,u,l,d){const s=i("OptionItem"),p=i("Option"),h=i("a-popover");return r(),v(Me,{name:"slide-dynamic-origin"},{default:a(()=>[M(f("div",{class:"wrap file-context-menu",ref:"contextMenuRef",style:De(n.contentMenuStyle)},[t(p,null,{default:a(()=>[t(s,{icon:"icon-edit",onClick:e[0]||(e[0]=c=>n.handleClickMenuItem("edit"))},{default:a(()=>[Ft]),_:1}),t(s,{icon:"icon-delete",onClick:e[1]||(e[1]=c=>n.handleClickMenuItem("delete"))},{default:a(()=>[$t]),_:1}),t(s,{icon:"icon-copy",onClick:e[2]||(e[2]=c=>n.handleClickMenuItem("copy"))},{default:a(()=>[It]),_:1}),t(s,{icon:"icon-download",onClick:e[3]||(e[3]=c=>n.handleClickMenuItem("download"))},{default:a(()=>[Dt]),_:1}),t(h,{position:"right","content-style":{padding:0,overflow:"hidden"}},{content:a(()=>[t(p,null,{default:a(()=>[t(s,{icon:"icon-download",onClick:e[5]||(e[5]=c=>n.handleClickMenuItem("zip1"))},{default:a(()=>[Nt]),_:1}),t(s,{icon:"icon-download",onClick:e[6]||(e[6]=c=>n.handleClickMenuItem("zip2"))},{default:a(()=>[Et]),_:1})]),_:1})]),default:a(()=>[n.fileInfo.extendName==="zip"?(r(),v(s,{key:0,icon:"icon-layers",onClick:e[4]||(e[4]=c=>n.handleClickMenuItem("zip"))},{default:a(()=>[Mt]),_:1})):D("",!0)]),_:1})]),_:1})],4),[[T,n.showContentMenu]])]),_:1})}var Pt=g(bt,[["render",Tt],["__scopeId","data-v-03a093be"]]);let b=null,C=null;function Bt(n,e){return new Promise((o,u)=>{b!==null&&b.unmount(),C!==null&&document.body.removeChild(C),C=document.createElement("div"),document.body.appendChild(C),b=Ne(Pt,{axis:{x:n.clientX,y:n.clientY},fileInfo:e,onClick:d=>{o({mode:d,fileInfo:e}),setTimeout(()=>{l(),b=null,C=null},500)},onCancel:()=>{u("error"),setTimeout(()=>{l(),b=null,C=null},500)}}).use(Ee).use(Te);function l(){b!==null&&b.unmount(),C!==null&&document.body.removeChild(C)}b.mount(C)})}const St={class:"file-main"},zt=m(" \u4E0A\u4F20"),Ot=m("\u4E0A\u4F20\u6587\u4EF6"),jt=m("\u4E0A\u4F20\u6587\u4EF6\u5939"),At=m(" \u67E5\u8BE2 "),Lt={key:0,class:"file-wrap"},Gt=w({setup(n){const{width:e}=ne(),o=Se();let u=k("\u7B49\u5F85\u4E2D..."),l=k(!1),d=k([]);d.value=ht;let s=k(!1);const p=F=>{X.success(`\u70B9\u51FB\u4E86\u6587\u4EF6-${F.name}`)},h=F=>{o.addSelectedFileItem(F)},c=(F,$)=>{Bt(F,$).then(B=>{X.success("\u70B9\u51FB\u4E86"+B.mode)})},P=()=>{Be.warning({title:"\u63D0\u793A",content:"\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F",hideCancel:!1})};return(F,$)=>{const B=i("icon-upload"),I=i("a-button"),A=i("a-doption"),oe=i("a-dropdown"),ie=i("icon-select-all"),S=i("a-space"),le=i("a-option"),se=i("a-select"),ce=i("icon-search"),ue=i("a-input-search"),de=i("a-input-group"),_e=i("icon-delete"),re=i("icon-swap"),z=i("a-tooltip"),me=i("icon-filter"),pe=i("icon-apps"),fe=i("icon-list"),he=i("a-button-group"),ve=i("a-row"),ye=Pe("loading");return r(),y("div",St,[t(nt),t(ve,{justify:"space-between"},{default:a(()=>[t(S,{direction:_(e)<1280?"vertical":"horizontal"},{default:a(()=>[t(S,null,{default:a(()=>[t(oe,null,{content:a(()=>[t(A,null,{default:a(()=>[Ot]),_:1}),t(A,null,{default:a(()=>[jt]),_:1})]),default:a(()=>[t(I,{type:"primary"},{default:a(()=>[t(B),zt]),_:1})]),_:1}),t(I,{type:"primary",onClick:$[0]||($[0]=x=>W(s)?s.value=!_(s):s=!_(s))},{default:a(()=>[t(ie),m(" "+N(_(s)?"\u53D6\u6D88\u6279\u91CF\u64CD\u4F5C":"\u6279\u91CF\u64CD\u4F5C"),1)]),_:1})]),_:1}),t(de,null,{default:a(()=>[t(se,{style:{width:"120px"},placeholder:"\u8BF7\u9009\u62E9..."},{default:a(()=>[(r(!0),y(H,null,J(_(at),x=>(r(),v(le,{key:x.value},{default:a(()=>[(r(),v(te(x.icon),{size:"18",style:{color:"#bbb","margin-right":"5px"}})),m(N(x.name),1)]),_:2},1024))),128))]),_:1}),t(ue,{style:{width:"360px"},placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD...","allow-clear":"","search-button":""},{"button-icon":a(()=>[t(ce)]),"button-default":a(()=>[At]),_:1})]),_:1})]),_:1},8,["direction"]),t(S,null,{default:a(()=>[_(s)?(r(),v(I,{key:0,disabled:!_(o).selectedFileIdList.length,type:"primary",status:"danger",onClick:P},{icon:a(()=>[t(_e)]),_:1},8,["disabled"])):D("",!0),t(he,null,{default:a(()=>[t(z,{content:"\u4F20\u8F93\u5217\u8868",position:"bottom"},{default:a(()=>[t(I,{onClick:$[1]||($[1]=x=>W(l)?l.value=!_(l):l=!_(l))},{icon:a(()=>[t(re)]),_:1})]),_:1}),t(z,{content:"\u6392\u5E8F",position:"bottom"},{default:a(()=>[t(I,{onClick:F.handleFilter},{icon:a(()=>[t(me)]),_:1},8,["onClick"])]),_:1}),t(z,{content:"\u89C6\u56FE",position:"bottom"},{default:a(()=>[t(I,{onClick:_(o).changeViewMode},{icon:a(()=>[_(o).viewMode==="grid"?(r(),v(pe,{key:0})):(r(),v(fe,{key:1}))]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1}),_(o).viewMode=="grid"?M((r(),y("section",Lt,[(r(!0),y(H,null,J(_(d),x=>(r(),v(dt,{key:x.id,data:x,"check-mode":_(s),checked:_(o).selectedFileIdList.includes(x.id),onClick:xe=>p(x),onCheck:xe=>h(x),onContextmenu:c},null,8,["data","check-mode","checked","onClick","onCheck"]))),128))])),[[ye,_(l),_(u)]]):D("",!0),_(o).viewMode=="list"?(r(),v(ft,{key:1,data:_(d),onClick:p,onContextmenu:c},null,8,["data"])):D("",!0)])}}});var Rt=g(Gt,[["__scopeId","data-v-716dcc6e"]]);const Vt={class:"file-manage"},Wt=w({name:"FileManage"}),Ht=w(V(R({},Wt),{setup(n){return(e,o)=>(r(),y("div",Vt,[t(Ue),t(Rt)]))}}));var qt=g(Ht,[["__scopeId","data-v-47b01f2a"]]);export{qt as default};
