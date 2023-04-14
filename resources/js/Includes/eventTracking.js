export default function (event = '', params = {}, event_id = null) {
    fbq('track', event, params, {event_id: event_id});
}
