import{a0 as d,W as i,S as r,K as a,P as e,L as u,O as c,Z as _,M as t,V as f,ac as p,X as w}from"./___vite-browser-external_commonjs-proxy.bd54111c.js";import{_ as g}from"./GuestLayout.456b9dda.js";import{_ as b}from"./InputError.5f090832.js";import{u as y,H as x,_ as h,a as k,b as V}from"./app.6f988b92.js";const v=t("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},S=["onSubmit"],$={class:"flex items-center justify-end mt-4"},B=w(" Email Password Reset Link "),L={__name:"ForgotPassword",props:{status:String},setup(o){const s=y({email:""}),m=()=>{s.post(route("password.email"))};return(F,l)=>(r(),d(g,null,{default:i(()=>[a(e(x),{title:"Forgot Password"}),v,o.status?(r(),u("div",N,c(o.status),1)):_("",!0),t("form",{onSubmit:p(m,["prevent"])},[t("div",null,[a(h,{for:"email",value:"Email"}),a(k,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":l[0]||(l[0]=n=>e(s).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(b,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",$,[a(V,{class:f({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:i(()=>[B]),_:1},8,["class","disabled"])])],40,S)]),_:1}))}};export{L as default};
