import{r,t as n,s as o,d as f}from"./vue-datepicker-609e4dad.js";import{j as D,r as i,p as w,D as v,t as d,k as b}from"./app-6d1ec759.js";function m(a){r(1,arguments);var e=n(a),t=e.getMonth();return e.setFullYear(e.getFullYear(),t+1,0),e.setHours(23,59,59,999),e}function p(a){r(1,arguments);var e=n(a);return e.setDate(1),e.setHours(0,0,0,0),e}function _(a){r(1,arguments);var e=n(a),t=e.getFullYear();return e.setFullYear(t+1,0,0),e.setHours(23,59,59,999),e}function Y(a){r(1,arguments);var e=n(a),t=new Date(0);return t.setFullYear(e.getFullYear(),0,1),t.setHours(0,0,0,0),t}const h={__name:"Datepicker",props:["modelValue"],emits:["update:modelValue"],setup(a,{emit:e}){const t=a,l=D({get(){return t.modelValue},set(s){e("update:modelValue",s)}}),c=i([{label:"Сьогодні",range:[new Date,new Date]},{label:"Вчора",range:[new Date-864e5,new Date-864e5]},{label:"Поточний місяць",range:[p(new Date),m(new Date)]},{label:"Попередній місяць",range:[p(o(new Date,1)),m(o(new Date,1))]},{label:"Поточний рік",range:[Y(new Date),_(new Date)]}]);return(s,u)=>(w(),v(d(f),{modelValue:d(l),"onUpdate:modelValue":u[0]||(u[0]=g=>b(l)?l.value=g:null),class:"w-100",locale:"ru",placeholder:"Оберіть дату",autoApply:"",monthChangeOnScroll:!1,enableTimePicker:!1,range:"",presetRanges:c.value},null,8,["modelValue","presetRanges"]))}},k=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"}));export{k as D,h as _,m as e,p as s};
