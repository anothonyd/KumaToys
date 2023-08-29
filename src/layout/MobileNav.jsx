import { NavLink } from "react-router-dom";

export default function MobileNav() {
    return (
        <nav className="flex md:hidden flex-col">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/'>Shop</NavLink>
            <NavLink to='/'>About Us</NavLink>
            <NavLink to='/'>Contact</NavLink>
        </nav>
    )
}
