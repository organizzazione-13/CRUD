<?php

require 'config.php';

$redditi = [
    1 => 'basso',
    2 => 'medio',
    3 => 'alto',
    4 => 'altissimo'
];
$sessi = [
    'M' => 'uomo',
    'F' => 'donna'
];

$sth = $dbh->query("SELECT * FROM tblpersone;");
$records = $sth->fetchAll(PDO::FETCH_ASSOC);

$objArray = [];

foreach($records as $record) {
    $objArray[] = [
        'nome' => $record['Nome'],
        'cognome' => $record['Cognome'],
        'nascita' => date_format(date_create_from_format('Ymd', str_pad($record['DataNascita'],8,"0", STR_PAD_LEFT)), 'd/m/Y'),
        'reddito' => $redditi[$record['Reddito']],
        'sesso' => $sessi[$record['Sesso']],

    ];
}

echo json_encode($objArray);