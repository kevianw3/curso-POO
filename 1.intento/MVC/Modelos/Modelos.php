<?php

class EnlacesPagina{

    public static function enlacesPaginasModelos($enlacesModelo){

     if($enlacesModelo == "Inicio"||
        $enlacesModelo == "Nosotros"||
        $enlacesModelo == "Servicios"||
        $enlacesModelo == "Contactanos"){

             $module = "Vista/Modulos/".$enlacesModelo.".php";
        }
        
         return $module;
    }
}

?>