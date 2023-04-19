import{r as d,a6 as l,p as a,q as r,v as t,B as c,D as i,x as h,C as p,F as u}from"./app-6d1ec759.js";const _={class:"mb-3"},m={class:"ml-auto"},b={class:"rounded-[10px] border-red-600 border-[3px] flex justify-center max-w-[230px] relative m-0 p-2"},f=t("span",{class:"before:content-['\\f0ce'] col-span-1"},null,-1),x={class:"col-span-3"},v=["innerHTML"],B={__name:"SizesTable",props:{sizeTable:{type:String,default:`<table>
                <tr>
                    <th>Размеры</th>
                    <th>Чашка</th>
                    <th>Объем груди</th>
                    <th>Объем бедер</th>
                </tr>
                <tr>
                    <th>S</th>
                    <td>A-B</td>
                    <td>82-85</td>
                    <td>85-90</td>
                </tr>
                <tr>
                    <th>M</th>
                    <td>B-C</td>
                    <td>86-89</td>
                    <td>91-95</td>
                </tr>
                <tr>
                    <th>L</th>
                    <td>C-D</td>
                    <td>90-93</td>
                    <td>96-100</td>
                </tr>
                <tr>
                    <th>XL</th>
                    <td>D-E</td>
                    <td>94-97</td>
                    <td>101-105</td>
                </tr>
            </table>`},textSizesTable:{type:String,default:"Таблиця розмірів"}},setup(n){const e=d(!1);function s(){e.value=!e.value}return(C,g)=>{const o=l("modal");return a(),r(u,null,[t("div",_,[t("div",m,[t("div",b,[t("button",{class:"grid gap-4 grid-cols-4",type:"button",onClick:s},[f,t("span",x,c(n.textSizesTable),1)])])])]),e.value?(a(),i(o,{key:0,onCloseModal:s,size:"medium"},{content:h(()=>[t("div",{class:"sizes-table",innerHTML:n.sizeTable},null,8,v)]),_:1})):p("",!0)],64)}}};export{B as default};
