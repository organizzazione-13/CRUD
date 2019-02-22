<?php

$host = '192.168.245.1';
$db_name = 'dbcrud';
$user = 'root';
$passwd = '';


$dbh = new PDO('mysql:host='.$host.';dbname='.$db_name.';', $user, $passwd);