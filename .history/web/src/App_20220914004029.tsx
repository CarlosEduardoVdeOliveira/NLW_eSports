import "./styles/main.css"
import logo from './assets/logo.svg'
function App() {
  
  return (
  <div className="max-w-[1344] mx-auto flex flex-col items-center my-20 ">
    <img src={logo} alt="" />
    <h1 className="text-center text-white text-6xl font-black mt-20">
      Seu
      <span className="text-transparent bg-nlw-gradient bg-clip-text"> duo </span>
       está aqui
    </h1>
    <div className="grid grid-cols-6 gap-6 mt-16">

      <a href="" className="relative">
        <img src="../public/game1.png" alt="" />
      </a>
       <a href="" className="relative">
        <img src="../public/game2.png" alt="" />
      </a>
       <a href="" className="relative">
        <img src="../public/game3.png" alt="" />
      </a>
       <a href="" className="relative">
        <img src="../public/game4.png" alt="" />
      </a>
       <a href="" className="relative">
        <img src="../public/game5.png" alt="" />
      </a>
       <a href="" className="relative">
        <img src="../public/game6.png" alt="" />
      </a>

    </div>
  </div>
  )
}

export default App
