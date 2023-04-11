import h from"./Characteristics.97d56ed1.js";import{p as _,f as y,g as l,i,F as m,s as p,n as u,j as d,m as f,ad as x,u as g,o as s,t as k}from"./vendor.693a237b.js";import"./__commonjsHelpers__.488ed5c2.js";const z={class:"grid grid-cols-1 gap-4"},T={class:"border-b border-red-200 dark:border-red-700"},A={class:"flex flex-wrap -mb-px text-sm font-medium text-center text-main"},C=["onClick"],B=["innerHTML"],E=["src"],D={__name:"Content",props:["lang","description","characteristics","sizeTable","youtube","options","returnAndExchangeUa","returnAndExchangeRu","deliveryAndPaymentUa","deliveryAndPaymentRu"],setup(o){const t=o,e=_({active:"",content:"",class:""}),b=y(()=>e.value.active==="characteristics"?h:null),c=[{label:"\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u0430",key:"deliveryAndPayment",value:{ua:t.options.text_delivery_and_payment_ua,ru:t.options.text_delivery_and_payment_ru},class:"content"},{label:"\u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u0442\u0430 \u043E\u0431\u043C\u0456\u043D",key:"returnAndExchange",value:{ua:t.options.text_return_and_exchange_ua,ru:t.options.text_return_and_exchange_ru},class:"content"}];t.youtube&&(c.unshift({label:"\u0412\u0456\u0434\u0435\u043E-\u043E\u0433\u043B\u044F\u0434",key:"youtube",value:t.youtube,class:"youtube"}),e.value={active:"youtube",content:t.youtube,class:"youtube"}),t.sizeTable&&(c.unshift({label:"\u0422\u0430\u0431\u043B\u0438\u0446\u044F \u0440\u043E\u0437\u043C\u0456\u0440\u0456\u0432",key:"sizeTable",value:t.sizeTable,class:"sizes-table"}),e.value={active:"sizeTable",content:t.sizeTable,class:"sizes-table"}),Object.keys(t.characteristics).length&&(c.unshift({label:"\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438",key:"characteristics",value:t.characteristics,class:"characteristics-table"}),e.value={active:"characteristics",content:"",class:"characteristics-table"});const v=(n,r,a)=>{switch(e.value.active=n,n){case"sizeTable":case"youtube":e.value.content=r;break;case"characteristics":e.value.content=n;break;default:e.value.content=t.lang==="ru"?r.ru:r.ua;break}e.value.class=a};return(n,r)=>(s(),l("div",z,[i("div",T,[i("ul",A,[(s(),l(m,null,p(c,a=>i("li",{class:"mr-2",onClick:j=>v(a.key,a.value,a.class)},[i("a",{href:"javascript:",class:u(["inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-accent hover:border-accent group font-subheading text-base",{"text-red-600 border-red-600":e.value.active===a.key}])},k(a.label),3)],8,C)),64))])]),e.value.active!=="characteristics"&&e.value.active!=="youtube"?(s(),l("div",{key:0,innerHTML:e.value.content,class:u(e.value.class)},null,10,B)):d("",!0),e.value.active==="youtube"?(s(),l("iframe",{key:1,width:"100%",height:"500px",src:e.value.content},null,8,E)):d("",!0),(s(),f(x(g(b)),{items:o.characteristics,lang:o.lang},null,8,["items","lang"]))]))}};export{D as default};
