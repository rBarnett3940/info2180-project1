/* Add your JavaScript to this file */
var emailSubmit = function(){
    var emailInput = document.getElementById('email');
    var btn = document.getElementsByClassName('btn')[1].onclick=function(event){
        var emailAddress = emailInput.value;

        if (emailAddress == ''){
            document.getElementsByClassName("message")[0].innerHTML= 'Please enter a valid email address.';
        } else {
            document.getElementsByClassName("message")[0].innerHTML= `Thank you! Your email address ${emailAddress} has been added to our mailing list!`;
        }
        event.preventDefault();
    }
    btn.addEventListener("click",)
}

window.onload=emailSubmit