import { ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, withDirectives, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import _sfc_main$1 from "./Input.aac4ec2d.mjs";
import _sfc_main$2 from "./Button.ec6da28a.mjs";
import Accordion from "./Accordion.635accb3.mjs";
import AccordionItem from "./AccordionItem.ae8efcce.mjs";
import Slider from "@vueform/slider";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "gsap";
const Filter_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "Filter",
  __ssrInlineRender: true,
  props: ["characteristics", "lang", "isShow"],
  emits: ["fetch", "close"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const state = ref({
      price: [
        props.characteristics.price.min,
        props.characteristics.price.max
      ],
      characteristics: {},
      sizes: [],
      colors: []
    });
    props.characteristics.list.forEach((item) => {
      state.value.characteristics[item.id] = [];
    });
    const params = computed(() => {
      let characteristics = [];
      props.characteristics.list.forEach((item) => {
        if (state.value.characteristics[item.id].length) {
          state.value.characteristics[item.id].forEach((val) => {
            characteristics.push(val);
          });
        }
      });
      return {
        characteristics,
        price: state.value.price,
        colors: state.value.colors,
        sizes: state.value.sizes
      };
    });
    function filter() {
      emits("fetch", params.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-secondary rounded-lg shadow-sm p-7" }, _attrs))}>`);
      if (__props.isShow) {
        _push(`<button type="button" class="absolute top-4 right-2"><svg aria-hidden="true" class="w-5 h-5 test_x" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid grid-cols-1 gap-4"><div class="block"><label class="block mb-2 text-sm font-medium text-gray-900"> \u0426\u0456\u043D\u0430 </label><div class="flex items-center">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        type: "nubmer",
        modelValue: state.value.price[0],
        "onUpdate:modelValue": ($event) => state.value.price[0] = $event,
        placeholder: "\u0412\u0456\u0434",
        class: "mt-0"
      }, null, _parent));
      _push(`<p class="text-2xl px-3">-</p>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        type: "nubmer",
        modelValue: state.value.price[1],
        "onUpdate:modelValue": ($event) => state.value.price[1] = $event,
        placeholder: "\u0414\u043E",
        class: "mt-0"
      }, null, _parent));
      _push(`</div><div class="py-6">`);
      _push(ssrRenderComponent(unref(Slider), {
        modelValue: state.value.price,
        "onUpdate:modelValue": ($event) => state.value.price = $event,
        tooltipPosition: "bottom",
        min: __props.characteristics.price.min,
        max: __props.characteristics.price.max,
        class: "slider-red"
      }, null, _parent));
      _push(`</div></div><div class="block"><label class="block mb-2 text-sm font-medium text-gray-900"> \u0420\u043E\u0437\u043C\u0456\u0440\u0438 </label><ul class="grid w-full gap-2 grid-cols-5"><!--[-->`);
      ssrRenderList(__props.characteristics.sizes, (size) => {
        _push(`<li><input type="checkbox"${ssrRenderAttr("id", "size_" + size.id)} multiple${ssrIncludeBooleanAttr(Array.isArray(state.value.sizes) ? ssrLooseContain(state.value.sizes, size.id) : state.value.sizes) ? " checked" : ""}${ssrRenderAttr("value", size.id)} class="hidden peer"><label${ssrRenderAttr("for", "size_" + size.id)} class="inline-flex text-sm items-center justify-center w-full p-3 text-text bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">${ssrInterpolate(size.title)}</label></li>`);
      });
      _push(`<!--]--></ul></div><div class="block"><label class="block mb-2 text-sm font-medium text-gray-900"> \u041A\u043E\u043B\u044C\u043E\u0440\u0438 </label><ul class="grid w-full gap-3 grid-cols-6"><!--[-->`);
      ssrRenderList(__props.characteristics.colors, (color) => {
        _push(`<li><input type="checkbox"${ssrRenderAttr("id", color.id)}${ssrRenderAttr("value", color.id)} class="hidden peer"${ssrIncludeBooleanAttr(Array.isArray(state.value.colors) ? ssrLooseContain(state.value.colors, color.id) : state.value.colors) ? " checked" : ""}><label${ssrRenderAttr("for", color.id)} style="${ssrRenderStyle("background-color:" + color.hex)}" class="inline-flex justify-center items-center mx-auto text-black-500 rounded-lg border-2 border-gray-200 cursor-pointer peer-checked:border-blue-600 hover:text-black peer-checked:text-gray-600 hover:bg-black w-[40px] h-[40px]"></label></li>`);
      });
      _push(`<!--]--></ul></div>`);
      _push(ssrRenderComponent(Accordion, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.characteristics.list, (item) => {
              _push2(ssrRenderComponent(AccordionItem, null, {
                "accordion-trigger": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.title[__props.lang])}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.title[__props.lang]), 1)
                    ];
                  }
                }),
                "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<ul class="h-48 px-1 pb-3 overflow-y-auto text-sm text-gray-700"${_scopeId2}><!--[-->`);
                    ssrRenderList(item.values, (value) => {
                      _push3(`<li${_scopeId2}><div class="flex items-center p-1"${_scopeId2}><input type="checkbox"${ssrRenderAttr("value", value.id)}${ssrIncludeBooleanAttr(Array.isArray(state.value.characteristics[item.id]) ? ssrLooseContain(state.value.characteristics[item.id], value.id) : state.value.characteristics[item.id]) ? " checked" : ""} multiple class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"${_scopeId2}><label class="w-full ml-2 text-sm font-medium rounded"${_scopeId2}>${ssrInterpolate(value.title[__props.lang])}</label></div></li>`);
                    });
                    _push3(`<!--]--></ul>`);
                  } else {
                    return [
                      createVNode("ul", { class: "h-48 px-1 pb-3 overflow-y-auto text-sm text-gray-700" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.values, (value) => {
                          return openBlock(), createBlock("li", null, [
                            createVNode("div", { class: "flex items-center p-1" }, [
                              withDirectives(createVNode("input", {
                                type: "checkbox",
                                value: value.id,
                                "onUpdate:modelValue": ($event) => state.value.characteristics[item.id] = $event,
                                multiple: "",
                                class: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                              }, null, 8, ["value", "onUpdate:modelValue"]), [
                                [vModelCheckbox, state.value.characteristics[item.id]]
                              ]),
                              createVNode("label", { class: "w-full ml-2 text-sm font-medium rounded" }, toDisplayString(value.title[__props.lang]), 1)
                            ])
                          ]);
                        }), 256))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.characteristics.list, (item) => {
                return openBlock(), createBlock(AccordionItem, null, {
                  "accordion-trigger": withCtx(() => [
                    createTextVNode(toDisplayString(item.title[__props.lang]), 1)
                  ]),
                  "accordion-content": withCtx(() => [
                    createVNode("ul", { class: "h-48 px-1 pb-3 overflow-y-auto text-sm text-gray-700" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.values, (value) => {
                        return openBlock(), createBlock("li", null, [
                          createVNode("div", { class: "flex items-center p-1" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              value: value.id,
                              "onUpdate:modelValue": ($event) => state.value.characteristics[item.id] = $event,
                              multiple: "",
                              class: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                            }, null, 8, ["value", "onUpdate:modelValue"]), [
                              [vModelCheckbox, state.value.characteristics[item.id]]
                            ]),
                            createVNode("label", { class: "w-full ml-2 text-sm font-medium rounded" }, toDisplayString(value.title[__props.lang]), 1)
                          ])
                        ]);
                      }), 256))
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        type: "button",
        onClick: filter
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0424\u0456\u043B\u044C\u0442\u0440\u0443\u0432\u0430\u0442\u0438`);
          } else {
            return [
              createTextVNode("\u0424\u0456\u043B\u044C\u0442\u0440\u0443\u0432\u0430\u0442\u0438")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Category/Filter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
