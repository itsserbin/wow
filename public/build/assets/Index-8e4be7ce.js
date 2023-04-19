import{L}from"./Loader-3f12bd2d.js";import{_ as V}from"./Button-18e692de.js";import{_ as B}from"./Paginate-7604e12b.js";import E from"./Modal-c6ba4fd6.js";import P from"./Table-29223efa.js";import b from"./ContentLayout-6476cabf.js";import{s as c}from"./swal-76588f7d.js";import{u as F}from"./vue-i18n.esm-bundler-39f45a4f.js";import{i as N,G as j,r as I,o as O,j as S,p as u,D as m,x as g,A as y,B as _,C as v,t as d,q as U,v as f,l as h,J as q}from"./app-6d1ec759.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Form-b194883d.js";import"./Label-646a10b8.js";import"./Input-335d7e3d.js";import"./Textarea-8cacefaf.js";import"./Select-ffba6ec3.js";import"./LangTabs-75b411e7.js";import"./Editor-b0ed515a.js";import"./Modal-1e77e375.js";import"./Table-d4015883.js";import"./XCircle-0fb660d3.js";import"./AuthenticatedLayout-53775af0.js";import"./index.esm-09a1b1ab.js";import"./Logo-7b0b10d2.js";const p={async fetch(s){try{return(await axios.get(route("api.pages.index",s))).data}catch(a){throw new Error(a.response.data)}},async destroy(s){try{return(await axios.delete(route("api.pages.destroy",s))).data}catch(a){throw new Error(a.response.data)}},async edit(s){try{return(await axios.get(route("api.pages.edit",s))).data}catch(a){throw new Error(a.response.data)}},async update(s){try{return(await axios.put(route("api.pages.update",s.id),s)).data}catch(a){return a.response.data}},async create(s){try{return(await axios.post(route("api.pages.create"),s)).data}catch(a){return a.response.data}}},G={key:1,class:"grid gap-4 grid-cols-1"},J={class:"text-center"},me={__name:"Index",setup(s){const a=N("$can"),{t:o}=F(),x=j({slug:null,published:0,heading:{ru:null,ua:null},h1:{ru:null,ua:null},content:{ru:null,ua:null},meta_title:{ru:null,ua:null},meta_description:{ru:null,ua:null}}),e=I({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",errors:[],item:{}});O(()=>{l(1)});const A=S(()=>e.value.isActiveModal?E:null),l=async t=>{e.value.isLoading=!0,t&&(e.value.currentPage=t);const r=await p.fetch({page:e.value.currentPage});e.value.data=r.success?r.result:[],e.value.isLoading=!1},w=async t=>{if(a("destroy-pages")&&(await c({title:o("swal.sure"),icon:"warning",showCancelButton:!0})).isConfirmed){const{success:n}=await p.destroy(t);n&&(await l(),e.value.isActiveModal&&i(),await c({icon:"success",title:o("swal.destroyed")}))}},i=()=>{e.value.isActiveModal=!e.value.isActiveModal},k=async(t,r)=>{if(a("edit-pages")){const n=await p.edit(t);n.success&&(e.value.item=n.result,e.value.modalAction="edit",e.value.item.index=r,i())}},D=async()=>{if(a("edit-pages")){const t=await p.update(e.value.item);t.success?(i(),await l(),await c({title:o("swal.updated"),icon:"success"})):(e.value.errors=t,console.log(t),await c({title:o("swal.error"),icon:"error",text:o("swal.check_data")}))}},C=async()=>{if(a("create-pages")){const t=await p.create(e.value.item);t.success?(i(),e.value.item={},await l(),await c({title:o("swal.created"),icon:"success"})):(e.value.errors=t,console.log(t),await c({title:o("swal.error"),text:o("swal.check_data"),icon:"error"}))}},$=async()=>{e.value.modalAction==="edit"&&a("edit-pages")?await D():e.value.modalAction==="create"&&a("create-pages")&&await C()},M=()=>{a("create-pages")&&(e.value.item=x,e.value.modalAction="create",i())};return(t,r)=>(u(),m(b,{title:t.$t("pages.page_title")},{header:g(()=>[y(_(t.$t("pages.page_title")),1)]),default:g(()=>[e.value.isLoading?(u(),m(L,{key:0})):v("",!0),!e.value.isLoading&&d(a)("show-pages")?(u(),U("div",G,[f("div",null,[d(a)("create-pages")?(u(),m(V,{key:0,type:"btn",onClick:M},{default:g(()=>[y(_(t.$t("add")),1)]),_:1})):v("",!0)]),f("div",null,[h(P,{data:e.value.data.data,onOnEdit:k,onOnDestroy:w,canDestroy:d(a)("destroy-pages")},null,8,["data","canDestroy"])]),f("div",J,[h(B,{pagination:e.value.data,"click-handler":l,modelValue:e.value.currentPage,"onUpdate:modelValue":r[0]||(r[0]=n=>e.value.currentPage=n)},null,8,["pagination","modelValue"])])])):v("",!0),(u(),m(q(d(A)),{item:e.value.item,onCloseModal:i,onSubmitForm:$,onDeclineForm:w,canDestroy:d(a)("destroy-pages")},null,40,["item","canDestroy"]))]),_:1},8,["title"]))}};export{me as default};
