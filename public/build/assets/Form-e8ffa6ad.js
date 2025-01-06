import{i as c}from"./isDark-c828c264.js";import{_ as n}from"./Label-20131f4c.js";import{d as f}from"./vue-datepicker-3bdc29fb.js";import{s as y,a as v}from"./dropdown.esm-067e1b29.js";import{l as u,m,A as g,p as d,n as s,x as o}from"./index-a01126e2.js";import"./index-2cbe9ca3.js";import"./app-741b04df.js";import"./moment-fbc5633a.js";var h={name:"Textarea",emits:["update:modelValue"],props:{modelValue:null,autoResize:Boolean},mounted(){this.$el.offsetParent&&this.autoResize&&this.resize()},updated(){this.$el.offsetParent&&this.autoResize&&this.resize()},methods:{resize(){const e=window.getComputedStyle(this.$el);this.$el.style.height="auto",this.$el.style.height=`calc(${e.borderTopWidth} + ${e.borderBottomWidth} + ${this.$el.scrollHeight}px)`,parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden"},onInput(e){this.autoResize&&this.resize(),this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};const V=["value"];function $(e,i,l,t,a,r){return u(),m("textarea",{class:g(["p-inputtextarea p-inputtext p-component",{"p-filled":r.filled,"p-inputtextarea-resizable ":l.autoResize}]),value:l.modelValue,onInput:i[0]||(i[0]=(...p)=>r.onInput&&r.onInput(...p))},null,42,V)}function x(e,i){i===void 0&&(i={});var l=i.insertAt;if(!(!e||typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",l==="top"&&t.firstChild?t.insertBefore(a,t.firstChild):t.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var z=`
.p-inputtextarea-resizable {
    overflow: hidden;
    resize: none;
}
.p-fluid .p-inputtextarea {
    width: 100%;
}
`;x(z);h.render=$;const b={class:"grid gap-y-4"},w={class:"block"},k={class:"block"},C={class:"block"},B={class:"block"},F={__name:"Form",props:["item","categories"],setup(e){return(i,l)=>(u(),m("div",b,[d("div",w,[s(n,{value:"Сума, грн"}),s(o(y),{modelValue:e.item.sum,"onUpdate:modelValue":l[0]||(l[0]=t=>e.item.sum=t),type:"number",placeholder:"Введіть суму",class:"w-full"},null,8,["modelValue"])]),d("div",k,[s(n,{value:"Категорія"}),s(o(v),{modelValue:e.item.category_id,"onUpdate:modelValue":l[1]||(l[1]=t=>e.item.category_id=t),options:e.categories,showClear:"",optionLabel:"name",placeholder:"Оберіть категорію",class:"w-full"},null,8,["modelValue","options"])]),d("div",C,[s(n,{value:"Дата"}),s(o(f),{class:"w-full",modelValue:e.item.date,"onUpdate:modelValue":l[2]||(l[2]=t=>e.item.date=t),placeholder:"Оберіть дату",autoApply:"",monthChangeOnScroll:!1,enableTimePicker:!0,"enable-seconds":"",dark:o(c),locale:"uk"},null,8,["modelValue","dark"])]),d("div",B,[s(n,{value:"Коментар"}),s(o(h),{modelValue:e.item.comment,"onUpdate:modelValue":l[3]||(l[3]=t=>e.item.comment=t),rows:"4",class:"w-full"},null,8,["modelValue"])])]))}};export{F as default};