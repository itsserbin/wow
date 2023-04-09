import {getCurrentInstance, onMounted, ref} from 'vue'

export default function useEventTracking(eventIdPageView) {
    const {appContext} = getCurrentInstance()
    const $fbq = appContext.config.globalProperties.$fbq
    const eventIdPageViewRef = ref(eventIdPageView)

    onMounted(() => {
        $fbq('PageView', {}, eventIdPageViewRef.value)
    })
}
