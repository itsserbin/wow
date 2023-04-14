import { inject, ref, onMounted, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { LineChart } from "vue-chart-3";
const _sfc_main = {
  __name: "Chart",
  __ssrInlineRender: true,
  props: {
    chartData: {
      type: Array,
      default: () => {
      }
    }
  },
  setup(__props) {
    const props = __props;
    const moment = inject("$moment");
    const datasetCategories = {
      average_application_price: "Ср. ціна заявки",
      average_approve_application_price: "Ср. ціна апрува",
      average_done_application_price: "Ср. ціна виконаної заявки",
      average_check: "Ср. чек",
      average_marginality: "Ср. маржа",
      average_items: "Ср. кількість товарів"
    };
    const data = ref({
      labels: [],
      datasets: [
        {
          label: datasetCategories.average_application_price,
          data: [],
          borderColor: ["#5DADE2"]
        },
        {
          label: datasetCategories.average_approve_application_price,
          data: [],
          borderColor: ["#F4D03F"]
        },
        {
          label: datasetCategories.average_done_application_price,
          data: [],
          borderColor: ["#58D68D"]
        },
        {
          label: datasetCategories.average_check,
          data: [],
          borderColor: ["#E74C3C"]
        },
        {
          label: datasetCategories.average_marginality,
          data: [],
          borderColor: ["#A569BD"]
        },
        {
          label: datasetCategories.average_items,
          data: [],
          borderColor: ["#85929E"]
        }
      ]
    });
    const options = ref({
      responsive: true,
      interaction: {
        intersect: false
      }
    });
    onMounted(() => {
      const average_application_price = data.value.datasets.find((item) => item.label === datasetCategories.average_application_price);
      const average_approve_application_price = data.value.datasets.find((item) => item.label === datasetCategories.average_approve_application_price);
      const average_done_application_price = data.value.datasets.find((item) => item.label === datasetCategories.average_done_application_price);
      const average_check = data.value.datasets.find((item) => item.label === datasetCategories.average_check);
      const average_marginality = data.value.datasets.find((item) => item.label === datasetCategories.average_marginality);
      const average_items = data.value.datasets.find((item) => item.label === datasetCategories.average_items);
      props.chartData.forEach((item) => {
        average_application_price.data.unshift(item.average_application_price);
        average_approve_application_price.data.unshift(item.average_approve_application_price);
        average_done_application_price.data.unshift(item.average_done_application_price);
        average_check.data.unshift(item.average_check);
        average_marginality.data.unshift(item.average_marginality);
        average_items.data.unshift(item.average_items);
        data.value.labels.unshift(moment(item.date).format("DD.MM.YY"));
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(LineChart), mergeProps({
        chartData: data.value,
        options: options.value
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Statistics/Managers/Chart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
