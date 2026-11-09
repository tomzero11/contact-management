import { Outlet } from "react-router"
import { Link } from "react-router"
import { useLocalStorage } from "react-use"
import { Navigate } from "react-router"


const DashboardLayout = () => {

    const [token] = useLocalStorage("token", "")

    if (!token) {
        return <Navigate to="/login" />
    }

    return (
    <div>
        <header className="bg-gradient shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/dashboard/contacts" className="flex items-center hover:opacity-90 transition-opacity duration-200">
                <i className="fas fa-address-book text-white text-2xl mr-3" />
                <div className="text-white font-bold text-xl">Contact Management</div>
            </Link>
            <nav>
                <ul className="flex space-x-6">
                <li>
                    <Link to="/dashboard/users/profile" className="text-gray-100 hover:text-white flex items-center transition-colors duration-200">
                        <i className="fas fa-user-circle mr-2" />
                        <span>Profile</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/users/logout" className="text-gray-100 hover:text-white flex items-center transition-colors duration-200">
                        <i className="fas fa-sign-out-alt mr-2" />
                        <span>Logout</span>
                    </Link>
                </li>   
                </ul>
            </nav>
            </div>
        </header>
        {/* Main content */}
        <main className="container bg-gray-800 mx-auto px-4 py-8 grow">
            <Outlet />
            {/* Footer */}
            <div className="mt-10 mb-6 text-center text-gray-400 text-sm animate-fade-in">
            <p>© 2025 Contact Management. All rights reserved.</p>
            </div>
        </main>
        {/* JavaScript for toggle search form */}
        </div>
    )
}
export default DashboardLayout