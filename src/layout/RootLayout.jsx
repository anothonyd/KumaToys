import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function RootLayout() {
    return (
        <div className="max-w-6xl mx-auto">
            <Header />
            <hr className="md:hidden" />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
