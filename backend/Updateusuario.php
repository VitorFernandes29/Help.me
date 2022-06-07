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
$id_usuario = $_GET['id_usuario'];

$q = mysqli_query($con, "UPDATE 'usuario' SET ('nome', 'cpf','nasc', 'genero', 'email', 'senha')
VALUES ('$nome', '$cpf', '$nasc', '$genero', '$email', '$senha') WHERE 'id_usuario' = {$id_usuario} LIMIT 1");

if($q) {
  http_response_code(201);
  $message['status'] = "Success";
}else{
  http_response_code(422);
  $message['status'] = "Erro";
}

echo json_encode($message);
echo mysqli_error($con);
