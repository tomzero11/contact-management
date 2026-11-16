import { Navigate, Outlet } from "react-router"
import { useLocalStorage } from "react-use"


const Layout = () => {
    const [token] =  useLocalStorage("token", "")

    if (token) {
        return <Navigate to="/dashboard/contacts" />
    }

    return (
        <>
            <div className="bg-cream min-h-screen flex items-center justify-center p-4">
                <Outlet />
            </div>
        </>
    )
}


export default Layout