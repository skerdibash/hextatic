var hexmaps = function(mapid) {
	
	var maps = {
		options: [
			[1, 1, 0],
			[1, 3, 1],
			[1, 1, 0]
		],
		play0: [
			[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
			[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
			[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
			[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
			[1, 2, 2, 1, 2, 1, 1, 2, 2, 1, 2, 1, 1, 2, 0],
			[1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
			[1, 2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 2, 1, 0],
			[1, 2, 1, 1, 2, 1, 1, 2, 3, 2, 1, 1, 2, 1, 1],
			[1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 0],
			[1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1],
			[1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 2, 1, 2, 1, 0],
			[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
			[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
			[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
			[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]
		],
		play1: [
			[0, 0, 1, 1, 0, 0, 0],
			[0, 0, 1, 1, 1, 0, 0],
			[1, 1, 1, 1, 1, 1, 0],
			[0, 1, 1, 1, 1, 1, 0],
			[1, 1, 1, 1, 1, 1, 0],
			[0, 0, 1, 1, 1, 0, 0],
			[0, 0, 1, 1, 0, 0, 0],
		]
	};

	return maps[mapid];
	
};


