import{j as V,b,k as B}from"./app.ccd83b47.js";import E from"./Modal.73f3d3f4.js";import L from"./Table.4b5f520b.js";import F from"./ContentLayout.dd1a7f73.js";import{bU as N,az as U,w as O,S,x as j,Q as m,O as g,U as f,F as u,P as _,A as h,G as w,B as d,y as z,z as v,M as x,a7 as I}from"./moment.791e2419.js";import"./Form.a29c5a77.js";const p={async fetch(s){try{return(await axios.get(route("api.pages.index",s))).data}catch(a){throw new Error(a.response.data)}},async destroy(s){try{return(await axios.delete(route("api.pages.destroy",s))).data}catch(a){throw new Error(a.response.data)}},async edit(s){try{return(await axios.get(route("api.pages.edit",s))).data}catch(a){throw new Error(a.response.data)}},async update(s){try{return(await axios.put(route("api.pages.update",s.id),s)).data}catch(a){return a.response.data}},async create(s){try{return(await axios.post(route("api.pages.create"),s)).data}catch(a){return a.response.data}}},G={key:1,class:"grid gap-4 grid-cols-1"},Q={class:"text-center"},W={__name:"Index",setup(s){const a=f("$swal"),o=f("$can"),{t:r}=N(),k=U({slug:null,published:0,heading:{ru:null,ua:null},h1:{ru:null,ua:null},content:{ru:null,ua:null},meta_title:{ru:null,ua:null},meta_description:{ru:null,ua:null}}),e=O({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",errors:[],item:{}});S(()=>{l(1)});const A=j(()=>e.value.isActiveModal?E:null),l=async t=>{e.value.isLoading=!0,t&&(e.value.currentPage=t);const n=await p.fetch({page:e.value.currentPage});e.value.data=n.success?n.result:[],e.value.isLoading=!1},y=async t=>{if(o("destroy-pages")&&(await a({title:r("swal.sure"),icon:"warning",showCancelButton:!0})).isConfirmed){const{success:c}=await p.destroy(t);c&&(await l(),e.value.isActiveModal&&i(),await a({icon:"success",title:r("swal.destroyed")}))}},i=()=>{e.value.isActiveModal=!e.value.isActiveModal},$=async(t,n)=>{if(o("edit-pages")){const c=await p.edit(t);c.success&&(e.value.item=c.result,e.value.modalAction="edit",e.value.item.index=n,i())}},D=async()=>{if(o("edit-pages")){const t=await p.update(e.value.item);t.success?(i(),await l(),await a({title:r("swal.updated"),icon:"success"})):(e.value.errors=t,console.log(t),await a({title:r("swal.error"),icon:"error",text:r("swal.check_data")}))}},M=async()=>{if(o("create-pages")){const t=await p.create(e.value.item);t.success?(i(),e.value.item={},await l(),await a({title:r("swal.created"),icon:"success"})):(e.value.errors=t,console.log(t),await a({title:r("swal.error"),text:r("swal.check_data"),icon:"error"}))}},C=async()=>{e.value.modalAction==="edit"&&o("edit-pages")?await D():e.value.modalAction==="create"&&o("create-pages")&&await M()},P=()=>{o("create-pages")&&(e.value.item=k,e.value.modalAction="create",i())};return(t,n)=>(u(),m(F,{title:t.$t("pages.page_title")},{header:g(()=>[_(h(t.$t("pages.page_title")),1)]),default:g(()=>[e.value.isLoading?(u(),m(V,{key:0})):w("",!0),!e.value.isLoading&&d(o)("show-pages")?(u(),z("div",G,[v("div",null,[d(o)("create-pages")?(u(),m(b,{key:0,type:"btn",onClick:P},{default:g(()=>[_(h(t.$t("add")),1)]),_:1})):w("",!0)]),v("div",null,[x(L,{data:e.value.data.data,onOnEdit:$,onOnDestroy:y,canDestroy:d(o)("destroy-pages")},null,8,["data","canDestroy"])]),v("div",Q,[x(B,{pagination:e.value.data,"click-handler":l,modelValue:e.value.currentPage,"onUpdate:modelValue":n[0]||(n[0]=c=>e.value.currentPage=c)},null,8,["pagination","modelValue"])])])):w("",!0),(u(),m(I(d(A)),{item:e.value.item,onCloseModal:i,onSubmitForm:C,onDeclineForm:y,canDestroy:d(o)("destroy-pages")},null,40,["item","canDestroy"]))]),_:1},8,["title"]))}};export{W as default};
