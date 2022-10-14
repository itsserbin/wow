import B from"./Modal.b1259957.js";import P from"./OptionsLayout.46107609.js";import{z as N,D as O,A as U,u as I,U as p,R as l,Q as r,W as g,K as h,O as w,J as b,L as _,M as v,Y as m,F as z,S as J,bb as K,v as C,V as d}from"./_plugin-vue_export-helper.80033396.js";import"./Form.d884eca8.js";import"./Sidebar.3b7eddfa.js";import"./app.3d1b1164.js";const Q=m(" \u0420\u043E\u043B\u0456 "),R={key:1},T=m(" \u0414\u043E\u0434\u0430\u0442\u0438 "),W=["onClick"],Y=_("hr",{class:"my-1"},null,-1),q=_("br",null,null,-1),G=["onClick"],ne={__name:"Index",setup(H){const s=C("$swal"),n=C("$can"),k={name:null,email:null,roles:[],password:null,password_confirmation:null},e=N({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});O(()=>{u(1)});const x=U(()=>e.value.isActiveModal?B:null),A=I([{label:"ID",key:"id"},{label:"\u0406\u043C\u02BC\u044F",key:"name"},{label:"Email",key:"email"},{label:"\u0420\u043E\u043B\u044C",key:"role"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);function u(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.users.index",{page:e.value.currentPage})).then(a=>{Object.assign(e.value.data,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function y(t){n("destroy-users")&&s({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.users.destroy",t)).then(()=>{u(),e.value.isActiveModal&&c(),s({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),s({icon:"error",title:"Error!"})})})}function c(){e.value.isActiveModal=!e.value.isActiveModal}function M(t,a){n("edit-users")&&axios.get(route("api.users.edit",t)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=a,c()}).catch(i=>console.log(i))}function F(){n("edit-users")&&axios.put(route("api.users.update",e.value.item.id),e.value.item).then(()=>{c(),u(),s({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),s({title:"Error!",icon:"error"})})}function L(){n("create-users")&&axios.post(route("api.users.create"),e.value.item).then(()=>{c(),e.value.item=k,u(),s({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),s({title:"Error!",icon:"error"})})}function V(){e.value.modalAction==="edit"&&n("edit-users")?F():e.value.modalAction==="create"&&n("create-users")&&L()}function $(){n("create-users")&&(Object.assign(e.value.item,k),e.value.modalAction="create",c())}return(t,a)=>{const i=d("loader-component"),D=d("button-component"),E=d("xcircle-component"),S=d("table-component"),j=d("paginate");return r(),p(P,{title:"\u0420\u043E\u043B\u0456"},{header:l(()=>[Q]),default:l(()=>[e.value.isLoading?(r(),p(i,{key:0})):g("",!0),e.value.isLoading?g("",!0):(r(),h("div",R,[w(n)("create-users")?(r(),p(D,{key:0,type:"btn",onClick:$},{default:l(()=>[T]),_:1})):g("",!0),b(S,{headings:A,isSlotMode:!0,rows:e.value.data.data},{id:l(({data:o})=>[_("a",{href:"javascript:",onClick:f=>M(o.row.id,o.i)},v(o.row.id),9,W)]),timestamps:l(({data:o})=>[m(v(t.$filters.dateFormat(o.row.updated_at))+" ",1),Y,m(" "+v(t.$filters.dateFormat(o.row.created_at)),1)]),role:l(({data:o})=>[(r(!0),h(z,null,J(o.row.roles,f=>(r(),h("span",null,[m(v(f.name),1),q]))),256))]),actions:l(({data:o})=>[_("a",{href:"javascript:",onClick:f=>y(o.row.id)},[b(E)],8,G)]),_:1},8,["headings","rows"]),b(j,{pagination:e.value.data,"click-handler":u,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value.currentPage=o)},null,8,["pagination","modelValue"]),(r(),p(K(w(x)),{item:e.value.item,onCloseModal:c,onSubmitForm:V,onDeclineForm:y},null,40,["item"]))]))]),_:1})}}};export{ne as default};
