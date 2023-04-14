import { computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Card",
  __ssrInlineRender: true,
  props: [
    "image",
    "imageAlt",
    "link",
    "title",
    "description",
    "button",
    "class"
  ],
  setup(__props) {
    const props = __props;
    const cardLink = computed(() => props.link ? props.link : "javascript:");
    const imageAlternativeText = computed(() => props.imageAlt ? props.imageAlt : props.title ? props.title : null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "w-full mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" + props.class ? props.class : null
      }, _attrs))}>`);
      if (__props.image) {
        _push(`<a${ssrRenderAttr("href", unref(cardLink))}><img class="rounded-t-lg mx-auto"${ssrRenderAttr("src", __props.image)}${ssrRenderAttr("alt", unref(imageAlternativeText))}></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(_ctx.$slots.description)} `);
      if (__props.title || __props.description || __props.button) {
        _push(`<div class="p-5">`);
        if (__props.title) {
          _push(`<a${ssrRenderAttr("href", unref(cardLink))}><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${ssrInterpolate(__props.title ? __props.title : _ctx.$slots.title)}</h5></a>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.description) {
          _push(`<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${ssrInterpolate(__props.description ? __props.description : _ctx.$slots.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.button) {
          _push(`<a${ssrRenderAttr("href", unref(cardLink))} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">${ssrInterpolate(__props.button)} <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
