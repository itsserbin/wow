import{Q as c,K as n,F as f,J as o,B as e,z as r,I as _,a7 as w,L as V}from"./___vite-browser-external_commonjs-proxy.4f2b06be.js";import{_ as g}from"./GuestLayout.5c174f37.js";import{_ as l}from"./InputError.94e18b7f.js";import{u as b,H as k,_ as i,a as m,b as v}from"./app.460df568.js";const x=["onSubmit"],y={class:"mt-4"},P={class:"mt-4"},$={class:"flex items-center justify-end mt-4"},B=V(" Reset Password "),N={__name:"ResetPassword",props:{email:String,token:String},setup(u){const d=u,s=b({token:d.token,email:d.email,password:"",password_confirmation:""}),p=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(S,a)=>(f(),c(g,null,{default:n(()=>[o(e(k),{title:"Reset Password"}),r("form",{onSubmit:w(p,["prevent"])},[r("div",null,[o(i,{for:"email",value:"Email"}),o(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=t=>e(s).email=t),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),r("div",y,[o(i,{for:"password",value:"Password"}),o(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>e(s).password=t),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),r("div",P,[o(i,{for:"password_confirmation",value:"Confirm Password"}),o(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>e(s).password_confirmation=t),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(l,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),r("div",$,[o(v,{class:_({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:n(()=>[B]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{N as default};
