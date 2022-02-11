var inputs = document.querySelectorAll("input,select");
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keypress", function(e) {
        if (e.which == 13) {
            e.preventDefault();
            var nextInput = document.querySelectorAll(
                '[tabIndex="' + (this.tabIndex + 1) + '"]'
            );
            if (nextInput.length === 0) {
                nextInput = document.querySelectorAll('[tabIndex="1"]');
            }
            nextInput[0].focus();
        }
    });
}
/////////////////////////////////////////////
function displayNone() {
    fnameTip.style.display = "none";
    surNameTip.style.display = "none";
    emailTip.style.display = "none";
    passTip.style.display = "none";
    dobTip.style.display = "none";
    genderTip.style.display = "none";
}

let messages = [];

var genders = document.getElementsByName("sex");
const dobmonth = document.querySelector("#month");
const dobdate = document.querySelector("#dob-date");
const dobyear = document.querySelector("#dob-year");

const signup = document.querySelector(".sign-up-btn");
const firstName = document.querySelector("#first-name");
const surNmae = document.querySelector("#sur-name");
const eMail = document.querySelector("#e-mail");
const passWord = document.querySelector("#pass-word");
const dob = document.querySelectorAll("dob-class");
const genderBox = document.querySelector(".gender-selector");
var yearOption = document.getElementById("dob-year");
const doc = document.querySelector("body");

const fnameTip = document.querySelector("#fnameTip");
const surNameTip = document.querySelector("#lnameTip");
const emailTip = document.querySelector("#emailTip");
const passTip = document.querySelector("#passTip");
const dobTip = document.querySelector("#dobTip");
const genderTip = document.querySelector("#genderTip");
const form = document.querySelector(".signupForm");

const ex = document.getElementsByClassName("ex-icon");

const ex1 = document.querySelector(".ex-1");
const ex2 = document.querySelector(".ex-2");

const ex3 = document.querySelector(".ex-3");

const ex4 = document.querySelector(".ex-4");

const ex5 = document.querySelector(".ex-5");

const ex6 = document.querySelector(".ex-6");






document.querySelector("body").addEventListener("click", (e) => {
    if (!e.target.classList.contains("snfom")) {
        displayNone();
    }
});

firstName.addEventListener("focus", (event) => {
    ex1.style.display = "none";
    firstName.style.borderColor = "#ccd0d5";

    displayNone();
    if (firstName.value === "" || firstName.value == null) {
        fnameTip.style.display = "block";
    }
});

firstName.addEventListener("blur", (event) => {
    fnameTip.style.display = "none";
    if (firstName.value === "" || firstName.value == null) {
        ex1.style.display = "inline";
        firstName.style.borderColor = "red";
    }
});

surNmae.addEventListener("focus", (event) => {
    event.target.style.borderColor = "#ccd0d5";
    ex2.style.display = "none";
    displayNone();

    if (surNmae.value === "" || surNmae.value == null) {
        lnameTip.style.display = "block";
    }
});

surNmae.addEventListener("blur", (event) => {
    lnameTip.style.display = "none";

    if (surNmae.value === "" || surNmae.value == null) {
        ex2.style.display = "inline";
        event.target.style.borderColor = "red";
    }
});

eMail.addEventListener("focus", (event) => {
    event.target.style.borderColor = "#ccd0d5";
    ex3.style.display = "none";
    displayNone();
    if (eMail.value === "" || eMail.value == null) {
        emailTip.style.display = "block";
    }
});

eMail.addEventListener("blur", (event) => {
    emailTip.style.display = "none";
    if (eMail.value === "" || eMail.value == null) {
        event.target.style.borderColor = "red";
        ex3.style.display = "inline";
    }
});

passWord.addEventListener("focus", (event) => {
    event.target.style.borderColor = "#ccd0d5";
    ex4.style.display = "none";
    displayNone();

    if (passWord.value === "" || passWord.value == null) {
        passTip.style.display = "block";
    }
});

passWord.addEventListener("blur", (event) => {
    passTip.style.display = "none";

    if (passWord.value === "" || passWord.value == null) {
        event.target.style.borderColor = "red";
        ex4.style.display = "inline";
    }
});

dobdate.addEventListener("focus", (event) => {
    event.target.style.borderColor = "#ccd0d5";
    ex5.style.display = "none";
    displayNone();
    if (dobCheck()) {
        dobTip.style.display = "block";
    }
});
dobdate.addEventListener("focus", (event) => {
    displayNone();
    if (dobCheck()) {
        // dobTip.style.display = "block";
        event.target.style.borderColor = "red";

        ex5.style.display = "inline";
    }
});
document.querySelector(".sel").addEventListener("click", (event) => {
    event.target.style.borderColor = "#ccd0d5";
    ex5.style.display = "none";
    displayNone();
    if (dobCheck()) {
        dobTip.style.display = "block";
    }
});

