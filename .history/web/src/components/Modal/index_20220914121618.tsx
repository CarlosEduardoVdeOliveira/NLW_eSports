import "../../styles/main.css"
export function Modal() {
    return(
        <div className="w-full h-full bg-game-gradient flex items-center justify-center">
            <div className="w-[480px] h-[651px] bg-[#2A2634] rounded flex flex-col px-10 py-8">
                <h1 className="text-white text-2xl font-black">Publique um anúncio</h1>
                <form action="" className="mt-4">
                    <label htmlFor="game" className="py-3 text-white font-semibold block text-sm ">
                        Qual o game?
                        <input id="game" className="bg-zinc-900 w-[408px] mt-3 placeholder:text-zinc-500 pl-3 h-[50px] rounded" placeholder="Selecione o game que deseja jogar"/>
                    </label>

                    <label htmlFor="nickname" className="py-2 text-white block font-semibold text-sm ">
                        Seu nome (ou nickname)
                        <input id="nickname" className="bg-zinc-900 w-[408px] mt-3 placeholder:text-zinc-500 pl-3 h-[50px] rounded" placeholder="Como te chamam dentro do game?"/>
                    </label>
                </form>
            </div>

        </div>
    )
}