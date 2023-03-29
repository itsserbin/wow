import H from"./Indicators.aee6f6d8.js";import Q from"./Modal.c0c5b943.js";import T from"./Table.cee5abed.js";import J from"./CrmLayout.d387f7f9.js";import{t as C,S as D,j as K,q as W,k as X}from"./app.ccd83b47.js";import{_ as Y}from"./Datepicker.49312eac.js";import{C as m}from"./ClientsRepository.843bcbc3.js";import{bU as Z,w,x as L,S as ee,Q as f,O as r,U as P,F as o,P as b,A as $,B as g,y as _,z as k,M as i,H as A,I as M,G as u,a7 as ae}from"./moment.791e2419.js";import"./Form.b6a1cbb2.js";import"./ItemsTable.3cb3ce73.js";import"./index.02b5b7d6.js";const te={key:0},se={class:"grid grid-cols-1 md:grid-cols-5 gap-4"},le={class:"md:col-span-1"},oe={class:"md:col-span-4"},ne={key:1,class:"w-full grid grid-cols-1 gap-4"},ie={class:"text-center"},ke={__name:"Index",props:["statuses","subStatuses","orderStatuses"],setup(c){const V=c,{t:d}=Z(),h=P("$swal"),v=P("$can"),y=w([]),S=[{title:d("clients.export"),key:"export"}],a=w({data:[],indicators:{},isLoading:!0,isActiveEditModal:!1,sidebarActive:"all",modal:{}}),s=w({status:null,currentPage:1,orderBy:{key:null,val:null},date:[]}),E=L(()=>{if(s.value.date.length===2)return{date_start:s.value.date[0].toLocaleDateString(),date_end:s.value.date[1].toLocaleDateString()}}),F=L(()=>{const{currentPage:e,status:l=null,orderBy:t=null}=s.value;return{page:e,status:l,orderBy:t,...E.value}}),O=(e,l)=>{s.value.orderBy={key:e,val:l},s.value.currentPage=1,n()};ee(()=>{n(),y.value.push({title:d("clients.all_clients"),key:"all"});for(const[e,l]of Object.entries(V.statuses))y.value.push({title:l,key:e});route().params.id&&(a.value.isLoading=!0,B(route().params.id))});const U=L(()=>a.value.isActiveEditModal?Q:null),N=e=>{e==="export"&&(window.location.href=route("admin.crm.clients.export"))},j=async e=>{a.value.isLoading=!0;const l=await m.search(e);l.success&&(a.value.sidebarActive=null,s.value.currentPage=1,a.value.data=l.result,a.value.isLoading=!1),a.value.isLoading=!1},I=e=>{a.value.sidebarActive=e,s.value.status=e==="all"?null:e,s.value.date=[],s.value.currentPage=1,n()},z=async()=>{s.value.currentPage=1,await n()},R=async e=>{e&&(s.value.currentPage=e),await n()},n=async()=>{a.value.isLoading=!0;const e=await m.fetch(F.value);e.success&&(a.value.indicators=e.indicators,a.value.data=e.result,a.value.isLoading=!1)},x=async e=>{if(v("destroy-clients")&&(await h({title:d("swal.sure"),icon:"warning",showCancelButton:!0})).isConfirmed){const{success:t}=await m.destroy(e);t&&(a.value.isLoading=!1,await n(),a.value.isActiveEditModal&&p(),h({title:d("swal.destroyed"),icon:"success"}))}},B=async(e,l)=>{a.value.isLoading=!0;const t=await m.edit(e);t.success&&(a.value.modal.index=l,a.value.modal=t.result,p(),a.value.isLoading=!1)},q=async()=>{(await m.update(a.value.modal)).success&&(p(),await n(),h({title:d("swal.updated"),icon:"success"}))},p=()=>{a.value.isActiveEditModal=!a.value.isActiveEditModal};return(e,l)=>(o(),f(J,{title:e.$t("clients.page_title")},{header:r(()=>[b($(e.$t("clients.page_title")),1)]),default:r(()=>[g(v)("show-clients")?(o(),_("div",te,[k("div",se,[k("div",le,[i(D,{class:"mb-5"},{default:r(()=>[y.value.length?(o(!0),_(A,{key:0},M(y.value,t=>(o(),f(C,{onClick:G=>I(t.key),active:a.value.sidebarActive===t.key},{default:r(()=>[b($(t.title),1)]),_:2},1032,["onClick","active"]))),256)):u("",!0)]),_:1}),g(v)("export-orders")?(o(),f(D,{key:0},{default:r(()=>[S.length?(o(),_(A,{key:0},M(S,t=>i(C,{onClick:G=>N(t.key)},{default:r(()=>[b($(t.title),1)]),_:2},1032,["onClick"])),64)):u("",!0)]),_:1})):u("",!0)]),k("div",oe,[a.value.isLoading?(o(),f(K,{key:0})):u("",!0),a.value.isLoading?u("",!0):(o(),_("div",ne,[i(Y,{modelValue:s.value.date,"onUpdate:modelValue":[l[0]||(l[0]=t=>s.value.date=t),z]},null,8,["modelValue"]),i(H,{data:a.value.indicators},null,8,["data"]),i(W,{onSearch:j,clear:!0,placeholder:e.$t("clients.search_placeholder")},null,8,["placeholder"]),i(T,{data:a.value.data.data,onOnEdit:B,onOnDestroy:x,onOrderBy:O,statuses:c.statuses,canDestroy:g(v)("destroy-clients")},null,8,["data","statuses","canDestroy"]),k("div",ie,[i(X,{pagination:a.value.data,"click-handler":R,modelValue:s.value.currentPage,"onUpdate:modelValue":l[1]||(l[1]=t=>s.value.currentPage=t)},null,8,["pagination","modelValue"])])]))])]),(o(),f(ae(g(U)),{item:a.value.modal,statuses:c.statuses,"sub-statuses":c.subStatuses,"order-statuses":c.orderStatuses,size:"extralarge",onCloseModal:p,onDeclineForm:x,onSubmitForm:q,canDestroy:g(v)("destroy-clients")},null,40,["item","statuses","sub-statuses","order-statuses","canDestroy"]))])):u("",!0)]),_:1},8,["title"]))}};export{ke as default};
