window.onload = function(){
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	ga('create', 'UA-100279260-1', 'auto');
	ga('send', 'pageview');
	let jump = function(){
		if (location.href.indexOf("/hardproblem") != -1) {
			return "https://mayuragicenter.github.io/hardproblem/";
		} else if (location.href.indexOf("/metastable3") != -1) {
			return "https://mayuragicenter.github.io/metastable3/";
		} else {
			return "https://mayuragicenter.github.io/";
		}
	}();
	document.body.innerHTML = '<a href="' + jump + '">移動しました</a>。\nブックマークの変更等よろしくです。';
	setTimeout(function(){
		location.href = jump;
	}, 3000);
}