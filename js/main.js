const sends = document.querySelector('.sends');


function sendcontact() {
    const lastname = document.querySelector('.last-name').value;
    const firstname = document.querySelector('.first-name').value;
    const emails = document.querySelector('.emails').value;
    const phones = document.querySelector('.phones').value;
    if (firstname === '' && emails === '' && phones === '' && lastname === '') {

    } else {
        var formData = new FormData();
        formData.append('entry.1271997867', lastname);
        formData.append('entry.1095750650', firstname);
        formData.append('entry.393996561', emails);
        formData.append('entry.296901862', phones);
        var request = new XMLHttpRequest();
        request.open("POST", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfv_Zp98NOKbADHH9xXQmM1jjEslIQc-XCl2TNYFsPR3mh4jg/formResponse");
        request.send(formData);
        setTimeout(function () {
            location.replace("/thanks.html");
        }, 1000);
    }

}
//sends.addEventListener('click', sendcontact);