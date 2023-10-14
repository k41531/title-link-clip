chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    var title = activeTab.title;
    var url = activeTab.url;
    var result = '[' + title + '](' + url + ')';
    // Send a message to the content script
    (async () => {
      chrome.tabs.sendMessage(activeTab.id, {command: "copy", text: result})
    })();
  });
});