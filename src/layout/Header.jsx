import Navbar from "./Navbar";
import { search, person, favorite, shop } from "../assets/Icons";
import MobileNav from "./MobileNav";

export default function Header() {
    return (
        <nav className="relative block mx-5">
            <div className="flex justify-between items-center text-center">
                <MobileNav />
                <div className="w-1/3 hidden md:flex">USER</div>
                <div className="w-1/3 md:text-4xl py-2 font-semibold">KUMA TOYS</div>
                <div className="w-1/3 flex justify-end h-9 gap-1">
                    <img src={search} alt="search" className="pt-1" />
                    <img src={person} alt="user" className="h-10" />
                    <img src={favorite} alt="favorite" className="pt-1" />
                    <img src={shop} alt="shop" />
                </div>
            </div>
            <Navbar />
        </nav>
    )
}
