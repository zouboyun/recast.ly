// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import exampleVideoData from './data/exampleVideoData.js';

ReactDOM.render(<App videos={exampleVideoData} />, document.getElementById('app'));


