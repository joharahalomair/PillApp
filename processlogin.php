<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="bootstrap-3.3.7-dist/css/bootstrap.css">
		<link rel="stylesheet" type="text/css" href="stylesheet.css">
	</head>
	<?php
	require("connectiondatabase.php");
	?>
	<body>
		<header>
		
	<?php
	if($CONNEXION)		   
	{			
			   session_start();
			   
			   
			   $checkedEmail = false;
			   
			   if( isset($_POST['password']) && (!empty($_POST['email'])) && (!empty($_POST['password'])))
			   {
				   $email=$_POST['email'];
				   $password=$_POST['password'];
				   $checkEmail="	SELECT email, password, phone, user_id
									FROM user 
									WHERE email='$email'";
				   $req_checkEmail = mysql_query($checkEmail,$CONNEXION);
				   
				   if(mysql_num_rows($req_checkEmail)!=0)
				   {
					   $data=mysql_fetch_assoc($req_checkEmail);
					   
					   
					   if($password == $data['password'])
					   {
						   $checkedEmail=true;
					   }
				   }
				}
				
				if($checkedEmail==true)
				{
					$_SESSION['email']=$data['email'];
					$_SESSION['password']=$data['password'];
					$_SESSION['phone']=$data['phone'];
					$_SESSION['userid']=$data['user_id'];
					header('Location: mainDashboard.php');
			
				}
				else
				{
					?>
						<p>You entered the wrong email or password.</p>
						<br/><br/>
						<a href="index.html" id="next">Go back</a>
					<?php
				}					
			  
			?>   
				   
				   
				   
		</header>
	
	
     <?php
	 mysql_close($CONNEXION);  
    }?>
		
	</body>

