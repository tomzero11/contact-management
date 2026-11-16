
import LoginField from "../fragments/LoginField"
import Button from "../elements/button/Button"
import PersonIcon from "@mui/icons-material/Person"
import PasswordIcon from "@mui/icons-material/Password"
import LoginIcon from "@mui/icons-material/Login"
import { Link } from "react-router"

const FormLogin = ({
    username,
    setUserName,
    password,
    setPassword,
    isLoading,
    handleSubmit
}) => {
    return (
        <div className="font-semibold font-inter">
             <form onSubmit={handleSubmit} >
                <div className="mb-5 font-inter">
                    <div className="relative">
                        <LoginField
                            id="username"
                            label="Username"
                            name="username"
                            type="text"
                            value={username}
                            required={true}
                            placeholder="Enter your name"
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <PersonIcon className="text-slate-600 w-10 absolute top-10 left-2"/>
                    </div>

                    <div className="relative">
                        <LoginField
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            value={password}
                            required={true}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <PasswordIcon className="text-slate-600 w-10 absolute top-10 left-2"/>
                    </div>
                </div>
                <div className="mb-6">
                    <Button type="submit" isLoading={isLoading}>
                        <LoginIcon className="mr-3"/>
                        Login
                    </Button>
                </div>
                <div className="text-center text-sm text-gray-100 font-inter">
                    Don't have an account?
                    <Link to="/register" className="text-ink-black ml-1 border-b-2 hover:text-slate-100">
                        Sign up
                    </Link>
                </div>
            </form>
        </div>
       
    )
}

export default FormLogin
