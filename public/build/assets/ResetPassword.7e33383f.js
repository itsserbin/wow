import{V as c,S as n,R as f,K as a,P as e,M as r,a3 as _,ab as w,Y as V}from"./moment.e1708d83.js";import{_ as b}from"./GuestLayout.76d31649.js";import{_ as l}from"./InputError.b96747dc.js";import{u as g,H as k,_ as i,a as m,b as v}from"./app.b59c83cc.js";const P=["onSubmit"],x={class:"mt-4"},y={class:"mt-4"},S={class:"flex items-center justify-end mt-4"},$=V(" Reset Password "),N={__name:"ResetPassword",props:{email:String,token:String},setup(u){const d=u,s=g({token:d.token,email:d.email,password:"",password_confirmation:""}),p=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(R,o)=>(f(),c(b,null,{default:n(()=>[a(e(k),{title:"Reset Password"}),r("form",{onSubmit:w(p,["prevent"])},[r("div",null,[a(i,{for:"email",value:"Email"}),a(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":o[0]||(o[0]=t=>e(s).email=t),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(l,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),r("div",x,[a(i,{for:"password",value:"Password"}),a(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":o[1]||(o[1]=t=>e(s).password=t),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(l,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),r("div",y,[a(i,{for:"password_confirmation",value:"Confirm Password"}),a(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":o[2]||(o[2]=t=>e(s).password_confirmation=t),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(l,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),r("div",S,[a(v,{class:_({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:n(()=>[$]),_:1},8,["class","disabled"])])],40,P)]),_:1}))}};export{N as default};
