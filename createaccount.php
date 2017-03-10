<?php
include "head.php";
require("connectiondatabase.php");
?>
	<body>
		<div class="container">
			<div class="row main">
				<div class="logo">
					<img class="logo" src="assets/pillboxLogosmall.png">
				</div>
				<div class ="panel-heading">
					<div class="panel-title text-center">
						<h1 class="title">PillBox</h1>
						<hr />
					</div>
				</div>
				<div class="main-login main-center">
					<form class="form-signup" action="processcreateaccount.php">
				        <h2 class="form-signup-heading">Create Account</h2>
					<label for="inputEmail" class="sr-only">Email address</label>
				        <input name="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
					<label for="inputPhoneNumber" class="sr-only">Phone Number</label>
				        <input name="phone" type="phonenumber" id="inputPhoneNumber" class="form-control" placeholder="Phone Number" required autofocus>
				        <label for="inputPassword" class="sr-only">Password</label>
				        <input name="password" type="password" id="inputPassword" class="form-control" placeholder="PIN" required>
				        <label for="inputPassword" class="sr-only">Confirm Password</label>
				        <input name="confirmpassword" type="confirmpassword" id="inputPassword" class="form-control" placeholder="Confirm PIN" required>
				        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
				     </form>

				</div>
			</div>
		</div>
	</body>
</html>
