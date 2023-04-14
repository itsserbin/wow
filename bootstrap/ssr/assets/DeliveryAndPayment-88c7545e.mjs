import { withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import Accordion from "./Accordion-1215fa5b.mjs";
import AccordionItem from "./AccordionItem-d1739108.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "gsap";
const DeliveryAndPayment_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "DeliveryAndPayment",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Accordion, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(AccordionItem, null, {
              "accordion-trigger": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Доставка і оплата `);
                } else {
                  return [
                    createTextVNode(" Доставка і оплата ")
                  ];
                }
              }),
              "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="text-[24px] font-[600] mt-[15x] mb-[15px]"${_scopeId2}>Банківський переказ на карту</h2><p${_scopeId2}>Ви можете сплатити замовлення банківською карткою Visa та MasterCard без комісії, при цьому ви заощаджуєте від 50 гривень на покупці.</p><h2 class="text-[24px] font-[600] mt-[15x] mb-[15px]"${_scopeId2}>Накладений платіж</h2><p${_scopeId2}>Ви можете сплатити замовлення після його отримання у службі доставки «Нова пошта». При цьому способі оплати ви сплачуєте суму, що складається з: вартості доставки (страхування, транспортування) товару за тарифами «Нової пошти» (від 40грн); 2% вартості товару.</p><p class="mt-[1rem]"${_scopeId2}><strong${_scopeId2}>Важливо!</strong> Накладений платіж можливий лише з мінімальною передоплатою у зв&#39;язку з військовим становищем.</p>`);
                } else {
                  return [
                    createVNode("h2", { class: "text-[24px] font-[600] mt-[15x] mb-[15px]" }, "Банківський переказ на карту"),
                    createVNode("p", null, "Ви можете сплатити замовлення банківською карткою Visa та MasterCard без комісії, при цьому ви заощаджуєте від 50 гривень на покупці."),
                    createVNode("h2", { class: "text-[24px] font-[600] mt-[15x] mb-[15px]" }, "Накладений платіж"),
                    createVNode("p", null, "Ви можете сплатити замовлення після його отримання у службі доставки «Нова пошта». При цьому способі оплати ви сплачуєте суму, що складається з: вартості доставки (страхування, транспортування) товару за тарифами «Нової пошти» (від 40грн); 2% вартості товару."),
                    createVNode("p", { class: "mt-[1rem]" }, [
                      createVNode("strong", null, "Важливо!"),
                      createTextVNode(" Накладений платіж можливий лише з мінімальною передоплатою у зв'язку з військовим становищем.")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(AccordionItem, null, {
              "accordion-trigger": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Умови повернення та обміну товару `);
                } else {
                  return [
                    createTextVNode(" Умови повернення та обміну товару ")
                  ];
                }
              }),
              "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="text-[24px] font-[600] mt-[15x] mb-[15px]"${_scopeId2}>Умови повернення та обміну товару</h2><p${_scopeId2}>Відповідно до закону «Про захист прав споживачів», нижня білизна та панчішно-шкарпеткові вироби включені до «Переліку непродовольчих товарів належної якості», які не підлягають поверненню чи обміну на аналогічні моделі інших розмірів, форм, габаритів, фасонів, забарвлення чи комплектації.</p><p class="mt-[15px] mb-[15px]"${_scopeId2}>Але! Ми завжди лояльні до наших клієнтів, тому у нас, на відміну від інших інтернет-магазинів, є обмін купальників, якщо вам не підійде розмір або колір, ви без проблем зможете обміняти його на іншу модель купальника! (Обмін робимо протягом 3-4х робочих днів після отримання товару)</p><p${_scopeId2}>Повернення на категорію спідньої білизни немає!</p>`);
                } else {
                  return [
                    createVNode("h2", { class: "text-[24px] font-[600] mt-[15x] mb-[15px]" }, "Умови повернення та обміну товару"),
                    createVNode("p", null, "Відповідно до закону «Про захист прав споживачів», нижня білизна та панчішно-шкарпеткові вироби включені до «Переліку непродовольчих товарів належної якості», які не підлягають поверненню чи обміну на аналогічні моделі інших розмірів, форм, габаритів, фасонів, забарвлення чи комплектації."),
                    createVNode("p", { class: "mt-[15px] mb-[15px]" }, "Але! Ми завжди лояльні до наших клієнтів, тому у нас, на відміну від інших інтернет-магазинів, є обмін купальників, якщо вам не підійде розмір або колір, ви без проблем зможете обміняти його на іншу модель купальника! (Обмін робимо протягом 3-4х робочих днів після отримання товару)"),
                    createVNode("p", null, "Повернення на категорію спідньої білизни немає!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(AccordionItem, null, {
                "accordion-trigger": withCtx(() => [
                  createTextVNode(" Доставка і оплата ")
                ]),
                "accordion-content": withCtx(() => [
                  createVNode("h2", { class: "text-[24px] font-[600] mt-[15x] mb-[15px]" }, "Банківський переказ на карту"),
                  createVNode("p", null, "Ви можете сплатити замовлення банківською карткою Visa та MasterCard без комісії, при цьому ви заощаджуєте від 50 гривень на покупці."),
                  createVNode("h2", { class: "text-[24px] font-[600] mt-[15x] mb-[15px]" }, "Накладений платіж"),
                  createVNode("p", null, "Ви можете сплатити замовлення після його отримання у службі доставки «Нова пошта». При цьому способі оплати ви сплачуєте суму, що складається з: вартості доставки (страхування, транспортування) товару за тарифами «Нової пошти» (від 40грн); 2% вартості товару."),
                  createVNode("p", { class: "mt-[1rem]" }, [
                    createVNode("strong", null, "Важливо!"),
                    createTextVNode(" Накладений платіж можливий лише з мінімальною передоплатою у зв'язку з військовим становищем.")
                  ])
                ]),
                _: 1
              }),
              createVNode(AccordionItem, null, {
                "accordion-trigger": withCtx(() => [
                  createTextVNode(" Умови повернення та обміну товару ")
                ]),
                "accordion-content": withCtx(() => [
                  createVNode("h2", { class: "text-[24px] font-[600] mt-[15x] mb-[15px]" }, "Умови повернення та обміну товару"),
                  createVNode("p", null, "Відповідно до закону «Про захист прав споживачів», нижня білизна та панчішно-шкарпеткові вироби включені до «Переліку непродовольчих товарів належної якості», які не підлягають поверненню чи обміну на аналогічні моделі інших розмірів, форм, габаритів, фасонів, забарвлення чи комплектації."),
                  createVNode("p", { class: "mt-[15px] mb-[15px]" }, "Але! Ми завжди лояльні до наших клієнтів, тому у нас, на відміну від інших інтернет-магазинів, є обмін купальників, якщо вам не підійде розмір або колір, ви без проблем зможете обміняти його на іншу модель купальника! (Обмін робимо протягом 3-4х робочих днів після отримання товару)"),
                  createVNode("p", null, "Повернення на категорію спідньої білизни немає!")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Product/DeliveryAndPayment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
