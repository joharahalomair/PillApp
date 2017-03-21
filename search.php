<?php

$host="localhost";
$username="root";
$password="root";
$databasename="pillapp";

$connect=mysql_connect($host,$username,$password);
$db=mysql_select_db($databasename);

$searchTerm = $_GET['term'];

$select =mysql_query("SELECT DISTINCT name FROM drug WHERE name LIKE '".$searchTerm."%' ORDER BY name ASC");
while ($row=mysql_fetch_array($select)) 
{
 $data[] = $row['name'];
}
//return json data
echo json_encode($data);
?>
