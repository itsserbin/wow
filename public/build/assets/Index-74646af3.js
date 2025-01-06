import T from"./Indicators-586aa4a3.js";import G from"./Modal-cec992eb.js";import H from"./Table-0b6c832e.js";import J from"./CrmLayout-136d2c12.js";import{L as K}from"./Loader-ccf6e4ba.js";import{_ as C,S as D}from"./SidebarItem-446a46b0.js";import{_ as Q}from"./Search-227a9dfe.js";import{_ as W}from"./Paginate-01527c78.js";import X from"./Datepicker-1dfd351e.js";import{C as v}from"./ClientsRepository-8ce9d459.js";import{ae as Y,N as Z,k as h,z as w,o as ee,l as i,s as p,y as n,w as L,v as b,x as f,m as _,p as k,n as r,F as P,q as V,t as u,a0 as te}from"./index-a01126e2.js";import{s as $}from"./swal-03cac797.js";import"./Card-d700085f.js";import"./Modal-e072f216.js";import"./Form-48b1e5c7.js";import"./ItemsTable-06553632.js";import"./Table-fe1ca8dd.js";import"./Label-20131f4c.js";import"./Select-c098c0c0.js";import"./Input-39294dfa.js";import"./Textarea-cb91500a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-10963069.js";import"./XCircle-3c75bba8.js";import"./AuthenticatedLayout-704e8f94.js";import"./index.esm-02fff71f.js";import"./Logo-83ffc10f.js";import"./isDark-c828c264.js";import"./vue-datepicker-3bdc29fb.js";import"./index-2cbe9ca3.js";import"./index-7a810988.js";const ae={key:0},se={class:"grid grid-cols-1 md:grid-cols-5 gap-4"},oe={class:"md:col-span-1"},ie={class:"md:col-span-4"},le={key:1,class:"w-full grid grid-cols-1 gap-4"},re={class:"text-center"},je={__name:"Index",props:["statuses","subStatuses","orderStatuses"],setup(c){const A=c,{t:d}=Y(),m=Z("$can"),g=h([]),x=[{title:d("clients.export"),key:"export"}],t=h({data:[],indicators:{},isLoading:!0,isActiveEditModal:!1,sidebarActive:"all",modal:{}}),s=h({status:null,currentPage:1,orderBy:{key:null,val:null},date:[]}),M=w(()=>{if(s.value.date.length===2)return{date_start:s.value.date[0].toLocaleDateString(),date_end:s.value.date[1].toLocaleDateString()}}),E=w(()=>{const{currentPage:e,status:o=null,orderBy:a=null}=s.value;return{page:e,status:o,orderBy:a,...M.value}}),F=(e,o)=>{s.value.orderBy={key:e,val:o},s.value.currentPage=1,l()};ee(()=>{l(),g.value.push({title:d("clients.all_clients"),key:"all"});for(const[e,o]of Object.entries(A.statuses))g.value.push({title:o,key:e});route().params.id&&(t.value.isLoading=!0,B(route().params.id))});const N=w(()=>t.value.isActiveEditModal?G:null),O=e=>{e==="export"&&(window.location.href=route("admin.crm.clients.export"))},U=async e=>{t.value.isLoading=!0;const o=await v.search(e);o.success&&(t.value.sidebarActive=null,s.value.currentPage=1,t.value.data=o.result,t.value.isLoading=!1),t.value.isLoading=!1},j=e=>{t.value.sidebarActive=e,s.value.status=e==="all"?null:e,s.value.date=[],s.value.currentPage=1,l()},z=async()=>{s.value.currentPage=1,await l()},I=async e=>{e&&(s.value.currentPage=e),await l()},l=async()=>{t.value.isLoading=!0;const e=await v.fetch(E.value);e.success&&(t.value.indicators=e.indicators,t.value.data=e.result,t.value.isLoading=!1)},S=async e=>{if(m("destroy-clients")&&(await $({title:d("swal.sure"),icon:"warning",showCancelButton:!0})).isConfirmed){const{success:a}=await v.destroy(e);a&&(t.value.isLoading=!1,await l(),t.value.isActiveEditModal&&y(),$({title:d("swal.destroyed"),icon:"success"}))}},B=async(e,o)=>{t.value.isLoading=!0;const a=await v.edit(e);a.success&&(t.value.modal.index=o,t.value.modal=a.result,y(),t.value.isLoading=!1)},R=async()=>{(await v.update(t.value.modal)).success&&(y(),await l(),$({title:d("swal.updated"),icon:"success"}))},y=()=>{t.value.isActiveEditModal=!t.value.isActiveEditModal};return(e,o)=>(i(),p(J,{title:e.$t("clients.page_title")},{header:n(()=>[L(b(e.$t("clients.page_title")),1)]),default:n(()=>[f(m)("show-clients")?(i(),_("div",ae,[k("div",se,[k("div",oe,[r(D,{class:"mb-5"},{default:n(()=>[g.value.length?(i(!0),_(P,{key:0},V(g.value,a=>(i(),p(C,{onClick:q=>j(a.key),active:t.value.sidebarActive===a.key},{default:n(()=>[L(b(a.title),1)]),_:2},1032,["onClick","active"]))),256)):u("",!0)]),_:1}),f(m)("export-orders")?(i(),p(D,{key:0},{default:n(()=>[x.length?(i(),_(P,{key:0},V(x,a=>r(C,{onClick:q=>O(a.key)},{default:n(()=>[L(b(a.title),1)]),_:2},1032,["onClick"])),64)):u("",!0)]),_:1})):u("",!0)]),k("div",ie,[t.value.isLoading?(i(),p(K,{key:0})):u("",!0),t.value.isLoading?u("",!0):(i(),_("div",le,[r(X,{modelValue:s.value.date,"onUpdate:modelValue":[o[0]||(o[0]=a=>s.value.date=a),z]},null,8,["modelValue"]),r(T,{data:t.value.indicators},null,8,["data"]),r(Q,{onSearch:U,clear:!0,placeholder:e.$t("clients.search_placeholder")},null,8,["placeholder"]),r(H,{data:t.value.data.data,onOnEdit:B,onOnDestroy:S,onOrderBy:F,statuses:c.statuses,canDestroy:f(m)("destroy-clients")},null,8,["data","statuses","canDestroy"]),k("div",re,[r(W,{pagination:t.value.data,"click-handler":I,modelValue:s.value.currentPage,"onUpdate:modelValue":o[1]||(o[1]=a=>s.value.currentPage=a)},null,8,["pagination","modelValue"])])]))])]),(i(),p(te(f(N)),{item:t.value.modal,statuses:c.statuses,"sub-statuses":c.subStatuses,"order-statuses":c.orderStatuses,size:"extralarge",onCloseModal:y,onDeclineForm:S,onSubmitForm:R,canDestroy:f(m)("destroy-clients")},null,40,["item","statuses","sub-statuses","order-statuses","canDestroy"]))])):u("",!0)]),_:1},8,["title"]))}};export{je as default};