genderBox.addEventListener("focus", (event) => {
    event.target.style.borderColor = "#ccd0d5";
    ex6.style.display = "none";
    displayNone();

    genderTip.style.display = "block";
});

signup.addEventListener("click", (e) => {

    if (validate()) { e.preventDefault() }


})

function validate() {
    let messages = [];

    firstName.style.borderColor = "#ccd0d5";
    surNmae.style.borderColor = "#ccd0d5";
    eMail.style.borderColor = "#ccd0d5";
    passWord.style.borderColor = "#ccd0d5";
    // dob.style.borderColor = "#ccd0d5";
    genderBox.style.borderColor = "#ccd0d5";

    ex1.style.display = "none";
    ex2.style.display = "none";
    ex3.style.display = "none";
    ex4.style.display = "none";
    ex5.style.display = "none";
    ex6.style.display = "none";

    fnameTip.style.display = "none";

    surNameTip.style.display = "none";

    emailTip.style.display = "none";
    passTip.style.display = "none";
    dobTip.style.display = "none";
    genderTip.style.display = "none";

    if (firstName.value === "" || firstName.value == null) {
        messages.push("Name is required");
    }

    if (surNmae.value === "" || surNmae.value == null) {
        messages.push("Surname is required");
    }
    if (eMail.value === "" || eMail.value == null) {
        messages.push("Email is required");
    }
    if (passWord.value === "" || passWord.value == null) {
        messages.push("Password is required");
    }

    var data = document.getElementById("dob-year");
    console.log(data.value);
    // var value = data.options[data.selectedIndex].value;
    // var text = data.options[data.selectedIndex].text;
    if (
        data.value == "2022" ||
        data.value == "2021" ||
        data.value == "2020" ||
        data.value == "2019" ||
        data.value == "2018" ||
        data.value == "2017" ||
        data.value == "2016" ||
        data.value == "2015" ||
        data.value == "2014" ||
        data.value == "2013" ||
        data.value == "2012" ||
        data.value == "2011" ||
        data.value == "2010" ||
        data.value == "2009" ||
        data.value == "2008" ||
        data.value == "2007"
    ) {
        messages.push("Please select your real Date Of Birth");
    } else {}
    var genders = document.getElementsByName("sex");
    if (genders[0].checked == true) {
        // messages.push("Your gender is male");
        console.log("Your gender is female");
        genderBol = true;
    } else if (genders[1].checked == true) {
        // messages.push("Your gender is female");

        console.log("Your gender is male");
        genderBol = true;
    } else if (genders[2].checked == true) {
        // messages.push("Your gender is Custom");

        console.log("Your gender is Custom");
        genderBol = true;
    } else {
        messages.push("Please Select Your Gender");
        // genderBol = false;
    }

    if (messages.length > 0) {
        ex1.style.display = "inline";
        ex2.style.display = "inline";
        ex3.style.display = "inline";
        ex4.style.display = "inline";
        ex5.style.display = "inline";
        ex6.style.display = "inline";

        console.log(messages);
        console.log(checkGender());
        changeBorder();
        checkIf();
        return true

    } else {
        return false
    }
}

