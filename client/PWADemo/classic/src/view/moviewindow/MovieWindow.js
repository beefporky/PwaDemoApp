
Ext.define('PWADemo.view.moviewindow.MovieWindow', {
    extend: 'Ext.window.Window',
    xtype: 'moviewindow',
    alias: 'widget.moviewindow',
    requires: [
        'PWADemo.view.moviewindow.MovieWindowController',
        'PWADemo.view.moviewindow.MovieWindowModel'
    ],

    controller: 'moviewindow-moviewindow',
    viewModel: {
        type: 'moviewindow-moviewindow'
    },
    height: '80%',
    width: '50%',
    modal: true,
    closable: true,
    scrollable: true,
    cls: 'moviewindow-bg-color',
    initComponent: function () {
        var movieData = this.movieData;
        var tpl = new Ext.XTemplate(
            '<div class="movie-poster">',
                '<img class="movie-image" src="https://image.tmdb.org/t/p/w185{poster_path}" />',
            '</div>',
            '<div class="movie-window-header">',
                '<br/><span class="movie-window-title">{[this.resolveTitle(values)]}</span>',
                '<div class="movie-release-date">',
                    '<br/><span class="release-date">Release Date: {release_date}</span>',
                '</div>',
            '</div>',
            '<div class="movie-details">',
                '<p>{overview}',
            '</div>',{
                resolveTitle: function(values){
                    return values.title !== values.original_title ? `${values.original_title} (${values.title})` : values.title;
                }
            }
        );
        this.data = movieData;
        this.tpl = tpl;
        this.title = movieData.get('title');
        
        //mandatory call
        this.callParent();
    }
});
