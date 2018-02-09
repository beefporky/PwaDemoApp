/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('PWADemo.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'PWADemo.view.main.MainController',
        'PWADemo.view.main.MainModel',
        'PWADemo.view.moviedataview.MovieDataView'
    ],
    controller: 'main',
    viewModel: 'main',
    title: 'Movie Time',
    scrollable: true,
    items: [{
        xtype: 'moviedataview'
    }]
});