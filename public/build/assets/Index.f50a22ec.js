import O from"./Modal.39a0a177.js";import{u as k,z as R,D as J,A as K,U as v,R as n,V as c,Q as p,Y as f,K as Q,O as L,J as g,L as _,M as m,W as s,bb as T,v as h}from"./_plugin-vue_export-helper.f3876adb.js";import"./Form.56e966de.js";import"./Images.ce87004f.js";import"./app.f4fcaa04.js";import"./swiper-slide.c35a2b89.js";import"./ImagesSelectModal.dbcdef56.js";import"./UploadImagesModal.63decfd5.js";const W=s(" \u0422\u043E\u0432\u0430\u0440\u0438 "),Y={key:1},q=s(" \u0414\u043E\u0434\u0430\u0442\u0438 "),G=["onClick"],H=["src","alt"],X=["onClick"],re={__name:"Index",setup(Z){const i=h("$swal"),l=h("$can"),b=k({status:null,title:{ru:null,ua:null},characteristics:{ru:null,ua:null},description:{ru:null,ua:null},h1:{ru:null,ua:null},content:{ru:null,ua:null},published:0,preview:null,size_table:null,price:null,trade_price:null,discount_price:null,categories:[],vendor_code:null,providers:null,sizes:[],images:[],colors:[]}),C=h("$defaultLang"),e=R({products:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",activeLang:C,item:b});J(()=>{let t=new URLSearchParams(new URL(window.location.href).search).get("product");t&&w(t),u(1)});const x=K(()=>e.value.isActiveModal?O:null),M=k([{label:"ID",key:"id"},{label:"\u0413\u043E\u043B\u043E\u0432\u043D\u0435 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",key:"preview"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"title"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457",key:"published"},{label:"\u0410\u0440\u0442\u0438\u043A\u0443\u043B",key:"vendor_code"},{label:"\u0426\u0456\u043D\u0430",key:"price"},{label:"\u0426\u0456\u043D\u0430 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E",key:"discount_price"},{label:"\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F",key:"sort"},{label:"\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0456\u0432<hr class='my-1'>\u041F\u043E\u043A\u0443\u043F\u043E\u043A",key:"sort"},{label:"#",key:"actions"}]);function A(t){e.value.activeLang=t}function u(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.products.index",{page:e.value.currentPage})).then(a=>{Object.assign(e.value.products,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function y(t){l("destroy-products")&&i({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.products.destroy",t)).then(()=>{u(),e.value.isActiveModal&&r(),i({icon:"success",title:"Destroyed!"})}).catch(d=>{console.log(d),i({icon:"error",title:"Error!"})})})}function r(){e.value.isActiveModal=!e.value.isActiveModal}function w(t){axios.get(route("api.products.edit",t)).then(({data:a})=>{e.value.item=a.result,e.value.modalAction="edit",r()}).catch(a=>console.log(a))}function $(){l("edit-products")&&axios.put(route("api.products.update",e.value.item.id),e.value.item).then(({data:t})=>{r(),Object.assign(e.value.products.data[e.value.item.index],t.result),u(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function D(){l("create-products")&&axios.post(route("api.products.create"),e.value.item).then(({data:t})=>{r(),e.value.products.data.unshift(t.result),e.value.item={},u(),i({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),i({title:"Error!",icon:"error"})})}function P(){e.value.modalAction==="edit"&&l("edit-products")?$():e.value.modalAction==="create"&&l("create-products")&&D()}function S(){l("create-products")&&(e.value.item=b,e.value.modalAction="create",r())}function V(t){e.value.item.images=e.value.item.images.concat(t)}function I(t){let a=e.value.item.images.findIndex(d=>d.id===t);e.value.item.images.splice(a,1)}return(t,a)=>{const d=c("loader-component"),j=c("button-component"),B=c("lang-tabs"),E=c("xcircle-component"),U=c("table-component"),F=c("paginate"),N=c("auth-layout");return p(),v(N,{title:"\u0422\u043E\u0432\u0430\u0440\u0438"},{header:n(()=>[W]),default:n(()=>[e.value.isLoading?(p(),v(d,{key:0})):f("",!0),e.value.isLoading?f("",!0):(p(),Q("div",Y,[L(l)("create-products")?(p(),v(j,{key:0,type:"btn",onClick:S},{default:n(()=>[q]),_:1})):f("",!0),g(B,{onClickLang:A}),g(U,{headings:M,isSlotMode:!0,rows:e.value.products.data},{id:n(({data:o})=>[_("a",{href:"javascript:",onClick:z=>w(o.row.id,o.i)},m(o.row.id),9,G)]),title:n(({data:o})=>[s(m(e.value.activeLang==="ua"?o.row.h1.ua:e.value.activeLang==="ru"?o.row.h1.ru:null),1)]),published:n(({data:o})=>[s(m(t.$filters.publishedStatus(o.row.published)),1)]),price:n(({data:o})=>[s(m(t.$filters.formatMoney(o.row.price)),1)]),discount_price:n(({data:o})=>[s(m(t.$filters.formatMoney(o.row.discount_price)),1)]),preview:n(({data:o})=>[_("img",{src:t.route("images.products.55",o.row.preview),alt:e.value.activeLang==="ua"?o.row.h1.ua:e.value.activeLang==="ru"?o.row.h1.ru:null,class:"mx-auto"},null,8,H)]),actions:n(({data:o})=>[_("a",{href:"javascript:",onClick:z=>y(o.row.id)},[g(E)],8,X)]),_:1},8,["headings","rows"]),g(F,{pagination:e.value.products,"click-handler":u,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value.currentPage=o)},null,8,["pagination","modelValue"]),(p(),v(T(L(x)),{product:e.value.item,onCloseModal:r,onSubmitForm:P,onDeclineForm:y,onSetProductImages:V,onDestroyImage:I},null,40,["product"]))]))]),_:1})}}};export{re as default};
