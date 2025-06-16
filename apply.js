function validateForm(){

    let fullname = document.getElementById("fullname")

    let address = document.getElementById("address")

    let email = document.getElementById("email")

    let phone = document.getElementById("phone")

    let linked = document.getElementById("linked")

    let date = document.getElementById("date")

    let qualifications = document.getElementById("qualifications")

    let descriptionjob = document.getElementById("descriptionjob")
    


    if(fullname.value.trim() === "" ){
        alert("Please your full name")

    }else if(address.value.trim()==""){
        alert("Please fill address")

    }else if(!email.value.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com")

    }else if(phone.value.trim()==""){
        alert("Please fill your phone number")

    }else if(linked.value.trim()==""){
        alert("Please fill your linked link")

   


    }else if(!terms.checked){
        alert("Please agree to terms and condition")


    } else{
        alert("Form Sucessfully submitted ")
        document.querySelector ("Form").submit
        window.location.href = "findjob.html";

    }
        
 

}
