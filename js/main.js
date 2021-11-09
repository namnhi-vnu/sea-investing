const sends = document.querySelector('.sends');


function sendcontact() {
    const lastname = document.querySelector('.last-name').value;
    const firstname = document.querySelector('.first-name').value;
    const emails = document.querySelector('.emails').value;
    const phones = document.querySelector('.phones').value;
    if (firstname === '' && emails === '' && phones === '' && lastname === '') {

    } else {
        var formData = new FormData();
        formData.append('entry.347485993', lastname);
        formData.append('entry.1835009128', firstname);
        formData.append('entry.1889409274', emails);
        formData.append('entry.204590075', phones);
        var request = new XMLHttpRequest();
        request.open("POST", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSetpMV7IzBkQRPglLbvDPtUfiZ-E3TZCYmzh3JG_zImm1-w-A/formResponse");
        request.send(formData);
        setTimeout(function () {
            location.replace("/index.html");
        }, 1000);
    }

}
//sends.addEventListener('click', sendcontact);