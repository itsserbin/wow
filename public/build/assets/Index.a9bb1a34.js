import O from"./Modal.8b453198.js";import T from"./OptionsLayout.46107609.js";import{u as y,z as U,D as H,A as I,U as p,R as n,Q as m,W as h,K as z,O as L,J as g,L as _,M as v,Y as u,bb as J,v as b,V as r}from"./_plugin-vue_export-helper.80033396.js";import"./Form.21b12533.js";import"./Sidebar.3b7eddfa.js";import"./app.3d1b1164.js";const K=u(" \u041F\u0435\u0440\u0435\u0432\u0430\u0433\u0438 "),Q={key:1},R=u(" \u0414\u043E\u0434\u0430\u0442\u0438 "),W=["onClick"],Y=["innerHTML"],q=_("hr",{class:"my-1"},null,-1),G=["onClick"],ie={__name:"Index",setup(X){const s=b("$swal"),i=b("$can"),f=y({text:{ua:null,ru:null},icon:null,published:0}),w=b("$defaultLang"),e=U({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:f,activeLang:w});H(()=>{d(1)});const x=I(()=>e.value.isActiveModal?O:null),C=y([{label:"ID",key:"id"},{label:"\u0424\u043E\u0442\u043E",key:"icon"},{label:"\u0422\u0435\u043A\u0441\u0442",key:"text"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",key:"published"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);function M(a){e.value.activeLang=a}function d(a){e.value.isLoading=!0,a&&(e.value.currentPage=a),axios.get(route("api.advantages.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.data,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function k(a){i("destroy-advantages")&&s({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.advantages.destroy",a)).then(()=>{d(),e.value.isActiveModal&&c(),s({icon:"success",title:"Destroyed!"})}).catch(l=>{console.log(l),s({icon:"error",title:"Error!"})})})}function c(){e.value.isActiveModal=!e.value.isActiveModal}function A(a,o){i("edit-advantages")&&axios.get(route("api.advantages.edit",a)).then(({data:l})=>{e.value.item=l.result,e.value.modalAction="edit",e.value.item.index=o,c()}).catch(l=>console.log(l))}function $(){i("edit-advantages")&&axios.put(route("api.advantages.update",e.value.item.id),e.value.item).then(()=>{c(),d(),s({title:"Success!",icon:"success"})}).catch(a=>{console.log(a),s({title:"Error!",icon:"error"})})}function V(){i("create-advantages")&&axios.post(route("api.advantages.create"),e.value.item).then(()=>{c(),e.value.item=f,d(),s({title:"Success!",icon:"success"})}).catch(a=>{console.log(a),s({title:"Error!",icon:"error"})})}function D(){e.value.modalAction==="edit"&&i("edit-advantages")?$():e.value.modalAction==="create"&&i("create-advantages")&&V()}function F(){i("create-advantages")&&(Object.assign(e.value.item,f),e.value.modalAction="create",c())}return(a,o)=>{const l=r("loader-component"),S=r("button-component"),j=r("lang-tabs"),B=r("xcircle-component"),E=r("table-component"),P=r("paginate");return m(),p(T,{title:"\u041F\u0435\u0440\u0435\u0432\u0430\u0433\u0438"},{header:n(()=>[K]),default:n(()=>[e.value.isLoading?(m(),p(l,{key:0})):h("",!0),e.value.isLoading?h("",!0):(m(),z("div",Q,[L(i)("create-advantages")?(m(),p(S,{key:0,type:"btn",onClick:F},{default:n(()=>[R]),_:1})):h("",!0),g(j,{onClickLang:M}),g(E,{headings:C,isSlotMode:!0,rows:e.value.data.data},{id:n(({data:t})=>[_("a",{href:"javascript:",onClick:N=>A(t.row.id,t.i)},v(t.row.id),9,W)]),icon:n(({data:t})=>[_("div",{innerHTML:t.row.icon},null,8,Y)]),text:n(({data:t})=>[u(v(e.value.activeLang==="ua"?t.row.text.ua:e.value.activeLang==="ru"?t.row.text.ru:null),1)]),published:n(({data:t})=>[u(v(a.$filters.publishedStatus(t.row.published)),1)]),timestamps:n(({data:t})=>[u(v(a.$filters.dateFormat(t.row.updated_at))+" ",1),q,u(" "+v(a.$filters.dateFormat(t.row.created_at)),1)]),actions:n(({data:t})=>[_("a",{href:"javascript:",onClick:N=>k(t.row.id)},[g(B)],8,G)]),_:1},8,["headings","rows"]),g(P,{pagination:e.value.data,"click-handler":d,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=t=>e.value.currentPage=t)},null,8,["pagination","modelValue"]),(m(),p(J(L(x)),{item:e.value.item,onCloseModal:c,onSubmitForm:D,onDeclineForm:k},null,40,["item"]))]))]),_:1})}}};export{ie as default};
