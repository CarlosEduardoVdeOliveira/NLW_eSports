import "./styles/main.css"
import logo from './assets/logo.svg'
function App() {
  
  return (
  <div className="max-w-[1344] mx-auto flex flex-col items-center my-20 ">
    <img src={logo} alt="" />
    <h1 className="text-center text-white text-6xl font-black">
      Seu 
      <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span>
       está aqui
    </h1>
  </div>
  )
}

export default App
