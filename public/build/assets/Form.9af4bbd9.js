import{g as c,i as t,x as l,B as a,o as d}from"./vendor.693a237b.js";import"./__commonjsHelpers__.488ed5c2.js";const i={class:"flex flex-col"},r={class:"grid grid-cols-1 mb-5"},u={class:"block mr-2"},p={class:"grid grid-cols-1"},_={class:"block mr-2"},f={__name:"Form",props:["item"],setup(e){return(x,o)=>{const s=a("label-component"),m=a("input-component");return d(),c("form",i,[t("div",r,[t("div",u,[l(s,{value:"\u041D\u0430\u0437\u0432\u0430"}),l(m,{modelValue:e.item.name,"onUpdate:modelValue":o[0]||(o[0]=n=>e.item.name=n),type:"text"},null,8,["modelValue"])])]),t("div",p,[t("div",_,[l(s,{value:"HEX"}),l(m,{modelValue:e.item.hex,"onUpdate:modelValue":o[1]||(o[1]=n=>e.item.hex=n),type:"text"},null,8,["modelValue"])])])])}}};export{f as default};
