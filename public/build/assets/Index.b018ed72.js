import O from"./Modal.8adb93d8.js";import I from"./OptionsLayout.3f67aa03.js";import{v as k,A as U,G,B as K,V as _,S as a,R as p,_ as g,L as R,P as w,K as v,M as b,O as d,Y as l,bc as T,x as h,X as u}from"./moment.fb372146.js";import"./Form.c3d4ed24.js";const X=l(" \u041F\u0440\u043E\u043C\u043E-\u043A\u043E\u0434\u0438 "),Y={key:1},q=l(" \u0414\u043E\u0434\u0430\u0442\u0438 "),z=["onClick"],H=b("hr",{class:"my-1"},null,-1),J=["onClick"],te={__name:"Index",setup(Q){const c=h("$swal"),i=h("$can"),f=k({code:null,percent_discount:null,discount_in_hryvnia:null,end_date:null,published:0}),C=h("$defaultLang"),e=U({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:f,activeLang:C});G(()=>{m(1)});const L=K(()=>e.value.isActiveModal?O:null),x=k([{label:"ID",key:"id"},{label:"\u041A\u043E\u0434",key:"code"},{label:"\u0417\u043D\u0438\u0436\u043A\u0430",key:"discount"},{label:"\u041A\u0456\u043D\u0446\u0435\u0432\u0430 \u0434\u0430\u0442\u0430",key:"end_date"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457",key:"published"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);function A(t){e.value.activeLang=t}function m(t){e.value.isLoading=!0,t&&(e.value.currentPage=t),axios.get(route("api.promo-codes.index",{page:e.value.currentPage})).then(n=>{Object.assign(e.value.data,n.data.result),e.value.isLoading=!1}).catch(n=>{console.log(n),e.value.isLoading=!1})}function y(t){i("destroy-promo-codes")&&c({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(n=>{n.isConfirmed&&axios.delete(route("api.promo-codes.destroy",t)).then(()=>{m(),e.value.isActiveModal&&r(),c({icon:"success",title:"Destroyed!"})}).catch(s=>{console.log(s),c({icon:"error",title:"Error!"})})})}function r(){e.value.isActiveModal=!e.value.isActiveModal}function $(t,n){i("edit-promo-codes")&&axios.get(route("api.promo-codes.edit",t)).then(({data:s})=>{e.value.item=s.result,e.value.modalAction="edit",e.value.item.index=n,r()}).catch(s=>console.log(s))}function M(){i("edit-promo-codes")&&axios.put(route("api.promo-codes.update",e.value.item.id),e.value.item).then(()=>{r(),m(),c({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),c({title:"Error!",icon:"error"})})}function V(){i("create-promo-codes")&&axios.post(route("api.promo-codes.create"),e.value.item).then(()=>{r(),e.value.item=f,m(),c({title:"Success!",icon:"success"})}).catch(t=>{console.log(t),c({title:"Error!",icon:"error"})})}function F(){e.value.modalAction==="edit"&&i("edit-promo-codes")?M():e.value.modalAction==="create"&&i("create-promo-codes")&&V()}function S(){i("create-promo-codes")&&(Object.assign(e.value.item,f),e.value.modalAction="create",r())}return(t,n)=>{const s=u("loader-component"),B=u("button-component"),D=u("lang-tabs"),P=u("xcircle-component"),j=u("table-component"),E=u("paginate");return p(),_(I,{title:"\u041F\u0440\u043E\u043C\u043E-\u043A\u043E\u0434\u0438"},{header:a(()=>[X]),default:a(()=>[e.value.isLoading?(p(),_(s,{key:0})):g("",!0),e.value.isLoading?g("",!0):(p(),R("div",Y,[w(i)("create-promo-codes")?(p(),_(B,{key:0,type:"btn",onClick:S},{default:a(()=>[q]),_:1})):g("",!0),v(D,{onClickLang:A}),v(j,{headings:x,isSlotMode:!0,rows:e.value.data.data},{id:a(({data:o})=>[b("a",{href:"javascript:",onClick:N=>$(o.row.id,o.i)},d(o.row.id),9,z)]),discount:a(({data:o})=>[l(d(o.row.discount_in_hryvnia?o.row.discount_in_hryvnia+" \u0433\u0440\u043D.":o.row.percent_discount?o.row.percent_discount+"%":null),1)]),published:a(({data:o})=>[l(d(t.$filters.publishedStatus(o.row.published)),1)]),end_date:a(({data:o})=>[l(d(t.$filters.dateFormat(o.row.end_date)),1)]),timestamps:a(({data:o})=>[l(d(t.$filters.dateFormat(o.row.updated_at))+" ",1),H,l(" "+d(t.$filters.dateFormat(o.row.created_at)),1)]),actions:a(({data:o})=>[b("a",{href:"javascript:",onClick:N=>y(o.row.id)},[v(P)],8,J)]),_:1},8,["headings","rows"]),v(E,{pagination:e.value.data,"click-handler":m,modelValue:e.value.currentPage,"onUpdate:modelValue":n[0]||(n[0]=o=>e.value.currentPage=o)},null,8,["pagination","modelValue"]),(p(),_(T(w(L)),{item:e.value.item,onCloseModal:r,onSubmitForm:F,onDeclineForm:y},null,40,["item"]))]))]),_:1})}}};export{te as default};
