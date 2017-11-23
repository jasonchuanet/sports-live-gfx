var pnc1, pnc2, s1, s2, mm, gg, cd;
var txtupSpeed = 1000; //change this
var timeupSpeed = 990; //change this
var timeOld, timeNew;
var oldpnc1, oldpnc2;

//TODO
//sus out how looping works. Bodged solution works at the moment
//make comments more descriptive
//implement a better timer solution. Still looking for possible solutions
//learn js..


//update time function loop
setInterval(function() { updatetime(); }, timeupSpeed); //loop the function

//Update text function loop
$(function() {
	updatetext();
	setInterval(function() { updatetext(); }, txtupSpeed);
});

//fetch and update time.
//thaks to madfriend via https://stackoverflow.com/questions/6542187/ for gracious example
function updatetime(){
 $.ajax({
		url: 'output/clock.xml',
		type: 'GET',
		dataType: 'xml',
		success: function(returnedXMLResponse){
				$('clock', returnedXMLResponse).each(function(){
					cd = $('cdownA', this).text();
					if(cd.length > 1) {
						document.getElementById("cd").innerHTML = cd;
					}
				})
		}
	});
}

//The Massive Text Updating Function (TMTUF)
function updatetext(){
		$.ajax({
			url: 'output/lowerthirdsports.xml',
			type: 'GET',
			 dataType: 'xml',
			 success: function(returnedXMLResponse){
				 $('lowerthirdsports', returnedXMLResponse).each(function(){

						//Optimization - checks for file update.``
						timeNew = $('time', this).text(); //gets modified time
						if (timeOld == timeNew) return; //compares modified time to previsous time
						timeOld = timeNew; //update the stored time
						//grabs entries from the xml and assigs to variables
						pnc1 = $('player1', this).text();
						pnc2 = $('player2', this).text();
						s1 = $('score1', this).text();
						s2 = $('score2', this).text();
						mm = $('matchA', this).text();
						gg = $('gameA', this).text();

						//check if game or match dont match DOM
						if (document.getElementById("mm").innerHTML != mm){
							document.getElementById("mm").innerHTML = mm;
						}
						if (document.getElementById("gg").innerHTML != gg){
							document.getElementById("gg").innerHTML = gg;
						}

						//checks for player swap
						//Condition Player1 AND Player 2 changes
						if (oldpnc1 != pnc1 && oldpnc2 != pnc2){

							cover ($("#box1"), 628)
							setTimeout(function() {
								var pc1 = pnc1.slice(pnc1.indexOf(' ') + 1, pnc1.length);	//seperates the pnc* variable to a color and name string
								var pn1 = pnc1.slice(0, pnc1.indexOf(' '))
								document.getElementById('pc1').style.fill = pc1; //recolors the svg rectangle using the new color string
								document.getElementById("p1").innerHTML = pn1;
								document.getElementById("s1").innerHTML = s1;

								var pc2 = pnc2.slice(pnc2.indexOf(" ") + 1, pnc2.length); //see above
								var pn2 = pnc2.slice(0, pnc2.indexOf(" "));
								document.getElementById('pc2').style.fill = pc2;
								document.getElementById("p2").innerHTML = pn2;
								document.getElementById("s2").innerHTML = s2;

								oldpnc1 = pnc1; //record change for the next check
								oldpnc2 = pnc2;
								console.log('Switch Detected!');
							}, 751 );
							uncover ($("#box1"), 628)

							return;
						}
						//Condition - Player1 changes
						if (oldpnc1 != pnc1){
							cover ($("#box1"), 315)
							setTimeout(function() {
								var pc1 = pnc1.slice(pnc1.indexOf(' ') + 1, pnc1.length);	//seperates the pnc* variable to a color and name string
								var pn1 = pnc1.slice(0, pnc1.indexOf(' '))
								document.getElementById('pc1').style.fill = pc1; //recolors the svg rectangle using the new color string
								document.getElementById("p1").innerHTML = pn1;
								document.getElementById("s1").innerHTML = s1;
								oldpnc1 = pnc1; //record change for the next check
							}, 751 );
							uncover ($("#box1"), 315)
						return;
						}
						//Condiditon - Player2 changes
						if (oldpnc2 != pnc2){
							cover ($("#box2"), 315)
							setTimeout(function() {
								var pc2 = pnc2.slice(pnc2.indexOf(' ') + 1, pnc2.length);	//seperates the pnc* variable to a color and name string
								var pn2 = pnc2.slice(0, pnc2.indexOf(' '))
								document.getElementById('pc2').style.fill = pc2; //recolors the svg rectangle using the new color string
								document.getElementById("p2").innerHTML = pn2;
								document.getElementById("s2").innerHTML = s2;
								oldpnc2 = pnc2; //record change for the next check
							}, 751 );
							uncover ($("#box2"), 315)
							return;
						}


						if (document.getElementById("s1").innerHTML != s1){
							cover($("#box3"), 115)
								setTimeout(function() {document.getElementById("s1").innerHTML=s1;}, 751 );
							uncover ($("#box3"), 115);
						}

						if (document.getElementById("s2").innerHTML != s2){
							cover($("#box2"), 315)
								setTimeout(function() {document.getElementById("s2").innerHTML = s2;}, 751 );
							uncover ($("#box2"), 315);
						}
				})
		}
	});
}
