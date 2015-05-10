module.exports = function(callback, app) {
  return 'rapid://authorize/?callback=' + encodeURIComponent(callback) + '&app=' + app;
}
