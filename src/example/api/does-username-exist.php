<?php

	define('ERROR_USERNAMETAKEN',2);

	echo json_encode(array(
		"value" => $_POST['value'] ,
		"isValid" => $_POST['value'] !== 'aa' ? true : ERROR_USERNAMETAKEN
	));