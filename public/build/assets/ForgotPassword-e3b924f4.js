import{ak as u,A as d,B as i,y as m,E as a,u as e,U as c,m as _,v as p,q as f,p as t,s as w,x as g,W as y}from"./index-bc3c132c.js";import{_ as b}from"./GuestLayout-a4646758.js";import{_ as x}from"./InputError-1757c692.js";import{_ as k,a as h,b as v}from"./app-b232e098.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-3d23fa23.js";const V=t("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),B={key:0,class:"mb-4 font-medium text-sm text-green-600"},N=["onSubmit"],$={class:"flex items-center justify-end mt-4"},z={__name:"ForgotPassword",props:{status:String},setup(o){const s=u({email:""}),r=()=>{s.post(route("password.email"))};return(E,l)=>(m(),d(b,null,{default:i(()=>[a(e(c),{title:"Forgot Password"}),V,o.status?(m(),_("div",B,p(o.status),1)):f("",!0),t("form",{onSubmit:y(r,["prevent"])},[t("div",null,[a(k,{for:"email",value:"Email"}),a(h,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":l[0]||(l[0]=n=>e(s).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(x,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",$,[a(v,{class:g({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:i(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,N)]),_:1}))}};export{z as default};
