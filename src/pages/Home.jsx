
export default function Home() {
    return (
        <div className="relative px-5 w-full flex flex-col gap-5">
            <div className="relative w-full h-[460px] bg-blue-800 rounded-xl"></div>
            <div className="flex flex-wrap md:flex-nowrap gap-5">
            <div className="w-full md:w-2/5 bg-yellow-200 h-[460px] md:h-[320px] rounded-xl"></div>
            <div className="w-full md:w-3/5 bg-pink-300 h-[460px] md:h-[320px] rounded-xl"></div>
            </div>
            HOME
        </div>
    )
}
