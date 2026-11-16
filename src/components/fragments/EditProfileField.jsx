import FormInput from "../elements/Input/Index";

const EditProfileField = ({
    id,
    label,
    name,
    type,
    value,
    placeholder,
    required,
    onChange,
    }) => {
    return (
        <div className="mb-2">
        <FormInput
            id={id}
            label={label}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
        />
        </div>
    );
    };

export default EditProfileField;
