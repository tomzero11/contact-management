import Swal from "sweetalert2"

export const alertSuccess = (message) => {
    return Swal.fire({
        icon : "success",
        title : "Success",
        text : message
    })
}

export const alertError = (message) => {
    return Swal.fire({
        icon : "error",
        title : "Ups Error",
        text: message
    })
}


export const alertConfirm = async (message) => {
    const result = await Swal.fire({
        icon : "question",
        title : "are you sure? ",
        text : message,
        showCancelButton : true,
        cancelButtonColor: "#d33",
        cancelButtonText : "cancel",
        confirmButtonColor : "#3085d6",
        confirmButtonText : "yes"
    })
    return result.isConfirmed
}