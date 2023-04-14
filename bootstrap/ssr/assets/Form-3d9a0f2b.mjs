import { inject, ref, onMounted, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import _sfc_main$9 from "./Images-189fe58b.mjs";
import { _ as _sfc_main$6 } from "./ImagesSelectModal-438b3602.mjs";
import { _ as _sfc_main$5 } from "./Button-6b2e52a5.mjs";
import { _ as _sfc_main$1 } from "./Label-229c476a.mjs";
import { _ as _sfc_main$8 } from "./Textarea-1805d9a6.mjs";
import { _ as _sfc_main$3 } from "./Input-4be85f13.mjs";
import { _ as _sfc_main$2 } from "./Select-b70673dc.mjs";
import { _ as _sfc_main$4 } from "./ImageCard-83355df7.mjs";
import { _ as _sfc_main$7 } from "./LangTabs-3c63a9c9.mjs";
import { C as CharacteristicsRepository } from "./CharacteristicsRepository-7c4205ad.mjs";
import "swiper/vue";
import "swiper";
import "./UploadImagesModal-a0208fb2.mjs";
import "./XCircle-df3891c5.mjs";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["product"],
  emits: ["submit", "setProductImages", "destroyImage"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const defaultLang = inject("$defaultLang");
    const tiny = inject("$tiny");
    const publishedStatuses = inject("$publishedStatuses");
    const state = ref({
      isActiveSelectedImagesModal: false,
      isActiveSelectedPreviewModal: false,
      activeLang: defaultLang,
      statusOptions: [
        {
          key: "in stock",
          value: "В наявності"
        },
        {
          key: "ends",
          value: "Закінчується"
        },
        {
          key: "out of stock",
          value: "Нема в наявності"
        }
      ],
      categories: [],
      providers: [],
      colors: [],
      sizes: [],
      characteristics: []
    });
    onMounted(() => {
      getCharacteristicsList();
      axios.get(route("api.categories.list")).then(({ data }) => state.value.categories = data.result).catch((response) => console.log(response));
      axios.get(route("api.providers.list")).then(({ data }) => {
        data.result.forEach((item) => {
          state.value.providers.push({
            key: item.id,
            value: item.name
          });
        });
      }).catch((response) => console.log(response));
      axios.get(route("api.colors.list")).then(({ data }) => state.value.colors = data.result).catch((response) => console.log(response));
      axios.get(route("api.sizes.list")).then(({ data }) => state.value.sizes = data.result).catch((response) => console.log(response));
    });
    function customCharacteristicLabel({ title }) {
      if (title) {
        return title[state.value.activeLang];
      }
    }
    async function getCharacteristicsList() {
      try {
        const { result, success } = await CharacteristicsRepository().list();
        if (success) {
          state.value.characteristics = result;
        }
      } catch (e) {
        console.error(e);
      }
    }
    function changeLang(val) {
      state.value.activeLang = val;
    }
    function h1AndCodeAndId({ h1, id }) {
      if (h1 && id) {
        return `${state.value.activeLang === "ua" ? h1.ua : state.value.activeLang === "ru" ? h1.ru : "-"} -${id}`;
      } else {
        return `${id}`;
      }
    }
    function imagesModalFunction() {
      state.value.isActiveSelectedImagesModal = !state.value.isActiveSelectedImagesModal;
    }
    function previewModalFunction() {
      state.value.isActiveSelectedPreviewModal = !state.value.isActiveSelectedPreviewModal;
    }
    function destroyPreview() {
      props.product.preview_id = null;
    }
    function setProductImages(images) {
      imagesModalFunction();
      emits("setProductImages", images);
    }
    function setProductPreview(image) {
      props.product.preview_id = image.id;
      props.product.preview.src = image.src;
      previewModalFunction();
    }
    function destroyImage(image) {
      emits("destroyImage", image);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_multiselect = resolveComponent("multiselect");
      const _component_editor = resolveComponent("editor");
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 gap-4" }, _attrs))}><div class="grid grid-cols-3 gap-4 mb-5"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("published")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.product.published,
        "onUpdate:modelValue": ($event) => __props.product.published = $event,
        options: unref(publishedStatuses)
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("products.status")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.product.status,
        "onUpdate:modelValue": ($event) => __props.product.status = $event,
        options: state.value.statusOptions
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("products.vendor_code")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: __props.product.vendor_code,
        "onUpdate:modelValue": ($event) => __props.product.vendor_code = $event,
        type: "text",
        placeholder: _ctx.$t("products.enter_vendor_code")
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-3 gap-4"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("products.categories")
      }, null, _parent));
      _push(ssrRenderComponent(_component_multiselect, {
        options: state.value.categories,
        modelValue: __props.product.categories,
        "onUpdate:modelValue": ($event) => __props.product.categories = $event,
        "custom-label": h1AndCodeAndId,
        placeholder: _ctx.$t("products.enter_categories"),
        class: "mb-5",
        "track-by": "id",
        searchable: true,
        multiple: true
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("products.provider")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.product.provider_id,
        "onUpdate:modelValue": ($event) => __props.product.provider_id = $event,
        options: state.value.providers
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("preview")
      }, null, _parent));
      if (__props.product.preview_id) {
        _push(`<div class="block mb-7">`);
        _push(ssrRenderComponent(_sfc_main$4, {
          destroyIcon: true,
          image: __props.product.preview,
          onDestroyImage: destroyPreview,
          size: "55"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="block mb-7">`);
        _push(ssrRenderComponent(_sfc_main$5, {
          type: "button",
          onClick: previewModalFunction
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("select_image"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("select_image")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (state.value.isActiveSelectedPreviewModal) {
          _push(ssrRenderComponent(_sfc_main$6, {
            onSubmitForm: setProductPreview,
            onCloseModal: previewModalFunction
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div></div><div class="grid grid-cols-2 gap-4"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("products.sizes")
      }, null, _parent));
      _push(ssrRenderComponent(_component_multiselect, {
        options: state.value.sizes,
        modelValue: __props.product.sizes,
        "onUpdate:modelValue": ($event) => __props.product.sizes = $event,
        label: "title",
        placeholder: _ctx.$t("products.enter_sizes"),
        "track-by": "id",
        "close-on-select": false,
        searchable: true,
        multiple: true
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("products.colors")
      }, null, _parent));
      _push(ssrRenderComponent(_component_multiselect, {
        options: state.value.colors,
        modelValue: __props.product.colors,
        "onUpdate:modelValue": ($event) => __props.product.colors = $event,
        label: "name",
        placeholder: _ctx.$t("products.enter_colors"),
        "track-by": "id",
        "close-on-select": false,
        searchable: true,
        multiple: true
      }, null, _parent));
      _push(`</div></div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("products.youtube")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: __props.product.youtube,
        "onUpdate:modelValue": ($event) => __props.product.youtube = $event,
        type: "text",
        placeholder: _ctx.$t("products.enter_youtube")
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$7, { onClickLang: changeLang }, null, _parent));
      _push(`<hr class="mb-5"><div class="grid grid-cols-1 gap-4"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("products.h1")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: __props.product.h1[state.value.activeLang],
        "onUpdate:modelValue": ($event) => __props.product.h1[state.value.activeLang] = $event,
        type: "text",
        placeholder: _ctx.$t("products.enter_h1")
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("meta.title")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: __props.product.title[state.value.activeLang],
        "onUpdate:modelValue": ($event) => __props.product.title[state.value.activeLang] = $event,
        type: "text",
        placeholder: _ctx.$t("meta.enter_title")
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("meta.description")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, {
        modelValue: __props.product.description[state.value.activeLang],
        "onUpdate:modelValue": ($event) => __props.product.description[state.value.activeLang] = $event,
        placeholder: _ctx.$t("meta.enter_description")
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("products.content")
      }, null, _parent));
      _push(ssrRenderComponent(_component_editor, {
        "api-key": unref(tiny).api,
        modelValue: __props.product.content[state.value.activeLang],
        "onUpdate:modelValue": ($event) => __props.product.content[state.value.activeLang] = $event,
        init: unref(tiny).settings
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("products.size_table")
      }, null, _parent));
      _push(ssrRenderComponent(_component_editor, {
        "api-key": unref(tiny).api,
        modelValue: __props.product.size_table,
        "onUpdate:modelValue": ($event) => __props.product.size_table = $event,
        init: unref(tiny).settings
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-3 gap-4 mb-5"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("products.price")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: __props.product.price,
        "onUpdate:modelValue": ($event) => __props.product.price = $event,
        type: "number",
        placeholder: _ctx.$t("products.enter_price")
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("products.discount_price")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: __props.product.discount_price,
        "onUpdate:modelValue": ($event) => __props.product.discount_price = $event,
        type: "number",
        placeholder: _ctx.$t("products.enter_discount_price")
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("products.trade_price")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: __props.product.trade_price,
        "onUpdate:modelValue": ($event) => __props.product.trade_price = $event,
        type: "number",
        placeholder: _ctx.$t("products.enter_trade_price")
      }, null, _parent));
      _push(`</div></div></div><div class="row">`);
      if (__props.product.images) {
        _push(`<div class="block mb-7">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          value: _ctx.$t("images.page_title")
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$9, {
          images: __props.product.images,
          onDestroyImage: destroyImage
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="block mb-7">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        type: "button",
        onClick: imagesModalFunction
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("select_image"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("select_image")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (state.value.isActiveSelectedImagesModal) {
        _push(ssrRenderComponent(_sfc_main$6, {
          onSubmitForm: setProductImages,
          onCloseModal: imagesModalFunction,
          multiple: true
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="grid grid-cols-4 gap-4">`);
      if (state.value.characteristics.length) {
        _push(`<!--[-->`);
        ssrRenderList(state.value.characteristics, (characteristic) => {
          _push(`<div class="block">`);
          _push(ssrRenderComponent(_sfc_main$1, {
            value: characteristic.title[state.value.activeLang]
          }, null, _parent));
          _push(ssrRenderComponent(_component_multiselect, {
            options: characteristic.values,
            modelValue: __props.product.characteristicsNew[characteristic.id],
            "onUpdate:modelValue": ($event) => __props.product.characteristicsNew[characteristic.id] = $event,
            "custom-label": customCharacteristicLabel,
            placeholder: _ctx.$t("products.select_characteristic_value"),
            class: "mb-5",
            "track-by": "id",
            value: "id",
            searchable: true,
            multiple: true,
            "close-on-select": false
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Content/Products/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
