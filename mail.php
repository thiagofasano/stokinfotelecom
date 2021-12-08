<?php

/**
 * PHPMailer simple contact form example.
 * If you want to accept and send uploads in your form, look at the send_file_upload example.
 */

//Import the PHPMailer class into the global namespace
use PHPMailer\PHPMailer\PHPMailer;

require '../PHPMailer/vendor/autoload.php';

if (array_key_exists('to', $_POST)) {
    $err = false;
    $msg = '';
    $email = '';

    //Apply some basic validation and filtering to the name
    if (array_key_exists('nome', $_POST)) {
        //Limit length and strip HTML tags
        $nome = substr(strip_tags($_POST['nome']), 0, 255);
    } else {
        $nome = '';
    }

    
    //Apply some basic validation and filtering to the name
    if (array_key_exists('telefone', $_POST)) {
        //Limit length and strip HTML tags
        $telefone = substr(strip_tags($_POST['telefone']), 0, 255);
    } else {
        $telefone = '';
    }

    //Validate to address
    //Never allow arbitrary input for the 'to' address as it will turn your form into a spam gateway!
    //Substitute appropriate addresses from your own domain, or simply use a single, fixed address
    // if (array_key_exists('to', $_POST) && in_array($_POST['to'], ['sales', 'support', 'accounts'], true)) {
    //     $to = $_POST['to'] . '@example.com';
    // } else {
    //     $to = 'support@example.com';
    // }


    if (!$err) {
        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = 'localhost';
        $mail->Port = 25;
        $mail->CharSet = PHPMailer::CHARSET_UTF8;
        //It's important not to use the submitter's address as the from address as it's forgery,
        //which will cause your messages to fail SPF checks.
        //Use an address in your own domain as the from address, put the submitter's address in a reply-to
        $mail->setFrom('contato@stokinfotelecom.com.br', . $nome));
        $mail->addAddress('contato@stokinfotelecom.com.br');
        $mail->Subject = 'E-mail enviado do Site';
        $mail->Body = "Ajude-me a escolher um plano\n\n" . $nome;
        if (!$mail->send()) {
            $msg .= 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
            $msg .= 'Message sent!';
        }
    }
} ?>