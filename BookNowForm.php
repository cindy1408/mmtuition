<?php

    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['Email'];
    $Subject = $_POST['Subject'];
    $Comments = $_POST['Comments'];

    $email_from = "$email";
    $email_subject = "New Form Submission";
    $email_body = "first Name: $firstName.\n".
                    "last Name: $lastName.\n".
                    "email: $email.\n".
                    "subject: $Subject.\n".
                    "Comments: $Comments.\n".
    
    $to = "cindycheung1408@gmail.com";
    $headers = "From: $email_from\r\n";
    $headers .= "Reply-to: $email\r\n";

    mail($to, $email_subject, $email_body, $headers);

    header("Location: booknow.html");

    ?>