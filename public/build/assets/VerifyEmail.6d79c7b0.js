import{z as u,a0 as f,W as s,S as a,K as i,P as e,L as _,Z as h,M as o,V as p,ac as g,X as n}from"./___vite-browser-external_commonjs-proxy.bd54111c.js";import{_ as y}from"./GuestLayout.456b9dda.js";import{u as b,H as v,b as k,L as x}from"./app.6f988b92.js";const V=o("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),w={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],L={class:"mt-4 flex items-center justify-between"},S=n(" Resend Verification Email "),E=n("Log Out"),H={__name:"VerifyEmail",props:{status:String},setup(r){const c=r,t=b(),d=()=>{t.post(route("verification.send"))},l=u(()=>c.status==="verification-link-sent");return(m,N)=>(a(),f(y,null,{default:s(()=>[i(e(v),{title:"Email Verification"}),V,e(l)?(a(),_("div",w," A new verification link has been sent to the email address you provided during registration. ")):h("",!0),o("form",{onSubmit:g(d,["prevent"])},[o("div",L,[i(k,{class:p({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:s(()=>[S]),_:1},8,["class","disabled"]),i(e(x),{href:m.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:s(()=>[E]),_:1},8,["href"])])],40,B)]),_:1}))}};export{H as default};
