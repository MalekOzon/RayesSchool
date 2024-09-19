import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <div className="site-wrapper">
            <h1>malek Aozon</h1>
            <main>
                <Outlet />
            </main>
            footer
        </div>
    )
}

export default Layout