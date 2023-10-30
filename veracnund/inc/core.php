<?php 
	require_once 'function.php';
	if (isset($_POST['action'])) {
		$post = $_POST['action'];
		if ($post == 'posts') {
			getPost();
			///
		}
		else if($post == 'category') {
			getCategory();
			//
		}
		else if($post == 'sponser') {
			getSponser();
			//
		}
		else{
			echo "2";
		}
	}else{
		echo "-_-";
	}



