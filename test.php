<?php
$dir = "/photos/";
$array = array();

$array = $array + scandir($dir);
print_r ($array)
?>
