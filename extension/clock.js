'use strict';

module.exports = function (nodecg) {
  const clock 					= nodecg.Replicant("clock", 					{defaultValue: "00:00"});
	const clocktick_state = nodecg.Replicant("clocktick_state",	{defaultValue: false});


	var timer = null;

	clocktick_state.on('change', (newValue, oldValue) => {
		if(newValue === false){
			clearInterval(timer);
			timer = null;
		}
		if(newValue === true){
			timer = setInterval(function(){
								clock.value--;
								nodecg.sendMessage('clock_update');
							}, 1000);
		}
  });


  clock.on('change', (newValue, oldValue) => {
    nodecg.sendMessage('clock_update');
  });

};
