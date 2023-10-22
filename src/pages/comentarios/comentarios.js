import React from "react";
import './stylescoment.css';
import Header from "../../components/header/header";
import photo1 from "../../assets/Shanks.jpg";
import photo2 from "../../assets/kaneki.jpg";
import photo3 from "../../assets/eto.jpg";
import Footer from "../../components/footer/footer";


function Comentarios(){
    return(
        <>
        <Header />
            <h1>COMENTÁRIOS</h1>

            <selection className="cardscoment">

                <div className="cardcoment">
                    <img className="user" src={photo2} />
                    <h3>Kaneki</h3>
                    <h3>★★★★</h3>
                    <p>Gostei muito do filme, nota 10! Entrou para a minha lista de top 5    melhores filmes.</p>
                </div>

                <div className="cardcoment">
                    <img className="user" src={photo1} />
                    <h3>Shanks</h3>
                    <h3>★★★</h3>
                    <p>Um dos melhores filmes em que eu já assisti!</p>
                </div>

                <div className="cardcoment">
                    <img className="user" src={photo3} />
                    <h3>Eto</h3>
                    <h3>★★★</h3>
                    <p>Ótimo filme!</p>
                </div>
            </selection>


        <Footer />
        </>
    )
}

export default Comentarios;