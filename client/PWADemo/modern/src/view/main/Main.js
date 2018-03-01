/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('PWADemo.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit',
        'PWADemo.view.moviedataview.MovieDataView'
    ],
    controller: 'main',
    viewModel: 'main',
    layout: {
        type: 'card'
    },
    title: 'Watch Me Now',
    iconCls: 'x-fa fa-film',
    items: [{
        xtype: 'moviedataview'
    }]

});
