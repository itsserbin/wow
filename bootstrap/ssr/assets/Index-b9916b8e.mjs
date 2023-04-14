import { ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$3 from "./Breadcrumbs-f4dc6d94.mjs";
import { _ as _sfc_main$1 } from "./MasterLayout-9fe3199f.mjs";
import _sfc_main$4 from "./Form-0c9142fa.mjs";
import _sfc_main$5 from "./Status-8cef1d0a.mjs";
import _sfc_main$2 from "./Head-671d76dc.mjs";
import { s as swal } from "./swal-dcd03cbb.mjs";
import { defineComponent, ref, onMounted, useSSRContext } from "vue";
import "./Breadcrumbs-adc4c20b.mjs";
import "./Header-c963791c.mjs";
import "./CartIcon-e2b4a7b1.mjs";
import "vuex";
import "@inertiajs/inertia-vue3";
import "./Langs-57d30b91.mjs";
import "./Logo-21a2caa8.mjs";
import "./HeaderCategories-7a506650.mjs";
import "swiper";
import "swiper/vue";
import "./Footer-e23e0d72.mjs";
import "./FixedBanner-285b457f.mjs";
import "./ScrollToTop-99a883e6.mjs";
import "./Label-45b40ea1.mjs";
import "./Input-4d6b8e1d.mjs";
import "./Button-e6d9c4d7.mjs";
import "./maska-e9315c75.mjs";
import "./OrderItem-7624c01e.mjs";
const __default__ = defineComponent({ layout: _sfc_main$1 });
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Index",
  __ssrInlineRender: true,
  props: [
    "statuses",
    "categories",
    "options",
    "lang",
    "pages",
    "eventIdPageView"
  ],
  setup(__props) {
    const state = ref({
      item: {
        phone: null,
        order_id: null
      },
      isLoading: false,
      statuses: [],
      order: null
    });
    onMounted(async () => {
      if (route().params.order_id && route().params.phone) {
        state.value.item.phone = route().params.phone;
        state.value.item.order_id = route().params.order_id;
        await checkStatus();
      }
    });
    const checkStatus = async () => {
      await axios.post(route("api.v1.orders.status"), state.value.item).then(({ data }) => {
        if (data.result) {
          state.value.order = data.result;
        } else {
          swal({
            icon: "error",
            title: "Замовлення не знайдено",
            text: "Перевірте введені дані або зверніться за допомогою до менеджера"
          });
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, { title: "Статус замовлення" }, null, _parent));
      if (!state.value.isLoading) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          "current-url": _ctx.route().current,
          options: __props.options,
          lang: __props.lang,
          title: "Статус замовлення"
        }, null, _parent));
        _push(`<div class="max-w-xl mx-auto">`);
        if (!state.value.order) {
          _push(ssrRenderComponent(_sfc_main$4, {
            item: state.value.item,
            onSubmitForm: checkStatus
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (state.value.order) {
          _push(ssrRenderComponent(_sfc_main$5, {
            order: state.value.order,
            statuses: state.value.statuses
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Status/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
