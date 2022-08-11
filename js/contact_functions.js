const showErrorField = (field) => {
    Toastify({
        text: "Please, fill in the gap => " + field,
        duration: 1200,
        gravity: 'top',
        position: 'center1',
        style: {
            background: "linear-gradient(to right, #00b09b, #21d536)",
        },
        className: "cartel"
    }).showToast();
}

const saveData = () => {
    let field_name = document.getElementById("name").value;
    let field_email = document.getElementById("email").value;
    localStorage.setItem(
                        "form_data",
                        JSON.stringify(
                                {
                                name:field_name, 
                                email:field_email
                                }
                            )
                        );
}

const cleanData = () => {
    localStorage.removeItem("form_data");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

}

const validateForm = () => {
    let field_name = document.getElementById("name").value;
    let field_email = document.getElementById("email").value;

    if (field_name.length == 0) {
        showErrorField("Name");
        return false;
    }

    if (field_email.length == 0) {
        showErrorField("Email");
        return false;
    }

    if (!field_email.includes("@")){
        showErrorField("Email must include a @")
        return false;
    }

    saveData();
    messageContactBuy();
}

//Message for confir registration
const messageContactBuy = () => {
    Swal.fire({
        title: 'Is your data ok?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!!'
    }).then((result) => {
        if (result.isConfirmed) {
            cleanData();
            Swal.fire(
            'Thanks a lot! Have a nice day',
            '',
            'success'
            )
        }
    })
}

document.getElementById("submitButton").addEventListener("click", validateForm);