import { useState, useEffect } from "react"
import * as Dialog from '@radix-ui/react-dialog';
import { GameBanner } from "./components/GameBanner"
import { CreateAdBanner } from "./components/CreateAdBanner"

import "./styles/main.css"
import logo from './assets/logo.svg'
import { GameController } from "phosphor-react";
import { Input } from "./components/Form/Input";

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
              <form className="mt-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="game" className="font-semibold">Qual o game?</label>
                  <Input 
                  id="game" 
                  placeholder="Selecione o game que deseja jogar"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="nickname" className="font-semibold">Seu nome (ou nickname)</label>
                  <Input id="nickname" placeholder="Como te chamam dentro do game?"/>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="yearsPlaying" className="font-semibold">Joga há quantos anos?</label>
                    <Input id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="discord" className="font-semibold">Qual seu Discord?</label>
                    <Input id="discord" placeholder="Usuario#0000" />
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col gap-2 ">
                    <label htmlFor="weekdays" className="font-semibold">Quando costuma jogar?</label>
                    <div className="grid grid-cols-4 gap-2">
                      <button 
                      title="Domigo"
                      className="w-8 h-8 bg-zinc-900"
                      >
                        D
                      </button>
                      <button 
                      title="Segunda-feira"
                      className="w-8 h-8 bg-zinc-900"
                      >
                        S
                      </button>
                      <button 
                      title="Terça-feira"
                      className="w-8 h-8 bg-zinc-900"
                      >
                        T
                      </button>
                      <button 
                      title="Quarta-feira"
                      className="w-8 h-8 bg-zinc-900"
                      >
                        Q
                      </button>
                      <button 
                      title="Quinta-feira"
                      className="w-8 h-8 bg-zinc-900"
                      >
                        Q
                      </button>
                      <button 
                      title="Sexta-feira"
                      className="w-8 h-8 bg-zinc-900"
                      >
                        S
                      </button>
                      <button 
                      title="Sábado"
                      className="w-8 h-8 bg-zinc-900"
                      >
                        S
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="weekdays" className="font-semibold">Qual horário do dia?</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input id="hourStart" type="time" placeholder="De"/>
                      <Input id="hourEnd" type="time" placeholder="Até"/>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex gap-2 text-sm " >
                  <Input type="checkbox" id="" />
                  Costumo me conectar ao chat de voz
                </div>
                <footer className="mt-4 flex justify-end gap-4">
                  <button
                    className="bg-zinc-500 h-12 px-5 rounded-md font-semibold"
                  >
                      Cancelar
                  </button>
                  <button
                    className="bg-violet-500 flex justify-center items-center gap-2 h-12 px-5 rounded-md font-semibold"
                    type="submit"
                  >
                    <GameController />
                    Encontrar duo
                  </button>
                </footer>
              </form>
            </Dialog.Content>
        </Dialog.Portal>
        
      </Dialog.Root>
  </div>
  )
}

export default App
