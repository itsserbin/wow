import{r as h,g as c,z as s,v as a,F as y,y as v,D as i,p as m,i as r,l,k as n,j as f}from"./app-da11968c.js";const C=["onClick"],$=["src","alt"],D=r("hr",{class:"my-1"},null,-1),L=["onClick"],N={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","onEdit"],setup(u){const b=v("$defaultLang"),t=h(b),p=[{label:"ID",key:"id"},{label:"Фото",key:"image"},{label:"Назва",key:"title"},{label:"Статус",key:"published"},{label:"Посилання",key:"link"},{label:"Оновлено<hr class='my-1'>Створено",key:"timestamps"},{label:"#",key:"actions"}];function d(o){t.value=o}return(o,j)=>{const g=i("lang-tabs"),_=i("xcircle-component"),k=i("table-component");return m(),c(y,null,[s(g,{onClickLang:d}),s(k,{headings:p,isSlotMode:!0,rows:u.data},{id:a(({data:e})=>[r("a",{href:"javascript:",onClick:w=>o.$emit("onEdit",e.row.id,e.i)},l(e.row.id),9,C)]),image:a(({data:e})=>[r("img",{src:e.row.image_mobile.ua?o.route("images.banners.mobile",e.row.image_mobile.ua):e.row.image_mobile.ru?o.route("images.banners.mobile",e.row.image_mobile.ru):null,alt:t.value==="ua"?e.row.title.ua:t.value==="ru"?e.row.title.ru:null,class:"w-1/4 mx-auto"},null,8,$)]),title:a(({data:e})=>[n(l(t.value==="ua"?e.row.title.ua:t.value==="ru"?e.row.title.ru:null),1)]),published:a(({data:e})=>[n(l(o.$filters.publishedStatus(e.row.published)),1)]),link:a(({data:e})=>[n(l(t.value==="ua"?e.row.link.ua:t.value==="ru"?e.row.link.ru:null),1)]),timestamps:a(({data:e})=>[n(l(o.$filters.dateFormat(e.row.updated_at))+" ",1),D,n(" "+l(o.$filters.dateFormat(e.row.created_at)),1)]),actions:a(({data:e})=>[u.canDestroy?(m(),c("a",{key:0,href:"javascript:",onClick:w=>o.$emit("onDestroy",e.row.id)},[s(_)],8,L)):f("",!0)]),_:1},8,["rows"])],64)}}};export{N as default};
