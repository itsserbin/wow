import{d as b}from"./app.883808c8.js";import{B as f,A as v,L as l,M as r,F as m,U as y,K as n,P as V,_ as S,X as s,R as c,S as x,Y as C,O as B}from"./moment.fb372146.js";const N={class:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-5"},h={key:0},z={class:"block mt-5"},O={__name:"Form",props:["image"],setup(t){const u=f(()=>e=>a.value==="55"?route("images.products.55",e):a.value==="350"?route("images.products.350",e):a.value==="500"?route("images.products.500",e):route("images.products",e)),d=[{label:"55",key:"55"},{label:"350",key:"350"},{label:"500",key:"500"},{label:"O\u0440\u0438\u0433\u0456\u043D\u0430\u043B",key:null}],a=v("350");function g(e){a.value=e}return(e,i)=>{const p=s("button-component"),_=s("label-component"),k=s("input-component");return c(),l(m,null,[r("div",N,[(c(),l(m,null,y(d,o=>n(p,{type:"button",onClick:F=>g(o.key),active:o.key===a.value},{default:x(()=>[C(B(o.label),1)]),_:2},1032,["onClick","active"])),64))]),t.image?(c(),l("div",h,[n(b,{image:V(u)(t.image.src),"image-alt":t.image.alt},null,8,["image","image-alt"]),r("div",z,[n(_,{value:"Alt"}),n(k,{modelValue:t.image.alt,"onUpdate:modelValue":i[0]||(i[0]=o=>t.image.alt=o),type:"text"},null,8,["modelValue"])])])):S("",!0)],64)}}};export{O as default};
