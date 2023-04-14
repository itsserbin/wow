import{r as d,g as l,i as t,l as r,s as c,v as i,j as h,F as p,D as u,p as a}from"./app-b3873e05.js";const _={class:"mb-3"},m={class:"ml-auto"},b={class:"rounded-[10px] border-red-600 border-[3px] flex justify-center max-w-[230px] relative m-0 p-2"},f=t("span",{class:"before:content-['\\f0ce'] col-span-1"},null,-1),v={class:"col-span-3"},x=["innerHTML"],S={__name:"SizesTable",props:{sizeTable:{type:String,default:`<table>
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
            </table>`},textSizesTable:{type:String,default:"Таблиця розмірів"}},setup(n){const e=d(!1);function s(){e.value=!e.value}return(g,z)=>{const o=u("modal");return a(),l(p,null,[t("div",_,[t("div",m,[t("div",b,[t("button",{class:"grid gap-4 grid-cols-4",type:"button",onClick:s},[f,t("span",v,r(n.textSizesTable),1)])])])]),e.value?(a(),c(o,{key:0,onCloseModal:s,size:"medium"},{content:i(()=>[t("div",{class:"sizes-table",innerHTML:n.sizeTable},null,8,x)]),_:1})):h("",!0)],64)}}};export{S as default};
