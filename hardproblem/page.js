var now = window.location.pathname.replace(/.*\//, "").replace(/\.[^/.]+$/, "");
var page = new Vue({
  el: '#page',
  data: {
    now: now,
    chapter: (HPFTCFG.chapters || []).filter(function (chapter) { return (chapter.sections || []).filter(function (section) { return section.id === now }).length > 0; })[0],
    chapters: (HPFTCFG.chapters || []),
  },
  ready: function () {
    var config = getOrInitConfig();
    selectFont(config.font);
  }
});
