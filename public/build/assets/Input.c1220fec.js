import{r,o as u,q as n,A as s}from"./index.a7093408.js";const d=["value","placeholder"],c={__name:"Input",props:["modelValue","placeholder"],emits:["update:modelValue"],setup(t){const e=r(null);return u(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),(a,o)=>(s(),n("input",{type:"text",value:t.modelValue,onInput:o[0]||(o[0]=l=>a.$emit("update:modelValue",l.target.value)),ref_key:"input",ref:e,placeholder:t.placeholder,class:"text-base text-text border-[0.5px] border-main rounded-[10px] box-border mt-[0.75rem] p-[1rem] w-[100%] focus:border-accent focus:ring-accent"},null,40,d))}};export{c as default};
