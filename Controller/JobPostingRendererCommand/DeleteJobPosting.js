//delete a job posting.
//usually done by a button attached to the job posting renderer.



function DeleteJobPosting( jobposting, master )
{//an Event Listener function.  
	//console.log(jobposting);
	
	this.jobposting = jobposting;	
	this.master = master;
	
	
}




DeleteJobPosting.prototype.execute = function()
{
	//console.log("Deleting job posting for url: " + this.jobposting.my_url);
	
	
	this.jobposting.setRemoveMe( true );

	
	this.master.update();//update view.
}