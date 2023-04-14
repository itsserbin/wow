import {getCurrentInstance} from 'vue'

const {appContext} = getCurrentInstance()
const $fbq = appContext.config.globalProperties.$fbq;

export const PageView = (params = {}, event_id) => {
    $fbq('PageView', params, event_id)
}

export const ViewContent = (params = {}, event_id) => {
    $fbq('ViewContent', params, event_id)
}

export const addToCart = (params = {}, event_id) => {
    $fbq('AddToCart', params, event_id)
}

export const purchase = (params = {}, event_id) => {
    $fbq('Purchase', params, event_id)
}
