import{s as h,v as o,D as i,p as r,i as l,l as s,k as a,g as k,z as _,j as u}from"./app-da11968c.js";const y=["onClick"],b=l("hr",{class:"my-1"},null,-1),w=["onClick"],D={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","onEdit"],setup(n){const c=[{label:"ID",key:"id"},{label:"Назва",key:"title"},{label:"Статус публікації",key:"published"},{label:"Оновлено<hr class='my-1'>Створено",key:"timestamps"},{label:"#",key:"actions"}];return(t,f)=>{const d=i("xcircle-component"),m=i("table-component");return r(),h(m,{headings:c,isSlotMode:!0,rows:n.data},{id:o(({data:e})=>[l("a",{href:"javascript:",onClick:p=>t.$emit("onEdit",e.row.id,e.i)},s(e.row.id),9,y)]),published:o(({data:e})=>[a(s(t.$filters.publishedStatus(e.row.published)),1)]),timestamps:o(({data:e})=>[a(s(t.$filters.dateFormat(e.row.updated_at))+" ",1),b,a(" "+s(t.$filters.dateFormat(e.row.created_at)),1)]),actions:o(({data:e})=>[n.canDestroy?(r(),k("a",{key:0,href:"javascript:",onClick:p=>t.$emit("onDestroy",e.row.id)},[_(d)],8,w)):u("",!0)]),_:1},8,["rows"])}}};export{D as default};
