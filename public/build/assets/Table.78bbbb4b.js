import{m as p,w as t,B as r,o as c,i,t as o,k as a,g as y,x as u,j as _}from"./vendor.693a237b.js";import"./__commonjsHelpers__.488ed5c2.js";const b=["onClick"],h=i("hr",{class:"my-1"},null,-1),w=["onClick"],$={__name:"Table",props:["data","statuses","canDestroy"],emits:["onDestroy","onEdit"],setup(n){const l=[{label:"ID",key:"id"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",key:"status"},{label:"\u0406\u043C\u02BC\u044F",key:"name"},{label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",key:"phone"},{label:"\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",key:"order_id"},{label:"\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440",key:"comment"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}];return(s,f)=>{const m=r("xcircle-component"),d=r("table-component");return c(),p(d,{headings:l,isSlotMode:!0,rows:n.data},{id:t(({data:e})=>[i("a",{href:"javascript:",onClick:k=>s.$emit("onEdit",e.row.id,e.i)},o(e.row.id),9,b)]),status:t(({data:e})=>[a(o(n.statuses[e.row.status]),1)]),comment:t(({data:e})=>[a(o(e.row.comment?e.row.comment.substr(0,30)+"...":"-"),1)]),timestamps:t(({data:e})=>[a(o(s.$filters.dateFormat(e.row.updated_at))+" ",1),h,a(" "+o(s.$filters.dateFormat(e.row.created_at)),1)]),actions:t(({data:e})=>[n.canDestroy?(c(),y("a",{key:0,href:"javascript:",onClick:k=>s.$emit("onDestroy",e.row.id)},[u(m)],8,w)):_("",!0)]),_:1},8,["rows"])}}};export{$ as default};
