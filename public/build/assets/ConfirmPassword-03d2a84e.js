import{j as m,a3 as n,l,m as d,n as a,x as o,p as e,y as c,A as p,J as f,F as _,Q as u,w}from"./index-a01126e2.js";import{_ as b}from"./GuestLayout-d13b9ef0.js";import{_ as g}from"./InputError-f28ae438.js";import{_ as x}from"./Label-20131f4c.js";import{_ as h}from"./Button-dd1aed97.js";import{_ as y}from"./Input-39294dfa.js";import"./index.esm-02fff71f.js";import"./Logo-83ffc10f.js";const C=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),V=["onSubmit"],v={class:"flex justify-end mt-4"},$=m({layout:b}),A=Object.assign($,{__name:"ConfirmPassword",setup(F){const s=n({password:""}),t=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(P,r)=>(l(),d(_,null,[a(o(u),{title:"Confirm Password"}),C,e("form",{onSubmit:f(t,["prevent"])},[e("div",null,[a(x,{for:"password",value:"Password"}),a(y,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=i=>o(s).password=i),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(g,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",v,[a(h,{class:p(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:c(()=>[w(" Confirm ")]),_:1},8,["class","disabled"])])],40,V)],64))}});export{A as default};
