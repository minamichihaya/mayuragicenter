function analyze(){
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('set', 'dimension7', function(){
  if (
    document.referrer.indexOf("mayuragicenter.github.io") == -1
    && document.referrer != ""
  ){
    ga('set', 'dimension9', document.referrer);
  }
  ga('create', 'UA-90831900-1', 'auto');
  ga('send', 'pageview');
}
