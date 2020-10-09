<?php 
	function connectDd()
	{
		$host = 'localhost';
		$user = 'root';
		$pass = 'root';
		$db   = 'blog';
		$con  = mysqli_connect($host, $user,$pass,$db);
		mysqli_set_charset($con, 'utf8');
		if (!$con) {
			die('Error '.mysqli_connect_error());
		}else{
			return $con;
		}
	}
	function getPost()
	{
		$conn = connectDd();
		$sql  = 'SELECT * FROM `news`';
		$query = mysqli_query($conn, $sql);

		if (mysqli_num_rows($query) > 0) {
			$out = array();
			while ($row = mysqli_fetch_assoc($query)) {
				$out[ $row['id']] = $row;
			}
			echo json_encode($out);
		}
	}
	function getCategory()
	{
		$conn = connectDd();
		$sql  = 'SELECT * FROM `category`';
		$query = mysqli_query($conn, $sql);

		if (mysqli_num_rows($query) > 0) {
			$out = array();
			while ($row = mysqli_fetch_assoc($query)) {
				$out[ $row['id']] = $row;
			}
			echo json_encode($out);
		}
	}
	function getSponser()
	{
		$conn = connectDd();
		$sql  = 'SELECT * FROM `sponser`';
		$query = mysqli_query($conn, $sql);

		if (mysqli_num_rows($query) > 0) {
			$out = array();
			while ($row = mysqli_fetch_assoc($query)) {
				$out[ $row['id']] = $row;
			}
			echo json_encode($out);
		}
	}

	function updatePost()
	{
		# code...
	}