"use strict";

describe("ExtJS Movie App Test Suite", function () {
    var mainPanel = null;
    var movieStore = null;
    var movieStore = null;
    var storeLength = -1;
    var controller = null;
    /* Setup method to be called before each Test case.*/
    beforeEach(function () {
        // Initializing the mainPanel.

        // Ext.onReady(function() {
            // console.log(Ext.manifest);
            mainPanel = Ext.create('PWADemo.view.main.Main');
            movieStore = Ext.StoreManager.lookup('MovieStore');
            storeLength = movieStore.data.items.length;
        // });
    }); // before each

    /* Test if View is created Successfully.*/
    it('Main View is loaded', function () {
        expect(mainPanel != null).toBeTruthy();
    });

    /* Test if store is loaded successfully.*/
    it('Store shouldn’t be null', function () {
        expect(movieStore != null).toBeTruthy();
    });

    /* Test if Grid in MainPanel is loaded successfully.*/
    it('Store has items', function () {
        expect(movieStore.data.items.length).toBe(storeLength);
    });

    /* Test if new item is added to store.*/
    // it('New item should be added to store', function () {
    //     var record = Ext.create("QAApp.model.Question");
    //     record.id = 1;
    //     record.question = 'Questions 3';
    //     movieStore.add(record);
    //     expect(movieStore.data.items.length).toBe(storeLength + 1);
    //     movieStore.removeAt(storeLength);
    // });

    /* Item should be removed from store via controller.*/
    // it('Item should be removed from store', function () {
    //     var record = Ext.create("QAApp.model.Question");
    //     record.id = 1;
    //     record.question = 'Questions 3';
    //     movieStore.add(record);

    //     /* Removing item from controller API.*/
    //     controller.deleteQuestionFromStore(record);
    //     movieStore.removeAt(storeLength);
    //     expect(movieStore.data.items.length).toBe(storeLength);
    // });

});