import FormInput from "../elements/Input/Index"


const RegisterField = ({
    value, 
    onChange, 
    id, 
    label, 
    placeholder, 
    name,
    type
}) => {
    return (
        <div className="mb-2">
            <FormInput 
                id={id}
                label={label}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                required={true}
                type={type}
                value={value}
            />
        </div>
    )
}

export default RegisterField