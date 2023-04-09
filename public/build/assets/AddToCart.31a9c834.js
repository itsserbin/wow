import{i as v,p as i,q as e,x as l,s as n,G as f,C as x,F as p,D as g,B,u as V,E as M,P,aa as z,z as c,H as C,J as b,R as U,v as y}from"./index.1726d409.js";import j from"./BuyIn1ClickModal.7fcf2bd2.js";import{u as N}from"./app.9ecb7889.js";import k from"./Button.8012267c.js";import"./Modal.29022e52.js";import"./Loader.471d868e.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Input.c1a6bdb4.js";import"./InputError.2731f248.js";import"./Label.9918c3e0.js";const $={class:"pt-[5%]"},q=e("hr",{class:"mb-4"},null,-1),D={class:"grid grid-cols-1 md:grid-cols-2 font-subheading"},E={class:"mb-4 mb-md-0 flex items-center justify-evenly flex-col"},S={key:0,class:"text-center"},F={class:"text-lg font-medium text-[#A5A5A5] line-through"},G={class:"font-bold text-[#ff0000] text-4xl"},H={key:1,class:"text-center"},J={class:"text-lg font-bold font-medium text-[#A5A5A5] text-[2.5rem]"},L={class:"grid gap-4"},R=y(" \u0414\u043E \u043A\u043E\u0448\u0438\u043A\u0430 "),K=y(" \u041A\u0443\u043F\u0438\u0442\u0438 \u0432 1 \u043A\u043B\u0456\u043A "),O=e("hr",{class:"mt-4"},null,-1),Q={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 font-subheading"},W={key:0},X=e("div",{class:"w-full mb-2"},"\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0456 \u0440\u043E\u0437\u043C\u0456\u0440\u0438",-1),Y={class:"flex pb-[20px]"},Z={class:"mx-1"},ee=["value","id","onUpdate:modelValue"],te=["for"],oe={key:1},ce=e("div",{class:"w-100 mb-2"},"\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0456 \u043A\u043E\u043B\u044C\u043E\u0440\u0438",-1),se={class:"flex"},de=["id","value","onUpdate:modelValue"],ie=["for"],xe={__name:"AddToCart",props:["product","eventIdAddToCard","eventIdPurchaseIn1Click"],setup(o){const t=o,m=M("$swal"),A=N(),h=P(),{appContext:I}=z(),{$fbq:T}=I.config.globalProperties,s=v({count:1,size:[],color:[],item_id:t.product.id,src:route(route().current(),route().params),event_id:t.eventIdAddToCard}),r=v({product:{id:null,discount_price:null,price:null,h1:null,sizes:[],colors:[]},isActiveBuyIn1ClickModal:!1,isAddToCart:!1});function _(){r.value.isActiveBuyIn1ClickModal=!r.value.isActiveBuyIn1ClickModal}function w(){r.value.isAddToCart||axios.post(route("api.v1.cart.add",s.value)).then(()=>{r.value.isAddToCart=!0;try{T("AddToCart",{value:t.product.discount_price?t.product.discount_price:t.product.price,currency:"UAH",content_type:"product",content_ids:[s.value.item_id],content_name:t.product.h1},s.value.event_id),A.trackEvent({event:"add_product_to_cart",ecommerce:{items:[{item_name:t.product.h1,item_id:s.value.item_id,price:t.product.discount_price?t.product.discount_price:t.product.price,quantity:1}]}})}catch(a){console.log(a)}h.commit("loadCart"),m({icon:"success",title:"\u0422\u043E\u0432\u0430\u0440 \u0434\u043E\u0434\u0430\u043D\u043E \u0434\u043E \u0432\u0430\u0448\u043E\u0433\u043E \u043A\u043E\u0448\u0438\u043A\u0430!",text:"\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 :)",showCancelButton:!0,confirmButtonText:"\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",cancelButtonText:"\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438"}).then(a=>{a.isConfirmed&&(window.location.href=route("checkout"))})}).catch(()=>{m({icon:"error",title:"\u0412\u0438\u043D\u0438\u043A\u043B\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430",text:"\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0456\u0441\u0442\u044C \u0434\u0430\u043D\u043D\u0438\u0445"})})}return(a,re)=>(c(),i(p,null,[e("div",$,[q,e("div",D,[e("div",E,[o.product.discount_price?(c(),i("div",S,[e("div",F,l(o.product.price)+" \u0433\u0440\u043D. ",1),e("div",G,l(o.product.discount_price)+" \u0433\u0440\u043D.",1)])):n("",!0),o.product.discount_price?n("",!0):(c(),i("div",H,[e("div",J,l(o.product.price)+" \u0433\u0440\u043D. ",1)]))]),e("div",L,[f(k,{onClick:w,type:"button"},{default:x(()=>[R]),_:1}),f(k,{onClick:_,type:"button"},{default:x(()=>[K]),_:1})])]),O]),e("div",Q,[o.product.sizes.length?(c(),i("div",W,[X,e("ul",Y,[(c(!0),i(p,null,g(o.product.sizes,d=>(c(),i("li",Z,[C(e("input",{type:"checkbox",value:d.title,id:d.title,class:"hidden peer","onUpdate:modelValue":u=>s.value.size=u},null,8,ee),[[b,s.value.size]]),e("label",{for:d.title,class:"inline-flex justify-center items-center mx-auto text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 w-[40px] h-[40px]"},l(d.title),9,te)]))),256))])])):n("",!0),o.product.colors.length?(c(),i("div",oe,[ce,e("div",se,[(c(!0),i(p,null,g(o.product.colors,d=>(c(),i("div",null,[C(e("input",{type:"checkbox",id:d.name,value:d.name,class:"hidden peer","onUpdate:modelValue":u=>s.value.color=u},null,8,de),[[b,s.value.color]]),e("label",{for:d.name,style:U("background-color:"+d.hex),class:"inline-flex justify-center items-center mx-auto text-black-500 rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600 hover:text-black peer-checked:text-gray-600 hover:bg-black w-[40px] h-[40px]"},null,12,ie)]))),256))])])):n("",!0)]),r.value.isActiveBuyIn1ClickModal?(c(),B(j,{key:0,onCloseModal:_,item:s.value,product:o.product,cart:V(h).state.list,eventIdPurchaseIn1Click:t.eventIdPurchaseIn1Click,eventIdAddToCard:t.eventIdAddToCard,isAddToCart:r.value.isAddToCart},null,8,["item","product","cart","eventIdPurchaseIn1Click","eventIdAddToCard","isAddToCart"])):n("",!0)],64))}};export{xe as default};
