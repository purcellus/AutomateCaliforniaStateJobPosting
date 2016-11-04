//container model for all job postings.

function JobPostingContainer()
{
	this.jobpostings= [];//the list of job postings.
	this.jobpostingslookup = {};//lookup for job postings.  I think this is similar to a Map or Dictionary.
	//After all, this allows for key and value.
	
}


JobPostingContainer.prototype.addJobPosting = function( jobposting )
{
	if (this.jobpostingslookup[jobposting.my_url] !== undefined)
	{//if the jobposting already exists
		throw new Error("Already have job posting with that URL.");
	}


	this.jobpostings.push(jobposting);//put the jobposting into the list.
	this.jobpostingslookup[jobposting.my_url] = jobposting;//using the url as the lookup key.
	
	
	//lookup -> actual object.
}


JobPostingContainer.prototype.removeJobPosting = function ( jobpostingurl )
{//remove a job posting.
	var jobposting_gotten = this.jobpostingslookup[jobpostingurl];//get object from lookup.
	var jobpostingindex = this.jobpostings.indexOf(jobposting_gotten);//get the gameobject from array.
	
	//console.log("Jobpostingurl is " + jobpostingurl);
	//console.log(jobposting_gotten);
	//console.log("Jobpostingindex: " + jobpostingindex);
	//console.log(this.jobpostingslookup);

	if (jobposting_gotten === undefined )
	{
		throw new Error("URL could not be found.");
	}
	
	
	this.jobpostings.splice( jobpostingindex, 1);//remove the object from the list of objects.
	delete this.jobpostingslookup[jobposting_gotten.my_url];//also remove from the lookup.
	
}



JobPostingContainer.prototype.getJobPosting = function ( jobpostingurl )
{//get a job posting.
	var jobposting_gotten = this.jobpostingslookup[jobpostingurl];//get object from lookup.
	
	if (jobposting_gotten === undefined )
	{
		throw new Error("URL could not be found.");
	}
	
	return jobposting_gotten;//return the job posting we got.
}
