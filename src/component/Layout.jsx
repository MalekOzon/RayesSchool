import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
function Layout() {
    return (
        <div>
            <Header />
            <main
            className="pt-[90px] max-sm:pt-[90px]
            "
            >
            <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout