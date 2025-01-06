import{s as n}from"./swal-03cac797.js";import{L as k}from"./Loader-ccf6e4ba.js";import{_ as D}from"./Button-dd1aed97.js";import{_ as C}from"./Paginate-01527c78.js";import L from"./Modal-b9a5c3a9.js";import M from"./OptionsLayout-64f65633.js";import w from"./Table-8850a7b7.js";import{N as b,g as E,k as F,o as V,z as $,l,s as u,y as d,w as v,t as f,x as c,m as P,n as g,a0 as B}from"./index-a01126e2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-e072f216.js";import"./Form-e6e9cee5.js";import"./LangTabs-9cff8ebb.js";import"./Label-20131f4c.js";import"./Input-39294dfa.js";import"./Select-c098c0c0.js";import"./Textarea-cb91500a.js";import"./AuthenticatedLayout-704e8f94.js";import"./index.esm-02fff71f.js";import"./Logo-83ffc10f.js";import"./SidebarItem-446a46b0.js";import"./Table-fe1ca8dd.js";import"./XCircle-3c75bba8.js";const N={key:1},re={__name:"Index",setup(O){const t=b("$can"),m=E({question:{ua:null,ru:null},answer:{ua:null,ru:null},published:0}),e=F({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:m});V(()=>{s(1)});const _=$(()=>e.value.isActiveModal?L:null);function s(a){e.value.isLoading=!0,a&&(e.value.currentPage=a),axios.get(route("api.faqs.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.data,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function p(a){t("destroy-faq")&&n({title:"Видалити?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.faqs.destroy",a)).then(()=>{s(),e.value.isActiveModal&&r(),n({icon:"success",title:"Destroyed!"})}).catch(i=>{console.log(i),n({icon:"error",title:"Error!"})})})}function r(){e.value.isActiveModal=!e.value.isActiveModal}function h(a,o){t("edit-faq")&&axios.get(route("api.faqs.edit",a)).then(({data:i})=>{e.value.item=i.result,e.value.modalAction="edit",e.value.item.index=o,r()}).catch(i=>console.log(i))}function q(){t("edit-faq")&&axios.put(route("api.faqs.update",e.value.item.id),e.value.item).then(()=>{r(),s(),n({title:"Success!",icon:"success"})}).catch(a=>{console.log(a),n({title:"Error!",icon:"error"})})}function y(){t("create-faq")&&axios.post(route("api.faqs.create"),e.value.item).then(()=>{r(),e.value.item=m,s(),n({title:"Success!",icon:"success"})}).catch(a=>{console.log(a),n({title:"Error!",icon:"error"})})}function x(){e.value.modalAction==="edit"&&t("edit-faq")?q():e.value.modalAction==="create"&&t("create-faq")&&y()}function A(){t("create-faq")&&(Object.assign(e.value.item,m),e.value.modalAction="create",r())}return(a,o)=>(l(),u(M,{title:"FAQ"},{header:d(()=>[v(" FAQ ")]),default:d(()=>[e.value.isLoading?(l(),u(k,{key:0})):f("",!0),!e.value.isLoading&&c(t)("show-faq")?(l(),P("div",N,[c(t)("create-faq")?(l(),u(D,{key:0,type:"btn",onClick:A},{default:d(()=>[v(" Додати ")]),_:1})):f("",!0),g(w,{data:e.value.data.data,onOnEdit:h,onOnDestroy:p,canDestroy:c(t)("destroy-faq")},null,8,["data","canDestroy"]),g(C,{pagination:e.value.data,"click-handler":s,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=i=>e.value.currentPage=i)},null,8,["pagination","modelValue"]),(l(),u(B(c(_)),{item:e.value.item,onCloseModal:r,onSubmitForm:x,onDeclineForm:p,canDestroy:c(t)("destroy-faq")},null,40,["item","canDestroy"]))])):f("",!0)]),_:1}))}};export{re as default};