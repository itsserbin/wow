import{i as n,j as o,y as t,w as s,z as u,u as c,K as f,F as p,o as _,l}from"./vendor.2c8aab53.js";import m from"./Label.9d41849b.js";import a from"./Input.8578e878.js";import x from"./Button.62ea125d.js";import{h as b}from"./maska.esm.2315e0de.js";import"./__commonjsHelpers__.4516dc8a.js";const V=o("div",{class:"font-bold text-black text-center text-2xl font-heading mb-[15px]"}," \u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u0441\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F ",-1),h={class:"block"},v={class:"block"},g={class:"text-center"},N={__name:"Form",props:["item"],emits:["submitForm"],setup(i){return(d,e)=>(_(),n(p,null,[V,o("form",{class:"grid grid-cols-1 gap-4",onSubmit:e[2]||(e[2]=f(r=>d.$emit("submitForm"),["prevent"]))},[o("div",h,[t(m,{required:!0},{default:s(()=>[l("\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443")]),_:1}),u(t(a,{type:"tel",modelValue:i.item.phone,"onUpdate:modelValue":e[0]||(e[0]=r=>i.item.phone=r),placeholder:"+38 (0"},null,8,["modelValue"]),[[c(b),"+38 (0##) ###-##-##"]])]),o("div",v,[t(m,{required:!0},{default:s(()=>[l("ID \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F")]),_:1}),t(a,{type:"text",modelValue:i.item.order_id,"onUpdate:modelValue":e[1]||(e[1]=r=>i.item.order_id=r)},null,8,["modelValue"])]),o("div",g,[t(x,{type:"submit"},{default:s(()=>[l("\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438")]),_:1})])],32)],64))}};export{N as default};
