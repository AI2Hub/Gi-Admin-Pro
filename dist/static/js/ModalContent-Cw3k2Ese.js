import{d as e,J as a,S as l,b as t,z as s,h as o,e as i,o as d,f as n,w as r,g as m,i as f,_ as u}from"./index-CIiNXClJ.js";import{_ as c}from"./index-BAryMYkl.js";const p={class:"modal-content"},h={class:"tree-box"},k=u(e({__name:"ModalContent",setup(e,{expose:u}){const k=a("formRef"),y=l({id:"",path:""}),_=t([{title:"图片文件夹",key:"0-0",children:[{title:"图片文件夹1",key:"0-0-0",children:[{title:"图片文件夹1-1",key:"0-0-0-0"},{title:"图片文件夹1-2",key:"0-0-0-1"},{title:"图片文件夹1-3",key:"0-0-0-2"}]},{title:"新建文件夹",key:"0-0-1"},{title:"视频文件夹",key:"0-0-2",children:[{title:"视频文件夹1",key:"0-0-2-0"},{title:"视频文件夹2",key:"0-0-2-1"}]}]}]);_.value=s.mapTree(_.value,(e=>({...e,icon:e=>e.expanded?o(c,{name:"file-open",size:16},null):o(c,{name:"file-close",size:16},null)})));const b=(e,a)=>{y.path=`/${a.selectedNodes[0].title}`};return u({formRef:k,setForm:e=>{Object.assign(y,e)}}),(e,a)=>{const l=i("a-input"),t=i("a-form-item"),s=i("a-form"),u=i("a-tree");return d(),n("div",p,[o(s,{ref_key:"formRef",ref:k,model:m(y),"auto-label-width":"",class:"w-full"},{default:r((()=>[o(t,{field:"path",label:"目标路径",rules:[{required:!0,message:"请输入目标路径"}]},{default:r((()=>[o(l,{modelValue:m(y).path,"onUpdate:modelValue":a[0]||(a[0]=e=>m(y).path=e),placeholder:"请输入目标路径"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"]),f("div",h,[o(u,{size:"mini","show-line":"","block-node":"",data:m(_),onSelect:b},null,8,["data"])])])}}}),[["__scopeId","data-v-d4494a9d"]]);export{k as default};
