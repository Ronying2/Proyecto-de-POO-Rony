<?php
require __DIR__.'../vendor/autoload.php';
use Kreait\Firebase\Factory;//espacio de nombre

$firebase = (new Factory) 
            ->withServiceAccount('../key-firebase/usuarios-de-freakerworld-e90d1790f011.json')
            ->withDatabaseUri('https://usuarios-de-freakerworld.firebaseio.com/')
            ->create();

$database = $firebase -> getDatabase();

$newPost = $database
        ->getReference('usuarios')
        ->push([
            'categoria' => 'usuario normal',
            'nombre' => 'Rony',
            'password'  => '"Datos de prueba"',
            'apellido'  => '"Datos de prueba"',
            'correo'  => '"Datos de prueba"',
            'telefono'  => '"Datos de prueba"',
            'numTarjeta'  => '"Datos de prueba"',
            'mesExp'  => '"Datos de prueba"',
            'anioExp'  => '"Datos de prueba"',
            'PIN'  => '"Datos de prueba"',
            'nomTarjeta'  => '"Datos de prueba"',
            'Img'  => '"Datos de prueba"'
        ])
?> 