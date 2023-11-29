import './App.css'
import { GlobalStyled } from './GlobalStyled'
import Home from './pages/Home/Home'

//todos os componentes partem do App
function App() {
  //código javascript
  return (
    //código HTML com JS
    <>
    <GlobalStyled /> {/*qualquer tag que for embaixo do GlobalStyled vai assumir o estilo dela*/}
    <Home />
    </>
  )
}  

export default App
