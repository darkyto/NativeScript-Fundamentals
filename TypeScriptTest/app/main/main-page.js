"use strict";
var observable_1 = require('data/observable');
var platformModule = require('platform');
var viewModel = new observable_1.Observable({
    oldMessage: 'Default Message',
    newMessage: '',
    changeIt: function (args) {
        this.set('oldMessage', this.get('newMessage'));
    }
});
var pageLoaded = function (args) {
    var page = args.object;
    page.bindingContext = viewModel;
    console.log("Device model: " + platformModule.device.model);
    console.log("Device type: " + platformModule.device.deviceType);
    console.log("OS: " + platformModule.device.os);
    console.log("OS version: " + platformModule.device.osVersion);
    console.log("SDK Version: " + platformModule.device.sdkVersion);
    console.log("Screen width: " + platformModule.screen.mainScreen.widthPixels);
    console.log("Screen height: " + platformModule.screen.mainScreen.heightPixels);
    console.log("Screen scale: " + platformModule.screen.mainScreen.scale);
};
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=main-page.js.map