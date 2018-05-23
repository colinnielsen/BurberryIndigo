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
  }

  render() {
    return (<div className="App">
      <Header />
      <div className="firstvp">
        <VideoBackground enterScroll={this.enterScroll}/>
      </div>
      <div className="secondvp">
          <div className="introtext">
            <p className="p1">
              A man of contrasts. Classic yet contemporary. Sophisticated and sensual.</p><br></br>
              <p className="p2">
              With laid-back style and a rebellious attitude, he is refreshed and invigorated by an impromptu escape from the city.
            </p>
          </div>
          <img className='secondvp_grassShot' src={birds} />
      </div>
    
    </div>);
  }
}

export default App;
