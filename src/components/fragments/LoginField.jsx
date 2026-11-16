import FormInput from "../elements/Input/Index"



const LoginField = ({
    value, 
    onChange, 
    id, 
    label, 
    placeholder, 
    name,
    type,
    required
}) => {
    return (
        <div className="mb-2">
                <FormInput 
                    id={id}
                    label={label}
                    name={name}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    type={type}
                    value={value}
                />
        </div>
    )
}

export default LoginField