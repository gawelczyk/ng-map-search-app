MapSearchApp.repositories.factory("realEstatesRepository", [
  "$q",
  "$timeout",
  function($q, $timeout) {
    var STREETS = _(["Rzeckiego", "Jaspisowa", "Nowy Swiat", "Balcera", "Naleczowska"]);
    var REAL_ESTATES_DATA = [];
    for (var i = 0; i < 10; i++) {
      REAL_ESTATES_DATA.push({
        id: 100 + i,
        street: STREETS.sample() + " " + Math.floor(randomBetween(1, 90)),
        lat: randomBetween(51, 52),
        lng: randomBetween(20, 22)
      });
    }

    function getAll(onFulfilled, onRejected) {
      var deferred = $q.defer();
      $timeout(function() {
        deferred.resolve(REAL_ESTATES_DATA);
      }, 200);
      return deferred.promise.then(onFulfilled, onRejected);
    }

    return {
      getAll: getAll
    };
  }
]);
