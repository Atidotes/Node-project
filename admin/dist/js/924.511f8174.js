"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[924],{8754:function(e,l,t){t.d(l,{Bl:function(){return r},IU:function(){return o},Yh:function(){return n},b2:function(){return u}});var a=t(8408);const r=()=>(0,a.Z)({method:"GET",url:"/new/list"}),u=e=>(0,a.Z)({method:"PUT",url:"/new/publish",data:e}),n=e=>(0,a.Z)({method:"DELETE",url:`/new/list/${e}`}),o=e=>(0,a.Z)({method:"GET",url:`/new/list/${e}`})},924:function(e,l,t){t.r(l),t.d(l,{default:function(){return y}});var a=t(2913),r=(t(1758),t(2064),t(6465)),u=(t(6809),t(438)),n=(t(3877),t(7960),t(7113),t(9866)),o=(t(172),t(8135)),s=(t(4115),t(7658),t(3396)),c=t(4870),i=t(6121),d=t(4715),m=t(8783),p=t(2483),g=t(8754),f=t(1565),b=(t(7228),{__name:"newsEdit",setup(e){const l=(0,c.iH)(""),t=(0,p.tv)(),b=(0,p.yj)();(0,s.bv)((()=>{h()}));const w=(0,c.qj)({title:null,content:null,category:null,cover:null,file:null,isPublish:0}),v=(0,c.qj)([{value:1,label:"最新动态"},{value:2,label:"典型案例"},{value:3,label:"通知公告"}]),y=(0,c.qj)({title:[{required:!0,message:"请输入标题！",trigger:"blur"},{min:5,max:20,message:"标题长度为5~20个字符",trigger:"change"}],content:[{required:!0,message:"请输入内容！",trigger:"blur"}],category:[{required:!0,message:"请选择类别！",trigger:"blur"}],cover:[{required:!0,message:"请上传封面！",trigger:"blur"}]}),h=async()=>{let e=await(0,g.IU)(b.params.id);200===e.code&&e.success?Object.assign(w,e.data):(0,f.z8)({type:"error",message:"数据加载失败"})},_=()=>{t.back()},k=e=>{w.cover=URL.createObjectURL(e),w.file=e},W=()=>{l.value.validate((async e=>{if(e){const e=new FormData;for(let t in w)e.append(t,w[t]);let l=await(0,m.w)("/new/revise",e);200===l.code&&l.success?(t.push("/news-list"),(0,f.z8)({type:"success",message:l.message})):(0,f.z8)({type:"error",message:"发布失败"})}}))};return(e,t)=>{const c=o.Xh,m=n.EZ,p=a.nH,g=u.BT,f=u.km,b=r.mi,h=a.ly;return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(c,{title:"新闻管理",content:"修改新闻",onBack:_}),(0,s.Wm)(h,{ref_key:"ruleFormRef",ref:l,model:w,"status-icon":"",rules:y,"label-width":"85px",class:"ruleForm"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{label:"标题",prop:"title"},{default:(0,s.w5)((()=>[(0,s.Wm)(m,{modelValue:w.title,"onUpdate:modelValue":t[0]||(t[0]=e=>w.title=e),type:"text",placeholder:"请输入标题",autocomplete:"off"},null,8,["modelValue"])])),_:1}),(0,s.Wm)(p,{label:"内容",prop:"content"},{default:(0,s.w5)((()=>[(0,s.Wm)(d.Z,{modelValue:w.content,"onUpdate:modelValue":t[1]||(t[1]=e=>w.content=e)},null,8,["modelValue"])])),_:1}),(0,s.Wm)(p,{label:"类别",prop:"category"},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{modelValue:w.category,"onUpdate:modelValue":t[2]||(t[2]=e=>w.category=e),placeholder:"请选择类别"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(v,(e=>((0,s.wg)(),(0,s.j4)(g,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,s.Wm)(p,{label:"封面图片",prop:"cover"},{default:(0,s.w5)((()=>[(0,s.Wm)(i.Z,{avatar:w.cover,onUpload:k},null,8,["avatar"])])),_:1}),(0,s.Wm)(b,{type:"primary",onClick:W},{default:(0,s.w5)((()=>[(0,s.Uk)("修改新闻")])),_:1})])),_:1},8,["model","rules"])],64)}}}),w=t(89);const v=(0,w.Z)(b,[["__scopeId","data-v-04dbc8f0"]]);var y=v}}]);
//# sourceMappingURL=924.511f8174.js.map