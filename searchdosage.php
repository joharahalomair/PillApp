<?php

$host="localhost";
$username="root";
$password="root";
$databasename="pillapp";

$connect=mysql_connect($host,$username,$password);
$db=mysql_select_db($databasename);

$searchTerm = $_GET['term'];

$select =mysql_query("SELECT DISTINCT strength FROM drug WHERE strength LIKE '".$searchTerm."%' ORDER BY strength ASC");
while ($row=mysql_fetch_array($select)) 
{
 $data[] = $row['strength'];
}
//return json data
echo json_encode($data);
?>
