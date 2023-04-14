import{L,b as V,j as B}from"./app-b232e098.js";import P from"./Modal-da240772.js";import b from"./Table-8861c2e6.js";import F from"./ContentLayout-3b1e2771.js";import{am as N,a0 as j,g as I,o as O,l as S,A as m,B as g,D as f,y as u,s as _,v as h,q as v,u as d,m as U,p as w,E as x,a9 as q}from"./index-bc3c132c.js";import"./moment-fbc5633a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Logo-3d23fa23.js";import"./Form-d21d8642.js";const p={async fetch(s){try{return(await axios.get(route("api.pages.index",s))).data}catch(a){throw new Error(a.response.data)}},async destroy(s){try{return(await axios.delete(route("api.pages.destroy",s))).data}catch(a){throw new Error(a.response.data)}},async edit(s){try{return(await axios.get(route("api.pages.edit",s))).data}catch(a){throw new Error(a.response.data)}},async update(s){try{return(await axios.put(route("api.pages.update",s.id),s)).data}catch(a){return a.response.data}},async create(s){try{return(await axios.post(route("api.pages.create"),s)).data}catch(a){return a.response.data}}},R={key:1,class:"grid gap-4 grid-cols-1"},T={class:"text-center"},Z={__name:"Index",setup(s){const a=f("$swal"),o=f("$can"),{t:r}=N(),A=j({slug:null,published:0,heading:{ru:null,ua:null},h1:{ru:null,ua:null},content:{ru:null,ua:null},meta_title:{ru:null,ua:null},meta_description:{ru:null,ua:null}}),e=I({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",errors:[],item:{}});O(()=>{l(1)});const k=S(()=>e.value.isActiveModal?P:null),l=async t=>{e.value.isLoading=!0,t&&(e.value.currentPage=t);const n=await p.fetch({page:e.value.currentPage});e.value.data=n.success?n.result:[],e.value.isLoading=!1},y=async t=>{if(o("destroy-pages")&&(await a({title:r("swal.sure"),icon:"warning",showCancelButton:!0})).isConfirmed){const{success:c}=await p.destroy(t);c&&(await l(),e.value.isActiveModal&&i(),await a({icon:"success",title:r("swal.destroyed")}))}},i=()=>{e.value.isActiveModal=!e.value.isActiveModal},D=async(t,n)=>{if(o("edit-pages")){const c=await p.edit(t);c.success&&(e.value.item=c.result,e.value.modalAction="edit",e.value.item.index=n,i())}},$=async()=>{if(o("edit-pages")){const t=await p.update(e.value.item);t.success?(i(),await l(),await a({title:r("swal.updated"),icon:"success"})):(e.value.errors=t,console.log(t),await a({title:r("swal.error"),icon:"error",text:r("swal.check_data")}))}},C=async()=>{if(o("create-pages")){const t=await p.create(e.value.item);t.success?(i(),e.value.item={},await l(),await a({title:r("swal.created"),icon:"success"})):(e.value.errors=t,console.log(t),await a({title:r("swal.error"),text:r("swal.check_data"),icon:"error"}))}},M=async()=>{e.value.modalAction==="edit"&&o("edit-pages")?await $():e.value.modalAction==="create"&&o("create-pages")&&await C()},E=()=>{o("create-pages")&&(e.value.item=A,e.value.modalAction="create",i())};return(t,n)=>(u(),m(F,{title:t.$t("pages.page_title")},{header:g(()=>[_(h(t.$t("pages.page_title")),1)]),default:g(()=>[e.value.isLoading?(u(),m(L,{key:0})):v("",!0),!e.value.isLoading&&d(o)("show-pages")?(u(),U("div",R,[w("div",null,[d(o)("create-pages")?(u(),m(V,{key:0,type:"btn",onClick:E},{default:g(()=>[_(h(t.$t("add")),1)]),_:1})):v("",!0)]),w("div",null,[x(b,{data:e.value.data.data,onOnEdit:D,onOnDestroy:y,canDestroy:d(o)("destroy-pages")},null,8,["data","canDestroy"])]),w("div",T,[x(B,{pagination:e.value.data,"click-handler":l,modelValue:e.value.currentPage,"onUpdate:modelValue":n[0]||(n[0]=c=>e.value.currentPage=c)},null,8,["pagination","modelValue"])])])):v("",!0),(u(),m(q(d(k)),{item:e.value.item,onCloseModal:i,onSubmitForm:M,onDeclineForm:y,canDestroy:d(o)("destroy-pages")},null,40,["item","canDestroy"]))]),_:1},8,["title"]))}};export{Z as default};
