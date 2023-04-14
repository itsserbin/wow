import { inject, ref, resolveComponent, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Table",
  __ssrInlineRender: true,
  props: ["data", "canDestroy"],
  emits: ["onDestroy", "onEdit"],
  setup(__props) {
    const defaultLang = inject("$defaultLang");
    const activeLang = ref(defaultLang);
    function changeLang(val) {
      activeLang.value = val;
    }
    const headings = [
      {
        label: "ID",
        key: "id"
      },
      {
        label: "\u041F\u0438\u0442\u0430\u043D\u043D\u044F",
        key: "question"
      },
      {
        label: "\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C",
        key: "answer"
      },
      {
        label: "\u0421\u0442\u0430\u0442\u0443\u0441",
        key: "published"
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_lang_tabs = resolveComponent("lang-tabs");
      const _component_table_component = resolveComponent("table-component");
      const _component_xcircle_component = resolveComponent("xcircle-component");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_lang_tabs, { onClickLang: changeLang }, null, _parent));
      _push(ssrRenderComponent(_component_table_component, {
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
        question: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(activeLang.value === "ua" ? data.row.question.ua : activeLang.value === "ru" ? data.row.question.ru : null)}`);
          } else {
            return [
              createTextVNode(toDisplayString(activeLang.value === "ua" ? data.row.question.ua : activeLang.value === "ru" ? data.row.question.ru : null), 1)
            ];
          }
        }),
        answer: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(activeLang.value === "ua" ? data.row.answer.ua : activeLang.value === "ru" ? data.row.answer.ru : null)}`);
          } else {
            return [
              createTextVNode(toDisplayString(activeLang.value === "ua" ? data.row.answer.ua : activeLang.value === "ru" ? data.row.answer.ru : null), 1)
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
            _push2(`${ssrInterpolate(_ctx.$filters.dateFormat(data.row.updated_at))} <hr class="my-1"${_scopeId}> ${ssrInterpolate(_ctx.$filters.dateFormat(data.row.created_at))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.dateFormat(data.row.updated_at)) + " ", 1),
              createVNode("hr", { class: "my-1" }),
              createTextVNode(" " + toDisplayString(_ctx.$filters.dateFormat(data.row.created_at)), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Faqs/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
