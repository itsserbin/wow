import{z as r,D as p,K as b,L as a,J as l,F as V,W as m,Q as v}from"./_plugin-vue_export-helper.19045d4a.js";const f={class:"block mb-5"},k={class:"block mb-5"},$={class:"block mb-5"},x={class:"block mb-5"},U={__name:"ItemsForm",props:["item"],setup(o){const c=r([]);function d({h1:t,id:e,vendor_code:n}){return t&&e&&n?`${t.ua?t.ua:t.ru} - ${n}/${e}`:t&&e?`${t.ua?t.ua:t.ru} -${e}`:`${e}`}return p(()=>{axios.get(route("api.products.list")).then(({data:t})=>c.value=t.result).catch(t=>console.log(t))}),(t,e)=>{const n=m("label-component"),i=m("multiselect"),s=m("input-component");return v(),b(V,null,[a("div",f,[l(n,{value:"\u0422\u043E\u0432\u0430\u0440"}),l(i,{options:c.value,modelValue:o.item.product_id,"onUpdate:modelValue":e[0]||(e[0]=u=>o.item.product_id=u),"custom-label":d,class:"mb-5","track-by":"id","close-on-select":!0,searchable:!0},null,8,["options","modelValue"])]),a("div",k,[l(n,{value:"\u0420\u043E\u0437\u043C\u0456\u0440"}),l(s,{modelValue:o.item.size,"onUpdate:modelValue":e[1]||(e[1]=u=>o.item.size=u),type:"text"},null,8,["modelValue"])]),a("div",$,[l(n,{value:"\u041A\u043E\u043B\u0456\u0440"}),l(s,{modelValue:o.item.color,"onUpdate:modelValue":e[2]||(e[2]=u=>o.item.color=u),type:"text"},null,8,["modelValue"])]),a("div",x,[l(n,{value:"\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C"}),l(s,{modelValue:o.item.count,"onUpdate:modelValue":e[3]||(e[3]=u=>o.item.count=u),type:"number"},null,8,["modelValue"])])],64)}}};export{U as default};
