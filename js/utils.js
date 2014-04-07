function log() {
  console.log.apply(console, arguments);
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function randomDate() {
  var YEAR_MILLISEC = 31557600000;
  var now = new Date();
  var ago = randomBetween(YEAR_MILLISEC / 3, YEAR_MILLISEC * 25);
  return new Date(now.getTime() - ago);
}