function checkIf() {
    var data = document.getElementById("dob-year");
    console.log(data.value);
    var value = data.options[data.selectedIndex].value;
    var text = data.options[data.selectedIndex].text;
    if (firstName.value === "" || firstName.value == null) {
        firstName.style.borderColor = "red";

        fnameTip.style.display = "block";
        ex1.style.display = "inline";

        messages.push("Name is required else if");
        console.log("Name is required else if");
    } else if (surNmae.value === "" || surNmae.value == null) {
        firstName.style.borderColor = "#ccd0d5";
        surNmae.style.borderColor = "red";

        ex1.style.display = "none";
        ex2.style.display = "inline";
        surNameTip.style.display = "block";
        fnameTip.style.display = "none";

        messages.push("Surname is required else if");
        console.log("Surname is required else if");
    } else if (eMail.value === "" || eMail.value == null) {
        firstName.style.borderColor = "#ccd0d5";
        surNmae.style.borderColor = "#ccd0d5";
        eMail.style.borderColor = "red";

        ex1.style.display = "none";
        ex2.style.display = "none";
        ex3.style.display = "inline";

        surNameTip.style.display = "none";
        emailTip.style.display = "block";
        messages.push("Email is required else if");
        console.log("Email is required else if");
    } else if (passWord.value === "" || passWord.value == null) {
        firstName.style.borderColor = "#ccd0d5";
        surNmae.style.borderColor = "#ccd0d5";
        eMail.style.borderColor = "#ccd0d5";
        passWord.style.borderColor = "red";

        ex1.style.display = "none";
        ex2.style.display = "none";
        ex3.style.display = "none";
        ex4.style.display = "inline";

        fnameTip.style.display = "none";

        surNameTip.style.display = "none";

        emailTip.style.display = "none";
        passTip.style.display = "block";
        messages.push("Password is required else if");
        console.log("Password is required else if");
    } else if (
        value == "2022" ||
        data.value == "2021" ||
        data.value == "2020" ||
        data.value == "2019" ||
        data.value == "2018" ||
        data.value == "2017" ||
        data.value == "2016" ||
        data.value == "2015" ||
        data.value == "2014" ||
        data.value == "2013" ||
        data.value == "2012" ||
        data.value == "2011" ||
        data.value == "2010" ||
        data.value == "2009" ||
        data.value == "2008" ||
        data.value == "2007"
    ) {
        firstName.style.borderColor = "#ccd0d5";
        surNmae.style.borderColor = "#ccd0d5";
        eMail.style.borderColor = "#ccd0d5";
        passWord.style.borderColor = "#ccd0d5";
        // dob.style.borderColor = "red";

        ex1.style.display = "none";
        ex2.style.display = "none";
        ex3.style.display = "none";
        ex4.style.display = "none";
        ex5.style.display = "inline";

        fnameTip.style.display = "none";

        surNameTip.style.display = "none";

        emailTip.style.display = "none";
        passTip.style.display = "none";
        dobTip.style.display = "block";
        messages.push("Please select your real Date Of Birth else if");
        console.log("Please select your real Date Of Birth else if");
    } else if (checkGender()) {
        firstName.style.borderColor = "#ccd0d5";
        surNmae.style.borderColor = "#ccd0d5";
        eMail.style.borderColor = "#ccd0d5";
        passWord.style.borderColor = "#ccd0d5";
        // dob.style.borderColor = "#ccd0d5";
        genderBox.style.borderColor = "red";

        ex1.style.display = "none";
        ex2.style.display = "none";
        ex3.style.display = "none";
        ex4.style.display = "none";
        ex5.style.display = "none";
        ex6.style.display = "inline";

        fnameTip.style.display = "none";

        surNameTip.style.display = "none";

        emailTip.style.display = "none";
        passTip.style.display = "none";
        dobTip.style.display = "none";
        genderTip.style.display = "block";
    } else {
        fnameTip.style.display = "none";

        surNameTip.style.display = "none";

        emailTip.style.display = "none";
        passTip.style.display = "none";
        dobTip.style.display = "none";
        genderTip.style.display = "none";

        console.log("All Fields are filled");

        console.log(genderBol);
    }
}

// var genders = document.getElementsByName("sex");
function checkGender() {
    if (genders[0].checked == true) {
        // messages.push("Your gender is male");
        dGender.innerText = "Female"
        console.log("Your gender is female");
        return false;
    } else if (genders[1].checked == true) {
        // messages.push("Your gender is female");
        dGender.innerText = "Male"
        console.log("Your gender is male");
        return false;
    } else if (genders[2].checked == true) {
        // messages.push("Your gender is Custom");
        dGender.innerText = "Custom"
        console.log("Your gender is Custom");
        return false;
    } else {
        messages.push("Please Select Your Gender");
        return true;
    }
}

function changeBorder() {
    firstName.style.borderColor = "#be4b49";
    surNmae.style.borderColor = "red";
    document.querySelector("#g3").style.borderColor = "#be4b49";
    document.querySelector("#g2").style.borderColor = "#be4b49";
    document.querySelector("#g1").style.borderColor = "#be4b49";
    eMail.style.borderColor = "#be4b49";
    passWord.style.borderColor = "#be4b49";
    document.querySelector("#dob-year").style.borderColor = "#be4b49";
    document.querySelector("#month").style.borderColor = "#be4b49";
    document.querySelector("#dob-date").style.borderColor = "#be4b49";
}

function dobCheck() {
    var data = document.getElementById("dob-year");
    console.log(data.value);
    // var value = data.options[data.selectedIndex].value;
    // var text = data.options[data.selectedIndex].text;
    if (
        data.value == "2022" ||
        data.value == "2021" ||
        data.value == "2020" ||
        data.value == "2019" ||
        data.value == "2018" ||
        data.value == "2017" ||
        data.value == "2016" ||
        data.value == "2015" ||
        data.value == "2014" ||
        data.value == "2013" ||
        data.value == "2012" ||
        data.value == "2011" ||
        data.value == "2010" ||
        data.value == "2009" ||
        data.value == "2008" ||
        data.value == "2007"
    ) {
        return true;
    }
}

function showSignup() {
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".signup").style.display = "block";
}

function closeSignup() {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".signup").style.display = "none";
}

function render() {

    dlName.innerText = firstName.value
    dfName.innerText = surNmae.value
    dEmail.innerText = eMail.value
    dDob.innerText = ` ${document.querySelector("#dob-date").value}- ${document.querySelector("#month").value} -${document.querySelector("#dob-year").value}`




}