import{Q as d,K as t,F as l,J as o,B as a,z as e,I as m,a7 as c,L as u}from"./___vite-browser-external_commonjs-proxy.4f2b06be.js";import{_ as f}from"./GuestLayout.5c174f37.js";import{_ as p}from"./InputError.94e18b7f.js";import{u as _,H as w,_ as b,a as h,b as x}from"./app.460df568.js";const g=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),V=["onSubmit"],v={class:"flex justify-end mt-4"},y=u(" Confirm "),N={__name:"ConfirmPassword",setup(C){const s=_({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return($,r)=>(l(),d(f,null,{default:t(()=>[o(a(w),{title:"Confirm Password"}),g,e("form",{onSubmit:c(i,["prevent"])},[e("div",null,[o(b,{for:"password",value:"Password"}),o(h,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":r[0]||(r[0]=n=>a(s).password=n),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(p,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),e("div",v,[o(x,{class:m(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:t(()=>[y]),_:1},8,["class","disabled"])])],40,V)]),_:1}))}};export{N as default};
