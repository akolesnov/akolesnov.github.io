<?php

$method = $_SERVER['REQUEST_METHOD'];

$uploaddir = $_SERVER['DOCUMENT_ROOT'].DIRECTORY_SEPARATOR.'scripts'.DIRECTORY_SEPARATOR;

$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);


// echo $out;

$c = true;

if ( $method === 'POST' ) {

  $project_name = $_POST["project_name"];
  $admin_email  = 'nd@melon-moscow.ru';
  $sender_email = "ArBuzz@melon-moscow.ru";
//	$form_subject = $_POST["form_subject"];
  $form_subject = 'Обратная связь с сайта ArBuzz';


  foreach ( $_POST as $key => $value ) {

    if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {

      $message .= "

			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "

				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>

				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>

			</tr>

			";

    }

  }

} else if ( $method === 'GET' ) {

  $project_name = $_POST["project_name"];
  $admin_email  = 'nd@melon-moscow.ru';
  $sender_email = "ArBuzz@melon-moscow.ru";
//  $form_subject = $_POST["form_subject"];
  $form_subject = 'Обратная связь с сайта ArBuzz';

  foreach ( $_GET as $key => $value ) {

    if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {

      $message .= "

			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "

				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>

				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>

			</tr>

			";

    }

  }

}


require 'phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

$mail->CharSet = 'UTF-8';

$mail->setFrom(	$sender_email, $project_name );

$mail->addAddress( $admin_email );

$mail->Subject = $form_subject;

$mail->msgHTML( "<table style='width: 100%;'>$message</table>" );

// Attach uploaded files


if(!$mail->send()) {

  echo 'Message could not be sent.';

  echo 'Mailer Error: ' . $mail->ErrorInfo;

} else {

  echo 'Сообщение отправлено!';

}

$mail->clearAddresses();

$mail->clearAttachments();

//Delete file

if (file_exists($filename)) {

  unlink($filename);

}