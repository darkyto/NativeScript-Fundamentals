import { Page } from 'ui/page';
import { Observable } from 'data/observable';
import { EventData } from 'data/observable';

import platformModule = require('platform');

let viewModel = new Observable({
    oldMessage: 'Default Message',
    newMessage: '',
    changeIt: function(args:EventData) {
        this.set('oldMessage', this.get('newMessage'));
    }  
})

let pageLoaded = (args:EventData) => {
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

export { pageLoaded }
