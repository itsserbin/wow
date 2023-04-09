import _ from"./OrderItem.ae46836e.js";import{m,p as o,q as t,x as e,s as d,u as h,F as x,D as u,z as i,B as g}from"./index.1726d409.js";const f={class:"grid grid-cols-1 gap-4"},y={class:"grid grid-cols-2 gap-4 justify-center items-center"},v=t("h3",{class:"font-semibold text-xl"},"ID \u0437\u0430\u0432\u043E\u043C\u043B\u0435\u043D\u043D\u044F:",-1),b={class:"text-xl"},j={class:"grid grid-cols-2 gap-4 justify-center items-center"},k=t("h3",{class:"font-semibold text-xl"},"\u0421\u0442\u0430\u0442\u0443\u0441 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F:",-1),B={class:"text-xl"},p={class:"grid grid-cols-2 gap-4 justify-center items-center"},$=t("h3",{class:"font-semibold text-xl"},"\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0441\u0443\u043C\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F:",-1),D={class:"text-xl"},w={key:0,class:"grid grid-cols-2 gap-4 justify-center items-center"},F=t("h3",{class:"font-semibold text-xl"},"\u041F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430:",-1),N={class:"text-xl"},S=t("hr",{class:"my-3"},null,-1),V={class:"grid grid-cols-2 gap-4 justify-center items-center"},q=t("h3",{class:"font-semibold text-xl"},"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456:",-1),z={class:"text-xl"},C={class:"grid grid-cols-2 gap-4 justify-center items-center"},E=t("h3",{class:"font-semibold text-xl"},"\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443:",-1),I={class:"text-xl"},L=t("hr",{class:"my-3"},null,-1),A={key:1,class:"grid grid-cols-2 gap-4 justify-center items-center"},G=t("h3",{class:"font-semibold text-xl"},"\u041C\u0456\u0441\u0442\u043E \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F:",-1),H={class:"text-xl"},J={key:2,class:"grid grid-cols-2 gap-4 justify-center items-center"},K=t("h3",{class:"font-semibold text-xl"},"\u041F\u043E\u0447\u0442\u043E\u0432\u0435 \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F:",-1),M={class:"text-xl"},O={key:3,class:"grid grid-cols-2 gap-4 justify-center items-center"},P=t("h3",{class:"font-semibold text-xl"},"\u041D\u043E\u043C\u0435\u0440 \u043D\u0430\u043A\u043B\u0430\u0434\u043D\u043E\u0457:",-1),Q={class:"text-xl"},R={class:"block"},W={__name:"Status",props:["order","statuses"],setup(s){const n=s,a=m(()=>{const{name:l,last_name:r,middle_name:c}=n.order.client;return`${l||""} ${r||""} ${c||""}`});return(l,r)=>(i(),o("div",null,[t("div",f,[t("div",y,[v,t("div",b,e(s.order.id),1)]),t("div",j,[k,t("div",B,e(s.order.status==="transferred_to_supplier"?"\u041F\u0435\u0440\u0435\u0434\u0430\u043D\u043E \u0434\u043E \u0443\u043F\u0430\u043A\u0443\u0432\u0430\u043D\u043D\u044F":n.statuses[s.order.status]),1)]),t("div",p,[$,t("div",D,e(s.order.total_price),1)]),s.order.prepayment_sum?(i(),o("div",w,[F,t("div",N,e(s.order.prepayment_sum),1)])):d("",!0),S,t("div",V,[q,t("div",z,e(h(a)),1)]),t("div",C,[E,t("div",I,e(s.order.client.phone),1)]),L,s.order.city?(i(),o("div",A,[G,t("div",H,e(s.order.city),1)])):d("",!0),s.order.postal_office?(i(),o("div",J,[K,t("div",M,e(s.order.postal_office),1)])):d("",!0),s.order.waybill?(i(),o("div",O,[P,t("div",Q,e(s.order.waybill),1)])):d("",!0),t("div",R,[(i(!0),o(x,null,u(s.order.items,c=>(i(),g(_,{item:c},null,8,["item"]))),256))])])]))}};export{W as default};
