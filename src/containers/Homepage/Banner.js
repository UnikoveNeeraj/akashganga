import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import audioFile from "../../assets/audio/play_audio.mp3";

const Banner = () => {
    
    const showBanner = useSelector(state => state.BannerReducer.bannerShow);

    const dispatch = useDispatch();

    useEffect(() => {
        var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        if (!isChrome) {
          $('#iframeAudio').remove()
        }
        else {
          $('#my_audio').remove()
        }
    
        function fade() {
            $('#bannerLoad').fadeOut();
            dispatch({ type: 'SET_BANNER_FIRST_TIME', payload: false});
            //document.getElementById("my_audio").pause();
        }
        setTimeout(fade, 10000);
    },[])

    const handleHideBanner = () => {
        function fade() {
            $('#bannerLoad').fadeOut();
            dispatch({ type: 'SET_BANNER_FIRST_TIME', payload: false});
        }
        fade();
    }
    
    if(showBanner){
        return(
            <div id="bannerLoad" className="bannerLoad">
                <span onClick={handleHideBanner} className="bannerSkip">Skip</span>
                {/*<iframe
                    src={audioFile}
                    style={{ display: "none" }}
                    id="iframeAudio"
                    autoPlay="true"
                ></iframe>
                <audio id="my_audio" autoPlay>
                    <source src={audioFile} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>*/}

                <div className="bannerItem">
                    <div className="bannerItem-text">
                    <h2>Your <span className="underLine">words</span> have the <span className="underLine">power</span> to change the world...</h2>
                    <h3 className="changeText ani_01">
                        <span>
                        BE OPEN
                        <b />
                        BE YOU
                        </span>
                    </h3>
                    </div>
                </div>
            </div>
        )
    }
}


export default Banner;