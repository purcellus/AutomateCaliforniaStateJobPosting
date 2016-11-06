//renderer for master control class
//						event.preventDefault();//prevent the page from automatically refreshing
//above is very important to prevent the page from refreshing.




function MasterRenderer ( master )
{
	this.master = master;
	
	this.omegahtml = 
	"<div id=\"websitediv\">" +
		"Add the site to grab data from here" +
		
		"<form id=\"addurlform\"         >" +			
			"<input id=\"urlinput\" type=\"text\" placeholder=\"insert url here\">" +
			"<br>" +
			"<input id=\"urlsubmit\" type=\"submit\" value=\"Add url to the url list\">" +	//button to submit url.
		"</form>" +
		
		
		"<div id=\"displayurlsdiv\">" +
			"Display urls here" +
		"</div>" +
	"</div>" +
	
	"<br>" +
	
	"<div id=\"jobpostingdatadiv\">" + 
		"Job Posting Data:" + 
		
		
		"<form id=\"jobpostingdatafromsiteform\">" +		//where to do the php command getSiteHTML.php.
			"<input id=\"jobpostingfromsitessubmit\" type=\"submit\" value=\"Add job posting data based on urls\">" + 	//button to make job postings based on urls.
		"</form>" + 
		
		"<form id=\"addjobpostingdataform\"><!-- be able to modify, add, or remove job posting data, or an entire object of such.  User can adjust stats, in case the computer was off by a bit.-->" + 
			"<input id=\"nameinput\" type=\"text\" placeholder=\"insert your full name here\">" + 
			"<br>" +
			"<input id=\"departmentinput\" type=\"text\" placeholder=\"insert the department here\"> " + 
			"<br>" + 
			"<input id=\"attention_toinput\" type=\"text\" placeholder=\"insert the attention to here\"> " + 
			"<br>" +
			"<input id=\"p_o_boxinput\" type=\"text\" placeholder=\"insert the p.o. box here\">	" +		
			"<br>" +
			"<input id=\"locationinput\" type=\"text\" placeholder=\"insert the location here\">" +		
			"<br>" + 
			"<input id=\"position_numberinput\" type=\"text\" placeholder=\"insert the position number here\">" + 			
			"<br>" + 
			"<input id=\"working_titleinput\" type=\"text\" placeholder=\"insert the working title here\">" +			
			"<br>" + 
			"<input id=\"desired_talentsinput\" type=\"text\" placeholder=\"insert the desirable talents here\">" + 			
			"<br>" +
			"<input id=\"required_documentsinput\" type=\"text\" placeholder=\"insert the required documents here\">" +			
			"<br>" +
			"<input id=\"jobpostingsubmit\" type=\"submit\" value= \"Add job posting to the job posting list\">" +	//button to make job postings manually.
			
		
		"</form>" +

		
		"<div id=\"displayjobpostingdatadiv\">" + 
			"<ul id=\"jobpostingul\"> " + 
				
			"</ul>" +
		"</div>" +
		
		
	"</div>" +
	
	"<br>"	;
	
	document.body.innerHTML = this.omegahtml;

}


MasterRenderer.prototype.render =function()
{
	
	document.getElementById("jobpostingul").innerHTML = "";//reset innerhtml, since we're replacing it again.
	document.getElementById("displayurlsdiv").innerHTML = "";//reset innerhtml, since we're replacing it again.
	
	//console.log("MasterRender: rendering");

	//render each url.
	//since urls don't need a render attach (view), we just show the string here.
	for (var urlcounter = 0; urlcounter < master.url_list.length; urlcounter++)
	{//render each object.
		//console.log('rendering object ' + master.url_list[urlcounter]);
		
		document.getElementById("displayurlsdiv").innerHTML +=  master.url_list[urlcounter] + "<br>"  ;//render the url.
		
	}
	
	
	//now render the job postings.
	for (var rendercounter = 0; rendercounter < master.renderableobjects.length; rendercounter++)
	{//render each object.
		//console.log('rendering object');
		
		master.renderableobjects[rendercounter].render( this.master );//render the individual objects.  No context needed, as we aren't using a canvas.
		
	}
	
}





