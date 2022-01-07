const email = document.getElementById("email");
const Error = document.getElementById("error");
const pattern1 = /^([\.\_A-Za-z0-9]+)@([\.A-Za-z]+)\.([a-zA-Z]{2,8})\s*$/g;
const pattern2 = /^([\.\_A-Za-z0-9]+)@([\.A-Za-z]+)\.([a-zA-Z]{2,3})\.([a-zA-Z]{1,3})\s*$/g;
email.onchange = function()
{
    var emailValue = email.value
    if(pattern1.test(emailValue) ||pattern2.test(emailValue)||emailValue === "")
    {
       Error.style.opacity = 0;
    }
    else
    {
        Error.style.opacity = 1;
    }
}