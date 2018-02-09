Ext.define('PWADemo.model.MovieModel', {
    extend: 'PWADemo.model.Base',

    fields: [{
        name: 'vote_count',
        type: 'string'
    },
    {
        name: 'id',
        type: 'number'
    },
    {
        name: 'vote_average',
        type: 'number'
    },
    {
        name: 'title',
        type: 'string'
    }
        // "vote_count": 6638,
        // "id": 198663,
        // "video": false,
        // "vote_average": 7,
        // "title": "The Maze Runner",
        // "popularity": 444.4728,
        // "poster_path": "\/coss7RgL0NH6g4fC2s5atvf3dFO.jpg",
        // "original_language": "en",
        // "original_title": "The Maze Runner",
        // "genre_ids": [28, 9648, 878, 53],
        // "backdrop_path": "\/lkOZcsXcOLZYeJ2YxJd3vSldvU4.jpg",
        // "adult": false,
        // "overview": "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape.",
        // "release_date": "2014-09-10"
    ],
});
