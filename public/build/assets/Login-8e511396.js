import{ae as w,s as n,v as m,p as i,z as a,u as s,N as b,g as k,l as x,j as d,i as t,L as h,k as c,m as y,P as v}from"./app-443dd386.js";import{_ as u,a as p,c as V,b as $}from"./app-957518a1.js";import{_ as B}from"./GuestLayout-d0d72a32.js";import{_ as f}from"./InputError-bb3e75e3.js";import"./vue-i18n.esm-bundler-c84158d1.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-89534839.js";const L={key:0,class:"mb-4 font-medium text-sm text-green-600"},N=["onSubmit"],P={class:"mt-4"},S={class:"block mt-4"},q={class:"flex items-center"},C=t("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),F={class:"flex items-center justify-end mt-4"},T={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=w({email:"",password:"",remember:!1}),_=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(g,o)=>(i(),n(B,null,{default:m(()=>[a(s(b),{title:"Log in"}),l.status?(i(),k("div",L,x(l.status),1)):d("",!0),t("form",{onSubmit:v(_,["prevent"])},[t("div",null,[a(u,{for:"email",value:"Email"}),a(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(f,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",P,[a(u,{for:"password",value:"Password"}),a(p,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(f,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",S,[t("label",q,[a(V,{name:"remember",checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>s(e).remember=r)},null,8,["checked"]),C])]),t("div",F,[l.canResetPassword?(i(),n(s(h),{key:0,href:g.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:m(()=>[c(" Forgot your password? ")]),_:1},8,["href"])):d("",!0),a($,{class:y(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[c(" Log in ")]),_:1},8,["class","disabled"])])],40,N)]),_:1}))}};export{T as default};
