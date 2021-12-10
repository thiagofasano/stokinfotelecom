<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';


$nome = $_POST['nome']; // required
$telefone = $_POST['telefone']; // required
$ip        = $_SERVER['REMOTE_ADDR'];  //hidden
$navegador = $_SERVER['HTTP_USER_AGENT']; //hidden

if ($nome == "" OR $telefone == "") {
    http_response_code(400);
    echo "Você precisa preencher o nome e telefone.";
    exit;
}


$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    // $mail->SMTPDebug = 4;                                 // Enable verbose debug output
    // $mail->isSMTP();                                      // Set mailer to use SMTP
    // $mail->Host = 'smtpout.secureserver.net';  // Specify main and backup SMTP servers
    // $mail->SMTPAuth = true;                               // Enable SMTP authentication
    // $mail->Username = 'mensageiro@stokinfotelecom.com.br';                 // SMTP username
    // $mail->Password = '123qwe';                           // SMTP password
    // $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    // $mail->Port = 465;                                    // TCP port to connect to

    //$mail->SMTPDebug = 4;                                 // Enable verbose debug output
    $mail->Host       = "relay-hosting.secureserver.net";
    $mail->Port       = 25;                   
    $mail->SMTPDebug  = 4;
    $mail->SMTPSecure = "none";                 
    $mail->SMTPAuth   = false;
    $mail->Username   = "";
    $mail->Password   = "";

    //Recipients
    $mail->setFrom("naoresponda@stokinfotelecom.com.br", "Site STOK INFO");
    $mail->addAddress('igorcruz@stokinfotelecom.com.br', 'Igor Cruz');     // Add a recipient


    //Content
    $message = '<h3>O usuário abaixo solicitou ajuda para escolher o melhor plano, entre em contato através dos dados abaixo para realizar a nova assinatura. </h3>';
    $message .= '<p><strong>Nome:</strong> '.$nome.'</p>';
    $message .= '<p><strong>Telefone:</strong> '.$telefone.'</p>';

    $message .= '<hr/>';
    $message .= '<p> IP: '.$ip.' Navegador: '.$navegador.'</p>';


    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);
    $mail->Subject = 'Me ajude a escolher o melhor plano';
    $mail->Body    = $message;



    $mail->send();
    echo 'Mensagem Enviada.';
} catch (Exception $e) {
    http_response_code(400);
    echo 'Não foi possível enviar a mensagem. Detalhes: ', $mail->ErrorInfo;
}

?>
