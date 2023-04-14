import { inject, ref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { g as _sfc_main$1, l as _sfc_main$2, a as _sfc_main$3, m as _sfc_main$4 } from "../app2.mjs";
import { useI18n } from "vue-i18n";
import "./vue.m.487fc989.mjs";
import "axios";
import "@inertiajs/inertia-vue3";
import "@inertiajs/progress";
import "./vendor.67403750.mjs";
import "vue-sweetalert2";
import "moment";
import "numeral";
import "@tinymce/tinymce-vue";
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
  emits: ["onDestroy", "onEdit", "onUpdateProductSort"],
  setup(__props, { emit: emits }) {
    const defaultLang = inject("$defaultLang");
    const { t } = useI18n();
    const activeLang = ref(defaultLang);
    const headings = [
      {
        label: t("id"),
        key: "id"
      },
      {
        label: t("preview"),
        key: "preview"
      },
      {
        label: t("products.h1"),
        key: "h1"
      },
      {
        label: t("published"),
        key: "published"
      },
      {
        label: t("products.vendor_code"),
        key: "vendor_code"
      },
      {
        label: t("products.price"),
        key: "price"
      },
      {
        label: t("products.discount_price"),
        key: "discount_price"
      },
      {
        label: t("sort"),
        key: "sort"
      },
      {
        label: t("products.views") + "<hr class='my-1'>" + t("products.sales"),
        key: "stat"
      },
      {
        label: t("products.returns") + "<hr class='my-1'>" + t("products.refunds"),
        key: "stat2"
      },
      {
        label: "#",
        key: "actions"
      }
    ];
    const changeLang = (val) => {
      activeLang.value = val;
    };
    const updateProductSort = (product_id, sort) => {
      emits("onUpdateProductSort", product_id, sort);
    };
    return (_ctx, _push, _parent, _attrs) => {
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
        h1: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(data.row.h1[activeLang.value])}`);
          } else {
            return [
              createTextVNode(toDisplayString(data.row.h1[activeLang.value]), 1)
            ];
          }
        }),
        published: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.publishedStatus(data.row.published))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.publishedStatus(data.row.published)), 1)
            ];
          }
        }),
        price: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.price))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.price)), 1)
            ];
          }
        }),
        discount_price: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.discount_price))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.discount_price)), 1)
            ];
          }
        }),
        preview: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", data.row.preview_id ? _ctx.route("images.55", data.row.preview.src) : null)}${ssrRenderAttr("alt", data.row.h1[activeLang.value])} class="mx-auto"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: data.row.preview_id ? _ctx.route("images.55", data.row.preview.src) : null,
                alt: data.row.h1[activeLang.value],
                class: "mx-auto"
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        stat: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(data.row.viewed ? data.row.viewed : "0")} <hr class="my-1"${_scopeId}> ${ssrInterpolate(data.row.total_sales ? data.row.total_sales : "0")}`);
          } else {
            return [
              createTextVNode(toDisplayString(data.row.viewed ? data.row.viewed : "0") + " ", 1),
              createVNode("hr", { class: "my-1" }),
              createTextVNode(" " + toDisplayString(data.row.total_sales ? data.row.total_sales : "0"), 1)
            ];
          }
        }),
        stat2: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(data.row.returns ? data.row.returns : "0")} <hr class="my-1"${_scopeId}> ${ssrInterpolate(data.row.exchange ? data.row.exchange : "0")}`);
          } else {
            return [
              createTextVNode(toDisplayString(data.row.returns ? data.row.returns : "0") + " ", 1),
              createVNode("hr", { class: "my-1" }),
              createTextVNode(" " + toDisplayString(data.row.exchange ? data.row.exchange : "0"), 1)
            ];
          }
        }),
        sort: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-2 gap-3 items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: data.row.sort,
              "onUpdate:modelValue": ($event) => data.row.sort = $event,
              class: "px-3 text-center"
            }, null, _parent2, _scopeId));
            _push2(`<a href="javascript:"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16"${_scopeId}><path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"${_scopeId}></path></svg></a></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-2 gap-3 items-center" }, [
                createVNode(_sfc_main$3, {
                  modelValue: data.row.sort,
                  "onUpdate:modelValue": ($event) => data.row.sort = $event,
                  class: "px-3 text-center"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("a", {
                  href: "javascript:",
                  onClick: ($event) => updateProductSort(data.row.id, data.row.sort)
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    fill: "currentColor",
                    class: "bi bi-save",
                    viewBox: "0 0 16 16"
                  }, [
                    createVNode("path", { d: "M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" })
                  ]))
                ], 8, ["onClick"])
              ])
            ];
          }
        }),
        actions: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.canDestroy) {
              _push2(`<a href="javascript:"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
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
                createVNode(_sfc_main$4)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Content/Products/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
