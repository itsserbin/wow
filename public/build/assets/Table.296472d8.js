import{m as h,h as k}from"./app.460df568.js";import{w as y,y as l,J as s,K as a,M as g,X as w,H as v,F as m,z as i,A as o,L as n,P as $}from"./___vite-browser-external_commonjs-proxy.4f2b06be.js";const C=["onClick"],b={class:"text-center"},D=i("br",null,null,-1),L=["onClick"],V={__name:"Table",props:["data","canDestroy"],emits:["onDestroy","onEdit"],setup(r){const d=w("$defaultLang"),c=y(d),_=[{label:"ID",key:"id"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"title"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}];function p(t){c.value=t}return(t,F)=>{const u=v("xcircle-component");return m(),l(g,null,[s(k,{onClickLang:p}),s(h,{headings:_,isSlotMode:!0,rows:r.data},{id:a(({data:e})=>[i("a",{href:"javascript:",onClick:f=>t.$emit("onEdit",e.row.id,e.i)},o(e.row.id),9,C)]),title:a(({data:e})=>[n(o(e.row.title[c.value]),1)]),timestamps:a(({data:e})=>[i("div",b,[n(o(t.$filters.dateTimeFormat(e.row.updated_at))+" ",1),D,n(" "+o(t.$filters.dateTimeFormat(e.row.created_at)),1)])]),actions:a(({data:e})=>[r.canDestroy?(m(),l("a",{key:0,href:"javascript:",onClick:f=>t.$emit("onDestroy",e.row.id)},[s(u)],8,L)):$("",!0)]),_:1},8,["rows"])],64)}}};export{V as default};
