<?php
$json = json_decode(file_get_contents('php://input'), true);
if (empty($json)) {
   exit;
}

$emailTo = "andy@sharpfrog.com";
//$emailTo = "hello@studioteepee.co.uk";

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

$to = $emailTo;
$subject = "Website contact form";

// compose headers
$headers = "From: ".$emailTo."\r\n";
$headers .= "X-Mailer: PHP/".phpversion()."\r\n";
$headers .= "Content-type: text/plain; charset=utf-8";

// compose message
$emailBody = "There has just been a contact form submission.\r\n";
$emailBody .= "\r\n";
$emailBody .= "Name: ".$name."\r\n";
$emailBody .= "Contact details: ".$contact."\r\n";
$emailBody .= "Message: ".$message."\r\n";
$emailBody .= "\r\n";
$emailBody .= "Sent from page: ".$page."\r\n";
$emailBody = wordwrap($emailBody, 70);

// send email
mail($to, $subject, $emailBody, $headers);

echo("form sent: ".$emailBody);
?>
