import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import ScrollToTop from "./ScrollToTop"
function Layout() {
    return (
        <div className="overflow-hidden" >
            <ScrollToTop />
            <Header />
            <main className="pt-[90px] max-sm:pt-[90px]" >
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout