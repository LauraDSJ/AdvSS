<?php
// declare variables
$Name = $_POST['name'];
$Email = $_POST['email'];
$Message = $_POST['message'];

$EmailTo = "lauras@advancio.com";
$Subject = "Contact Advancio.com";
$header = "MIME-Version: 1.0\r\n"; 
$header = "Content-type: text/html; charset=iso-8859-1\r\n"; 
$header = "From: $Email \r\n";

// prepare email body text
$Body = "";
$Body .= "Thi person want to contact us: ";
$Body .= "\n";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";
$Body .= "Have a great day!";

// send email 
$success = mail($EmailTo,$Subject,$Body,$header);

if ($success){
	print "<script type='text/javascript'>alert('Tu mensaje se ha enviado exitosamente!')</script>";
    header("location:javascript://history.go(-1)");
}
else{
  print "<script type='text/javascript'>alert('El mensaje ha fallado, porfavor, intenta comunicarte por otro medio.')</script>";
    header("location:javascript://history.go(-1)");
}

?>