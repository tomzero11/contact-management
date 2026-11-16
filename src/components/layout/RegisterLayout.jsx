import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';

const RegisterLayout = ({children}) => {
    return (
        <div className="w-full animate-fade-in shadow-custom bg-burnt-orange max-w-md min-h-screen border border-gray-700 p-8 rounded-xl ">
            <div className="text-center">
                <div className="flex justify-center">
                    <div className=" bg-ink-black rounded-full w-15 h-15 flex justify-center items-center ">
                        <PersonAddAlt1OutlinedIcon className="text-slate-200 " sx={{ width: 30, height: 40 }}/>
                    </div>
                </div>
                    <h1 className="font-inter font-semibold text-xl text-ink-black">Contact Management</h1>
                    <p>Create a new account</p>
            </div>
            {children}
        </div>
    )
}

export default RegisterLayout