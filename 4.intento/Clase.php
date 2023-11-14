<?php
    require_once "index.php";

    $Keivna = new Persona("kevian" ,20);
     echo $Keivna->Saludar("Hola soy");
     echo $Keivna->EdadDePersona();

     echo "<br><br>";
    
   $Armando = new Persona("Armando" ,19);
    echo $Armando->Saludar("Mi nombre es");
    echo $Armando->EdadDePersona();

    echo "besos";
