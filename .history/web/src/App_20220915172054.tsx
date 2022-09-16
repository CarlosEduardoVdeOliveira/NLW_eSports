import { useState, useEffect } from "react"
import * as Dialog from '@radix-ui/react-dialog';
import { GameBanner } from "./components/GameBanner"
import { CreateAdBanner } from "./components/CreateAdBanner"

import "./styles/main.css"
import logo from './assets/logo.svg'

interface Game{
  id: string,
  title: string,
  bannerUrl: string,
  _count: {
    ad: number;
  },

}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch("http://localhost:3333/games")
    .then(response => response.json())
    .then(data => setGames(data))
  },[])
  
  return (


  <div className="max-w-[1344] mx-auto flex flex-col items-center my-20 ">
    <img src={logo} alt="" />
    <h1 className="text-center text-white text-6xl font-black mt-20">
      Seu
      <span className="text-transparent bg-nlw-gradient bg-clip-text"> duo </span>
       está aqui
    </h1>
    <div className="grid grid-cols-6 gap-6 mt-16">
    {games.map(game => {return(
      <GameBanner
        key={game.id}
        bannerUrl={game.bannerUrl} 
        title={game.title} 
        adsCount={game._count.ad} 
      />
    )})}
       
    </div>
      <Dialog.Root>

        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 fixed inset-0"/>
            <Dialog.Content className="bg-[#2A2634] text-white fixed px-10 py-8 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3x font-black">Publique um anúncio</Dialog.Title>
              <form>
                <label htmlFor="">Qual o game?</label>
                <input type="text" placeholder="Selecione o game que deseja jogar"/>
              </form>
            </Dialog.Content>
        </Dialog.Portal>
        
      </Dialog.Root>
  </div>
  )
}

export default App
