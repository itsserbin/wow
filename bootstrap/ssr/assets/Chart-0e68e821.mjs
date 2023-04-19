import { unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { Chart, registerables } from "chart.js";
import { LineChart } from "vue-chart-3";
const _sfc_main = {
  __name: "Chart",
  __ssrInlineRender: true,
  props: ["chartData"],
  setup(__props) {
    Chart.register(...registerables);
    const options = {
      responsive: true,
      interaction: {
        intersect: false
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(LineChart), mergeProps({
        chartData: __props.chartData,
        options
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Statistics/Chart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
