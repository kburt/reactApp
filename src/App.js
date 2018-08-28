import React, { Component } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import YTSearch from 'youtube-api-search';
import Search from './components/search';
import Videolist from './components/videolist';
import Videodetails from './components/videodetails';
import Welcome from './components/Welcome/welcome';
import Routes from './routes';
import Title from './components/Title/title';
import Home from './components/Home/home';

const API_KEY = 'AIzaSyBxfjuYY3-e5tBLybo39NRs3mlkkHZYnJQ';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      term: 'tutorial' + 'fenty',
      appName: "React Project",
      home: false
    };

    this.videoSearch(this.state.term);
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term }, (data) => {
      console.log(data);
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }
  
  render() {
    return (
        
      <div>
        <div className="off-canvas-wrapper">
          <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
              <div className="off-canvas-content" data-off-canvas-content>
                <Routes name={this.state.appName}/>
                <hr/>
              </div>
            </div>
        </div>

      <Search onSearcChange={ term => this.videoSearch(term) } />
          <div className="container" >
              <div className="row" >
                <Videodetails video={this.state.selectedVideo} />
                  <Videolist
                onVideoSelect = { selectedVideo => this.setState({ selectedVideo }) }
                videos={this.state.videos} />
              </div>
          </div>
      </div>
    );
  }
}

export default App;
