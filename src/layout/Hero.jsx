
export default function Hero() {
    return (
        <div className="flex flex-col gap-3 md:gap-5 text-white">
            <div className="w-full flex flex-col justify-end md:justify-center gap-4 md:gap-8 p-10 h-[500px] bg-purple-900 rounded-xl">
                <h1 className="font-semibold text-4xl md:text-5xl">Explore The Magic</h1>
                <p className="w-full md:w-2/5 text-md md:text-xl">Explore our fairytales collection, where Alladin magic awaits</p>
                <button className="button">Discover now</button>
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-5">
                <div className="w-full md:w-2/5 flex flex-col justify-end md:justify-center gap-5 p-10  bg-black/70 h-[500px] md:h-[320px] rounded-xl">
                    <h1 className="font-semibold text-4xl">Galactic Savings</h1>
                    <p className="w-full md:w-1/2 text-sm">Uncover figures discount for your expanding collections!</p>
                    <button className="button">Explore offers</button>
                </div>

                <div className="w-full md:w-3/5 flex flex-col justify-end md:justify-center gap-5 p-10  bg-blue-900 h-[500px] md:h-[320px] rounded-xl">
                    <h1 className="font-semibold text-4xl">Legendary Collectibles</h1>
                    <p className="w-full md:w-2/5 text-md">Embrace the heroic essence of Superheroes figures</p>
                    <button className="button">Shop now</button>
                </div>
            </div>
        </div>
    )
}
