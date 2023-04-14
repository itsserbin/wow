import { getCurrentInstance } from "vue";
function eventTracking(event = "", params = {}, event_id = null) {
  const { appContext } = getCurrentInstance();
  const $fbq = appContext.config.globalProperties.$fbq;
  $fbq(event, params, event_id);
}
export {
  eventTracking as e
};
