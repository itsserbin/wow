import{Q as n,O as m,F as i,M as a,B as s,y as g,A as b,G as d,z as t,L as h,a8 as k,P as _}from"./moment.791e2419.js";import{u as x,H as y,_ as c,a as u,d as V,L as v,b as B}from"./app.ccd83b47.js";import{_ as L}from"./GuestLayout.39d065dc.js";import{_ as f}from"./InputError.0c7747f2.js";const $={key:0,class:"mb-4 font-medium text-sm text-green-600"},F=["onSubmit"],N={class:"mt-4"},P={class:"block mt-4"},S={class:"flex items-center"},q=t("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),C={class:"flex items-center justify-end mt-4"},R=_(" Forgot your password? "),U=_(" Log in "),j={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=x({email:"",password:"",remember:!1}),p=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(w,o)=>(i(),n(L,null,{default:m(()=>[a(s(y),{title:"Log in"}),l.status?(i(),g("div",$,b(l.status),1)):d("",!0),t("form",{onSubmit:k(p,["prevent"])},[t("div",null,[a(c,{for:"email",value:"Email"}),a(u,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(f,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",N,[a(c,{for:"password",value:"Password"}),a(u,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(f,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",P,[t("label",S,[a(V,{name:"remember",checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>s(e).remember=r)},null,8,["checked"]),q])]),t("div",C,[l.canResetPassword?(i(),n(s(v),{key:0,href:w.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:m(()=>[R]),_:1},8,["href"])):d("",!0),a(B,{class:h(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[U]),_:1},8,["class","disabled"])])],40,F)]),_:1}))}};export{j as default};
