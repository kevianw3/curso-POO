<?php

class MvcControlador{

    #LLamada a la plantilla
    #------------------------------------------------------

    public function Plantilla(){

        #include(): Se utiliza para invocar el archivo de contiene codigo html.
        include "Vistas/Plantilla.php";

    }

    #Interaccion del usuario
    #-------------------------------------------------------
    public function enlacesPaginasControlador(){

        $enlacesControlador = $_GET["action"];

        $restapuesta = EnlacesPagina:: enlacesPaginasModelos($enlacesControlador);
 
       include $restapuesta;

    }

}


?>