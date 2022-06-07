<?php
include "config.php";
$input = file_get_contents('php://input');

$message = array();

$id_usuario = $_GET['id_usuario'];
$q = mysqli_query($con, "DELETE * FROM 'usuario' WHERE 'id_usuario' = $id_usuario LIMIT 1");

if($q) {
  http_response_code(201);
  $message['status'] = "Success";
}else{
  http_response_code(422);
  $message['status'] = "Erro";
}

echo json_encode($message);
echo mysqli_error($con);
