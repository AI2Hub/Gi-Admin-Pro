function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["static/js/FileList-DbDD0fzC.js","static/js/index-CG4-mVeE.js","static/css/index-C217RHgU.css","static/js/FileImage-EKIFiOPx.js","static/js/index-Db-rE2a0.js","static/css/index-B647mp6F.css","static/js/file-vS2Qaiq0.js","static/css/FileImage-B9i30NCh.css","static/js/FileRightMenu-C80ZCJDv.js","static/js/index-BYGgo_8Q.js","static/css/index-DX1Kzsya.css","static/css/FileRightMenu-ConB2spn.css","static/css/FileList-Cbv-jVJR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{e,M as a,a4 as t,V as l,eY as i,eZ as n,eQ as o,c as s,a8 as d,d as u,l as c,n as r,a2 as m,e_ as p,f,o as _,g as v,i as h,w as g,j as y,D as w,F as k,k as x,h as b,a as C,r as j,t as F,b as I,z as M,ai as P,e$ as N,eR as R,_ as S}from"./index-CG4-mVeE.js";import{_ as T}from"./index-Db-rE2a0.js";import{a as O}from"./index.es-CSb3HpRY.js";import A from"./ModalContent-COGainnK.js";import{_ as B}from"./ModalContent.vue_vue_type_script_setup_true_lang-BlpCEG8d.js";import{_ as L}from"./ModalContent.vue_vue_type_script_setup_true_lang-CN5otBmo.js";import E from"./ModalContent-DP9dJRXh.js";import V from"./FilePath-B8v7NCh8.js";import W from"./FileGrid-C-iwk5b3.js";import{I as $,F as q}from"./file-vS2Qaiq0.js";import"./index-swMSxkfu.js";import"./FileImage-EKIFiOPx.js";import"./FileRightMenu-C80ZCJDv.js";import"./index-BYGgo_8Q.js";let z="";function D(e){if(!z)return z=e.id,function(e,a){const t=document.createElement("div");document.body.appendChild(t);const l=i(e,{...a,onClose:()=>{setTimeout((()=>{l.unmount(),document.body.removeChild(t),(null==a?void 0:a.callback)&&(null==a||a.callback())}),350)}});l.use(n),l.use(o),l.mount(t)}(E,{data:e,callback:()=>{z=""}})}const Q={class:"file-main"},G=S(u({__name:"index",setup(i){const n=N((()=>R((()=>import("./FileList-DbDD0fzC.js")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])))),o=c(),u=r(),{mode:S,selectedFileIds:E,toggleMode:z,addSelectedFileItem:G}=function(){const a=e("grid"),t=e([]),l=s((()=>t.value.map((e=>e.id))));return{mode:a,selectedFileList:t,selectedFileIds:l,toggleMode:()=>{a.value="grid"===a.value?"list":"grid"},addSelectedFileItem:e=>{if(l.value.includes(e.id)){const a=t.value.findIndex((a=>a.id===e.id));t.value.splice(a,1)}else t.value.push(e)}}}(),H=e(!1),Y=e(!1),Z=e([]),J=e("0");J.value=o.query.fileType||"0";const K=async()=>{try{H.value=!0,Y.value=!1;const a=await(e={fileType:J.value},d.get("/file/getFileList",e));Z.value=a.data.records}catch(a){return a}finally{H.value=!1}var e},U=()=>{K()};m((()=>{K()})),p((e=>{J.value=e.query.fileType||"0",K()}));const X=s((()=>Z.value.filter((e=>$.includes(e.extendName))).map((e=>e.src??"")))),ee=e=>{if(l.success(`点击了文件-${e.name}`),$.includes(e.extendName)&&e.src&&X.value.length){const a=X.value.findIndex((a=>a===e.src));O({images:X.value,options:{initialViewIndex:a}})}var i;"mp4"===e.extendName&&(i=e,a.open({title:"视频播放",width:"auto",modalStyle:{},content:()=>t(L,{data:i})})),"mp3"===e.extendName&&D(e)},ae=e=>{G(e)},te=(i,n)=>{l.success(`点击了${i}`),"delete"===i&&a.warning({title:"提示",content:"是否删除该文件？",hideCancel:!1,okButtonProps:{status:"danger"},onBeforeOk:async()=>await new Promise((e=>setTimeout((()=>e(!0)),300)))}),"rename"===i&&function(i,n){const o=e();a.open({title:"重命名",width:"90%",modalStyle:{maxWidth:"450px"},modalAnimationName:"el-fade",content:()=>t(B,{ref:e=>{var a;o.value=e,null==(a=o.value)||a.setForm({id:i.id,name:i.name})}}),onBeforeOk:async()=>{var e,a;return!(await(null==(a=null==(e=o.value)?void 0:e.formRef)?void 0:a.validate()))&&(await new Promise((e=>setTimeout((()=>e(!0)),300))),l.success("重命名成功"),n&&n(),!0)}})}(n,(()=>{})),"move"===i&&function(i,n){const o=e();a.open({title:"移动到",width:"90%",modalStyle:{maxWidth:"500px"},modalAnimationName:"el-dialog",maskAnimationName:"el-mask",content:()=>t(A,{ref:e=>{var a;o.value=e,null==(a=o.value)||a.setForm({id:i.id,path:i.filePath})}}),onBeforeOk:async()=>{var e,a;return!(await(null==(a=null==(e=o.value)?void 0:e.formRef)?void 0:a.validate()))&&(await new Promise((e=>setTimeout((()=>e(!0)),300))),l.success("移动成功"),n&&n(),!0)}})}(n,(()=>{})),"detail"===i&&u.push({path:"/file/detail"})},le=()=>{a.warning({title:"提示",content:"是否确认删除？",hideCancel:!1})};return(e,a)=>{const t=f("icon-upload"),l=f("a-button"),i=T,o=f("a-doption"),s=f("a-dropdown"),d=f("a-option"),u=f("a-select"),c=f("a-input"),r=f("icon-search"),m=f("a-input-group"),p=f("a-space"),N=f("icon-delete"),R=f("icon-select-all"),O=f("icon-swap"),A=f("a-tooltip"),B=f("icon-filter"),L=f("icon-apps"),$=f("icon-list"),D=f("a-button-group"),G=f("a-row"),J=f("a-empty"),K=f("a-spin");return _(),v("div",Q,[h(V),h(G,{justify:"space-between",class:"file-main__search"},{default:g((()=>[h(p,{wrap:""},{default:g((()=>[h(s,null,{content:g((()=>[h(o,null,{icon:g((()=>[h(i,{name:"upload-file"})])),default:g((()=>[a[2]||(a[2]=y("span",null,"上传文件",-1))])),_:1}),h(o,null,{icon:g((()=>[h(i,{name:"upload-folder"})])),default:g((()=>[a[3]||(a[3]=y("span",null,"上传文件夹",-1))])),_:1})])),default:g((()=>[h(l,{type:"primary",shape:"round"},{icon:g((()=>[h(t)])),default:g((()=>a[1]||(a[1]=[w("上传")]))),_:1})])),_:1}),h(m,null,{default:g((()=>[h(u,{placeholder:"请选择","trigger-props":{autoFitPopupMinWidth:!0},style:{width:"150px"}},{default:g((()=>[(_(!0),v(k,null,x(b(q),(e=>(_(),C(d,{key:e.value},{icon:g((()=>[(_(),C(j(e.icon),{size:"18",color:"#999"}))])),default:g((()=>[w(F(e.name),1)])),_:2},1024)))),128))])),_:1}),h(c,{placeholder:"请输入关键词...","allow-clear":""}),h(l,{type:"primary",onClick:U},{icon:g((()=>[h(r)])),default:g((()=>a[4]||(a[4]=[w("搜索")]))),_:1})])),_:1})])),_:1}),h(p,{wrap:""},{default:g((()=>[b(Y)?(_(),C(l,{key:0,disabled:!b(E).length,type:"primary",status:"danger",onClick:le},{icon:g((()=>[h(N)])),_:1},8,["disabled"])):I("",!0),h(l,{type:"primary",onClick:a[0]||(a[0]=e=>Y.value=!b(Y))},{icon:g((()=>[h(R)])),default:g((()=>[w(F(b(Y)?"取消批量":"批量操作"),1)])),_:1}),h(D,null,{default:g((()=>[h(A,{content:"传输列表",position:"bottom"},{default:g((()=>[h(l,null,{icon:g((()=>[h(O)])),_:1})])),_:1}),h(A,{content:"排序",position:"bottom"},{default:g((()=>[h(l,null,{icon:g((()=>[h(B)])),_:1})])),_:1}),h(A,{content:"视图",position:"bottom"},{default:g((()=>[h(l,{onClick:b(z)},{icon:g((()=>["grid"===b(S)?(_(),C(L,{key:0})):(_(),C($,{key:1}))])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1}),h(K,{class:"file-main__list",loading:b(H)},{default:g((()=>[M(h(W,{data:b(Z),"is-batch-mode":b(Y),"selected-file-ids":b(E),onClick:ee,onSelect:ae,onRightMenuClick:te},null,8,["data","is-batch-mode","selected-file-ids"]),[[P,b(Z).length&&"grid"===b(S)]]),M(h(b(n),{data:b(Z),"is-batch-mode":b(Y),"selected-file-ids":b(E),onClick:ee,onSelect:ae,onRightMenuClick:te},null,8,["data","is-batch-mode","selected-file-ids"]),[[P,b(Z).length&&"list"===b(S)]]),M(h(J,null,null,512),[[P,!b(Z).length]])])),_:1},8,["loading"])])}}}),[["__scopeId","data-v-ffe574ae"]]);export{G as default};
