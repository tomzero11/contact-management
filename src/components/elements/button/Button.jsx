

const Button = ({isLoading, type, children}) => {
    return (
        <div className="w-full">
            <button 
                disabled={isLoading} 
                type={type} 
                className="px-5 py-3 w-full bg-gradient text-slate-400 font-semibold  rounded-lg tracking-wide hover:opacity-90 focus:outline-none 
                            focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 
                            transition-all duration-200 shadow-lg transform hover:-translate-y-0.5 flex 
                            items-center justify-center"
                    >
                    {children}
            </button>
        </div>
    )
}

export default Button