<?php 

    class Persona{

        public $nombre= "kevian";
        public  $edad= 20;

        public function __construct($nombre,$edad){
            echo "Metodo construtor";
            $this->nombre=$nombre;
            $this->edad=$edad;
  
        }

        public function Saludar($texto){

            return $texto.$this->nombre ."\n";
        
        }

        public function EdadDePersona(){
            return  " \n y tengo $this->edad años";

        }

    }

    $Keivna = new Persona("kevian" ,20);
     echo $Keivna->Saludar("Hola soy");
     echo $Keivna->EdadDePersona();

     echo "<br><br>";
    
   $Armando = new Persona("Armando" ,19);
    echo $Armando->Saludar("Mi nombre es");
    echo $Armando->EdadDePersona();

    echo "besos";