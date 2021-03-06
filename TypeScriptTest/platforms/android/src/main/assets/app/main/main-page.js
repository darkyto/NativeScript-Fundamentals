"use strict";
var observable_1 = require('data/observable');
var observable_array_1 = require('data/observable-array');
var platformModule = require('platform');
/**
 * Item
 */
var Item = (function () {
    function Item(name) {
        this.name = name;
        this.id = new Date().getTime();
    }
    return Item;
}());
/**
 * ViewModel extends Observable
 */
var ViewModel = (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel() {
        _super.call(this);
        this.oldMessage = 'Default';
        this.newMessage = 'Change the Default Here';
        this.newMessageToAdd = 'Add Your New Message ';
        this.items = new observable_array_1.ObservableArray([
            new Item('Sample Message One'),
            new Item('Another Sample Message')
        ]);
    }
    ViewModel.prototype.changeIt = function () {
        this.set('oldMessage', this.get('newMessage'));
    };
    ViewModel.prototype.addMessage = function () {
        this.items.push(new Item(this.get('newMessageToAdd')));
        this.set('newMessageToAdd', '');
        console.log(this.items.join(" "));
    };
    return ViewModel;
}(observable_1.Observable));
var viewModel = new ViewModel();
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
var onItemTap = function (args) {
    var tappedItemView = args.view;
    var tappedItemIndex = args.index;
    tappedItemView.backgroundColor = '#000';
};
exports.onItemTap = onItemTap;
//# sourceMappingURL=main-page.js.map