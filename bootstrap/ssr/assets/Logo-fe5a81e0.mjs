import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Input-4be85f13.mjs";
import { _ as _sfc_main$1 } from "./Label-229c476a.mjs";
import { useI18n } from "vue-i18n";
import { s as swal } from "./swal-dcd03cbb.mjs";
const _sfc_main = {
  __name: "Logo",
  __ssrInlineRender: true,
  props: ["title"],
  setup(__props) {
    const image = ref(null);
    const { t } = useI18n();
    const onFileChange = async (file) => {
      const formData = new FormData();
      formData.append("logo", file);
      await axios.post(route("api.images.logo.upload"), formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(({ data }) => {
        image.value = data.result;
        swal({
          title: t("swal.logo.upload"),
          icon: "success",
          confirmButtonText: "Ok"
        });
      }).catch((error) => {
        console.log(error);
        swal({
          text: t("swal.logo.error"),
          icon: "error",
          confirmButtonText: "Ok"
        });
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        value: _ctx.$t("options.text_label_logo")
      }, null, _parent));
      _push(`<div class="mt-2">`);
      if (image.value) {
        _push(`<div><picture><source${ssrRenderAttr("srcset", "/storage/" + image.value + ".webp")} type="image/webp"><img${ssrRenderAttr("src", "/storage/" + image.value + ".jpeg")}${ssrRenderAttr("alt", _ctx.$t("options.text_label_logo"))}></picture><button type="button" class="text-sm font-medium text-red-500 hover:text-red-700">${ssrInterpolate(_ctx.$t("options.text_destroyLabel"))}</button></div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$2, {
          type: "file",
          onChange: ($event) => onFileChange($event.target.files[0])
        }, null, _parent));
        _push(`<p class="mt-2 text-sm text-gray-500">${ssrInterpolate(_ctx.$t("options.instructions"))}</p></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Main/Logo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
