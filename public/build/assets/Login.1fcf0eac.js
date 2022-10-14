import{U as n,R as m,Q as i,J as a,O as s,K as g,M as b,X as d,L as t,W as h,a6 as k,a1 as _}from"./_plugin-vue_export-helper.4dd23699.js";import{u as x,H as y,_ as c,a as u,c as V,L as v,b as L}from"./app.bf5b84e8.js";import{_ as $}from"./GuestLayout.9c483aff.js";import{_ as f}from"./InputError.6f9f5e1e.js";const B={key:0,class:"mb-4 font-medium text-sm text-green-600"},N=["onSubmit"],R={class:"mt-4"},S={class:"block mt-4"},U={class:"flex items-center"},q=t("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),C={class:"flex items-center justify-end mt-4"},F=_(" Forgot your password? "),P=_(" Log in "),z={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=x({email:"",password:"",remember:!1}),p=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(w,o)=>(i(),n($,null,{default:m(()=>[a(s(y),{title:"Log in"}),l.status?(i(),g("div",B,b(l.status),1)):d("",!0),t("form",{onSubmit:k(p,["prevent"])},[t("div",null,[a(c,{for:"email",value:"Email"}),a(u,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(f,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",R,[a(c,{for:"password",value:"Password"}),a(u,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(f,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",S,[t("label",U,[a(V,{name:"remember",checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>s(e).remember=r)},null,8,["checked"]),q])]),t("div",C,[l.canResetPassword?(i(),n(s(v),{key:0,href:w.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:m(()=>[F]),_:1},8,["href"])):d("",!0),a(L,{class:h(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[P]),_:1},8,["class","disabled"])])],40,N)]),_:1}))}};export{z as default};
