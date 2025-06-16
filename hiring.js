function validateForm(){

    let position = document.getElementById("position")

    let companyname = document.getElementById("companyname")

    let logo = document.getElementById("logo")

    let gaji = document.getElementById("gaji")

    let location = document.getElementById("location")

    let date = document.getElementById("date")

    let qualifications = document.getElementById("qualifications")

    let descriptionjob = document.getElementById("descriptionjob")
    


    if(position.value.trim() === "" ){
        alert("Please fill the position")

    }else if(companyname.value.trim()==""){
        alert("Please fill your name . your company name")

    

    }else if(jamkerja.value.trim()==""){
        alert("Please fill jam kerja")

    }else if(gaji.value.trim()==""){
        alert("Please fill gaji")

    }else if(location.value.trim()==""){
        alert("Please fill your location or WFH job")


  


    }else if(qualifications.value.trim()==""){
        alert("Please fill Qualifications")
    
    }else if(descriptionjob.value.trim()==""){
        alert("Please fill descriptionjob")


    }else if(!terms.checked){
        alert("Please agree to terms and condition")


    } else{
        alert("Form Sucessfully submitted ")
        document.querySelector ("Form").submit
         window.location.href = "hiring.html";
    }



}
