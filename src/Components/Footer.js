import React from 'react'
import { FaArrowAltCircleUp, FaAtlas, FaBalanceScale, FaFacebookSquare, FaTwitterSquare, FaUserCog, FaUserTimes } from 'react-icons/fa';
import { BrowserRouter, Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <BrowserRouter>
                <nav id="footer" className="navbar sticky-bottom navbar-light fs-9">
                    <div className="icone">
        
                        <a className="footerLink" id="fb" href="https://fr-fr.facebook.com/" target="_blank"><i className="titres_footer"><FaFacebookSquare/></i></a>
                        <a className="footerLink" id="tw" href="https://twitter.com/?lang=fr" target="_blank"><i className="titres_footer"><FaTwitterSquare/></i></a>
                        <Link className="footerLink" id="cgu" to="/Accueil" target="_blank"><i className="titres_footer"><FaAtlas/> Conditions Utilisateurs</i></Link>
                        <Link className="footerLink" id="ml" to="/Accueil" target="_blank"><i className="titres_footer"><FaBalanceScale/> Mentions légales</i></Link>
                        <i id="span3" className="footerLink">Tous droits réservés. Copyright &copy; 2021 Happy Familly</i>
                        <a className="footerLink" id="ml" href="#haut" target="blank"><i className="titres_footer"><FaArrowAltCircleUp/></i></a>
                    </div>
                </nav>
            </BrowserRouter>
        </>
    )
}

export default Footer
