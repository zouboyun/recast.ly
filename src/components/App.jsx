import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

// var youtubeData;
// searchYouTube(
//   {
//     'max': '5',
//     'query': 'surfing',
//     'key': YOUTUBE_API_KEY
//   }, (data) => {
//     console.log(data);
//   }
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allVideos: exampleVideoData,
      videoOnPlay: exampleVideoData[0]  
    };
  }

  componentDidMount() {
    this.props.searchYouTube({
      'max': '5',
      'query': 'surfing',
      'key': YOUTUBE_API_KEY
    }, (data) => {
      this.setState({allVideos: data, videoOnPlay: data[0]});
    });
  }
  
  handleNewPlayVideo(newVideo) {
    this.setState({
      videoOnPlay: newVideo
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> <Search /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.videoOnPlay}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> <VideoList videos={this.state.allVideos} handleNewPlayVideo={this.handleNewPlayVideo.bind(this)}/></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
