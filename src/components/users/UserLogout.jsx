import { useEffectOnce, useLocalStorage } from "react-use"
import { alertError, alertSuccess } from "../../lib/Alert"
import { useNavigate } from "react-router"
import { userLogout } from "../../lib/api/userApi"

const UserLogout = () => {
    const [token, setToken] = useLocalStorage("token", "")
    const navigate = useNavigate()

    const clickLogout = async () => {
        try {
            const response = await userLogout({
                token
            })
            const responseBody = await response.json()
            if (response.ok) {
                setToken("")
                await alertSuccess("User Logout")
                await navigate({
                    pathname : "/login"
                })
            } else {
                await alertError(responseBody.errors)
            }
        } catch (error) {
            await alertError(error.message)
        }
    }

    useEffectOnce(() => {
        clickLogout()
            .then(() => console.log("Logout sucessfully"))
    }, [])
    return (
        <>
        </>
    )
}

export default UserLogout