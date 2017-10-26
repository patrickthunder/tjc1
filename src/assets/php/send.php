<?php
// Add if ajax, function to php
function is_ajax()
{
    return isset($_SERVER['HTTP_X_REQUESTED_WITH']) &&  $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest';
}

if (is_ajax()) {
    $name = $_POST['name'];
    $company = $_POST['company'];
    $email = $_POST['email'];
    $textarea = $_POST['textarea'];

    $header = 'From: ' . $email . " \r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $header .=  "Mime-Version: 1.0  \r\n";
    $header .= "Content-Type: text/plain";

    $body = "Name: " . $name . "  \r\n";
    $body .= "Company: " . $company ." \r\n";
    $body .= "Email:" . $email . " \r\n";
    $body .= "Text:" . $textarea . " \r\n";
    $body .= "This request was made on TJC Website";

          // mail to website owner, check if correct email
    $for = "patrickthunder@hotmail.com";
    $subject = "New Message From TJC Website!";

          // mail function to send form
         mail($for, $subject, utf8_encode($body), $header);

         // request to server
         echo json_encode(array(
            'message' => 'Request Sent!',
            'name'   => $name,
         ));
} else {
    die("NO!!!");
}
