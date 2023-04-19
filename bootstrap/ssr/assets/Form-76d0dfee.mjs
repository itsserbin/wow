import { computed, ref, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from "vue";
import { ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Card-1b507b9c.mjs";
import { _ as _sfc_main$1 } from "./Button-6b2e52a5.mjs";
import { _ as _sfc_main$3 } from "./Label-229c476a.mjs";
import { _ as _sfc_main$4 } from "./Input-4be85f13.mjs";
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
        label: "Oригінал",
        key: null
      }
    ];
    const activeSize = ref("350");
    function clickSize(val) {
      activeSize.value = val;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5"><!--[-->`);
      ssrRenderList(sizesState, (item) => {
        _push(ssrRenderComponent(_sfc_main$1, {
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
        _push(ssrRenderComponent(_sfc_main$2, {
          image: unref(imageSrc)(__props.image.src),
          "image-alt": __props.image.alt
        }, null, _parent));
        _push(`<div class="block mt-5">`);
        _push(ssrRenderComponent(_sfc_main$3, { value: "Alt" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$4, {
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
