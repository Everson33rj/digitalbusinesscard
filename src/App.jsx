import Corpo from './components/Corpo'
import { Appstyled } from './Appstyled'
import { useState } from 'react'


function App() {

  const [estilos, setEstilos] = useState(1)
  const [corBG, setCorBG] = useState("#282a36")
  const [corFontes, setCorFontes] = useState("#8db1b5")
  const [tipoFonte, setTipoFonte] = useState("'Poppins', sans-serif")
  const [barra, setBarra] = useState("#8db1b5")
  const [fonteBarra, setFonteBarra] = useState("'Courier New', Courier, monospace")
  const [barraBG, setBarraBG] = useState("#2c2c2c")
  const [corFonteCab, setCorFonteCab] = useState("#8db1b5")
  const [bordaCard, setBordaCard] = useState("#1f1f1f solid 1px")

  return <Appstyled corFontes={corFontes} corBG={corBG} tipoFonte={tipoFonte} >

    <Corpo corFontes={corFontes} setCorFontes={setCorFontes} corBG={corBG} setCorBG={setCorBG} barra={barra} setBarra={setBarra} tipoFonte={tipoFonte} setTipoFonte={setTipoFonte} corFonteCab={corFonteCab} setCorFonteCab={setCorFonteCab} bordaCard={bordaCard} setBordaCard={setBordaCard} fonteBarra={fonteBarra} setFonteBarra={setFonteBarra} estilos={estilos} setEstilos={setEstilos} barraBG={barraBG} setBarraBG={setBarraBG} />
    
  </Appstyled>
}

export default App
