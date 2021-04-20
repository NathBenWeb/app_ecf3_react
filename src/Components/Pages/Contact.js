import React from 'react'
import { FaAt, FaMobileAlt } from 'react-icons/fa'
import  Iframe  from 'react-iframe' 

const Contact = () => {
    return (
        <>
        <div id="contact_container" className="container" >
            <section id="inscription">
                <h1 id="titreInscription">Formulaire d'inscription</h1>
                <form className="row g-3 ">
                    <div className="col-md-12 ">
                    <img className="fit-picture" src="images/famille3.png" alt="" width="100%"/>
                    </div>
                        <h4 id="titreImg" className="">Rejoignez-nous sur Happy Familly</h4>
                    <div className="col-md-12">
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Entrez votre email" required="required"/>
                    </div>
                    <div>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Entrez un mot de passe" required="required"/>
                    </div>
                    <div>
                        <input type="text" className="form-control" id="inputAddress" placeholder="N° et nom de la voie" required="required"/>
                    </div>
                    <div>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Complément d'adresse" required="required"/>
                    </div>
                    <div className="col-md-4">
                        <input type="number" className="form-control" id="inputZip" placeholder="Code postal" required="required"/>
                    </div>
                    <div className="col-md-8">
                        <input type="text" className="form-control" id="inputCity" placeholder="Ville" required="required"/>
                    </div>
                    <div className="col-12">
                        <div id="check" className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" required="required"/>
                            <label className="form-check-label" htmlFor="gridCheck">*J'accepte les conditions générales d'utilisation Happy Familly</label>
                        </div>
                    </div>
                    <div id="buttonContact" className="col-12">
                        <button type="submit" className="btn btn-secondary">Confirmer</button>
                    </div>
                </form>
            </section>

            <section id="contact">
                <div className="outer-container">
                <h1 id="titreContact">Contactez-moi !</h1>
                    <div className="telEmail">
                        <div className="item contact-box phone">
                            <div className="text1">
                            <span className="logoContact"><FaMobileAlt/></span>
                                <a id="tel" href="tel:+33624035012">+33 6 24 03 50 12</a>
                            </div>
                        </div>
                        <div className="item contact-box email">
                            <span className="logoContact"><FaAt/></span>
                            <div className="text2"><a id="email" href="mailto:nathaliebendavidweb@gmail.com">nathaliebendavidweb@gmail.com</a></div>
                        </div>
                        
                    </div>
                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.5345250439464!2d2.4152409156739965!3d48.84801677928646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6728424b715a3%3A0x57e198db63e65e9e!2s21%20Avenue%20Joffre%2C%2094160%20Saint-Mand%C3%A9!5e0!3m2!1sfr!2sfr!4v1606396776970!5m2!1sfr!2sfr" width="100%" height="270px" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"/>

                </div>
            </section>
        </div>
        <div className="pb-3"></div>
        
        </>
    )
}

export default Contact
