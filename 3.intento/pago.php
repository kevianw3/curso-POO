<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilos.css">
    <title>Pago de empleado</title>
</head>
<body>
    <header>
        <h1 id="centrado"> VENTA DE CHUCHERIA </h1>
    </header>

    <section>
    <table align="center">
        <form action="pago.php" method="post">

        <tr>
            <td width="200" >CHUCHERIA</td>
            <td><input type="text" name="txtChucheria" id="" size="40"></td>
        </tr>

        <tr>
            <td width="200" >Cantidad de chucheria</td>
            <td><input type="text" name="txtCantidad" id=""> </td>
        </tr>

        <tr>
            <td width="200" >Precio de la chucheria</td>
            <td><input type="text" name="txtTarifas" id=""> </td>
        </tr>

        <tr>
            <td width="200" ></td>
            <td><input type="submit" value="Procesar"> </td>
            <td><input type="reset" value="Limpiar"> </td>
        </tr>


<!-- codigo phph -->
<?php
error_reporting(0);
$chucheria = $_POST['txtChucheria'];
$horas = $_POST['txtCantidad'];
$tarifas = $_POST['txtTarifas'];

// inicializo variABLE

$TotalCucheria = 0.00;

// Realizar los calculos

$TotalCucheria = $horas * $tarifas;
$descuentoSeguroSalud = $TotalCucheria * 0.12;
$descuentoAfp = $TotalCucheria *0.10;
$salarioNeto = $salatioBruto - $descuentoSeguroSalud - $descuentoAfp;

?>


<tr>
    <td>chucheria</td>
    <td> <?php echo $chucheria; ?> </td>
</tr>

<tr>
    <td>Cantidad</td>
    <td><?php echo $horas; ?></td>
   
</tr>

<tr>
    <td>Precio unitario</td>
    <td><?php echo "$" . number_format($tarifas, 2); ?></td>
</tr>

<tr>
    <td>Total</td>
    <!--td><?php //echo "$" . number_format($TotalCucheria, 2); ?></td-->
    <td><?php echo $$TotalCucheria = $horas * $tarifas; ?></td>
</tr>

<tr>
    <td>Descuento salud</td>
    <td><?php echo "$" . number_format($descuentoSeguroSalud, 2); ?></td>
</tr>
<tr>
    <td>Descuento AFP</td>
    <td><?php echo "$" . number_format($descuentoAfp, 2); ?></td>
</tr>
<tr>
    <td>Salario Neto</td>
    <td><?php echo "$" . number_format($salarioNeto, 2); ?></td>
</tr>

        </form>

    </table>

    </section>
    <footer>
        <h6 id="centrado"> Derecho reservado ING.Kevian </h6>
    </footer>
</body>
</html>
