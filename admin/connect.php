<?php
$host = "localhost";
$user = "root";
$password = "root";
$db = "portfolio";

$conn = mysqli_connect($host, $user, $password, $db);

if (!$conn) {
    echo "something broke... connection isn't working";
    exit;
}

//echo "connected!";
//comment ^ out once seeing that it works


//go and get all data from the database
//$myQuery = "SELECT * FROM mainmodel";     //commenting out to isolate query for one item below
//$result = mysqli_query($conn, $myQuery);
//$rows = array ();

//fill the array with the result set and send it to the browser
//while($row = mysqli_fetch_assoc($result)) {
//    $rows[] = $row;
//}

//get one item from database
if (isset($_GET["main"])) {
    //$car = $_GET["modelNo"];

    $myQuery = "SELECT * FROM work_page";

    $result = mysqli_query($conn, $myQuery);
    $rows = array ();

    //fill the array with the result set and send it to the browser
    while($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    //encode the result and send it back
    echo json_encode($rows);
}

function get_single_image($pdo, $vid) {
    $query = "SELECT * FROM work_page WHERE id = $vid";

    $get_image = $pdo->query($query);
    $results = array();

    while($row = $get_image->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;
    }

    return $results; //giving a value back to the calling function
}

//get all videos
function get_all_images($pdo) {
    $query = "SELECT * FROM work_page";

    $get_image = $pdo->query($query);
    $results = array();

    while($row = $get_image->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;
    }

    return $results; 
}















?>