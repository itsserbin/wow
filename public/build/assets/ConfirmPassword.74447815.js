import{V as d,S as t,R as l,K as o,P as a,M as e,a3 as m,ab as c,Y as u}from"./moment.e1708d83.js";import{_ as f}from"./GuestLayout.7009141e.js";import{_ as p}from"./InputError.b96747dc.js";import{u as _,H as w,_ as b,a as h,b as x}from"./app.663608d0.js";const V=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),g=["onSubmit"],v={class:"flex justify-end mt-4"},y=u(" Confirm "),S={__name:"ConfirmPassword",setup(C){const s=_({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(P,r)=>(l(),d(f,null,{default:t(()=>[o(a(w),{title:"Confirm Password"}),V,e("form",{onSubmit:c(i,["prevent"])},[e("div",null,[o(b,{for:"password",value:"Password"}),o(h,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":r[0]||(r[0]=n=>a(s).password=n),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(p,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),e("div",v,[o(x,{class:m(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:t(()=>[y]),_:1},8,["class","disabled"])])],40,g)]),_:1}))}};export{S as default};
