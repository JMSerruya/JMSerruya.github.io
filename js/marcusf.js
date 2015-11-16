function printPosts(blob) {
	var output = "<ul>\n";	
	var prefix = '<p class="medium-feed-snippet">';

	for (var i = 0; i < blob.feed.entry.length; i++) {
		var text = blob.feed.entry[i]["gs$cell"]["$t"];
		if (i % 3 == 1) {
			output += text + '</a> &middot; ';
		} else if (i % 3 == 0) {
			output += "\t" + '<li><a href="' + text + '">';
		} else {
			var starti = text.indexOf(prefix)
			var endi = text.indexOf('</p>');
			var snippet = text.substr(starti + prefix.length, endi - (starti+prefix.length));
			output += snippet + "</li>\n";
		}
	}
	output += "</ul>";
	var node = document.getElementById('medium-link');
	node.parentNode.innerHTML = output;
}