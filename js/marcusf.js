function printPosts(blob) {
	var output = "<ul>\n";	
	var prefix = '<p class="medium-feed-snippet">';

	for (var i = 0; i < blob.length; i++) {
		var text = blob[i].title, url = blob[i].link, descr = blob[i].contentSnippet;
			output += "\t" + '<li><a href="' + url + '">' 
				+ text + '</a> &middot; ' + descr + "</li>\n";
	}
	output += "</ul>";
	var node = document.getElementById('medium-link');
	node.parentNode.innerHTML = output;
}

$(document).ready(function() {
	var FEED_URL = "https://medium.com/feed/@marcusf";

	$.ajax({
  url      : 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(FEED_URL),
  dataType : 'json',
  success  : function (data) {
    if (data.responseData.feed && data.responseData.feed.entries) {
    	printPosts(data.responseData.feed.entries);
    }
  }
});

});

