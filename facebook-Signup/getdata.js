const params = new URLSearchParams(window.location.search);
const dlName = document.querySelector("#dlName")
const dfName = document.querySelector("#dfName")
const dEmail = document.querySelector("#dE-mail")
const dDob = document.querySelector("#d-dob")
const dGender = document.querySelector("#d-gender")
    //fname = Salman & sname = Khalid & email = salmankhalid2016 % 40 gmail.com
    //&
    //password = kjksjfklsdjflksdj & birthday_month = 1 & birthday_year = 2004 & sex = on


dfName.innerText = params.get("fname");
dlName.innerText = params.get("sname");
dEmail.innerText = params.get("email");
dGender.innerText = params.get("sex");
dDob.innerText = `${params.get("dob")}- ${params.get("birthday_month")}- ${params.get("birthday_year")}`