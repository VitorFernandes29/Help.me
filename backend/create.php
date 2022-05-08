<?php
include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
$Nome = $data['Nome'];
$CPF = $data['CPF'];
$Interesse = $data['Interesse'];
$Senha = $data['Senha'];
$Email = $data['Email'];
$Nasc = $data['Nasc'];
$Genero = $data['Genero'];

$q = mysqli_query($con, "INSERT INTO 'usuario' ('Nome', 'CPF','Nasc', 'Genero', 'Email', 'Senha')
                          VALUES ('$Nome', '$CPF', '$Nasc', '$Genero', '$Email', '$Senha')");

if($q) {
  http_response_code(201);
  $message['status'] = "Successo";
}else{
  http_response_code(422);
  $message['status'] = "Erro";
}

echo json_encode($message);
echo mysqli_error($con);
