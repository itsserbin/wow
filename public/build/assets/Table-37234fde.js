import{_ as d}from"./Table-fe1ca8dd.js";import{_}from"./XCircle-3c75bba8.js";import{l as a,s as y,y as s,p as i,v as o,w as l,m as n,q as k,F as p,n as u,t as h}from"./index-a01126e2.js";const f=["onClick"],w=i("hr",{class:"my-1"},null,-1),b=i("br",null,null,-1),$=["onClick"],B={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","onEdit"],setup(c){const m=[{label:"ID",key:"id"},{label:"Імʼя",key:"name"},{label:"Email",key:"email"},{label:"Роль",key:"role"},{label:"Оновлено<hr class='my-1'>Створено",key:"timestamps"},{label:"#",key:"actions"}];return(t,C)=>(a(),y(d,{headings:m,isSlotMode:!0,rows:c.data},{id:s(({data:e})=>[i("a",{href:"javascript:",onClick:r=>t.$emit("onEdit",e.row.id,e.i)},o(e.row.id),9,f)]),timestamps:s(({data:e})=>[l(o(t.$filters.dateFormat(e.row.updated_at))+" ",1),w,l(" "+o(t.$filters.dateFormat(e.row.created_at)),1)]),role:s(({data:e})=>[(a(!0),n(p,null,k(e.row.roles,r=>(a(),n("span",null,[l(o(r.name),1),b]))),256))]),actions:s(({data:e})=>[c.canDestroy?(a(),n("a",{key:0,href:"javascript:",onClick:r=>t.$emit("onDestroy",e.row.id)},[u(_)],8,$)):h("",!0)]),_:1},8,["rows"]))}};export{B as default};
