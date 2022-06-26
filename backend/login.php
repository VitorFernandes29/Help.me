
<?php 

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, X-Requested-With, Accept, Authorization');
header('Access-Control-Allow-Headers: *');


$con = new mysqli('localhost','root','','helpme');

if($_SERVER['REQUEST_METHOD'] === 'GET'){
    // iNFORMAÇÕES DO BANCO

    if(isset($_GET['email']) &&  isset($_GET['senha'])){

        $email = $_GET['email'];
        $senha = $_GET['senha'];
        $sql = $con->query("select * from usuario where email='$email' and senha = '$senha'");
        $data = $sql->fetch_assoc();

        exit(json_encode(array('status' => 'Sucesso')));
    }else{
            //usuario não encontrado
        }
}

    