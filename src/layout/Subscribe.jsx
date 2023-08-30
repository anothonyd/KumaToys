
export default function Subscribe() {
    return (
        <div className="flex flex-col gap-10">
            <h1 className="title">Follow Us</h1>
            <div className="w-full h-44 bg-slate-300 p-5"></div>
            <div className="w-full text-white text-start flex flex-col justify-start md:justify-center gap-5 p-5 md:p-20 h-[500px] md:h-[400px] bg-banner-two bg-center md:bg-cover rounded-xl">
                <h1 className="font-semibold text-4xl md:text-5xl">Get Insider Access</h1>
                <p className="w-full md:w-2/5 text-xl text-white/80 font-light md:text-3xl mb-5">Join our newsletter</p>

                <div className="flex text-xs md:text-lg gap-2 md:gap-5">
                <input type="text" placeholder="john_doe@gmail.com" className="w-full md:w-1/3 p-2 px-5 border-2 rounded-full text-black/80" />
                <button className="font-sans p-2 px-5 md:px-10 border-2 rounded-full">Join</button>
                </div>
            </div>
        </div>
    )
}
