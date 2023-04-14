import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import _sfc_main$3 from "./Timer-5e794b24.mjs";
import _sfc_main$4 from "./ProductCard-96fa0c88.mjs";
import { _ as _sfc_main$1 } from "./MasterLayout-ed8b7bea.mjs";
import _sfc_main$2 from "./Head-671d76dc.mjs";
import { defineComponent, ref, onMounted, useSSRContext } from "vue";
import { s as swal } from "./swal-dcd03cbb.mjs";
import { e as eventTracking } from "./eventTracking-3e33368b.mjs";
import "./Header-1206aee3.mjs";
import "./CartIcon-4c8884b3.mjs";
import "vuex";
import "./Langs-57d30b91.mjs";
import "./Logo-8552d818.mjs";
import "./HeaderCategories-743d6249.mjs";
import "swiper";
import "swiper/vue";
import "./Footer-e23e0d72.mjs";
import "./FixedBanner-285b457f.mjs";
import "./ScrollToTop-99a883e6.mjs";
import "@inertiajs/inertia-vue3";
const __default__ = defineComponent({ layout: _sfc_main$1 });
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    categories: Array,
    options: Object,
    pages: Array,
    lang: String,
    eventIdPageView: String,
    textThanksPageTitle: {
      type: String,
      default: "Дякую за ваше замовлення :)"
    },
    textThanksPageDescription: {
      type: String,
      default: "Найближчим часом з вами зв`яжеться оператор для підтвердження замовлення."
    },
    textThanksPageOrderId: {
      type: String,
      default: "Номер вашого замовлення:"
    },
    textThanksPageSpecials: {
      type: String,
      default: "Спеціальні пропозиції. Встигни додати до замовлення"
    },
    textThanksPageSpecialsEnds: {
      type: String,
      default: "Час дії пропозиції минув. Сподіваємось, Вас зацікавлять наші акції наступного разу. Починаємо готувати посилку і незабаром відправимо Ваше замовлення"
    }
  },
  setup(__props) {
    const props = __props;
    const timer = ref({
      hours: "",
      mins: "",
      secs: ""
    });
    const state = ref({
      orderId: null,
      isLoading: true,
      products: [],
      activeSpecialOffer: false
    });
    onMounted(async () => {
      state.value.orderId = route().params.id;
      await axios.get(route("api.v1.orders.special", state.value.orderId)).then(({ data }) => {
        if (data.result) {
          setInterval(function() {
            let t = new Date(data.result.end_time).getTime() - (/* @__PURE__ */ new Date()).getTime();
            if (t >= 0) {
              timer.value.hours = ("0" + Math.floor(t % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60))).slice(-2);
              timer.value.mins = ("0" + Math.floor(t % (1e3 * 60 * 60) / (1e3 * 60))).slice(-2);
              timer.value.secs = ("0" + Math.floor(t % (1e3 * 60) / 1e3)).slice(-2);
              state.value.activeSpecialOffer = true;
              state.value.products = data.result.products;
              state.value.isLoading = false;
            } else {
              state.value.activeSpecialOffer = false;
              state.value.isLoading = false;
            }
          }, 1e3);
        } else {
          state.value.isLoading = false;
          state.value.activeSpecialOffer = false;
        }
      });
      eventTracking("PageView", {}, props.eventIdPageView);
    });
    const addItemToOrder = async (id, price) => {
      await axios.post("/api/v1/order/add-item/" + state.value.orderId, {
        "id": id,
        "price": price
      }).then(async () => await swal({
        icon: "success",
        title: "Додано!",
        text: "Товар успішно додано до вашого замовлення"
      })).catch(async (response) => {
        console.error(response);
        await swal({
          icon: "error",
          title: "Виникла помилка",
          text: "Зверніться до адміністратора"
        });
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, { title: "Дякуємо за покупку!" }, null, _parent));
      _push(`<section class="grid gap-4 grid-cols-1"><div class="grid grid-cols-1 gap-4"><h1 class="font-bold text-black text-center text-2xl font-heading">${ssrInterpolate(__props.textThanksPageTitle)}</h1><div class="text-center text-xl font-subheading"><p>${ssrInterpolate(__props.textThanksPageDescription)}</p></div>`);
      if (state.value.orderId) {
        _push(`<div class="text-center text-xl font-subheading">${ssrInterpolate(__props.textThanksPageOrderId)} ${ssrInterpolate(state.value.orderId)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (state.value.activeSpecialOffer) {
        _push(`<div class="grid gap-4 mt-5"><div class="font-bold text-black text-center text-2xl font-subheading">${ssrInterpolate(__props.textThanksPageSpecials)}</div>`);
        _push(ssrRenderComponent(_sfc_main$3, { timer: timer.value }, null, _parent));
        _push(`<div class="grid grid-cols-2 md:grid-cols-4 gap-4"><!--[-->`);
        ssrRenderList(state.value.products, (product) => {
          _push(ssrRenderComponent(_sfc_main$4, {
            product,
            onAddItemToOrder: addItemToOrder,
            lang: __props.lang
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div class="order-page__text my-5"><p>${ssrInterpolate(__props.textThanksPageSpecialsEnds)}</p></div>`);
      }
      _push(`</section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Thanks/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
