import{s as r}from"./swal-76588f7d.js";import{L}from"./Loader-3f12bd2d.js";import{_ as M}from"./Paginate-7604e12b.js";import{_ as w}from"./Button-18e692de.js";import E from"./Modal-0d97b051.js";import V from"./OptionsLayout-f068739f.js";import $ from"./Table-d179c69e.js";import{i as F,G as O,r as P,o as j,j as B,p as u,D as m,x as f,A as g,C as v,t as c,q as I,l as _,J as N}from"./app-6d1ec759.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-1e77e375.js";import"./Form-db93da5e.js";import"./UploadBannersInput-037e7acc.js";import"./ImageCard-f6ab6853.js";import"./XCircle-0fb660d3.js";import"./Input-335d7e3d.js";import"./Label-646a10b8.js";import"./Select-ffba6ec3.js";import"./LangTabs-75b411e7.js";import"./Multiselect-55904e29.js";import"./AuthenticatedLayout-53775af0.js";import"./index.esm-09a1b1ab.js";import"./Logo-7b0b10d2.js";import"./vue-i18n.esm-bundler-39f45a4f.js";import"./SidebarItem-9941fa54.js";import"./Table-d4015883.js";const S={key:1},de={__name:"Index",setup(U){const i=F("$can"),d=O({title:{ua:null,ru:null},image_mobile:{ua:null,ru:null},image_table:{ua:null,ru:null},image_desktop:{ua:null,ru:null},link:{ua:null,ru:null},published:0,categories:[]}),e=P({data:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:d});j(()=>{s(1)});const h=B(()=>e.value.isActiveModal?E:null);function s(o){e.value.isLoading=!0,o&&(e.value.currentPage=o),axios.get(route("api.banners.index",{page:e.value.currentPage})).then(t=>{Object.assign(e.value.data,t.data.result),e.value.isLoading=!1}).catch(t=>{console.log(t),e.value.isLoading=!1})}function b(o){i("destroy-banners")&&r({title:"Видалити?",icon:"warning",showCancelButton:!0}).then(t=>{t.isConfirmed&&axios.delete(route("api.banners.destroy",o)).then(()=>{s(),e.value.isActiveModal&&l(),r({icon:"success",title:"Destroyed!"})}).catch(a=>{console.log(a),r({icon:"error",title:"Error!"})})})}function l(){e.value.isActiveModal=!e.value.isActiveModal}function y(o,t){i("edit-banners")&&axios.get(route("api.banners.edit",o)).then(({data:a})=>{e.value.item=a.result,e.value.modalAction="edit",e.value.item.index=t,l()}).catch(a=>console.log(a))}function x(){i("edit-banners")&&axios.put(route("api.banners.update",e.value.item.id),e.value.item).then(()=>{l(),s(),r({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),r({title:"Error!",icon:"error"})})}function k(){i("create-banners")&&axios.post(route("api.banners.create"),e.value.item).then(()=>{l(),e.value.item=d,s(),r({title:"Success!",icon:"success"})}).catch(o=>{console.log(o),r({title:"Error!",icon:"error"})})}function D(){e.value.modalAction==="edit"&&i("edit-banners")?x():e.value.modalAction==="create"&&i("create-banners")&&k()}function A(){i("create-banners")&&(Object.assign(e.value.item,d),e.value.modalAction="create",l())}function C(o,t,a){let p=new FormData;p.append("type",t),p.append("banner",o),axios.post(route("api.banners.upload"),p,{headers:{"Content-Type":"multipart/form-data"}}).then(({data:n})=>{t==="mobile"&&(a==="ru"&&(e.value.item.image_mobile.ru=n.result),a==="ua"&&(e.value.item.image_mobile.ua=n.result)),t==="table"&&(a==="ru"&&(e.value.item.image_table.ru=n.result),a==="ua"&&(e.value.item.image_table.ua=n.result)),t==="desktop"&&(a==="ru"&&(e.value.item.image_desktop.ru=n.result),a==="ua"&&(e.value.item.image_desktop.ua=n.result))}).catch(n=>console.log(n))}return(o,t)=>(u(),m(V,{title:"Банера"},{header:f(()=>[g(" Банера ")]),default:f(()=>[e.value.isLoading?(u(),m(L,{key:0})):v("",!0),!e.value.isLoading&&c(i)("show-banners")?(u(),I("div",S,[c(i)("create-banners")?(u(),m(w,{key:0,type:"btn",onClick:A},{default:f(()=>[g(" Додати ")]),_:1})):v("",!0),_($,{data:e.value.data.data,onOnEdit:y,onOnDestroy:b,canDestroy:c(i)("destroy-banners")},null,8,["data","canDestroy"]),_(M,{pagination:e.value.data,"click-handler":s,modelValue:e.value.currentPage,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value.currentPage=a)},null,8,["pagination","modelValue"]),(u(),m(N(c(h)),{item:e.value.item,onCloseModal:l,onSubmitForm:D,onDeclineForm:b,onOnUploadImage:C,canDestroy:c(i)("destroy-banners")},null,40,["item","canDestroy"]))])):v("",!0)]),_:1}))}};export{de as default};
