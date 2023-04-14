import { inject, ref, resolveComponent, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { g as _sfc_main$1, l as _sfc_main$2 } from "../app2.mjs";
import "./vue.m.487fc989.mjs";
import "axios";
import "@inertiajs/inertia-vue3";
import "@inertiajs/progress";
import "./vendor.67403750.mjs";
import "vue-sweetalert2";
import "moment";
import "numeral";
import "@tinymce/tinymce-vue";
import "vue-i18n";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "./Logo.5e8f1180.mjs";
import "@inertiajs/vue3";
import "vuex";
import "@vuepic/vue-datepicker";
import "chart.js";
const _sfc_main = {
  __name: "Table",
  __ssrInlineRender: true,
  props: ["data", "canDestroy"],
  emits: ["onDestroy", "onEdit"],
  setup(__props) {
    const defaultLang = inject("$defaultLang");
    const activeLang = ref(defaultLang);
    const headings = [
      {
        label: "ID",
        key: "id"
      },
      {
        label: "\u041D\u0430\u0437\u0432\u0430",
        key: "title"
      },
      {
        label: "\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E<hr class='my-1'>\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",
        key: "timestamps"
      },
      {
        label: "#",
        key: "actions"
      }
    ];
    function changeLang(val) {
      activeLang.value = val;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_xcircle_component = resolveComponent("xcircle-component");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, { onClickLang: changeLang }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        headings,
        isSlotMode: true,
        rows: __props.data
      }, {
        id: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="javascript:"${_scopeId}>${ssrInterpolate(data.row.id)}</a>`);
          } else {
            return [
              createVNode("a", {
                href: "javascript:",
                onClick: ($event) => _ctx.$emit("onEdit", data.row.id, data.i)
              }, toDisplayString(data.row.id), 9, ["onClick"])
            ];
          }
        }),
        title: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(data.row.title[activeLang.value])}`);
          } else {
            return [
              createTextVNode(toDisplayString(data.row.title[activeLang.value]), 1)
            ];
          }
        }),
        timestamps: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center"${_scopeId}>${ssrInterpolate(_ctx.$filters.dateTimeFormat(data.row.updated_at))} <br${_scopeId}> ${ssrInterpolate(_ctx.$filters.dateTimeFormat(data.row.created_at))}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createTextVNode(toDisplayString(_ctx.$filters.dateTimeFormat(data.row.updated_at)) + " ", 1),
                createVNode("br"),
                createTextVNode(" " + toDisplayString(_ctx.$filters.dateTimeFormat(data.row.created_at)), 1)
              ])
            ];
          }
        }),
        actions: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.canDestroy) {
              _push2(`<a href="javascript:"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_xcircle_component, null, null, _parent2, _scopeId));
              _push2(`</a>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.canDestroy ? (openBlock(), createBlock("a", {
                key: 0,
                href: "javascript:",
                onClick: ($event) => _ctx.$emit("onDestroy", data.row.id)
              }, [
                createVNode(_component_xcircle_component)
              ], 8, ["onClick"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Characteristics/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
