import{U as c,R as n,Q as f,J as o,O as e,L as r,X as _,a6 as w,Y as V}from"./_plugin-vue_export-helper.80033396.js";import{_ as g}from"./GuestLayout.5e952d83.js";import{_ as l}from"./InputError.d13b83ba.js";import{u as b,H as k,_ as i,a as m,b as v}from"./app.3d1b1164.js";const x=["onSubmit"],y={class:"mt-4"},P={class:"mt-4"},$={class:"flex items-center justify-end mt-4"},R=V(" Reset Password "),C={__name:"ResetPassword",props:{email:String,token:String},setup(u){const d=u,s=b({token:d.token,email:d.email,password:"",password_confirmation:""}),p=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(S,a)=>(f(),c(g,null,{default:n(()=>[o(e(k),{title:"Reset Password"}),r("form",{onSubmit:w(p,["prevent"])},[r("div",null,[o(i,{for:"email",value:"Email"}),o(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=t=>e(s).email=t),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),r("div",y,[o(i,{for:"password",value:"Password"}),o(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>e(s).password=t),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),r("div",P,[o(i,{for:"password_confirmation",value:"Confirm Password"}),o(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>e(s).password_confirmation=t),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),r("div",$,[o(v,{class:_({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:n(()=>[R]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{C as default};
