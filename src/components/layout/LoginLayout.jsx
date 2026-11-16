
const LoginLayout = ({children}) => {
    return (
        <div className="animate-fade-in bg-burnt-orange  p-8 rounded-xl shadow-custom border border-gray-700 backdrop-blur-sm w-full max-w-md">
            <div className="text-center mb-8">
                <div className="inline-block p-3 bg-ink-black rounded-full mb-4">
                    <i className="fas fa-address-book text-3xl text-white" />
                </div> 
                <h1 className="text-3xl font-bold text-white">Contact Management</h1>
                <p className="text-gray-300 mt-2">Sign in to your account</p>
            </div>
            {children}
        </div>
    )
}

export default LoginLayout