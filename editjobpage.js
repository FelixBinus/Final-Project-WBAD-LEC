function validateForm() {
    let position = document.getElementById("position");
    let company = document.getElementById("company");
    let logo = document.getElementById("logo");
    let jamkerja = document.getElementById("jamkerja");
    let gaji = document.getElementById("gaji");
    let location = document.getElementById("location");
    let deadline = document.getElementById("deadline");
    let qualifications = document.getElementById("qualifications");
    let descriptionjob = document.getElementById("descriptionjob");




    if (position.value.trim() === "") {
        alert("Please fill in the position.");
    } else if (company.value.trim() === "") {
        alert("Please fill in the company name.");
    } else if (jamkerja.value.trim() === "") {
        alert("Please fill in the working hours.");
    } else if (gaji.value.trim() === "") {
        alert("Please fill in the salary.");
    } else if (location.value.trim() === "") {
        alert("Please fill in the location.");
    } else if (deadline.value === "") {
        alert("Please select a deadline.");
    } else if (qualifications.value.trim() === "") {
        alert("Please fill in the qualifications.");
    } else if (descriptionjob.value.trim() === "") {
        alert("Please fill in the job description.");
    } else {
        alert("Form successfully submitted!");
       
        window.location.href = "editjob.html";
    }
}