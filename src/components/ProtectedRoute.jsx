import { Navigate } from "react-router"
import { useLocalStorage } from "react-use"


const ProtectedRoute = () => {
    const [token] = useLocalStorage("token", "")

    if (!token || token !== true) {
        return <Navigate to="/login"/>
    }
}
export default ProtectedRoute