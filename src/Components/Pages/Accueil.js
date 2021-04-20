import React from 'react'
import {Link} from 'react-router-dom'
// import background from '/video.mp4'


const Accueil = () => {
    return (
        <>
            <div id="divAccueil" className="jumbotron p-0 m-0">
                <video id="video" className="min-vh-100 min-wh-100" autoPlay="1" muted="1" loop="1">
                    <source src="images/video.mp4" type="video/mp4"/>
                </video>
                {/* <video id="video" autoPlay="1" muted="1" loop="1">
                    <source src={backgroundVideo} type="video/mp4"/>
                </video> */}

                <div id="slogan" className="card-img-overlay text-white">
                    <h1 id="titreAcc" className="titre display-4">Happy Family</h1>
                    <p id="slog"className="slogan lead">Le blog des familles épanouies</p>
                    <Link className="footer nav-link" activeclassname="active" to="/Articles"><button id="buttonIntro" type="button">En savoir plus...</button></Link>
                </div>
            </div>
            
        
        </>
    )
}

export default Accueil
