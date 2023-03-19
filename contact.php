<?php

// Set the recipient email address
$to = "asharibarain4@gmail.com";

// Get the form data
$name = $_POST["Name"];
$subject = $_POST["Subject"];
$message = $_POST["Message"];

// Set the email headers
$headers = "From: " . $name . "\r\n";
$headers .= "Reply-To: " . $subject . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Send the email
mail($to, "New message from website contact form", $message, $headers);

// Redirect the user to a thank you page
header("Location: imp.html");

?>
