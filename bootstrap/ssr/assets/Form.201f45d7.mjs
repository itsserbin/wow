import { inject, ref, onMounted, resolveComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./UploadBannersInput.e69e8658.mjs";
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
      const _component_label_component = resolveComponent("label-component");
      const _component_select_component = resolveComponent("select-component");
      const _component_multiselect = resolveComponent("multiselect");
      const _component_lang_tabs = resolveComponent("lang-tabs");
      const _component_input_component = resolveComponent("input-component");
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="grid gap-4"><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457" }, null, _parent));
      _push(ssrRenderComponent(_component_select_component, {
        modelValue: __props.item.published,
        "onUpdate:modelValue": ($event) => __props.item.published = $event,
        options: unref(publishedStatuses)
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457" }, null, _parent));
      _push(ssrRenderComponent(_component_multiselect, {
        options: state.value.categories,
        modelValue: __props.item.categories,
        "onUpdate:modelValue": ($event) => __props.item.categories = $event,
        "custom-label": h1AndCodeAndId,
        placeholder: "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457",
        "track-by": "id",
        "close-on-select": true,
        searchable: true,
        multiple: true
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_lang_tabs, { onClickLang: changeLang }, null, _parent));
      _push(`<div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u041D\u0430\u0437\u0432\u0430" }, null, _parent));
      if (state.value.activeLang === "ru") {
        _push(ssrRenderComponent(_component_input_component, {
          modelValue: __props.item.title.ru,
          "onUpdate:modelValue": ($event) => __props.item.title.ru = $event,
          type: "text"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (state.value.activeLang === "ua") {
        _push(ssrRenderComponent(_component_input_component, {
          modelValue: __props.item.title.ua,
          "onUpdate:modelValue": ($event) => __props.item.title.ua = $event,
          type: "text"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F" }, null, _parent));
      if (state.value.activeLang === "ru") {
        _push(ssrRenderComponent(_component_input_component, {
          modelValue: __props.item.link.ru,
          "onUpdate:modelValue": ($event) => __props.item.link.ru = $event,
          type: "text"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (state.value.activeLang === "ua") {
        _push(ssrRenderComponent(_component_input_component, {
          modelValue: __props.item.link.ua,
          "onUpdate:modelValue": ($event) => __props.item.link.ua = $event,
          type: "text"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="grid grid-cols-2 gap-4"><div class="block">`);
      if (state.value.activeLang === "ua") {
        _push(ssrRenderComponent(_sfc_main$1, {
          label: "\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043C\u043E\u0431\u0456\u043B\u044C\u043D\u0438\u0445",
          onUpload: uploadImageMobileUa,
          image: __props.item.image_mobile.ua ? _ctx.route("images.banners.mobile", { filename: __props.item.image_mobile.ua + ".jpeg" }) : null,
          onOnDestroyImage: ($event) => destroyImage("mobile", "ua")
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (state.value.activeLang === "ru") {
        _push(ssrRenderComponent(_sfc_main$1, {
          label: "\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043C\u043E\u0431\u0456\u043B\u044C\u043D\u0438\u0445",
          onUpload: uploadImageMobileRu,
          image: __props.item.image_mobile.ru ? _ctx.route("images.banners.mobile", { filename: __props.item.image_mobile.ru + ".jpeg" }) : null,
          onOnDestroyImage: ($event) => destroyImage("mobile", "ru")
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="block">`);
      if (state.value.activeLang === "ru") {
        _push(ssrRenderComponent(_sfc_main$1, {
          onUpload: uploadImageTableRu,
          image: __props.item.image_table.ru ? _ctx.route("images.banners.mobile", { filename: __props.item.image_table.ru + ".jpeg" }) : null,
          onOnDestroyImage: ($event) => destroyImage("table", "ru")
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (state.value.activeLang === "ua") {
        _push(ssrRenderComponent(_sfc_main$1, {
          label: "\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043F\u043B\u0430\u043D\u0448\u0435\u0442\u0456\u0432",
          onUpload: uploadImageTableUa,
          image: __props.item.image_table.ua ? _ctx.route("images.banners.mobile", { filename: __props.item.image_table.ua + ".jpeg" }) : null,
          onOnDestroyImage: ($event) => destroyImage("table", "ua")
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="block">`);
      if (state.value.activeLang === "ru") {
        _push(ssrRenderComponent(_sfc_main$1, {
          label: "\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u02BC\u044E\u0442\u0435\u0440\u0456\u0432",
          onUpload: uploadImageDesktopRu,
          image: __props.item.image_desktop.ru ? _ctx.route("images.banners.mobile", { filename: __props.item.image_desktop.ru + ".jpeg" }) : null,
          onOnDestroyImage: ($event) => destroyImage("desktop", "ru")
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (state.value.activeLang === "ua") {
        _push(ssrRenderComponent(_sfc_main$1, {
          label: "\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043A\u043E\u043C\u043F\u02BC\u044E\u0442\u0435\u0440\u0456\u0432",
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
