/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'PWADemo.Application',

    name: 'PWADemo',

    requires: [
        // This will automatically load all classes in the PWADemo namespace
        // so that application classes do not need to require each other.
        'PWADemo.*'
    ],

    // The name of the initial view to create.
    mainView: 'PWADemo.view.main.Main'
});
