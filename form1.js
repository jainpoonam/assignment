function check(form) {
	var date = new Date();

    if (form.userid.value == "abc" && form.pwd.value == "abc") {
        alert("Login successful")
        
        console.log(date);

    } else {
        alert("Incorrect Password or Username")
		 console.log(date);

    }
    return false;



}