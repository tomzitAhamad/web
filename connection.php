<?php

$host = "localhost";
$user = "root";
$password = "";
$db = "travel_db";

$con = mysqli_connect($host,$user,$password,$db);

if(!$con){
    echo "Connection Failed";
}

?>
