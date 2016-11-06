<!--get the sites' html files by using php code -->
<!--jobpostingurl is sent from the url by javascript-->

<?php
	//TODO the first part of the URL should be decoded, having '/' and whatnot.
	//the second part of the URL should be encoded, having '%3d' and whatnot.
	//so, I should separate the two parts, and then combine them here...somehow.
	
	
	
	$jobpostingurl = $_GET['jobpostingurl'];//get the job posting url.  
	
	//echo $jobpostingurl;

	/* We don't need to do this if the variable is sent via Ajax.  Sent via href, we do.
	Interesting how Ajax doesn't make the $_GET decode.
	$urlcutoff = strpos($jobpostingurl, "?q=") + 3;//wherever the first php variable assign is, or whatever it's called.  
	$urlpart1 = substr( $jobpostingurl, 0, $urlcutoff );//all the stuff before ?q is left alone.
	$urlpart2 = urlencode( substr( $jobpostingurl, $urlcutoff, strlen($jobpostingurl) ) );//all the stuff after ?q is encoded, to keep %3d and things like that.
	$realurl = $urlpart1 . $urlpart2;//recombine, making the text effectively original, not ENCODED OR DECODED.*/
	
	//echo $realurl;//show me the real url.
	
	//$jobpostinghtml = file_get_contents($realurl);//then get the html from that job posting's url.
	$jobpostinghtml = file_get_contents($jobpostingurl);//then get the html from that job posting's url.

	//Has to be echoed, or else the data won't be grabbed in the Ajax request.
	echo $jobpostinghtml;//$jobpostinghtml;//json_encode( array("htmlresult" => $jobpostinghtml) );
	
?>


