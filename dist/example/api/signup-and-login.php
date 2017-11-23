<?php

	$rand = rand(1,4);

	if ( $rand === 1 ) {
		echo json_encode(array(
			"username" => "sammysaglam" ,
			"first"    => "Sammy" ,
			"last"     => "Saglam"
		));
	} else {
		echo json_encode(null);
	}