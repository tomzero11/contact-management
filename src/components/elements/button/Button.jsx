

const Button = ({isLoading, type, children}) => {
    return (
        <div>
             <button 
                disabled={isLoading} 
                type={type} 
                className="px-5 py-3 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none 
                            focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 
                            transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5 flex 
                            items-center">
                    <i className="fas fa-plus-circle mr-2" /> {children}
            </button>
        </div>
    )
}

export default Button