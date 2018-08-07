<?php 
if(isset($_POST['submit'])){
    $to = "scott.salem5@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Invalid email format"; 
      }
    $first_name = $_POST['first'];
    $last_name = $_POST['last'];
    $subject = $_POST['subject'];
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>