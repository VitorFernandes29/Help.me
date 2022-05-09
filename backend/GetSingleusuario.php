<?php
include "config.php";
$data = array();
$id_usuario = $_GET['id_usuario'];

$q = mysqli_query($con, "SELECT * FROM 'usuario' WHERE 'id_usuario' = $id_usuario LIMIT 1");

while ($row = mysqli_fetch_object($q)){
  $data[] = $row;
}

echo json_encode($data);
echo mysqli_error($con);
