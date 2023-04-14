function eventTracking(event = "", params = {}, event_id = null) {
  fbq("track", event, params, { event_id });
}
export {
  eventTracking as e
};
