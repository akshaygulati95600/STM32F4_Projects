<!--
// Free the index/default.htm with Browsercheck for IE5.x
if ((navigator.appName.indexOf('Microsoft') != -1)&&(parseInt(navigator.appVersion.indexOf('5.')) != -1)&&(self != top)) {
	parent.location.href = self.location.href;
}

// Set frameset-status to "loaded", replace URL if needed
var FramesetGeladen = 1;
function SeiteLaden() {
		if(self.location.search.length > 0) {
			var laenge = self.location.search.length;
			var Neue_url = self.location.search.substring(1,laenge);
			if (document.images)
				self.right.location.replace(Neue_url);
			else
				self.right.location.href = (Neue_url);
		}
}
//-->