import{i as l,y as u,w as c,T as m,j as e,o,n as g,p as x,k as a,m as d,t as r}from"./vendor.2c8aab53.js";import b from"./Loader.e4a965ae.js";import"./__commonjsHelpers__.4516dc8a.js";import"./_plugin-vue_export-helper.cdc0426e.js";const f={class:"fixed top-0 right-0 left-0 w-full md:inset-0 h-full justify-center items-center flex backdrop-blur-sm z-[100]"},y={class:"bg-white rounded-lg shadow"},h={key:1},v={class:"flex justify-between items-start p-4 rounded-t border-b"},w={key:0,class:"text-xl font-semibold text-gray-900"},k=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),B=e("span",{class:"sr-only"},"Close modal",-1),p=[k,B],z={key:0,class:"p-6 space-y-6"},T={class:"text-base leading-relaxed text-gray-500"},C={key:1,class:"grid gap-4 p-6 rounded-b border-t border-gray-200"},$=e("div",{class:"bg-gray-900 bg-opacity-50 fixed inset-0 z-30"},null,-1),N={__name:"Modal",props:["cancelButtonText","declineButtonText","submitButtonText","size","isLoading"],emits:["closeModal","submitForm","clickCancel","declineForm"],setup(t){return(s,n)=>(o(),l("div",null,[u(m,{name:"fadeSecond"},{default:c(()=>[e("div",f,[e("div",{class:g(["p-4 mb-20 w-full h-full md:h-full mx-auto top-10 z-50 relative overflow-scroll modal-scroll animate__animated animate__fadeIn",{"max-w-md":t.size==="small","max-w-lg":t.size==="medium","max-w-4xl":t.size==="large","max-w-7xl":t.size==="extralarge"}])},[e("div",y,[t.isLoading?(o(),x(b,{key:0})):a("",!0),t.isLoading?a("",!0):(o(),l("div",h,[e("div",v,[s.$slots.title?(o(),l("h3",w,[d(s.$slots,"title")])):a("",!0),e("button",{onClick:n[0]||(n[0]=i=>s.$emit("closeModal")),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center","data-modal-toggle":"defaultModal"},p)]),s.$slots.content?(o(),l("div",z,[e("div",T,[d(s.$slots,"content")])])):a("",!0),t.cancelButtonText||t.submitButtonText?(o(),l("div",C,[t.submitButtonText?(o(),l("button",{key:0,onClick:n[1]||(n[1]=i=>s.$emit("submitForm")),type:"button",class:"mx-auto w-48 text-white bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},r(t.submitButtonText),1)):a("",!0),t.cancelButtonText?(o(),l("button",{key:1,onClick:n[2]||(n[2]=i=>s.$emit("clickCancel")),type:"button",class:"mx-auto w-48 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"},r(t.cancelButtonText),1)):a("",!0)])):a("",!0)]))])],2)])]),_:3}),$]))}};export{N as default};
