import O from"./Modal.085f69a8.js";import U from"./OptionsLayout.46107609.js";import{u as k,z as I,D as z,A as J,U as _,R as a,Q as p,W as g,K,O as w,J as v,L as b,M as d,Y as l,bb as Q,v as h,V as u}from"./_plugin-vue_export-helper.80033396.js";import"./Form.65efc9a4.js";import"./Sidebar.3b7eddfa.js";import"./app.3d1b1164.js";const R=l(" \u041F\u0440\u043E\u043C\u043E-\u043A\u043E\u0434\u0438 "),T={key:1},W=l(" \u0414\u043E\u0434\u0430\u0442\u0438 "),Y=["onClick"],q=b("hr",{class:"my-1"},null,-1),G=["onClick"],ae={__name:"Index",setup(H){const c=h("$swal"),i=h("$can"),f=k({code:null,percent_discount:null,discount_in_hryvnia:null,end_date:null,published:0}),C=h("$defaultLang"),e=I({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:f,activeLang:C});z(()=>{m(1)});const L=J(()=>e.value.isActiveModal?O:null),A=k([{label:"ID",key:"id"},{label:"\u041A\u043E\u0434",key:"code"},{label:"\u0417\u043D\u0438\u0436\u043A\u0430",key:"discount"},{label:"\u041A\u0456\u043D\u0446\u0435\u0432\u0430 \u0434\u0430\u0442\u0430",key:"end_date"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457",key:"published"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);function $(t){e.value.activeLang=t}function m(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.promo-codes.index",{page:e.value.currentPage})).then(n=>{Object.assign(e.value.data,n.data.result),e.value.isLoading=!1}).catch(n=>{console.log(n),e.value.isLoading=!1})}function y(t){i("destroy-promo-codes")&&c({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(n=>{n.isConfirmed&&axios.delete(route("api.promo-codes.destroy",t)).then(()=>{m(),e.value.isActiveModal&&r(),c({icon:"success",title:"Destroyed!"})}).catch(s=>{console.log(s),c({icon:"error",title:"Error!"})})})}function r(){e.value.isActiveModal=!e.value.isActiveModal}function x(t,n){i("edit-promo-codes")&&axios.get(route("api.promo-codes.edit",t)).then(({data:s})=>{e.value.item=s.result,e.value.modalAction="edit",e.value.item.index=n,r()}).catch(s=>console.log(s))}function M(){i("edit-promo-codes")&&axios.put(route("api.promo-codes.update",e.value.item.id),e.value.item).then(()=>{r(),m(),c({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),c({title:"Error!",icon:"error"})})}function V(){i("create-promo-codes")&&axios.post(route("api.promo-codes.create"),e.value.item).then(()=>{r(),e.value.item=f,m(),c({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),c({title:"Error!",icon:"error"})})}function D(){e.value.modalAction==="edit"&&i("edit-promo-codes")?M():e.value.modalAction==="create"&&i("create-promo-codes")&&V()}function F(){i("create-promo-codes")&&(Object.assign(e.value.item,f),e.value.modalAction="create",r())}return(t,n)=>{const s=u("loader-component"),S=u("button-component"),j=u("lang-tabs"),B=u("xcircle-component"),E=u("table-component"),P=u("paginate");return p(),_(U,{title:"\u041F\u0440\u043E\u043C\u043E-\u043A\u043E\u0434\u0438"},{header:a(()=>[R]),default:a(()=>[e.value.isLoading?(p(),_(s,{key:0})):g("",!0),e.value.isLoading?g("",!0):(p(),K("div",T,[w(i)("create-promo-codes")?(p(),_(S,{key:0,type:"btn",onClick:F},{default:a(()=>[W]),_:1})):g("",!0),v(j,{onClickLang:$}),v(E,{headings:A,isSlotMode:!0,rows:e.value.data.data},{id:a(({data:o})=>[b("a",{href:"javascript:",onClick:N=>x(o.row.id,o.i)},d(o.row.id),9,Y)]),discount:a(({data:o})=>[l(d(o.row.discount_in_hryvnia?o.row.discount_in_hryvnia+" \u0433\u0440\u043D.":o.row.percent_discount?o.row.percent_discount+"%":null),1)]),published:a(({data:o})=>[l(d(t.$filters.publishedStatus(o.row.published)),1)]),end_date:a(({data:o})=>[l(d(t.$filters.dateFormat(o.row.end_date)),1)]),timestamps:a(({data:o})=>[l(d(t.$filters.dateFormat(o.row.updated_at))+" ",1),q,l(" "+d(t.$filters.dateFormat(o.row.created_at)),1)]),actions:a(({data:o})=>[b("a",{href:"javascript:",onClick:N=>y(o.row.id)},[v(B)],8,G)]),_:1},8,["headings","rows"]),v(P,{pagination:e.value.data,"click-handler":m,modelValue:e.value.currentPage,"onUpdate:modelValue":n[0]||(n[0]=o=>e.value.currentPage=o)},null,8,["pagination","modelValue"]),(p(),_(Q(w(L)),{item:e.value.item,onCloseModal:r,onSubmitForm:D,onDeclineForm:y},null,40,["item"]))]))]),_:1})}}};export{ae as default};
