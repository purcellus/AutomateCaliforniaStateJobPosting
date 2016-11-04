//specifications for the JobPosting model.



describe
(
	"JobPosting Test Suite",
	function()
	{
		
		var myjobposting;//job posting model.
	
		
		beforeEach
		(
			function()
			{
				var testposting = 
				{//test data to inject into model.
					department 			: "DEPT",
					attention_to 		: "ATTN",
					p_o_box 			: "POBOX",
					location 			: "LOCATION",
					position_number		: "POSITION NUMBER",
					working_title 		: "WORKING TITLE",
					desirable_talents 	: "DESIRABLE TALENTS",
					required_documents 	: "REQUIRED DOCUMENTS",

					//personal data not gotten from the document, such as the user's name.
					my_name 			: "Austin Purcell",
				
					my_url				: "WWW"
				}
				
				myjobposting = new JobPosting(testposting);
			}
		);
		
		
		
		
	
		it
		(
			"Initializes Many variables.",
			function()
			{
				
				expect(myjobposting.department).toBe("DEPT");
				expect(myjobposting.attention_to).toBe("ATTN");
				expect(myjobposting.p_o_box).toBe("POBOX");
				expect(myjobposting.location).toBe("LOCATION");
				expect(myjobposting.position_number).toBe("POSITION NUMBER");
				expect(myjobposting.working_title).toBe("WORKING TITLE");
				expect(myjobposting.desirable_talents).toBe("DESIRABLE TALENTS");
				expect(myjobposting.required_documents).toBe("REQUIRED DOCUMENTS");
				
				expect(myjobposting.my_name).toBe("Austin Purcell");
				expect(myjobposting.my_url).toBe("WWW");
			}
		);
	
	
		it
		(
			"Can modify Variables if needed.",
			function()
			{
				myjobposting.modifyJobPosting({my_name: "Charles Whatnow"});//change only the name
				
				//all other variables should be the same.
				expect(myjobposting.department).toBe("DEPT");
				expect(myjobposting.attention_to).toBe("ATTN");
				expect(myjobposting.p_o_box).toBe("POBOX");
				expect(myjobposting.location).toBe("LOCATION");
				expect(myjobposting.position_number).toBe("POSITION NUMBER");
				expect(myjobposting.working_title).toBe("WORKING TITLE");
				expect(myjobposting.desirable_talents).toBe("DESIRABLE TALENTS");
				expect(myjobposting.required_documents).toBe("REQUIRED DOCUMENTS");
				
				expect(myjobposting.my_name).toBe("Charles Whatnow");
			
				expect(myjobposting.my_url).toBe("WWW");
			}
		
		);
	
	
	
	}





);