
Ext.define('PWADemo.view.moviewindow.MovieInfo', {
    extend: 'Ext.view.View',
    alias: 'widget.movieinfo',
    xtype: 'movieinfo',
    requires: [
        'PWADemo.view.moviewindow.MovieWindowController',
        'PWADemo.view.moviewindow.MovieWindowModel'
    ],
    controller: 'moviewindow-moviewindow',
    viewModel: {
        type: 'moviewindow-moviewindow'
    },
    setTemplate: function (template, itemSelector) {
        this.tpl = template;
        this.itemSelector = itemSelector;
        this.refresh();
    },
    appendTemplate: function (template, itemSelector) {
        this.tpl = this.tpl + template;
        this.itemSelector = itemSelector;
        this.refresh();
    }
});
