import React from 'react'
import { Link } from 'react-router-dom'

const Erreur = () => {
    return (
        <>
        
            <Link className="nav-link" activeClassName="active" to="/"><button id="buttonError" type="button">Retour à la page d'accueil</button></Link>
            <img className="fit-picture" src="images/erreur.png" alt="" width="100%"/>
            
        </>
    )
}

export default Erreur
