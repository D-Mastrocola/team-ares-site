import { Component } from "react";
import anime from "animejs";

class Animation extends Component {
  constructor(props) {
    super(props);
  }
  animate() {
    let page = this.props.page;
    if(page == 'landing') {
        anime.timeline({})
        .add({
            targets: '#animation-div-img',
            rotate: '1turn',
            delay: 500,
            duration: 1500,
            
          })
          .add({
            targets: '#animation-div',
            opacity: 0,
            easing: 'linear',
            update: function(anim) {
                let progress = Math.round(anim.progress);
                if(progress === 100) {
                    //allow scroll
                    document.getElementsByTagName('body')[0].style.overflowY = "scroll";
                    document.getElementById("animation-div").style.zIndex = '-1';
                }
              }
          })
    }
  }
  componentDidMount() {
    this.animate();
  }
  render() {
    return (
      <div id="animation-div">
        <img
          id="animation-div-img"
          src="./assets/images/header-logo-white-no-text.png"
          alt="Ares Logo"
        />
      </div>
    );
  }
}

export default Animation;
