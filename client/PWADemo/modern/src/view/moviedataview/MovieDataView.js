
Ext.define('PWADemo.view.moviedataview.MovieDataView',{
    extend: 'Ext.dataview.DataView',
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
    itemTpl: new Ext.XTemplate(
        '<tpl for=".">',
            '<div class="movie-item">',
                '<img src="https://image.tmdb.org/t/p/w185{poster_path}" />',
                '<span class="movie-title">{[this.resolveTitle(values)]}</span>',
            '</div>',
        '</tpl>',{
            resolveTitle: function(values){
                return `${values.title} (${new Date(values.release_date).getFullYear()})`;
            }
        }),
    // itemSelector: 'div.movie-item',
    itemButtonMode: true,
    listeners: {
        itemclick: function(view, item, record, index, e){
            Ext.create('widget.moviewindow',{
                movieData: item
            }).show();
        }
    }
});