import React from 'react';
import './stylescont.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';


function Contato(){
    return(
        <>
        <Header />
       <div className='formulario'>
        <form action=''>
        <fieldset>
            <legend><b>Fale Conosco</b></legend>

            <div className='InputBox'>
                <label form='name'>Nome</label>
                <input type='text' name='Nome' id='Nome' className='InputUser' required/>
            </div>
            <br></br>
            <div className='InputBox'>
                <label form='email'>Email</label>
                <input type='email' name='email' id='email' className='InputUser' required/>
            </div>
            <br></br>
            <div className='InputBox'>
                <label form='telefone'>Telefone</label>
                <input type='tel' name='telefone' id='telefone' className='InputUser' required/>
            </div>
            <br></br>
            <div className='InputBox'>
                <label form='mensagem'>Mensagem</label>
                <input type='text' name='mensagem' id='mensagem' className='InputUser' required/>
            </div>
            <br></br>
            <input type='submit' name='submte' id='submit'/>
        </fieldset>
        </form>
       </div>


        <Footer />
        </>
    )
}

export default Contato;