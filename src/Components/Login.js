import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login:'',
            pass:'',
            loginError:'',
            passError:'',
            errorMessage:''
        }
    }
    handleChange = (e) =>{
        const {name, value} = e.target;
        let val = value;

        let err1 = '', err2 = '';
        if(name === 'login'){
            if(val === ''){
                err1 = <strong>Le champ login est requis</strong>
            }
        }else if(name === 'pass'){
            if(val === ''){
                err2 = <strong>Le champ mot de passe est requis</strong>
            }
        }
        this.setState({loginError:err1, passError:err2});
        this.setState({[name]:val});
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const {login, pass} = this.state;
        // Création du token de connexion
        if(login !=="" && pass !== ""){
            if(login ==="Nathalie" && pass ==="123"){
                const d = new Date(); // Création d'une date
                const cle = d.toLocaleDateString(); // toLocaleDateString = sous forme de chaine de caractère
                sessionStorage.setItem('logoutKey', cle); // sessionStorage = Pour enregistrer la date du log et que ça soit écrasé à la fermeture du navigateur donc le compte se déconnectera
                this.props.history.push('/admin123');
                window.location.reload(); //On ajoute cette ligne pour que l'inversement des onglets connexion et deconnexion demandé par le render dans la balise concernée du ficher Menu, se fasse automatiquement (idem dans logout)
            }else{ //Sinon si le login et/ou le mot de passe sont érronés afficher ce message d'erreur
                const error = "Le login et/ou le mot de passe ne correspondent pas";
                this.setState({errorMessage: error});
            }
        }else{ //Sinon si les champs login et/ou mot de passe ne sont pas remplis afficher ce message d'erreur
            const error = "Ces 2 champs sont obligatoires";
            this.setState({errorMessage: error});
        }
    }
    // OU méthode Robin en ajoutant en plus après la div où il y a le card {this.state.errorMessage}[15:23]
    // handleSubmit=(e)=>{
    //     e.preventDefault();
    //      const{login,pass} = this.state
    //      if(login !== '' && pass !== ''){
    //          console.log('valid')
    //      } else {
    //          const error = <div className="text-danger alert alert-danger">Veuillez saisire les deux champs</div>
    //          this.setState({errorMessage:error})
    //      }
    // }

    render() { 
        return (
            <div id="log">
            <div  className="card position-absolute top-50 start-50 translate-middle w-25">
                {this.state.errorMessage && <div className="alert alert-danger">{this.state.errorMessage}</div>}

                <div className="card-header text-center h4">Formulaire de connexion</div>
                <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                        <div className="mb-1">
                            <label htmlFor="login" className="form-label">Login*</label>
                            <input type="text" onChange={this.handleChange} className="form-control" id="login" name="login" placeholder="Entrez votre identifiant"/>
                        </div>
                        {this.state.loginError}

                        <div className="mb-1">
                            <label htmlFor="pass" className="form-label">Mot de passe*</label>
                            <input type="password" onChange={this.handleChange} className="form-control" id="pass" name="pass" placeholder="Entrez votre mot de passe"/>
                        </div>
                        {this.state.passError}
                        <button type="submit" className="btn btn-primary col-12">Soumettre</button>
                    </form>
                </div>

            </div>
            </div>
        );
    }
}
 
export default Login;