import{ad as u,f,m as _,w as s,o as a,x as i,u as e,H as p,g as h,j as g,i as o,n as y,L as b,I as k,k as n}from"./vendor.1f6af4a6.js";import{_ as v}from"./GuestLayout.fd06610e.js";import{b as x}from"./app.8b7021f2.js";import"./__commonjsHelpers__.488ed5c2.js";import"./vue.m.8e70aa70.js";import"./bootstrap.36b92799.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Logo.c7a5de92.js";const w=o("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],E={class:"mt-4 flex items-center justify-between"},L=n(" Resend Verification Email "),N=n("Log Out"),F={__name:"VerifyEmail",props:{status:String},setup(r){const c=r,t=u(),d=()=>{t.post(route("verification.send"))},m=f(()=>c.status==="verification-link-sent");return(l,S)=>(a(),_(v,null,{default:s(()=>[i(e(p),{title:"Email Verification"}),w,e(m)?(a(),h("div",V," A new verification link has been sent to the email address you provided during registration. ")):g("",!0),o("form",{onSubmit:k(d,["prevent"])},[o("div",E,[i(x,{class:y({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:s(()=>[L]),_:1},8,["class","disabled"]),i(e(b),{href:l.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:s(()=>[N]),_:1},8,["href"])])],40,B)]),_:1}))}};export{F as default};