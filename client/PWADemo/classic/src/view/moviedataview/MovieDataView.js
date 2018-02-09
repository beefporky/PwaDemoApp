
Ext.define('PWADemo.view.moviedataview.MovieDataView',{
    extend: 'Ext.DataView',
    xtype: 'moviedataview',
    requires: [
        'PWADemo.view.moviedataview.MovieDataViewController',
        'PWADemo.view.moviedataview.MovieDataViewModel'
    ],

    controller: 'moviedataview-moviedataview',
    viewModel: {
        type: 'moviedataview-moviedataview'
    },
    store: {
        type: 'moviestore'
    },
    padding: 5,
    tpl: new Ext.XTemplate(
        '<tpl for=".">',
            '<div class="movie-item">',
                '<img src="https://image.tmdb.org/t/p/w185{poster_path}" />',
                '<br/><span class="movie-title">{title}</span>',
            '</div>',
        '</tpl>'
    ),
    itemSelector: 'div.movie-item'
});