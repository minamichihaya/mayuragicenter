var now = window.location.pathname.replace(/.*\//, "").replace(/\.[^/.]+$/, "");
var page = new Vue({
  el: '#page',
  data: {
    now: now,
    chapter: (HPOTCFG.chapters || []).filter(function (chapter) { return chapter.id === now })[0],
    chapters: (HPOTCFG.chapters || []),
  }
});