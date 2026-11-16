

const Label = ({children, htmlFor}) => {
    return (
        <div>
            <label 
                htmlFor={htmlFor} 
                className="block text-gray-300 text-sm font-medium mb-2"
                >{children}
            </label>
        </div>
    )
}
export default Label