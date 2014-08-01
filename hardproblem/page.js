var now = window.location.pathname.replace(/.*\//, "").replace(/\.[^/.]+$/, "");
var page = new Vue({
  el: '#page',
  data: {
    now: now,
    chapter: (HPOTCFG.chapters || []).filter(function (chapter) { return (chapter.sections || []).filter(function (section) { return section.id === now }).length > 0; })[0],
    chapters: (HPOTCFG.chapters || []),
  }
});