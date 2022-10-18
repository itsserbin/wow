import F from"./Modal.a15afffb.js";import P from"./OptionsLayout.de073cbf.js";import{A as j,G as E,B as N,v as O,V as p,S as c,R as u,$ as f,L as I,P as k,K as _,M as h,O as v,Y as m,bc as U,x as y,X as d}from"./moment.e1708d83.js";import"./Form.4bf93bca.js";const G=m(" \u041A\u043E\u043B\u044C\u043E\u0440\u0438 "),K={key:1},R=m(" \u0414\u043E\u0434\u0430\u0442\u0438 "),T=["onClick"],X=h("hr",{class:"my-1"},null,-1),Y=["onClick"],Z={__name:"Index",setup(q){const s=y("$swal"),a=y("$can"),g={published:0,title:null},e=j({sizes:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});E(()=>{r(1)});const z=N(()=>e.value.isActiveModal?F:null),w=O([{label:"ID",key:"id"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"title"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457",key:"published"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);function r(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.sizes.index",{page:e.value.currentPage})).then(i=>{Object.assign(e.value.sizes,i.data.result),e.value.isLoading=!1}).catch(i=>{console.log(i),e.value.isLoading=!1})}function b(t){a("destroy-sizes")&&s({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(i=>{i.isConfirmed&&axios.delete(route("api.sizes.destroy",t)).then(()=>{r(),e.value.isActiveModal&&l(),s({icon:"success",title:"Destroyed!"})}).catch(n=>{console.log(n),s({icon:"error",title:"Error!"})})})}function l(){e.value.isActiveModal=!e.value.isActiveModal}function C(t,i){a("edit-sizes")&&axios.get(route("api.sizes.edit",t)).then(({data:n})=>{e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=i,l()}).catch(n=>console.log(n))}function x(){a("edit-sizes")&&axios.put(route("api.sizes.update",e.value.item.id),e.value.item).then(()=>{l(),r(),s({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),s({title:"Error!",icon:"error"})})}function A(){a("create-sizes")&&axios.post(route("api.sizes.create"),e.value.item).then(()=>{l(),e.value.item=g,r(),s({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),s({title:"Error!",icon:"error"})})}function M(){e.value.modalAction==="edit"&&a("edit-sizes")?x():e.value.modalAction==="create"&&a("create-sizes")&&A()}function $(){a("create-sizes")&&(Object.assign(e.value.item,g),e.value.modalAction="create",l())}return(t,i)=>{const n=d("loader-component"),V=d("button-component"),L=d("xcircle-component"),S=d("table-component"),B=d("paginate");return u(),p(P,{title:"\u041A\u043E\u043B\u044C\u043E\u0440\u0438"},{header:c(()=>[G]),default:c(()=>[e.value.isLoading?(u(),p(n,{key:0})):f("",!0),e.value.isLoading?f("",!0):(u(),I("div",K,[k(a)("create-providers")?(u(),p(V,{key:0,type:"btn",onClick:$},{default:c(()=>[R]),_:1})):f("",!0),_(S,{headings:w,isSlotMode:!0,rows:e.value.sizes.data},{id:c(({data:o})=>[h("a",{href:"javascript:",onClick:D=>C(o.row.id,o.i)},v(o.row.id),9,T)]),published:c(({data:o})=>[m(v(t.$filters.publishedStatus(o.row.published)),1)]),timestamps:c(({data:o})=>[m(v(t.$filters.dateFormat(o.row.updated_at))+" ",1),X,m(" "+v(t.$filters.dateFormat(o.row.created_at)),1)]),actions:c(({data:o})=>[h("a",{href:"javascript:",onClick:D=>b(o.row.id)},[_(L)],8,Y)]),_:1},8,["headings","rows"]),_(B,{pagination:e.value.sizes,"click-handler":r,modelValue:e.value.currentPage,"onUpdate:modelValue":i[0]||(i[0]=o=>e.value.currentPage=o)},null,8,["pagination","modelValue"]),(u(),p(U(k(z)),{item:e.value.item,onCloseModal:l,onSubmitForm:M,onDeclineForm:b},null,40,["item"]))]))]),_:1})}}};export{Z as default};
