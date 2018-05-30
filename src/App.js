import React, {Component} from 'react';
import VideoBackground from './components/VideoBackground.js'
import './App.css';
import Header from './components/Header.js'
import birds from './assets/birds.gif'
class App extends Component {

  enterScroll() {
    document.querySelector('.secondvp').scrollIntoView({behavior: 'smooth'});
    document.querySelector('.p1').className = ("p1 animated fadeIn")
    document.querySelector('.p2').className = ("p2 animated fadeIn")
    console.log(document.querySelector('.p2').className);
    document.querySelector('.secondvp_grassShot').className = ("secondvp_grassShot birdOn")
    document.querySelector('.secondvp').className = ("secondvp secondvpOn")
    document.querySelector('.scroller').className = ("scroller animated fadeIn")

  }

  render() {
    return (<div className="App">
      <Header/>
      <div className="firstvp">
        <VideoBackground enterScroll={this.enterScroll}/>
      </div>
      <div className="secondvp">
        <div className="introtext">
          <p className="p1">
            A man of contrasts. Classic yet contemporary. Sophisticated and sensual.</p>
          <br></br>
          <p className="p2">
            With laid-back style and a rebellious attitude, he is refreshed and invigorated by an impromptu escape from the city.
          </p>
        </div>
        <img className='secondvp_grassShot' src={birds}/>
        <a className="scroller hidden" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="39.5" height="40" viewBox="0 0 39.5 40">
          <path class="line-1" fill="none" stroke="#fff" stroke-miterlimit="10" d="M39.3 16.4L19.8 28.9.3 16.4"/>
          <path class="line-2" fill="none" stroke="#fff" stroke-miterlimit="10" d="M32.3 8.4l-12.5 8-12.5-8"/>
          <path class="line-3" fill="none" stroke="#fff" stroke-miterlimit="10" d="M25.5.4l-5.7 3.7L14.1.4"/>
        </svg>
        <span>Scroll</span>
      </a>
      </div>
      <div className="thirdvp"></div>
    </div>);
  }
}

export default App;
