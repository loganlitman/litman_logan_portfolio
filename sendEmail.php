<?php

function send_email(){

if(empty($_POST['name'])
   || empty($_POST['email'])
   || empty($_POST['message'])){

        //echo 'You are missing some required fields!';
        header('Location: oops.html');
        exit;
    }

$to = "logan@loganlitman.com";
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$formcontent = "From: $name \n Subject: $subject \n Message: $message";
$subject = "Portfolio Contact Form";
$mailheader = "From: $email \r\n";

mail($to, $subject, $formcontent, $mailheader);

header('Location: sent.html');
exit;
}

send_email();
?>