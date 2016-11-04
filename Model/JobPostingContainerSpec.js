//specifications for JobPostingContainer

//TODO add tests for jobpostinglookups.



describe
(
	"JobPostingContainer Test Suite",
	function()
	{
		var myjobpostingcontainer;
	
	
		it
		(
			"initializes.",
			function()
			{
				myjobpostingcontainer = new JobPostingContainer();
				
				expect(myjobpostingcontainer.jobpostings.length).toBe(0);//object should no longer exist.

			}
		
		);
	
		it
		(
			"adds a jobposting.",
			function()
			{
				myjobpostingcontainer = new JobPostingContainer();
				var myjobposting = {my_url: "Fire"};
				
				myjobpostingcontainer.addJobPosting(myjobposting);
				
				
				expect(myjobpostingcontainer.jobpostings.length).toBe(1);//1 object in there.
				expect(myjobpostingcontainer.jobpostings[0]).toBe(myjobposting);//1 object in there.
				
				
				
				expect
				(
					function()
					{
						myjobpostingcontainer.addJobPosting( myjobposting );
					}	
				).toThrowError("Already have job posting with that URL.");
			}
		
		);
		
		it
		(
			"removes a jobposting based on its lookup index.",
			function()
			{
				var myjobposting = {my_url: "Fire"}
			
				myjobpostingcontainer = new JobPostingContainer();
				myjobpostingcontainer.addJobPosting(myjobposting);
				
				
				
				expect(myjobpostingcontainer.jobpostings.length).toBe(1);//1 object in there.

				myjobpostingcontainer.removeJobPosting(myjobposting.my_url);//delete based on the url, the lookup.
				
				expect(myjobpostingcontainer.jobpostings.length).toBe(0);//object should no longer exist.
				
				expect
				(
					function()
					{//can't remove something that isn't there.
						myjobpostingcontainer.removeJobPosting(myjobposting.my_url);
					}	
				).toThrowError("URL could not be found.");
				
				
			}
		
		);
		
		it
		(
			"gets a jobposting based on its lookup index.",
			function()
			{
				var myjobposting = {my_url: "Fire"}
			
				myjobpostingcontainer = new JobPostingContainer();
				myjobpostingcontainer.addJobPosting(myjobposting);
				
				
				
				expect(myjobpostingcontainer.jobpostings.length).toBe(1);//1 object in there
				
				expect(myjobpostingcontainer.getJobPosting(myjobposting.my_url)).toBe(myjobposting);
				
				expect
				(
					function()
					{//can't remove something that isn't there.
						myjobpostingcontainer.getJobPosting("poo");
					}	
				).toThrowError("URL could not be found.");
				
				
			}
		
		);
		
		
		
		
		
	}


);