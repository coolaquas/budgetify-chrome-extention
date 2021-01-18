$(function () {
    chrome.storage.sync.get(['total', 'limit'], function (budget) {
        $("#total").text(budget.total);
        $("#limit").text(budget.limit);
    });
    // Handle Spend Button event on Popup Page
    $("#spendAmount").click(function () {
        chrome.storage.sync.get(['total', 'limit'], function (budget) {
            var newTotal = 0;
            if (budget.total) {
                newTotal += parseInt(budget.total);
            }
            var amount = $('#amount').val();
            if (amount) {
                newTotal += parseInt(amount);
            }

            chrome.storage.sync.set({ 'total': newTotal }, function () {
                if (amount && newTotal >= budget.limit) {
                    var notifOption = {
                        type: 'basic',
                        iconUrl: 'notif.png',
                        title: 'Limit Reached',
                        message: "Uh oh! Looks like you've reached your limit!"
                    };
                    chrome.notifications.create('limitNotif', notifOption); //Create notification if Limit Exceeds
                }
            });
            $('#total').text(newTotal);
            $('#amount').val('');
        });
    });
});