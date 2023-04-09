import {getCurrentInstance, onMounted, ref} from 'vue'

export default function useEventTracking(props) {
    const eventIdPageView = ref(props.eventIdPageView)
    const {appContext} = getCurrentInstance()
    const {$fbq} = appContext.config.globalProperties

    onMounted(() => {
        if (import.meta.env.MODE === 'production') {
            $fbq('PageView', {}, eventIdPageView.value)
        }
    })

    return {
        eventIdPageView
    }
}
