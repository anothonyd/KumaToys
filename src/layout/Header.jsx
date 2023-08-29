import Navbar from "./Navbar";
import { search, person, favorite, shop } from "../assets/Icons";

export default function Header() {
    return (
        <nav className="relative block mx-5">
            <div className="flex justify-between items-center text-center">
                <div className="w-1/3 flex">USER</div>
                <div className="w-1/3 text-4xl py-2 font-semibold">KUMA TOYS</div>
                <div className="w-1/3 flex justify-end h-6 mt-3 gap-1">
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
