<!DOCTYPE html>
<title>IsoNews</title>
<html lang="en">
  <head>

  </head>

  <body>
    <?php
    $dir = "/photos/";
    $array = array();

    $array = $array + scandir($dir);
    print_r ($array)
    ?>
    
  </body>
</html>
