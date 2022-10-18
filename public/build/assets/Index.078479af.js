import z from"./Modal.c9fed009.js";import{v as k,A as O,G,B as K,V as g,S as n,X as c,R as m,_ as f,L as T,M as s,P as L,K as _,O as v,Y as u,bc as X,x as h}from"./moment.fb372146.js";import"./Form.da7040ce.js";import"./Images.a2477b6e.js";import"./app.ec138a24.js";import"./swiper-slide.ac1a47c1.js";import"./ImagesSelectModal.9251ecf0.js";import"./UploadImagesModal.80d1c8d3.js";const Y=u(" \u0422\u043E\u0432\u0430\u0440\u0438 "),q={key:1,class:"grid gap-4 grid-cols-1"},H=u(" \u0414\u043E\u0434\u0430\u0442\u0438 "),J=["onClick"],Q=["src","alt"],W=["onClick"],Z={class:"text-center"},se={__name:"Index",setup(ee){const i=h("$swal"),l=h("$can"),w=k({status:null,title:{ru:null,ua:null},characteristics:{ru:null,ua:null},description:{ru:null,ua:null},h1:{ru:null,ua:null},content:{ru:null,ua:null},published:0,preview:null,size_table:null,price:null,trade_price:null,discount_price:null,categories:[],vendor_code:null,providers:null,sizes:[],images:[],colors:[]}),x=h("$defaultLang"),e=O({products:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",activeLang:x,item:w});G(()=>{let t=new URLSearchParams(new URL(window.location.href).search).get("product");t&&y(t),d(1)});const C=K(()=>e.value.isActiveModal?z:null),M=k([{label:"ID",key:"id"},{label:"\u0413\u043E\u043B\u043E\u0432\u043D\u0435 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",key:"preview"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"title"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457",key:"published"},{label:"\u0410\u0440\u0442\u0438\u043A\u0443\u043B",key:"vendor_code"},{label:"\u0426\u0456\u043D\u0430",key:"price"},{label:"\u0426\u0456\u043D\u0430 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E",key:"discount_price"},{label:"\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F",key:"sort"},{label:"\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0456\u0432<hr class='my-1'>\u041F\u043E\u043A\u0443\u043F\u043E\u043A",key:"sort"},{label:"#",key:"actions"}]);function A(t){e.value.activeLang=t}function d(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.products.index",{page:e.value.currentPage})).then(a=>{Object.assign(e.value.products,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function b(t){l("destroy-products")&&i({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.products.destroy",t)).then(()=>{d(),e.value.isActiveModal&&r(),i({icon:"success",title:"Destroyed!"})}).catch(p=>{console.log(p),i({icon:"error",title:"Error!"})})})}function r(){e.value.isActiveModal=!e.value.isActiveModal}function y(t){axios.get(route("api.products.edit",t)).then(({data:a})=>{e.value.item=a.result,e.value.modalAction="edit",r()}).catch(a=>console.log(a))}function P(){l("edit-products")&&axios.put(route("api.products.update",e.value.item.id),e.value.item).then(({data:t})=>{r(),d(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function S(){l("create-products")&&axios.post(route("api.products.create"),e.value.item).then(({data:t})=>{r(),e.value.products.data.unshift(t.result),e.value.item={},d(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function $(){e.value.modalAction==="edit"&&l("edit-products")?P():e.value.modalAction==="create"&&l("create-products")&&S()}function V(){l("create-products")&&(e.value.item=w,e.value.modalAction="create",r())}function D(t){e.value.item.images=e.value.item.images.concat(t)}function I(t){let a=e.value.item.images.findIndex(p=>p.id===t);e.value.item.images.splice(a,1)}return(t,a)=>{const p=c("loader-component"),B=c("button-component"),E=c("lang-tabs"),j=c("xcircle-component"),F=c("table-component"),N=c("pagination"),U=c("auth-layout");return m(),g(U,{title:"\u0422\u043E\u0432\u0430\u0440\u0438"},{header:n(()=>[Y]),default:n(()=>[e.value.isLoading?(m(),g(p,{key:0})):f("",!0),e.value.isLoading?f("",!0):(m(),T("div",q,[s("div",null,[L(l)("create-products")?(m(),g(B,{key:0,type:"btn",onClick:V},{default:n(()=>[H]),_:1})):f("",!0)]),s("div",null,[_(E,{onClickLang:A}),_(F,{headings:M,isSlotMode:!0,rows:e.value.products.data},{id:n(({data:o})=>[s("a",{href:"javascript:",onClick:R=>y(o.row.id,o.i)},v(o.row.id),9,J)]),title:n(({data:o})=>[u(v(e.value.activeLang==="ua"?o.row.h1.ua:e.value.activeLang==="ru"?o.row.h1.ru:null),1)]),published:n(({data:o})=>[u(v(t.$filters.publishedStatus(o.row.published)),1)]),price:n(({data:o})=>[u(v(t.$filters.formatMoney(o.row.price)),1)]),discount_price:n(({data:o})=>[u(v(t.$filters.formatMoney(o.row.discount_price)),1)]),preview:n(({data:o})=>[s("img",{src:o.row.preview?t.route("images.products.55",o.row.preview):null,alt:e.value.activeLang==="ua"?o.row.h1.ua:e.value.activeLang==="ru"?o.row.h1.ru:null,class:"mx-auto"},null,8,Q)]),actions:n(({data:o})=>[s("a",{href:"javascript:",onClick:R=>b(o.row.id)},[_(j)],8,W)]),_:1},8,["headings","rows"])]),s("div",Z,[_(N,{pagination:e.value.products,"click-handler":d,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value.currentPage=o)},null,8,["pagination","modelValue"])])])),(m(),g(X(L(C)),{product:e.value.item,onCloseModal:r,onSubmitForm:$,onDeclineForm:b,onSetProductImages:D,onDestroyImage:I},null,40,["product"]))]),_:1})}}};export{se as default};
