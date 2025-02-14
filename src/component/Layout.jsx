import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
function Layout() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout