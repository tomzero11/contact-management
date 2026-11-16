import RegisterField from "../fragments/RegisterField"
import PersonIcon from "@mui/icons-material/Person"
import Button from "../elements/button/Button"
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import { Link } from "react-router";

const FormRegister = ({
    username,
    setUserName,
    name,
    setName,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    isLoading,
    handleSubmit
}) => {
    return (
        <div className="mt-b font-inter font-semibold">
            <form action="" onSubmit={handleSubmit}>
                <div className="relative">
                    <RegisterField 
                        id='username'
                        label="Username"
                        name="username"
                        type="text"
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter your name"
                        value={username}
                    />
                    <PersonIcon className={"text-slate-600 absolute top-10 left-2"}/>
                </div>
                <div className="relative">
                    <RegisterField 
                        id='name'
                        label="Name"
                        name="name"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        value={name}
                    />
                    <PersonIcon className={"text-slate-600 absolute top-10 left-2"}/>
                </div>
                <div className="relative">
                    <RegisterField 
                        id='password'
                        label="Password"
                        name="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create a password"
                        value={password}
                    />
                    <PersonIcon className={"text-slate-600 absolute top-10 left-2"}/>
                </div>
                <div className="relative">
                    <RegisterField 
                        id='confirm_password'
                        label="Confirm Password"
                        name="confirm_password"
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Create a password"
                        value={confirmPassword}
                    />
                    <CheckCircleOutlinedIcon className={"text-slate-600 absolute top-10 left-2"}/>
                </div>
                <div className="mt-9">
                    <Button type="submit" isLoading={isLoading}>
                        <AppRegistrationOutlinedIcon className="text-slate-400 mr-1.5"/>
                        Register
                    </Button>
                </div>
                <div className="mt-5 text-center text-sm text-slate-100 font-inter">
                    Aleready have an account?
                    <Link to="/login" className="ml-1 text-ink-black border-b-2 hover:text-slate-100">
                        Login
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default FormRegister