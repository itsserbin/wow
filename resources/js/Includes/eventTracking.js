import {getCurrentInstance} from 'vue'

export default function (event = '', params = {}, event_id = null) {
    const {appContext} = getCurrentInstance()
    const $fbq = appContext.config.globalProperties.$fbq;

    $fbq(event, params, event_id);
}
