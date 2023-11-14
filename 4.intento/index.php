<?php 

    class Persona{

        public $nombre= "kevian";
        public  $edad= 20;

        public function __construct($nombre,$edad){
            echo "Metodo construtor";
            $this->nombre=$nombre;
            $this->edad=$edad;
  
        }

        public function Saludar(){

            return "Hola soy $this->nombre \n";
        
        }

        public function EdadDePersona(){
            return  " \n y tengo $this->edad años";

        }

    }

    $Keivna = new Persona("kevian" ,20);
   # echo $Keivna->Saludar() ;
   # echo $Keivna->EdadDePersona();
    
   $Armando = new Persona("Armando" ,20);
   