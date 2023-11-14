<?php

#EL INDEX: En el mostraremos la salida de las vistas al usuario y tambien a traves de el enviaremos acciones que el usuario envie al controlador.

#require() Establese que el codigo del archivo invocado es requerido, es decir, obligatorio para el funcionamiento del programa. Por ello, si el archivo especificado en la funcion require() no se enncuentra saltara un error "PHP fatal erros" y el programa PHP se detendra.

#La version require_once(): Funcionan de la misma forma que sus respectivo, salvo que, al utilizar la version_once, se impide la carga de un mismo archivo mas de una vez

#Si requerimos el mismo codigo mas de una vez corremos el riesgo de redeclaraciones de variable, fuinviones o clase.

require_once "Controladores/Controlador.php";
require_once "Modelos/Modelos.php";

$mvc = new MvcControlador();
$mvc -> Plantilla();

?>