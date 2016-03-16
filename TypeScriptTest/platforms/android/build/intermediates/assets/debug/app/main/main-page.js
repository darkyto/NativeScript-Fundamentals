"use strict";
var pageLoaded = function (args) {
    var page = args.object;
    var oldMessage = page.getViewById('message');
    var newMessage = page.getViewById('newMessage');
    var changeIt = page.getViewById('changeIt');
    changeIt.on('tap', function (args) {
        oldMessage.text = newMessage.text;
    });
};
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=main-page.js.map