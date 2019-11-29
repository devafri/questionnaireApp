<?php

if(isset($_POST['submit'])){

    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $phonenumber = $_POST['phonenumber'];
    $practicename = $_POST['practicename'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $country  = $_POST['country'];

    $mailTo = "felix@somasketch.com";
    $headers = "From: ".$email;
    $txt = "You have received an email from ".$firstname.".\n\n".$message;

    mail($mailTo, $practicename, $txt, $headers);
    header("Location: index.php?mailsend");
}

?>
