$(function () {
    chrome.storage.sync.get('limit', function(budget){
        $("#limit").val(budget.limit);
    })
    // Handle Limit Setting event on Option Page
    $("#saveLimit").click(function(){
        var limit = $("#limit").val();
        if(limit) {
            chrome.storage.sync.set({ 'limit': limit }, function () {
                close();
            });
        }

    });
    // Handle Reset Total event on Option Page
    $("#resetTotal").click(function(){
        chrome.storage.sync.set({'total': 0});
        var notifOption = {
            type: 'basic',
            iconUrl: 'notif.png',
            title: 'Total Reset',
            message: "Total spent has been reseted"
        };
        chrome.notifications.create('limitNotif', notifOption); //Create notification if Spend reseted
    });
});