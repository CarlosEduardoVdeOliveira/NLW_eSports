import "../../styles/main.css"
export function Modal() {
    return(
        <div className="w-full h-full bg-game-gradient flex items-center justify-center">
            <div className="w-[480px] h-[651px] bg-[#2A2634] rounded flex flex-col px-10 py-8">
                <h1 className="text-white text-2xl font-black">Publique um anúncio</h1>
                <form action="">
                    <label htmlFor="game" className="flex flex-col py-2xl ">
                        Qual o game?
                        <input id="game" className="bg-zinc-900 w-[408px]" placeholder="Selecione o game que deseja jogar"/>
                    </label>
                </form>
            </div>

        </div>
    )
}