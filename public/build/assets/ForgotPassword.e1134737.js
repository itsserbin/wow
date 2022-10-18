import{V as d,S as i,R as r,K as a,P as e,L as u,O as c,$ as _,M as t,a3 as f,ab as p,Y as w}from"./moment.e1708d83.js";import{_ as b}from"./GuestLayout.7009141e.js";import{_ as g}from"./InputError.b96747dc.js";import{u as y,H as x,_ as h,a as k,b as V}from"./app.663608d0.js";const v=t("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),$={key:0,class:"mb-4 font-medium text-sm text-green-600"},N=["onSubmit"],S={class:"flex items-center justify-end mt-4"},B=w(" Email Password Reset Link "),L={__name:"ForgotPassword",props:{status:String},setup(o){const s=y({email:""}),m=()=>{s.post(route("password.email"))};return(F,l)=>(r(),d(b,null,{default:i(()=>[a(e(x),{title:"Forgot Password"}),v,o.status?(r(),u("div",$,c(o.status),1)):_("",!0),t("form",{onSubmit:p(m,["prevent"])},[t("div",null,[a(h,{for:"email",value:"Email"}),a(k,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":l[0]||(l[0]=n=>e(s).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(g,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",S,[a(V,{class:f({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:i(()=>[B]),_:1},8,["class","disabled"])])],40,N)]),_:1}))}};export{L as default};
