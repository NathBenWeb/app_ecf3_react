import React from 'react'

const Logout = (props) => {
    const cle = sessionStorage.getItem('logoutKey');
    if(cle){
        sessionStorage.removeItem('logoutKey');
        // Supprime dans le sessionStorage les données du token de connexion
        props.history.push('/Login');
        window.location.reload(); //On ajoute cette ligne pour que l'inversement des onglets connexion et deconnexion demandé par le render dans la balise concernée du ficher Menu, se fasse automatiquement (idem dans login)
    }
    return (
        <div>
            
        </div>
    )
}

export default Logout
