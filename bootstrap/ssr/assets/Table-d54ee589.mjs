import { inject, ref, resolveComponent, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
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
        label: "Фото",
        key: "image"
      },
      {
        label: "Назва",
        key: "title"
      },
      {
        label: "Статус",
        key: "published"
      },
      {
        label: "Посилання",
        key: "link"
      },
      {
        label: "Оновлено<hr class='my-1'>Створено",
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
        image: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", data.row.image_mobile.ua ? _ctx.route("images.banners.mobile", data.row.image_mobile.ua) : data.row.image_mobile.ru ? _ctx.route("images.banners.mobile", data.row.image_mobile.ru) : null)}${ssrRenderAttr("alt", activeLang.value === "ua" ? data.row.title.ua : activeLang.value === "ru" ? data.row.title.ru : null)} class="w-1/4 mx-auto"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: data.row.image_mobile.ua ? _ctx.route("images.banners.mobile", data.row.image_mobile.ua) : data.row.image_mobile.ru ? _ctx.route("images.banners.mobile", data.row.image_mobile.ru) : null,
                alt: activeLang.value === "ua" ? data.row.title.ua : activeLang.value === "ru" ? data.row.title.ru : null,
                class: "w-1/4 mx-auto"
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        title: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(activeLang.value === "ua" ? data.row.title.ua : activeLang.value === "ru" ? data.row.title.ru : null)}`);
          } else {
            return [
              createTextVNode(toDisplayString(activeLang.value === "ua" ? data.row.title.ua : activeLang.value === "ru" ? data.row.title.ru : null), 1)
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
        link: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(activeLang.value === "ua" ? data.row.link.ua : activeLang.value === "ru" ? data.row.link.ru : null)}`);
          } else {
            return [
              createTextVNode(toDisplayString(activeLang.value === "ua" ? data.row.link.ua : activeLang.value === "ru" ? data.row.link.ru : null), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Banners/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
