var links = [
        "q1.html", "q2.html", "q3.html", "q4.html",
        "q5.html", "q6.html", "q7.html", "q8.html", "q9.html",
        "q10.html", "q11.html", "q12.html", "q13.html",
        "q14.html", "q15.html", "q16.html", "q17.html", "q18.html",
        "q19.html", "q20.html"
    ];

var ans = [
		"1", "2", "4", "3", "2", "1", "3", "1", "2", "4", "1",
		"3", "2", "4", "3", "4", "1", "3", "1", "3"
	];


document.getElementById("nextQuestion").onclick = function() {

    var randomIndex = Math.floor(Math.random() * links.length);
    var randomLink = links[randomIndex];
    window.location.href = randomLink;
};

//file:///C:/Users/Radu/Desktop/Trigo/q2.html

document.getElementById("check").onclick = function() {
 		var currentLink = window.location.href;
 		
    for (let i = 0; i < links.length; i++) {
        let j = i+1;

        if( currentLink === "file:///C:/Users/Radu/Desktop/Trigo/q" + j.toString() + ".html")
        {
        	var currentAnsIndex = j-1;
        	i = links.length + 1;
        }
    }
    
    

    var ok = 0;
    var cnt = 0;

    for( let k = 1; k <= 4; k++){
    	var checkbox = document.getElementById("v" + k.toString());

    	if( checkbox.checked)
    	{
    		cnt++;

    		if( ans[currentAnsIndex] === k.toString())
    		{
    			ok = 1;
    		}
    	}
    }


    if (ok == 1 && cnt == 1)
    {
       window.alert("Corect!");
    } 
    else
    {
        window.alert("Greșit! (sau ai selectat mai multe variante;))");
    }


};
