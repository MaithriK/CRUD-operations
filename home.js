var rbtn = document.querySelector("#register");
var lbtn = document.querySelector("#log");
var email = document.querySelector("#emailid");
var password = document.querySelector("#pwd");

var data = [{
	email:"user@gmail.com",
	password:"123456"
}];

localStorage.setItem("logindata",JSON.stringify(data));
var l = localStorage.getItem("logindata");
var login = JSON.parse(l);

lbtn.addEventListener("click", validate); 


function validate(ev) {
	ev.preventDefault();
	if(email.value  && password.value ){
	
		if((email.value == login[0].email)&&(password.value == login[0].password))
    		location.href = "dashboard.html";
	    else
    	   alert("Incorrect details try again");
    }
    else
    	alert("fields can't be empty");
}

rbtn.addEventListener("click", function(ev) {
	ev.preventDefault();
	location.href = "register.html";
 });


