import { useState } from "react"
import LoginLayout from "../components/layout/LoginLayout"
import FormLogin from "../components/organisms/FormLogin"
import { alertError } from "../lib/Alert"
import { useLocalStorage } from "react-use"
import { userLogin } from "../lib/api/userApi"
import { useNavigate } from "react-router"

const Login = () => {

    const [, setToken] = useLocalStorage("token", "")
    const[username, setUserName] = useState("")
    const[password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            const response = await userLogin({
                username,
                password,
            })
            const responseBody = await response.json()
            if(response.ok) {
                const token = responseBody.data.token
                setToken(token)
                await navigate({
                    pathname: "/dashboard/contacts"
                })
            } else {
                await alertError(responseBody.errors)
            }
        } catch (errors) {
            await alertError(errors.message)
        }finally {
            setIsLoading(false)
        }
    }

    return (
        <LoginLayout>
            <FormLogin 
                handleSubmit={handleSubmit}
                isLoading={isLoading}
                username={username}
                password={password}
                setUserName={setUserName}
                setPassword={setPassword}
            />
        </LoginLayout>
    )
}

export default Login