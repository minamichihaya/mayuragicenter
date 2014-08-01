util = {};
util.find = function (ary, fn) {
  return ary.filter(fn)[0];
};
util.is = function (prop, c) {
  return function (obj) {
    return obj[prop] === c;
  }
};
util.catURL = function (url1, url2) {
  if (url1[url1.length - 1] === "/") {
    return url1 + url2;
  } else {
    return url1 + "/" + url2;
  }
};
util.load = function (url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  try {
    xhr.send();
  } catch (e) {
    return util.catURL(window.location.protocol + "//" + window.location.host + window.location.pathname, url) + ": " + e.message;
  }
  if (xhr.status >= 200 && xhr.status < 300
        || xhr.status === 0 && !xhr.statusText) {
    return xhr.responseText;
  } else {
    return util.catURL(window.location.protocol + "//" + window.location.host + window.location.pathname, url) + ": " + xhr.statusText;
  }
};