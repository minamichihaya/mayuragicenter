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
    font = METASTABLECFG.defaultFont;
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
Vue.component('metastable-main-header', {
  className: 'header metastable-header metastable-main-header',
  template: '<a href="../metastable3"><img src="../img/metastable3_logo.png" /></a>'
          + '<div class="hr"></div>'
          + '<p class="word">'
          + '  機械になりたい、って思った。'
          + '</p>'
          + '<p class="word">'
          + '  いまでもそう思ってる。'
          + '</p>'
});

Vue.component('metastable-page-header', {
  className: 'header metastable-header metastable-page-header',
  template: '<a href="../metastable3"><img src="../img/metastable3_logo_header.png" /></a>'
          + '<div v-component="metastable-section-index-in-page-header"></div>'
          + '<div class="hr"></div>'
});

Vue.component('metastable-page-footer', {
  className: 'footer metastable-footer metastable-page-footer',
  template: '<div class="hr"></div>'
          + '<div v-component="metastable-index"></div>',
});

Vue.component('metastable-index', {
  className: 'metastable-index',
  template: '<ol>'
          + '  <li v-repeat="chapter : chapters">'
          + '    <div v-component="metastable-section-index"></div>'
          + '  </li>'
          + '</ol>'
});

Vue.component('metastable-section-index', {
  className: "metastable-section-index",
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

Vue.component('metastable-section-index-in-page-header', {
  className: "metastable-section-index",
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
          + '<option selected>ブラウザ指定フォント</option>'
          + '<option value="../fonts/meiryo.css">メイリオ + Microsoft YaHei</option>'
          + '<option value="../fonts/notosans.css">Noto Sans CJK</option>'
          + '<option value="../fonts/yu_mincho.css">游明朝 + AR PL SungtiL GB</option>'
          + '<option value="../fonts/hanazono_mincho.css">花園明朝</option>'
          + '<option value="../fonts/sans-serif.css">MSゴシック／ヒラギノ角ゴ</option>'
          + '<option value="../fonts/serif.css">MS明朝／ヒラギノ明朝</option>'
          + '</select>'
});
