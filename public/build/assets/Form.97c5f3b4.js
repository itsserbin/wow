import{K as m,L as n,J as e,R as c,a6 as p,V as i,Q as u,a1 as b}from"./_plugin-vue_export-helper.4dd23699.js";const _={class:"grid grid-cols-1 gap-4 mb-5"},V={class:"block"},f={class:"block"},v={class:"block"},k=b("\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"),x={__name:"Form",props:["options"],emits:["submitForm"],setup(t){return(r,o)=>{const l=i("label-component"),a=i("textarea-component"),d=i("button-component");return u(),m("form",{onSubmit:o[3]||(o[3]=p(s=>r.$emit("submitForm"),["prevent"]))},[n("div",_,[n("div",V,[e(l,{value:"Head scripts"}),e(a,{modelValue:t.options.head_scripts,"onUpdate:modelValue":o[0]||(o[0]=s=>t.options.head_scripts=s),rows:"6"},null,8,["modelValue"])]),n("div",f,[e(l,{value:"Before body scripts"}),e(a,{modelValue:t.options.after_body_scripts,"onUpdate:modelValue":o[1]||(o[1]=s=>t.options.after_body_scripts=s),rows:"6"},null,8,["modelValue"])]),n("div",v,[e(l,{value:"Footer scripts"}),e(a,{modelValue:t.options.footer_scripts,"onUpdate:modelValue":o[2]||(o[2]=s=>t.options.footer_scripts=s),rows:"6"},null,8,["modelValue"])])]),e(d,{type:"submit"},{default:c(()=>[k]),_:1})],32)}}};export{x as default};
