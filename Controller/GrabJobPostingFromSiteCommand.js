//grab the job posting data from a site.//After the list of sites has been grabbed, grab data from each site.
//Each site has a list of data to grab, such as position number.
//these functions will grab them.
//http://stackoverflow.com/questions/8501127/using-jquery-to-get-the-html-from-another-website-possible-legal



//I'm assuming that jquery stuff can work here.

//npm json-server
//json-server --watch db.json

//can use node somecode.js too, apparently.

//There is no real need for a node command currently.


function GrabJobPostingFromSiteCommand( master )
{//get a list of job posting urls, and with each one, generate job postings and cover letters.

	this.master = master;

	
	//http://stackoverflow.com/questions/18938180/how-to-get-the-html-of-a-div-on-another-page-with-jquery-ajax
	//site above helps with how to load a page in jquery.
	
	
	
	
	
	
			
				

}

GrabJobPostingFromSiteCommand.prototype.execute = function()
{

	//console.log("generateJobPostingsBySites");

	for (var urlcounter = 0; urlcounter < master.url_list.length; urlcounter++)
	{
		var jobpostingurl = master.url_list[urlcounter];//grab each url individually, to grab data from.
		var mymaster = this.master;//store a copy to put into the ajax call.
		//when ajax calls, 'this' becomes the ajax request.
		
		console.log("Job posting url in generateJobPostingBySites is " + jobpostingurl);
		
		//$.post( "Controller/getSiteHTML.php", { 'jobpostingurl': jobpostingurl });
		//window.location.href = "Controller/getSiteHTML.php/?jobpostingurl=" + jobpostingurl;//put url into the .php file to grab it.
		
		
		$.ajax
		(//ajax call to put url data into php command.		
			{
				type: 'GET',	//type of request, ex. GET, POST, DELETE, PATCH, PUT
				url: 'Controller/getSiteHTML.php',	//link to do stuff.
				data: {'jobpostingurl': jobpostingurl},	//data, sending this from js to php.
				success: function( data )
				{
					console.log("Ajax successful. " + data);
					
					var jobpostingdata = 
					{//job posting data to do stuff with.	
							department 			: " ",//if newjobposting does not have an instance of the variable, just use ours.
							attention_to 		: " ",
							p_o_box 			: " ",
							location 			: " ",
							position_number		: " ",
							working_title 		: " ",
							desirable_talents 	: " ",
							required_documents 	: " ",

							//personal data not gotten from the document, such as the user's name.
							my_name 			: mymaster.name,

							my_url 				: jobpostingurl//URL MUST BE UNIQUE, to be able to lookup in the container.
						
					};
					
					//put the data in the variable.
					//Online applications are more difficult, since some of the key words don't exist in the document.

					jobpostingdata.job_control_code =  $(data).find('#lblHeaderJobControlCode').html(); 
					jobpostingdata.working_title =  $(data).find('#lblWorkingTitle').html(); 
					jobpostingdata.job_classification =  $(data).find('#lblPrimaryClassification').html(); 
					jobpostingdata.department =  $(data).find('#lblPostalDepartment').html(); 
					jobpostingdata.attention_to =  $(data).find('#lblPostalAttention').html(); 
					jobpostingdata.p_o_box =  $(data).find('#lblPostalAddress1').html() 
													+ ' ' + $(data).find('#lblPostalAddress2').html(); 
					jobpostingdata.location = $(data).find('#lblPostalCity').html() 
												+ ' ' + $(data).find('#lblPostalState').html() 
												+ ', ' + $(data).find('#lblPostalZip').html(); 
					
					//Found through trial and error in the JavaScript Console
					//jobpostingdata.position_number = document.getElementsByClassName('postingContent')[2].childNodes[2].childNodes[1].childNodes[2].childNodes[3];
					//for position number, look under the posting content class div, and look for a lonesome div, with NO ID OR CLASS.
					//here's the JQuery for the above:
					
					//The find will find based on class if there is a '.', an id if '#', and based on an index if there are many of them using :eq(index) [usually for many tr in a table].
					
					jobpostingdata.position_number = $(data).find("#pnlPositionDetails").find(".postingContent").find("table").find("tr:eq(1)").find("td:eq(1)").find("div").html();
					//console.log(jobpostingdata.position_number);
					
					var myjobposting = new JobPosting( jobpostingdata );
					
					
					mymaster.addJobPosting( myjobposting );//add the job posting just made, then update the view (done in this method).
					
					
					
				}
			}
		);
		
		
		
		//I need Ajax to grab data from other sites (other html files).
		
		
		
		
	}
	
	
	




}