import{z as d,D as r,A as p,K as g,L as s,J as o,V as m,Q as V}from"./_plugin-vue_export-helper.a5aa4da2.js";const v={class:"grid grid-cols-1 gap-4"},f={class:"block"},_={class:"block"},x={__name:"Form",props:["item"],setup(t){const n=t,c=d([]);return r(()=>{axios.get(route("api.statistics.costs.categories.list")).then(({data:a})=>{a.result.forEach(e=>{c.value.push({key:e.id,value:e.title})})})}),p(()=>n.item.quantity*n.item.sum),(a,e)=>{const i=m("label-component"),u=m("input-component");return V(),g("form",null,[s("div",v,[s("div",f,[o(i,{value:"\u041D\u0430\u0437\u0432\u0430"}),o(u,{modelValue:t.item.title,"onUpdate:modelValue":e[0]||(e[0]=l=>t.item.title=l),type:"text"},null,8,["modelValue"])]),s("div",_,[o(i,{value:"Slug"}),o(u,{modelValue:t.item.slug,"onUpdate:modelValue":e[1]||(e[1]=l=>t.item.slug=l),type:"text"},null,8,["modelValue"])])])])}}};export{x as default};