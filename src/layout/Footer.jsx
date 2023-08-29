
export default function Footer() {
  return (
    <footer className="block p-5 mt-10 text-start">
      <div className="block items-center md:grid grid-cols-3 gap-5 py-5">
        <div className="col-span-1">
          <h1 className="text-5xl ">Logo</h1>
          <p className="py-5 text-black/60">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorum ipsa officiis adipisci blanditiis corrupti in perferendis</p>
        </div>
        <nav className="col-span-2">
          <ul className="list-none text-md flex flex-col md:flex-row gap-3 md:gap-10 md:justify-end">
            <li><a href="#">Terms of use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Payment</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Pre-Orders</a></li>
          </ul>
        </nav>
      </div>
      <hr />
      <div className="text-center md:text-end w-full pt-5"> &copy; 2023 Kuma Toys. All rights reserved.</div>
    </footer>
  )
}
