import{ad as u,g as f,p,w as s,o as a,y as i,u as e,I as _,i as g,k as h,j as o,l as r,n as y,L as b,K as k}from"./vendor.2c8aab53.js";import{_ as v}from"./GuestLayout.5f6dba0f.js";import{b as x}from"./app.1edad9f2.js";import"./__commonjsHelpers__.4516dc8a.js";import"./vue.m.132a23fc.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Logo.6090e12d.js";const w=o("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],E={class:"mt-4 flex items-center justify-between"},z={__name:"VerifyEmail",props:{status:String},setup(n){const c=n,t=u(),d=()=>{t.post(route("verification.send"))},m=f(()=>c.status==="verification-link-sent");return(l,L)=>(a(),p(v,null,{default:s(()=>[i(e(_),{title:"Email Verification"}),w,e(m)?(a(),g("div",V," A new verification link has been sent to the email address you provided during registration. ")):h("",!0),o("form",{onSubmit:k(d,["prevent"])},[o("div",E,[i(x,{class:y({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:s(()=>[r(" Resend Verification Email ")]),_:1},8,["class","disabled"]),i(e(b),{href:l.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:s(()=>[r("Log Out")]),_:1},8,["href"])])],40,B)]),_:1}))}};export{z as default};