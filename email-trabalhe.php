<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';


$nome = $_POST['nome']; // required
$email = $_POST['email']; // required
$celular = $_POST['celular']; // required
$idade = $_POST['idade']; // required
$estadoCivil = $_POST['estadoCivil']; // required
$endereco = $_POST['endereco']; // required
$bairro = $_POST['bairro']; // required
$cidade = $_POST['cidade']; // required
$uf = $_POST['uf']; // required
$formacao = $_POST['formacao']; // required
$experiencia = $_POST['experiencia']; // required
$area = $_POST['area']; // required
$ip        = $_SERVER['REMOTE_ADDR'];  //hidden
$navegador = $_SERVER['HTTP_USER_AGENT']; //hidden

if ($nome == "" OR $email == "" OR $celular == "" OR $idade == "" OR $estadoCivil == "" OR $endereco == "" OR $bairro == "" OR $cidade == "" OR $uf == "" OR $formacao == "" OR $experiencia == "" OR $area == "" ) {
    http_response_code(400);
    echo "Você precisa preencher todos os campos";
    exit;
}


$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {

    $mail->Host       = "relay-hosting.secureserver.net";
    $mail->Port       = 25;                   
    $mail->SMTPDebug  = 4;
    $mail->SMTPSecure = "none";                 
    $mail->SMTPAuth   = false;
    $mail->Username   = "";
    $mail->Password   = "";

    //Recipients
    $mail->setFrom("naoresponda@stokinfotelecom.com.br", "Site STOK INFO");
    $mail->addAddress('thiagofasano@gmail.com', 'Thiago Fasano');     // Add a recipient


    //Content
    $message = '<h3>O usuário abaixo deseja fazer parte da equipe Stok Info:</h3>';
    $message .= '<p><strong>Nome:</strong> '.$nome.'</p>';
    $message .= '<p><strong>E-mail:</strong> '.$email.'</p>';
    $message .= '<p><strong>Celular:</strong> '.$celular.'</p>';
    $message .= '<p><strong>Idade:</strong> '.$idade.'</p>';
    $message .= '<p><strong>Estado Civil:</strong> '.$estadoCivil.'</p>';
    $message .= '<p><strong>Endereço:</strong> '.$endereco.'</p>';
    $message .= '<p><strong>Bairro:</strong> '.$bairro.'</p>';
    $message .= '<p><strong>Cidade:</strong> '.$cidade.'</p>';
    $message .= '<p><strong>UF:</strong> '.$uf.'</p>';
    $message .= '<p><strong>Formação:</strong> '.$formacao.'</p>';
    $message .= '<p><strong>Experiência:</strong> '.$experiencia.'</p>';
    $message .= '<p><strong>Área de Interesse:</strong> '.$area.'</p>';

    $message .= '<hr/>';
    $message .= '<p> IP: '.$ip.' Navegador: '.$navegador.'</p>';


    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);
    $mail->Subject = 'Trabalhe Conosco';
    $mail->Body    = $message;



    $mail->send();
    echo 'Mensagem Enviada.';
} catch (Exception $e) {
    http_response_code(400);
    echo 'Não foi possível enviar a mensagem. Detalhes: ', $mail->ErrorInfo;
}

?>
