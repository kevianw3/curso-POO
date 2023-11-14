<?php
#Clase:
#Una clase es un modelo que se utiliza para crear objetos que comparten un mismo conportamiendo, mismo estado e identidad.

class Automovil{
#PROPIEDADES
#Son las caracteristicas que pueden tener un objeto.

public $marca;
public $modelo;


#Metodo:

#Es el algoritmo asociado a un objeto que indica la capacidad de lo que esta puede hacer. La unica diferencia entre metodo y funcion, es que llamamos metodo a las funciones de una clase (en la POO), mientras que llamamos funcion,  a los algoritmos de la programacion estructurada.

public function mostrar(){
    echo"<p>Hola soy un $this->marca, modelo $this->modelo </p>";

    }
}

#objeto
#Es una entidad provista de metodo o mensaje a los cuales responde, propiedad con valores concretos.

$a = new Automovil();
$a -> marca = "toyota";
$a -> modelo = "corolla";
$a -> mostrar();

$b = new Automovil();
$b -> marca = "ford";
$b -> modelo = "focus";
$b -> mostrar();

#Principios de las POO que se cumplen en este ejemplo:
#ABSTRACCION: Nevos tipos de datos (el que tu quieras, tu lo creas)
#ENCAPSULACION: Organizar el codigo en grupos logicos
#OCULTAMIENTO: Ocualtar dealles de implementacion y exponer solo los detalles que sean necesarios para el resto del sistema

?>