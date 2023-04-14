import{ak as g,A as n,B as m,y as i,E as a,u as s,U as b,m as k,v as x,q as d,p as t,L as y,s as u,x as h,W as v}from"./index-bc3c132c.js";import{_ as c,a as p,d as V,b as B}from"./app-b232e098.js";import{_ as $}from"./GuestLayout-a4646758.js";import{_ as f}from"./InputError-1757c692.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-3d23fa23.js";const L={key:0,class:"mb-4 font-medium text-sm text-green-600"},q=["onSubmit"],N={class:"mt-4"},S={class:"block mt-4"},U={class:"flex items-center"},C=t("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),E={class:"flex items-center justify-end mt-4"},H={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=g({email:"",password:"",remember:!1}),_=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(w,o)=>(i(),n($,null,{default:m(()=>[a(s(b),{title:"Log in"}),l.status?(i(),k("div",L,x(l.status),1)):d("",!0),t("form",{onSubmit:v(_,["prevent"])},[t("div",null,[a(c,{for:"email",value:"Email"}),a(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(f,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",N,[a(c,{for:"password",value:"Password"}),a(p,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(f,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",S,[t("label",U,[a(V,{name:"remember",checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>s(e).remember=r)},null,8,["checked"]),C])]),t("div",E,[l.canResetPassword?(i(),n(s(y),{key:0,href:w.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:m(()=>[u(" Forgot your password? ")]),_:1},8,["href"])):d("",!0),a(B,{class:h(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[u(" Log in ")]),_:1},8,["class","disabled"])])],40,q)]),_:1}))}};export{H as default};
