<!DOCTYPE html>
<title>IsoNews</title>
<html lang="en">

    <?php
    function Myarray() {
    $dir = "/photos/";
    $array = array();

    $array = $array + scandir($dir);
    print_r ($array);
    }

    ?>

</html>
