(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
if (
	document.referrer.indexOf("mayuragicenter.github.io") == -1
	&& document.referrer != ""
){
	ga('set', 'dimension9', document.referrer);
	ga('create', 'UA-90831900-1', 'auto');
	ga('send', 'pageview');
}
if (location.href.indexOf("/hardproblem") != -1) {
	location.href = "https://mayuragicenter.github.io/hardproblem/";
} else if (location.href.indexOf("/metastable3") != -1) {
	location.href = "https://mayuragicenter.github.io/metastable3/";
} else {
	location.href = "https://mayuragicenter.github.io/";
}