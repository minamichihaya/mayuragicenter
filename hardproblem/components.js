Vue.component('hpot-main-header', {
  className: 'header hpot-header hpot-main-header',
  template: '<a href="../hardproblem"><img src="../img/hardproblem_logo.png" /></a>'
          + '<div class="hr"></div>'
          + '<p class="word">'
          + '  機械になりたい、って思った。'
          + '</p>'
          + '<p class="word">'
          + '  いまでもそう思ってる。'
          + '</p>'
});

Vue.component('hpot-page-header', {
  className: 'header hpot-header hpot-page-header',
  template: '<a href="../hardproblem"><img src="../img/hardproblem_logo.png" /></a>'
          + '<div v-component="hpot-section-index-in-page-header"></div>'
          + '<div class="hr"></div>'
});

Vue.component('hpot-page-footer', {
  className: 'footer hpot-footer hpot-page-footer',
  template: '<div class="hr"></div>'
          + '<div v-component="hpot-index"></div>',
});

Vue.component('hpot-index', {
  className: 'hpot-index',
  template: '<ol>'
          + '  <li v-repeat="chapter : chapters">'
          + '    <div v-component="hpot-section-index"></div>'
          + '  </li>'
          + '</ol>'
});

Vue.component('hpot-section-index', {
  className: "hpot-section-index",
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

Vue.component('hpot-section-index-in-page-header', {
  className: "hpot-section-index",
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
          + '<select onchange="document.getElementById(\'fontsets\').href = value;" class="fontselect">'
          + '<option value="../fonts/meiryo.css" selected>メイリオ + Microsoft YaHei</option>'
          + '<option value="../fonts/notosans.css">Noto Sans CJK</option>'
          + '<option value="../fonts/yu_mincho.css">游明朝 + AR PL SungtiL GB</option>'
          + '<option value="../fonts/hanazono_mincho.css">花園明朝</option>'
          + '<option value="../fonts/sans-serif.css">MSゴシック／ヒラギノ角ゴ</option>'
          + '<option value="../fonts/serif.css">MS明朝／ヒラギノ明朝</option>'
          + '<option>ブラウザ指定</option>'
          + '</select>'
});
