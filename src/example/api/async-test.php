<?php

	sleep(1);
	echo json_encode(array(
		"value" => $_POST['value'] ,
		"isValid" => $_POST['value'] === '123' ? true : false
	));