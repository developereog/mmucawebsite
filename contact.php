<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Email configuration
    $to = "otienoemmanuel683@gmail.com";
    $subject = "Message from School Management System";
    $body = "Name: $name\nEmail: $email\n\n$message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
}
?>
