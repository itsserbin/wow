import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useStore } from "vuex";
import _sfc_main$2 from "./Button-e6d9c4d7.mjs";
import _sfc_main$1 from "./Input-4d6b8e1d.mjs";
import { s as swal } from "./swal-dcd03cbb.mjs";
const _sfc_main = {
  __name: "PromoCode",
  __ssrInlineRender: true,
  setup(__props) {
    const promo_code = ref(null);
    const store = useStore();
    function activateCode() {
      axios.post("/api/v1/cart/promo-code/activate", {
        promo_code: promo_code.value
      }).then(({ data }) => {
        if (data.result) {
          swal({
            icon: "success",
            title: "Промо-код активирован"
          });
          store.commit("loadCart");
        } else {
          swal({
            icon: "error",
            title: "Произошла ошибка :(",
            text: "Возможно, промо-код введен некорректно, или же истек срок действия"
          });
        }
      }).catch((response) => console.log(response));
    }
    function deactivateCode() {
      axios.post("/api/v1/cart/promo-code/deactivate").then(() => {
        swal({
          "title": "Промо-код деактивирован!",
          "icon": "success"
        });
        store.commit("loadCart");
      }).catch((response) => console.log(response));
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "items-center border-gray-300 flex rounded-[15px] shadow-lg box-border justify-between p-[1rem] mb-3 flex-col md:flex-row" }, _attrs))}><label class="text-[#231f20] flex-row text-lg font-subheading font-[500] text-center">Промокод</label>`);
      if (!unref(store).state.promo_code) {
        _push(ssrRenderComponent(_sfc_main$1, {
          type: "text",
          placeholder: "XXX-XXX-XXX",
          modelValue: promo_code.value,
          "onUpdate:modelValue": ($event) => promo_code.value = $event,
          class: "py-1 text-center w-[100%] rounded-[20px] mx-3 my-3 md:my-0 font-heading"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(store).state.promo_code) {
        _push(ssrRenderComponent(_sfc_main$1, {
          type: "text",
          placeholder: "XXX-XXX-XXX",
          value: unref(store).state.promo_code,
          class: "py-1 text-center w-[100%] rounded-[20px] mx-3 my-3 md:my-0 font-heading"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(store).state.promo_code) {
        _push(ssrRenderComponent(_sfc_main$2, {
          type: "button",
          onClick: deactivateCode
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Деактивувати `);
            } else {
              return [
                createTextVNode(" Деактивувати ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(store).state.promo_code) {
        _push(ssrRenderComponent(_sfc_main$2, {
          onClick: activateCode,
          type: "button"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Активувати `);
            } else {
              return [
                createTextVNode(" Активувати ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Cart/PromoCode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
