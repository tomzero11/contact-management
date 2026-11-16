import FormInput from "../elements/Input/Index"



const FormLogin = ({value, onChange, id, label, placeholder, type}) => {
    return (
        <div className="mb-2">
            <form action="">
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
            </form>
        </div>
    )
}

export default FormLogin