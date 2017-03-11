<?php
session_start();
include "head.php";
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
				   $checkEmail="	SELECT email, password 
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
					$_SESSION['userid']=$data['userid'];
			
				}
				else
				{
					
				}					
			  
			?>   
				   
				   
				   
		</header>
	
	
     <?php
	 mysql_close($CONNEXION);  
    }?>
	</body>

