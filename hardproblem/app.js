Vue.component('header', {
  template: util.load('/components/header.html')
})

Vue.component('hpot_header', {
  template: util.load('/components/hpot_header.html')
})

function mkSections(sections, id) {
  var sections = sections.map(function (x) { return _.extend({}, x) });
  return function () {
    for (var i = sections.length - 1; i >= 0; i--) {
      if (sections[i].id === id) {
        sections[i].now = true;
      } else {
        sections[i].now = false;
      }
    };
    return sections;
  }
}

var sections1 = [
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
      logo: util.load("/components/hpot_logo.html"),
      chapters: [
        {
          title: "§1",
          id: "1-01",
        },
        {
          title: "§2",
        },
        {
          title: "§3",
        },
        {
          title: "§4",
        },
        {
          title: "§5",
        },
        {
          title: "§6",
        },
      ],
    },
    subpages: [
      {
        id: "1-01",
        title: "§1 虹を閉じ込めた瞳",
        text: util.load("1-01.html"),
        sections: mkSections(sections1, "1-01"),
      },
      {
        id: "1-02",
        title: "§1 虹を閉じ込めた瞳",
        text: util.load("1-02.html"),
        sections: mkSections(sections1, "1-02"),
      },
      {
        id: "1-03",
        title: "§1 虹を閉じ込めた瞳",
        text: util.load("1-03.html"),
        sections: mkSections(sections1, "1-03"),
      },
      {
        id: "1-04",
        title: "§1 虹を閉じ込めた瞳",
        text: util.load("1-04.html"),
        sections: mkSections(sections1, "1-04"),
      },
      {
        id: "1-05",
        title: "§1 虹を閉じ込めた瞳",
        text: util.load("1-05.html"),
        sections: mkSections(sections1, "1-05"),
      },
    ],
  }
});