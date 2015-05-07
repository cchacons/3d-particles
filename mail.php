<?php

$to = 'info@deepknowledgeventures.com';

$fio = addslashes($_POST['name']);
$mail = addslashes($_POST['mail']);
$text = addslashes($_POST['msg']);

$fio = strip_tags($fio);
$mail = strip_tags($mail);
$text = strip_tags($text);

$fio = htmlspecialchars($fio);
$mail = htmlspecialchars($mail);
$text = htmlspecialchars($text);

$subject = "Message From: $fio";
$from = "msg";

$message = "
Name: $fio
E-mail: $mail
Message: $text
";

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= "Content-type: text/plain; charset=\"utf-8\"" . "\r\n";

// Дополнительные заголовки
// $headers .= 'To: Info <' . $to . '>' . "\r\n";
$headers .= 'From: DKV Website Contact Form <' . $mail . '>' . "\r\n";

mail($to, $subject, $message, $headers);
header("Location: /#sent");
?>