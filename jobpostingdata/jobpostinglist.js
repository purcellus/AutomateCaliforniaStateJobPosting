function JobPostingCollection()
{//a collection of job postings.
	this.joblist = [];//job list.
	
	
	
	this.addElement = function(jobposting)
	{//append an element to the end of the list
		//this assumes that the thing put in is a job posting.
		//console.log("Adding " + jobposting + " in addElement");//debug 
		this.joblist.push(jobposting);
		
	};
	
	this.getJobList = function()
	{//return the job list.
		return this.joblist;
	};
	
	this.deleteJobPosting = function(index)
	{//delete a job posting at a specific location.
		//console.log("deleteJobPosting: index = " + index);
		this.joblist.splice(index, 1);//only delete 1 element at this position.
		
	};
	
	this.displayAllConsole = function()
	{// a function to display all of this on the screen.
		console.log("showing all things in list");
		if (this.joblist.length === 0)
		{//if there are no items
			console.log("No job postings found");
		}
		else
		{
			console.log("joblist length is " + this.joblist.length);
			for (var joblistcounter = 0; joblistcounter < this.joblist.length; joblistcounter++)
			{
				//console.log("joblistcounter is " + joblistcounter);
				console.log(this.joblist[joblistcounter].getJobDataAsString());//just call the element's method to do stuff.
				
			}
		}
	};
	
	
	this.displayJobPostings = function()
	{//use the view to display job postings on the html.
		this.displayAllConsole();
		jobpostingview.factoryJobPostingListView(this);//use the external method.
	};
	
	
	this.getJobPosting = function(index)
	{//grab a job posting at a particular index
		return this.joblist[index];//just return what's at that position.
	};
	
	
}





