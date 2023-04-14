import { ref, onMounted, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$3 from "./Breadcrumbs.be68275e.mjs";
import { _ as _sfc_main$1 } from "./MasterLayout.be7b21fc.mjs";
import _sfc_main$4 from "./Form.fa9bd05d.mjs";
import _sfc_main$5 from "./Status.2cb9bde0.mjs";
import _sfc_main$2 from "./Head.9b78d2ae.mjs";
import { s as swal } from "./swal.a7da81d8.mjs";
import "./Breadcrumbs.1a27781b.mjs";
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
import "./Button.ec6da28a.mjs";
import "maska";
import "./OrderItem.f44a4629.mjs";
import "@inertiajs/inertia-vue3";
const _sfc_main = {
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
            title: "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E",
            text: "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0432\u0432\u0435\u0434\u0435\u043D\u0456 \u0434\u0430\u043D\u0456 \u0430\u0431\u043E \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u0434\u043E \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430"
          });
        }
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
            _push2(ssrRenderComponent(_sfc_main$2, { title: "\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F" }, null, _parent2, _scopeId));
            if (!state.value.isLoading) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                options: __props.options,
                lang: __props.lang,
                title: "\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"
              }, null, _parent2, _scopeId));
              _push2(`<div class="max-w-xl mx-auto"${_scopeId}>`);
              if (!state.value.order) {
                _push2(ssrRenderComponent(_sfc_main$4, {
                  item: state.value.item,
                  onSubmitForm: checkStatus
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (state.value.order) {
                _push2(ssrRenderComponent(_sfc_main$5, {
                  order: state.value.order,
                  statuses: state.value.statuses
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_sfc_main$2, { title: "\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F" }),
              !state.value.isLoading ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(_sfc_main$3, {
                  options: __props.options,
                  lang: __props.lang,
                  title: "\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F"
                }, null, 8, ["options", "lang"]),
                createVNode("div", { class: "max-w-xl mx-auto" }, [
                  !state.value.order ? (openBlock(), createBlock(_sfc_main$4, {
                    key: 0,
                    item: state.value.item,
                    onSubmitForm: checkStatus
                  }, null, 8, ["item"])) : createCommentVNode("", true),
                  state.value.order ? (openBlock(), createBlock(_sfc_main$5, {
                    key: 1,
                    order: state.value.order,
                    statuses: state.value.statuses
                  }, null, 8, ["order", "statuses"])) : createCommentVNode("", true)
                ])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Status/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
