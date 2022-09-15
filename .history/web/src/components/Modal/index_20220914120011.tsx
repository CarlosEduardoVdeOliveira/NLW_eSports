import "../../styles/main.css"
export function Modal() {
    return(
        <div className="w-full h-full bg-game-gradient flex items-center justify-center">
            <div className="w-[480px] h-[651px] bg-[#2A2634] rounded flex flex-col px-10 py-8">
                <h1 className="text-white text-2xl font-black">Publique um anúncio</h1>
                <form action="">
                    <label htmlFor="game" className="py-8 text-white block">
                        Qual o game?
                        <input id="game" className="bg-zinc-900 w-[408px] pt-4" placeholder="Selecione o game que deseja jogar"/>
                    </label>
                </form>
            </div>

        </div>
    )
}