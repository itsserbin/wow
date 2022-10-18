import{A as z,G as D,L as U,M as d,K as l,P as T,V as c,_ as i,S as B,a9 as F,X as m,R as n,Y as N,x as L}from"./moment.fb372146.js";import E from"./Images.f83783e0.js";import O from"./ImagesSelectModal.3767400e.js";import"./app.06bf31ad.js";import"./swiper-slide.ac1a47c1.js";import"./UploadImagesModal.ef26b46e.js";const j={class:"grid grid-cols-3 gap-4 mb-5"},G={class:"block"},K={class:"block"},R={class:"block"},X={class:"grid grid-cols-3 gap-4"},Y={class:"block"},q={class:"block"},H={class:"block"},J={class:"grid grid-cols-2 gap-4 mb-5"},Q={class:"block"},W={class:"block"},Z={class:"block mb-5"},_={class:"block mb-5"},ee={class:"block mb-5"},te={class:"block mb-5"},oe={class:"block mb-5"},le={class:"block mb-5"},ae={class:"grid grid-cols-3 gap-4 mb-5"},ue={class:"block"},de={class:"block"},se={class:"block"},ne={class:"row"},ie={key:0,class:"block mb-7"},ce={class:"block mb-7"},re=N("Select Images"),ke={__name:"Form",props:["product"],emits:["submit","setProductImages","destroyImage"],setup(t,{emit:b}){const p=t,h=L("$defaultLang"),x=L("$publishedStatuses"),u=z({isActiveSelectedImagesModal:!1,activeLang:h,statusOptions:[{key:"in stock",value:"\u0412 \u043D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456"},{key:"ends",value:"\u041D\u0435\u043C\u0430 \u0432 \u043D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456"},{key:"out of stock",value:"\u0417\u0430\u043A\u0456\u043D\u0447\u0443\u0454\u0442\u044C\u0441\u044F"}],categories:[],providers:[],colors:[],sizes:[],productPreview:[]});D(()=>{axios.get(route("api.categories.list")).then(({data:a})=>u.value.categories=a.result).catch(a=>console.log(a)),axios.get(route("api.providers.list")).then(({data:a})=>u.value.providers=a.result).catch(a=>console.log(a)),axios.get(route("api.colors.list")).then(({data:a})=>u.value.colors=a.result).catch(a=>console.log(a)),axios.get(route("api.sizes.list")).then(({data:a})=>u.value.sizes=a.result).catch(a=>console.log(a)),p.product.preview&&k(p.product.preview)});function k(a){u.value.productPreview.push({src:route("images.products.55",a)})}function w(a){u.value.activeLang=a}function y({title:a,id:e}){return a&&e?`${u.value.activeLang==="ua"?a.ua:u.value.activeLang==="ru"?a.ru:"-"} -${e}`:`${e}`}function V(){u.value.isActiveSelectedImagesModal=!u.value.isActiveSelectedImagesModal}function I(a){let e=new FormData;e.append("image",a),axios.post(route("api.images.upload"),e,{headers:{"Content-Type":"multipart/form-data"}}).then(({data:s})=>{p.product.preview=s.result,k(s.result)}).catch(s=>console.log(s))}function P(){p.product.preview=null,u.value.productPreview=[]}function M(a){V(),b("setProductImages",a)}function A(a){b("destroyImage",a)}return(a,e)=>{const s=m("label-component"),f=m("select-component"),r=m("input-component"),g=m("multiselect"),S=m("upload-input-component"),C=m("lang-tabs"),v=m("textarea-component"),$=m("button-component");return n(),U("form",{onSubmit:e[21]||(e[21]=F(o=>a.$emit("submit",t.product),["prevent"])),class:"flex flex-col"},[d("div",j,[d("div",G,[l(s,{value:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457"}),l(f,{modelValue:t.product.published,"onUpdate:modelValue":e[0]||(e[0]=o=>t.product.published=o),options:T(x)},null,8,["modelValue","options"])]),d("div",K,[l(s,{value:"\u041D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u0443"}),l(f,{modelValue:t.product.status,"onUpdate:modelValue":e[1]||(e[1]=o=>t.product.status=o),options:u.value.statusOptions},null,8,["modelValue","options"])]),d("div",R,[l(s,{value:"\u0410\u0440\u0442\u0438\u043A\u0443\u043B"}),l(r,{modelValue:t.product.vendor_code,"onUpdate:modelValue":e[2]||(e[2]=o=>t.product.vendor_code=o),type:"text"},null,8,["modelValue"])])]),d("div",X,[d("div",Y,[l(s,{value:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457"}),l(g,{options:u.value.categories,modelValue:t.product.categories,"onUpdate:modelValue":e[3]||(e[3]=o=>t.product.categories=o),"custom-label":y,placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457",class:"mb-5","track-by":"id",searchable:!0,multiple:!0},null,8,["options","modelValue"])]),d("div",q,[l(s,{value:"\u041F\u043E\u0441\u0442\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0438"}),l(g,{options:u.value.providers,modelValue:t.product.provider,"onUpdate:modelValue":e[4]||(e[4]=o=>t.product.provider=o),"custom-label":y,placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0430",class:"mb-5","track-by":"id","close-on-select":!0,searchable:!0},null,8,["options","modelValue"])]),d("div",H,[l(S,{multiple:!1,id:"uploadCategoryPreview",label:"\u0413\u043E\u043B\u043E\u0432\u043D\u0435 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",onUpload:I,images:u.value.productPreview,onOnDestroyImage:P},null,8,["images"])])]),d("div",J,[d("div",Q,[l(s,{value:"\u0420\u043E\u0437\u043C\u0456\u0440\u0438"}),l(g,{options:u.value.sizes,modelValue:t.product.sizes,"onUpdate:modelValue":e[5]||(e[5]=o=>t.product.sizes=o),label:"title",placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0440\u043E\u0437\u043C\u0456\u0440\u0438","track-by":"id","close-on-select":!1,searchable:!0,multiple:!0},null,8,["options","modelValue"])]),d("div",W,[l(s,{value:"\u041A\u043E\u043B\u044C\u043E\u0440\u0438"}),l(g,{options:u.value.colors,modelValue:t.product.colors,"onUpdate:modelValue":e[6]||(e[6]=o=>t.product.colors=o),label:"name",placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043A\u043E\u043B\u044C\u043E\u0440\u0438","track-by":"id","close-on-select":!1,searchable:!0,multiple:!0},null,8,["options","modelValue"])])]),l(C,{onClickLang:w,class:"mb-5"}),d("div",Z,[l(s,{value:"\u041D\u0430\u0437\u0432\u0430 \u0442\u043E\u0432\u0430\u0440\u0443"}),u.value.activeLang==="ru"?(n(),c(r,{key:0,modelValue:t.product.h1.ru,"onUpdate:modelValue":e[7]||(e[7]=o=>t.product.h1.ru=o),type:"text"},null,8,["modelValue"])):i("",!0),u.value.activeLang==="ua"?(n(),c(r,{key:1,modelValue:t.product.h1.ua,"onUpdate:modelValue":e[8]||(e[8]=o=>t.product.h1.ua=o),type:"text"},null,8,["modelValue"])):i("",!0)]),d("div",_,[l(s,{value:"META Title"}),u.value.activeLang==="ru"?(n(),c(r,{key:0,modelValue:t.product.title.ru,"onUpdate:modelValue":e[9]||(e[9]=o=>t.product.title.ru=o),type:"text"},null,8,["modelValue"])):i("",!0),u.value.activeLang==="ua"?(n(),c(r,{key:1,modelValue:t.product.title.ua,"onUpdate:modelValue":e[10]||(e[10]=o=>t.product.title.ua=o),type:"text"},null,8,["modelValue"])):i("",!0)]),d("div",ee,[l(s,{value:"META Description"}),u.value.activeLang==="ru"?(n(),c(v,{key:0,modelValue:t.product.description.ru,"onUpdate:modelValue":e[11]||(e[11]=o=>t.product.description.ru=o)},null,8,["modelValue"])):i("",!0),u.value.activeLang==="ua"?(n(),c(v,{key:1,modelValue:t.product.description.ua,"onUpdate:modelValue":e[12]||(e[12]=o=>t.product.description.ua=o)},null,8,["modelValue"])):i("",!0)]),d("div",te,[l(s,{value:"\u041E\u043F\u0438\u0441 \u0442\u043E\u0432\u0430\u0440\u0443"}),u.value.activeLang==="ru"?(n(),c(v,{key:0,modelValue:t.product.content.ru,"onUpdate:modelValue":e[13]||(e[13]=o=>t.product.content.ru=o)},null,8,["modelValue"])):i("",!0),u.value.activeLang==="ua"?(n(),c(v,{key:1,modelValue:t.product.content.ua,"onUpdate:modelValue":e[14]||(e[14]=o=>t.product.content.ua=o)},null,8,["modelValue"])):i("",!0)]),d("div",oe,[l(s,{value:"\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438"}),u.value.activeLang==="ru"?(n(),c(v,{key:0,modelValue:t.product.characteristics.ru,"onUpdate:modelValue":e[15]||(e[15]=o=>t.product.characteristics.ru=o)},null,8,["modelValue"])):i("",!0),u.value.activeLang==="ua"?(n(),c(v,{key:1,modelValue:t.product.characteristics.ua,"onUpdate:modelValue":e[16]||(e[16]=o=>t.product.characteristics.ua=o)},null,8,["modelValue"])):i("",!0)]),d("div",le,[l(s,{value:"\u0422\u0430\u0431\u043B\u0438\u0446\u044F \u0440\u043E\u0437\u043C\u0456\u0440\u0456\u0432"}),l(v,{modelValue:t.product.size_table,"onUpdate:modelValue":e[17]||(e[17]=o=>t.product.size_table=o)},null,8,["modelValue"])]),d("div",ae,[d("div",ue,[l(s,{value:"Price "}),l(r,{modelValue:t.product.price,"onUpdate:modelValue":e[18]||(e[18]=o=>t.product.price=o),type:"number"},null,8,["modelValue"])]),d("div",de,[l(s,{value:"Discount price "}),l(r,{modelValue:t.product.discount_price,"onUpdate:modelValue":e[19]||(e[19]=o=>t.product.discount_price=o),type:"number"},null,8,["modelValue"])]),d("div",se,[l(s,{value:"Trade price "}),l(r,{modelValue:t.product.trade_price,"onUpdate:modelValue":e[20]||(e[20]=o=>t.product.trade_price=o),type:"number"},null,8,["modelValue"])])]),d("div",ne,[t.product.images?(n(),U("div",ie,[l(s,{value:"Images"}),l(E,{images:t.product.images,onDestroyImage:A},null,8,["images"])])):i("",!0),d("div",ce,[l($,{type:"button",onClick:V},{default:B(()=>[re]),_:1}),u.value.isActiveSelectedImagesModal?(n(),c(O,{key:0,onSubmitForm:M,onCloseModal:V})):i("",!0)])])],32)}}};export{ke as default};
