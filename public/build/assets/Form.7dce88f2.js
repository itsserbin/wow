import{p as _,q as b,g as f,i as a,x as o,u as v,v as x,B as l,o as V}from"./vendor.693a237b.js";import"./__commonjsHelpers__.488ed5c2.js";const g={class:"flex flex-col"},h={class:"block mb-5"},k={class:"block mb-5"},B={class:"block mb-5"},U={__name:"Form",props:["item"],setup(e){const m=x("$publishedStatuses"),i=_([]);b(()=>{axios.get(route("api.products.list")).then(({data:t})=>i.value=t.result).catch(t=>console.log(t))});function u(){}return(t,n)=>{const c=l("label-component"),p=l("select-component"),d=l("textarea-component"),r=l("upload-input-component");return V(),f("form",g,[a("div",h,[o(c,{value:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457"}),o(p,{modelValue:e.item.published,"onUpdate:modelValue":n[0]||(n[0]=s=>e.item.published=s),options:v(m)},null,8,["modelValue","options"])]),a("div",k,[o(c,{value:"\u0422\u0435\u043A\u0441\u0442 \u0432\u0456\u0434\u0433\u0443\u043A\u0430"}),o(d,{modelValue:e.item.comment,"onUpdate:modelValue":n[1]||(n[1]=s=>e.item.comment=s),rows:"4"},null,8,["modelValue"])]),a("div",B,[o(r,{multiple:!1,id:"uploadCategoryPreview",label:"\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",onUpload:u,images:e.item.image},null,8,["images"])])])}}};export{U as default};
