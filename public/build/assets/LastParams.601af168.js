import{u as r,K as a,F as c,S as y,Q as t,U as i,R as k,X as m,M as d,W as p}from"./_plugin-vue_export-helper.19045d4a.js";const b={class:"grid grid-cols-2 md:grid-cols-4 gap-4 my-5"},g={__name:"LastParams",props:["activeItem"],emits:["sortByLast"],setup(s){const l=r([{label:"\u0412\u0435\u0441\u044C \u0447\u0430\u0441",key:null},{label:"\u041F\u043E\u0442\u043E\u0447\u043D\u0438\u0439 \u0442\u0438\u0436\u0434\u0435\u043D\u044C",key:"week"},{label:"\u041F\u043E\u0442\u043E\u0447\u043D\u0438\u0439 \u0442\u0430 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456 \u0442\u0438\u0436\u043D\u0456",key:"two-week"},{label:"\u041F\u043E\u0442\u043E\u0447\u043D\u0438\u0439 \u043C\u0456\u0441\u044F\u0446\u044C",key:"one-month"},{label:"7 \u0434\u043D\u0456\u0432",key:"7-days"},{label:"14 \u0434\u043D\u0456\u0432",key:"14-days"},{label:"30 \u0434\u043D\u0456\u0432",key:"30-days"},{label:"90 \u0434\u043D\u0456\u0432",key:"90-days"}]);return(o,u)=>{const n=p("button-component");return t(),a("div",b,[(t(!0),a(c,null,y(l,e=>(t(),i(n,{type:"btn",onClick:_=>o.$emit("sortByLast",e.key),active:e.key===s.activeItem},{default:k(()=>[m(d(e.label),1)]),_:2},1032,["onClick","active"]))),256))])}}};export{g as default};
