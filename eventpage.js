//create a context Menu Object
var contextMenuItem = {
    "id": "spendMoney",
    "title": "Spend Money",
    "contexts": ["selection"],
}


var menuItem = {
    "id": "wiki",
    "title": "Wiki Search",
    "contexts": ["selection"],
}


// Function for checking an integer
function isInt(value) {
    return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}
// Function for converting into searable string
function fixedEncodeURI(str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}


//create a context Menu
chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.create(menuItem);

//context Menu event
chrome.contextMenus.onClicked.addListener(function (clickData) {
    chrome.tts.speak(clickData.selectionText, { 'rate': 0.7 });        // Chrome Api for text to speak

    // This is working for Spend Money Context
    if (clickData.menuItemId == "spendMoney" && clickData.selectionText) {
        if (isInt(clickData.selectionText)) {
            chrome.storage.sync.get(['total', 'limit'], function (budget) {
                var newTotal = 0;
                if (budget.total) {
                    newTotal += parseInt(budget.total);
                }
                newTotal += parseInt(clickData.selectionText);

                chrome.storage.sync.set({ 'total': newTotal }, function () {
                    if (newTotal >= budget.limit) {
                        var notifOption = {
                            type: 'basic',
                            iconUrl: 'notif.png',
                            title: 'Limit Reached',
                            message: "Uh oh! Looks like you've reached your limit!"
                        };
                        chrome.notifications.create('limitNotif', notifOption); //Create notification if Limit Exceeds
                    }
                });
            });
        }
    }

    // This is working for Wiki Search Context
    if (clickData.menuItemId == "wiki" && clickData.selectionText) {
        var wikiURL = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);
        var createData = {
            "url": wikiURL,
            "type": "popup",
            "top": 10,
            "left": 10,
            "height": parseInt(screen.availHeight / 2),
            "width": parseInt(screen.availWidth / 2)
        };
        chrome.windows.create(createData, function () { });
    };

});
//create a badge for displaying Updated Total spend value
chrome.storage.onChanged.addListener(function (changes, storageName) {
    chrome.browserAction.setBadgeText({ "text": changes.total.newValue.toString() });
});

