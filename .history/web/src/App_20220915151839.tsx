import "./styles/main.css"
import { MagnifyingGlassPlus } from 'phosphor-react'
import logo from './assets/logo.svg'
import { GameBanner } from "./components/GameBanner"
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

      <GameBanner title="" adsCount="" bannerUrl="" />
       
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
