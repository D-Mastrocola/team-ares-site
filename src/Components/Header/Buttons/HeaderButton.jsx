import anime from "animejs";
import { Component } from "react";

class HeaderButton extends Component {
  constructor(props) {
    super(props);
  }
  redirect(link) {

    //Checks to see if user is trying to navigate to page they are already on
    let currentPath = window.location.pathname.split('/');
    currentPath = '/' + currentPath[currentPath.length - 1];
    if (currentPath === link) return false;

    
    if (window.location.pathname === "/") {
      document.getElementById("animation-div").style.zIndex = "10";

      anime.timeline({}).add({
        targets: "#animation-div",
        opacity: 1,
        easing: "linear",
        update: function (anim) {
          let progress = Math.round(anim.progress);
          if (progress === 100) {
            window.location.replace(link);
          }
        },
      });

      console.log("/");
    }
    else {
        anime.timeline({}).add({
            targets: "#animation-div",
            height: "100vh",
            duration: 500,
            easing: "easeOutQuad",
            update: function (anim) {
              let progress = Math.round(anim.progress);
              if (progress === 100) {
                window.location.replace(link);
              }
            },
          });
    }
    
  }
  render() {
    return (
      <button
        className="header-button"
        onClick={() => this.redirect(this.props.link)}
      >
        {this.props.text}
      </button>
    );
  }
}

export default HeaderButton;
