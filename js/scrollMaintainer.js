function storePosition() {};





chrome.browserAction.onClicked.addListener(function(tab) {
    triggered("clicked_icon");
});

function triggered(messageString){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": messageString});
    });
}