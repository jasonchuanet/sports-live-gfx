'use strict';

module.exports = function (nodecg) {

	try {
		require('./clock.js')(nodecg);
	} catch (e) {
		nodecg.log.error('Failed to load clock', e.stack);
		process.exit(1);
	}

};
