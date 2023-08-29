import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-4 text-sm justify-center p-2">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/'>Shop</NavLink>
      <NavLink to='/'>About Us</NavLink>
      <NavLink to='/'>Contact</NavLink>
    </nav>
  )
}
