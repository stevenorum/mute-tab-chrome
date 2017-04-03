'use strict'
console.log("AUTOMUTE: Attempting to mute new tab.");
chrome.runtime.sendMessage({action: "MUTE"}, function(response) {
        console.log("AUTOMUTE: Response received: " + response);
});
