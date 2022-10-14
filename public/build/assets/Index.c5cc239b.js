import N from"./Modal.7c2c98ad.js";import O from"./OptionsLayout.b8752564.js";import{u as k,z as Q,D as U,A as I,U as p,R as n,Q as f,X as _,K as z,O as q,J as v,L as b,M as u,a1 as c,bb as J,v as h,V as d}from"./_plugin-vue_export-helper.4dd23699.js";import"./Form.a4225f17.js";import"./Sidebar.259fb7c7.js";import"./app.bf5b84e8.js";const K=c(" FAQ "),R={key:1},T=c(" \u0414\u043E\u0434\u0430\u0442\u0438 "),X=["onClick"],G=b("hr",{class:"my-1"},null,-1),H=["onClick"],ne={__name:"Index",setup(W){const l=h("$swal"),i=h("$can"),g=k({question:{ua:null,ru:null},answer:{ua:null,ru:null},published:0}),y=h("$defaultLang"),e=Q({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:g,activeLang:y});U(()=>{m(1)});const L=I(()=>e.value.isActiveModal?N:null),C=k([{label:"ID",key:"id"},{label:"\u041F\u0438\u0442\u0430\u043D\u043D\u044F",key:"question"},{label:"\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C",key:"answer"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",key:"published"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);function A(a){e.value.activeLang=a}function m(a){e.value.isLoading=!0,a&&(e.value.currentPage=a),axios.get(route("api.faqs.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.data,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function w(a){i("destroy-faq")&&l({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.faqs.destroy",a)).then(()=>{m(),e.value.isActiveModal&&r(),l({icon:"success",title:"Destroyed!"})}).catch(s=>{console.log(s),l({icon:"error",title:"Error!"})})})}function r(){e.value.isActiveModal=!e.value.isActiveModal}function x(a,o){i("edit-faq")&&axios.get(route("api.faqs.edit",a)).then(({data:s})=>{e.value.item=s.result,e.value.modalAction="edit",e.value.item.index=o,r()}).catch(s=>console.log(s))}function M(){i("edit-faq")&&axios.put(route("api.faqs.update",e.value.item.id),e.value.item).then(()=>{r(),m(),l({title:"Success!",icon:"success"})}).catch(a=>{console.log(a),l({title:"Error!",icon:"error"})})}function $(){i("create-faq")&&axios.post(route("api.faqs.create"),e.value.item).then(()=>{r(),e.value.item=g,m(),l({title:"Success!",icon:"success"})}).catch(a=>{console.log(a),l({title:"Error!",icon:"error"})})}function F(){e.value.modalAction==="edit"&&i("edit-faq")?M():e.value.modalAction==="create"&&i("create-faq")&&$()}function V(){i("create-faq")&&(Object.assign(e.value.item,g),e.value.modalAction="create",r())}return(a,o)=>{const s=d("loader-component"),D=d("button-component"),S=d("lang-tabs"),j=d("xcircle-component"),B=d("table-component"),E=d("paginate");return f(),p(O,{title:"FAQ"},{header:n(()=>[K]),default:n(()=>[e.value.isLoading?(f(),p(s,{key:0})):_("",!0),e.value.isLoading?_("",!0):(f(),z("div",R,[q(i)("create-faq")?(f(),p(D,{key:0,type:"btn",onClick:V},{default:n(()=>[T]),_:1})):_("",!0),v(S,{onClickLang:A}),v(B,{headings:C,isSlotMode:!0,rows:e.value.data.data},{id:n(({data:t})=>[b("a",{href:"javascript:",onClick:P=>x(t.row.id,t.i)},u(t.row.id),9,X)]),question:n(({data:t})=>[c(u(e.value.activeLang==="ua"?t.row.question.ua:e.value.activeLang==="ru"?t.row.question.ru:null),1)]),answer:n(({data:t})=>[c(u(e.value.activeLang==="ua"?t.row.answer.ua:e.value.activeLang==="ru"?t.row.answer.ru:null),1)]),published:n(({data:t})=>[c(u(a.$filters.publishedStatus(t.row.published)),1)]),timestamps:n(({data:t})=>[c(u(a.$filters.dateFormat(t.row.updated_at))+" ",1),G,c(" "+u(a.$filters.dateFormat(t.row.created_at)),1)]),actions:n(({data:t})=>[b("a",{href:"javascript:",onClick:P=>w(t.row.id)},[v(j)],8,H)]),_:1},8,["headings","rows"]),v(E,{pagination:e.value.data,"click-handler":m,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=t=>e.value.currentPage=t)},null,8,["pagination","modelValue"]),(f(),p(J(q(L)),{item:e.value.item,onCloseModal:r,onSubmitForm:F,onDeclineForm:w},null,40,["item"]))]))]),_:1})}}};export{ne as default};
