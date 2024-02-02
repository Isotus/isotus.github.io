<?php
$dir = "/photos/";

$a = scandir($dir);

$arrayLength = count($a);
for($i = 0; $i < $arrayLength; $i++){
  echo "<img src='" . $a[$i] . "'/>";
}
?>