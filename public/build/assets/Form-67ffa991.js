import{_ as g}from"./Card-d700085f.js";import{_ as f}from"./Button-dd1aed97.js";import{_}from"./Label-20131f4c.js";import{_ as k}from"./Input-39294dfa.js";import{z as p,k as v,l as o,m as r,p as n,F as c,q as y,n as l,x as b,t as V,y as x,w as S,v as $}from"./index-a01126e2.js";const z={class:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-5"},C={key:0},N={class:"block mt-5"},D={__name:"Form",props:["image"],setup(a){const m=p(()=>e=>t.value==="55"?"/storage/products/55/"+e:t.value==="350"?"/storage/products/350/"+e:t.value==="500"?"/storage/products/500/"+e:"/storage/products/"+e),u=[{label:"55",key:"55"},{label:"350",key:"350"},{label:"500",key:"500"},{label:"Oригінал",key:null}],t=v("350");function d(e){t.value=e}return(e,i)=>(o(),r(c,null,[n("div",z,[(o(),r(c,null,y(u,s=>l(f,{type:"button",onClick:h=>d(s.key),active:s.key===t.value},{default:x(()=>[S($(s.label),1)]),_:2},1032,["onClick","active"])),64))]),a.image?(o(),r("div",C,[l(g,{image:b(m)(a.image.src),"image-alt":a.image.alt},null,8,["image","image-alt"]),n("div",N,[l(_,{value:"Alt"}),l(k,{modelValue:a.image.alt,"onUpdate:modelValue":i[0]||(i[0]=s=>a.image.alt=s),type:"text"},null,8,["modelValue"])])])):V("",!0)],64))}};export{D as default};