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

    function getAll(onFulfilled, onRejected, loadFromServer) {
      if (loadFromServer) {
        // TODO: ajax request url: "server/realEstates.json"
      } else {
        // TODO: return in memory REAL_ESTATES_DATA
      }
    }

    return {
      getAll: getAll
    };
  }
]);
