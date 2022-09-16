import { useState, useEffect } from "react"
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
    .then(data => console.log(data)
    )
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
    <CreateAdBanner />
  </div>
  )
}

export default App
