define('fs',[],function () {
  if (__isNode) {
  return __nodeRequire('fs');
} else {
    __throwExcluded('fs', 'node-only & local');
}
});
define('amdfile',['fs'],function () {
  if (__isNode) {
    require('fs'); // dont want this to run on the browser
  }
});
