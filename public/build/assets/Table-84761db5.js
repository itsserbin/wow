import{_ as p}from"./LangTabs-75b411e7.js";import{_ as h}from"./Table-d4015883.js";import{_ as k}from"./XCircle-0fb660d3.js";import{i as y,r as b,p as c,q as d,l as i,x as a,F as w,v as n,B as s,A as o,C as $}from"./app-6d1ec759.js";const g=["onClick"],v=["innerHTML"],C=n("hr",{class:"my-1"},null,-1),L=["onClick"],V={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","onEdit"],setup(r){const m=y("$defaultLang"),l=b(m),u=[{label:"ID",key:"id"},{label:"Фото",key:"icon"},{label:"Текст",key:"text"},{label:"Статус",key:"published"},{label:"Оновлено<hr class='my-1'>Створено",key:"timestamps"},{label:"#",key:"actions"}];function _(t){l.value=t}return(t,D)=>(c(),d(w,null,[i(p,{onClickLang:_}),i(h,{headings:u,isSlotMode:!0,rows:r.data},{id:a(({data:e})=>[n("a",{href:"javascript:",onClick:f=>t.$emit("onEdit",e.row.id,e.i)},s(e.row.id),9,g)]),icon:a(({data:e})=>[n("div",{innerHTML:e.row.icon},null,8,v)]),text:a(({data:e})=>[o(s(e.row.text[l.value]),1)]),published:a(({data:e})=>[o(s(t.$filters.publishedStatus(e.row.published)),1)]),timestamps:a(({data:e})=>[o(s(t.$filters.dateFormat(e.row.updated_at))+" ",1),C,o(" "+s(t.$filters.dateFormat(e.row.created_at)),1)]),actions:a(({data:e})=>[r.canDestroy?(c(),d("a",{key:0,href:"javascript:",onClick:f=>t.$emit("onDestroy",e.row.id)},[i(k)],8,L)):$("",!0)]),_:1},8,["rows"])],64))}};export{V as default};
