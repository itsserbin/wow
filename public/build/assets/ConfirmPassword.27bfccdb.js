import{ai as n,B as d,C as t,z as l,G as a,u as o,Q as c,q as e,y as p,S as u,v as f}from"./index.1726d409.js";import{_}from"./GuestLayout.8d5ee382.js";import{_ as w}from"./InputError.2731f248.js";import{_ as b,a as h,b as x}from"./app.2d605236.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.9264c4eb.js";const g=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),v=["onSubmit"],y={class:"flex justify-end mt-4"},C=f(" Confirm "),T={__name:"ConfirmPassword",setup(V){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return($,r)=>(l(),d(_,null,{default:t(()=>[a(o(c),{title:"Confirm Password"}),g,e("form",{onSubmit:u(i,["prevent"])},[e("div",null,[a(b,{for:"password",value:"Password"}),a(h,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=m=>o(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(w,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",y,[a(x,{class:p(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[C]),_:1},8,["class","disabled"])])],40,v)]),_:1}))}};export{T as default};