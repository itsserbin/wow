import { computed, ref, resolveComponent, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from "vue";
import { ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { o as _sfc_main$1 } from "../app2.mjs";
import "./vue.m.487fc989.mjs";
import "axios";
import "@inertiajs/inertia-vue3";
import "@inertiajs/progress";
import "./vendor.67403750.mjs";
import "vue-sweetalert2";
import "moment";
import "numeral";
import "@tinymce/tinymce-vue";
import "vue-i18n";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "./Logo.5e8f1180.mjs";
import "@inertiajs/vue3";
import "vuex";
import "@vuepic/vue-datepicker";
import "chart.js";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["image"],
  setup(__props) {
    const imageSrc = computed(() => (value) => {
      if (activeSize.value === "55") {
        return route("images.55", value);
      } else if (activeSize.value === "350") {
        return route("images.350", value);
      } else if (activeSize.value === "500") {
        return route("images.500", value);
      } else {
        return route("images", value);
      }
    });
    const sizesState = [
      {
        label: "55",
        key: "55"
      },
      {
        label: "350",
        key: "350"
      },
      {
        label: "500",
        key: "500"
      },
      {
        label: "O\u0440\u0438\u0433\u0456\u043D\u0430\u043B",
        key: null
      }
    ];
    const activeSize = ref("350");
    function clickSize(val) {
      activeSize.value = val;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_button_component = resolveComponent("button-component");
      const _component_label_component = resolveComponent("label-component");
      const _component_input_component = resolveComponent("input-component");
      _push(`<!--[--><div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5"><!--[-->`);
      ssrRenderList(sizesState, (item) => {
        _push(ssrRenderComponent(_component_button_component, {
          type: "button",
          onClick: ($event) => clickSize(item.key),
          active: item.key === activeSize.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      if (__props.image) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          image: unref(imageSrc)(__props.image.src),
          "image-alt": __props.image.alt
        }, null, _parent));
        _push(`<div class="block mt-5">`);
        _push(ssrRenderComponent(_component_label_component, { value: "Alt" }, null, _parent));
        _push(ssrRenderComponent(_component_input_component, {
          modelValue: __props.image.alt,
          "onUpdate:modelValue": ($event) => __props.image.alt = $event,
          type: "text"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Content/Images/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
