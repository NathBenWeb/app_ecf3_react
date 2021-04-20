import React, { Component } from 'react';
import { GoReply } from "react-icons/go";
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Ajout extends Component {
    constructor(props) {
        super(props);
            this.initArticle = {
                titre:"",
                auteur:"",
                date:"",
                contenu:"",
                image:""
        }
        // Pour permettre de travailler sur une copie du tableau et non sur le tableau lui-même
        this.state = this.initArticle;
    }
        // L'attribut onChange dans le formulaire permet de surveiller chaque champ et de déclancher la méthode modifier () pour récupérer la valeur saisie dans les champs et ainsi mettre à jour la state initial
        modifier = (e) =>{
            const {name, value} = e.target;
            this.setState({[name]:value});
        }
        
        soumettre = (e) => {
            e.preventDefault();
            // Là on dit que même s'il n'y a pas d'image on peut tout de même soumettre et revenir au tableau des items
            let img = '';
            if(this.state.image){
                img = this.state.image.match(/[a-zA-Z0-9-_]+\.(jpg|png|jpeg)/)[0];
            }
            const ajoutArticle = {
                titre: this.state.titre,
                auteur: this.state.auteur,
                date: this.state.date,
                contenu: this.state.contenu,
                image: img
            }
            this.props.ajouter(ajoutArticle);
            this.setState(this.initArticle)
            toast("Article ajoutée avec succès !", {className: "bg-success text-white fw-bolder"});
        }
    render() { 
        // Destructuring du state pour que chaque champ du formulaire soit lié à sa propriété du state sans avoir besoin de préciser this.state.propriété
        const {titre, auteur, date, contenu} = this.state;
        return (
            <>
                {/* <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Formulaire d'ajout</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                <button className="btn btn-secondary col-12" type="submit"></button>
                            </div>
                            <div className="modal-body"> */}
                             
                                <div  className="row mt-3">
                                    <div className="col-8 offset-2 ">
                                        <div className="card">
                                            <div className="card-header text-center h1">Ajouter un article</div>
                                            <div className="card-body">
                                                <form className="row g-3 needs-validation bg-secondary text-white" onSubmit={this.soumettre}>
                                                    <div className="col-md-6">
                                                        <label htmlFor="titre" className="form-label">Titre</label>
                                                        <input type="text" required className="form-control" id="titre" name="titre" value={titre} onChange={this.modifier} placeholder="Veuillez saisir le titre de l'article" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="auteur" className="form-label">Auteur</label>
                                                        <input type="text" required className="form-control" id="auteur"  name="auteur" value={auteur} onChange={this.modifier} placeholder="Veuillez saisir l'auteur de l'article" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="date" className="form-label">Date</label>
                                                        <input type="date" required className="form-control" id="date" name="date" value={date} onChange={this.modifier} placeholder="Veuillez saisir la date de l'article" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="image" className="form-label">Image</label>
                                                        <input type="file" className="form-control" id="image"  name="image"  onChange={this.modifier}  />
                                                    </div>
                                                    <div className="col-md-12">
                                                        <label htmlFor="contenu" className="form-label">Contenu</label>
                                                        <textarea type="text" required className="form-control" id="contenu"  name="contenu" value={contenu} onChange={this.modifier} placeholder="Veuillez saisir le contenu de l'article" />
                                                    </div>
                                                    
                                                    <div className="col-2 offset-5 pb-3">
                                                        <button id="buttonForm" className="btn btn-secondary col-12" type="submit">AJOUTER</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <Link to="/admin123/reload"><GoReply size="40" color="black" className="mt-4"/></Link>
                                    </div>
                                </div>
                                <ToastContainer
                                    position="top-center"
                                    autoClose={2000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    draggable
                                    pauseOnHover
                                    toastClassName="dark-toast"
                                    />
                            {/* </div>
                            
                        </div>
                    </div>
                </div> */}
            </>     
        );
    }
}
 
export default Ajout;