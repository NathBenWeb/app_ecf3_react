import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { toast, ToastContainer } from 'react-toastify'

const TabAdmin= (props) => {
    return (
        <>      
            <div id="tabAdm" className="container">
                <h1 className="text-center">Back-office Administrateur</h1>
                <table id="table"className="table bg-secondary text-center text-white">
                    <thead className="">
                        <tr>
                            <th>Id</th>
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Date</th>
                            <th>Contenu</th>
                            <th>Image</th>
                            <th colSpan="2">Modifier / Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                {console.log(props)}
                        {props.articles.map((eachArticle, index) =>{
                            return(
                                <tr key={index}>{/* Ajout du substring pour afficher un nombre de caractères définis*/}
                                    <td>{eachArticle.id}</td><td>{eachArticle.titre}</td><td>{eachArticle.auteur}</td><td>{eachArticle.date}</td><td>{eachArticle.contenu.substring(0,30)}</td><td><img src={`images_admin/${eachArticle.image}`} alt="" width="80"/></td>
                                    <td><button className="btn btn-success" onClick={() => {props.modifier(index)}}><FaEdit/></button></td>
                                    <td><button className="btn btn-danger" onClick={() => {if(window.confirm("Etes-vous sûr de vouloir supprimer cet article")){
                                        {props.supprime(index)} {/* Ici avec la méthode confirm on propose à l'utilisateur de confirmer ou annuler sa demande de suppression avant l'exécution de ma méthode handleSupprime(index) et par conséquent de la méthode dans Admon removeArticle(index)*/}
                                        toast("Article supprimé", {className:"bg-success text-white fw-bolder"})
                                        }
                                    }} ><FaTrashAlt/>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                        
                        )}
                    </tbody>
                </table>
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

        </>
        
    )
}

export default TabAdmin
