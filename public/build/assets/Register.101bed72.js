import{ai as c,B as f,C as n,z as _,G as a,u as e,Q as w,q as l,L as g,y as V,S as v,v as d}from"./index.1726d409.js";import{_ as b}from"./GuestLayout.8d5ee382.js";import{_ as r}from"./InputError.2731f248.js";import{_ as m,a as i,b as y}from"./app.2d605236.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.9264c4eb.js";const x=["onSubmit"],k={class:"mt-4"},h={class:"mt-4"},q={class:"mt-4"},$={class:"flex items-center justify-end mt-4"},B=d(" Already registered? "),C=d(" Register "),A={__name:"Register",setup(N){const s=c({name:"",email:"",password:"",password_confirmation:"",terms:!1}),u=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(p,o)=>(_(),f(b,null,{default:n(()=>[a(e(w),{title:"Register"}),l("form",{onSubmit:v(u,["prevent"])},[l("div",null,[a(m,{for:"name",value:"Name"}),a(i,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(s).name,"onUpdate:modelValue":o[0]||(o[0]=t=>e(s).name=t),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(r,{class:"mt-2",message:e(s).errors.name},null,8,["message"])]),l("div",k,[a(m,{for:"email",value:"Email"}),a(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":o[1]||(o[1]=t=>e(s).email=t),required:"",autocomplete:"username"},null,8,["modelValue"]),a(r,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),l("div",h,[a(m,{for:"password",value:"Password"}),a(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":o[2]||(o[2]=t=>e(s).password=t),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(r,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),l("div",q,[a(m,{for:"password_confirmation",value:"Confirm Password"}),a(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=t=>e(s).password_confirmation=t),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(r,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),l("div",$,[a(e(g),{href:p.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:n(()=>[B]),_:1},8,["href"]),a(y,{class:V(["ml-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:n(()=>[C]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{A as default};