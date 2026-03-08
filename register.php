<!DOCTYPE html>
<html>
<head>
<title>Register</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<section class="register_section_class">

    <div class="form_container_class">
        <h2>Register for Tour</h2>

        <form action="insert.php" method="POST" onsubmit="return validation()">

    <input type="text" name="fname" id="fname" placeholder="First name">
<input type="text" name="lname" id="lname" placeholder="Last name">
<input type="text" name="uname" id="uname" placeholder="Username">
<input type="email" name="email" id="email" placeholder="Email">
<input type="tel" name="mobile" id="mobile" placeholder="Mobile">
<input type="password" name="pass" id="pass" placeholder="Password">

<div class="pass_rules">
    <p id="eCA">Uppercase letter missing</p>
    <p id="eSA">Lowercase letter missing</p>
    <p id="eD">Number missing</p>
    <p id="eSC">Special character missing</p>
</div>

<!-- Password strength bar -->
<div class="strength_bar_class">
    <div class="strength_indicator_class" id="strengthIndicator"></div>
</div>

            <div class="pass_rules">
                <p id="eCA"></p>
                <p id="eSA"></p>
                <p id="eD"></p>
                <p id="eSC"></p>
            </div>

            <button type="submit" class="btn_primary_class">Register</button>

        </form>
    </div>

</section>

<script src="script.js"></script>
</body>
</html>
