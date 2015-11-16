function printPosts(blob) {
	var output = "<ul>\n";	
	var prefix = '<p class="medium-feed-snippet">';

	for (var i = 0; i < blob.length; i++) {
		var text = blob[i].title, url = blob[i].link, descr = blob[i].summary;
		
			output += "\t" + '<li><a href="' + url + '">';

			output += text + '</a> &middot; ';
		
			var starti = descr.indexOf(prefix)
			var endi = descr.indexOf('</p>');
			descr = descr.substr(starti + prefix.length, endi - (starti+prefix.length));
			output += descr + "</li>\n";
	}
	output += "</ul>";
	var node = document.getElementById('medium-link');
	node.parentNode.innerHTML = output;
}

$(document).ready(function() {
blockspring.runParsed("parse-rss-feed-to-json", { "feed_url": "https://medium.com/feed/@marcusf", "num_items": 0, "_cache": 7200}, { "api_key": "br_12599_5491dba6dc784f261e8ac7b5d80b3fcc031a2966" }, function(res){
	console.log(res);
    printPosts(res.params.feed);
});
});

