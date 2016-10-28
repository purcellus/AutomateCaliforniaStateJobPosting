//After the list of sites has been grabbed, grab data from each site.
//Each site has a list of data to grab, such as position number.
//these functions will grab them.

//I'm assuming that jquery stuff can work here.



//TODO USE THIS TO GET THE POSITION NUMBER.
//document.getElementsByClassName('postingContent')[2].childNodes[2].childNodes[1].childNodes[2].childNodes[3]





function generateJobPostingsBySites(listofjobpostingurls)
{//get a list of job posting urls, and with each one, generate job postings and cover letters.

	//I assume that the parameter is URL_List.listofurls .
	
	//"https://jobs.ca.gov/Public/JobPosting.aspx?q=uX0NSx%2bar2kocd3fRDFpFMCoEfQIBsFiMztyM03OYDQ1c02pb%2fte7gkCi1xiFxrFfJ7hr27pVzJrJTGDRJbUz%2b3pDTc3jUxSNZDGdlgyxx%2fDgUT9tHfLzWY%2bThlzQF8%2ffNK80ASuBQhCclscbNVeAOVHkmvxPhmkaWG4OfT75vw%3d";
	//can't use above, due to a cross origin resource sharing issue.

	//the job posting url, should be a string

	
	//http://stackoverflow.com/questions/18938180/how-to-get-the-html-of-a-div-on-another-page-with-jquery-ajax
	//site above helps with how to load a page in jquery.
	
	console.log("generateJobPostingsBySites: listofjobpostingurls = " + listofjobpostingurls);
	
	
	for (var urlcounter = 0; urlcounter < listofjobpostingurls.length; urlcounter++)
	{
		var jobpostingurl = listofjobpostingurls[urlcounter];//grab each url individually, to grab data from.
		
		
		
		console.log("Job posting url in generateJobPostingBySites is " + jobpostingurl);
		
		
		$.ajax
		(//first ajax call to grab the site's data for job postings.
			{
				url: jobpostingurl,
				type: 'GET',
				success: function(data)
				{//upon successful ajax request, do this.
					console.log("Ajax successful.  Grabbing data from url.");
					
					var jobpostingdata = new JobPosting
					(//job posting data to do stuff with.	
							"",
							"",
							"",
							"",
							"",
							"",
							"",
							"",
							""
						
					);
					
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
					
					//jobpostingdata.position_number = $(data).find('#postingContent').html();
					//for position number, look under the posting content class div, and look for a lonesome div, with NO ID OR CLASS.
					
					
					
					console.log("Jobpostingdata in generateJobPostingBySites after first ajax call is " + jobpostingdata.getJobDataAsString() + ". Putting into list now."); 
					myjoblist.addElement(jobpostingdata);//add the element to the list.
					
					
					
					jobpostingview.factoryJobPostingListView();//update the view.  I put this here so it syncs with ajax calls, meaning it doesn't run out of sync with this (think semaphores).
					//TODO see how to better update views.

					
				}
			
			}
		
		);
		
		
		
		
	}
	
	
	/*
	
	
	$.ajax
	(
		{
			
			complete: function(data)
			{
				console.log("now trying to post data to json...\n");
				
				$.ajax
				(
					{
						url: 'http://localhost:3000/jobpostingdata',	//this time, url is our own json data.
						type: 'POST',	//change that data.
						data: jobpostingdata,	//post this data to json server
						dataType: 'json',		//should be json type.
						success: function(data)
						{
							console.log("successfully grabbed json.  Changing data now...\n");
							
							console.log("data " + data);
							/*data.job_control_code = jobpostingdata.controlcode;
							data.job_classification  = jobpostingdata.classification;
							data.position_number  = jobpostingdata.position_number;
							data.working_title  = jobpostingdata.workingtitle;
							data.department  = jobpostingdata.department;
							data.attention_to  = jobpostingdata.attentionto;
							data.p_o_box  = jobpostingdata.pobox;
							data.location  = jobpostingdata.address;
							data.required_documents  = jobpostingdata.required_documents;
							data.desirable_talents  = jobpostingdata.desirable_qualifications;
							console.log("hello " + data.job_control_code);-------
						}
					
					}
				)
				.fail(
					function()
					{
						console.log("FAILED TO POST JSON");
					}
				)
				
			}
			
		}
	)*/
	//does anything run after the ajax call?
			
				

}

