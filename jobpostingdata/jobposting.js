//display the list of job posting data, be able to modify certain attributes, etc.
//most things will be within this object.
//Most of the stuff here is for model

//TODO mimic todo app so that eventlistener can get the ul, and functionality can be given to the buttons for each li.


//there is a difference between Object.create() and constructors.
function JobPosting(department, attention_to, p_o_box, location, position_number, working_title, desirable_talents, required_documents, myname)
{
	//data from the job posting.
	this.department = department;
	this.attention_to = attention_to;
	this.p_o_box = p_o_box;
	this.location = location;
	this.position_number = position_number;
	this.working_title = working_title;
	this.desirable_talents = desirable_talents;
	this.required_documents = required_documents;
		
	//personal data, such as name.
	this.myname = myname;
	
	
	
	//setters of variables
	this.setDepartment = function(department)
	{
		this.department = department;
	};
	
	this.setAttentionTo = function(attention_to)
	{
		this.attention_to = attention_to;
	};
	
	this.setPOBox = function(p_o_box)
	{
		this.p_o_box = p_o_box;
	};
	
	this.setLocation = function(location)
	{
		this.location = location;
	};
	
	this.setPositionNumber = function(position_number)
	{
		this.position_number = position_number;
	};
	
	this.setWorkingTitle = function(working_title)
	{
		this.working_title = working_title;
	};
	
	this.setDesirableTalents = function(desirable_talents)
	{
		this.desirable_talents = desirable_talents;
	};
	
	this.setRequiredDocuments = function(required_documents)
	{
		this.required_documents = required_documents;
	};
	
	this.setMyName = function(myname)
	{
		this.myname = myname;
	};
	
	this.getJobDataAsString = function()
	{//return the important data, rather than the entire thing of this.
		
		return	"Job data:\n " 
			+ "Department: " + this.department + "\n" 
			+ "Attn To: " +this.attention_to + "\n"
			+ "P.O. Box: " +this.p_o_box + "\n"
			+ "Location: " +this.location + "\n"
			+ "Position No. :: " +this.position_number + "\n"
			+ "Working Title: " +this.working_title + "\n"
			+ "Desirable Qualifications: " +this.desirable_talents + "\n"
			+ "Required Documents: " +this.required_documents + "\n"
			+ "Name: " +this.myname + "\n";
	};
	
}



//example of setter outside the object.  Add properties to an existing prototype.  JobPosting.prototype.setDepartment = function(department)







var jobpostingeventhandlers =
{//handlers for button presses, to connect view with model(data).
	deleteJobPosting: function(index)
	{
		myjoblist.deleteJobPosting(index);//go to model and destroy this element.
		//jobpostingview.displayJobPostingList();//update html as well.
		myjoblist.displayJobPostings();//show on debugger and html.
	}
	
	
	
	
};








var jobpostingview =
{//view of the MVC for job postings.



	factoryDeleteButton: function()
	{//make a delete button for the jobposting.
		var deleteButton= document.createElement('button');
		deleteButton.textContent = 'Delete this job posting';
		deleteButton.className = 'deleteJobPostingButton';//make sure Name, not name (upper case N).
		return deleteButton;
	},
	
	factoryModifyButton: function()
	{//make a modify button for the job posting data, so the user can manually adjust the job posting data.
		var modifyButton = document.createElement('button');
		modifyButton.textContent = 'Modify this job posting\'s data';
		modifyButton.className = 'modifyJobPostingButton';
		return modifyButton;
	},
	
	//Note that this does not add the ability for functionality.  This function assumes that the function calling this will do that.
	factoryJobPostingDataView: function(jobposting)
	{//set up an individual job posting's html stuff.
		var jobpostingli = document.createElement('li');//make a list element.
		
		//console.log("factoryJobPostingDataView engaged.  job posting is " + jobposting);
		
		
		for (var jobpostingproperty in jobposting)
		{//for each property in job posting, we will make it html nice.
			var myjobpostingvalue = jobposting[jobpostingproperty];
			//console.log("myjobpostingvalue in factoryJobPostingDataView is " + myjobpostingvalue);
			if (typeof(myjobpostingvalue) !== 'function')
			{//if the part of the job posting isn't a function, but a variable, show it.
				//console.log("Adding parameter " + myjobpostingvalue + " to html in factoryJobPostingDataView");
				jobpostingli.innerHTML += '<div>' + myjobpostingvalue + '</div>';//append this to the innerHTML (use +=, = just resets).
			}
		
		}
		console.log("Adding cover letter as well");
		jobpostingli.appendChild(generateCoverLetterHTML(jobposting));//add cover letter HTML to here, using the job posting.
		
		
		
		
		//console.log("Adding buttons to " + jobpostingli.innerHTML + " in factoryJobPostingDataView");//debug, show the html of the job posting data.
		
		jobpostingli.appendChild(this.factoryModifyButton());//append delete button onto this html.
		jobpostingli.appendChild(this.factoryDeleteButton());//append modify button onto this html
		
		
		return jobpostingli;//return a list item that the ul can use.  Usually it will be the jobpostingul.
	},
	
	
	//TODO remove the #jobpostingul part, maybe pass in as parameter.
	factoryJobPostingListView: function()
	{//generate an entire list of job postings using the jobpostinglist.
		var jobpostingul = document.querySelector('#jobpostingul');//query for a UL
		
		//console.log("Grabbed " + jobpostingul + " in factoryJobPostingListView.");
		jobpostingul.innerHTML = '';//empty string, so it isn't uninstantiated.
		//console.log("factoryJobPostingListView joblist length is " + myjoblist.joblist.length);
		for (var jobpostingcounter = 0; jobpostingcounter < myjoblist.joblist.length; jobpostingcounter++)
		{//create individual list items.
			//console.log("factoryJobPostingListView: Element in joblist is " + myjoblist.getJobPosting(jobpostingcounter));
			var myjobpostingli = this.factoryJobPostingDataView(myjoblist.getJobPosting(jobpostingcounter));//create an li for the job posting.
			myjobpostingli.id = jobpostingcounter;//the id of the individual li will be given, and used for button handling.
			jobpostingul.appendChild(myjobpostingli);//add the li that was just created in the for loop to the ul that will be returned.
			//console.log("job posting id is " + myjobpostingli.id);//debug
		}
		
		
		return jobpostingul;//return the whole dang thing.
	},
	
	
	setUpEventListeners: function()
	{//set up the event listeners for the buttons made (the delete and create buttons).
		var jobpostingsul = document.querySelector('#jobpostingul');
		//console.log("Adding eventListener for buttons in ul");
		jobpostingsul.addEventListener
		(//add a click event listener to the ul, and all of what it contains.
			'click', 
			function(event)
			{
				var jobpostingclicked = event.target;//TODO what does this mean
				console.log(event.target.parentNode.id + " id where a button was clicked.");
				
				if (jobpostingclicked.className === 'deleteJobPostingButton')
				{
					//console.log("Delete button pressed");//state that the delete button was pressed.
					jobpostingeventhandlers.deleteJobPosting(parseInt(jobpostingclicked.parentNode.id));//delete job posting at this index, by grabbing the id of the parent node (should be a li).
					
				
				}
				else if (jobpostingclicked.className === 'modifyJobPostingButton')
				{
					console.log("Modify Job Posting button pressed");
					
				}
				
			}
		);
		
		
	}
	
};



	
	
	

