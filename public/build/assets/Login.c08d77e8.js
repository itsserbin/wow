import{ad as g,m as n,w as m,o as i,x as t,u as s,H as b,g as h,t as k,j as d,i as a,L as x,n as y,I as V,k as f}from"./vendor.1f6af4a6.js";import{_ as c,a as u,d as v,b as $}from"./app.8b7021f2.js";import{_ as B}from"./GuestLayout.fd06610e.js";import{_ as p}from"./InputError.37578239.js";import"./__commonjsHelpers__.488ed5c2.js";import"./vue.m.8e70aa70.js";import"./bootstrap.36b92799.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Logo.c7a5de92.js";const L={key:0,class:"mb-4 font-medium text-sm text-green-600"},N=["onSubmit"],S={class:"mt-4"},q={class:"block mt-4"},C={class:"flex items-center"},F=a("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),P={class:"flex items-center justify-end mt-4"},R=f(" Forgot your password? "),U=f(" Log in "),G={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=g({email:"",password:"",remember:!1}),_=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(w,o)=>(i(),n(B,null,{default:m(()=>[t(s(b),{title:"Log in"}),l.status?(i(),h("div",L,k(l.status),1)):d("",!0),a("form",{onSubmit:V(_,["prevent"])},[a("div",null,[t(c,{for:"email",value:"Email"}),t(u,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(p,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),a("div",S,[t(c,{for:"password",value:"Password"}),t(u,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),required:"",autocomplete:"current-password"},null,8,["modelValue"]),t(p,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),a("div",q,[a("label",C,[t(v,{name:"remember",checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>s(e).remember=r)},null,8,["checked"]),F])]),a("div",P,[l.canResetPassword?(i(),n(s(x),{key:0,href:w.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:m(()=>[R]),_:1},8,["href"])):d("",!0),t($,{class:y(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[U]),_:1},8,["class","disabled"])])],40,N)]),_:1}))}};export{G as default};
