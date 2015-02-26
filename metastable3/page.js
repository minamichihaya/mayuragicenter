var now = window.location.pathname.replace(/.*\//, "").replace(/\.[^/.]+$/, "");
var page = new Vue({
  el: '#page',
  data: {
    now: now,
    chapter: (METASTABLECFG.chapters || []).filter(function (chapter) { return (chapter.sections || []).filter(function (section) { return section.id === now }).length > 0; })[0],
    chapters: (METASTABLECFG.chapters || []),
  },
  ready: function () {
    var config = getOrInitConfig();
    selectFont(config.font);
  }
});
