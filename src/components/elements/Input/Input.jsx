

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
                className="w-full pl-10 pr-3 py-3 font-inter bg-slate-100 bg-opacity-50 border font-semibold border-gray-600 text-slate-600 rounded-lg focus:outline-none 
                            focus:ring-2 focus:ring-ink-black focus:border-ink-black transition-all duration-200 placeholder:opacity-70" 
            />
        </div>
    )
}

export default Input