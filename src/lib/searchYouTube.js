var searchYouTube = ({key, query, max, part, type}, callback) => {
  // AJAX request
  $.get('https://www.googleapis.com/youtube/v3/search', {
    'maxResults': max,
    'part': 'snippet',
    'q': query,
    'type': 'video',
    'key': key
  })
    .done(function(data) {
      callback(data.items);
    });
};

export default searchYouTube;