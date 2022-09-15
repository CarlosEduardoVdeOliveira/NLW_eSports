import "../../styles/main.css"
export function Modal() {
    return(
        <div className="w-full h-full bg-game-gradient flex items-center justify-center">
            <div className="w-[480px] h-[651px] bg-[#2A2634] rounded px-10 py-8">
                <h1 className="text-white text-2xl font-black">Publique um anúncio</h1>
                <form action="" className="mt-4">
                   <div className=" flex flex-col">
                     <label htmlFor="game" className="py-3 text-white font-semibold block text-sm ">
                        Qual o game?
                        <input id="game" className="bg-zinc-900 w-[408px] mt-3 placeholder:text-zinc-500 pl-3 h-[50px] rounded" placeholder="Selecione o game que deseja jogar"/>
                    </label>

                    <label htmlFor="nickname" className="py-2 text-white block font-semibold text-sm ">
                        Seu nome (ou nickname)
                        <input id="nickname" className="bg-zinc-900 w-[408px] mt-3 placeholder:text-zinc-500 pl-3 h-[50px] rounded" placeholder="Como te chamam dentro do game?"/>
                    </label>
                   </div>
                   <div className="flex flex-rows items-center justifyContent-center gap-6">
                     <label htmlFor="timesGame" className="py-3 text-white font-semibold block text-sm ">
                        Joga há quantos anos?
                        <input id="timesGame" className="bg-zinc-900 w-[192px] mt-3 placeholder:text-zinc-500 pl-3 h-[50px] rounded" placeholder="Tudo bem ser ZERO"/>
                    </label>

                    <label htmlFor="discord" className="py-2 text-white block font-semibold text-sm ">
                        Qual seu Discord?
                        <input id="discord" className="bg-zinc-900 w-[192px] mt-3 placeholder:text-zinc-500 pl-3 h-[50px] rounded" placeholder="Usuario#0000"/>
                    </label>
                   </div>

                   <div className="flex flex-rows items-center justify-center gap-6">
                    
                    <strong className="text-white font-semibold block text-sm">Quando costuma jogar?</strong>
                     <div className="py-3 flex  text-white font-semibold text-sm gap-2">
                        <div className="bg-zinc-900 w-[40px] mt-3 items-center flex justifyContent-center placeholder:text-zinc-500 pl-3 h-[40px] rounded">S</div>
                        <div className="bg-zinc-900 w-[40px] mt-3 items-center flex justifyContent-center placeholder:text-zinc-500 pl-3 h-[40px] rounded">T</div>
                        <div className="bg-zinc-900 w-[40px] mt-3 items-center flex justifyContent-center placeholder:text-zinc-500 pl-3 h-[40px] rounded">Q</div>
                        <div className="bg-zinc-900 w-[40px] mt-3 items-center flex justifyContent-center placeholder:text-zinc-500 pl-3 h-[40px] rounded">Q</div>
                        <div className="bg-zinc-900 w-[40px] mt-3 items-center flex justifyContent-center placeholder:text-zinc-500 pl-3 h-[40px] rounded">S</div>
                    </div>

                    <div className="py-2 text-white block font-semibold text-sm ">
                        Qual seu Discord?
                        <input id="discord" className="bg-zinc-900 w-[192px] mt-3 placeholder:text-zinc-500 pl-3 h-[50px] rounded" placeholder="Usuario#0000"/>
                    </div>
                   </div>

                </form>
            </div>

        </div>
    )
}