import React from 'react';
import { FaHome, FaUserCog, FaUserTimes } from 'react-icons/fa';
import { BrowserRouter, NavLink, Redirect, Route, Switch} from 'react-router-dom';
import Accueil from './Pages/Accueil';
import Apropos from './Pages/Apropos';
import Erreur from './Pages/Erreur';
import Contact from './Pages/Contact';
import FAQ from './Pages/FAQ';
import Articles from './Pages/Articles';
import Admin from './Admin';
import Login from './Login';
import Logout from './Logout';

const authenticate = ()=>{
  const d = new Date();
  const test = d.toLocaleDateString();
  if(test === sessionStorage.getItem("logoutKey")){
    return true;
  }else{
    return false;

  }
}
const Nav = () => {
    return (
      <>
        <BrowserRouter basename="/Projet_3_React">
          <div id="haut"></div>
          <nav id="nav" className="navbar navbar-expand navbar-light">
            <div className="container-fluid">
              
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="logoNav nav-item"><NavLink id="logoNav" className="navbar-link" activeClassName="active" to="/" exact><img src="images/logo_projet3_bis.png" alt="" width="200"/></NavLink></li>
                </ul>
                <ul className="linkNav navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="link nav-item"><NavLink className="nav-link" activeClassName="active" aria-current="page" to="/" exact><FaHome/> Accueil</NavLink ></li>
                  <li className="link nav-item"><NavLink className="nav-link" activeClassName="active" to="/Articles">Articles</NavLink ></li>
                  <li className="link nav-item"><NavLink className="nav-link" activeClassName="active" to="/Apropos">A propos</NavLink ></li>
                  <li className="link nav-item"><NavLink className="nav-link" activeClassName="active" to="/Contact">Contact</NavLink ></li>
                  <li className="link nav-item"><NavLink className="nav-link" activeClassName="active" to="/FAQ">FAQ</NavLink ></li>
                </ul>
                <form className=" search d-flex">
                  <input className="form-control me-2" type="search" placeholder="Rechercher" aria-label="Search"/>
                  <button className="btn btn-outline-secondary" type="submit">Rechercher</button>
                </form>
                <span className="navbar-text">
                    {authenticate()
                            ?<NavLink id="logout" className="nav-link" activeClassName="active" to="/Logout"><FaUserTimes/></NavLink >
                            :<NavLink id="login" className="nav-link" activeClassName="active" to="/Login"><FaUserCog/></NavLink >
                            }
                  </span>
              </div>
            </div>
          </nav>
          
          
          <Switch>
            <Route path = "/" component={Accueil} exact/>
            <Route path = "/Articles" component={Articles}/>
            <Route path = "/Apropos" component={Apropos}/>
            <Route path = "/Contact" component={Contact}/>
            <Route path = "/FAQ" component={FAQ}/>
            <Route path = "/Admin" component={Admin}/>
            <Route path = "/Login" component={Login}/>
            <Route path = "/Logout" component={Logout}/>
            <Redirect from = "/admin123/reload" to = "/admin123"/>
            <Route path = "/admin123" render = {()=>(
                    authenticate()
                        ?(<Admin/>)
                        :(<Redirect to="/login"/>)
                    )}/>
            <Route path = "*" component={Erreur}/>

          </Switch>
        </BrowserRouter>
      </>
    )
}

export default Nav

        
    
