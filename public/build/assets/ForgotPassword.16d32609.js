import{Q as d,O as i,F as r,M as a,B as e,y as u,A as c,G as _,z as t,L as f,a8 as p,P as w}from"./moment.791e2419.js";import{_ as g}from"./GuestLayout.39d065dc.js";import{_ as y}from"./InputError.0c7747f2.js";import{u as b,H as x,_ as h,a as k,b as V}from"./app.ccd83b47.js";const v=t("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),B={key:0,class:"mb-4 font-medium text-sm text-green-600"},F=["onSubmit"],N={class:"flex items-center justify-end mt-4"},$=w(" Email Password Reset Link "),H={__name:"ForgotPassword",props:{status:String},setup(o){const s=b({email:""}),m=()=>{s.post(route("password.email"))};return(P,l)=>(r(),d(g,null,{default:i(()=>[a(e(x),{title:"Forgot Password"}),v,o.status?(r(),u("div",B,c(o.status),1)):_("",!0),t("form",{onSubmit:p(m,["prevent"])},[t("div",null,[a(h,{for:"email",value:"Email"}),a(k,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":l[0]||(l[0]=n=>e(s).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(y,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",N,[a(V,{class:f({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:i(()=>[$]),_:1},8,["class","disabled"])])],40,F)]),_:1}))}};export{H as default};
