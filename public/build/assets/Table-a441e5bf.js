import{r as y,g as c,z as r,v as a,F as g,y as f,D as l,p as u,i as m,l as o,k as s,j as v}from"./app-da11968c.js";const C=["onClick"],$=m("hr",{class:"my-1"},null,-1),D=["onClick"],q={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","onEdit"],setup(i){const d=f("$defaultLang"),n=y(d);function p(t){n.value=t}const w=[{label:"ID",key:"id"},{label:"Питання",key:"question"},{label:"Відповідь",key:"answer"},{label:"Статус",key:"published"},{label:"Оновлено<hr class='my-1'>Створено",key:"timestamps"},{label:"#",key:"actions"}];return(t,L)=>{const _=l("lang-tabs"),h=l("xcircle-component"),b=l("table-component");return u(),c(g,null,[r(_,{onClickLang:p}),r(b,{headings:w,isSlotMode:!0,rows:i.data},{id:a(({data:e})=>[m("a",{href:"javascript:",onClick:k=>t.$emit("onEdit",e.row.id,e.i)},o(e.row.id),9,C)]),question:a(({data:e})=>[s(o(n.value==="ua"?e.row.question.ua:n.value==="ru"?e.row.question.ru:null),1)]),answer:a(({data:e})=>[s(o(n.value==="ua"?e.row.answer.ua:n.value==="ru"?e.row.answer.ru:null),1)]),published:a(({data:e})=>[s(o(t.$filters.publishedStatus(e.row.published)),1)]),timestamps:a(({data:e})=>[s(o(t.$filters.dateFormat(e.row.updated_at))+" ",1),$,s(" "+o(t.$filters.dateFormat(e.row.created_at)),1)]),actions:a(({data:e})=>[i.canDestroy?(u(),c("a",{key:0,href:"javascript:",onClick:k=>t.$emit("onDestroy",e.row.id)},[r(h)],8,D)):v("",!0)]),_:1},8,["rows"])],64)}}};export{q as default};
