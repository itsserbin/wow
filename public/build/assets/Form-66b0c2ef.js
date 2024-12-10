import{N as b,k as f,o as g,l as y,m as k,p as i,n as o,x as c,J as p}from"./index-a01126e2.js";import{_ as s}from"./Label-20131f4c.js";import{_ as m}from"./Input-39294dfa.js";import{_ as r}from"./Textarea-cb91500a.js";import{_ as v}from"./Select-c098c0c0.js";const U={class:"mb-5"},x={class:"grid grid-cols-2 gap-4 mb-5"},h={class:"block"},w={class:"block"},$={class:"grid grid-cols-2 gap-4 mb-5"},N={class:"block"},B={class:"block"},O={class:"mb-5"},P={class:"grid grid-cols-2 gap-4 mb-5"},E={class:"block"},M={class:"block"},Y={class:"grid grid-cols-2 gap-4 mb-5"},j={class:"block"},C={class:"block"},F={class:"grid grid-cols-2 gap-4 mb-5"},J={class:"block"},L={class:"block"},H={__name:"Form",props:["item"],emits:["submit"],setup(t,{emit:S}){const a=t,u=b("$selectYesOrNo"),n=f({publishedOptions:[{key:0,value:"Not published"},{key:1,value:"Published"}],categories:[],categoryPreview:[]});g(()=>{V(),a.item.preview&&n.value.categoryPreview.push({alt:a.item.title.ua?a.item.title.ua:a.item.title.ru?a.item.title.ru:"-",src:a.item.preview})});function V(){axios.get(route("api.categories.list")).then(({data:d})=>{d.result.forEach(e=>{n.value.categories.push({key:e.id,value:e.title.ua?e.title.ua:e.title.ru})})}).catch(d=>console.log(d))}return(d,e)=>(y(),k("form",{onSubmit:e[10]||(e[10]=p(l=>d.$emit("submit",t.item),["prevent"])),class:"flex flex-col"},[i("div",U,[i("div",x,[i("div",h,[o(s,{value:"Назва"}),o(m,{modelValue:t.item.name,"onUpdate:modelValue":e[0]||(e[0]=l=>t.item.name=l),type:"text"},null,8,["modelValue"])]),i("div",w,[o(s,{value:"Час відправлення"}),o(m,{modelValue:t.item.time_of_dispatch,"onUpdate:modelValue":e[1]||(e[1]=l=>t.item.time_of_dispatch=l),type:"text"},null,8,["modelValue"])])]),i("div",$,[i("div",N,[o(s,{value:"Каталог"}),o(m,{modelValue:t.item.catalog,"onUpdate:modelValue":e[2]||(e[2]=l=>t.item.catalog=l),type:"text"},null,8,["modelValue"])]),i("div",B,[o(s,{value:"Наявність"}),o(m,{modelValue:t.item.availability,"onUpdate:modelValue":e[3]||(e[3]=l=>t.item.availability=l),type:"text"},null,8,["modelValue"])])])]),i("div",O,[i("div",P,[i("div",E,[o(s,{value:"Передоплата"}),o(v,{modelValue:t.item.prepayment,"onUpdate:modelValue":e[4]||(e[4]=l=>t.item.prepayment=l),options:c(u)},null,8,["modelValue","options"])]),i("div",M,[o(s,{value:"Сума передоплати"}),o(m,{modelValue:t.item.prepayment_sum,"onUpdate:modelValue":e[5]||(e[5]=l=>t.item.prepayment_sum=l),type:"number"},null,8,["modelValue"])])]),i("div",Y,[i("div",j,[o(s,{value:"Оплата повернення"}),o(v,{modelValue:t.item.refunds,"onUpdate:modelValue":e[6]||(e[6]=l=>t.item.refunds=l),options:c(u)},null,8,["modelValue","options"])]),i("div",C,[o(s,{value:"Сума повернення"}),o(m,{modelValue:t.item.refunds_sum,"onUpdate:modelValue":e[7]||(e[7]=l=>t.item.refunds_sum=l),type:"number"},null,8,["modelValue"])])])]),i("div",F,[i("div",J,[o(s,{value:"Контакти"}),o(r,{modelValue:t.item.contacts,"onUpdate:modelValue":e[8]||(e[8]=l=>t.item.contacts=l),rows:"4"},null,8,["modelValue"])]),i("div",L,[o(s,{value:"Коментар"}),o(r,{modelValue:t.item.comment,"onUpdate:modelValue":e[9]||(e[9]=l=>t.item.comment=l),rows:"4"},null,8,["modelValue"])])])],32))}};export{H as default};
