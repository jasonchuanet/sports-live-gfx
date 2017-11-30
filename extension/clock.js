'use strict';

module.exports = function (nodecg) {
  const seconds 					= nodecg.Replicant("seconds", 					{defaultValue: "00:00"});
	const clocktick_state = nodecg.Replicant("clocktick_state",	{defaultValue: false});


	var timer = null;

	clocktick_state.on('change', (newValue, oldValue) => {
		if(newValue === false){
			clearInterval(timer);
			timer = null;
		}
		if(newValue === true){
			timer = setInterval(function(){
								seconds.value--;
								nodecg.sendMessage('clock_update');
							}, 1000);
		}
  });


  seconds.on('change', (newValue, oldValue) => {
    nodecg.sendMessage('clock_update');
  });

};
