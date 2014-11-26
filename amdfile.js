define(function () {
  if (__isNode) {
    require('fs'); // dont want this to run on the browser
  }
});