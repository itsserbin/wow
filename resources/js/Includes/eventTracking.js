import {getCurrentInstance, onMounted, ref} from 'vue'

export default function useEventTracking() {
    const eventIdPageView = ref(null)
    const {appContext} = getCurrentInstance()
    const $fbq = appContext.config.globalProperties.$fbq

    onMounted(() => {
        if (import.meta.env.MODE === 'production') {
            $fbq('PageView', {}, eventIdPageView.value)
        }
    })

    const setEventIdPageView = (eventId) => {
        eventIdPageView.value = eventId
    }

    const methods = {
        setEventIdPageView,
    }

    // expose methods to the component
    const expose = () => {
        return {
            ...methods,
        }
    }

    return {
        expose,
    }
}
