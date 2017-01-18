<!--

Template: Stephane ESCOBAR- Curriculum vitae HTML Theme
Author: archimedia.ws
Version: 1.0 


NOTE: This is working ajax PHP contact form. This PHP form will help you to send email.

-->


<?php
if(isset($_POST["action"])) {
  $name = $_POST['name'];                 // Sender's name
  $email = $_POST['email'];     // Sender's email address
  $phone  = $_POST['phone'];     // Sender's email address
  $message = $_POST['message'];    // Sender's message
  $from = 'Cv en ligne';    
  $to = 'escobarsteph@free.fr';     // Recipient's email address
  $subject = 'Message du formulaire de contact ';

 $body ="From: $name \n E-Mail: $email \n Téléphone: $phone \n Message : $message"  ;
	
	// init error message 
	$errmsg='';
  // Check if name has been entered
  if (!$_POST['name']) {
   $errmsg = 'saisir votre nom';
  }

  
  // Check if email has been entered and is valid
  if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
   $errmsg = 'Please enter a valid email address';
  }
  
  //Check if message has been entered
  if (!$_POST['message']) {
   $errmsg = 'Please enter your message';
  }
 
	$result='';
  // If there are no errors, send the email
  if (!$errmsg) {
		if (mail ($to, $subject, $body, $from)) {
			$result='<div class="alert alert-success">Thank you for contacting us. Your message has been successfully sent. We will contact you very soon!</div>'; 
		} 
		else {
		  $result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later.</div>';
		}
	}
	else{
		$result='<div class="alert alert-danger">'.$errmsg.'</div>';
	}
	echo $result;
 }
?>
