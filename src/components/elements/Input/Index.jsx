import Input from "./Input"
import Label from "./Label"


const FormInput = ({name, label, id , type, placeholder, required, value, onChange}) => {
    return (
        <div className="font-inter ">
            <Label htmlFor={name}>{label}</Label>
            <Input 
                id={id} 
                name={name} 
                type={type} 
                placeholder={placeholder} 
                required={required} 
                value={value} 
                onChange={onChange}
            />
        </div>
    )
}

export default FormInput