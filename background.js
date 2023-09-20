chrome.action.onClicked.addListener(function(tab){
	var chromeExtURL="chrome://extensions/"
	// chrome.tabs.getAllInWindow(null,function(tabs){
	chrome.tabs.query({}, function(tabs) {
		for (var i=0;i<tabs.length;i++){
			if (tabs[i].url == chromeExtURL){
				// chrome.tabs.update(tabs[i].id, {selected:true})
				chrome.tabs.update(tabs[i].id, {highlighted: true});
				return;
			}
		}
		chrome.tabs.create({url:chromeExtURL,selected:true})
	})
})