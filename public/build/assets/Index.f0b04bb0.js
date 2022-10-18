import N from"./Modal.2dc76d3b.js";import O from"./OptionsLayout.de073cbf.js";import{v as k,A as I,G as Q,B as U,V as v,S as n,R as f,$ as _,L as G,P as q,K as p,M as b,O as u,Y as c,bc as K,x as h,X as d}from"./moment.e1708d83.js";import"./Form.3ed2038a.js";const R=c(" FAQ "),T={key:1},X=c(" \u0414\u043E\u0434\u0430\u0442\u0438 "),Y=["onClick"],z=b("hr",{class:"my-1"},null,-1),H=["onClick"],ae={__name:"Index",setup(J){const l=h("$swal"),i=h("$can"),g=k({question:{ua:null,ru:null},answer:{ua:null,ru:null},published:0}),y=h("$defaultLang"),e=I({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:g,activeLang:y});Q(()=>{m(1)});const L=U(()=>e.value.isActiveModal?N:null),C=k([{label:"ID",key:"id"},{label:"\u041F\u0438\u0442\u0430\u043D\u043D\u044F",key:"question"},{label:"\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C",key:"answer"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",key:"published"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);function A(a){e.value.activeLang=a}function m(a){e.value.isLoading=!0,a&&(e.value.currentPage=a),axios.get(route("api.faqs.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.data,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function w(a){i("destroy-faq")&&l({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.faqs.destroy",a)).then(()=>{m(),e.value.isActiveModal&&r(),l({icon:"success",title:"Destroyed!"})}).catch(s=>{console.log(s),l({icon:"error",title:"Error!"})})})}function r(){e.value.isActiveModal=!e.value.isActiveModal}function x(a,o){i("edit-faq")&&axios.get(route("api.faqs.edit",a)).then(({data:s})=>{e.value.item=s.result,e.value.modalAction="edit",e.value.item.index=o,r()}).catch(s=>console.log(s))}function $(){i("edit-faq")&&axios.put(route("api.faqs.update",e.value.item.id),e.value.item).then(()=>{r(),m(),l({title:"Success!",icon:"success"})}).catch(a=>{console.log(a),l({title:"Error!",icon:"error"})})}function M(){i("create-faq")&&axios.post(route("api.faqs.create"),e.value.item).then(()=>{r(),e.value.item=g,m(),l({title:"Success!",icon:"success"})}).catch(a=>{console.log(a),l({title:"Error!",icon:"error"})})}function F(){e.value.modalAction==="edit"&&i("edit-faq")?$():e.value.modalAction==="create"&&i("create-faq")&&M()}function V(){i("create-faq")&&(Object.assign(e.value.item,g),e.value.modalAction="create",r())}return(a,o)=>{const s=d("loader-component"),S=d("button-component"),B=d("lang-tabs"),D=d("xcircle-component"),P=d("table-component"),j=d("paginate");return f(),v(O,{title:"FAQ"},{header:n(()=>[R]),default:n(()=>[e.value.isLoading?(f(),v(s,{key:0})):_("",!0),e.value.isLoading?_("",!0):(f(),G("div",T,[q(i)("create-faq")?(f(),v(S,{key:0,type:"btn",onClick:V},{default:n(()=>[X]),_:1})):_("",!0),p(B,{onClickLang:A}),p(P,{headings:C,isSlotMode:!0,rows:e.value.data.data},{id:n(({data:t})=>[b("a",{href:"javascript:",onClick:E=>x(t.row.id,t.i)},u(t.row.id),9,Y)]),question:n(({data:t})=>[c(u(e.value.activeLang==="ua"?t.row.question.ua:e.value.activeLang==="ru"?t.row.question.ru:null),1)]),answer:n(({data:t})=>[c(u(e.value.activeLang==="ua"?t.row.answer.ua:e.value.activeLang==="ru"?t.row.answer.ru:null),1)]),published:n(({data:t})=>[c(u(a.$filters.publishedStatus(t.row.published)),1)]),timestamps:n(({data:t})=>[c(u(a.$filters.dateFormat(t.row.updated_at))+" ",1),z,c(" "+u(a.$filters.dateFormat(t.row.created_at)),1)]),actions:n(({data:t})=>[b("a",{href:"javascript:",onClick:E=>w(t.row.id)},[p(D)],8,H)]),_:1},8,["headings","rows"]),p(j,{pagination:e.value.data,"click-handler":m,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=t=>e.value.currentPage=t)},null,8,["pagination","modelValue"]),(f(),v(K(q(L)),{item:e.value.item,onCloseModal:r,onSubmitForm:F,onDeclineForm:w},null,40,["item"]))]))]),_:1})}}};export{ae as default};
