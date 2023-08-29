import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function RootLayout() {
    return (
        <div>
            <Header />
            <main>
                <div><Outlet /></div>
            </main>
        </div>
    )
}