function login() {
	var mail = document.getElementById("mail").value;
	var pass = document.getElementById("pass").value;	
	if (mail == "vexere" && pass == "vxr2019") {
		 window.location="cv.html";
	} else {
		alert("Username or Password không đúng!");
	}
}