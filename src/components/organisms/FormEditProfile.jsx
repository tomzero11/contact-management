import Button from "../elements/button/Button"
import EditProfileField from "../fragments/EditProfileField"
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';


const FormEditProfile = ({
    name,
    onSubmit,
    setName
}) => {
    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <EditProfileField 
                    id="name"
                    label="Fullname"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={true}
                />
                <Button>
                    <SaveOutlinedIcon />
                    Update Profile
                </Button>
            </form>
        </div>
    )
}

export default FormEditProfile