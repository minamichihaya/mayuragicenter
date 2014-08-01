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
          + '  <ol class="nav1">'
          + '    <li v-repeat="chapter : chapters">'
          + '      <ol class="nav">'
          + '        <li class="nohover">'
          + '          {{chapter.sectPrefix}} {{chapter.title}}'
          + '        </li>'
          + '        <li v-repeat="section : chapter.sections" now="{{id === section.id}}">'
          + '          <a href="#{{section.id}}">{{section.title}}</a>'
          + '        </li>'
          + '      </ol>'
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
                      {
                        title: "6",
                        id: "1-06",
                      },
                      {
                        title: "7",
                        id: "1-07",
                      },
                      {
                        title: "8",
                        id: "1-08",
                      },
                    ],
                },
                {
                  sectPrefix: "§2",
                  title: "海へ行こう",
                  sections:
                    [
                      {
                        title: "1",
                        id: "2-01",
                      },
                      {
                        title: "2",
                        id: "2-02",
                      },
                      {
                        title: "3",
                        id: "2-03",
                      },
                      {
                        title: "4",
                        id: "2-04",
                      },
                      {
                        title: "5",
                        id: "2-05",
                      },
                      {
                        title: "6",
                        id: "2-06",
                      },
                    ],
                },
                {
                  sectPrefix: "§3",
                  title: "その柔肌は誰のために",
                  sections:
                    [
                      {
                        title: "1",
                        id: "3-01",
                      },
                      {
                        title: "2",
                        id: "3-02",
                      },
                      {
                        title: "3",
                        id: "3-03",
                      },
                      {
                        title: "4",
                        id: "3-04",
                      },
                      {
                        title: "5",
                        id: "3-05",
                      },
                      {
                        title: "6",
                        id: "3-06",
                      },
                      {
                        title: "7",
                        id: "3-07",
                      },
                    ],
                },
                {
                  sectPrefix: "§4",
                  title: "ことしはひとりじゃない",
                  sections:
                    [
                      {
                        title: "1",
                        id: "4-01",
                      },
                      {
                        title: "2",
                        id: "4-02",
                      },
                      {
                        title: "3",
                        id: "4-03",
                      },
                      {
                        title: "4",
                        id: "4-04",
                      },
                      {
                        title: "5",
                        id: "4-05",
                      },
                    ],
                },
                {
                  sectPrefix: "§5",
                  title: "(タイトル未定)",
                },
                {
                  sectPrefix: "§6",
                  title: "窓の向こう(仮)",
                },
              ];

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
    subpages:
      [].concat.apply([], chapters.map(function (chapter) {
        return (chapter.sections || []).map(function (section) {
            return {
              id: section.id || "",
              title: (chapter.sectPrefix || "") + (chapter.title || ""),
              url: section.id + ".html",
              sections: chapter.sections || [],
              chapters: chapters || [],
            }
          })})),
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
