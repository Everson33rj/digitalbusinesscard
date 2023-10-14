/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unknown-property */
import imagemPerfil from '../assets/images/autor.png'
import { CorpoStyled } from './CorpoStyled'
import { useEffect, useRef, useState } from 'react';
import SomTcld from '../assets/sounds/teclado.wav'

function Corpo(props){     

    const [fHome, setFHome] = useState("")

    useEffect(()=>{
        
        
        let intervaloPonteiro = setInterval(() => {      
            
            if(props.barra == "rgb(0,0,0,0)") {            
                props.setBarra("#8db1b5")


            }else{
                props.setBarra("rgb(0,0,0,0)")
            }

    
        }, 300);

        return ()=>{clearInterval(intervaloPonteiro)}

    },[props.barra])

    useEffect(()=>{

        
        let intervaloPonteiro = setInterval(() => {      
            
            if(props.barra == "rgb(0,0,0,0)") {            
                
                
                if(fHome.length == 0){
                    somTeclado.current.play()
                    setFHome("h")
                }else if(fHome.length == 1){
                    setFHome(fHome + "o")
                }else if(fHome.length == 2){
                    setFHome(fHome + "m")
                }else if(fHome.length == 3){
                    setFHome(fHome + "e")
                }

            }

    
        }, 120);

        return ()=>{clearInterval(intervaloPonteiro)}

    })

    let somTeclado = useRef()
    

    return <CorpoStyled barra={props.barra} corFontes={props.corFontes} setCorFontes={props.setCorFontes} corBG={props.corBG} setCorBG={props.setCorBG} setBarra={props.setBarra} tipoFonte={props.tipoFonte} setTipoFonte={props.setTipoFonte} corFonteCab={props.corFonteCab} setCorFonteCab={props.setCortFonteCab} bordaCard={props.bordaCard} setBordaCard={props.setBordaCard} fonteBarra={props.fonteBarra} setFonteBarra={props.setFonteBarra} barraBG={props.barraBG} setBarraBG={props.setBarraBG} >

        <audio src={SomTcld} ref={somTeclado} ></audio>

    <div>
        <div className="logo-menu">
            
            <div className="logo">
                <a href="#">everson_silva/{fHome}</a><span className="ponteiro">|</span>
            </div>

        </div>
    </div>

    <div className="main">

        {
        fHome == "home" ? 
            <div className="conteudo">
                <img className="imagem1" src={imagemPerfil} alt="" />
                <p className="nome">Everson Silva</p>

                <p className="subtitulo" >Programador, desenvolvedor web, estudante de engenharia de software, professor de informática administrativa e design gráfico.</p>
                
                <div className="contatos">
                <a href="https://twitter.com/EversonSilvaDev" target="_blank" rel="noopener" title="Twitter">
                    <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" ><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                    <a href="mailto:eversonsilvadeveloper@gmail.com" target="_blank" rel="noopener" title="Email"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" ><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>
                    <a href="https://github.com/Everson33rj" target="_blank" rel="noopener" title="Github"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" ><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                    <a href="www.linkedin.com/in/everson-silva-53308327" target="_blank" rel="noopener" title="Linkedin"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" ><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                </div> 
            </div>
        :
        ""
        }


    </div>

</CorpoStyled>

}

export default Corpo