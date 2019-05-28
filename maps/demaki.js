var hexmaps = function(mapid) {
	
	var maps = {
		demaki: [
			[0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0],
			[0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0],
			[0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0],
			[0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 0, 0],
			[0, 9, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 9, 0, 0],
			[0, 9, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 9, 0],
			[9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 9, 0],
			[9, 1, 1, 1, 2, 1, 1, 3, 1, 1, 1, 1, 1, 1, 9],
			[9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 0],
			[0, 9, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 9, 0],
			[0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 0, 0],
			[0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 0, 0],
			[0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0],
			[0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0],
			[0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0]
		]
	};

	return maps[mapid];
	
};

