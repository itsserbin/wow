import{A as y,B as o,K as l,y as r,p as i,v as a,s,m as h,E as k,q as b}from"./index-bc3c132c.js";const _=["onClick"],u=i("hr",{class:"my-1"},null,-1),w=["onClick"],$={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","onEdit"],setup(n){const c=[{label:"ID",key:"id"},{label:"Імʼя",key:"name"},{label:"Телефон",key:"phone"},{label:"Коментар",key:"comment"},{label:"Товар",key:"product_id"},{label:"Статус публікації",key:"published"},{label:"Оновлено<hr class='my-1'>Створено",key:"timestamps"},{label:"#",key:"actions"}];return(t,f)=>{const m=l("xcircle-component"),d=l("table-component");return r(),y(d,{headings:c,isSlotMode:!0,rows:n.data},{id:o(({data:e})=>[i("a",{href:"javascript:",onClick:p=>t.$emit("onEdit",e.row.id,e.i)},a(e.row.id),9,_)]),published:o(({data:e})=>[s(a(t.$filters.publishedStatus(e.row.published)),1)]),timestamps:o(({data:e})=>[s(a(t.$filters.dateFormat(e.row.updated_at))+" ",1),u,s(" "+a(t.$filters.dateFormat(e.row.created_at)),1)]),actions:o(({data:e})=>[n.canDestroy?(r(),h("a",{key:0,href:"javascript:",onClick:p=>t.$emit("onDestroy",e.row.id)},[k(m)],8,w)):b("",!0)]),_:1},8,["rows"])}}};export{$ as default};
