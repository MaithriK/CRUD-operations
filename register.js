var firstname = document.querySelector("#fname");
var middlename = document.querySelector("#mname");
var lastname = document.querySelector("#lname");
var email = document.querySelector("#email");
var phone = document.querySelector("#phone");
var password = document.querySelector("#password");
var confirmpassword = document.querySelector("#password2");
var register = document.querySelector("#btn");

let data = [];
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function saveData(ev) {
	ev.preventDefault();
	let user = {
		firstname : firstname.value,
		middlename : middlename.value,
		lastname : lastname.value,
		email : email.value,
		phone : phone.value,
		password : password.value,
		confirmpassword : password2.value
	}
	if(firstname.value && lastname.value && email.value && phone.value && password.value && confirmpassword.value){

			if(!(email.value.match(mailformat)))
			{
				alert("You have entered an invalid email address!");
				return false;
			}
		if(password.value.length >= 8 && password2.value.length >= 8) {
				if(password.value != password2.value){
					alert("password and confirm password fields must be same");
					return false;
				}
	    }else {
	    	alert("password must be minimum 8 characters long");
	    	return false;
	    }
		if(phone.value.length < 10 || phone.value.length > 10) {
			alert("Phone number must be 10 digits");
			return false;
		}
		data.push(user);
		document.querySelector("#form").reset();
		localStorage.setItem("registration",JSON.stringify(data , '\t' ,2));
		alert("You are successfully registered");
		location.href = "home.html";
	}else{
		alert("fields can't be empty, except middlename");
		return false;
	}
	
}
register.addEventListener("click", saveData); 



