const player1 			= nodecg.Replicant("player1", 			{defaultValue: "P1"});
const player1color 	= nodecg.Replicant("player1color", 	{defaultValue: "000000"});
const player2 			= nodecg.Replicant("player2", 			{defaultValue: "P2"});
const player2color 	= nodecg.Replicant("player2color", 	{defaultValue: "000000"});
const score1 				= nodecg.Replicant("score1", 				{defaultValue: "999"});
const score2 				= nodecg.Replicant("score2", 				{defaultValue: "999"});
const clock 				= nodecg.Replicant("clock", 				{defaultValue: "00:00"});
const logo          = nodecg.Replicant('assets:logo');
//document.getElementById("s1").innerHTML = "";

logo.on('change', (url) => {
    document.getElementById("logo").src = logo.value[0].url;
});

nodecg.listenFor('score_update', function () {
  document.getElementById("score1").innerHTML = score1.value;
	document.getElementById("score2").innerHTML = score2.value;
});
nodecg.listenFor('clock_update', function () {
  document.getElementById("clock").innerHTML = clock.value;
});
