function formvalidation(thisform) {
    with (thisform) {
	if (Email.value == ""){
	    alert("Please enter your e-mail address.");
            Email.focus();
            return false;
	} else if (emailvalidation(Email,"The e-mail address you entered is invalid.")==false) {
            Email.focus(); 
            return false;
        } else if (Customer_Name.value == "") {
            alert("Please enter your name.");
	    Customer_Name.focus(); 
            return false;
        } else if (Company.value == "") {
            alert("Please enter your company name.");
            Company.focus(); 
            return false;
        } else if (Business_Telephone.value == "") {
            alert("Please enter the phone number we can reach you at.");
            Business_Telephone.focus(); 
            return false;
        }
    }
}

function emailvalidation(entered, alertbox) {
    with (entered) {
        apos=value.indexOf("@"); 
        dotpos=value.lastIndexOf(".");
        lastpos=value.length-1;
        if (apos<1 || dotpos-apos<2 || lastpos-dotpos>3 || lastpos-dotpos<2) {
		    if (alertbox) {
		        alert(alertbox);
			} 
		return false;
		}
        else {
		return true;
	}
    }
} 
 