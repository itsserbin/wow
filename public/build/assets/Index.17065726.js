import j from"./Modal.47602557.js";import E from"./ReviewsLayout.0098fc03.js";import{v as w,A as N,G as O,B as I,V as v,S as c,R as u,_,L as U,P as b,K as f,M as h,O as p,Y as m,bc as G,x as k,X as d}from"./moment.fb372146.js";import"./Form.37c21f62.js";const K=m(" \u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u043F\u0440\u043E \u0442\u043E\u0432\u0430\u0440 "),R={key:1},T=m(" \u0414\u043E\u0434\u0430\u0442\u0438 "),X=["onClick"],Y=h("hr",{class:"my-1"},null,-1),q=["onClick"],Z={__name:"Index",setup(z){const n=k("$swal"),a=k("$can"),y=w({image:[],published:0}),e=N({reviews:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});O(()=>{r(1)});const C=I(()=>e.value.isActiveModal?j:null),x=w([{label:"ID",key:"id"},{label:"\u0406\u043C\u02BC\u044F",key:"name"},{label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",key:"phone"},{label:"\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440",key:"comment"},{label:"\u0422\u043E\u0432\u0430\u0440",key:"product_id"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457",key:"published"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);function r(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.reviews.social.index",{page:e.value.currentPage})).then(i=>{Object.assign(e.value.reviews,i.data.result),e.value.isLoading=!1}).catch(i=>{console.log(i),e.value.isLoading=!1})}function g(t){a("destroy-reviews")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(i=>{i.isConfirmed&&axios.delete(route("api.reviews.social.destroy",t)).then(()=>{r(),e.value.isActiveModal&&l(),n({icon:"success",title:"Destroyed!"})}).catch(s=>{console.log(s),n({icon:"error",title:"Error!"})})})}function l(){e.value.isActiveModal=!e.value.isActiveModal}function A(t,i){a("edit-reviews")&&axios.get(route("api.reviews.social.edit",t)).then(({data:s})=>{e.value.item=s.result,e.value.modalAction="edit",e.value.item.index=i,l()}).catch(s=>console.log(s))}function M(){a("edit-reviews")&&axios.put(route("api.reviews.social.update",e.value.item.id),e.value.item).then(()=>{l(),r(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function $(){a("create-reviews")&&axios.post(route("api.reviews.social.create"),e.value.item).then(({data:t})=>{l(),e.value.item={},r(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function V(){e.value.modalAction==="edit"&&a("edit-reviews")?M():e.value.modalAction==="create"&&a("create-reviews")&&$()}function L(){a("create-reviews")&&(Object.assign(e.value.item,y),e.value.modalAction="create",l())}return(t,i)=>{const s=d("loader-component"),S=d("button-component"),B=d("xcircle-component"),D=d("table-component"),F=d("paginate");return u(),v(E,{title:"\u0412\u0456\u0434\u0433\u0443\u043A\u0438 \u043F\u0440\u043E \u0442\u043E\u0432\u0430\u0440"},{header:c(()=>[K]),default:c(()=>[e.value.isLoading?(u(),v(s,{key:0})):_("",!0),e.value.isLoading?_("",!0):(u(),U("div",R,[b(a)("create-reviews")?(u(),v(S,{key:0,type:"btn",onClick:L},{default:c(()=>[T]),_:1})):_("",!0),f(D,{headings:x,isSlotMode:!0,rows:e.value.reviews.data},{id:c(({data:o})=>[h("a",{href:"javascript:",onClick:P=>A(o.row.id,o.i)},p(o.row.id),9,X)]),published:c(({data:o})=>[m(p(t.$filters.publishedStatus(o.row.published)),1)]),timestamps:c(({data:o})=>[m(p(t.$filters.dateFormat(o.row.updated_at))+" ",1),Y,m(" "+p(t.$filters.dateFormat(o.row.created_at)),1)]),actions:c(({data:o})=>[h("a",{href:"javascript:",onClick:P=>g(o.row.id)},[f(B)],8,q)]),_:1},8,["headings","rows"]),f(F,{pagination:e.value.reviews,"click-handler":r,modelValue:e.value.currentPage,"onUpdate:modelValue":i[0]||(i[0]=o=>e.value.currentPage=o)},null,8,["pagination","modelValue"]),(u(),v(G(b(C)),{item:e.value.item,onCloseModal:l,onSubmitForm:V,onDeclineForm:g},null,40,["item"]))]))]),_:1})}}};export{Z as default};
