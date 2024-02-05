const Name = document.getElementById("input1");
const span1 = document.getElementsByClassName("error_text")[0];

const LastName = document.getElementById("input2");
const span2 = document.getElementsByClassName("error_text")[1];


const UserEmail = document.getElementById("input3");
const span3 = document.getElementsByClassName("error_text")[2];


const Password = document.getElementById("input4");
const span4 = document.getElementsByClassName("error_text")[3];

const button = document.getElementById("button");



button.addEventListener("click", () => {
    if (
        Name.value.length === 0 ||
        LastName.value.length === 0 ||
        UserEmail.value.length === 0 ||
        Password.value.length === 0
    ) {
        Name.style.borderColor = "#FF7979";
    span1.style.display = "block";
    LastName.style.borderColor = "#FF7979";
    span2.style.display = "block";
    UserEmail.style.borderColor = "#FF7979";
    span3.style.display = "block";
    Password.style.borderColor = "#FF7979";
    span4.style.display = "block";

    } else if (
        Name.value.length > 0 &&
        LastName.value.length > 0 &&
        UserEmail.value.length > 0 &&
        Password.value.length > 0
    ) {
        Name.style.borderColor = "#DEDEDE";
    span1.style.display = "none";
    Name.value = "";
    LastName.style.borderColor = "#DEDEDE";
    span2.style.display = "none";
    LastName.value = "";
    UserEmail.style.borderColor = "#DEDEDE";
    span3.style.display = "none";
    UserEmail.value = "";
    Password.style.borderColor = "#DEDEDE";
    span4.style.display = "none";
    Password.value = "";
    }
});



