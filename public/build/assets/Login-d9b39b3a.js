import{j as w,a3 as b,l,m as i,n as a,x as s,v as x,t as n,p as t,s as y,y as d,A as k,J as h,F as v,Q as V,w as c,L as $}from"./index-a01126e2.js";import{_ as B}from"./Checkbox-d751a48d.js";import{_ as F}from"./GuestLayout-d13b9ef0.js";import{_ as u}from"./InputError-f28ae438.js";import{_ as p}from"./Label-20131f4c.js";import{_ as L}from"./Button-dd1aed97.js";import{_ as f}from"./Input-39294dfa.js";import"./index.esm-02fff71f.js";import"./Logo-83ffc10f.js";const C={key:0,class:"mb-4 font-medium text-sm text-green-600"},N=["onSubmit"],S={class:"mt-4"},j={class:"block mt-4"},q={class:"flex items-center"},P=t("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),R={class:"flex items-center justify-end mt-4"},U=w({layout:F}),T=Object.assign(U,{__name:"Login",props:{canResetPassword:Boolean,status:String},setup(m){const e=b({email:"",password:"",remember:!1}),_=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(g,o)=>(l(),i(v,null,[a(s(V),{title:"Log in"}),m.status?(l(),i("div",C,x(m.status),1)):n("",!0),t("form",{onSubmit:h(_,["prevent"])},[t("div",null,[a(p,{for:"email",value:"Email"}),a(f,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(u,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",S,[a(p,{for:"password",value:"Password"}),a(f,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(u,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",j,[t("label",q,[a(B,{name:"remember",checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>s(e).remember=r)},null,8,["checked"]),P])]),t("div",R,[m.canResetPassword?(l(),y(s($),{key:0,href:g.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:d(()=>[c(" Forgot your password? ")]),_:1},8,["href"])):n("",!0),a(L,{class:k(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:d(()=>[c(" Log in ")]),_:1},8,["class","disabled"])])],40,N)],64))}});export{T as default};
