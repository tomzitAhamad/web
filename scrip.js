function validation() {
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const uname = document.getElementById("uname").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const pass = document.getElementById("pass").value;

    if(fname.length < 3){ alert("First name must be at least 3 characters"); return false; }
    if(lname.length < 3){ alert("Last name must be at least 3 characters"); return false; }
    if(uname.length < 3){ alert("Username must be minimum 3 characters"); return false; }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailPattern.test(email)){ alert("Enter a valid email address"); return false; }
    if(mobile.length !== 11 || isNaN(mobile)){ alert("Mobile number must be 11 digits"); return false; }
    if(!strongPassword(pass)){ 
        alert(
`Password must contain:
• At least 8 characters
• 1 uppercase letter
• 1 lowercase letter
• 1 number
• 1 special character`
        );
        return false;
    }

    alert("Registration Successful ✅");
    return true;
}

// ===== STRONG PASSWORD FUNCTION =====
function strongPassword(password){
    const upper = /[A-Z]/;
    const lower = /[a-z]/;
    const number = /[0-9]/;
    const special = /[^A-Za-z0-9]/;
    return (password.length >= 8 && upper.test(password) && lower.test(password) && number.test(password) && special.test(password));
}

// ===== LIVE PASSWORD CHECK & COLOR + STRENGTH BAR =====
document.addEventListener("DOMContentLoaded", function(){
    const passField = document.getElementById("pass");
    const strengthIndicator = document.getElementById("strengthIndicator");

    if(passField){
        passField.addEventListener("input", function(){
            const val = this.value;

            // Individual checks
            document.getElementById("eCA").className = /[A-Z]/.test(val) ? "valid" : "invalid";
            document.getElementById("eCA").innerText = /[A-Z]/.test(val) ? "Uppercase letter ✓" : "Uppercase letter missing";

            document.getElementById("eSA").className = /[a-z]/.test(val) ? "valid" : "invalid";
            document.getElementById("eSA").innerText = /[a-z]/.test(val) ? "Lowercase letter ✓" : "Lowercase letter missing";

            document.getElementById("eD").className = /[0-9]/.test(val) ? "valid" : "invalid";
            document.getElementById("eD").innerText = /[0-9]/.test(val) ? "Number ✓" : "Number missing";

            document.getElementById("eSC").className = /[^A-Za-z0-9]/.test(val) ? "valid" : "invalid";
            document.getElementById("eSC").innerText = /[^A-Za-z0-9]/.test(val) ? "Special character ✓" : "Special character missing";

            // Password strength calculation
            let strength = 0;
            if(val.length >= 8) strength++;
            if(/[A-Z]/.test(val)) strength++;
            if(/[a-z]/.test(val)) strength++;
            if(/[0-9]/.test(val)) strength++;
            if(/[^A-Za-z0-9]/.test(val)) strength++;

            // Update strength bar
            let width = (strength/5)*100;
            strengthIndicator.style.width = width + "%";

            if(strength <= 2) strengthIndicator.style.backgroundColor = "red";
            else if(strength === 3 || strength === 4) strengthIndicator.style.backgroundColor = "orange";
            else if(strength === 5) strengthIndicator.style.backgroundColor = "green";
        });
    }
});
