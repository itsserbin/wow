import{l as s}from"./Index-a94af249.js";import"./Loader-ccf6e4ba.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-a01126e2.js";import"./Card-d700085f.js";import"./Paginate-01527c78.js";import"./Table-788933f3.js";import"./Table-fe1ca8dd.js";import"./StatisticLayout-af991e7b.js";import"./AuthenticatedLayout-704e8f94.js";import"./index.esm-02fff71f.js";import"./Logo-83ffc10f.js";import"./SidebarItem-446a46b0.js";import"./Primary-84eaf8dd.js";import"./index-2cbe9ca3.js";import"./index-7a810988.js";function i(t){return t>1&&t<5&&~~(t/10)!==1}function o(t,r,n,m){var e=t+" ";switch(n){case"s":return r||m?"pár sekúnd":"pár sekundami";case"m":return r?"minúta":m?"minútu":"minútou";case"mm":return r||m?e+(i(t)?"minúty":"minút"):e+"minútami";case"h":return r?"hodina":m?"hodinu":"hodinou";case"hh":return r||m?e+(i(t)?"hodiny":"hodín"):e+"hodinami";case"d":return r||m?"deň":"dňom";case"dd":return r||m?e+(i(t)?"dni":"dní"):e+"dňami";case"M":return r||m?"mesiac":"mesiacom";case"MM":return r||m?e+(i(t)?"mesiace":"mesiacov"):e+"mesiacmi";case"y":return r||m?"rok":"rokom";case"yy":return r||m?e+(i(t)?"roky":"rokov"):e+"rokmi"}}var _={name:"sk",weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),months:"január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),monthsShort:"jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),weekStart:1,yearStart:4,ordinal:function(t){return t+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"pred %s",s:o,m:o,mm:o,h:o,hh:o,d:o,dd:o,M:o,MM:o,y:o,yy:o}};s.locale(_,null,!0);export{_ as default};
