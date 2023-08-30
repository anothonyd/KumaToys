import { mezco, herocross, prime } from "../assets/Logo"

export default function LogoSlider() {
    return (
        <div className="flex gap-5 py-5 overflow-x-scroll">
            <img src={mezco} alt="" className="object-contain w-80" />
            <img src={prime} alt="" className="object-contain w-80" />
            <img src={herocross} alt="" className="object-contain w-80" />
            <img src={mezco} alt="" className="object-contain w-80" />
        </div>
    )
}
