import { ref, resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "SizesTable",
  __ssrInlineRender: true,
  props: {
    sizeTable: {
      type: String,
      default: "<table>\n                <tr>\n                    <th>\u0420\u0430\u0437\u043C\u0435\u0440\u044B</th>\n                    <th>\u0427\u0430\u0448\u043A\u0430</th>\n                    <th>\u041E\u0431\u044A\u0435\u043C \u0433\u0440\u0443\u0434\u0438</th>\n                    <th>\u041E\u0431\u044A\u0435\u043C \u0431\u0435\u0434\u0435\u0440</th>\n                </tr>\n                <tr>\n                    <th>S</th>\n                    <td>A-B</td>\n                    <td>82-85</td>\n                    <td>85-90</td>\n                </tr>\n                <tr>\n                    <th>M</th>\n                    <td>B-C</td>\n                    <td>86-89</td>\n                    <td>91-95</td>\n                </tr>\n                <tr>\n                    <th>L</th>\n                    <td>C-D</td>\n                    <td>90-93</td>\n                    <td>96-100</td>\n                </tr>\n                <tr>\n                    <th>XL</th>\n                    <td>D-E</td>\n                    <td>94-97</td>\n                    <td>101-105</td>\n                </tr>\n            </table>"
    },
    textSizesTable: {
      type: String,
      default: "\u0422\u0430\u0431\u043B\u0438\u0446\u044F \u0440\u043E\u0437\u043C\u0456\u0440\u0456\u0432"
    }
  },
  setup(__props) {
    const show = ref(false);
    function showModal() {
      show.value = !show.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_modal = resolveComponent("modal");
      _push(`<!--[--><div class="mb-3"><div class="ml-auto"><div class="rounded-[10px] border-red-600 border-[3px] flex justify-center max-w-[230px] relative m-0 p-2"><button class="grid gap-4 grid-cols-4" type="button"><span class="before:content-[&#39;\\f0ce&#39;] col-span-1"></span><span class="col-span-3">${ssrInterpolate(__props.textSizesTable)}</span></button></div></div></div>`);
      if (show.value) {
        _push(ssrRenderComponent(_component_modal, {
          onCloseModal: showModal,
          size: "medium"
        }, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="sizes-table"${_scopeId}>${__props.sizeTable}</div>`);
            } else {
              return [
                createVNode("div", {
                  class: "sizes-table",
                  innerHTML: __props.sizeTable
                }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Product/SizesTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
