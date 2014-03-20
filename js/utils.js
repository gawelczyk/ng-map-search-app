function log() {
  console.log.apply(console, arguments);
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
