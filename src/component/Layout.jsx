import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
function Layout() {
    return (
        <div>
            <Header />
            <main
            className="pt-[100px] max-md:pt-[112px]
            pb-20
            "
            >
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout