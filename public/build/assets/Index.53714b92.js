import j from"./Modal.92608fc3.js";import B from"./OptionsLayout.788a0bfd.js";import{G as S,H as F,Y as N,ac as O,C as m,A as r,y as u,J as p,u as H,am as g,z as v,v as h,w as I,b5 as U,O as y,aP as k,D as d}from"./_plugin-vue_export-helper.f12554ed.js";import"./Form.64997193.js";import"./Sidebar.620cebe0.js";import"./app.ec5dc424.js";const z=y(" \u041A\u043E\u043B\u044C\u043E\u0440\u0438 "),G={key:1},J=y(" \u0414\u043E\u0434\u0430\u0442\u0438 "),T=["onClick"],X=["onClick"],ee={__name:"Index",setup(Y){const n=k("$swal"),a=k("$can"),_={name:null,hex:null},e=S({colors:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{}});F(()=>{s(1)});const b=N(()=>e.value.isActiveModal?j:null),x=O([{label:"ID",key:"id"},{label:"\u041A\u043E\u043B\u0456\u0440",key:"color"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"name"},{label:"HEX",key:"hex"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);function s(o){e.value.isLoading=!0,o&&(e.value.currentPage=o),axios.get(route("api.colors.index",{page:e.value.currentPage})).then(t=>{Object.assign(e.value.colors,t.data.result),e.value.isLoading=!1}).catch(t=>{console.log(t),e.value.isLoading=!1})}function f(o){a("destroy-colors")&&n({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(t=>{t.isConfirmed&&axios.delete(route("api.colors.destroy",o)).then(()=>{s(),e.value.isActiveModal&&l(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function l(){e.value.isActiveModal=!e.value.isActiveModal}function C(o,t){a("edit-colors")&&axios.get(route("api.colors.edit",o)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=t,l()}).catch(i=>console.log(i))}function w(){a("edit-colors")&&axios.put(route("api.colors.update",e.value.item.id),e.value.item).then(()=>{l(),s(),n({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),n({title:"Error!",icon:"error"})})}function A(){a("create-colors")&&axios.post(route("api.colors.create"),e.value.item).then(()=>{l(),e.value.item=_,s(),n({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),n({title:"Error!",icon:"error"})})}function M(){e.value.modalAction==="edit"&&a("edit-colors")?w():e.value.modalAction==="create"&&a("create-colors")&&A()}function D(){a("create-colors")&&(Object.assign(e.value.item,_),e.value.modalAction="create",l())}return(o,t)=>{const i=d("loader-component"),V=d("button-component"),E=d("xcircle-component"),L=d("table-component"),P=d("paginate");return u(),m(B,{title:"\u041A\u043E\u043B\u044C\u043E\u0440\u0438"},{header:r(()=>[z]),default:r(()=>[e.value.isLoading?(u(),m(i,{key:0})):p("",!0),e.value.isLoading?p("",!0):(u(),H("div",G,[g(a)("create-providers")?(u(),m(V,{key:0,type:"btn",onClick:D},{default:r(()=>[J]),_:1})):p("",!0),v(L,{headings:x,isSlotMode:!0,rows:e.value.colors.data},{id:r(({data:c})=>[h("a",{href:"javascript:",onClick:$=>C(c.row.id,c.i)},I(c.row.id),9,T)]),actions:r(({data:c})=>[h("a",{href:"javascript:",onClick:$=>f(c.row.id)},[v(E)],8,X)]),_:1},8,["headings","rows"]),v(P,{pagination:e.value.colors,"click-handler":s,modelValue:e.value.currentPage,"onUpdate:modelValue":t[0]||(t[0]=c=>e.value.currentPage=c)},null,8,["pagination","modelValue"]),(u(),m(U(g(b)),{item:e.value.item,onCloseModal:l,onSubmitForm:M,onDeclineForm:f},null,40,["item"]))]))]),_:1})}}};export{ee as default};
