import Header from "../Homepage/header";
import Footer from "../Homepage/Footer";
import article1 from "../../assets/img/playlist/play01.png";
import article2 from "../../assets/img/playlist/play02.png"
import article3 from "../../assets/img/playlist/play03.png"
import article4 from "../../assets/img/playlist/play04.png"
import article5 from "../../assets/img/playlist/play05.png"
import article6 from "../../assets/img/playlist/play06.png"

const PlayList = () => {
    const handleChatBot = (e) => {
        e.preventDefault();
        window.zE('messenger', 'open'); 
    }
    
    return (
        <>
            <Header />
             <div className="resourceSection innerPages">
                <div className="containWrap">
                    <div className="resourceWrap playListHead pl-0">
                        <h1>
                            In mood for some music? Enjoy <span className="underLine">our Playlists</span>
                        </h1>
                        
                    </div>
                    <div className="playListWrap">
                        <ul>
                            <li>
                                <div className="playListBox">
                                    <span>
                                        <img src={article1} />
                                        </span>
                                    
                                    <div className="playList-text">
                                        <h3><a href="https://open.spotify.com/playlist/0FoubBS5ukCp1flFkTd1IT?si=FjIblG89SHiffKer0ihM1A&nd=1" target="_blank">Ek Shaam Vikramshila Ke Saath</a></h3>
                                        <p>Best enjoyed with your favourite beverage in hand. It promises to make you feel relaxed and happy.</p>
                                        <small>23 songs, 1 hr 59 min</small>
                                        <a className="playList-link" href="https://open.spotify.com/playlist/0FoubBS5ukCp1flFkTd1IT?si=FjIblG89SHiffKer0ihM1A&nd=1" target="_blank"></a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="playListBox">
                                    <span>
                                        <img src={article2} />
                                        </span>
                                    
                                    <div className="playList-text">
                                        <h3><a href="https://open.spotify.com/playlist/0sSQ0fi6k1zZPpvJ4Qf2zf" target="_blank">After Peer Review</a></h3>
                                        <p>A beautiful playlist to relax after a day of feedback giving & receiving. 100% smiles guaranteed...
                                        </p>
                                        <small>80 songs, 4 hr 58 min</small>
                                        <a className="playList-link" href="https://open.spotify.com/playlist/0sSQ0fi6k1zZPpvJ4Qf2zf" target="_blank"></a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="playListBox">
                                    <span>
                                        <img src={article3} />
                                        </span>
                                    
                                    <div className="playList-text">
                                        <h3><a href="https://open.spotify.com/playlist/7xL1AWTBa2wSTUm2U7CDh0" target="_blank">Research Article Likha?</a></h3>
                                        <p>A must listen after a day full of hardwork and concentration. Best served with a hot cup of tea or coffee!
                                        </p>
                                        <small>44 songs, 3 hr 38 min</small>
                                        <a className="playList-link" href="https://open.spotify.com/playlist/7xL1AWTBa2wSTUm2U7CDh0" target="_blank"></a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="playListBox">
                                    <span>
                                        <img src={article4} />
                                        </span>
                                    
                                    <div className="playList-text">
                                        <h3><a href="https://open.spotify.com/user/31mhjfhtvd7v2an5rv6tafaygr2y" target="_blank">Research Proposal Done!</a></h3>
                                        <p>Congratulations! Celebrate with some lovely melodies to relax you now. You've earned it.
                                        </p>
                                        <small>18 songs, 1 hr 33 min</small>
                                        <a className="playList-link" href="https://open.spotify.com/user/31mhjfhtvd7v2an5rv6tafaygr2y" target="_blank"></a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="playListBox">
                                    <span>
                                        <img src={article5} />
                                        </span>
                                    
                                    <div className="playList-text">
                                        <h3><a href="https://open.spotify.com/playlist/5zIIwqCJdC51ggXheSrLoP" target="_blank">Review Report Aa Gayi</a></h3>
                                        <p>Celebrate the beautiful bond of Peer Reviewers and Publishing Editors...
                                        </p>
                                        <small>31 songs, 2 hr 18 min</small>
                                        <a className="playList-link" href="https://open.spotify.com/playlist/5zIIwqCJdC51ggXheSrLoP" target="_blank"></a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="playListBox">
                                    <span>
                                        <img src={article6} />
                                        </span>
                                    
                                    <div className="playList-text">
                                        <h3><a href="https://open.spotify.com/playlist/2tem9krLv8CvIT08Q7NlyA" target="_blank">Desh Mere</a></h3>
                                        <p>Vikramshila is a mission towards Atmanirbhar Bharat! Ek shaam hamare Desh ke naam.
                                        </p>
                                        <small>36 songs, 2 hr 49 min</small>
                                        <a className="playList-link" href="https://open.spotify.com/playlist/2tem9krLv8CvIT08Q7NlyA" target="_blank"></a>
                                    </div>
                                </div>
                            </li>
                             
                        </ul>
                    </div>
                    <div
                        className="pullUp"
                        onClick={(e) => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        <b className="icon-arrow-right" />
                    </div>
                    <div class="row align-items-center justify-content-between contentFooter"><div class="col text-end"><a onClick={handleChatBot} class="helpLink"><b class="icon-help"></b>Help</a></div></div>
                </div>
            </div>

            <Footer />
        </>
    )
}


export default PlayList;