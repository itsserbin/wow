import{p as k,g as y,i as o,x as l,w as a,m as R,j as V,v as C,B as d,a8 as N,o as w,k as r,t as s,y as x,O as S}from"./vendor.693a237b.js";import"./__commonjsHelpers__.488ed5c2.js";const M={class:"text-center"},B={class:"grid gap-4"},E={class:"block"},L={class:"block"},q={class:"block"},G={__name:"ReviewForm",props:{id:Number,textGiveReview:{type:String,default:"\u0417\u0430\u043B\u0438\u0448\u0438\u0442\u0438 \u0432\u0456\u0434\u0433\u0443\u043A"},textEnterName:{type:String,default:"\u0412\u0430\u0448\u0435 \u0456\u043C\u02BC\u044F"},textEnterReview:{type:String,default:"\u0412\u0430\u0448 \u0432\u0456\u0434\u0433\u0443\u043A"},textName:{type:String,default:"\u0406\u043C\u02BC\u044F"},textPhone:{type:String,default:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D"},textComment:{type:String,default:"\u0412\u0456\u0434\u0433\u0443\u043A"}},setup(t){const f=t,e=k({showReviewModal:!1,review:{published:0,product_id:null,phone:null,name:null,comment:null},errors:[],isLoading:!1}),v=C("$swal");function u(){e.value.showReviewModal=!e.value.showReviewModal}function h(){e.value.isLoading=!0,e.value.review.product_id=f.id,axios.post("/api/v1/reviews/create",e.value.review).then(()=>{e.value.review={phone:null,name:null,comment:null},e.value.isLoading=!1,e.value.errors=[],u(),v({icon:"success",title:"\u0412\u0430\u0448 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E!",text:"\u0412\u0456\u043D \u0431\u0443\u0434\u0435 \u043E\u043F\u0443\u0431\u043B\u0456\u043A\u043E\u0432\u0430\u043D\u0438\u0439 \u043F\u0456\u0441\u043B\u044F \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0438 \u043D\u0430 \u0441\u043F\u0430\u043C :)"})}).catch(({response:c})=>{e.value.errors=c.data,e.value.isLoading=!1,console.log(c),v({icon:"error",title:"\u0412\u0438\u043D\u0438\u043A\u043B\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430",text:"\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0456\u0441\u0442\u044C \u0434\u0430\u043D\u043D\u0438\u0445"})})}return(c,n)=>{const b=d("button-component"),m=d("label-component"),p=d("input-component"),_=d("modal"),g=N("maska");return w(),y("div",null,[o("div",null,[o("div",M,[l(b,{type:"button",onClick:u},{default:a(()=>[r(s(t.textGiveReview),1)]),_:1})]),e.value.showReviewModal?(w(),R(_,{key:0,onClickCancel:u,onCloseModal:u,onSubmitForm:h,"submit-button-text":"\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438","cancel-button-text":"\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438",size:"medium"},{heading:a(()=>[r(s(t.textGiveReview),1)]),content:a(()=>[o("div",B,[o("div",E,[l(m,{required:!0},{default:a(()=>[r(s(t.textName),1)]),_:1}),l(p,{type:"text",modelValue:e.value.review.name,"onUpdate:modelValue":n[0]||(n[0]=i=>e.value.review.name=i),placeholder:t.textEnterName},null,8,["modelValue","placeholder"])]),o("div",L,[l(m,{required:!0},{default:a(()=>[r(s(t.textPhone),1)]),_:1}),x(l(p,{type:"tel",modelValue:e.value.review.phone,"onUpdate:modelValue":n[1]||(n[1]=i=>e.value.review.phone=i),placeholder:"+38 (0",class:"phone"},null,8,["modelValue"]),[[g,"+38 (0##) ###-##-##"]])]),o("div",q,[l(m,{required:!0},{default:a(()=>[r(s(t.textComment),1)]),_:1}),x(o("textarea",{placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0430\u0448 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440","onUpdate:modelValue":n[2]||(n[2]=i=>e.value.review.comment=i),rows:"4",class:"border-[0.5px] rounded-[10px] box-border font-[350] h-[100] mt-[0.75rem] p-[1rem] resize-none w-[100%] outline-none border-red-600 focus:border-red-600 focus:ring-red-600"},null,512),[[S,e.value.review.comment]])])])]),_:1})):V("",!0)])])}}};export{G as default};
