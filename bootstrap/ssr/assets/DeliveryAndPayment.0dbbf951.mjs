import { withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import Accordion from "./Accordion.635accb3.mjs";
import AccordionItem from "./AccordionItem.ae8efcce.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
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
                  _push3(` \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0456 \u043E\u043F\u043B\u0430\u0442\u0430 `);
                } else {
                  return [
                    createTextVNode(" \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0456 \u043E\u043F\u043B\u0430\u0442\u0430 ")
                  ];
                }
              }),
              "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="text-[24px] font-[600] mt-[15x] mb-[15px]"${_scopeId2}>\u0411\u0430\u043D\u043A\u0456\u0432\u0441\u044C\u043A\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u0430\u0437 \u043D\u0430 \u043A\u0430\u0440\u0442\u0443</h2><p${_scopeId2}>\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043F\u043B\u0430\u0442\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u0430\u043D\u043A\u0456\u0432\u0441\u044C\u043A\u043E\u044E \u043A\u0430\u0440\u0442\u043A\u043E\u044E Visa \u0442\u0430 MasterCard \u0431\u0435\u0437 \u043A\u043E\u043C\u0456\u0441\u0456\u0457, \u043F\u0440\u0438 \u0446\u044C\u043E\u043C\u0443 \u0432\u0438 \u0437\u0430\u043E\u0449\u0430\u0434\u0436\u0443\u0454\u0442\u0435 \u0432\u0456\u0434 50 \u0433\u0440\u0438\u0432\u0435\u043D\u044C \u043D\u0430 \u043F\u043E\u043A\u0443\u043F\u0446\u0456.</p><h2 class="text-[24px] font-[600] mt-[15x] mb-[15px]"${_scopeId2}>\u041D\u0430\u043A\u043B\u0430\u0434\u0435\u043D\u0438\u0439 \u043F\u043B\u0430\u0442\u0456\u0436</h2><p${_scopeId2}>\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043F\u043B\u0430\u0442\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0456\u0441\u043B\u044F \u0439\u043E\u0433\u043E \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0443 \u0441\u043B\u0443\u0436\u0431\u0456 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \xAB\u041D\u043E\u0432\u0430 \u043F\u043E\u0448\u0442\u0430\xBB. \u041F\u0440\u0438 \u0446\u044C\u043E\u043C\u0443 \u0441\u043F\u043E\u0441\u043E\u0431\u0456 \u043E\u043F\u043B\u0430\u0442\u0438 \u0432\u0438 \u0441\u043F\u043B\u0430\u0447\u0443\u0454\u0442\u0435 \u0441\u0443\u043C\u0443, \u0449\u043E \u0441\u043A\u043B\u0430\u0434\u0430\u0454\u0442\u044C\u0441\u044F \u0437: \u0432\u0430\u0440\u0442\u043E\u0441\u0442\u0456 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 (\u0441\u0442\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F, \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F) \u0442\u043E\u0432\u0430\u0440\u0443 \u0437\u0430 \u0442\u0430\u0440\u0438\u0444\u0430\u043C\u0438 \xAB\u041D\u043E\u0432\u043E\u0457 \u043F\u043E\u0448\u0442\u0438\xBB (\u0432\u0456\u0434 40\u0433\u0440\u043D); 2% \u0432\u0430\u0440\u0442\u043E\u0441\u0442\u0456 \u0442\u043E\u0432\u0430\u0440\u0443.</p><p class="mt-[1rem]"${_scopeId2}><strong${_scopeId2}>\u0412\u0430\u0436\u043B\u0438\u0432\u043E!</strong> \u041D\u0430\u043A\u043B\u0430\u0434\u0435\u043D\u0438\u0439 \u043F\u043B\u0430\u0442\u0456\u0436 \u043C\u043E\u0436\u043B\u0438\u0432\u0438\u0439 \u043B\u0438\u0448\u0435 \u0437 \u043C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u043E\u044E \u043F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u043E\u044E \u0443 \u0437\u0432&#39;\u044F\u0437\u043A\u0443 \u0437 \u0432\u0456\u0439\u0441\u044C\u043A\u043E\u0432\u0438\u043C \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0449\u0435\u043C.</p>`);
                } else {
                  return [
                    createVNode("h2", { class: "text-[24px] font-[600] mt-[15x] mb-[15px]" }, "\u0411\u0430\u043D\u043A\u0456\u0432\u0441\u044C\u043A\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u0430\u0437 \u043D\u0430 \u043A\u0430\u0440\u0442\u0443"),
                    createVNode("p", null, "\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043F\u043B\u0430\u0442\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u0430\u043D\u043A\u0456\u0432\u0441\u044C\u043A\u043E\u044E \u043A\u0430\u0440\u0442\u043A\u043E\u044E Visa \u0442\u0430 MasterCard \u0431\u0435\u0437 \u043A\u043E\u043C\u0456\u0441\u0456\u0457, \u043F\u0440\u0438 \u0446\u044C\u043E\u043C\u0443 \u0432\u0438 \u0437\u0430\u043E\u0449\u0430\u0434\u0436\u0443\u0454\u0442\u0435 \u0432\u0456\u0434 50 \u0433\u0440\u0438\u0432\u0435\u043D\u044C \u043D\u0430 \u043F\u043E\u043A\u0443\u043F\u0446\u0456."),
                    createVNode("h2", { class: "text-[24px] font-[600] mt-[15x] mb-[15px]" }, "\u041D\u0430\u043A\u043B\u0430\u0434\u0435\u043D\u0438\u0439 \u043F\u043B\u0430\u0442\u0456\u0436"),
                    createVNode("p", null, "\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043F\u043B\u0430\u0442\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0456\u0441\u043B\u044F \u0439\u043E\u0433\u043E \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0443 \u0441\u043B\u0443\u0436\u0431\u0456 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \xAB\u041D\u043E\u0432\u0430 \u043F\u043E\u0448\u0442\u0430\xBB. \u041F\u0440\u0438 \u0446\u044C\u043E\u043C\u0443 \u0441\u043F\u043E\u0441\u043E\u0431\u0456 \u043E\u043F\u043B\u0430\u0442\u0438 \u0432\u0438 \u0441\u043F\u043B\u0430\u0447\u0443\u0454\u0442\u0435 \u0441\u0443\u043C\u0443, \u0449\u043E \u0441\u043A\u043B\u0430\u0434\u0430\u0454\u0442\u044C\u0441\u044F \u0437: \u0432\u0430\u0440\u0442\u043E\u0441\u0442\u0456 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 (\u0441\u0442\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F, \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F) \u0442\u043E\u0432\u0430\u0440\u0443 \u0437\u0430 \u0442\u0430\u0440\u0438\u0444\u0430\u043C\u0438 \xAB\u041D\u043E\u0432\u043E\u0457 \u043F\u043E\u0448\u0442\u0438\xBB (\u0432\u0456\u0434 40\u0433\u0440\u043D); 2% \u0432\u0430\u0440\u0442\u043E\u0441\u0442\u0456 \u0442\u043E\u0432\u0430\u0440\u0443."),
                    createVNode("p", { class: "mt-[1rem]" }, [
                      createVNode("strong", null, "\u0412\u0430\u0436\u043B\u0438\u0432\u043E!"),
                      createTextVNode(" \u041D\u0430\u043A\u043B\u0430\u0434\u0435\u043D\u0438\u0439 \u043F\u043B\u0430\u0442\u0456\u0436 \u043C\u043E\u0436\u043B\u0438\u0432\u0438\u0439 \u043B\u0438\u0448\u0435 \u0437 \u043C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u043E\u044E \u043F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u043E\u044E \u0443 \u0437\u0432'\u044F\u0437\u043A\u0443 \u0437 \u0432\u0456\u0439\u0441\u044C\u043A\u043E\u0432\u0438\u043C \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0449\u0435\u043C.")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(AccordionItem, null, {
              "accordion-trigger": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0423\u043C\u043E\u0432\u0438 \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u0442\u0430 \u043E\u0431\u043C\u0456\u043D\u0443 \u0442\u043E\u0432\u0430\u0440\u0443 `);
                } else {
                  return [
                    createTextVNode(" \u0423\u043C\u043E\u0432\u0438 \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u0442\u0430 \u043E\u0431\u043C\u0456\u043D\u0443 \u0442\u043E\u0432\u0430\u0440\u0443 ")
                  ];
                }
              }),
              "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="text-[24px] font-[600] mt-[15x] mb-[15px]"${_scopeId2}>\u0423\u043C\u043E\u0432\u0438 \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u0442\u0430 \u043E\u0431\u043C\u0456\u043D\u0443 \u0442\u043E\u0432\u0430\u0440\u0443</h2><p${_scopeId2}>\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0437\u0430\u043A\u043E\u043D\u0443 \xAB\u041F\u0440\u043E \u0437\u0430\u0445\u0438\u0441\u0442 \u043F\u0440\u0430\u0432 \u0441\u043F\u043E\u0436\u0438\u0432\u0430\u0447\u0456\u0432\xBB, \u043D\u0438\u0436\u043D\u044F \u0431\u0456\u043B\u0438\u0437\u043D\u0430 \u0442\u0430 \u043F\u0430\u043D\u0447\u0456\u0448\u043D\u043E-\u0448\u043A\u0430\u0440\u043F\u0435\u0442\u043A\u043E\u0432\u0456 \u0432\u0438\u0440\u043E\u0431\u0438 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0456 \u0434\u043E \xAB\u041F\u0435\u0440\u0435\u043B\u0456\u043A\u0443 \u043D\u0435\u043F\u0440\u043E\u0434\u043E\u0432\u043E\u043B\u044C\u0447\u0438\u0445 \u0442\u043E\u0432\u0430\u0440\u0456\u0432 \u043D\u0430\u043B\u0435\u0436\u043D\u043E\u0457 \u044F\u043A\u043E\u0441\u0442\u0456\xBB, \u044F\u043A\u0456 \u043D\u0435 \u043F\u0456\u0434\u043B\u044F\u0433\u0430\u044E\u0442\u044C \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044E \u0447\u0438 \u043E\u0431\u043C\u0456\u043D\u0443 \u043D\u0430 \u0430\u043D\u0430\u043B\u043E\u0433\u0456\u0447\u043D\u0456 \u043C\u043E\u0434\u0435\u043B\u0456 \u0456\u043D\u0448\u0438\u0445 \u0440\u043E\u0437\u043C\u0456\u0440\u0456\u0432, \u0444\u043E\u0440\u043C, \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u0456\u0432, \u0444\u0430\u0441\u043E\u043D\u0456\u0432, \u0437\u0430\u0431\u0430\u0440\u0432\u043B\u0435\u043D\u043D\u044F \u0447\u0438 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0456\u0457.</p><p class="mt-[15px] mb-[15px]"${_scopeId2}>\u0410\u043B\u0435! \u041C\u0438 \u0437\u0430\u0432\u0436\u0434\u0438 \u043B\u043E\u044F\u043B\u044C\u043D\u0456 \u0434\u043E \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432, \u0442\u043E\u043C\u0443 \u0443 \u043D\u0430\u0441, \u043D\u0430 \u0432\u0456\u0434\u043C\u0456\u043D\u0443 \u0432\u0456\u0434 \u0456\u043D\u0448\u0438\u0445 \u0456\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0456\u0432, \u0454 \u043E\u0431\u043C\u0456\u043D \u043A\u0443\u043F\u0430\u043B\u044C\u043D\u0438\u043A\u0456\u0432, \u044F\u043A\u0449\u043E \u0432\u0430\u043C \u043D\u0435 \u043F\u0456\u0434\u0456\u0439\u0434\u0435 \u0440\u043E\u0437\u043C\u0456\u0440 \u0430\u0431\u043E \u043A\u043E\u043B\u0456\u0440, \u0432\u0438 \u0431\u0435\u0437 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0437\u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0431\u043C\u0456\u043D\u044F\u0442\u0438 \u0439\u043E\u0433\u043E \u043D\u0430 \u0456\u043D\u0448\u0443 \u043C\u043E\u0434\u0435\u043B\u044C \u043A\u0443\u043F\u0430\u043B\u044C\u043D\u0438\u043A\u0430! (\u041E\u0431\u043C\u0456\u043D \u0440\u043E\u0431\u0438\u043C\u043E \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C 3-4\u0445 \u0440\u043E\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0456\u0432 \u043F\u0456\u0441\u043B\u044F \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0442\u043E\u0432\u0430\u0440\u0443)</p><p${_scopeId2}>\u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u043D\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044E \u0441\u043F\u0456\u0434\u043D\u044C\u043E\u0457 \u0431\u0456\u043B\u0438\u0437\u043D\u0438 \u043D\u0435\u043C\u0430\u0454!</p>`);
                } else {
                  return [
                    createVNode("h2", { class: "text-[24px] font-[600] mt-[15x] mb-[15px]" }, "\u0423\u043C\u043E\u0432\u0438 \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u0442\u0430 \u043E\u0431\u043C\u0456\u043D\u0443 \u0442\u043E\u0432\u0430\u0440\u0443"),
                    createVNode("p", null, "\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0437\u0430\u043A\u043E\u043D\u0443 \xAB\u041F\u0440\u043E \u0437\u0430\u0445\u0438\u0441\u0442 \u043F\u0440\u0430\u0432 \u0441\u043F\u043E\u0436\u0438\u0432\u0430\u0447\u0456\u0432\xBB, \u043D\u0438\u0436\u043D\u044F \u0431\u0456\u043B\u0438\u0437\u043D\u0430 \u0442\u0430 \u043F\u0430\u043D\u0447\u0456\u0448\u043D\u043E-\u0448\u043A\u0430\u0440\u043F\u0435\u0442\u043A\u043E\u0432\u0456 \u0432\u0438\u0440\u043E\u0431\u0438 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0456 \u0434\u043E \xAB\u041F\u0435\u0440\u0435\u043B\u0456\u043A\u0443 \u043D\u0435\u043F\u0440\u043E\u0434\u043E\u0432\u043E\u043B\u044C\u0447\u0438\u0445 \u0442\u043E\u0432\u0430\u0440\u0456\u0432 \u043D\u0430\u043B\u0435\u0436\u043D\u043E\u0457 \u044F\u043A\u043E\u0441\u0442\u0456\xBB, \u044F\u043A\u0456 \u043D\u0435 \u043F\u0456\u0434\u043B\u044F\u0433\u0430\u044E\u0442\u044C \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044E \u0447\u0438 \u043E\u0431\u043C\u0456\u043D\u0443 \u043D\u0430 \u0430\u043D\u0430\u043B\u043E\u0433\u0456\u0447\u043D\u0456 \u043C\u043E\u0434\u0435\u043B\u0456 \u0456\u043D\u0448\u0438\u0445 \u0440\u043E\u0437\u043C\u0456\u0440\u0456\u0432, \u0444\u043E\u0440\u043C, \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u0456\u0432, \u0444\u0430\u0441\u043E\u043D\u0456\u0432, \u0437\u0430\u0431\u0430\u0440\u0432\u043B\u0435\u043D\u043D\u044F \u0447\u0438 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0456\u0457."),
                    createVNode("p", { class: "mt-[15px] mb-[15px]" }, "\u0410\u043B\u0435! \u041C\u0438 \u0437\u0430\u0432\u0436\u0434\u0438 \u043B\u043E\u044F\u043B\u044C\u043D\u0456 \u0434\u043E \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432, \u0442\u043E\u043C\u0443 \u0443 \u043D\u0430\u0441, \u043D\u0430 \u0432\u0456\u0434\u043C\u0456\u043D\u0443 \u0432\u0456\u0434 \u0456\u043D\u0448\u0438\u0445 \u0456\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0456\u0432, \u0454 \u043E\u0431\u043C\u0456\u043D \u043A\u0443\u043F\u0430\u043B\u044C\u043D\u0438\u043A\u0456\u0432, \u044F\u043A\u0449\u043E \u0432\u0430\u043C \u043D\u0435 \u043F\u0456\u0434\u0456\u0439\u0434\u0435 \u0440\u043E\u0437\u043C\u0456\u0440 \u0430\u0431\u043E \u043A\u043E\u043B\u0456\u0440, \u0432\u0438 \u0431\u0435\u0437 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0437\u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0431\u043C\u0456\u043D\u044F\u0442\u0438 \u0439\u043E\u0433\u043E \u043D\u0430 \u0456\u043D\u0448\u0443 \u043C\u043E\u0434\u0435\u043B\u044C \u043A\u0443\u043F\u0430\u043B\u044C\u043D\u0438\u043A\u0430! (\u041E\u0431\u043C\u0456\u043D \u0440\u043E\u0431\u0438\u043C\u043E \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C 3-4\u0445 \u0440\u043E\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0456\u0432 \u043F\u0456\u0441\u043B\u044F \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0442\u043E\u0432\u0430\u0440\u0443)"),
                    createVNode("p", null, "\u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u043D\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044E \u0441\u043F\u0456\u0434\u043D\u044C\u043E\u0457 \u0431\u0456\u043B\u0438\u0437\u043D\u0438 \u043D\u0435\u043C\u0430\u0454!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(AccordionItem, null, {
                "accordion-trigger": withCtx(() => [
                  createTextVNode(" \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0456 \u043E\u043F\u043B\u0430\u0442\u0430 ")
                ]),
                "accordion-content": withCtx(() => [
                  createVNode("h2", { class: "text-[24px] font-[600] mt-[15x] mb-[15px]" }, "\u0411\u0430\u043D\u043A\u0456\u0432\u0441\u044C\u043A\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u0430\u0437 \u043D\u0430 \u043A\u0430\u0440\u0442\u0443"),
                  createVNode("p", null, "\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043F\u043B\u0430\u0442\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u0430\u043D\u043A\u0456\u0432\u0441\u044C\u043A\u043E\u044E \u043A\u0430\u0440\u0442\u043A\u043E\u044E Visa \u0442\u0430 MasterCard \u0431\u0435\u0437 \u043A\u043E\u043C\u0456\u0441\u0456\u0457, \u043F\u0440\u0438 \u0446\u044C\u043E\u043C\u0443 \u0432\u0438 \u0437\u0430\u043E\u0449\u0430\u0434\u0436\u0443\u0454\u0442\u0435 \u0432\u0456\u0434 50 \u0433\u0440\u0438\u0432\u0435\u043D\u044C \u043D\u0430 \u043F\u043E\u043A\u0443\u043F\u0446\u0456."),
                  createVNode("h2", { class: "text-[24px] font-[600] mt-[15x] mb-[15px]" }, "\u041D\u0430\u043A\u043B\u0430\u0434\u0435\u043D\u0438\u0439 \u043F\u043B\u0430\u0442\u0456\u0436"),
                  createVNode("p", null, "\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043F\u043B\u0430\u0442\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0456\u0441\u043B\u044F \u0439\u043E\u0433\u043E \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0443 \u0441\u043B\u0443\u0436\u0431\u0456 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \xAB\u041D\u043E\u0432\u0430 \u043F\u043E\u0448\u0442\u0430\xBB. \u041F\u0440\u0438 \u0446\u044C\u043E\u043C\u0443 \u0441\u043F\u043E\u0441\u043E\u0431\u0456 \u043E\u043F\u043B\u0430\u0442\u0438 \u0432\u0438 \u0441\u043F\u043B\u0430\u0447\u0443\u0454\u0442\u0435 \u0441\u0443\u043C\u0443, \u0449\u043E \u0441\u043A\u043B\u0430\u0434\u0430\u0454\u0442\u044C\u0441\u044F \u0437: \u0432\u0430\u0440\u0442\u043E\u0441\u0442\u0456 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 (\u0441\u0442\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F, \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F) \u0442\u043E\u0432\u0430\u0440\u0443 \u0437\u0430 \u0442\u0430\u0440\u0438\u0444\u0430\u043C\u0438 \xAB\u041D\u043E\u0432\u043E\u0457 \u043F\u043E\u0448\u0442\u0438\xBB (\u0432\u0456\u0434 40\u0433\u0440\u043D); 2% \u0432\u0430\u0440\u0442\u043E\u0441\u0442\u0456 \u0442\u043E\u0432\u0430\u0440\u0443."),
                  createVNode("p", { class: "mt-[1rem]" }, [
                    createVNode("strong", null, "\u0412\u0430\u0436\u043B\u0438\u0432\u043E!"),
                    createTextVNode(" \u041D\u0430\u043A\u043B\u0430\u0434\u0435\u043D\u0438\u0439 \u043F\u043B\u0430\u0442\u0456\u0436 \u043C\u043E\u0436\u043B\u0438\u0432\u0438\u0439 \u043B\u0438\u0448\u0435 \u0437 \u043C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u043E\u044E \u043F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u043E\u044E \u0443 \u0437\u0432'\u044F\u0437\u043A\u0443 \u0437 \u0432\u0456\u0439\u0441\u044C\u043A\u043E\u0432\u0438\u043C \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0449\u0435\u043C.")
                  ])
                ]),
                _: 1
              }),
              createVNode(AccordionItem, null, {
                "accordion-trigger": withCtx(() => [
                  createTextVNode(" \u0423\u043C\u043E\u0432\u0438 \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u0442\u0430 \u043E\u0431\u043C\u0456\u043D\u0443 \u0442\u043E\u0432\u0430\u0440\u0443 ")
                ]),
                "accordion-content": withCtx(() => [
                  createVNode("h2", { class: "text-[24px] font-[600] mt-[15x] mb-[15px]" }, "\u0423\u043C\u043E\u0432\u0438 \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u0442\u0430 \u043E\u0431\u043C\u0456\u043D\u0443 \u0442\u043E\u0432\u0430\u0440\u0443"),
                  createVNode("p", null, "\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0437\u0430\u043A\u043E\u043D\u0443 \xAB\u041F\u0440\u043E \u0437\u0430\u0445\u0438\u0441\u0442 \u043F\u0440\u0430\u0432 \u0441\u043F\u043E\u0436\u0438\u0432\u0430\u0447\u0456\u0432\xBB, \u043D\u0438\u0436\u043D\u044F \u0431\u0456\u043B\u0438\u0437\u043D\u0430 \u0442\u0430 \u043F\u0430\u043D\u0447\u0456\u0448\u043D\u043E-\u0448\u043A\u0430\u0440\u043F\u0435\u0442\u043A\u043E\u0432\u0456 \u0432\u0438\u0440\u043E\u0431\u0438 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0456 \u0434\u043E \xAB\u041F\u0435\u0440\u0435\u043B\u0456\u043A\u0443 \u043D\u0435\u043F\u0440\u043E\u0434\u043E\u0432\u043E\u043B\u044C\u0447\u0438\u0445 \u0442\u043E\u0432\u0430\u0440\u0456\u0432 \u043D\u0430\u043B\u0435\u0436\u043D\u043E\u0457 \u044F\u043A\u043E\u0441\u0442\u0456\xBB, \u044F\u043A\u0456 \u043D\u0435 \u043F\u0456\u0434\u043B\u044F\u0433\u0430\u044E\u0442\u044C \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044E \u0447\u0438 \u043E\u0431\u043C\u0456\u043D\u0443 \u043D\u0430 \u0430\u043D\u0430\u043B\u043E\u0433\u0456\u0447\u043D\u0456 \u043C\u043E\u0434\u0435\u043B\u0456 \u0456\u043D\u0448\u0438\u0445 \u0440\u043E\u0437\u043C\u0456\u0440\u0456\u0432, \u0444\u043E\u0440\u043C, \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u0456\u0432, \u0444\u0430\u0441\u043E\u043D\u0456\u0432, \u0437\u0430\u0431\u0430\u0440\u0432\u043B\u0435\u043D\u043D\u044F \u0447\u0438 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0456\u0457."),
                  createVNode("p", { class: "mt-[15px] mb-[15px]" }, "\u0410\u043B\u0435! \u041C\u0438 \u0437\u0430\u0432\u0436\u0434\u0438 \u043B\u043E\u044F\u043B\u044C\u043D\u0456 \u0434\u043E \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432, \u0442\u043E\u043C\u0443 \u0443 \u043D\u0430\u0441, \u043D\u0430 \u0432\u0456\u0434\u043C\u0456\u043D\u0443 \u0432\u0456\u0434 \u0456\u043D\u0448\u0438\u0445 \u0456\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0456\u0432, \u0454 \u043E\u0431\u043C\u0456\u043D \u043A\u0443\u043F\u0430\u043B\u044C\u043D\u0438\u043A\u0456\u0432, \u044F\u043A\u0449\u043E \u0432\u0430\u043C \u043D\u0435 \u043F\u0456\u0434\u0456\u0439\u0434\u0435 \u0440\u043E\u0437\u043C\u0456\u0440 \u0430\u0431\u043E \u043A\u043E\u043B\u0456\u0440, \u0432\u0438 \u0431\u0435\u0437 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0437\u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0431\u043C\u0456\u043D\u044F\u0442\u0438 \u0439\u043E\u0433\u043E \u043D\u0430 \u0456\u043D\u0448\u0443 \u043C\u043E\u0434\u0435\u043B\u044C \u043A\u0443\u043F\u0430\u043B\u044C\u043D\u0438\u043A\u0430! (\u041E\u0431\u043C\u0456\u043D \u0440\u043E\u0431\u0438\u043C\u043E \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C 3-4\u0445 \u0440\u043E\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0456\u0432 \u043F\u0456\u0441\u043B\u044F \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0442\u043E\u0432\u0430\u0440\u0443)"),
                  createVNode("p", null, "\u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u043D\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044E \u0441\u043F\u0456\u0434\u043D\u044C\u043E\u0457 \u0431\u0456\u043B\u0438\u0437\u043D\u0438 \u043D\u0435\u043C\u0430\u0454!")
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