import { inject, ref, onMounted, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$5 from "./UploadBannersInput-3efbf145.mjs";
import { _ as _sfc_main$4 } from "./Input-4be85f13.mjs";
import { _ as _sfc_main$1 } from "./Label-229c476a.mjs";
import { _ as _sfc_main$2 } from "./Select-b70673dc.mjs";
import { _ as _sfc_main$3 } from "./LangTabs-3c63a9c9.mjs";
import { M as Multiselect } from "./Multiselect-c4e07430.mjs";
import "./ImageCard-96741a4a.mjs";
import "./XCircle-6a269edb.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item"],
  emits: ["onUploadImage"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const publishedStatuses = inject("$publishedStatuses");
    const defaultLang = inject("$defaultLang");
    const state = ref({
      categories: [],
      activeLang: defaultLang
    });
    onMounted(() => {
      axios.get(route("api.categories.list")).then(({ data }) => state.value.categories = data.result).catch((response) => console.log(response));
    });
    function h1AndCodeAndId({ title, id }) {
      if (title && id) {
        return `${state.value.activeLang === "ua" ? title.ua : state.value.activeLang === "ru" ? title.ru : "-"} -${id}`;
      } else {
        return `${id}`;
      }
    }
    function changeLang(val) {
      state.value.activeLang = val;
    }
    function uploadImageMobileUa(file) {
      uploadImage(file, "mobile", "ua");
    }
    function uploadImageMobileRu(file) {
      uploadImage(file, "mobile", "ru");
    }
    function uploadImageTableUa(file) {
      uploadImage(file, "table", "ua");
    }
    function uploadImageTableRu(file) {
      uploadImage(file, "table", "ru");
    }
    function uploadImageDesktopUa(file) {
      uploadImage(file, "desktop", "ua");
    }
    function uploadImageDesktopRu(file) {
      uploadImage(file, "desktop", "ru");
    }
    function uploadImage(image, device, lang) {
      emits("onUploadImage", image, device, lang);
    }
    function destroyImage(device, lang) {
      if (device === "mobile") {
        if (lang === "ru") {
          props.item.image_mobile.ru = null;
        }
        if (lang === "ua") {
          props.item.image_mobile.ua = null;
        }
      }
      if (device === "table") {
        if (lang === "ru") {
          props.item.image_table.ru = null;
        }
        if (lang === "ua") {
          props.item.image_table.ua = null;
        }
      }
      if (device === "desktop") {
        if (lang === "ru") {
          props.item.image_desktop.ru = null;
        }
        if (lang === "ua") {
          props.item.image_desktop.ua = null;
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="grid gap-4"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Статус публікації" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.published,
        "onUpdate:modelValue": ($event) => __props.item.published = $event,
        options: unref(publishedStatuses)
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Категорії" }, null, _parent));
      _push(ssrRenderComponent(Multiselect, {
        options: state.value.categories,
        modelValue: __props.item.categories,
        "onUpdate:modelValue": ($event) => __props.item.categories = $event,
        "custom-label": h1AndCodeAndId,
        placeholder: "Оберіть категорії",
        "track-by": "id",
        "close-on-select": true,
        searchable: true,
        multiple: true
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$3, { onClickLang: changeLang }, null, _parent));
      _push(`<div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Назва" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: __props.item.title[state.value.activeLang],
        "onUpdate:modelValue": ($event) => __props.item.title[state.value.activeLang] = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Посилання" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: __props.item.link[state.value.activeLang],
        "onUpdate:modelValue": ($event) => __props.item.link[state.value.activeLang] = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-2 gap-4"><div class="block">`);
      if (state.value.activeLang === "ua") {
        _push(ssrRenderComponent(_sfc_main$5, {
          label: "Зображення для мобільних",
          onUpload: uploadImageMobileUa,
          image: __props.item.image_mobile.ua ? _ctx.route("images.banners.mobile", { filename: __props.item.image_mobile.ua + ".jpeg" }) : null,
          onOnDestroyImage: ($event) => destroyImage("mobile", "ua")
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (state.value.activeLang === "ru") {
        _push(ssrRenderComponent(_sfc_main$5, {
          label: "Зображення для мобільних",
          onUpload: uploadImageMobileRu,
          image: __props.item.image_mobile.ru ? _ctx.route("images.banners.mobile", { filename: __props.item.image_mobile.ru + ".jpeg" }) : null,
          onOnDestroyImage: ($event) => destroyImage("mobile", "ru")
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="block">`);
      if (state.value.activeLang === "ru") {
        _push(ssrRenderComponent(_sfc_main$5, {
          onUpload: uploadImageTableRu,
          image: __props.item.image_table.ru ? _ctx.route("images.banners.mobile", { filename: __props.item.image_table.ru + ".jpeg" }) : null,
          onOnDestroyImage: ($event) => destroyImage("table", "ru")
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (state.value.activeLang === "ua") {
        _push(ssrRenderComponent(_sfc_main$5, {
          label: "Зображення для планшетів",
          onUpload: uploadImageTableUa,
          image: __props.item.image_table.ua ? _ctx.route("images.banners.mobile", { filename: __props.item.image_table.ua + ".jpeg" }) : null,
          onOnDestroyImage: ($event) => destroyImage("table", "ua")
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="block">`);
      if (state.value.activeLang === "ru") {
        _push(ssrRenderComponent(_sfc_main$5, {
          label: "Зображення для компʼютерів",
          onUpload: uploadImageDesktopRu,
          image: __props.item.image_desktop.ru ? _ctx.route("images.banners.mobile", { filename: __props.item.image_desktop.ru + ".jpeg" }) : null,
          onOnDestroyImage: ($event) => destroyImage("desktop", "ru")
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (state.value.activeLang === "ua") {
        _push(ssrRenderComponent(_sfc_main$5, {
          label: "Зображення для компʼютерів",
          onUpload: uploadImageDesktopUa,
          image: __props.item.image_desktop.ua ? _ctx.route("images.banners.mobile", { filename: __props.item.image_desktop.ua + ".jpeg" }) : null,
          onOnDestroyImage: ($event) => destroyImage("desktop", "ua")
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Banners/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
