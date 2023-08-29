import BestSeller from "../layout/BestSeller";
import BuyFromUs from "../layout/BuyFromUs";
import Faq from "../layout/Faq";
import Hero from "../layout/Hero";
import LatestRelease from "../layout/LatestRelease";
import LogoSlider from "../layout/LogoSlider";
import Subscribe from "../layout/Subscribe";

export default function Home() {
    return (
        <div className="relative px-3 md:px-5 w-full">
            <Hero />
            <section className="flex flex-col gap-24 text-center">
                <LogoSlider />
                <LatestRelease />
                <BuyFromUs />
                <BestSeller />
                <Faq />
                <Subscribe />
            </section>
        </div>
    )
}
