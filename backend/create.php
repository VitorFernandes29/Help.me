<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
$nome = $data['nome'];
$cpf = $data['cpf'];
$interesse = $data['interesse'];
$senha = $data['senha'];
$email = $data['email'];
$nasc = $data['nasc'];
$genero = $data['genero'];

$q = mysqli_query($con, "INSERT INTO 'usuario' ('nome', 'cpf','nasc', 'genero', 'email', 'senha')
                          VALUES ('$nome', '$cpf', '$nasc', '$genero', '$email', '$senha')");

if($q) {
  http_response_code(201);
  $message['status'] = "Sucess";
}else{
  http_response_code(422);
  $message['status'] = "Erro";
}

echo json_encode($message);
echo mysqli_error($con);
