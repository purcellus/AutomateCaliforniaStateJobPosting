/*
	http://stackoverflow.com/questions/20256760/javascript-console-log-to-html
	//used to overwrite the stuff.
*/






function generateCoverLetter(myjobattributes)
{
	var mydate = new Date();//get the current time to show on the cover letter.

	var monthNames = //array to convert number to string.  Otherwise, you just use the number.
	[
		"January", 
		"February", 
		"March", 
		"April", 
		"May", 
		"June",
		"July", 
		"August", 
		"September", 
		"October", 
		"November",
		"December"
	];
	
	var currentdate = (monthNames[ mydate.getMonth() ]) + " " + (mydate.getDate()) + ", " + (mydate.getFullYear())+ "\n\n";//the current date to write on the cover letter. (months are 0-11, so add 1 for proper month).
	
	var coverletterstring = "";//the string to return to the html, should be equal to a decent cover letter
	
	var trainandexp = 	"  I am confident that my academic training and strong passion for information " +
						"technology related work will be impactful for this position at the " + myjobattributes.department + ".";

	//should be at the top of the cover letter.
	var header = 	myjobattributes.department + "\n"
					+ "Attn: " + myjobattributes.attention_to + "\n"
					+ myjobattributes.p_o_box + "\n"
					+ myjobattributes.location + "\n"
					+ "\n\n\n"
					+ "Re: Position # " + myjobattributes.position_number + "\n"
					+ "\n"
					+ "Greetings " + myjobattributes.attention_to + ": \n";

	//should be near the beginning of the cover letter.
	var thankyou = "Thank you for the opportunity to submit my application package for the "
					+ myjobattributes.working_title 
					+ " position on your team.";
	
		
	var relevantskills = myjobattributes.desirable_talents;

	var inpackage = "Included in my application package for your review are: \n"
					+ myjobattributes.required_documents + "\n";
					
					
	var finisher = "Thank you again for your consideration.  I look forward to hearing from you soon.\n";//thank again, should be after thnkyou

	var name = "\n\n\n\n" + myjobattributes.myname;	//name with signature (hence why there are four new lines

		
	coverletterstring = currentdate 
						+ header
						+ thankyou
						+ relevantskills
						+ trainandexp
						+ inpackage
						+ finisher
						+ name;



	console.log(coverletterstring);//debug, show the cover letter generated.
	return coverletterstring;
}




function generateCoverLetterHTML(myjobattributes)
{//makes a cover letter that can nicely be placed onto html.
	var mycoverletterhtml = document.createElement('div');
	

	
	
	
	
	
	
	
	
	
	//mycoverletterhtml.innerHTML = coverletterhtmlstring;//just use previous method, and add it to this div
	mycoverletterhtml.innerHTML = "<pre >" + generateCoverLetter(myjobattributes) + "</pre>";//pre is nice, it can use the string with /n and use those, instead of using html code to format.
	return mycoverletterhtml;//return the html to be used for the screen.
}




















