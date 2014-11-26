define(function () {
  if (__isNode) {
  return __nodeRequire('fs');
} else {
    __throwExcluded('fs', 'node-only & local');
}
});