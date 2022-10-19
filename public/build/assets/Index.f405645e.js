import P from"./Modal.74f66e1c.js";import{v as g,A as S,G as E,B as j,V as p,S as r,X as u,R as m,$ as k,P as b,L as N,M as d,K as v,O as _,Y as h,bc as I,x as y}from"./moment.e1708d83.js";import"./Form.4886ff4c.js";const O=h(" \u0417\u0430\u044F\u0432\u043A\u0438 \u043D\u0430 \u0437\u0432\u043E\u0440\u043E\u0442\u043D\u0456\u0439 \u0437\u0432\u02BC\u044F\u0437\u043E\u043A "),U={key:1},G={class:"grid grid-cols-1 gap-4"},K=["onClick"],R=d("hr",{class:"my-1"},null,-1),T=["onClick"],X={class:"text-center"},J={__name:"Index",setup(Y){const n=y("$swal"),l=y("$can");g({name:null,phone:null,comment:null,status:null});const e=S({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});E(()=>{i(1)});const x=j(()=>e.value.isActiveModal?P:null),w=g([{label:"ID",key:"id"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",key:"status"},{label:"\u0406\u043C\u02BC\u044F",key:"name"},{label:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",key:"phone"},{label:"\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440",key:"comment"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);function i(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.callbacks.index",{page:e.value.currentPage})).then(a=>{Object.assign(e.value.data,a.data.result),e.value.isLoading=!1}).catch(a=>{console.log(a),e.value.isLoading=!1})}function f(t){l("destroy-callbacks")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(a=>{a.isConfirmed&&axios.delete(route("api.callbacks.destroy",t)).then(()=>{i(),e.value.isActiveModal&&s(),n({icon:"success",title:"Destroyed!"})}).catch(c=>{console.log(c),n({icon:"error",title:"Error!"})})})}function s(){e.value.isActiveModal=!e.value.isActiveModal}function C(t,a){l("edit-callbacks")&&axios.get(route("api.callbacks.edit",t)).then(({data:c})=>{e.value.item=c.result,e.value.modalAction="edit",e.value.item.index=a,s()}).catch(c=>console.log(c))}function A(){l("edit-callbacks")&&axios.put(route("api.callbacks.update",e.value.item.id),e.value.item).then(()=>{s(),i(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function M(){l("create-callbacks")&&axios.post(route("api.callbacks.create"),e.value.item).then(({data:t})=>{s(),e.value.item={},i(),n({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),n({title:"Error!",icon:"error"})})}function V(){e.value.modalAction==="edit"&&l("edit-callbacks")?A():e.value.modalAction==="create"&&l("create-callbacks")&&M()}return(t,a)=>{const c=u("loader-component"),$=u("xcircle-component"),L=u("table-component"),B=u("pagination"),D=u("auth-layout");return m(),p(D,{title:"\u0417\u0430\u044F\u0432\u043A\u0438 \u043D\u0430 \u0437\u0432\u043E\u0440\u043E\u0442\u043D\u0456\u0439 \u0437\u0432\u02BC\u044F\u0437\u043E\u043A"},{header:r(()=>[O]),default:r(()=>[e.value.isLoading?(m(),p(c,{key:0})):k("",!0),!e.value.isLoading&&b(l)("show-callbacks")?(m(),N("div",U,[d("div",G,[v(L,{headings:w,isSlotMode:!0,rows:e.value.data.data},{id:r(({data:o})=>[d("a",{href:"javascript:",onClick:F=>C(o.row.id,o.i)},_(o.row.id),9,K)]),timestamps:r(({data:o})=>[h(_(t.$filters.dateFormat(o.row.updated_at))+" ",1),R,h(" "+_(t.$filters.dateFormat(o.row.created_at)),1)]),actions:r(({data:o})=>[d("a",{href:"javascript:",onClick:F=>f(o.row.id)},[v($)],8,T)]),_:1},8,["headings","rows"]),d("div",X,[v(B,{pagination:e.value.data,"click-handler":i,modelValue:e.value.currentPage,"onUpdate:modelValue":a[0]||(a[0]=o=>e.value.currentPage=o)},null,8,["pagination","modelValue"])])]),(m(),p(I(b(x)),{item:e.value.item,onCloseModal:s,onSubmitForm:V,onDeclineForm:f},null,40,["item"]))])):k("",!0)]),_:1})}}};export{J as default};