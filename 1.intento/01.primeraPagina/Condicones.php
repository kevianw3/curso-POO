<?php
#condiciones
$a =5;
$b =15;

if($a >$b){

    echo"a es es mayor que b";
}

elseif($a == $b){

    echo" a es igual a b";
}

else{

    echo" a es menor que b";
}
echo"<br><br>";

#Suiches
$dia ="jueves";

switch($dia){

    case 'sabado': 
        echo" voy a estudiar PHP";
        break;

    case 'jueves': 
        echo" voy a salir";
        break;  


    case 'domingo': 
        echo" a dormir";
        break;



    case 'vienes': 
        echo" a tomar";
        break;

default: echo"ir a estudiar";
   
}
echo"<br><br>";

#ciclo

$n =1;

while($n <=5){
    echo $n;
    $n++;
    

}
echo"<br><br>";


#ciclo  do while

$p =1;

do{
    echo $p;
    $p++;
    
}
while($p <=5);
echo"<br><br>";

#ciclo for

for($i =0; $i <=5; $i++){

    echo $i;


}



?>