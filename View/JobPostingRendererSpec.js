//Spec for JobPostingRenderer




describe
(
	"JobPostingRenderer Test Suite",
	function()
	{
	
	
		it
		(
			"can get Game Object",
			function()
			{
				var object = {my_url: "oh"};
				var renderer = new JobPostingRenderer(object);
				expect(renderer.getJobPosting()).toBe(object);
			
			}
		
		);
	
	
	
	
	}



);