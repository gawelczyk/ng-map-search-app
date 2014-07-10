MapSearchApp.repositories.factory("realEstatesRepository", [
  "$q",
  "$http",
  function($q, $http) {
    var REAL_ESTATES_COUNT = 10;
    var STREETS = _(["Rzeckiego", "Jaspisowa", "Nowy Swiat", "Balcera", "Naleczowska"]);
    var TYPES = _(["RES", "COM", "IND", "AGR", "SP"]);
    var REAL_ESTATES_DATA = [];

    for (var i = 0; i < REAL_ESTATES_COUNT; i++) {
      REAL_ESTATES_DATA.push({
        id: 100 + i,
        street: STREETS.sample() + " " + Math.floor(randomBetween(1, 90)),
        lat: randomBetween(51, 52),
        lng: randomBetween(20, 22),
        price: randomBetween(20000, 250000),
        type: TYPES.sample(),
        builtAt: randomDate()
      });
    }

    function getAll(onFulfilled, onRejected) {
      var deferred = $http({method: "GET", url: "server/realEstates.json"});
      deferred.success(function(realEstates) {
        _(realEstates).each(function(realEstate) {
          realEstate.builtAt = new Date(realEstate.builtAt);
        });
        onFulfilled(realEstates);
      });
      deferred.error(onRejected);
    }

    return {
      getAll: getAll
    };
  }
]);
