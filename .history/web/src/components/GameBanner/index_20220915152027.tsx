
interface GameBannerProps {
    bannerUrl: string,
    title: string,
    adsCount: string,

}

export function GameBanner({bannerUrl, title, adsCount}: GameBannerProps) {
  return (
    <>
      <a href="" className="relative rounded-lg overflow-hidden">
        <img src={bannerUrl} alt="" />
        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient bottom-0 left-0 absolute">
          <strong className="font-bold text-white block">
            {title}
          </strong>
          <span className="text-zinc-300 block text-sm mt-1">{adsCount}</span>
        </div>
      </a>
    </>
  );
}
