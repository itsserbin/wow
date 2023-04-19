import { mergeProps, useSSRContext, inject, computed, reactive, ref, onMounted, unref, withCtx, createTextVNode, toDisplayString, createVNode, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import { useI18n } from "vue-i18n";
import { s as swal } from "./swal-dcd03cbb.mjs";
import { _ as _sfc_main$d } from "./Card-1b507b9c.mjs";
import { _ as _sfc_main$9 } from "./Select-b70673dc.mjs";
import { _ as _sfc_main$5 } from "./Label-229c476a.mjs";
import { _ as _sfc_main$a } from "./Checkbox-c87c898e.mjs";
import { _ as _sfc_main$b } from "./Textarea-1805d9a6.mjs";
import { _ as _sfc_main$6 } from "./Input-4be85f13.mjs";
import { _ as _sfc_main$7 } from "./Button-6b2e52a5.mjs";
import _sfc_main$3 from "./Modal-bb91b53c.mjs";
import _sfc_main$c from "./Table-06933bae.mjs";
import _sfc_main$8 from "./ClientOrders-0b9d01ab.mjs";
import _sfc_main$e from "./Table-73196fb2.mjs";
import _sfc_main$4 from "./Modal-14cd6130.mjs";
import "./Modal-8c93b79c.mjs";
import "./Form-33ee6e4d.mjs";
import "./Multiselect-c4e07430.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./Table-cc8335d6.mjs";
import "./XCircle-6a269edb.mjs";
import "./Form-1c89bf99.mjs";
const _sfc_main$2 = {
  __name: "Telephone",
  __ssrInlineRender: true,
  props: {
    width: {
      default: 16
    },
    height: {
      default: 16
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        xmlns: "http://www.w3.org/2000/svg",
        width: __props.width,
        height: __props.height,
        viewBox: "0 0 16 16"
      }, _attrs))}><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path></svg>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/Telephone.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Copy",
  __ssrInlineRender: true,
  props: {
    width: {
      default: 16
    },
    height: {
      default: 16
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        xmlns: "http://www.w3.org/2000/svg",
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        viewBox: "0 0 438 511.52",
        width: __props.width,
        height: __props.height
      }, _attrs))}><path fill-rule="nonzero" d="M141.44 0h172.68c4.71 0 8.91 2.27 11.54 5.77L434.11 123.1a14.37 14.37 0 0 1 3.81 9.75l.08 251.18c0 17.62-7.25 33.69-18.9 45.36l-.07.07c-11.67 11.64-27.73 18.87-45.33 18.87h-20.06c-.3 17.24-7.48 32.9-18.88 44.29-11.66 11.66-27.75 18.9-45.42 18.9H64.3c-17.67 0-33.76-7.24-45.41-18.9C7.24 480.98 0 464.9 0 447.22V135.87c0-17.68 7.23-33.78 18.88-45.42C30.52 78.8 46.62 71.57 64.3 71.57h12.84V64.3c0-17.68 7.23-33.78 18.88-45.42C107.66 7.23 123.76 0 141.44 0zm30.53 250.96c-7.97 0-14.43-6.47-14.43-14.44 0-7.96 6.46-14.43 14.43-14.43h171.2c7.97 0 14.44 6.47 14.44 14.43 0 7.97-6.47 14.44-14.44 14.44h-171.2zm0 76.86c-7.97 0-14.43-6.46-14.43-14.43 0-7.96 6.46-14.43 14.43-14.43h136.42c7.97 0 14.43 6.47 14.43 14.43 0 7.97-6.46 14.43-14.43 14.43H171.97zM322.31 44.44v49.03c.96 12.3 5.21 21.9 12.65 28.26 7.8 6.66 19.58 10.41 35.23 10.69l33.39-.04-81.27-87.94zm86.83 116.78-39.17-.06c-22.79-.35-40.77-6.5-53.72-17.57-13.48-11.54-21.1-27.86-22.66-48.03l-.14-2v-64.7H141.44c-9.73 0-18.61 4-25.03 10.41C110 45.69 106 54.57 106 64.3v319.73c0 9.74 4.01 18.61 10.42 25.02 6.42 6.42 15.29 10.42 25.02 10.42H373.7c9.75 0 18.62-3.98 25.01-10.38 6.45-6.44 10.43-15.3 10.43-25.06V161.22zm-84.38 287.11H141.44c-17.68 0-33.77-7.24-45.41-18.88-11.65-11.65-18.89-27.73-18.89-45.42v-283.6H64.3c-9.74 0-18.61 4-25.03 10.41-6.41 6.42-10.41 15.29-10.41 25.03v311.35c0 9.73 4.01 18.59 10.42 25.01 6.43 6.43 15.3 10.43 25.02 10.43h225.04c9.72 0 18.59-4 25.02-10.43 6.17-6.17 10.12-14.61 10.4-23.9z"></path></svg>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/Copy.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: [
    "order",
    "statuses",
    "paymentMethods",
    "clientStatuses",
    "invoiceStatuses"
  ],
  emits: [
    "submitItemForm",
    "onEditClient"
  ],
  setup(__props, { emit: emits }) {
    const props = __props;
    useI18n();
    const can = inject("$can");
    const priceForWaybill = computed(() => props.order.total_price - props.order.prepayment_sum);
    const fullName = computed(() => {
      const { name, last_name, middle_name } = props.order.client;
      const fullNameParts = [last_name, name, middle_name].filter(Boolean);
      return fullNameParts.length ? fullNameParts.join(" ") : "Дані не вказані";
    });
    const invoiceItem = reactive({
      order_id: props.order.id,
      sum: null
    });
    const state = ref({
      showItemsModal: false,
      showInvoicesModal: false,
      itemsModalAction: "",
      item: {
        count: 1,
        size: "",
        color: "",
        product_id: null
      },
      invoiceItem: {},
      statuses: [],
      managers: [],
      paymentMethods: []
    });
    onMounted(() => {
      getManagersList();
      for (const [key, value] of Object.entries(props.statuses)) {
        state.value.statuses.push({
          key,
          value
        });
      }
      for (const [key, value] of Object.entries(props.paymentMethods)) {
        state.value.paymentMethods.push({
          key,
          value
        });
      }
    });
    const itemsModal = computed(() => state.value.showItemsModal ? _sfc_main$3 : null);
    const invoiceModal = computed(() => state.value.showInvoicesModal ? _sfc_main$4 : null);
    reactive([
      {
        key: 0,
        value: "Ні"
      },
      {
        key: 1,
        value: "Так"
      }
    ]);
    function invoiceModalFunction() {
      state.value.showInvoicesModal = !state.value.showInvoicesModal;
    }
    function onDestroyInvoice(id) {
      if (can("destroy-invoices")) {
        swal({
          title: "Видалити?",
          icon: "warning",
          showCancelButton: true
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(route("api.invoices.destroy", id)).then(() => {
              emits("submitItemForm");
              swal({
                icon: "success",
                title: "Destroyed!"
              });
            }).catch((errors) => {
              console.log(errors);
              swal({
                icon: "error",
                title: "Error!"
              });
            });
          }
        });
      }
    }
    function addInvoice() {
      if (can("create-invoices")) {
        state.value.invoiceItem = invoiceItem;
        invoiceModalFunction();
      }
    }
    function onAddInvoice() {
      axios.post(route("api.invoices.create"), state.value.invoiceItem).then(({ data }) => {
        state.value.invoiceItem = invoiceItem;
        invoiceModalFunction();
        navigator.clipboard.writeText(data.result.data.invoice_url);
        swal({
          title: "Успішно!",
          text: "Рахунок був успішно створений, посилання на оплату скопійовано в буфер обміну",
          icon: "success"
        });
        emits("submitItemForm", data.result);
      }).catch((response) => {
        console.log(response);
        swal({
          title: "Error!",
          icon: "error"
        });
      });
    }
    function submitItemForm() {
      if (state.value.itemsModalAction === "create") {
        axios.post(route("api.order-items.add", props.order.id), state.value.item).then(({ data }) => {
          itemsModalFunction();
          emits("submitItemForm", data.result);
        }).catch((response) => console.log(response));
      } else if (state.value.itemsModalAction === "edit") {
        axios.put(route("api.order-items.update", state.value.item.id), state.value.item).then(({ data }) => {
          itemsModalFunction();
          emits("submitItemForm", data.result);
        }).catch((response) => console.log(response));
      }
    }
    function addProductToOrder() {
      itemsModalFunction();
      state.value.itemsModalAction = "create";
    }
    function itemsModalFunction() {
      state.value.showItemsModal = !state.value.showItemsModal;
    }
    function getManagersList() {
      axios.get(route("api.users.list.managers")).then(({ data }) => {
        if (data.result.length) {
          data.result.forEach((item) => {
            state.value.managers.push({
              key: item.id,
              value: item.name
            });
          });
        }
      }).catch((response) => console.log(response));
    }
    function destroyOrderItem(id, i) {
      swal({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(route("api.order-items.destroy", {
            item_id: id,
            order_id: props.order.id
          })).then(() => {
            emits("submitItemForm");
            swal({
              title: "Success",
              icon: "success"
            });
          }).catch((response) => {
            console.log(response);
            swal({
              title: "Error",
              icon: "error"
            });
          });
        }
      });
    }
    function editOrderItem(id) {
      itemsModalFunction();
      state.value.itemsModalAction = "edit";
      axios.get(route("api.order-items.edit", id)).then(({ data }) => state.value.item = data.result).catch((response) => console.log(response));
    }
    function onSendInvoiceSms() {
      swal({
        title: "Успішно",
        text: "Посилання на оплату надіслано клієнту",
        icon: "success"
      });
      emits("submitItemForm");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "grid gap-4" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-4 gap-4"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        value: _ctx.$t("clients.status")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        value: __props.clientStatuses[__props.order.client.status],
        type: "text",
        disabled: ""
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        value: _ctx.$t("clients.full_name")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        value: unref(fullName),
        type: "text",
        disabled: ""
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        value: _ctx.$t("clients.phone")
      }, null, _parent));
      _push(`<div class="flex items-center gap-x-2"><a${ssrRenderAttr("href", "tel:+" + __props.order.client.phone)} class="border-lg rounded-lg border p-3">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</a>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        modelValue: __props.order.client.phone,
        "onUpdate:modelValue": ($event) => __props.order.client.phone = $event,
        type: "text",
        disabled: ""
      }, null, _parent));
      _push(`<a${ssrRenderAttr("href", "javascript:")} class="border-lg rounded-lg border p-3">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</a></div></div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$5, { value: " " }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        class: "w-full",
        type: "button",
        onClick: ($event) => _ctx.$emit("onEditClient")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("orders.client_card"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("orders.client_card")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"></div>`);
      if (__props.order.client.orders.length > 1) {
        _push(ssrRenderComponent(_sfc_main$8, {
          data: __props.order.client.orders,
          statuses: __props.statuses
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500"><div class="grid grid-cols-1 md:grid-cols-4 gap-4"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        value: _ctx.$t("orders.status")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, {
        modelValue: __props.order.status,
        "onUpdate:modelValue": ($event) => __props.order.status = $event,
        options: state.value.statuses
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        value: _ctx.$t("orders.manager_id")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, {
        modelValue: __props.order.manager_id,
        "onUpdate:modelValue": ($event) => __props.order.manager_id = $event,
        options: state.value.managers
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        value: _ctx.$t("orders.payment_method")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, {
        modelValue: __props.order.payment_method,
        "onUpdate:modelValue": ($event) => __props.order.payment_method = $event,
        options: state.value.paymentMethods
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        value: _ctx.$t("orders.parcel_reminder")
      }, null, _parent));
      _push(`<div class="block"><div class="flex gap-x-2 items-center w-full">`);
      _push(ssrRenderComponent(_sfc_main$a, {
        modelValue: __props.order.parcel_reminder,
        "onUpdate:modelValue": ($event) => __props.order.parcel_reminder = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        value: __props.order.parcel_reminder ? "Так" : "Ні"
      }, null, _parent));
      _push(`</div></div></div></div><hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="grid grid-cols-1 gap-4"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        value: _ctx.$t("orders.city")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        modelValue: __props.order.city,
        "onUpdate:modelValue": ($event) => __props.order.city = $event,
        type: "text",
        placeholder: _ctx.$t("orders.enter_city")
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        value: _ctx.$t("orders.postal_office")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        modelValue: __props.order.postal_office,
        "onUpdate:modelValue": ($event) => __props.order.postal_office = $event,
        type: "text",
        placeholder: _ctx.$t("orders.enter_postal_office")
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        value: _ctx.$t("orders.waybill")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        modelValue: __props.order.waybill,
        "onUpdate:modelValue": ($event) => __props.order.waybill = $event,
        type: "text",
        placeholder: _ctx.$t("orders.enter_waybill")
      }, null, _parent));
      if (!__props.order.sms_waybill_status && __props.order.waybill) {
        _push(`<div><a href="javascript:">${ssrInterpolate(_ctx.$t("orders.send_waybill_for_client"))}</a></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.order.sms_waybill_status) {
        _push(`<div>${ssrInterpolate(_ctx.$t("orders.waybill_sent"))} (<a href="javascript:">${ssrInterpolate(_ctx.$t("orders.waybill_resent"))}</a>) </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.order.status === "return") {
        _push(`<div class="grid grid-cols-2 gap-x-2"><div class="flex gap-x-2">`);
        _push(ssrRenderComponent(_sfc_main$a, {
          modelValue: __props.order.refund_other_waybill,
          "onUpdate:modelValue": ($event) => __props.order.refund_other_waybill = $event,
          onChange: _ctx.test
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$5, {
          value: _ctx.$t("orders.refund_other_waybill")
        }, null, _parent));
        _push(`</div>`);
        if (__props.order.refund_other_waybill) {
          _push(ssrRenderComponent(_sfc_main$6, {
            modelValue: __props.order.other_waybill,
            "onUpdate:modelValue": ($event) => __props.order.other_waybill = $event,
            type: "text",
            placeholder: _ctx.$t("orders.enter_refund_other_waybill")
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        value: _ctx.$t("orders.comment")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$b, {
        rows: "12",
        modelValue: __props.order.comment,
        "onUpdate:modelValue": ($event) => __props.order.comment = $event,
        placeholder: _ctx.$t("orders.enter_comment")
      }, null, _parent));
      _push(`</div></div><hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500"><div class="grid grid-cols-1 gap-y-4"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        value: _ctx.$t("orders.sale_of_air")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        modelValue: __props.order.sale_of_air_price,
        "onUpdate:modelValue": ($event) => __props.order.sale_of_air_price = $event,
        type: "number",
        placeholder: _ctx.$t("orders.enter_sale_of_air_price")
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        value: _ctx.$t("orders.discount")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        modelValue: __props.order.discount_sum,
        "onUpdate:modelValue": ($event) => __props.order.discount_sum = $event,
        type: "number",
        placeholder: _ctx.$t("orders.enter_discount_sum")
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$5, { value: "Загальна сума передоплати (грн.)" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        modelValue: __props.order.prepayment_sum,
        "onUpdate:modelValue": ($event) => __props.order.prepayment_sum = $event,
        type: "number",
        disabled: ""
      }, null, _parent));
      _push(`</div></div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        type: "button",
        onClick: addProductToOrder
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Додати товар`);
          } else {
            return [
              createTextVNode("Додати товар")
            ];
          }
        }),
        _: 1
      }, _parent));
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(itemsModal)), {
        item: state.value.item,
        size: "medium",
        onCloseModal: itemsModalFunction,
        onSubmitItemForm: submitItemForm
      }, null), _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$c, {
        data: __props.order.items,
        onEditOrderItem: editOrderItem,
        onDestroyOrderItem: destroyOrderItem
      }, null, _parent));
      _push(`<div class="grid grid-cols-2 md:grid-cols-4 mt-5">`);
      _push(ssrRenderComponent(_sfc_main$d, {
        title: "Кількість товарів",
        description: __props.order.total_count,
        class: "text-center"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$d, {
        title: "Загальна ціна",
        description: _ctx.$filters.formatMoney(__props.order.total_price),
        class: "text-center"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$d, {
        title: "Ціна на посилку",
        description: _ctx.$filters.formatMoney(unref(priceForWaybill)),
        class: "text-center"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$d, {
        title: "Промо-код",
        description: __props.order.promo_code ? __props.order.promo_code : "Відсутній",
        class: "text-center"
      }, null, _parent));
      _push(`</div>`);
      if (unref(can)("show-invoices")) {
        _push(`<div class="block">`);
        if (unref(can)("create-invoices")) {
          _push(ssrRenderComponent(_sfc_main$7, {
            type: "button",
            onClick: addInvoice,
            class: "my-4"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Додати рахунок `);
              } else {
                return [
                  createTextVNode(" Додати рахунок ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (__props.order.invoices.length) {
          _push(ssrRenderComponent(_sfc_main$e, {
            data: __props.order.invoices,
            statuses: __props.invoiceStatuses,
            "can-destroy": unref(can)("destroy-invoices"),
            onOnDestroy: onDestroyInvoice,
            onOnSendInvoiceSms: onSendInvoiceSms
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(invoiceModal)), {
          item: state.value.invoiceItem,
          onCloseModal: invoiceModalFunction,
          onSubmitForm: onAddInvoice,
          onDeclineForm: invoiceModalFunction
        }, null), _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Crm/Orders/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
