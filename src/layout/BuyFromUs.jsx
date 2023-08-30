
export default function BuyFromUs() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="title">Why Buy From Us? </h1>
      <div className="w-full h-44 bg-slate-300 p-5"></div>
      <div className="w-full text-white text-start flex flex-col justify-end md:justify-center gap-5 p-10 md:p-20 h-[500px] md:h-[400px] bg-banner-one bg-center md:bg-cover rounded-xl">
        <h1 className="font-semibold text-4xl md:text-5xl ">Buy 1 Get 1 free</h1>
        <p className="w-full md:w-2/5 text-xl md:text-3xl text-white/90 font-light mb-5">From the Avatar series</p>
        <button className="button">Buy now</button>
      </div>
    </div>
  )
}
