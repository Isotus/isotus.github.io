<!DOCTYPE html>
<html lang="en">
<title>Balls</title>
<main>
  <a href="https://www.youtube.com/watch?v=sqpHVk8HzP4&t=28s"><h3>Balls</h3></a>
  <a href="/IsoNews/home"><img src="/photos/image1.gif" /></a>
  <a href="test.php"> Test</a>
  <audio controls autoplay hidden>
    <source src="znome_zuzic.mp3" type="audio/mpeg" />
  </audio>

  <?php
    $dir = "/photos/";
    $array = array();

    $array = $array + scandir($dir);
    print_r ($array)
    ?>
    
</main>
</html>