MapSearchApp.models.factory("Evented", [
  function() {
    var Evented = {
      on: function(eventName, listener) {
        if (!this._events)
          this._events = {};
        if (!this._events[eventName])
          this._events[eventName] = [];
        this._events[eventName].push(listener);
      },
      trigger: function(eventName, args) {
        args = args || [];
        if (!this._events)
          this._events = {};
        var listeners = this._events[eventName] || [];
        for (var i = 0; i < listeners.length; i++) {
          var listener = listeners[i];
          listener.apply(this, args);
        }
      },
      off: function(eventName) {
        if (!this._events)
          this._events = {};
        this._events[eventName] = [];
      }
    };

    return Evented;
  }
]);
