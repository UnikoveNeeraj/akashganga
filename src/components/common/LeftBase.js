import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import JoinMovement from "../../svg/join-movement.svg";
import InterestingFact from "../../assets/img/regis/interesting-fact.png";
import InterestingFact01 from "../../assets/img/regis/interesting-fact01.svg";
import InterestingFact02 from "../../assets/img/regis/interesting-fact02.svg";
import InterestingFact03 from "../../assets/img/regis/interesting-fact03.svg";
import InterestingFact04 from "../../assets/img/regis/interesting-fact04.svg";
import InterestingFact05 from "../../assets/img/regis/interesting-fact05.svg";
import InterestingFact06 from "../../assets/img/regis/interesting-fact06.svg";
import InterestingFact07 from "../../assets/img/regis/interesting-fact07.svg";
import InterestingFact08 from "../../assets/img/regis/interesting-fact08.svg";
import InterestingFact09 from "../../assets/img/regis/interesting-fact09.svg";
import StepGreatness from "../../svg/step-greatness.svg";

const LeftBase = (props) => {
  const { backToHomeBtn, type } = props
  useEffect(() => {
  $('.regisSlider').slick({    
    arrows: false,
    dots: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 15000,
    speed: 100,
    fade: true,   
    // prevArrow: '<button type="button" class="slick-prev"><b class="icon-arrow-left"></b></button>',
    // nextArrow: '<button type="button" class="slick-next"><b class="icon-arrow-right"></b></button>',
     
  });
}, [])
  return (
    <div>
      <div>
        <p className="text-start mt-3">
          {backToHomeBtn && (
            <Link to="/" className="text-white text-decoration-none back-link">
              <i className="fa fa-arrow-left me-1"></i> Back to Home{" "}
            </Link>
          )}
        </p>

        <img src={type === "Movement" ? JoinMovement : StepGreatness} alt="Join Movement" className="join-movement w-100" />
      
      </div>

      {type === "Movement" ?
        <div className="regisSlider">
          <div className="sildeItems"><img src={InterestingFact} /></div>
          <div className="sildeItems"><img src={InterestingFact01} /></div>
          <div className="sildeItems"><img src={InterestingFact02} /></div>
          <div className="sildeItems"><img src={InterestingFact03} /></div>
          <div className="sildeItems"><img src={InterestingFact04} /></div>
          <div className="sildeItems"><img src={InterestingFact05} /></div>
          <div className="sildeItems"><img src={InterestingFact06} /></div>
          <div className="sildeItems"><img src={InterestingFact07} /></div>
          <div className="sildeItems"><img src={InterestingFact08} /></div>
          <div className="sildeItems"><img src={InterestingFact09} /></div>
           

        </div>
        // <div className="regisSlider">
        //   <img src={InterestingFact} />
        // </div>
         :
        <p className="mission-text">Join us in our mission to make access to information <i>free as freedom</i> so that it is seamless and connected. We remain committed to being inclusive, affordable and <span className="f-600">Open for All.</span>
        </p>
      }
    </div>
  );
};

LeftBase.propTypes = {
  backToHomeBtn: PropTypes.bool,
  type: PropTypes.string
};

LeftBase.defaultProps = {
  backToHomeBtn: true,
  type: 'greatness'
};



export default LeftBase;
