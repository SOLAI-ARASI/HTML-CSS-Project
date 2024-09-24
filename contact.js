/*document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

});*/

$(document).ready(function() {
    $('#menu-toggle').click(function() {
        $('#nav-menu').toggleClass('active'); // Toggle the 'active' class
    });

    $(".login-button").on("click",function(){
        $("#nav-menu").removeClass('active');
    });
});


$(".login-button").on("click",function(){
    $(".sign--in").css("visibility","visible");
    $(".sign--in").slideDown();
    
    //document.querySelector(".button").classList.add("invisible");
});

$(".close-btn").on("click",function(){
    $("#sign--in").slideUp();
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


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    validateInputs();
});

const setSuccess = element=>{
    const inputControl =element.parentElement;
    const errorDisplay = inputControl.querySelector('error');
    errorDisplay.innerText='';
    inputControl.classList.add('Success');
    inputControl.classList.remove('Error');
};

const setError = (element, message => {
    const inputControl =element.parentElement;
    const errorDisplay = inputControl.querySelector('error');

    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('succcess');
});

const isValidEmail = email => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailPattern.test(email.toLowerCase());
}

const validateInputs=() => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if(name===''){
        setError(name,'username is required');
    }else{
        setSuccess(name);
    }

    if(email===''){
        setError(email,'email is required');
    }else if(!isValidEmail(emailvalue)){
        setError(rmsil,'Provide a valid email address');
    }else{
        setSuccess(email);
    }

    if(message===''){
        setError(message,'Feedback is required');
    }else{
        setSuccess(messagge);
    }

    /*feedbackElement.textContent = '';
    alert('Message sent successfully!');
    document.getElementById('contactForm').reset();*/
}

/* contact container */
$(".close-btn").on("click",function(){
    $(".container").css("visibility", "hidden");
});

$(".login-button").on("click",function(){
    $(".container").css("visibility", "visible");
});


$(document).ready(function() {
    $("#contact-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
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
            }
        },
        submitHandler: function(form) {
            // Submit the form if valid
            form.submit();
        }
    });
});