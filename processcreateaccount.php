<?php
include "head.php";
require("connectiondatabase.php");

?>
<body>
	<header>    
			<a href="mainDashboard.php" id="next">Next</a>
    </header>
   
	<?php

		$email = $_POST['email'];
		$password = $_POST['password'];
		$phone = $_POST['phone'];
		
		$create=	"INSERT INTO user(email, password, phone)
					VALUES('$email', '$password', '$phone');";
		$action_create=mysql_query($create, $CONNEXION);
		?>
		
		
</body>