import React, {Component} from 'react';
import VideoBackground from './components/VideoBackground.js'
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Header from './components/Header.js'
import ColongeBottle from './components/ColongeBottle.js'
import Birds from './components/Birds.js'
import ScrollPrompt from './components/ScrollPrompt.js'
import IntroText from './components/IntroText.js'
import DiagionalSVG from './components/DiagionalSVG.js'
import ThirdVpInfo from './components/ThirdVpInfo.js'

class App extends Component {

  constructor() {
    super()
    this.state = {
      appClass:"App cantScroll",
      p1Class: "p1",
      p2Clsss: "p2",
      birdClass: "secondvp_grassShot",
      secondvpClass: "secondvp",
      scrollerClass: "scroller hidden",
      bottleClass: "bottle bottom",
      topClass: "bottle top",
      pulsatingCircleClass: "pulsating-circle",
      infoTextAndPic: "hidden"
    }
    this.clickCircle = this.clickCircle.bind(this)
    this.enterScroll = this.enterScroll.bind(this)
    this.enterVp3 = this.enterVp3.bind(this)
  }

  enterScroll() {
    document.querySelector('.secondvp').scrollIntoView({behavior: 'smooth'});
    this.setState({
      p1Class: "p1 animated fadeIn",
      p2Class: "p2 animated fadeIn",
      birdClass: "secondvp_grassShot birdOn",
      secondvpClass: "secondvp secondvpOn",
      scrollerClass: "scroller animated fadeIn"
    })
  }

  enterVp3() {
    document.querySelector('.thirdvp').scrollIntoView({behavior: 'smooth'});
    // this.setState({
    //   appClass: "App"
    // })
  }

  setApp() {
    const script = document.createElement("script");
    script.src = "https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js";
    script.async = true;
    document.body.appendChild(script);
    AOS.init()
  }

  clickCircle() {
    this.setState({
    bottleClass: "bottle bottom baseMove",
    topClass: "bottle top capMove",
    pulsatingCircleClass: "pulsating-circle hidden",
    infoTextAndPic: "initial customFadeIn"
  })
  }

  componentDidMount() {
    this.setApp()
  }

  render() {
    return (<div className={this.state.appClass}>
      <Header/>

      <div className="firstvp">
        <VideoBackground enterScroll={this.enterScroll}/>
      </div>

      <div className={this.state.secondvpClass}>
        <IntroText p1Class={this.state.p1Class} p2Class={this.state.p2Class}/>
        <Birds birdClass={this.state.birdClass}/>
        <ScrollPrompt enterVp3={this.enterVp3} scrollerClass={this.state.scrollerClass}/>
      </div>

      <div className="thirdvp">
        <ColongeBottle clickCircle={this.clickCircle} bottleClass={this.state.bottleClass} topClass={this.state.topClass} pulsatingCircleClass={this.state.pulsatingCircleClass}/>
        <DiagionalSVG />
        <ThirdVpInfo hidden={this.state.infoTextAndPic}/>
      </div>
    </div>);
  }
}

export default App;
