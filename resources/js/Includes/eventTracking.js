import {getCurrentInstance, onMounted} from 'vue'

const {appContext} = getCurrentInstance()
const {$fbq} = appContext.config.globalProperties

export default function useEventTracking(props) {
    onMounted(() => {
        if (import.meta.env.MODE === 'production') {
            $fbq('PageView', {}, props.eventIdPageView);
        }
    })
}
