MapSearchApp.services.factory("pubSubSrv", [
  "mixinSrv",
  "Evented",
  function(mixinSrv, Evented) {
    var evented = mixinSrv({}, Evented);

    function subscribe(topic, handler) {
      evented.on(topic, handler);
    }

    function publish(topic, args) {
      evented.trigger(topic, args);
    }

    function unsubscribe(topic) {
      evented.off(topic);
    }

    return {
      subscribe: subscribe,
      publish: publish,
      unsubscribe: unsubscribe
    };
  }
]);
