<?php
include 'connection.php';

$sql = "SELECT * FROM users";
$run = mysqli_query($con,$sql);
?>

<!DOCTYPE html>
<html>
<head>
<title>User List</title>
</head>
<body>

<h2>Registered Users</h2>

<table border="1">
<tr>
<th>ID</th>
<th>Name</th>
<th>Username</th>
<th>Email</th>
<th>Mobile</th>
</tr>

<?php while($row = mysqli_fetch_assoc($run)){ ?>

<tr>
<td><?= $row['id'] ?></td>
<td><?= $row['fname']." ".$row['lname'] ?></td>
<td><?= $row['username'] ?></td>
<td><?= $row['email'] ?></td>
<td><?= $row['mobile'] ?></td>
</tr>

<?php } ?>

</table>

</body>
</html>
