import { useState } from "react"
import RegisterLayout from "../components/layout/RegisterLayout"
import FormRegister from "../components/organisms/FormRegister"
import { alertError, alertSuccess } from "../lib/Alert"
import { userRegister } from "../lib/api/userApi"
import { useNavigate } from "react-router"


const Register = () => {

    const [name,setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isLoading, setIsloading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setIsloading(true)
            if (password !== confirmPassword) {
                return await alertError("Password to do match")
            }
            const respone = await userRegister({
                name,
                username,
                password,
            })
            const responseBody = await respone.json()
            if (respone.ok) {
                await alertSuccess("user create successfully")
                await navigate({
                    pathname: "/login"
                })
            } else {
                await alertError(responseBody.errors)
            }
        } catch (errors) {
            await alertError(errors.message)
        } finally {
            setIsloading(false)
        }
    }

    return (
        <RegisterLayout>
            <FormRegister 
                handleSubmit={handleSubmit}
                username={username}
                setUserName={setUsername}
                name={name}
                setName={setName}
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                isLoading={isLoading}

            />
        </RegisterLayout>
    )
}

export default Register