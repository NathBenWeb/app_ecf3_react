import React, { Component } from 'react';
import { BsFillPlusSquareFill } from "react-icons/bs";
import Ajout from './Ajout';
import TabAdmin from './TabAdmin';
import Modif from './Modif';

class Admin  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas:[
                {id:1,
                titre:"Des relations sereines et épanouies avec ses enfants",
                auteur:"Par Amelie Blot",
                date:"le 15/01/2021",
                contenu:"Je vous délivre dans cet article, 3 clés fondamentales pour retrouver des relations sereines et épanouies avec vos enfants. Vous avez parfois du mal à garder votre calme face aux tempêtes émotionnelles de vos enfants ? Vous pouvez même ressentir de la culpabilité de ne pas savoir comment agir. Et pourtant ce n’est pas de votre faute. On vit dans une société d’image et de communication dans laquelle les images véhiculées et renvoyées sont très fortes et omniprésentes. Où les femmes doivent performer sur tous les fronts : travail, maison, relation sociale, organisation, etc… L’arrivée du premier enfant vient renforcer ces statistiques car la charge mentale est principalement liée à l’enfant. Ce rapport tient principalement dans le fait qu’avec le congé maternité, la maman prend en charge la majeure partie de la gestion quotidienne, comme faire les courses, s’occuper du linge, faire le ménage, préparer les repas, inscrire les enfants à diverses activités, etc… La maman devient la “responsable organisationnelle” de la famille. Et lorsqu’elle reprend une activité, salariée ou non-salariée, ce rapport n’évolue quasiment pas. De nombreuses femmes n’arrêtent leur journée que lorsqu’elles se couchent. Elles sont dans un continuum épuisant. Le cerveau enregistre cet idéal inatteignable et les maintient inconsciemment en situation d’échec. L’échec amène une dévalorisation personnelle qui va entraîner, à plus ou moins long terme, une perte de confiance et une dégradation de l’estime de soi. C’est à ce moment, précisément, que la culpabilité prend racine. La culpabilité enferme l’esprit dans un pessimisme environnemental, le fait dévier de ses idéaux et nous fait passer à côté de notre parentalité en incarnant trop souvent un parent que nous ne voulons pas être : trop de cris, d’ordres, d’injonctions, de stress, de menaces, de punitions… trop de situations que vous ne souhaitez pas vivre au quotidien. J’ai une bonne nouvelle pour vous : Vous êtes votre propre saboteur ! La plupart du temps, lorsqu’on place sous silence ses propres besoins, on cultive de la frustration, de la rancœur et de l’amertume. Et pourtant, c’est possible d’accompagner les besoins de ses enfants sans empiéter sur les siens...",
                image:"image_article1.jpg"},

                {id:2,
                titre:"Les limites de l'éducation positive",
                auteur:"Par Leslie Rezzoug",
                date:"le 23/05/2018",
                contenu:`De plus en plus de parents estiment que cette méthode est aussi culpabilisante qu'inapplicable au quotidien. "Cela a commencé par des publications sur mon mur Facebook, des pubs ciblées sur Youtube, des suggestions de comptes sur Instagram... Comme si Internet savait que je galérais avec mes trois enfants !" Shivmama, blogueuse et "mère indigne à la parentalité décomplexée" a été happée presque malgré elle par le raz-de-marée de l'éducation positive. Cette méthode très en vogue professe une nouvelle approche des rapports parents/enfants. "Il est primordial d'écouter l'enfant, de se mettre à sa hauteur". "On ne dit pas qu'il y a une 'parentalité malveillante', s'amuse Arnaud Riou, conférencier et auteur de Pour une parentalité bienveillante (éd. Leduc). On estime simplement qu'il y a une dureté, un besoin de domination dans l'attitude de certains parents. Dans l'éducation positive, on considère qu'il est primordial d'écouter l'enfant, de se mettre à sa hauteur." Conditionnés par des décennies d'éducation "à la dure", les parents seraient rigides, prompts à s'énerver pour un oui ou pour un non. "Si j'invite une amie à dîner et qu'elle renverse du vin sur ma nappe, je ne vais pas lui crier dessus. Pourquoi cela serait-il différent avec mon enfant ?, interroge Arnaud Riou. La violence ordinaire, elle est là. L'enfant n'est pas blessé par un 'non' mais par le manque de considération dont il est victime." "Aujourd'hui, les parents sont extrêmement désemparés". Pour Claude Halmos, psychanalyste, auteure de Dessine-moi un enfant (éd. Livre de Poche) et spécialiste de la petite enfance, le battage autour de l'éducation positive s'explique surtout par un total sentiment de confusion. "Aujourd'hui, les parents sont extrêmement désemparés. La position de l'enfant a changé. On le considère comme une personne à part entière. On en vient à se dire : 'de quel droit puis-je lui interdire quelque chose ?' Ils sont aussi, et à juste titre, de plus en plus effrayés par la violence du monde, ajoute-t-elle. Ils ont tendance à se replier sur une enfance prolongée pour mettre leur progéniture à l'abri de cette violence. Ce sont les parents qui disent à tout bout de champ : 'il est encore petit, on ne peut pas lui interdire ça'." `,
                image:"image_article2.jpg"},

                {id:3,
                titre:"Comment donner confiance en lui à son enfant?",
                auteur:"Par Joséphine Lebard",
                date:"le 06/12/2016",
                contenu:`Croire en soi: un défi compliqué à relever pour beaucoup d'entre nous. Quand la confiance en soi fait défaut, il n'est pas toujours facile d'accompagner ses enfants sur la voie d'une meilleure estime d'eux-mêmes. Voici des pistes de réflexion pour leur permettre d'y arriver. "J'espère transmettre certaines de mes qualités à mes garçons, explique Camille, mère de deux enfants. Mais s'il est bien un de mes défauts auquel je souhaiterais qu'ils échappent, c'est mon manque de confiance en moi." Camille n'est pas la seule. La préoccupation semble traverser largement la génération actuelle de parents. Parents peu sûrs d'eux, enfants idem ? Pour la psychologue Florence Millot, cela n'a rien d'étonnant. "Nous sommes la première génération à nous interroger autant sur nos ancêtres et sur la façon dont nous avons été éduqués", relève-t-elle. Conséquence, pour élever nos enfants, nous nous appuyons de plus en plus sur des repères externes comme les livres, Internet et autres conseils amicaux. Quitte à faire moins confiance à notre instinct. Ballottés entre des conseils contradictoires, nos principes éducatifs peuvent alors apparaître peu enracinés. Ce doute permanent qui infuse en nous, nos enfants le perçoivent aisément. Florence Millot voit aussi une autre raison à ce manque de confiance en soi palpable chez les jeunes parents. "Depuis une vingtaine d'années, analyse-t-elle, se développe une 'fatigue d'être soi'. Elle repose sur une quête galvaudée du bonheur qui voudrait que nous pourrions tout faire, tout changer dans notre vie, tout seuls." Or, à courir derrière un épanouissement total, dans notre travail, en amour, en famille sans aucune baisse de régime, nous nous décourageons plus facilement. En ne parvenant pas à ce bonheur absolu que célèbre la société, nous finissons par nous juger inconséquents, nuls. Dès lors, difficile d'aider nos enfants à bâtir leur estime d'eux-mêmes alors que la nôtre est elle-même déficiente.`,
                image:"image_article3.jpg"},

                {id:4,
                titre:"Dix conseils pour être gentil tout en s'affirmant",
                auteur:"Par Caroline Franc Desages",
                date:"le 13/11/2015",
                contenu:`Si la gentillesse a sa journée dédiée le 3 novembre, elle est encore bien souvent considérée comme une faille. Comment faire pour être gentil avec les autres sans se faire marcher sur les pieds? Voici nos conseils. Longtemps moquée, la gentillesse est peu à peu réhabilitée. Elle bénéficie même désormais d'une journée dédiée, c'est dire. Mais malgré tout, au mot "gentil" est encore régulièrement accolé l'adverbe "trop". Quatre petites lettres qui soudain transforment le "gentil" en "pigeon". Pourtant, tous les experts que nous avons interrogés sont formels: être gentil n'est en aucun cas synonyme de faiblesse. Mieux, la gentillesse est souvent le meilleur moyen pour être entendu, compris et même respecté. Voici dix conseils destinés aux gentils mais aussi à tous ceux qui doutent que leur tempérament bienveillant leur permette de pouvoir s'affirmer... en douceur. Être en premier lieu gentil avec soi-même. "Insinuer qu'être gentil peut empêcher de s'affirmer, c'est dénaturer la notion même de gentillesse", prévient la psychanalyste Laura Gélin. "Cela vient sans doute d'une confusion. Être gentil en effet, ce n'est pas accéder aux désirs des autres en premier, jusqu'à s'oublier." Être gentil, c'est avant tout savoir ce qui nous convient, ce qu'on souhaite, ce qui nous porte. Et c'est en étant "en cohérence avec soi-même que l'on est alors en mesure d'être entendu et compris".  Ne pas être en attente d'un retour. Etre gentil n'est en aucun cas synonyme de faiblesse.Si la gentillesse a sa journée dédiée le 3 novembre, elle est encore bien souvent considérée comme une faille. Comment faire pour être gentil avec les autres sans se faire marcher sur les pieds? Voici nos conseils. Longtemps moquée, la gentillesse est peu à peu réhabilitée. Elle bénéficie même désormais d'une journée dédiée, c'est dire. Mais malgré tout, au mot "gentil" est encore régulièrement accolé l'adverbe "trop". Quatre petites lettres qui soudain transforment le "gentil" en "pigeon". Pourtant, tous les experts que nous avons interrogés sont formels: être gentil n'est en aucun cas synonyme de faiblesse. Mieux, la gentillesse est souvent le meilleur moyen pour être entendu, compris et même respecté. Voici dix conseils destinés aux gentils mais aussi à tous ceux qui doutent que leur tempérament bienveillant leur permette de pouvoir s'affirmer... en douceur. Être en premier lieu gentil avec soi-même". Insinuer qu'être gentil peut empêcher de s'affirmer, c'est dénaturer la notion même de gentillesse", prévient la psychanalyste Laura Gélin. "Cela vient sans doute d'une confusion. Être gentil en effet, ce n'est pas accéder aux désirs des autres en premier, jusqu'à s'oublier." Être gentil, c'est avant tout savoir ce qui nous convient, ce qu'on souhaite, ce qui nous porte. Et c'est en étant "en cohérence avec soi-même que l'on est alors en mesure d'être entendu et compris". Ne pas être en attente d'un retour. "Le dictionnaire dit de la gentillesse que c'est une attention bienveillante à autrui a priori inconditionnelle", souligne la psychothérapeute Béatrice Voirin. "Et dans inconditionnelle il y a 'sans condition'. En somme, la gentillesse doit être un don. Sans conditions." Et le problème, pointe la psychothérapeute, c'est que souvent, juste avant le "je suis trop gentil(le)" prononcé sous forme de plainte, est venu le "avec tout ce que je fais pour eux , elle, lui...". "La gentillesse est bien trop souvent une stratégie pour survivre, pour ne pas perdre l'amour, l'amitié." Et dans ce cas, elle ne permet en effet pas de trouver sa place ni de s'affirmer. S'approprier le droit d'être là. "Les gens que l'on dit 'trop gentils' ont fréquemment en réalité un problème d'estime de soi, constate Sylvaine Pascual. Or n'est pas gentil celui qui laisse toute la place aux autres, et n'est pas nécessairement méchant celui qui assume d'occuper la place qui lui revient." Pour s'affirmer, il faut donc se réapproprier le droit d'être là sans redouter de ne pas être gentil pour autant.  "Prenons l'exemple d'une réunion à laquelle on est convié. On a plusieurs choix qui s'offrent à nous. On peut se dire que si on y a été invité, c'est parce qu'on a une légitimité et décider d'en faire la preuve en prenant cette place qui nous a été offerte. On peut aussi faire le choix de se mettre en retrait. Mais si on prend la parole, si on se met en avant, ce n'est pas le signe d'un manque de gentillesse ou d'humilité pour autant." Adopter la communication non violente. "La communication non violente est pour moi l'exemple même de ce que la gentillesse peut accomplir comme miracles. Elle permet d'obtenir une véritable compréhension entre les parties prenantes sans qu'il y ait de contrainte de l'autre", vante Sylvaine Pascual, coach et spécialiste du plaisir au travail. Quatre grands principes sous-tendent cette technique de communication, poursuit la coach. "Dans un premier temps, il faut exprimer des faits. Souvent quand on est tendu ou timide, on a tendance à présenter les choses en les teintant de nos émotions, ce qui nous rend moins crédible ou nous fait passer pour une victime. Ce n'est qu'après avoir fait cette présentation des faits objectifs que l'on peut exprimer sa propre perception de ces faits et exprimer nos émotions. Ce qui génère de l'empathie. Vient ensuite, en troisième étape, l'expression du besoin. Et enfin, la proposition d'une solution." Une méthode préconisée par Sylvaine Pascual dans des contextes professionnels mais qui "fonctionne aussi très bien dans la vie personnelle", assure-t-elle.`,
                image:"image_article4.jpg"}
            ],
            editForm:false,
            indexMod:-1,
            editArticle: {id:-1, titre:"", auteur:"", date:"", contenu:"", image:""}
        }
    }

    // Si le tableau ne contient plus d'item, remet tous les items au rafraichissement de la page sinon s'il en contient au moins un ne pas remttre tous les items
    componentDidMount = ()=>{
        let articles1 = JSON.parse(localStorage.getItem("articlesKey"));
        if(!articles1 || articles1.length === 0){
            localStorage.setItem("articlesKey", JSON.stringify(this.state.datas));
            let articlesRecup = JSON.parse(localStorage.getItem("articlesKey"));
            this.setState({datas: articlesRecup});
        }else{
            let articles2 = JSON.parse(localStorage.getItem("articlesKey"));
            this.setState({datas: articles2});
        }
        console.log(localStorage.getItem("articlesKey"));
    }

    // Ici on active la suppression en indiquant en paramètre l'indice(i) de l'article (a) à supprimer
    removeArticle = (index) =>{
        console.log(index)
        let lessArticles=[...this.state.datas];
        const art = lessArticles.filter((a, i)=>{
            return i !== index;
        });
        console.log(art)
        //Pour rendre la suppression persistante en local
        this.setState({datas:art},()=>{
            localStorage.setItem("articlesKey", JSON.stringify(this.state.datas));
            console.log(this.state);
        });
    };

    showArticle = () => {
        this.setState({editForm:true})
    }
    // Ajout d'un article dans l'admin et le fixer en localStorage
    addArticle = (article) => {
        article.id = this.state.datas[this.state.datas.length -1].id + 1;
        let datasClone = [...this.state.datas,article]
        this.setState({datas:datasClone}, ()=>{
            localStorage.setItem("articlesKey", JSON.stringify(this.state.datas));
        });
        console.log(article)
    }
    // Cette méthode enregistre les modifications saisies dans les champs du formulaire de modif et les renvoie au editArticle déclaré dans datas avec des valeurs nulles
    handleItem = (index)=>{
        const articleEdit = this.state.datas[index];
        this.setState({editArticle:articleEdit, indexMod:index});
        console.log(index)
    }
    // Cette méthode appelle l'affichage de l'article modifié
    articlesUpdate = (modifs) =>{
        let updateArticles = [...this.state.datas];
        updateArticles[this.state.indexMod] = modifs;
        this.setState({datas:updateArticles}, () =>{
            localStorage.setItem("articlesKey", JSON.stringify(this.state.datas));
        });
        console.log(modifs)
    }

    render() {
        console.log(this.state.editArticle)//Pour tester si on recupere l'information sur la voiture quand on clique sur le bouton Edit
        return (
            <>
                {
                    (!this.state.editForm && this.state.indexMod === -1) 
                    &&  <button onClick={this.showArticle} className="btn btn-secondary offset-11 mt-5">
                        <BsFillPlusSquareFill/>
                       </button>
                }
                {/* Ce ternaire permet de faire fonctionner à l'affichage le contenu de chaque fichier distinctement les uns des autres. Invoque chaque méthode une par une */}
                { 
                    (!this.state.editForm && this.state.indexMod > -1)
                    ?<Modif articleShared = {this.state.editArticle} update = {this.articlesUpdate} />
                    :
                    (this.state.editForm)
                    ?<Ajout ajouter = {this.addArticle}/>
                    :<TabAdmin articles = {this.state.datas} supprime={this.removeArticle} modifier={this.handleItem}/>
                }
                

            </>
        );
    }
}
 
export default Admin;