

const Input = ({
    type,
    id,
    name,
    placeholder,
    value,
    onChange,
    required
}) => {
    return (
        <div>
            <input 
                type={type} 
                id={id}
                name={name}
                required={required}
                onChange={onChange} 
                value={value}
                placeholder={placeholder}
                className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none 
                            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200" placeholder="Enter your username" 
            />
        </div>
    )
}

export default Input