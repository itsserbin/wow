import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import Accordion from "./Accordion.635accb3.mjs";
import AccordionItem from "./AccordionItem.ae8efcce.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "gsap";
const _sfc_main = {
  __name: "FaqComponent",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array
    },
    lang: {
      type: String,
      default: "ua"
    },
    textFaqHeading: {
      type: String,
      default: "FAQ"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.data.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-[100%]" }, _attrs))}><div class="flex flex-row justify-center mb-3"><div class="w-[100%] grow-0 shrink-0 basis-[auto]"><div class="font-bold text-[22px] text-center text-black mb-3">${ssrInterpolate(__props.textFaqHeading)}</div>`);
        _push(ssrRenderComponent(Accordion, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.data, (faq) => {
                _push2(ssrRenderComponent(AccordionItem, null, {
                  "accordion-trigger": withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(__props.lang === "ua" ? faq.question.ua : faq.question.ru)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(__props.lang === "ua" ? faq.question.ua : faq.question.ru), 1)
                      ];
                    }
                  }),
                  "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div${_scopeId2}>${__props.lang === "ua" ? faq.answer.ua : faq.answer.ru}</div>`);
                    } else {
                      return [
                        createVNode("div", {
                          innerHTML: __props.lang === "ua" ? faq.answer.ua : faq.answer.ru
                        }, null, 8, ["innerHTML"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.data, (faq) => {
                  return openBlock(), createBlock(AccordionItem, null, {
                    "accordion-trigger": withCtx(() => [
                      createTextVNode(toDisplayString(__props.lang === "ua" ? faq.question.ua : faq.question.ru), 1)
                    ]),
                    "accordion-content": withCtx(() => [
                      createVNode("div", {
                        innerHTML: __props.lang === "ua" ? faq.answer.ua : faq.answer.ru
                      }, null, 8, ["innerHTML"])
                    ]),
                    _: 2
                  }, 1024);
                }), 256))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/FaqComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
