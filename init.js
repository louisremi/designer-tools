(function( undefined ) {

var iframe = document.createElement('iframe'),
	html = [
		"<!DOCTYPES>",
		"<html lang=\"en\" style=\"min-height: 0; overflow: hidden;\">",
			"<head>",
				"<link rel=\"stylesheet\" href=\"http://code.jquery.com/mobile/1.0a3/jquery.mobile-1.0a3.min.css\" />",
				"<link rel=\"stylesheet\" href=\"http://localhost:8080/toolbar/toolbar.css\" />",
				"<script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js\"></script>",
				"<script src=\"http://code.jquery.com/mobile/1.0a3/jquery.mobile-1.0a3.min.js\"></script>",
				"<script src=\"http://localhost:8080/toolbar/toolbar.js\"></script>",
			"</head>",
			"<body>",
				"<div data-role=\"page\">",
					"<div id=\"dt\" data-role=\"header\" data-theme=\"b\">",
						"<button id=\"point\" data-icon=\"point\" data-iconpos=\"notext\"></button>",
						"<input id=\"selector\" placeholder=\"selector\" />",
						"<span id=\"selected\">0</span>",
						"<span id=\"tools\">",
							"<button id=\"opacity\" data-icon=\"opacity\">Opacity</button>",
						"</span>",
						"<span id=\"right\">",
							"<button id=\"toggle-position\" data-icon=\"arrow-u\" data-iconpos=\"notext\"></button>",
							"<button id=\"close\" data-icon=\"delete\" data-iconpos=\"notext\"></button>",
						"</span>",
					"</div>",
				"</div>",
			"</body>",
		"</html>"
	].join('\n');

iframe.frameBorder = "0";
iframe.id = "designer-tools-iframe";
iframe.allowTransparency = "false";
iframe.style.width = '100%';
iframe.style.height = '45px';
iframe.style.position = 'fixed';
iframe.style.left = 0;
iframe.style.bottom = 0;

document.body.appendChild(iframe);

iframe.contentWindow.document.open();
var d = iframe.contentWindow.document;
d.write(html);
d.close();

})();