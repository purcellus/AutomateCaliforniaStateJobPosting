//master

describe
(
	"Master Controller Suite",
	function()
	{
		
		
		
		
		it
		(
			"initializes.",
			function()
			{
				var master = new Master();
				expect(master.jobpostingcontainer.jobpostings.length).toBe(0);//should have no job postings when starting.
			
			
			}
		
		);
	
		it
		(
			"adds job postings.",
			function()
			{
				var master = new Master();
				expect(master.jobpostingcontainer.jobpostings.length).toBe(0);//should have no job postings when starting.
			
				var job = {my_url: "okay"};
				master.addJobPosting(job);
				expect(master.jobpostingcontainer.jobpostings.length).toBe(1);//should have one job posting.
				expect(master.renderableobjects.length).toBe(1);//should also have a render for the jobposting.

			}
		
		);
	
	}



);