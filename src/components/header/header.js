import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './stylesheader.css';
import Logo from '../../assets/gran turismo.png'
import Footer from '../footer/footer';



function Header(){
    return (
        <>
        <header>
            <img id='logo' src={Logo} />
            <nav>
                <ul>
                    <Link style={{ textDecoration: 'none' }} to='/'>
                        <li>HOME</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/contato'>
                        <li>CONTATO</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/fotos'>
                        <li>FOTOS</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/comentarios'>    
                    <li>COMENTÁRIOS</li>
                    </Link>

                </ul>
            </nav>
        </header>
        </>

    )
}

export default Header; 