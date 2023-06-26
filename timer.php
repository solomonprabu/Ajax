<?php
    $targetTime = strtotime('2023-06-28 00:00:00');
    $currentTime = time();
    $remainingTime = $targetTime - $currentTime;

    $hours = floor($remainingTime / 3600);
    $minutes = floor(($remainingTime % 3600) /60);
    $seconds = $remainingTime % 60;

    $timestring = sprintf("%02d:%02d:%02d",$hours, $minutes, $seconds);
    echo $timestring;
?>