'use strict'
chrome.runtime.onMessage.addListener(
                                     function(request, sender, sendResponse) {
                                         console.log("Request received by automute: " + request);
                                         if (sender.tab) {
                                             console.log("Muting tab: " + sender.tab.id);
                                             chrome.tabs.update(sender.tab.id, {muted: true});
                                             sendResponse("SUCCESS");
                                         }
                                         sendResponse("FAILURE");
                                     });
