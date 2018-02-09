Ext.define('PWADemo.store.MovieStore', {
    extend: 'Ext.data.Store',
    alias: 'store.moviestore',
    model: 'PWADemo.model.MovieModel',
    storeId: 'MovieStore',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/popular-movies',
        reader: {
            type: 'json',
            rootProperty: 'results'
        }
    }
});
