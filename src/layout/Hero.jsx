
export default function Hero() {
    return (
        <div className="flex flex-col gap-3 md:gap-5 text-white">
            <div className="w-full flex flex-col justify-end md:justify-center gap-4 md:gap-8 p-5 md:p-10 h-[500px] bg-hero-one bg-center md:bg-cover rounded-xl">
                <h1 className="font-semibold text-4xl md:text-5xl">Explore The Magic</h1>
                <p className="text-white/90 font-light w-full md:w-2/5 text-md md:text-xl">Explore our fairytales collection, where Alladin magic awaits</p>
                <button className="button">Discover now</button>
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-5">
                <div className="w-full md:w-2/5 flex flex-col justify-end md:justify-center gap-5 p-10 bg-hero-two bg-center md:bg-cover h-[500px] md:h-[320px] rounded-xl">
                    <h1 className="font-semibold text-3xl">Galactic Savings</h1>
                    <p className="text-white/90 font-light w-full md:w-2/3 text-md">Uncover figures discount for your expanding collections!</p>
                    <button className="button">Explore offers</button>
                </div>

                <div className="w-full md:w-3/5 flex flex-col justify-end md:justify-center gap-5 p-10 bg-hero-three bg-center md:bg-cover h-[500px] md:h-[320px] rounded-xl">
                    <h1 className="font-semibold text-3xl">Legendary Collectibles</h1>
                    <p className="text-white/90 font-light w-full md:w-2/5 text-lg">Embrace the heroic essence of Superheroes figures</p>
                    <button className="button">Shop now</button>
                </div>
            </div>
        </div>
    )
}
