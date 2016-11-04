<!--get the sites' html files by using php code -->
<!--jobpostingurl is sent from the url by javascript-->

<?php
	
	//$jobpostingurl = urlencode($_GET['jobpostingurl']);//get the job posting url.
	$jobpostingurl = $_GET['jobpostingurl'];//get the job posting url.
	//we use urlencode to prevent '%3d' to changing into '='
	
	$jobpostinghtml = file_get_contents($jobpostingurl);//then get the html from that job posting's url.

	echo $jobpostingurl;
	echo $jobpostinghtml;//$jobpostinghtml;//json_encode( array("htmlresult" => $jobpostinghtml) );
	
?>


