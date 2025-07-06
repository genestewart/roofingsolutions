<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require "vendor/autoload.php";

$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];

$mail = new PHPMailer(true);

$mail->SMTPDebug = SMTP::DEBUG_SERVER;
$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
$mail->Port = 587;

$mail->Username = "example@gmail.com";
$mail->Password = "password";

$mail->setFrom('example@gmail.com', 'Mailer');
$mail->addAddress('example@gmail.com', 'name');

$mail->Subject = 'New Contact Form Submission';
$mail->Body = 'Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message\n';

$mail->send();

echo 'email sent';