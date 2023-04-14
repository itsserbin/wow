import { inject, ref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./LangTabs-3c63a9c9.mjs";
import { _ as _sfc_main$2 } from "./Table-df76b95f.mjs";
import { _ as _sfc_main$3 } from "./XCircle-df3891c5.mjs";
import { useI18n } from "vue-i18n";
const _sfc_main = {
  __name: "Table",
  __ssrInlineRender: true,
  props: ["data", "canDestroy"],
  emits: ["onEdit", "onDestroy"],
  setup(__props) {
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
        label: t("categories.title"),
        key: "title"
      },
      {
        label: t("published"),
        key: "published"
      },
      {
        label: t("categories.parent"),
        key: "parent_id"
      },
      {
        label: t("sort"),
        key: "sort"
      },
      {
        label: t("updated_at") + "<hr class='my-1'>" + t("created_at"),
        key: "timestamps"
      },
      {
        label: "#",
        key: "actions"
      }
    ];
    const changeLang = (val) => {
      activeLang.value = val;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
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
        preview: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", data.row.preview_id ? _ctx.route("images.55", data.row.preview.src) : null)}${ssrRenderAttr("alt", data.row.title[activeLang.value])} class="mx-auto w-16"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: data.row.preview_id ? _ctx.route("images.55", data.row.preview.src) : null,
                alt: data.row.title[activeLang.value],
                class: "mx-auto w-16"
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        title: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="javascript:"${_scopeId}>${ssrInterpolate(data.row.title[activeLang.value])}</a>`);
          } else {
            return [
              createVNode("a", { href: "javascript:" }, toDisplayString(data.row.title[activeLang.value]), 1)
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
        timestamps: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.dateTimeFormat(data.row.updated_at))} <hr class="my-1"${_scopeId}> ${ssrInterpolate(_ctx.$filters.dateTimeFormat(data.row.created_at))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.dateTimeFormat(data.row.updated_at)) + " ", 1),
              createVNode("hr", { class: "my-1" }),
              createTextVNode(" " + toDisplayString(_ctx.$filters.dateTimeFormat(data.row.created_at)), 1)
            ];
          }
        }),
        actions: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.canDestroy) {
              _push2(`<a href="javascript:"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
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
                createVNode(_sfc_main$3)
              ], 8, ["onClick"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Content/Categories/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};