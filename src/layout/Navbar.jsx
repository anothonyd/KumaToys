import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="hidden md:flex gap-4 text-sm justify-center p-2">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/shop'>Shop</NavLink>
      <NavLink to='/about'>About Us</NavLink>
      <NavLink to='/contact'>Contact</NavLink>

    </nav>
  )
}
