import React from 'react';
import { Scrollbars } from 'rc-scrollbars';
const Articles = () => {
    const articles = JSON.parse(localStorage.getItem('articlesKey'));
    return (
        <>
            <div className="bg-light pt-4">
                <div className="container text-center">
                    <h1 className="display-4">Happy Familly</h1>
                    <p className="lead">Le blog des familles épanouies !</p>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-1">
                {articles.map((article, index) =>{
                    return <div className="col">
                                <div className="card">
                                    <img src={`images_admin/${article.image}`} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h4 className="card-title text-center">{article.titre}</h4>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Auteur : {article.auteur}</li>
                                            <li className="list-group-item">Date : {article.date}</li>
                                            <Scrollbars style={{ width: 600, height: 300 }}>
                                            <li className="list-group-item">{article.contenu}</li>
                                            </Scrollbars>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                 })}
            </div>
        </>
    )
}

export default Articles
