import{l as s}from"./Index-a94af249.js";import"./Loader-ccf6e4ba.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-a01126e2.js";import"./Card-d700085f.js";import"./Paginate-01527c78.js";import"./Table-788933f3.js";import"./Table-fe1ca8dd.js";import"./StatisticLayout-af991e7b.js";import"./AuthenticatedLayout-704e8f94.js";import"./index.esm-02fff71f.js";import"./Logo-83ffc10f.js";import"./SidebarItem-446a46b0.js";import"./Primary-84eaf8dd.js";import"./index-2cbe9ca3.js";import"./index-7a810988.js";var F={s:["nokkrar sekúndur","nokkrar sekúndur","nokkrum sekúndum"],m:["mínúta","mínútu","mínútu"],mm:["mínútur","mínútur","mínútum"],h:["klukkustund","klukkustund","klukkustund"],hh:["klukkustundir","klukkustundir","klukkustundum"],d:["dagur","dag","degi"],dd:["dagar","daga","dögum"],M:["mánuður","mánuð","mánuði"],MM:["mánuðir","mánuði","mánuðum"],y:["ár","ár","ári"],yy:["ár","ár","árum"]};function k(m,x,u,t){var n=u?1:2,i=t?0:n,_=m.length===2&&x%10===1,d=_?m[0]:m,e=F[d],a=e[i];return m.length===1?a:"%d "+a}function r(m,x,u,t){var n=k(u,m,t,x);return n.replace("%d",m)}var o={name:"is",weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),weekStart:1,weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),ordinal:function(m){return m},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r}};s.locale(o,null,!0);export{o as default};
