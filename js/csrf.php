<?php
// Generate a CSRF token
echo 'window._CSRF = "'. uniqid('', true) .'";';
