import U from"./Modal.26411d16.js";import{u as w,z as I,D as z,A as J,U as v,R as i,V as s,Q as d,W as f,K,O as y,J as _,L as g,M as m,Y as p,bb as Q,v as h}from"./_plugin-vue_export-helper.80033396.js";import"./Form.28f74a7e.js";const R=p(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 "),T={key:1},W=p(" \u0414\u043E\u0434\u0430\u0442\u0438 "),Y=["onClick"],q=["src","alt"],G={href:"javascript:"},H=g("hr",{class:"my-1"},null,-1),X=["onClick"],oe={__name:"Index",setup(Z){const l=h("$swal"),n=h("$can"),k=h("$defaultLang"),L=w({published:0,slug:null,parent_id:null,preview:null,title:{ru:null,ua:null},meta_title:{ru:null,ua:null},meta_description:{ru:null,ua:null},meta_keyword:{ru:null,ua:null},seo_text:{ru:null,ua:null}}),e=I({categories:[],currentPage:1,isLoading:!0,isActiveModal:!1,modalAction:"",item:{},activeLang:k});z(()=>{u(1)});function C(a){e.value.activeLang=a}const x=J(()=>e.value.isActiveModal?U:null),A=w([{label:"ID",key:"id"},{label:"\u0413\u043E\u043B\u043E\u0432\u043D\u0435 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",key:"preview"},{label:"\u041D\u0430\u0437\u0432\u0430",key:"title"},{label:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457",key:"published"},{label:"\u0411\u0430\u0442\u044C\u043A\u0456\u0432\u0441\u044C\u043A\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F",key:"parent_id"},{label:"\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F",key:"sort"},{label:"\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",key:"timestamps"},{label:"#",key:"actions"}]);function u(a){e.value.isLoading=!0,a&&(e.value.currentPage=a),axios.get(route("api.categories.index",{page:e.value.currentPage})).then(o=>{Object.assign(e.value.categories,o.data.result),e.value.isLoading=!1}).catch(o=>{console.log(o),e.value.isLoading=!1})}function b(a){n("destroy-categories")&&l({title:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438?",icon:"warning",showCancelButton:!0}).then(o=>{o.isConfirmed&&axios.delete(route("api.categories.destroy",a)).then(()=>{u(),e.value.isActiveModal&&r(),l({icon:"success",title:"Destroyed!"})}).catch(c=>{console.log(c),l({icon:"error",title:"Error!"})})})}function r(){e.value.isActiveModal=!e.value.isActiveModal}function M(a,o){n("edit-categories")&&axios.get(route("api.categories.edit",a)).then(({data:c})=>{e.value.item=c.result,e.value.modalAction="edit",e.value.item.index=o,r()}).catch(c=>console.log(c))}function $(){n("edit-categories")&&axios.put(route("api.categories.update",e.value.item.id),e.value.item).then(()=>{r(),u(),l({title:"Success!",icon:"success"})}).catch(a=>{console.log(a),l({title:"Error!",icon:"error"})})}function V(){n("create-categories")&&axios.post(route("api.categories.create"),e.value.item).then(({data:a})=>{r(),e.value.item={},u(),l({title:"Success!",icon:"success"})}).catch(a=>{console.log(a),l({title:"Error!",icon:"error"})})}function D(){e.value.modalAction==="edit"&&n("edit-categories")?$():e.value.modalAction==="create"&&n("create-categories")&&V()}function j(){n("create-categories")&&(Object.assign(e.value.item,L),e.value.modalAction="create",r())}return(a,o)=>{const c=s("loader-component"),F=s("button-component"),S=s("lang-tabs"),B=s("xcircle-component"),E=s("table-component"),P=s("paginate"),N=s("auth-layout");return d(),v(N,{title:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457"},{header:i(()=>[R]),default:i(()=>[e.value.isLoading?(d(),v(c,{key:0})):f("",!0),e.value.isLoading?f("",!0):(d(),K("div",T,[y(n)("create-products")?(d(),v(F,{key:0,type:"btn",onClick:j},{default:i(()=>[W]),_:1})):f("",!0),_(S,{onClickLang:C}),_(E,{headings:A,isSlotMode:!0,rows:e.value.categories.data},{id:i(({data:t})=>[g("a",{href:"javascript:",onClick:O=>M(t.row.id,t.i)},m(t.row.id),9,Y)]),preview:i(({data:t})=>[g("img",{src:"/storage/images/55/"+t.row.preview,alt:e.value.activeLang==="ua"?t.row.title.ua:e.value.activeLang==="ru"?t.row.title.ru:"-",class:"mx-auto"},null,8,q)]),title:i(({data:t})=>[g("a",G,m(e.value.activeLang==="ua"?t.row.title.ua:e.value.activeLang==="ru"?t.row.title.ru:"-"),1)]),published:i(({data:t})=>[p(m(a.$filters.publishedStatus(t.row.published)),1)]),timestamps:i(({data:t})=>[p(m(a.$filters.dateFormat(t.row.updated_at))+" ",1),H,p(" "+m(a.$filters.dateFormat(t.row.created_at)),1)]),actions:i(({data:t})=>[g("a",{href:"javascript:",onClick:O=>b(t.row.id)},[_(B)],8,X)]),_:1},8,["headings","rows"]),_(P,{pagination:e.value.categories,"click-handler":u,modelValue:e.value.currentPage,"onUpdate:modelValue":o[0]||(o[0]=t=>e.value.currentPage=t)},null,8,["pagination","modelValue"]),(d(),v(Q(y(x)),{item:e.value.item,onCloseModal:r,onSubmitForm:D,onDeclineForm:b},null,40,["item"]))]))]),_:1})}}};export{oe as default};
