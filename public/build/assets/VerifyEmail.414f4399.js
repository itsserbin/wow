import{A as u,U as f,R as s,Q as a,J as i,O as e,K as _,Z as h,L as o,_ as p,a7 as g,X as n}from"./_plugin-vue_export-helper.19045d4a.js";import{_ as y}from"./GuestLayout.fa1b59f8.js";import{u as b,H as v,b as k,L as x}from"./app.29455998.js";const w=o("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],L={class:"mt-4 flex items-center justify-between"},E=n(" Resend Verification Email "),N=n("Log Out"),H={__name:"VerifyEmail",props:{status:String},setup(r){const c=r,t=b(),d=()=>{t.post(route("verification.send"))},l=u(()=>c.status==="verification-link-sent");return(m,S)=>(a(),f(y,null,{default:s(()=>[i(e(v),{title:"Email Verification"}),w,e(l)?(a(),_("div",V," A new verification link has been sent to the email address you provided during registration. ")):h("",!0),o("form",{onSubmit:g(d,["prevent"])},[o("div",L,[i(k,{class:p({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:s(()=>[E]),_:1},8,["class","disabled"]),i(e(x),{href:m.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:s(()=>[N]),_:1},8,["href"])])],40,B)]),_:1}))}};export{H as default};
