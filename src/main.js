(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', onloadApp);
  return;

  function onloadApp() {
    const queryStrs = location.href.split('?')[1];
    if (queryStrs === undefined) return res;

    let w;
    let h;
    let s;

    for (const queryStr of queryStrs.split('&')) {
      const paramArray = queryStr.split('=');
      const paramName = paramArray[0];
      const paramVal = paramArray[1];
      switch (paramName) {
        case 'w':
          w = Number(paramVal);
          break;
        case 'h':
          h = Number(paramVal);
          break;
        case 's':
          s = paramVal;
          break;
      }
    }

    const base = 'https://tatt61880.github.io/symmetry-puzzle/';
    const query = `?mode=point&h=${h}&w=${w}&s=${s}`;
    const a = document.getElementById('link');
    a.setAttribute('href', `${base}${query}`);
  }
})();
