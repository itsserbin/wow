import{G as U,H as P,u as C,v as i,z as u,C as d,J as s,bI as E,D as v,y as m,aP as D}from"./_plugin-vue_export-helper.f12554ed.js";const M={class:"grid grid-cols-3 mb-5 gap-4"},T={class:"block col-span-2"},A={class:"block"},B={class:"grid grid-cols-2 gap-4 mb-5"},N={class:"block"},O={class:"block"},F={class:"grid grid-cols-1 dark:bg-gray-800 rounded"},I={class:"block mb-5"},$={class:"block mb-5"},S={class:"block mb-5"},h={class:"block mb-5"},j={class:"block mb-5"},H={__name:"Form",props:["item"],emits:["submit"],setup(t,{emit:z}){const g=t,y=D("$defaultLang"),a=U({publishedOptions:[{key:0,value:"Not published"},{key:1,value:"Published"}],categories:[],categoryPreview:[],activeLang:y});P(()=>{f(),g.item.preview&&V(g.item.preview)});function V(n){a.value.categoryPreview.push({src:"/storage/images/55/"+n})}function b(n){a.value.activeLang=n}function k(){g.item.preview=null,a.value.categoryPreview=[]}function f(){axios.get(route("api.categories.list")).then(({data:n})=>{n.result.forEach(e=>{a.value.categories.push({key:e.id,value:e.title.ua?e.title.ua:e.title.ru})})}).catch(n=>console.log(n))}function w(n){let e=new FormData;e.append("image",n),axios.post(route("api.images.upload"),e,{headers:{"Content-Type":"multipart/form-data"}}).then(({data:o})=>{g.item.preview=o.result,V(o.result)}).catch(o=>console.log(o))}return(n,e)=>{const o=v("label-component"),c=v("input-component"),p=v("select-component"),L=v("upload-input-component"),x=v("lang-tabs"),r=v("textarea-component");return m(),C("form",{onSubmit:e[13]||(e[13]=E(l=>n.$emit("submit",t.item),["prevent"])),class:"flex flex-col"},[i("div",M,[i("div",T,[u(o,{value:"\u0427\u041F\u0423"}),u(c,{modelValue:t.item.slug,"onUpdate:modelValue":e[0]||(e[0]=l=>t.item.slug=l),type:"text"},null,8,["modelValue"])]),i("div",A,[u(o,{value:"\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457"}),u(p,{modelValue:t.item.published,"onUpdate:modelValue":e[1]||(e[1]=l=>t.item.published=l),options:a.value.publishedOptions},null,8,["modelValue","options"])])]),i("div",B,[i("div",N,[u(o,{value:"\u0411\u0430\u0442\u044C\u043A\u0456\u0432\u0441\u044C\u043A\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F"}),u(p,{modelValue:t.item.parent_id,"onUpdate:modelValue":e[2]||(e[2]=l=>t.item.parent_id=l),options:a.value.categories},null,8,["modelValue","options"])]),i("div",O,[u(L,{multiple:!1,id:"uploadCategoryPreview",label:"\u0413\u043E\u043B\u043E\u0432\u043D\u0435 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",onUpload:w,images:a.value.categoryPreview,onOnDestroyImage:k},null,8,["images"])])]),u(x,{onClickLang:b,class:"mb-5"}),i("div",F,[i("div",I,[u(o,{value:"\u041D\u0430\u0437\u0432\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457"}),a.value.activeLang==="ru"?(m(),d(c,{key:0,modelValue:t.item.title.ru,"onUpdate:modelValue":e[3]||(e[3]=l=>t.item.title.ru=l),type:"text"},null,8,["modelValue"])):s("",!0),a.value.activeLang==="ua"?(m(),d(c,{key:1,modelValue:t.item.title.ua,"onUpdate:modelValue":e[4]||(e[4]=l=>t.item.title.ua=l),type:"text"},null,8,["modelValue"])):s("",!0)]),i("div",$,[u(o,{value:"META Title"}),a.value.activeLang==="ru"?(m(),d(c,{key:0,modelValue:t.item.meta_title.ru,"onUpdate:modelValue":e[5]||(e[5]=l=>t.item.meta_title.ru=l),type:"text"},null,8,["modelValue"])):s("",!0),a.value.activeLang==="ua"?(m(),d(c,{key:1,modelValue:t.item.meta_title.ua,"onUpdate:modelValue":e[6]||(e[6]=l=>t.item.meta_title.ua=l),type:"text"},null,8,["modelValue"])):s("",!0)]),i("div",S,[u(o,{value:"META Description"}),a.value.activeLang==="ru"?(m(),d(r,{key:0,modelValue:t.item.meta_description.ru,"onUpdate:modelValue":e[7]||(e[7]=l=>t.item.meta_description.ru=l)},null,8,["modelValue"])):s("",!0),a.value.activeLang==="ua"?(m(),d(r,{key:1,modelValue:t.item.meta_description.ua,"onUpdate:modelValue":e[8]||(e[8]=l=>t.item.meta_description.ua=l)},null,8,["modelValue"])):s("",!0)]),i("div",h,[u(o,{value:"META Keywords"}),a.value.activeLang==="ru"?(m(),d(r,{key:0,modelValue:t.item.meta_keyword.ru,"onUpdate:modelValue":e[9]||(e[9]=l=>t.item.meta_keyword.ru=l)},null,8,["modelValue"])):s("",!0),a.value.activeLang==="ua"?(m(),d(r,{key:1,modelValue:t.item.meta_keyword.ua,"onUpdate:modelValue":e[10]||(e[10]=l=>t.item.meta_keyword.ua=l)},null,8,["modelValue"])):s("",!0)]),i("div",j,[u(o,{value:"SEO \u0422\u0435\u043A\u0441\u0442"}),a.value.activeLang==="ru"?(m(),d(r,{key:0,modelValue:t.item.seo_text.ru,"onUpdate:modelValue":e[11]||(e[11]=l=>t.item.seo_text.ru=l)},null,8,["modelValue"])):s("",!0),a.value.activeLang==="ua"?(m(),d(r,{key:1,modelValue:t.item.seo_text.ua,"onUpdate:modelValue":e[12]||(e[12]=l=>t.item.seo_text.ua=l)},null,8,["modelValue"])):s("",!0)])])],32)}}};export{H as default};
