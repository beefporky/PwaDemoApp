
Ext.define('PWADemo.view.moviewindow.MovieWindow', {
    extend: 'Ext.window.Window',
    xtype: 'moviewindow',
    alias: 'widget.moviewindow',
    requires: [
        'PWADemo.view.moviewindow.MovieWindowController',
        'PWADemo.view.moviewindow.MovieWindowModel',
        'PWADemo.view.moviewindow.MovieInfo'
    ],
    iconCls: 'x-fa fa-play',
    controller: 'moviewindow-moviewindow',
    viewModel: {
        type: 'moviewindow-moviewindow'
    },
    height: '80%',
    width: '50%',
    modal: true,
    closable: true,
    scrollable: true,
    initComponent: function () {
        var movieData = this.movieData;
        var me = this;
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
                '<p>{overview}</p>',
                '<tpl if="movie_video">',
                    '<iframe width="600" height="300" src="https://www.youtube.com/embed/{movie_video}">',
                    '</iframe>',
                '<tpl else>',
                    '<br/><span>No Trailer Videos Available Yet',
                '</tpl>',
            '</div>',{
                resolveTitle: function(values){
                    return values.title !== values.original_title ? `${values.original_title} (${values.title})` : values.title;
                }
            }
        );
        this.data = movieData;
        this.tpl = tpl;
        this.title = movieData.get('title');
        
        Ext.Ajax.request({
            url: '/movie-video',
            params: {
                movie_id: movieData.get('id')
            },
            success: function(response, eOpts){
                var data = Ext.decode(response.responseText);
                me.data.movie_video=data.results[0].key;
                me.tpl.overwrite(me.body, me.data);
            },
            failure: function(response){
                Ext.Msg.show({
                    title: 'Error',
                    message: 'Error fetching movie data.',
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                });
            }
        })
        //mandatory call
        this.callParent();
    }
});
