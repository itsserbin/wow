import { mergeProps, useSSRContext, resolveComponent, ref, onMounted, withCtx, createTextVNode, toDisplayString, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import _sfc_main$9 from "./ItemsTable-9667c9ad.mjs";
import { _ as _sfc_main$5 } from "./Label-229c476a.mjs";
import { _ as _sfc_main$6 } from "./Select-b70673dc.mjs";
import { _ as _sfc_main$7 } from "./Input-4be85f13.mjs";
import { _ as _sfc_main$8 } from "./Textarea-1805d9a6.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import gsap from "gsap";
import { a as _sfc_main$3, b as _sfc_main$4 } from "./Table-df76b95f.mjs";
import "vue-i18n";
const _sfc_main$2 = {
  props: {},
  data() {
    return {
      Accordion: {
        count: 0,
        active: null
      }
    };
  },
  provide() {
    return { Accordion: this.Accordion };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-lg" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Accordion/Accordion.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Accordion = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  props: {},
  inject: ["Accordion"],
  data() {
    return {
      index: null
    };
  },
  components: {
    ArrowUp: _sfc_main$3,
    ArrowDown: _sfc_main$4
  },
  computed: {
    visible() {
      return this.index === this.Accordion.active;
    }
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 0.5,
        opacity: 1,
        height: el.scrollHeight,
        delay: el.dataset.index * 0.15,
        ease: "Power3.easeIn",
        onComplete: done
      });
    },
    leave(el, done) {
      gsap.to(el, {
        duration: 0.5,
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        ease: "Power3.easeOut",
        onComplete: done
      });
    }
  },
  created() {
    this.index = this.Accordion.count++;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ArrowUp = resolveComponent("ArrowUp");
  const _component_ArrowDown = resolveComponent("ArrowDown");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["first:rounded-t-lg last:rounded-b-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all", {
      "dark:bg-gray-800": $options.visible,
      "dark:bg-gray-600": !$options.visible
    }]
  }, _attrs))}><button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 dark:text-gray-400"><span>`);
  ssrRenderSlot(_ctx.$slots, "accordion-trigger", {}, null, _push, _parent);
  _push(`</span>`);
  if (!$options.visible) {
    _push(ssrRenderComponent(_component_ArrowUp, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($options.visible) {
    _push(ssrRenderComponent(_component_ArrowDown, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</button><div style="${ssrRenderStyle($options.visible ? null : { display: "none" })}"><div class="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-800 dark:bg-gray-800">`);
  ssrRenderSlot(_ctx.$slots, "accordion-content", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Accordion/AccordionItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AccordionItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item", "statuses", "subStatuses", "orderStatuses"],
  setup(__props) {
    const props = __props;
    const state = ref({
      itemsModalAction: "",
      statuses: [],
      subStatuses: {
        experienced: [],
        return: []
      }
    });
    onMounted(
      () => {
        for (const [key, value] of Object.entries(props.subStatuses.experienced)) {
          state.value.subStatuses.experienced.push({
            value,
            key
          });
        }
        for (const [key, value] of Object.entries(props.subStatuses.return)) {
          state.value.subStatuses.return.push({
            value,
            key
          });
        }
        for (const [key, value] of Object.entries(props.statuses)) {
          state.value.statuses.push({
            value,
            key
          });
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "grid gap-4" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        value: _ctx.$t("clients.status")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        modelValue: __props.item.status,
        "onUpdate:modelValue": ($event) => __props.item.status = $event,
        options: state.value.statuses
      }, null, _parent));
      _push(`</div>`);
      if (__props.item.status === "experienced" || __props.item.status === "return") {
        _push(`<div class="block">`);
        _push(ssrRenderComponent(_sfc_main$5, {
          value: _ctx.$t("clients.sub_status")
        }, null, _parent));
        if (__props.item.status === "experienced") {
          _push(ssrRenderComponent(_sfc_main$6, {
            modelValue: __props.item.subStatuses,
            "onUpdate:modelValue": ($event) => __props.item.subStatuses = $event,
            options: state.value.subStatuses.experienced
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (__props.item.status === "return") {
          _push(ssrRenderComponent(_sfc_main$6, {
            modelValue: __props.item.subStatuses,
            "onUpdate:modelValue": ($event) => __props.item.subStatuses = $event,
            options: state.value.subStatuses.return
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="grid gap-4"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        value: _ctx.$t("clients.name")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        modelValue: __props.item.name,
        "onUpdate:modelValue": ($event) => __props.item.name = $event,
        type: "text",
        placeholder: _ctx.$t("clients.enter_name")
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        value: _ctx.$t("clients.last_name")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        modelValue: __props.item.last_name,
        "onUpdate:modelValue": ($event) => __props.item.last_name = $event,
        type: "text",
        placeholder: _ctx.$t("clients.enter_last_name")
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        value: _ctx.$t("clients.middle_name")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        modelValue: __props.item.middle_name,
        "onUpdate:modelValue": ($event) => __props.item.middle_name = $event,
        type: "text",
        placeholder: _ctx.$t("clients.enter_middle_name")
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        value: _ctx.$t("clients.middle_name")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        modelValue: __props.item.phone,
        "onUpdate:modelValue": ($event) => __props.item.phone = $event,
        type: "tel",
        placeholder: _ctx.$t("clients.enter_phone")
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        value: _ctx.$t("clients.email")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        modelValue: __props.item.email,
        "onUpdate:modelValue": ($event) => __props.item.email = $event,
        type: "email",
        placeholder: _ctx.$t("clients.enter_email")
      }, null, _parent));
      _push(`</div></div><div class="siv">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        value: _ctx.$t("clients.comment")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, {
        modelValue: __props.item.comment,
        "onUpdate:modelValue": ($event) => __props.item.comment = $event,
        rows: "18",
        placeholder: _ctx.$t("clients.enter_comment")
      }, null, _parent));
      _push(`</div></div>`);
      if (__props.item.orders.length) {
        _push(ssrRenderComponent(Accordion, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(AccordionItem, null, {
                "accordion-trigger": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t("orders.page_title"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t("orders.page_title")), 1)
                    ];
                  }
                }),
                "accordion-content": withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$9, {
                      data: __props.item.orders,
                      "order-statuses": __props.orderStatuses
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$9, {
                        data: __props.item.orders,
                        "order-statuses": __props.orderStatuses
                      }, null, 8, ["data", "order-statuses"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(AccordionItem, null, {
                  "accordion-trigger": withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("orders.page_title")), 1)
                  ]),
                  "accordion-content": withCtx(() => [
                    createVNode(_sfc_main$9, {
                      data: __props.item.orders,
                      "order-statuses": __props.orderStatuses
                    }, null, 8, ["data", "order-statuses"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.item.orders.length) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-4 text-center gap-4"><div class="block">${ssrInterpolate(_ctx.$t("clients.number_of_purchases"))}: ${ssrInterpolate(__props.item.number_of_purchases)}</div><div class="block">${ssrInterpolate(_ctx.$t("clients.purchased_goods"))}: ${ssrInterpolate(__props.item.purchased_goods)}</div><div class="block">${ssrInterpolate(_ctx.$t("clients.average_check"))}: ${ssrInterpolate(_ctx.$filters.formatMoney(__props.item.average_check))}</div><div class="block">${ssrInterpolate(_ctx.$t("clients.whole_check"))}: ${ssrInterpolate(_ctx.$filters.formatMoney(__props.item.whole_check))}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Crm/Clients/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
