import { inject, ref, onMounted, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$7 } from "./ImagesSelectModal-438b3602.mjs";
import { _ as _sfc_main$5 } from "./ImageCard-83355df7.mjs";
import { _ as _sfc_main$3 } from "./InputError-71f0cb4c.mjs";
import { _ as _sfc_main$1 } from "./Label-229c476a.mjs";
import { _ as _sfc_main$2 } from "./Input-4be85f13.mjs";
import { _ as _sfc_main$9 } from "./Textarea-1805d9a6.mjs";
import { _ as _sfc_main$4 } from "./Select-b70673dc.mjs";
import { _ as _sfc_main$8 } from "./LangTabs-3c63a9c9.mjs";
import { _ as _sfc_main$6 } from "./Button-6b2e52a5.mjs";
const CategoriesRepository = {
  async list() {
    try {
      const response = await axios.get(route("api.categories.list"));
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  async fetch(params) {
    try {
      const response = await axios.get(route("api.categories.index", params));
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async update(item) {
    try {
      const response = await axios.put(route("api.categories.update", item.id), item);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  async destroy(id) {
    try {
      const response = await axios.delete(route("api.categories.destroy", id));
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  async edit(id) {
    try {
      const response = await axios.get(route("api.categories.edit", id));
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  async create(item) {
    try {
      const response = await axios.post(route("api.categories.create"), item);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
};
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item", "errors"],
  setup(__props) {
    const props = __props;
    const tiny = inject("$tiny");
    const defaultLang = inject("$defaultLang");
    const publishedStatuses = inject("$publishedStatuses");
    const state = ref({
      categories: [],
      categoryPreview: [],
      isActiveSelectedPreviewModal: false,
      activeLang: defaultLang
    });
    onMounted(() => {
      getCategoriesList();
    });
    const previewModalFunction = () => {
      state.value.isActiveSelectedPreviewModal = !state.value.isActiveSelectedPreviewModal;
    };
    const destroyPreview = () => {
      props.item.preview_id = null;
      props.item.preview = {};
    };
    const changeLang = (val) => {
      state.value.activeLang = val;
    };
    const setPreview = (image) => {
      props.item.preview_id = image.id;
      props.item.preview.src = image.src;
      previewModalFunction();
    };
    const getCategoriesList = async () => {
      const data = await CategoriesRepository.list();
      if (data.success) {
        data.result.forEach((item) => {
          state.value.categories.push(
            {
              key: item.id,
              value: item.title.ua ? item.title.ua : item.title.ru
            }
          );
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_editor = resolveComponent("editor");
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><div class="grid grid-cols-3 mb-5 gap-4"><div class="block col-span-2">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("slug")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.slug,
        "onUpdate:modelValue": ($event) => __props.item.slug = $event,
        type: "text",
        placeholder: _ctx.$t("enter_slug")
      }, null, _parent));
      if (__props.errors.slug) {
        _push(`<!--[-->`);
        ssrRenderList(__props.errors.slug, (error) => {
          _push(ssrRenderComponent(_sfc_main$3, { message: error }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("published")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: __props.item.published,
        "onUpdate:modelValue": ($event) => __props.item.published = $event,
        options: unref(publishedStatuses)
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-2 gap-4 mb-5"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("categories.parent")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: __props.item.parent_id,
        "onUpdate:modelValue": ($event) => __props.item.parent_id = $event,
        options: state.value.categories
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("preview")
      }, null, _parent));
      if (__props.item.preview_id) {
        _push(`<div class="block mb-7 w-1/4 mx-auto">`);
        _push(ssrRenderComponent(_sfc_main$5, {
          destroyIcon: true,
          image: __props.item.preview,
          onDestroyImage: destroyPreview,
          size: "55"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="block mb-7">`);
        _push(ssrRenderComponent(_sfc_main$6, {
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
          _push(ssrRenderComponent(_sfc_main$7, {
            onSubmitForm: setPreview,
            onCloseModal: previewModalFunction
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$8, { onClickLang: changeLang }, null, _parent));
      _push(`<hr class="mb-5"><div class="grid grid-cols-1 rounded"><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("categories.title")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.title[state.value.activeLang],
        "onUpdate:modelValue": ($event) => __props.item.title[state.value.activeLang] = $event,
        type: "text",
        placeholder: _ctx.$t("categories.enter_title")
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("meta.title")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.meta_title[state.value.activeLang],
        "onUpdate:modelValue": ($event) => __props.item.meta_title[state.value.activeLang] = $event,
        type: "text",
        placeholder: _ctx.$t("meta.enter_title")
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("meta.description")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, {
        modelValue: __props.item.meta_description[state.value.activeLang],
        "onUpdate:modelValue": ($event) => __props.item.meta_description[state.value.activeLang] = $event,
        placeholder: _ctx.$t("meta.enter_description")
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("meta.keywords")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, {
        modelValue: __props.item.meta_keyword[state.value.activeLang],
        "onUpdate:modelValue": ($event) => __props.item.meta_keyword[state.value.activeLang] = $event,
        placeholder: _ctx.$t("meta.enter_keywords")
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("seo_text")
      }, null, _parent));
      _push(ssrRenderComponent(_component_editor, {
        "api-key": unref(tiny).api,
        modelValue: __props.item.seo_text[state.value.activeLang],
        "onUpdate:modelValue": ($event) => __props.item.seo_text[state.value.activeLang] = $event,
        init: unref(tiny).settings
      }, null, _parent));
      _push(`</div></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Content/Categories/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Form = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
export {
  CategoriesRepository as C,
  Form as F,
  _sfc_main as _
};
