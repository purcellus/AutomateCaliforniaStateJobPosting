//A model for the job posting, containing all the data for one job posting.
//also contains functions to modify the job posting.




function JobPosting( newjobposting )
{
	//the variable names should be the same.  If a new data doesn't exist, just keep the old data.
	//tabs are to make it all look nice.
	this.department 		= newjobposting.department 			|| " ";//if newjobposting does not have an instance of the variable, just use ours.
	this.attention_to 		= newjobposting.attention_to 		|| " ";
	this.p_o_box 			= newjobposting.p_o_box 			|| " ";
	this.location 			= newjobposting.location 			|| " ";
	this.position_number	= newjobposting.position_number 	|| " ";
	this.working_title 		= newjobposting.working_title 		|| " ";
	this.desirable_talents 	= newjobposting.desirable_talents 	|| " ";
	this.required_documents = newjobposting.required_documents 	|| " ";

	//personal data not gotten from the document, such as the user's name.
	this.my_name 			= newjobposting.my_name 			|| " ";

	this.my_url 			= newjobposting.my_url				|| " ";//URL MUST BE UNIQUE, to be able to lookup in the container.

	
	
	this.removeme = false;//indicates whether the object should be removed, for master.
	//think of this like handling collisions:  this collided with my mouse, so it will now be deleted.
}


JobPosting.prototype.modifyJobPosting = function( newjobposting )
{//modify the job posting's data based on what the new data is.
	//the variable names should be the same.  If a new data doesn't exist, just keep the old data.
	//tabs are to make it all look nice.
	this.department 		= newjobposting.department 			|| this.department;//if newjobposting does not have an instance of the variable, just use ours.
	this.attention_to 		= newjobposting.attention_to 		|| this.attention_to;
	this.p_o_box 			= newjobposting.p_o_box 			|| this.p_o_box;
	this.location 			= newjobposting.location 			|| this.location;
	this.position_number	= newjobposting.position_number 	|| this.position_number;
	this.working_title 		= newjobposting.working_title 		|| this.working_title;
	this.desirable_talents 	= newjobposting.desirable_talents 	|| this.desirable_talents;
	this.required_documents = newjobposting.required_documents 	|| this.required_documents;

	this.my_name 			= newjobposting.my_name 			|| this.myname;
	
	//Note that the lookup never changes.
}

//setters and getters.
JobPosting.prototype.getRemoveMe= function()
{
	return this.removeme;

}

JobPosting.prototype.setRemoveMe = function( removeme )
{
	this.removeme = removeme;

}
