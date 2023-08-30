import Navbar from "./Navbar";
import { search, person, favorite, shop } from "../assets/Icons";
import MobileNav from "./MobileNav";

export default function Header() {
    return (
        <nav className="relative block mx-5">
            <div className="w-full items-center grid grid-cols-3">
                <MobileNav />
                <div className="col-span-1 hidden md:flex">USER</div>
                <div className="flex justify-center col-span-1"><img src="/src/assets/Logo/KumaLogo.png" className="h-24" alt="" /></div>
                <div className="col-span-1 flex justify-end h-9 gap-1">
                    <img src={search} alt="search" />
                    <img src={person} alt="user" />
                    <img src={favorite} alt="favorite" />
                    <img src={shop} alt="shop" />
                </div>
            </div>
            <Navbar />
        </nav>
    )
}
