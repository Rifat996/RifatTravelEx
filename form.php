<?php
if(isset($_POST['email'])) {
    $name = $_POST['name'];
    $user_email = $_POST['email'];
    $comments = $_POST['comments'];

    $email_body = "Name: ".$name."\n\nEmail: ".$user_email."\n\nComments:\n".$comments;

    require 'vendor/autoload.php';

    $email = new \SendGrid\Mail\Mail();
    $email->setFrom("bilcevicrifat@gmail.com", "Rifat");
    $email->setSubject("New Form submission");
    $email->addTo("bilcevicrifat@gmail.com", "Rifat Bilcevic"); 
    $email->addContent("text/plain", $email_body);

    $apiKey = 'MyAPI key';
    $sg = new \SendGrid($apiKey);

    try {
        $response = $sg->send($email);
        echo "Thank you for your submission!";
    } catch (Exception $e) {
        echo 'Caught exception: ',  $e->getMessage(), "\n";
    }
}
?>
