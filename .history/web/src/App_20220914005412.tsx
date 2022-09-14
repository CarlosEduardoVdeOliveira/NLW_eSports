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

      <a href="" className="relative rounded-lg overflow-hidden">
        <img src="../public/game1.png" alt="" />
        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 absolute">
          <strong className="font-bold text-white block">League of Legends</strong>
          <span className="text-zinc-300 block text-sm mt-1">4 anúncios</span>
        </div>
      </a>
       <a href="" className="relative rounded-lg overflow-hidden">
        <img src="../public/game2.png" alt="" />
         <div className="w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 absolute">
          <strong className="font-bold text-white block">League of Legends</strong>
          <span className="text-zinc-300 block text-sm mt-1">4 anúncios</span>
        </div>
      </a>
       <a href="" className="relative rounded-lg overflow-hidden">
        <img src="../public/game3.png" alt="" />
         <div className="w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 absolute">
          <strong className="font-bold text-white block">League of Legends</strong>
          <span className="text-zinc-300 block text-sm mt-1">4 anúncios</span>
        </div>
      </a>
       <a href="" className="relative rounded-lg overflow-hidden">
        <img src="../public/game4.png" alt="" />
         <div className="w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 absolute">
          <strong className="font-bold text-white block">League of Legends</strong>
          <span className="text-zinc-300 block text-sm mt-1">4 anúncios</span>
        </div>
      </a>
       <a href="" className="relative rounded-lg overflow-hidden">
        <img src="../public/game5.png" alt="" />
         <div className="w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 absolute">
          <strong className="font-bold text-white block">League of Legends</strong>
          <span className="text-zinc-300 block text-sm mt-1">4 anúncios</span>
        </div>
      </a>
       <a href="" className="relative rounded-lg overflow-hidden">
        <img src="../public/game6.png" alt="" />
         <div className="w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 absolute">
          <strong className="font-bold text-white block">League of Legends</strong>
          <span className="text-zinc-300 block text-sm mt-1">4 anúncios</span>
        </div>
      </a>

    </div>
  </div>
  )
}

export default App
