import{m as i,p as a,E as m,B as l,F as n,C as u,q as f,G as b,u as v,W as y,y as o,s,A as c}from"./index-bc3c132c.js";import d from"./Label-20e9ebb4.js";import V from"./Input-5cbd62f6.js";import{_ as k}from"./InputError-1757c692.js";import $ from"./Button-23fb6d1c.js";import x from"./Textarea-60824744.js";import{U as h}from"./maska-224de96c.js";const B={class:"block"},F={class:"block"},U={class:"block"},q={class:"block"},w={class:"text-center"},I={__name:"Form",props:["item","errors"],emits:["submitForm"],setup(e){return(g,r)=>(o(),i("form",{onSubmit:r[4]||(r[4]=y(t=>g.$emit("submitForm"),["prevent"])),class:"grid grid-cols-1 gap-4"},[a("div",B,[m(d,{required:!0},{default:l(()=>[s("Імʼя")]),_:1}),m(V,{type:"text",modelValue:e.item.name,"onUpdate:modelValue":r[0]||(r[0]=t=>e.item.name=t),placeholder:"Ваше імʼя"},null,8,["modelValue"]),e.errors.name?(o(!0),i(n,{key:0},u(e.errors.name,t=>(o(),c(k,{message:t},null,8,["message"]))),256)):f("",!0)]),a("div",F,[m(d,{required:!0},{default:l(()=>[s("Номер телефону")]),_:1}),b(m(V,{type:"tel",modelValue:e.item.phone,"onUpdate:modelValue":r[1]||(r[1]=t=>e.item.phone=t),placeholder:"+38 (0","data-maska":"+38 (0##) ###-##-##"},null,8,["modelValue"]),[[v(h)]]),e.errors.phone?(o(!0),i(n,{key:0},u(e.errors.phone,t=>(o(),c(k,{message:t},null,8,["message"]))),256)):f("",!0)]),a("div",U,[m(d,{required:!0},{default:l(()=>[s("ID замовлення")]),_:1}),m(V,{type:"text",modelValue:e.item.order_id,"onUpdate:modelValue":r[2]||(r[2]=t=>e.item.order_id=t)},null,8,["modelValue"]),e.errors.order_id?(o(!0),i(n,{key:0},u(e.errors.order_id,t=>(o(),c(k,{message:t},null,8,["message"]))),256)):f("",!0)]),a("div",q,[m(d,null,{default:l(()=>[s("Коментар")]),_:1}),m(x,{rows:"4",modelValue:e.item.comment,"onUpdate:modelValue":r[3]||(r[3]=t=>e.item.comment=t)},null,8,["modelValue"])]),a("div",w,[m($,{type:"submit"},{default:l(()=>[s("Відправити")]),_:1})])],32))}};export{I as default};
