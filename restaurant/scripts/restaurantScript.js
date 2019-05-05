function clearErrors() {
	 for (var loopCounter = 0; loopCounter < document.forms["contactInfo"].elements.length; loopCounter++) {

		 if (document.forms["contactInfo"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
		 document.forms["contactInfo"].elements[loopCounter].parentElement.className = "form-group";
		 }
	 }
	
}
function validateAnswers(event) {
	 var name = document.forms["contactInfo"]["name"].value;
	 var email = document.forms["contactInfo"]["email"].value;
	 var phone = document.forms["contactInfo"]["phone"].value;
	 if (name == ""){
		 alert("Name is a required field.");
		 document.forms["contactInfo"]["name"].parentElement.className = "form-group has-error";
		 document.forms["contactInfo"]["name"].focus();
		 return false;
	 }
	 if (email == ""){
		 alert("Email is a required field.");
		 document.forms["contactInfo"]["email"].parentElement.className = "form-group has-error";
		 document.forms["contactInfo"]["email"].focus();
		 return false;
	 }
	 if (phone == "" || isNaN(phone)){
		alert("Phone is a required field. Please enter numbers only.");
        document.forms["contactInfo"]["phone"].parentElement.className = "form-group has-error";
		document.forms["contactInfo"]["phone"].focus();
		return false;
	 }
	 
	 else {alert("Thank you for contacting us. We will return your request for information as soon as possible.");
	 return false;
	 }
}