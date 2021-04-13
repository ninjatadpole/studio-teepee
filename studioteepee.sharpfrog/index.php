<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$json = json_decode(file_get_contents('php://input'), true);
if (empty($json)) {
   exit;
}

require '/home/sharpfrog_com/PHPMailer/src/Exception.php';
require '/home/sharpfrog_com/PHPMailer/src/PHPMailer.php';
require '/home/sharpfrog_com/PHPMailer/src/SMTP.php';

// $emailTo = "_aquin@yahoo.co.uk";
$emailTo = "hello@studioteepee.co.uk";
$emailFrom = "contact@studioteepee.sharpfrog.com";

$contact = "";
$name = "";
$message = "";
$page = "";

if (isset($json["contact"])) {
  $contact = preg_replace("([\r\n])", "", trim($json["contact"]));
}
if (isset($json["name"])) {
  $name = preg_replace("([\r\n])", "", trim($json["name"]));
}
if (isset($json["message"])) {
  $message = preg_replace("([\r\n])", "", trim($json["message"]));
}
if (isset($json["page"])) {
  $page = preg_replace("([\r\n])", "", trim($json["page"]));
}

$find = "/(content-type|bcc:|cc:)/i";
if (preg_match($find, join('|', [$name, $contact, $message, $page]))) {
   echo "";
   exit;
}

if ($name == "") {
  $name = "[No name]";
}
if ($contact == "") {
  $contact = "[No contact details]";
}
if ($message == "") {
  $message = "[No message]";
}
if ($page == "") {
  $page = "[No page]";
}

$mail = new PHPMailer(true);
try {
  $mail->SMTPDebug = 0; // 2 enables verbose debug output
  $mail->isSMTP();
  $mail->Host = 'smtp.dreamhost.com';
  $mail->SMTPAuth = true;
  $mail->Username = 'contact@studioteepee.sharpfrog.com';
  $mail->Password = 'se983unu9f8yq3873wavw3913ji';
  $mail->SMTPSecure = 'ssl';
  $mail->Port = 465;

  $mail->setFrom('contact@studioteepee.co.uk', 'teepee contact form');
  $mail->addAddress($emailTo);

  // compose message
  $emailBody = "There has just been a contact form submission.\r\n";
  $emailBody .= "\r\n";
  $emailBody .= "Name: ".$name."\r\n";
  $emailBody .= "Contact details: ".$contact."\r\n";
  $emailBody .= "Message: ".$message."\r\n";
  $emailBody .= "\r\n";
  $emailBody .= "Sent from page: ".$page."\r\n";
  $emailBody = wordwrap($emailBody, 70);

  $mail->isHTML(false);
  $mail->Subject = 'teepee website contact form';
  $mail->Body    = $emailBody;

  $mail->send();
  echo("form sent from ".$emailFrom." to ".$emailTo.": ".$emailBody);
} catch (Exception $e) {
  http_response_code(500);
  echo 'Message could not be sent.';
  echo("From ".$emailFrom." to ".$emailTo.": ".$emailBody);
  echo 'Mailer Error: ' . $mail->ErrorInfo;
}

?>
