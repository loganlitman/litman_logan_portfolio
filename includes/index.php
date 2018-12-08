<?php

    include 'connect.php';

    // single movie route FOR PORTFOLIO CHANGE NAMES OF THESE ID'S - WERE MAKING THE REQUEST
    if (isset($_GET["image"])) {
        $data = get_single_image($conn, $_GET["image"]);
        echo json_encode($data);
    } else {
        $data = get_all_images($conn);
        echo json_encode($data);
    }

?>