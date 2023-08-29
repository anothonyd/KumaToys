
export default function Subscribe() {
    return (
        <div className="flex flex-col gap-10">
            <h1 className="title">Follow Us</h1>
            <div className="w-full h-44 bg-slate-300 p-5"></div>
            <div className="w-full text-white text-start flex flex-col justify-end md:justify-center gap-5 p-10 md:p-20 h-[500px] md:h-[400px] bg-black/70 rounded-xl">
                <h1 className="font-semibold text-4xl md:text-5xl">Get Insider Access</h1>
                <p className="w-full md:w-2/5 text-xl md:text-3xl mb-5">Join our newsletter</p>

                <div className="w-full">
                <input type="text" placeholder="john_doe@gmail.com" className="w-2/3 md:w-1/3 rounded-full p-2 px-6 border-2 me-3" />
                <button className="button">Join</button>
                </div>
            </div>
        </div>
    )
}
