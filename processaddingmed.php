<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="bootstrap-3.3.7-dist/css/bootstrap.css">
		<link rel="stylesheet" type="text/css" href="stylesheet.css">
	</head>
	<body>
	<?php
	require("connectiondatabase.php");
	session_start();
	?>
	<p>
	<?php
	if($CONNEXION)
	{
		$drug_name = $_POST['drug_name'];
		$password = $_POST['password'];
		$phone = $_POST['phone'];
		
		if (!empty($_POST['lacspeche'])) 
				{
					foreach ($_POST['lacspeche'] as $check)
					{
						$lacspeche = $lacspeche.' '.$check;
					}
				}
				
				
		$create=	"INSERT INTO prescription(presc_id, drug_name, repeat, user_id)
					VALUES(NULL, '$email', '$password', '$phone');";
		$action_create=mysql_query($create, $CONNEXION);
		?>
			<p>Your account has been created, you can now login to your new account.</p>
			<p>You will now be redirected to the homepage.</p>
			<br/><br/>
		<?php
		header('Refresh: 10; URL=index.html');
	}
	else{
	}
		?>
	</p>
	
</body>