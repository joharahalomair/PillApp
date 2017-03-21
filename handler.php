<html>
<?php
    require("../connectiondatabase.php");
    require_once "vendor/autoload.php";
    use Twilio\Rest\Client;

    // Our AccountSid and AuthToken from https://twilio.com/console
    $AccountSid = "AC0b28942e8ade5ff45d594806cff2ed93";
    $AuthToken = "5d437f50ddfafcda34dfde031d461309";

    // Twilio REST client instantiation
    $client = new Client($AccountSid, $AuthToken);

    // util to push onto an associative array
    function arr_push_assoc(&$arr, $key, $value){
      $arr[$key] = $value;
      return $array;
    }

    // Populate array "users" from db
    $create="SELECT user_id, phone FROM user";
    $action_create=mysql_query($create, $CONNEXION);

    $users = array();
    while( $row = mysql_fetch_assoc( $action_create ) ){
      $users = arr_push_assoc($users, $row['user_id'], $row['phone']);
    }

    // Loop over $users to send texts here
    foreach ($users as $user => $number) {

        $sms = $client->account->messages->create(
            $number,
            array(
                // Our Twilio number
                'from' => "+19492390488",

                // SMS body
                // TODO: pull from medications table here to specify
                'body' => "Hi $user, It is time to take your medicine!"
            )
        );

        // Sanity check here
        echo "Sent message to $name";
    }
?>
</html>
