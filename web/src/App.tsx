import "./styles/main.css"
import { MagnifyingGlassPlus } from 'phosphor-react'
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
          <strong className="font-bold text-white block">Dota 2</strong>
          <span className="text-zinc-300 block text-sm mt-1">10 anúncios</span>
        </div>
      </a>
       <a href="" className="relative rounded-lg overflow-hidden">
        <img src="../public/game3.png" alt="" />
         <div className="w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 absolute">
          <strong className="font-bold text-white block">Counter Strik</strong>
          <span className="text-zinc-300 block text-sm mt-1">100 anúncios</span>
        </div>
      </a>
       <a href="" className="relative rounded-lg overflow-hidden">
        <img src="../public/game4.png" alt="" />
         <div className="w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 absolute">
          <strong className="font-bold text-white block">Fortnite</strong>
          <span className="text-zinc-300 block text-sm mt-1">3 anúncios</span>
        </div>
      </a>
       <a href="" className="relative rounded-lg overflow-hidden">
        <img src="../public/game5.png" alt="" />
         <div className="w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 absolute">
          <strong className="font-bold text-white block"> Apex Legend</strong>
          <span className="text-zinc-300 block text-sm mt-1">6 anúncios</span>
        </div>
      </a>
       <a href="" className="relative rounded-lg overflow-hidden">
        <img src="../public/game6.png" alt="" />
         <div className="w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 absolute">
          <strong className="font-bold text-white block">World of Warcraft</strong>
          <span className="text-zinc-300 block text-sm mt-1">1000 anúncios</span>
        </div>
      </a>

    </div>
    <div className="bg-nlw-gradient pt-1 mt-8 self-stretch rounded-lg overflow-hidden">
       <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl font-bold text-white">Não encontrou seu duo?</strong>
        <span className="text-zinc-400 block text-sm mt-1">Publique um anúncio para encontrar novos players!</span>
        </div>
        <button className="px-3 py-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
          <MagnifyingGlassPlus size={24}/> Publicar anúncio
          </button>
        </div>
    </div>
  </div>
  )
}

export default App
