import React from 'react';
import './stylesfoto.css';
import Header from '../../components/header/header';
import photos1 from '../../assets//granturismo1.webp'
import photos2 from '../../assets//granturismo2.webp'
import photos3 from '../../assets//granturismo3.webp'
import photos4 from '../../assets//granturismo4.webp'
import Footer from '../../components/footer/footer';

function Fotos(){
    return(
        <>
        <Header />
            <div className='fotos'>
                <img className='foto1' src={photos1} />
                <img className='foto2' src={photos2} />
                <img className='foto3' src={photos3} />
                <img className='foto4' src={photos4} />
            </div>
        
        <Footer />
        </>
    )
}

export default Fotos