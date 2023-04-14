import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./MasterLayout-bf4964bc.mjs";
import _sfc_main$4 from "./Form-9631357e.mjs";
import _sfc_main$3 from "./Breadcrumbs-e67269f5.mjs";
import _sfc_main$2 from "./Head-671d76dc.mjs";
import { defineComponent, ref, useSSRContext } from "vue";
import { s as swal } from "./swal-dcd03cbb.mjs";
import "./Header-afe7698b.mjs";
import "./CartIcon-e2b4a7b1.mjs";
import "vuex";
import "@inertiajs/inertia-vue3";
import "./Langs-57d30b91.mjs";
import "./Logo-21a2caa8.mjs";
import "./HeaderCategories-391c289b.mjs";
import "swiper";
import "swiper/vue";
import "./Footer-e23e0d72.mjs";
import "./FixedBanner-285b457f.mjs";
import "./ScrollToTop-99a883e6.mjs";
import "./eventTracking-3e33368b.mjs";
import "./Label-45b40ea1.mjs";
import "./Input-4d6b8e1d.mjs";
import "./InputError-71f0cb4c.mjs";
import "./Button-e6d9c4d7.mjs";
import "./Textarea-411bf5c9.mjs";
import "./maska-e9315c75.mjs";
import "./Breadcrumbs-adc4c20b.mjs";
const __default__ = defineComponent({ layout: _sfc_main$1 });
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
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
          title: "Відправлено!",
          text: "Ваш запит передано на обробку, чекайте звʼязку з нашим менеджером найближчим часом"
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
          title: "Помилка!",
          text: "Перевірте коректність даних"
        });
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, { title: "Підтримка клієнтів" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        currentUrl: _ctx.route().current,
        options: __props.options,
        lang: __props.lang,
        title: "Підтримка"
      }, null, _parent));
      _push(`<div class="max-w-xl mx-auto">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        item: state.value.item,
        onSubmitForm: submitForm,
        errors: state.value.errors
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Support/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
