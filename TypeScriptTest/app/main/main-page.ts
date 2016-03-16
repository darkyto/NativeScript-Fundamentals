import { Observable, EventData  } from 'data/observable';
import { ObservableArray } from 'data/observable-array';

import { Page } from 'ui/page';

import platformModule = require('platform');

/**
 * Item
 */
class Item {
    name: string;
    id: number;

    constructor(name: string) {
        this.name = name;
        this.id = new Date().getTime();
    }
}

/**
 * ViewModel extends Observable
 */
class ViewModel extends Observable {
    oldMessage: string;
    newMessage: string;
    newMessageToAdd: string;
    items: ObservableArray<Item>;

    constructor() {
        super();

        this.oldMessage = 'Default';
        this.newMessage = 'Change the Default Here';
        this.newMessageToAdd = 'Add Your New Message ';
        this.items = new ObservableArray<Item>([
            new Item('Sample Message One'),
            new Item('Another Sample Message')
        ]);
    }

    changeIt() {
        this.set('oldMessage', this.get('newMessage'));
    }

    addMessage() {
        this.items.push(new Item(this.get('newMessageToAdd')));
        this.set('newMessageToAdd', '');
        console.log(this.items.join(" "));
    }
}

let viewModel = new ViewModel();

let pageLoaded = (args: EventData) => {
    let page = <Page>args.object;
    page.bindingContext = viewModel;

    console.log("Device model: " + platformModule.device.model);
    console.log("Device type: " + platformModule.device.deviceType);
    console.log("OS: " + platformModule.device.os);
    console.log("OS version: " + platformModule.device.osVersion);
    console.log("SDK Version: " + platformModule.device.sdkVersion);
    console.log("Screen width: " + platformModule.screen.mainScreen.widthPixels);
    console.log("Screen height: " + platformModule.screen.mainScreen.heightPixels);
    console.log("Screen scale: " + platformModule.screen.mainScreen.scale);
}

let onItemTap = (args) => {
    var tappedItemView  = args.view;
    var tappedItemIndex = args.index;
    tappedItemView.backgroundColor = '#000';
}

export { pageLoaded, onItemTap }
