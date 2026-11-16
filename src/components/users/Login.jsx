import { useState } from "react"
import { useNavigate } from "react-router"
import { useLocalStorage } from "react-use"
import { userLogin } from "../../lib/api/userApi"
import { alertError } from "../../lib/Alert"
import FormLogin from "../organisms/FormLogin"
import LoginLayout from "../layout/LoginLayout"

const Login = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [username, setUserName] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const [, setToken] = useLocalStorage("token" , "")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            const response = await userLogin({
                username,
                password
            })
            const responseBody = await response.json()
            if (response.ok) {
                const token = responseBody.data.token
                setToken(token)
                await navigate({
                    pathname : "/dashboard/contacts"
                })
            } else {
                await alertError(responseBody.errors)
            }
        } catch (errors) {
            await alertError(errors.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
    <div className="animate-fade-in bg-burnt-orange  p-8 rounded-xl shadow-custom border border-gray-700 backdrop-blur-sm w-full max-w-md">
        <div className="text-center mb-8">
            <div className="inline-block p-3 bg-gradient rounded-full mb-4">
                <i className="fas fa-address-book text-3xl text-white" />
            </div> 
            <h1 className="text-3xl font-bold text-white">Contact Management</h1>
            <p className="text-gray-300 mt-2">Sign in to your account</p>
        </div>
        <LoginLayout />
        <FormLogin 
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            username={username}
            password={password}
            setUserName={setUserName}
            setPassword={setPassword}
        />
    </div>

    )
}

export default Login