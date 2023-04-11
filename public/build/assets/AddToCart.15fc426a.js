import{p as v,g as i,i as e,t as l,j as n,x,w as f,F as p,s as g,m as B,u as V,v as M,E as j,Z as z,o as c,y as b,z as C,G as P,k as y,aa as U}from"./vendor.693a237b.js";import N from"./BuyIn1ClickModal.da237d97.js";import k from"./Button.32a11ad1.js";import"./__commonjsHelpers__.488ed5c2.js";import"./Modal.9f40d69c.js";import"./Loader.19991d38.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Input.55f71efd.js";import"./InputError.92315e23.js";import"./Label.2d871761.js";const $={class:"pt-[5%]"},E=e("hr",{class:"mb-4"},null,-1),S={class:"grid grid-cols-1 md:grid-cols-2 font-subheading"},q={class:"mb-4 mb-md-0 flex items-center justify-evenly flex-col"},D={key:0,class:"text-center"},F={class:"text-lg font-medium text-[#A5A5A5] line-through"},G={class:"font-bold text-[#ff0000] text-4xl"},H={key:1,class:"text-center"},L={class:"text-lg font-bold font-medium text-[#A5A5A5] text-[2.5rem]"},Z={class:"grid gap-4"},J=y(" \u0414\u043E \u043A\u043E\u0448\u0438\u043A\u0430 "),K=y(" \u041A\u0443\u043F\u0438\u0442\u0438 \u0432 1 \u043A\u043B\u0456\u043A "),O=e("hr",{class:"mt-4"},null,-1),Q={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 font-subheading"},R={key:0},W=e("div",{class:"w-full mb-2"},"\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0456 \u0440\u043E\u0437\u043C\u0456\u0440\u0438",-1),X={class:"flex pb-[20px]"},Y={class:"mx-1"},ee=["value","id","onUpdate:modelValue"],te=["for"],oe={key:1},ce=e("div",{class:"w-100 mb-2"},"\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0456 \u043A\u043E\u043B\u044C\u043E\u0440\u0438",-1),se={class:"flex"},de=["id","value","onUpdate:modelValue"],ie=["for"],fe={__name:"AddToCart",props:["product","eventIdAddToCard","eventIdPurchaseIn1Click"],setup(o){const t=o,m=M("$swal"),A=U(),h=j(),{appContext:I}=z(),{$fbq:T}=I.config.globalProperties,s=v({count:1,size:[],color:[],item_id:t.product.id,src:route(route().current(),route().params),event_id:t.eventIdAddToCard}),r=v({product:{id:null,discount_price:null,price:null,h1:null,sizes:[],colors:[]},isActiveBuyIn1ClickModal:!1,isAddToCart:!1});function _(){r.value.isActiveBuyIn1ClickModal=!r.value.isActiveBuyIn1ClickModal}function w(){r.value.isAddToCart||axios.post(route("api.v1.cart.add",s.value)).then(()=>{r.value.isAddToCart=!0;try{T("AddToCart",{value:t.product.discount_price?t.product.discount_price:t.product.price,currency:"UAH",content_type:"product",content_ids:[s.value.item_id],content_name:t.product.h1},s.value.event_id),A.trackEvent({event:"add_product_to_cart",ecommerce:{items:[{item_name:t.product.h1,item_id:s.value.item_id,price:t.product.discount_price?t.product.discount_price:t.product.price,quantity:1}]}})}catch(a){console.log(a)}h.commit("loadCart"),m({icon:"success",title:"\u0422\u043E\u0432\u0430\u0440 \u0434\u043E\u0434\u0430\u043D\u043E \u0434\u043E \u0432\u0430\u0448\u043E\u0433\u043E \u043A\u043E\u0448\u0438\u043A\u0430!",text:"\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 :)",showCancelButton:!0,confirmButtonText:"\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",cancelButtonText:"\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438"}).then(a=>{a.isConfirmed&&(window.location.href=route("checkout"))})}).catch(()=>{m({icon:"error",title:"\u0412\u0438\u043D\u0438\u043A\u043B\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430",text:"\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0456\u0441\u0442\u044C \u0434\u0430\u043D\u043D\u0438\u0445"})})}return(a,re)=>(c(),i(p,null,[e("div",$,[E,e("div",S,[e("div",q,[o.product.discount_price?(c(),i("div",D,[e("div",F,l(o.product.price)+" \u0433\u0440\u043D. ",1),e("div",G,l(o.product.discount_price)+" \u0433\u0440\u043D.",1)])):n("",!0),o.product.discount_price?n("",!0):(c(),i("div",H,[e("div",L,l(o.product.price)+" \u0433\u0440\u043D. ",1)]))]),e("div",Z,[x(k,{onClick:w,type:"button"},{default:f(()=>[J]),_:1}),x(k,{onClick:_,type:"button"},{default:f(()=>[K]),_:1})])]),O]),e("div",Q,[o.product.sizes.length?(c(),i("div",R,[W,e("ul",X,[(c(!0),i(p,null,g(o.product.sizes,d=>(c(),i("li",Y,[b(e("input",{type:"checkbox",value:d.title,id:d.title,class:"hidden peer","onUpdate:modelValue":u=>s.value.size=u},null,8,ee),[[C,s.value.size]]),e("label",{for:d.title,class:"inline-flex justify-center items-center mx-auto text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 w-[40px] h-[40px]"},l(d.title),9,te)]))),256))])])):n("",!0),o.product.colors.length?(c(),i("div",oe,[ce,e("div",se,[(c(!0),i(p,null,g(o.product.colors,d=>(c(),i("div",null,[b(e("input",{type:"checkbox",id:d.name,value:d.name,class:"hidden peer","onUpdate:modelValue":u=>s.value.color=u},null,8,de),[[C,s.value.color]]),e("label",{for:d.name,style:P("background-color:"+d.hex),class:"inline-flex justify-center items-center mx-auto text-black-500 rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600 hover:text-black peer-checked:text-gray-600 hover:bg-black w-[40px] h-[40px]"},null,12,ie)]))),256))])])):n("",!0)]),r.value.isActiveBuyIn1ClickModal?(c(),B(N,{key:0,onCloseModal:_,item:s.value,product:o.product,cart:V(h).state.list,eventIdPurchaseIn1Click:t.eventIdPurchaseIn1Click,eventIdAddToCard:t.eventIdAddToCard,isAddToCart:r.value.isAddToCart},null,8,["item","product","cart","eventIdPurchaseIn1Click","eventIdAddToCard","isAddToCart"])):n("",!0)],64))}};export{fe as default};
