import React from 'react';
import './stylesfooter.css';
import Logo from '../../assets/gran turismo.png'

function Footer(){
    return(
        <>
        <footer>
        <img id="logo" src={Logo} />
        <span>Todos os direitos reservador ©</span>
        <span>By: Bruno Terceti</span>
        </footer>

        </>
    )
}

export default Footer;