
import { useLocalStorage } from "react-use"
import { Navigate, Outlet } from "react-router"
const GuestRoute = () => {
    const [token] = useLocalStorage("token", "")
    if (token) {
        return <Navigate to="/dashboard/contacts"/>
    }
    return (

        <Outlet />
    )
}
export default GuestRoute