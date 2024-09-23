$(document).ready(function(){
    $(".login-button").on("click",function(){
        $(".sign--in").css("visibility","visible");
        $(".sign--in").slideDown();
        //document.querySelector(".button").classList.add("invisible");
    });    
});

$("#body").on("dblclick", function(){
    /*$(".sign--in").css("visibility","hidden");*/
    $('#sign--in').slideUp();
   
});

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

$(document).ready(function() {
    $("#sign-up").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            password:{
                required: true,
                password: true,
                minlength: 8
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must be at least 2 characters long"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please enter your password",
                password: "please enter a valid password",
                minlength: "Your password must contain atleast 8 characters"
            }
        },
        errorPlacement: function(error, element) {
            // Append error messages next to the input fields
            error.insertAfter(element);
        },
        submitHandler: function(form) {
            // Submit the form if valid
            form.submit();
        }
    });
});

    