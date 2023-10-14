chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.command == "copy") {
      navigator.clipboard.writeText(message.text).then(function() {
          console.log("Copied to clipboard: " + message.text);
      }, function() {
          console.error("Failed to copy text.");
      });
  }
});