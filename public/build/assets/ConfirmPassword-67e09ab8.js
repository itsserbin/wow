import{ak as n,A as l,B as t,y as d,E as a,u as o,U as c,p as e,s as p,x as u,W as f}from"./index-bc3c132c.js";import{_}from"./GuestLayout-a4646758.js";import{_ as w}from"./InputError-1757c692.js";import{_ as b,a as x,b as h}from"./app-b232e098.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-3d23fa23.js";const g=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),y=["onSubmit"],V={class:"flex justify-end mt-4"},T={__name:"ConfirmPassword",setup(v){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(C,r)=>(d(),l(_,null,{default:t(()=>[a(o(c),{title:"Confirm Password"}),g,e("form",{onSubmit:f(i,["prevent"])},[e("div",null,[a(b,{for:"password",value:"Password"}),a(x,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=m=>o(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(w,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",V,[a(h,{class:u(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[p(" Confirm ")]),_:1},8,["class","disabled"])])],40,y)]),_:1}))}};export{T as default};
