<html>
	<?php
		$SERVEUR="localhost"; 
		$LOGIN="root"; 
		$MDP="root";
		$MABASE="pillapp";
		$CONNEXION=mysql_connect($SERVEUR,$LOGIN,$MDP);
		mysql_select_db($MABASE);
		//mysql_query("SET NAMES UTF8");
	?>
</html>