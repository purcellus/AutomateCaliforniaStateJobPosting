//view for job posting.
//all view related things for the job posting are here, such as data and buttons.

function JobPostingRenderer( jobposting )
{//view is updated by model.

	this.jobposting = jobposting;//model to update this view.

}



JobPostingRenderer.prototype.render = function( master )
{//render the individual job posting.
	//pass in master so that if a button is pressed, we can just call master.update() to update the view cleanly.
	
	
	var jobpostingli = document.createElement('li');//make a list element.
		
	//console.log("factoryJobPostingDataView engaged.  job posting is " + jobposting);
	
	
	for (var jobpostingproperty in this.jobposting)
	{//for each property in job posting, we will make it html nice.
		var myjobpostingvalue = this.jobposting[jobpostingproperty];
		//console.log("myjobpostingvalue in factoryJobPostingDataView is " + myjobpostingvalue);
		if (typeof(myjobpostingvalue) !== 'function')
		{//if the part of the job posting isn't a function, but a variable, show it.
			//console.log("Adding parameter " + myjobpostingvalue + " to html in factoryJobPostingDataView");
			jobpostingli.innerHTML += '<div>' + myjobpostingvalue + '</div>';//append this to the innerHTML (use +=, = just resets).
		}
	
	}
	
	//console.log("Adding cover letter as well");
	jobpostingli.appendChild(this.generateCoverLetterHTML(this.jobposting));//add cover letter HTML to here, using the job posting.
	
	
	
	//console.log("Adding buttons to " + jobpostingli.innerHTML + " in factoryJobPostingDataView");//debug, show the html of the job posting data.
	
	jobpostingli.appendChild(this.addDeleteButton( master ));//append delete button onto this html.
	jobpostingli.appendChild(this.addModifyButton( master ));//append modify button onto this html
	
	
	document.getElementById("jobpostingul").appendChild(jobpostingli);//put what we just made into the proper div.
	
	//return jobpostingli;//return a list item that the ul can use.  Usually it will be the jobpostingul.

}

JobPostingRenderer.prototype.getJobPosting = function()
{
	return this.jobposting;
}

JobPostingRenderer.prototype.generateCoverLetter = function( jobposting )
{
	
	var mydate = new Date();//get the current time to show on the cover letter.

	var monthNames = //array to convert number to string.  Otherwise, you just use the number Date spits out.
	[
		"January", 
		"February", 
		"March", 
		"April", 
		"May", 
		"June",
		"July", 
		"August", 
		"September", 
		"October", 
		"November",
		"December"
	];
	
	var currentdate = (monthNames[ mydate.getMonth() ]) + " " + (mydate.getDate()) + ", " + (mydate.getFullYear())+ "\n\n";//the current date to write on the cover letter. (months are 0-11, so add 1 for proper month).
	
	var coverletterstring = "";//the string to return to the html, should be equal to a decent cover letter
	
	var trainandexp = 	"  I am confident that my academic training and strong passion for information " +
						"technology related work will be impactful for this position at the " + jobposting.department + ".";

	//should be at the top of the cover letter.
	var header = 	jobposting.department + "\n"
					+ "Attn: " + jobposting.attention_to + "\n"
					+ jobposting.p_o_box + "\n"
					+ jobposting.location + "\n"
					+ "\n\n\n"
					+ "Re: Position # " + jobposting.position_number + "\n"
					+ "\n"
					+ "Greetings " + jobposting.attention_to + ": \n";

	//should be near the beginning of the cover letter.
	var thankyou = "Thank you for the opportunity to submit my application package for the "
					+ jobposting.working_title 
					+ " position on your team.";
	
		
	var relevantskills = jobposting.desirable_talents;

	var inpackage = "Included in my application package for your review are: \n"
					+ jobposting.required_documents + "\n";
					
					
	var finisher = "Thank you again for your consideration.  I look forward to hearing from you soon.\n";//thank again, should be after thnkyou

	var name = "\n\n\n\n" + jobposting.my_name;	//name with signature (hence why there are four new lines

		
	coverletterstring = currentdate 
						+ header
						+ thankyou
						+ relevantskills
						+ trainandexp
						+ inpackage
						+ finisher
						+ name;



	//console.log(coverletterstring);//debug, show the cover letter generated.
	return coverletterstring;
	
}

JobPostingRenderer.prototype.generateCoverLetterHTML = function( jobposting )
{
	var mycoverletterhtml = document.createElement('div');
	
	//mycoverletterhtml.innerHTML = coverletterhtmlstring;//just use previous method, and add it to this div
	mycoverletterhtml.innerHTML = "<pre >" + this.generateCoverLetter( jobposting ) + "</pre>";//pre is nice, it can use the string with /n and use those, instead of using html code to format.
	return mycoverletterhtml;//return the html to be used for the screen.
	
}

JobPostingRenderer.prototype.addDeleteButton = function( master )
{//passing in master to update cleanly.
	var deleteButton= document.createElement('button');
	deleteButton.textContent = 'Delete this job posting';
	deleteButton.className = 'deleteJobPostingButton';//make sure Name, not name (upper case N).
	deleteButton.id = this.jobposting.my_url;//set id as the job posting's url, so url can easily be removed.
	
	var mydelete = new DeleteJobPosting(this.jobposting, master);//so I can 'pass' in the jobposting here instead of try to when adding the event listener.
	
	deleteButton.addEventListener
	(//listen for when this button is clicked.
		"click",
		function()
		{
			console.log("Hello Delete was pressed");
			mydelete.execute();
			
		}
	);
	
	return deleteButton;


} 

JobPostingRenderer.prototype.addModifyButton = function( master )
{
	var modifyButton = document.createElement('button');
	modifyButton.textContent = 'Modify this job posting\'s data';
	modifyButton.className = 'modifyJobPostingButton';
	modifyButton.id = this.jobposting.my_url;
	
	
	var mymodify = new ModifyJobPosting(this.jobposting, master);
	
	modifyButton.addEventListener
	(
	
		"click",
		function()
		{	
			console.log("modify button pressed");
			mymodify.execute();
		}
		
	);
	
	return modifyButton;
}	





JobPostingRenderer.setUpEventListeners = function( master, master_render )
{//set up the event listeners for the buttons made (the delete and create buttons).
	var jobpostingsul = document.querySelector('#jobpostingul');
	//console.log("Adding eventListener for buttons in ul");
	jobpostingsul.addEventListener
	(//add a click event listener to the ul, and all of what it contains.
		'click', 
		function(event)
		{
			var jobpostingclicked = event.target;//TODO what does this mean
			//console.log(event.target);
			//console.log(event.target.id);
			
			
			//TODO remove functionality once the object is deleted.  It will repeat this listener, even if deleted...I think...
			if (jobpostingclicked.className === 'deleteJobPostingButton' )
			{
				console.log("Delete button pressed for " + jobpostingclicked.id);//state that the delete button was pressed.
				master.removeJobPosting(parseInt(jobpostingclicked.id));//delete job posting at this index, by grabbing the id of the parent node (should be a li).
				
				
			}
			else if (jobpostingclicked.className === 'modifyJobPostingButton')
			{
				console.log("Modify Job Posting button pressed");
				master.jobpostingcontainer.getJobPosting(parseInt(jobpostingclicked.id));//modify the job posting.

				
			}
			
			master_render.render();
		}
	);
	
	
}






