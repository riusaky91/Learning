<?php

    
    $mysqli = @new mysqli('localhost', 'fake_user', 'my_password', 'my_db');

    if ($mysqli->connect_errno) {
        /* Use your preferred error logging method here */
        error_log('Connection error: ' . $mysqli->connect_errno);
    }


?>