import{l as h,h as k}from"./app.2d605236.js";import{i as y,p as l,G as s,C as o,F as g,E as v,M as w,z as m,q as i,x as a,v as n,s as C}from"./index.1726d409.js";import"./moment.9709ab41.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./lazyload.6866379a.js";import"./Logo.9264c4eb.js";const $=["onClick"],b={class:"text-center"},D=i("br",null,null,-1),L=["onClick"],B={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","onEdit"],setup(r){const d=v("$defaultLang"),c=y(d),p=[{label:"ID",key:"id"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"title"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}];function _(t){c.value=t}return(t,x)=>{const u=w("xcircle-component");return m(),l(g,null,[s(k,{onClickLang:_}),s(h,{headings:p,isSlotMode:!0,rows:r.data},{id:o(({data:e})=>[i("a",{href:"javascript:",onClick:f=>t.$emit("onEdit",e.row.id,e.i)},a(e.row.id),9,$)]),title:o(({data:e})=>[n(a(e.row.title[c.value]),1)]),timestamps:o(({data:e})=>[i("div",b,[n(a(t.$filters.dateTimeFormat(e.row.updated_at))+" ",1),D,n(" "+a(t.$filters.dateTimeFormat(e.row.created_at)),1)])]),actions:o(({data:e})=>[r.canDestroy?(m(),l("a",{key:0,href:"javascript:",onClick:f=>t.$emit("onDestroy",e.row.id)},[s(u)],8,L)):C("",!0)]),_:1},8,["rows"])],64)}}};export{B as default};