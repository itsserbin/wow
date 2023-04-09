import { onMounted } from 'vue'

export default function useEventTracking(props) {
    onMounted(() => {
        if (import.meta.env.MODE === 'production') {
            $fbq('PageView', {}, {
                event_id: props.eventIdPageView
            });
        }
    })
}
