Vue.component('hpot-main-header', {
  className: 'header hpot-header hpot-main-header',
  template: '<a href="index.html"><img src="../img/hpot_logo.jpg" /></a>'
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
  template: '<a href="index.html"><img src="../img/hpot_logo.jpg" /></a>'
          + '<div v-component="hpot-section-index"></div>'
          + '<div class="hr"></div>'
          + '<p class="word">'
          + '  機械になりたい、って思った。'
          + '</p>'
          + '<p class="word">'
          + '  いまでもそう思ってる。'
          + '</p>'
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
          + '  <span class="sect-prefix">{{chapter.title}}</span>'
          + '</p>'
          + '<ol>'
          + '  <li v-repeat="section : chapter.sections" now="{{now === section.id}}">'
          + '    <a href="{{section.id}}.html">{{section.title}}</a>'
          + '  </li>'
          + '</div>'
});