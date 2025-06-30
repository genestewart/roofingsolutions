<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email = htmlspecialchars(trim($_POST['email'] ?? ''));
    $phone = htmlspecialchars(trim($_POST['phone'] ?? ''));
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));

    $to = 'info@example.com';
    $subject = 'New Contact Form Submission';
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message\n";
    @mail($to, $subject, $body);

    $response = "Thank you for contacting us. We'll get back to you soon.";
} else {
    $response = 'Invalid request.';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submission</title>
    <link rel="stylesheet" href="CSS/styles.css">
</head>
<body>
  <header>
    <div class="logo">
      <img src="images/logo5.png" alt="Roofing Solutions & Consulting Logo">
    </div>
  </header>
  <main class="content">
    <h1><?php echo $response; ?></h1>
    <p><a href="index.html">Return to Home</a></p>
  </main>
</body>
</html>
