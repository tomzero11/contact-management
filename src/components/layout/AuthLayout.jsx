import { Outlet } from "react-router"

const AuthLayout = () => {
    return (
        <div className="flex justify-center bg-gradient-to-br from-gray-800 to-gray-900 min-h-screen p-5">
            <Outlet />
        </div>
    )
}

export default AuthLayout