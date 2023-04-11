import{p as d,g as l,i as t,t as r,m as c,w as i,j as h,F as p,B as m,o as a}from"./vendor.693a237b.js";import"./__commonjsHelpers__.488ed5c2.js";const u={class:"mb-3"},_={class:"ml-auto"},b={class:"rounded-[10px] border-red-600 border-[3px] flex justify-center max-w-[230px] relative m-0 p-2"},f=t("span",{class:"before:content-['\\f0ce'] col-span-1"},null,-1),x={class:"col-span-3"},v=["innerHTML"],S={__name:"SizesTable",props:{sizeTable:{type:String,default:`<table>
                <tr>
                    <th>\u0420\u0430\u0437\u043C\u0435\u0440\u044B</th>
                    <th>\u0427\u0430\u0448\u043A\u0430</th>
                    <th>\u041E\u0431\u044A\u0435\u043C \u0433\u0440\u0443\u0434\u0438</th>
                    <th>\u041E\u0431\u044A\u0435\u043C \u0431\u0435\u0434\u0435\u0440</th>
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
            </table>`},textSizesTable:{type:String,default:"\u0422\u0430\u0431\u043B\u0438\u0446\u044F \u0440\u043E\u0437\u043C\u0456\u0440\u0456\u0432"}},setup(n){const e=d(!1);function s(){e.value=!e.value}return(g,z)=>{const o=m("modal");return a(),l(p,null,[t("div",u,[t("div",_,[t("div",b,[t("button",{class:"grid gap-4 grid-cols-4",type:"button",onClick:s},[f,t("span",x,r(n.textSizesTable),1)])])])]),e.value?(a(),c(o,{key:0,onCloseModal:s,size:"medium"},{content:i(()=>[t("div",{class:"sizes-table",innerHTML:n.sizeTable},null,8,v)]),_:1})):h("",!0)],64)}}};export{S as default};
