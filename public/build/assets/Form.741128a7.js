import{q as c,s as o,H as t,D as a,J as u,U as _,F as f,ae as p,A as x,x as r}from"./index.e4375aa7.js";import l from"./Label.a60c68ee.js";import d from"./Input.63447f90.js";import v from"./Button.fe7a9c84.js";const b=o("div",{class:"font-bold text-black text-center text-2xl font-heading mb-[15px]"}," \u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u0441\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F ",-1),h={class:"block"},V=r("\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443"),k={class:"block"},g=r("ID \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"),F={class:"text-center"},$=r("\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438"),B={__name:"Form",props:["item"],emits:["submitForm"],setup(s){return(m,e)=>{const n=p("maska");return x(),c(f,null,[b,o("form",{class:"grid grid-cols-1 gap-4",onSubmit:e[2]||(e[2]=_(i=>m.$emit("submitForm"),["prevent"]))},[o("div",h,[t(l,{required:!0},{default:a(()=>[V]),_:1}),u(t(d,{type:"tel",modelValue:s.item.phone,"onUpdate:modelValue":e[0]||(e[0]=i=>s.item.phone=i),placeholder:"+38 (0"},null,8,["modelValue"]),[[n,"+38 (0##) ###-##-##"]])]),o("div",k,[t(l,{required:!0},{default:a(()=>[g]),_:1}),t(d,{type:"text",modelValue:s.item.order_id,"onUpdate:modelValue":e[1]||(e[1]=i=>s.item.order_id=i)},null,8,["modelValue"])]),o("div",F,[t(v,{type:"submit"},{default:a(()=>[$]),_:1})])],32)],64)}}};export{B as default};