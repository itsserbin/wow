import h from"./Characteristics-23e347e6.js";import{g as y,l as _,m as l,p as i,F as m,C as p,x as u,q as d,A as x,a9 as f,u as g,y as s,v as k}from"./index-bc3c132c.js";const z={class:"grid grid-cols-1 gap-4"},T={class:"border-b border-red-200 dark:border-red-700"},A={class:"flex flex-wrap -mb-px text-sm font-medium text-center text-main"},C=["onClick"],B=["innerHTML"],E=["src"],j={__name:"Content",props:["lang","description","characteristics","sizeTable","youtube","options","returnAndExchangeUa","returnAndExchangeRu","deliveryAndPaymentUa","deliveryAndPaymentRu"],setup(o){const t=o,e=y({active:"",content:"",class:""}),v=_(()=>e.value.active==="characteristics"?h:null),c=[{label:"Доставка та оплата",key:"deliveryAndPayment",value:{ua:t.options.text_delivery_and_payment_ua,ru:t.options.text_delivery_and_payment_ru},class:"content"},{label:"Повернення та обмін",key:"returnAndExchange",value:{ua:t.options.text_return_and_exchange_ua,ru:t.options.text_return_and_exchange_ru},class:"content"}];t.youtube&&(c.unshift({label:"Відео-огляд",key:"youtube",value:t.youtube,class:"youtube"}),e.value={active:"youtube",content:t.youtube,class:"youtube"}),t.sizeTable&&(c.unshift({label:"Таблиця розмірів",key:"sizeTable",value:t.sizeTable,class:"sizes-table"}),e.value={active:"sizeTable",content:t.sizeTable,class:"sizes-table"}),Object.keys(t.characteristics).length&&(c.unshift({label:"Характеристики",key:"characteristics",value:t.characteristics,class:"characteristics-table"}),e.value={active:"characteristics",content:"",class:"characteristics-table"});const b=(n,r,a)=>{switch(e.value.active=n,n){case"sizeTable":case"youtube":e.value.content=r;break;case"characteristics":e.value.content=n;break;default:e.value.content=t.lang==="ru"?r.ru:r.ua;break}e.value.class=a};return(n,r)=>(s(),l("div",z,[i("div",T,[i("ul",A,[(s(),l(m,null,p(c,a=>i("li",{class:"mr-2",onClick:w=>b(a.key,a.value,a.class)},[i("a",{href:"javascript:",class:u(["inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-accent hover:border-accent group font-subheading text-base",{"text-red-600 border-red-600":e.value.active===a.key}])},k(a.label),3)],8,C)),64))])]),e.value.active!=="characteristics"&&e.value.active!=="youtube"?(s(),l("div",{key:0,innerHTML:e.value.content,class:u(e.value.class)},null,10,B)):d("",!0),e.value.active==="youtube"?(s(),l("iframe",{key:1,width:"100%",height:"500px",src:e.value.content},null,8,E)):d("",!0),(s(),x(f(g(v)),{items:o.characteristics,lang:o.lang},null,8,["items","lang"]))]))}};export{j as default};
