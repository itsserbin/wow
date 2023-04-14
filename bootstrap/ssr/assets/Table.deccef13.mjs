import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createVNode, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Table",
  __ssrInlineRender: true,
  props: ["data", "statuses", "canDestroy"],
  emits: ["onDestroy", "onEdit", "onSendInvoiceSms"],
  setup(__props, { emit: emits }) {
    const headings = [
      {
        label: "ID",
        key: "id"
      },
      {
        label: "\u0421\u0442\u0430\u0442\u0443\u0441",
        key: "status"
      },
      {
        label: "\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",
        key: "order_id"
      },
      {
        label: "\u0421\u0443\u043C\u043C\u0430",
        key: "sum"
      },
      {
        label: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0434\u043B\u044F \u043E\u043F\u043B\u0430\u0442\u0438",
        key: "invoice_url"
      },
      {
        label: "SMS",
        key: "sms"
      },
      {
        label: "\u041A\u0456\u043B\u044C-\u0441\u0442\u044C SMS",
        key: "sms_count"
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
    function copy(value) {
      navigator.clipboard.writeText(value);
    }
    function sendSms(id) {
      axios.post(route("api.sms.invoice", id)).then(() => {
        emits("onSendInvoiceSms");
      }).catch((response) => console.log(response));
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_table_component = resolveComponent("table-component");
      const _component_xcircle_component = resolveComponent("xcircle-component");
      _push(ssrRenderComponent(_component_table_component, mergeProps({
        headings,
        isSlotMode: true,
        rows: __props.data
      }, _attrs), {
        status: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.statuses[data.row.status])}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.statuses[data.row.status]), 1)
            ];
          }
        }),
        invoice_url: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (data.row.invoice_url) {
              _push2(`<a href="javascript:" class="flex"${_scopeId}>${ssrInterpolate(data.row.invoice_url ? data.row.invoice_url.substr(0, 30) + "..." : "-")} <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 115.77 122.88" class="dark:invert"${_scopeId}><g${_scopeId}><path class="st0" d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"${_scopeId}></path></g></svg></a>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              data.row.invoice_url ? (openBlock(), createBlock("a", {
                key: 0,
                href: "javascript:",
                onClick: ($event) => copy(data.row.invoice_url),
                class: "flex"
              }, [
                createTextVNode(toDisplayString(data.row.invoice_url ? data.row.invoice_url.substr(0, 30) + "..." : "-") + " ", 1),
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "15px",
                  height: "15px",
                  viewBox: "0 0 115.77 122.88",
                  class: "dark:invert"
                }, [
                  createVNode("g", null, [
                    createVNode("path", {
                      class: "st0",
                      d: "M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"
                    })
                  ])
                ]))
              ], 8, ["onClick"])) : createCommentVNode("", true)
            ];
          }
        }),
        sms: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(data.row.sms ? "\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E" : "\u041D\u0435 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E")} `);
            if (!data.row.sms) {
              _push2(`<div${_scopeId}><br${_scopeId}>`);
              if (data.row.invoice_url) {
                _push2(`<a href="javascript:" class="text-blue-600"${_scopeId}>\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438 SMS</a>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createTextVNode(toDisplayString(data.row.sms ? "\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E" : "\u041D\u0435 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u043D\u043E") + " ", 1),
              !data.row.sms ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("br"),
                data.row.invoice_url ? (openBlock(), createBlock("a", {
                  key: 0,
                  href: "javascript:",
                  onClick: ($event) => sendSms(data.row.id),
                  class: "text-blue-600"
                }, "\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438 SMS", 8, ["onClick"])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
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
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Crm/Invoices/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
