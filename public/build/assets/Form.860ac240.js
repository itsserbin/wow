import{A as g,G as p,L as f,M as s,K as o,P as V,ab as y,X as d,R as k,x}from"./moment.e1708d83.js";const U={class:"mb-5"},h={class:"grid grid-cols-2 gap-4 mb-5"},w={class:"block"},N={class:"block"},P={class:"grid grid-cols-2 gap-4 mb-5"},B={class:"block"},M={class:"block"},O={class:"mb-5"},$={class:"grid grid-cols-2 gap-4 mb-5"},C={class:"block"},E={class:"block"},L={class:"grid grid-cols-2 gap-4 mb-5"},Y={class:"block"},j={class:"block"},A={class:"grid grid-cols-2 gap-4 mb-5"},F={class:"block"},G={class:"block"},S={__name:"Form",props:["item"],emits:["submit"],setup(t,{emit:K}){const a=t,u=x("$selectYesOrNo"),c=g({publishedOptions:[{key:0,value:"Not published"},{key:1,value:"Published"}],categories:[],categoryPreview:[]});p(()=>{b(),a.item.preview&&c.value.categoryPreview.push({alt:a.item.title.ua?a.item.title.ua:a.item.title.ru?a.item.title.ru:"-",src:a.item.preview})});function b(){axios.get(route("api.categories.list")).then(({data:m})=>{m.result.forEach(e=>{c.value.categories.push({key:e.id,value:e.title.ua?e.title.ua:e.title.ru})})}).catch(m=>console.log(m))}return(m,e)=>{const i=d("label-component"),n=d("input-component"),r=d("select-component"),v=d("textarea-component");return k(),f("form",{onSubmit:e[10]||(e[10]=y(l=>m.$emit("submit",t.item),["prevent"])),class:"flex flex-col"},[s("div",U,[s("div",h,[s("div",w,[o(i,{value:"\u041D\u0430\u0437\u0432\u0430"}),o(n,{modelValue:t.item.name,"onUpdate:modelValue":e[0]||(e[0]=l=>t.item.name=l),type:"text"},null,8,["modelValue"])]),s("div",N,[o(i,{value:"\u0427\u0430\u0441 \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044F"}),o(n,{modelValue:t.item.time_of_dispatch,"onUpdate:modelValue":e[1]||(e[1]=l=>t.item.time_of_dispatch=l),type:"text"},null,8,["modelValue"])])]),s("div",P,[s("div",B,[o(i,{value:"\u041A\u0430\u0442\u0430\u043B\u043E\u0433"}),o(n,{modelValue:t.item.catalog,"onUpdate:modelValue":e[2]||(e[2]=l=>t.item.catalog=l),type:"text"},null,8,["modelValue"])]),s("div",M,[o(i,{value:"\u041D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C"}),o(n,{modelValue:t.item.availability,"onUpdate:modelValue":e[3]||(e[3]=l=>t.item.availability=l),type:"text"},null,8,["modelValue"])])])]),s("div",O,[s("div",$,[s("div",C,[o(i,{value:"\u041F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430"}),o(r,{modelValue:t.item.prepayment,"onUpdate:modelValue":e[4]||(e[4]=l=>t.item.prepayment=l),options:V(u)},null,8,["modelValue","options"])]),s("div",E,[o(i,{value:"\u0421\u0443\u043C\u0430 \u043F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0438"}),o(n,{modelValue:t.item.prepayment_sum,"onUpdate:modelValue":e[5]||(e[5]=l=>t.item.prepayment_sum=l),type:"number"},null,8,["modelValue"])])]),s("div",L,[s("div",Y,[o(i,{value:"\u041E\u043F\u043B\u0430\u0442\u0430 \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F"}),o(r,{modelValue:t.item.refunds,"onUpdate:modelValue":e[6]||(e[6]=l=>t.item.refunds=l),options:V(u)},null,8,["modelValue","options"])]),s("div",j,[o(i,{value:"\u0421\u0443\u043C\u0430 \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F"}),o(n,{modelValue:t.item.refunds_sum,"onUpdate:modelValue":e[7]||(e[7]=l=>t.item.refunds_sum=l),type:"number"},null,8,["modelValue"])])])]),s("div",A,[s("div",F,[o(i,{value:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"}),o(v,{modelValue:t.item.contacts,"onUpdate:modelValue":e[8]||(e[8]=l=>t.item.contacts=l),rows:"4"},null,8,["modelValue"])]),s("div",G,[o(i,{value:"\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440"}),o(v,{modelValue:t.item.comment,"onUpdate:modelValue":e[9]||(e[9]=l=>t.item.comment=l),rows:"4"},null,8,["modelValue"])])])],32)}}};export{S as default};