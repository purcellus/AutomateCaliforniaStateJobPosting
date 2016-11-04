//master

function Master()
{//master controller.
	this.jobpostingcontainer = new JobPostingContainer();

	//I need this for individual job postings to render.
	this.renderableobjects = [];//list of renderable objects.
	this.master_renderer = new MasterRenderer(this) || "test";//strange, Each is attached to the other.
	
	this.url_list = [];//list of urls to grab job posting data from.
	//yes, I could put this in the model.
	//but because this is only one variable, everything should be fine, I hope.
	
	
	
	this.grabjobpostingfromsitecommand = new GrabJobPostingFromSiteCommand( this );
}



Master.prototype.addRenderableObject = function( renderableobject )
{
	//console.log("adding renderable object");
	this.renderableobjects.push(renderableobject);


}

Master.prototype.removeRenderableObject = function( url )
{
	for (var rendercounter = 0; rendercounter < this.renderableobjects.length; ++ rendercounter )
	{//look in render list
		//console.log("renderable object's url is " + this.renderableobjects[rendercounter].getJobPosting().my_url);
		//console.log("url is " + url);

		//console.log(this.renderableobjects[rendercounter].getJobPosting().my_url === url);
		
		if (this.renderableobjects[rendercounter].getJobPosting().my_url === url)
		{//if this is the jobposting object that this renderer is attached to.
			//console.log("deleting this job posting at index " + rendercounter);
			
			this.renderableobjects.splice(rendercounter, 1);//remove this renderable object.  Remove based on counter (index), not object itself
		}
	
	}
	
}

Master.prototype.addJobPosting = function(jobposting)
{
	this.jobpostingcontainer.addJobPosting(jobposting);
	var render = new JobPostingRenderer(jobposting);//also have a renderer for the job posting.
	this.addRenderableObject(render);
	
	this.update();
}


Master.prototype.removeJobPosting = function ( url )
{
	this.jobpostingcontainer.removeJobPosting( url );//remove the model.
	this.removeRenderableObject( url );//remove the view.
	
}


Master.prototype.addURL = function( url )
{
	this.url_list.push(url);
	
	this.update();
}

Master.prototype.removeURL = function( url )
{
	var myindex = this.url_list.indexOf(url);
	this.url_list.splice( myindex, 1);
	

}

Master.prototype.update = function()
{//similar to the tick function in games, this allows iteration to check collision like things, render, etc.
	//should be called frequently, or every time something happens.

	
	
	
	
	//after rendering, check for collisions.  As in, if a button to remove or change a jobposting occurred.
	for (var jobpostingcounter = 0; jobpostingcounter < this.jobpostingcontainer.jobpostings.length; jobpostingcounter++)
	{
		//console.log('checking flags for removing or modifying');
		var currentjobposting = this.jobpostingcontainer.jobpostings[jobpostingcounter];
		
		if (currentjobposting.removeme === true)
		{//if the flag says so, remove it.
			//remove the render of it first.  Then the actual jobposting
			//console.log('removeobject found ' + currentjobposting.name);//debug
			
			this.removeRenderableObject( currentjobposting.my_url );
			this.jobpostingcontainer.removeJobPosting( currentjobposting.my_url );
		}
	}
	
	this.master_renderer.render();//render first.
}
