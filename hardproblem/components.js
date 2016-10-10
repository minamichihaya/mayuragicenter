function getOrInitConfig() {
  if (typeof localStorage === "undefined") {
    return undefined;
  } else {
    var config = localStorage.getItem("config");
    if (config) {
      return JSON.parse(config);
    } else {
      config = JSON.stringify({});
      localStorage.setItem("config", config);
      return {};
    }
  }
}

function setConfig(config) {
  localStorage.setItem("config", JSON.stringify(config));
}

function selectFont(value) {
  document.getElementById("fontsets").href = value;
  if (typeof localStorage !== "undefined") {
    var config = getOrInitConfig();
    config.font = value;
    setConfig(config);
  }
  var font;
  if (value) {
    font = value;
  } else {
    font = HPFTCFG.defaultFont;
  }

  var selections = document.querySelectorAll("#fontselect option");
  for (var i = 0; i < selections.length; ++i) {
    var selection = selections[i];
    if (selection.value === font) {
      selection.selected = "true";
    } else {
      delete selections.selected;
    }
  }
}
Vue.component('hpft-main-header', {
  className: 'header hpft-header hpft-main-header',
  template: '<a href="../hardproblem"><img src="../img/hardproblem_logo.png" /></a>'
          + '<div class="hr"></div>'
          + '<p class="word">'
          + '  機械になりたい、って思った。'
          + '</p>'
          + '<p class="word">'
          + '  いまでもそう思ってる。'
          + '</p>'
});

Vue.component('hpft-page-header', {
  className: 'header hpft-header hpft-page-header',
  template: '<a href="../hardproblem"><img id="headerlogo" src="../img/hardproblem_logo_1_header.png" /></a>'
          + '<div v-component="hpft-section-index-in-page-header"></div>'
          + '<div class="hr"></div>'
});

Vue.component('hpft-page-footer', {
  className: 'footer hpft-footer hpft-page-footer',
  template: '<div class="hr"></div>'
          + '<div v-component="hpft-index"></div>',
});

Vue.component('hpft-index', {
  className: 'hpft-index',
  template: '<ol>'
          + '  <li v-repeat="chapter : chapters">'
          + '    <div v-component="hpft-section-index"></div>'
          + '  </li>'
          + '</ol>'
});

Vue.component('hpft-section-index', {
  className: "hpft-section-index",
  template: '<p class="title">'
          + '  <span class="sect-prefix">{{chapter.sectPrefix}}</span>'
          + '  <span class="title-text">{{chapter.title}}</span>'
          + '</p>'
          + '<ol>'
          + '  <li v-repeat="section : chapter.sections" now="{{now === section.id}}">'
          + '    <a href="{{section.id}}.html">{{section.title}}</a>'
          + '  </li>'
          + '</div>'
});

Vue.component('hpft-section-index-in-page-header', {
  className: "hpft-section-index",
  template: '<p class="title">'
          + '  <span class="sect-prefix">{{chapter.sectPrefix}}</span>'
          + '  <span class="title-text">{{chapter.title}}</span>'
          + '</p>'
          + '<ol>'
          + '  <li v-repeat="section : chapter.sections" now="{{now === section.id}}">'
          + '    <a href="{{section.id}}.html">{{section.title}}</a>'
          + '  </li>'
          + '</ol>'
          + '<br />'
          + '<select id="fontselect" onchange="selectFont(value)" class="fontselect">'
          + '<option value="../fonts/yu_mincho.css" selected>游明朝</option>'
          + '<option value="../fonts/notosans.css">Noto Sans CJK</option>'
          + '<option value="../fonts/meiryo.css">メイリオ</option>'
          + '<option value="../fonts/msmincho.css">MS明朝</option>'
          + '<option value="../fonts/serif.css">ブラウザ指定(明朝)</option>'
          + '<option value="../fonts/sans-serif.css">ブラウザ指定(ゴシック)</option>'
          + '</select>'
});
