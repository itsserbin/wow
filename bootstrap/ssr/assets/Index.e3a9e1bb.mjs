import { ref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./MasterLayout.be7b21fc.mjs";
import _sfc_main$4 from "./Form.0a09b2a3.mjs";
import _sfc_main$3 from "./Breadcrumbs.876240f9.mjs";
import _sfc_main$2 from "./Head.9b78d2ae.mjs";
import { s as swal } from "./swal.a7da81d8.mjs";
import "./Header.4109ad68.mjs";
import "./CartIcon.79888d2e.mjs";
import "vuex";
import "./Langs.3ba4b35e.mjs";
import "./Logo.5e8f1180.mjs";
import "./HeaderCategories.0e67c59a.mjs";
import "swiper";
import "swiper/vue";
import "./Footer.5f194abc.mjs";
import "./FixedBanner.5b212d34.mjs";
import "./ScrollToTop.c4b9ced3.mjs";
import "./Label.4ae45cc4.mjs";
import "./Input.aac4ec2d.mjs";
import "./InputError.f356d54a.mjs";
import "./Button.ec6da28a.mjs";
import "./Textarea.74554057.mjs";
import "maska";
import "./Breadcrumbs.1a27781b.mjs";
import "@inertiajs/inertia-vue3";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: [
    "eventIdPageView",
    "categories",
    "options",
    "lang",
    "pages"
  ],
  setup(__props) {
    const state = ref({
      item: {
        name: null,
        phone: null,
        order_id: null,
        comment: null
      },
      errors: []
    });
    const submitForm = async () => {
      await axios.post(route("api.v1.support.create"), state.value.item).then(() => {
        swal({
          icon: "success",
          title: "\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E!",
          text: "\u0412\u0430\u0448 \u0437\u0430\u043F\u0438\u0442 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043E \u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0443, \u0447\u0435\u043A\u0430\u0439\u0442\u0435 \u0437\u0432\u02BC\u044F\u0437\u043A\u0443 \u0437 \u043D\u0430\u0448\u0438\u043C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u043C \u043D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0438\u043C \u0447\u0430\u0441\u043E\u043C"
        });
        setTimeout(() => {
          if (typeof window !== "undefined") {
            window.location.href = route("home");
          }
        }, 3e3);
      }).catch(({ response }) => {
        state.value.errors = response.data;
        swal({
          icon: "error",
          title: "\u041F\u043E\u043C\u0438\u043B\u043A\u0430!",
          text: "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456\u0441\u0442\u044C \u0434\u0430\u043D\u0438\u0445"
        });
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        categories: __props.categories,
        options: __props.options,
        lang: __props.lang,
        pages: __props.pages,
        eventIdPageView: __props.eventIdPageView
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, { title: "\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              options: __props.options,
              lang: __props.lang,
              title: "\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430"
            }, null, _parent2, _scopeId));
            _push2(`<div class="max-w-xl mx-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              item: state.value.item,
              onSubmitForm: submitForm,
              errors: state.value.errors
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_sfc_main$2, { title: "\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432" }),
              createVNode(_sfc_main$3, {
                options: __props.options,
                lang: __props.lang,
                title: "\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430"
              }, null, 8, ["options", "lang"]),
              createVNode("div", { class: "max-w-xl mx-auto" }, [
                createVNode(_sfc_main$4, {
                  item: state.value.item,
                  onSubmitForm: submitForm,
                  errors: state.value.errors
                }, null, 8, ["item", "errors"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Support/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
