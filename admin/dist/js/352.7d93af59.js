"use strict";(self["webpackChunkadmin"]=self["webpackChunkadmin"]||[]).push([[352],{5881:function(e,t,a){a.d(t,{Ir:function(){return l},Uu:function(){return o},rj:function(){return n}});var r=a(8408);const o=()=>(0,r.Z)({method:"GET",url:"/product/list"}),l=e=>(0,r.Z)({method:"DELETE",url:`/product/list/${e}`}),n=e=>(0,r.Z)({method:"GET",url:`/product/list/${e}`})},9457:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var r=a(4143),o=(a(1758),a(7437),a(2913)),l=(a(2064),a(6465)),n=(a(6809),a(7113),a(9866)),d=(a(172),a(8135)),s=(a(4115),a(7658),a(3396)),i=a(4870),c=a(6121),u=a(8783),m=a(2483),p=a(5881),h=a(1565),g=(a(7228),{__name:"productEdit",setup(e){const t=(0,m.tv)(),a=(0,m.yj)(),g=(0,i.iH)(""),f=(0,i.qj)({title:"",introduction:"",detail:"",cover:"",file:null});(0,s.bv)((()=>{y()}));const y=async()=>{let e=await(0,p.rj)(a.params.id);200===e.code&&e.success?Object.assign(f,e.data):(0,h.z8)({type:"error",message:"请求数据失败"})},w=e=>{f.cover=URL.createObjectURL(e),f.file=e},b=(0,i.qj)({title:[{required:!0,message:"请输入产品名称！",trigger:"blur"},{min:5,max:20,message:"用户名长度为5~20个字符",trigger:"change"}],introduction:[{required:!0,message:"请输入产品简要描述！",trigger:"blur"}],detail:[{required:!0,message:"请输入产品详细描述！",trigger:"blur"}],cover:[{required:!0,message:"请上传产品图片！",trigger:"blur"}]}),v=()=>{g.value.validate((async e=>{if(e){const e=new FormData;for(let t in f)e.append(t,f[t]);const a=await(0,u.w)("/product/revise",e);200===a.code&&a.success?(t.push("/product-list"),(0,h.z8)({message:a.message,type:"success"})):(0,h.z8)({message:a.message,type:"error"})}}))},k=()=>{t.back()};return(e,t)=>{const a=d.Xh,i=n.EZ,u=o.nH,m=l.mi,p=o.ly,h=r.Kf;return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(a,{title:"产品管理",content:"编辑产品",onBack:k}),(0,s.Wm)(h,{style:{"margin-top":"50px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{ref_key:"productFormRef",ref:g,model:f,"status-icon":"",rules:b,"label-position":"right","label-width":110},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{label:"产品名称",prop:"title"},{default:(0,s.w5)((()=>[(0,s.Wm)(i,{modelValue:f.title,"onUpdate:modelValue":t[0]||(t[0]=e=>f.title=e),modelModifiers:{number:!0},type:"text",autocomplete:"off","show-word-limit":"",placeholder:"请输入产品名称"},null,8,["modelValue"])])),_:1}),(0,s.Wm)(u,{label:"产品简要描述",prop:"introduction"},{default:(0,s.w5)((()=>[(0,s.Wm)(i,{modelValue:f.introduction,"onUpdate:modelValue":t[1]||(t[1]=e=>f.introduction=e),modelModifiers:{number:!0},rows:2,type:"textarea",autocomplete:"off",placeholder:"请填写产品简要描述"},null,8,["modelValue"])])),_:1}),(0,s.Wm)(u,{label:"产品详细描述",prop:"detail"},{default:(0,s.w5)((()=>[(0,s.Wm)(i,{modelValue:f.detail,"onUpdate:modelValue":t[2]||(t[2]=e=>f.detail=e),rows:2,type:"textarea",autocomplete:"off",placeholder:"请输入产品详细描述"},null,8,["modelValue"])])),_:1}),(0,s.Wm)(u,{label:"产品图片",prop:"cover"},{default:(0,s.w5)((()=>[(0,s.Wm)(c.Z,{avatar:f.cover,onUpload:w},null,8,["avatar"])])),_:1}),(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Wm)(m,{type:"primary",onClick:v},{default:(0,s.w5)((()=>[(0,s.Uk)("修改产品")])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1})],64)}}});const f=g;var y=f},4143:function(e,t,a){a.d(t,{Kf:function(){return h}});var r=a(3396),o=a(7139),l=a(4870),n=a(5994);const d=(0,n.o8)({header:{type:String,default:""},bodyStyle:{type:(0,n.Cq)([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}});var s=a(5989),i=a(6734);const c=(0,r.aZ)({name:"ElCard"}),u=(0,r.aZ)({...c,props:d,setup(e){const t=(0,i.s)("card");return(e,a)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,o.C_)([(0,l.SU)(t).b(),(0,l.SU)(t).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,o.C_)((0,l.SU)(t).e("header"))},[(0,r.WI)(e.$slots,"header",{},(()=>[(0,r.Uk)((0,o.zw)(e.header),1)]))],2)):(0,r.kq)("v-if",!0),(0,r._)("div",{class:(0,o.C_)((0,l.SU)(t).e("body")),style:(0,o.j5)(e.bodyStyle)},[(0,r.WI)(e.$slots,"default")],6)],2))}});var m=(0,s.Z)(u,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]),p=a(9015);const h=(0,p.nz)(m)},7437:function(e,t,a){a(1758)},2137:function(e,t,a){a.d(t,{bU:function(){return u}});var r=a(4870),o=a(3396),l=a(2262),n={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"}}},d=a(67);const s=e=>(t,a)=>i(t,a,(0,r.SU)(e)),i=(e,t,a)=>(0,l.Z)(a,e,e).replace(/\{(\w+)\}/g,((e,a)=>{var r;return`${null!=(r=null==t?void 0:t[a])?r:`{${a}}`}`})),c=e=>{const t=(0,o.Fl)((()=>(0,r.SU)(e).name)),a=(0,r.dq)(e)?e:(0,r.iH)(e);return{lang:t,locale:a,t:s(e)}},u=()=>{const e=(0,d.W)("locale");return c((0,o.Fl)((()=>e.value||n)))}}}]);
//# sourceMappingURL=352.7d93af59.js.map