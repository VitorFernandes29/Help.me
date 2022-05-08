<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Max-Age: ');
header('Content-Length: 0');
header('Content-Type: text/paint');
$con = mysqli_connect("localhost", "root", "","bd_helpme") or die("could not connect DB");
