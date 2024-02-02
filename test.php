<?php
$dir = "/photos/";

$a = scandir($dir);

$arrayLength = count($a);
$i = 0
for($i = 0; $i < $arrayLength; $i++){
  print_r ("<img scr='"+$a[$i]+"'/>");
}

?>
