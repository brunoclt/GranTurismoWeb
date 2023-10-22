import React, {lazy, Suspence, useState} from 'react';
import Header from '../../components/header/header';
import './styles.css';
import video from '../../assets/video.mp4';
import Cards from '../../components/cards';
import Footer from '../../components/footer/footer';


function Home(){
    return(
        <>
            <Header />
            <div id='banner'></div>
            <div id='trailer-container'>
                <div className='content'>
                    <video controls className='trailer'>
                        <source src={video}/>
                        Seu navegador não possui suporte para vídeos.
                    </video>
                    <div id='sinopse'>
                        <p className='description'>
                        O jovem Jann Mardenborough vence uma série de competições do vídeo-game Gran Turismo, 
                        promovidas por uma grande empresa automobilística, 
                        e ganha a oportunidade de se tornar um piloto profissional.
                        </p>
                        <button className='button'>Comprar Ingresso</button>
                    </div>
                </div>
            </div>
            <Cards />
            <Footer />
        </>
    )
}

export default Home;