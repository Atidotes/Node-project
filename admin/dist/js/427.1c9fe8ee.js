"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[427],{355:function(e,t,a){a.d(t,{X:function(){return r},d:function(){return l}});const l=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,r=/^(?=.*[A-z])(?=.*[0-9])(?=.*[#?!@$%^&*-.]).{8,16}$/},227:function(e,t,a){a.r(t),a.d(t,{default:function(){return U}});var l=a(7988),r=(a(1758),a(1844),a(2913)),o=(a(2064),a(438)),s=(a(3877),a(7960),a(7113),a(9866)),u=(a(172),a(8927)),n=(a(6905),a(2563)),i=(a(5885),a(6465)),c=(a(6809),a(9971)),d=(a(1430),a(9119)),m=(a(7066),a(9007),a(8135)),p=(a(4115),a(3396)),f=a(4870),w=a(8408);const g=()=>(0,w.Z)({method:"GET",url:"/user/list"}),b=e=>(0,w.Z)({method:"delete",url:`/user/list/${e}`}),v=e=>(0,w.Z)({method:"GET",url:`/user/list/${e}`}),y=(e,t)=>(0,w.Z)({method:"PUT",data:t,url:`/user/list/${e}`});var h=a(355),k=a(65),_=a(1565);a(7228);const W={class:"dialog-footer"};var V={__name:"userList",setup(e){const t=(0,k.oR)(),a=(0,f.iH)(""),w=(0,f.qj)({dialogVisible:!1,tableData:[]}),V=(0,f.qj)({userName:"",password:"",role:"",introduction:""}),j=(0,p.Fl)((()=>t.state.userInfo)),U=(0,f.qj)([{value:1,label:"管理员"},{value:2,label:"编辑员"}]),z=(e,t,a)=>t?h.X.test(t)?a():a(new Error("密码由字母、数字、特殊符号组成8~16位组合")):a(new Error("请输入密码！")),S=(0,f.qj)({userName:[{required:!0,message:"请输入用户名！",trigger:"blur"},{min:2,max:10,message:"用户名长度为2~5个字符",trigger:"blur"}],password:[{validator:z,trigger:"blur"}],introduction:[{required:!0,message:"请输入简介！",trigger:"blur"}],role:[{required:!0,message:"请选择角色！",trigger:"blur"}]});(0,p.bv)((()=>{N()}));const N=async()=>{const e=await g();200===e.code&&e.success&&(w.tableData=e.data)},C=async e=>{const t=await v(e._id);Object.assign(V,t.data),w.dialogVisible=!0},q=async e=>{if(e.accountNumber===j.value.accountNumber)return(0,_.z8)({type:"error",message:"此用户为本用户不能删除"});const t=await b(e._id);200===t.code&&t.success?(N(),(0,_.z8)({type:"success",message:t.message})):(0,_.z8)({type:"error",message:"删除失败"})},x=()=>{a.value.validate((async e=>{if(e){const e=await y(V._id,V);200===e.code&&e.success?(N(),(0,_.z8)({type:"success",message:e.message}),w.dialogVisible=!1):(0,_.z8)({type:"error",message:"修改失败"})}}))};return(e,t)=>{const f=m.Xh,g=u.$Y,b=d.vs,v=c.Ks,y=i.mi,h=n.i1,k=u.eI,_=s.EZ,j=r.nH,z=o.BT,N=o.km,D=r.ly,E=l.d0;return(0,p.wg)(),(0,p.iD)(p.HY,null,[(0,p.Wm)(f,{icon:null,title:"用户管理",content:"用户列表"}),(0,p.Wm)(k,{data:w.tableData,size:"small",border:"",style:{width:"100%","margin-top":"50px"}},{default:(0,p.w5)((()=>[(0,p.Wm)(g,{prop:"userName",label:"用户名"}),(0,p.Wm)(g,{prop:"accountNumber",label:"用户账号"}),(0,p.Wm)(g,{prop:"avatar",label:"用户头像"},{default:(0,p.w5)((e=>[e.row.avatar?((0,p.wg)(),(0,p.j4)(b,{key:0,size:50,src:e.row.avatar},null,8,["src"])):((0,p.wg)(),(0,p.j4)(b,{key:1,size:50,src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"}))])),_:1}),(0,p.Wm)(g,{prop:"role",label:"用户角色"},{default:(0,p.w5)((e=>[1===e.row.role?((0,p.wg)(),(0,p.j4)(v,{key:0,effect:"dark",type:"danger"},{default:(0,p.w5)((()=>[(0,p.Uk)("管理员")])),_:1})):((0,p.wg)(),(0,p.j4)(v,{key:1,effect:"dark",type:"info"},{default:(0,p.w5)((()=>[(0,p.Uk)("编辑员")])),_:1}))])),_:1}),(0,p.Wm)(g,{fixed:"right",label:"操作"},{default:(0,p.w5)((e=>[(0,p.Wm)(y,{type:"primary",onClick:t=>C(e.row)},{default:(0,p.w5)((()=>[(0,p.Uk)("编辑")])),_:2},1032,["onClick"]),(0,p.Wm)(h,{title:"你确定要删除嘛？","confirm-button-text":"确认","cancel-button-text":"取消",onConfirm:t=>q(e.row)},{reference:(0,p.w5)((()=>[(0,p.Wm)(y,{type:"danger"},{default:(0,p.w5)((()=>[(0,p.Uk)("删除")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"]),(0,p.Wm)(E,{modelValue:w.dialogVisible,"onUpdate:modelValue":t[5]||(t[5]=e=>w.dialogVisible=e),title:"编辑",width:"50%"},{footer:(0,p.w5)((()=>[(0,p._)("span",W,[(0,p.Wm)(y,{onClick:t[4]||(t[4]=e=>w.dialogVisible=!1)},{default:(0,p.w5)((()=>[(0,p.Uk)("取消")])),_:1}),(0,p.Wm)(y,{type:"primary",onClick:x},{default:(0,p.w5)((()=>[(0,p.Uk)(" 确认 ")])),_:1})])])),default:(0,p.w5)((()=>[(0,p.Wm)(D,{ref_key:"userFormRef",ref:a,model:V,"status-icon":"",rules:S,"label-position":"right","label-width":85},{default:(0,p.w5)((()=>[(0,p.Wm)(j,{label:"用户名",prop:"userName"},{default:(0,p.w5)((()=>[(0,p.Wm)(_,{modelValue:V.userName,"onUpdate:modelValue":t[0]||(t[0]=e=>V.userName=e),modelModifiers:{number:!0},type:"text",autocomplete:"off","show-word-limit":"",placeholder:"请输入用户名"},null,8,["modelValue"])])),_:1}),(0,p.Wm)(j,{label:"密码",prop:"password"},{default:(0,p.w5)((()=>[(0,p.Wm)(_,{modelValue:V.password,"onUpdate:modelValue":t[1]||(t[1]=e=>V.password=e),type:"password",autocomplete:"off",placeholder:"请输入密码","show-password":"",maxlength:"16",minlength:"8"},null,8,["modelValue"])])),_:1}),(0,p.Wm)(j,{label:"角色",prop:"role"},{default:(0,p.w5)((()=>[(0,p.Wm)(N,{modelValue:V.role,"onUpdate:modelValue":t[2]||(t[2]=e=>V.role=e),placeholder:"请选择角色"},{default:(0,p.w5)((()=>[((0,p.wg)(!0),(0,p.iD)(p.HY,null,(0,p.Ko)(U,(e=>((0,p.wg)(),(0,p.j4)(z,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(0,p.Wm)(j,{label:"个人简介",prop:"introduction"},{default:(0,p.w5)((()=>[(0,p.Wm)(_,{modelValue:V.introduction,"onUpdate:modelValue":t[3]||(t[3]=e=>V.introduction=e),rows:2,type:"textarea",placeholder:"请填写个人简介",autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])],64)}}};const j=V;var U=j},9119:function(e,t,a){a.d(t,{vs:function(){return k}});a(7658);var l=a(3396),r=a(4870),o=a(7139),s=a(1015),u=a(5994),n=a(7609),i=a(6413),c=a(2039);const d=(0,u.o8)({size:{type:[Number,String],values:n.k,default:"",validator:e=>(0,i.hj)(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:c.AA},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:(0,u.Cq)(String),default:"cover"}}),m={error:e=>e instanceof Event};var p=a(5989),f=a(6734),w=a(529);const g=["src","alt","srcset"],b=(0,l.aZ)({name:"ElAvatar"}),v=(0,l.aZ)({...b,props:d,emits:m,setup(e,{emit:t}){const a=e,u=(0,f.s)("avatar"),n=(0,r.iH)(!1),c=(0,l.Fl)((()=>{const{size:e,icon:t,shape:l}=a,r=[u.b()];return(0,o.HD)(e)&&r.push(u.m(e)),t&&r.push(u.m("icon")),l&&r.push(u.m(l)),r})),d=(0,l.Fl)((()=>{const{size:e}=a;return(0,i.hj)(e)?u.cssVarBlock({size:(0,w.Nn)(e)||""}):void 0})),m=(0,l.Fl)((()=>({objectFit:a.fit})));function p(e){n.value=!0,t("error",e)}return(0,l.YP)((()=>a.src),(()=>n.value=!1)),(e,t)=>((0,l.wg)(),(0,l.iD)("span",{class:(0,o.C_)((0,r.SU)(c)),style:(0,o.j5)((0,r.SU)(d))},[!e.src&&!e.srcSet||n.value?e.icon?((0,l.wg)(),(0,l.j4)((0,r.SU)(s.gn),{key:1},{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.j4)((0,l.LL)(e.icon)))])),_:1})):(0,l.WI)(e.$slots,"default",{key:2}):((0,l.wg)(),(0,l.iD)("img",{key:0,src:e.src,alt:e.alt,srcset:e.srcSet,style:(0,o.j5)((0,r.SU)(m)),onError:p},null,44,g))],6))}});var y=(0,p.Z)(v,[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]),h=a(9015);const k=(0,h.nz)(y)},7066:function(e,t,a){a(1758)}}]);
//# sourceMappingURL=427.1c9fe8ee.js.map