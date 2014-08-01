Vue.component('hpot_logo', {
  template: '<div class="logo hpot-logo">'
          + '  <a href="#"><img src="../img/hpot_logo.jpg" /></a>'
          + '  <p class="word delay1">'
          + '    機械になりたい、って思った。'
          + '  </p>'
          + '  <p class="word delay2">'
          + '    いまでもそう思ってる。'
          + '  </p>'
          + '</div>'
})

Vue.component('hpot_header', {
  template: '<div class="header hpot-header">'
          + '  <a href="#"><img src="../img/hpot_logo.jpg" /></a>'
          + '  <ol class="nav">'
          + '    <li class="nohover">'
          + '      {{title}}'
          + '    </li>'
          + '    <li v-repeat="section : sections" now="{{id === section.id}}">'
          + '      <a href="#{{section.id}}">{{section.title}}</a>'
          + '    </li>'
          + '  </ol>'

          + '  <div class="hr"></div>'
          + '</div>'
});

Vue.component('hpot_footer', {
  template: '<div class="footer hpot-footer">'
          + '  <div class="hr"></div>'
          + '  <ol class="nav">'
          + '    <li class="nohover">'
          + '      {{title}}'
          + '    </li>'
          + '    <li v-repeat="section : sections" now="{{id === section.id}}">'
          + '      <a href="#{{section.id}}">{{section.title}}</a>'
          + '    </li>'
          + '  </ol>'
          + '</div>'
});

function lfToBr (s) { return s ? s.split("\n").join("<br />") : s; }

var chapters = [
                {
                  sectPrefix: "§1",
                  title: "虹を閉じ込めた瞳",
                  id: "1-01",
                  sections:
                    [
                      {
                        title: "1",
                        id: "1-01",
                      },
                      {
                        title: "2",
                        id: "1-02",
                      },
                      {
                        title: "3",
                        id: "1-03",
                      },
                      {
                        title: "4",
                        id: "1-04",
                      },
                      {
                        title: "5",
                        id: "1-05",
                      },
                    ],
                },
                {
                  sectPrefix: "§2",
                },
                {
                  sectPrefix: "§3",
                },
                {
                  sectPrefix: "§4",
                },
                {
                  sectPrefix: "§5",
                },
                {
                  sectPrefix: "§6",
                },
              ];

var sections1 = chapters.filter(function (chapter) { return chapter.id === "1-01"; })[0].sections;

var pages = new Vue({
  el: '#pages',
  filters: {
    not: function (x) { return !x; },
    lfToBr: function (s) { return s ? s.split("\n").join("<br />") : s; },
  },
  data: {
    mainpage: {
      title: "ふたりのハードプロブレム",
      chapters: chapters,
    },
    subpages: [
      {
        id: "1-01",
        title: "§1 虹を閉じ込めた瞳",
        url: "1-01.html",
        sections: sections1,
        chapters: chapters,
      },
      {
        id: "1-02",
        title: "§1 虹を閉じ込めた瞳",
        url: "1-02.html",
        sections: sections1,
        chapters: chapters,
      },
      {
        id: "1-03",
        title: "§1 虹を閉じ込めた瞳",
        url: "1-03.html",
        sections: sections1,
        chapters: chapters,
      },
      {
        id: "1-04",
        title: "§1 虹を閉じ込めた瞳",
        url: "1-04.html",
        sections: sections1,
        chapters: chapters,
      },
      {
        id: "1-05",
        title: "§1 虹を閉じ込めた瞳",
        url: "1-05.html",
        sections: sections1,
      },
    ],
  }
});

(function () {

  for (var i = 0; i < pages.subpages.length; i++) {
    (function () {
      var subpage = pages.subpages[i];
      var dom = document.getElementById(subpage.id).querySelector("p");
      var xhr = new XMLHttpRequest();

      dom.innerHTML = "";

      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 300)) {
          dom.innerHTML = lfToBr(xhr.responseText);
        } else {
          dom.innerHTML = util.catURL(window.location.protocol + "//" + window.location.host + window.location.pathname, subpage.url) + ": " + xhr.statusText;
        }
      }
      xhr.open("GET", subpage.url, true);
      try {
        xhr.send();
      } catch (e) {
        dom.innerHTML = util.catURL(window.location.protocol + "//" + window.location.host + window.location.pathname, subpage.url) + ": " + e.message;
        return;
      }
    })();
  };
})();
