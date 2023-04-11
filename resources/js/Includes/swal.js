export const swal = async (params) => {
    const {default: sweetalert2} = await import('sweetalert2');
    const sweetalertParams = {
        confirmButtonColor: "rgb(220 53 69)",
        showClass: {
            popup: 'animate__animated animate__fadeIn'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOut'
        }
        // cancelButtonColor: "#ff0099"
    };
    return await sweetalert2.fire({...sweetalertParams, ...params});
}
