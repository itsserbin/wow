import { getCurrentInstance } from "vue";
const { appContext } = getCurrentInstance();
const $fbq = appContext.config.globalProperties.$fbq;
const PageView = (params = {}, event_id) => {
  $fbq("PageView", params, event_id);
};
const ViewContent = (params = {}, event_id) => {
  $fbq("ViewContent", params, event_id);
};
const addToCart = (params = {}, event_id) => {
  $fbq("AddToCart", params, event_id);
};
const purchase = (params = {}, event_id) => {
  $fbq("Purchase", params, event_id);
};
export {
  PageView as P,
  ViewContent as V,
  addToCart as a,
  purchase as p
};
