import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoReply } from "react-icons/go";

class Modif extends Component {
    constructor(props) {
        super(props);
            this.initArticle = {
                id:-1,
                titre:"",
                auteur:"",
                date:"",
                contenu:"",
                image:""
        }
        this.state = this.initArticle;
    }
    componentDidMount=()=>{
        this.setState(this.props.articleShared);
        console.log(this.props.articleShared);
    }
    // OU
    componentDidUpdate=()=>{
        const id = this.props.articleShared.id;
        if(id!== this.state.id){
            this.setState(this.props.articleShared);
        }
        console.log(this.props)
    }
    modifier = (e) =>{
        const {name, value} = e.target;
        this.setState({[name]:value});
    }
    updateSoumettre = (e) => {
        e.preventDefault();
        const img = this.state.image.match(/[a-zA-Z0-9-_]+\.(jpg|png|jpeg)/)[0];
        let updateArticle = {
            id:this.state.id,
            titre: this.state.titre,
            auteur: this.state.auteur,
            date: this.state.date,
            contenu: this.state.contenu,
            image: img
        }
        this.props.update(updateArticle);
        toast("Article modifié avec succès !", {className: "bg-success text-white fw-bolder"});
    }



    render() { 
        const {id, titre, auteur, date, contenu} = this.state;
        console.log(this.props)
        return (  
            <>
               {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body"> */}
                
                <div className="row mt-3">
                    <div className="col-8 offset-2">
                        <div className="card">
                            <div className="card-header text-center h1">Modifier un article</div>
                            <div className="card-body">
                                <form className="row g-3 needs-validation bg-secondary text-white" onSubmit={this.updateSoumettre}>
                                    <div className="col-md-6">
                                        <label htmlFor="id" className="form-label">Id</label>
                                        <input type="text" readOnly className="form-control" id="id" name="id" value={id} onChange={this.modifier} placeholder="Veuillez saisir le titre de l'article" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="titre" className="form-label">Titre</label>
                                        <input type="text" className="form-control" id="titre" name="titre" value={titre} onChange={this.modifier} placeholder="Veuillez saisir le titre de l'article" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="auteur" className="form-label">Auteur</label>
                                        <input type="text" className="form-control" id="auteur" name="auteur" value={auteur} onChange={this.modifier} placeholder="Veuillez saisir l'auteur de l'article" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="date" className="form-label">Date</label>
                                        <input type="date" className="form-control" id="date" name="date" value={date} onChange={this.modifier} placeholder="Veuillez saisir la date de l'article" />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="contenu" className="form-label">Contenu</label>
                                        <textarea type="text" className="form-control pb-5" id="contenu" name="contenu" value={contenu} onChange={this.modifier} placeholder="Veuillez saisir le contenu de l'article" />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="image" className="form-label">Image</label>
                                        <input type="file" className="form-control" id="image" name="image" onChange={this.modifier} />
                                    </div>

                                    <div className="col-2 offset-5 pb-3">
                                        <button id="buttonForm" className="btn btn-secondary col-12 " type="submit">MODIFIER</button>
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
                    colorDark
                />
                {/* </div>
                  
                  </div>
              </div>
              </div> */}
            </>
        );
    }
}
 
export default Modif;