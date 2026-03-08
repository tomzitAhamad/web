<?php

include 'connection.php';

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$username = $_POST['uname'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$password = $_POST['pass'];

$sql = "INSERT INTO users(fname,lname,username,email,mobile,password)
VALUES('$fname','$lname','$username','$email','$mobile','$password')";

$run = mysqli_query($con,$sql);

if($run){
    header("Location: show.php");
}else{
    echo "Data not inserted";
}

?>
