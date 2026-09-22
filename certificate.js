function openCertificate() {
    document.getElementById("simpleCertificate").style.display  = "flex";
    
    document.querySelectorAll("section").forEach(sec => {
        sec.style.display = "none";
    });
}

function closeCertificate() {
    document.getElementById("simpleCertificate").style.display = "none";

    document.querySelectorAll("section").forEach(sec => {
        sec.style.display = "block";
    })
}

