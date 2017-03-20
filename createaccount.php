<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="bootstrap-3.3.7-dist/css/bootstrap.css">
		<link rel="stylesheet" type="text/css" href="stylesheet.css">
	</head>
	<body>
	<?php
		session_start();
		session_destroy();
	?>
		<div class="container col-sm-12">
			<div class="row main col-sm-12">
				<div class="logo">
					<img class="logo" src="assets/pillboxLogosmall.png">
				</div>
				<div class ="panel-heading">
					<div class="panel-title text-center">
						<h1 class="title">PillBox</h1>
						<hr />
					</div>
				</div>
				<div class="main-login main-center col-sm-12">
					<form method= "post" class="form-signup" action="processcreateaccount.php">
				        <h2 class="form-signup-heading">Create Account</h2>
					<label for="inputEmail" class="sr-only">Email address</label>
				        <input name="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
					<label for="inputPhoneNumber" class="sr-only">Phone Number</label>
				        <input name="phone" type="phonenumber" id="inputPhoneNumber" class="form-control" placeholder="Phone Number" required autofocus>
				        <label for="inputPassword" class="sr-only">Password</label>
				        <input name="password" type="password" id="inputPassword" class="form-control" placeholder="PIN" required>
				        <label for="inputPassword" class="sr-only">Confirm Password</label>
				        <input name="confirmpassword" type="password" id="inputPassword" class="form-control" placeholder="Confirm PIN" required>
				        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
				     </form>

				</div>
			</div>
		</div>
	</body>
</html>
