//modify a job posting.
//usually done by a button attached to the job posting renderer.



function ModifyJobPosting( jobposting, master )
{//an Event Listener function.  
	
	this.jobposting = jobposting;
	this.master = master;
}

//TODO find a cleaner way to get job data.  Maybe use html and append to job posting renderer.
ModifyJobPosting.prototype.execute = function()
{//modify an individual job posting.
	
	this.jobposting.department 			= prompt("department", "") 			|| this.jobposting.department;//if prompt does not have an instance of the variable, just use ours.
	this.jobposting.attention_to 		= prompt("attention to", "")		|| this.jobposting.attention_to;
	this.jobposting.p_o_box 			= prompt("p.o. box", "")			|| this.jobposting.p_o_box;
	this.jobposting.location 			= prompt("location", "")			|| this.jobposting.location;
	this.jobposting.position_number		= prompt("position number", "")		|| this.jobposting.position_number;
	this.jobposting.working_title 		= prompt("working title", "")		|| this.jobposting.working_title;
	this.jobposting.desirable_talents 	= prompt("desirable talents", "")  	|| this.jobposting.desirable_talents;
	this.jobposting.required_documents 	= prompt("required documents", "") 	|| this.jobposting.required_documents;

	this.jobposting.my_name 			= prompt("name", "")				|| this.myname;
	
	
	
	
	
	this.master.update();//update view.
}