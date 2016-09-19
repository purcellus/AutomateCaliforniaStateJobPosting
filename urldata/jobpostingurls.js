//display the url listand add urls to the url list.

function Url_List()
{//urllist object to manipulate list of stuff.
	this.listofurls = [];//holds a list of urls
	
	
	this.addURL = function( newurl )
	{//add the url to the list
		this.listofurls.push(newurl);//add the new url to the end of the list (using length).

	};

	this.removeURL = function( index )
	{//remove the url at this index of the url list
		this.listofurls.splice(index, 1);//remove one element from the list.
		
	};
	
	
	
	
	this.displayURLList = function()
	{
		var urlliststring = "";//the string to send to the model to do stuff.
		
		console.log("displaying URL list");
		console.log("URL List is: " + this.listofurls);

		for (var urlcounter = 0; urlcounter < this.listofurls.length; urlcounter++)
		{//for each element in the list of urls
			console.log("url counter is " + urlcounter);//debug
			console.log("url element is " + this.listofurls[urlcounter]);
			urlliststring += "<div>" + (urlcounter + 1) + ": " + this.listofurls[urlcounter] + "</div>\n";//add to the current string this url.
			
		}
		console.log("URL List string is: " + urlliststring);
		return urlliststring;//return this so the html page can just shove this in the html, instead of coupling the html dependency here.
	};

}


var urleventhandlers = 
{//handlers for url events.
	deleteURL: function(index)
	{
		myurl_list.removeURL(index);//go to model and destroy this element.
		//jobpostingview.displayJobPostingList();//update html as well.
		myurl_list.displayURLList();//show on debugger and html.
	}
	


}





var urlview = 
{
	factoryUrlDeleteButton: function()
	{//make a delete button for the jobposting.
		var deleteButton= document.createElement('button');
		deleteButton.textContent = 'Delete this URL';
		deleteButton.className = 'deleteURLButton';//make sure Name, not name (upper case N).
		return deleteButton;
	},

	factoryUrlView: function()
	{
		var url_li = document.createElement('li');//list element.
		
		//since the url only has one variable, this should be easier than the job posting.
		
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
				
				if (jobpostingclicked.className === 'deleteURLButton')
				{
					//console.log("Delete button pressed");//state that the delete button was pressed.
					urleventhandlers.deleteURL(parseInt(jobpostingclicked.parentNode.id));//delete URL at this index, by grabbing the id of the parent node (should be a li).
					
				
				}
				
				
			}
		);
		
		
	}
}

	
	
	
	
	







