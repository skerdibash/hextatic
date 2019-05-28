var MAX_STAGES = 7;
var MAX_MAPS = 25;

jQuery(document).ready(function() {

	loadStart();

});

function loadGame(stageid, mapid) {

	jQuery("#optionsbox .back").off("click").on("click", function() {
		jQuery("#gamebox").hide();
		jQuery("#optionsbox").hide();
		loadStageSelect();
	});

	jQuery("#optionsbox .refresh").off("click").on("click", function() {
		d3.select("#optionsbox .refresh")
			.attr("transform", "rotate(181)");
		d3.select("#optionsbox .refresh")
			.transition()
			.duration(1000)
			.attr("transform", "rotate(360)");
		loadGame(stageid, mapid);
	});

	d3.select("#gamebox svg").remove();

	var stage = hexstages["stage" + stageid];
	var map = stage["map" + mapid];


	var sizex = jQuery(window).width();
	var sizey = jQuery(window).height();
	var size = sizex > sizey ? sizey :sizex;
	if(size > 450) {
		size = 450;
	}

	var hexGrid = new HexGrid(map, size);

	var radius = hexGrid.hexRadius * 8 / 10;
	
	var hexbin = d3.hexbin().radius(hexGrid.hexRadius);
	
	//Create SVG element
	var svg = d3.select("#gamebox").append("svg")
		.attr("width", hexGrid.width)
		.attr("height", hexGrid.height)
		.append("g")
		.attr("transform", "translate(" + 
			(hexGrid.hexWidth) + 
			"," + (hexGrid.hexRadius) + 
			")");
	
	//Start drawing the hexagons
	svg.append("g")
		.selectAll(".hexagon")
		.data(hexbin(hexGrid.points))
		.enter().append("path")
		.property("hex", function(d, i) {
			return hexGrid.hexes[hexGrid.itox(i)][hexGrid.itoy(i)];
		})
		.attr("class", "hexagon")
		.attr("id", function(d) {
			return this.hex.id();
		})
    	.attr("d", function(d) {
			return !hexGrid.isHiddenHex(this.hex) ? "m" + d.x + "," + d.y + hexbin.hexagon(radius) : null;
		})
		.attr("stroke", gameColors("hexblock", stageid))
		.attr("stroke-width", "1px")
		.style("fill", function() {
			return hexColors(this.hex.val, stageid);
		})
		.on("click", function(d) {
			if(hexGrid.isBlockHex(this.hex) || hexGrid.isRedHex(this.hex)) {
				return;
			}else {
				this.hex.val = 2;
				d3.select(this).style("fill", gameColors("hexblock", stageid));
				var nexthex = hexGrid.moveRedHex();
				if(nexthex === null) {
					var stage = JSON.parse(localStorage.getItem("stage" + stageid));
					stage[mapid] = 1;
					if(mapid === MAX_MAPS - 1) {
						localStorage.setItem("stage" + stageid, JSON.stringify(stage));
						mapid = 0;
						stageid++;
					} else {
						if(jQuery.inArray(3, stage) === -1) {
							stage[++mapid] = 3;
							localStorage.setItem("stage" + stageid, JSON.stringify(stage));
						} else {
							mapid++;
						}
					}
					if(stageid === MAX_STAGES) {
						jQuery("#gamebox").hide();
						jQuery("#optionsbox").hide();
						loadStart();
						return;
					}
					loadGame(stageid, mapid);
				} else {
					hexGrid.redhex.val = 1;
					d3.select(".hexagon#"+hexGrid.redhex.id())
						.style("fill", gameColors("hexempty", stageid));
							
					hexGrid.redhex = nexthex;
					d3.select(".hexagon#"+hexGrid.redhex.id())
						.style("fill", gameColors("hexred", stageid));
					if(hexGrid.isEndHex(hexGrid.redhex)) {
						jQuery("#optionsbox .refresh").click();
					}else {
						hexGrid.redhex.val = 3;
					}
				}
			}
		});
		
		jQuery(".map-number")
				.html(mapid)
				.css("color", gameColors("hexred", stageid));

		jQuery("#gamebox").show();
		jQuery("#optionsbox").show();

}

function loadStageSelect() {

	if(localStorage.getItem("currentstage") === null) {
		localStorage.setItem("currentstage", 0);
	}

	var stageid = parseInt(localStorage.getItem("currentstage"));

	if(localStorage.getItem("stage" + stageid) === null) {
		localStorage.setItem("stage" + stageid, 
			JSON.stringify([	
				3, 2, 2, 2, 2,
				2, 2, 2, 2, 2,
				2, 2, 2, 2, 2,
				2, 2, 2, 2, 2,
				2, 2, 2, 2, 2
			])
		);
	}

	var stage = JSON.parse(localStorage.getItem("stage" + stageid));

	jQuery(".rectbox").each(function() {
		jQuery(this).removeClass();
		if(stage[this.id] === 1) {
			jQuery(this).addClass("rectbox done");
			jQuery(this).off("click").on("click", function() {
				jQuery("#selectbox").hide();
				jQuery("#optionsbox-pregame").hide();
				loadGame(stageid, this.id);
			});
		}else if(stage[this.id] === 3) {
			jQuery(this).addClass("rectbox tobe-done tobe-done" + stageid);
			jQuery(this).off("click").on("click", function() {
				jQuery("#selectbox").hide();
				jQuery("#optionsbox-pregame").hide();
				loadGame(stageid, this.id);
			});
		} else {
			jQuery(this).addClass("rectbox");
		}
	});

	if(stageid === 0) {
		jQuery("#changebox-first").show();
	} else if(stageid === MAX_STAGES - 1) {
		jQuery("#changebox-last").show();
	} else {
		jQuery("#changebox").show();
	}
	jQuery(".refresh").css("fill", hextaticColors[stageid]);
	jQuery(".forward").css("fill", hextaticColors[stageid]);
	jQuery(".back").css("fill", hextaticColors[stageid]);

	jQuery("#optionsbox-pregame .back").off("click").on("click", function() {
		jQuery("#selectbox").hide();
		jQuery("#changebox-first").hide();
		jQuery("#changebox").hide();
		jQuery("#changebox-last").hide();
		jQuery("#optionsbox-pregame").hide();
		loadStart();
	});

	jQuery("#changebox .forward, #changebox-first .forward").off("click").on("click", function() {
		localStorage.setItem("currentstage", stageid + 1);
		jQuery("#changebox-first").hide();
		jQuery("#changebox").hide();
		loadStageSelect();
	});

	jQuery("#changebox .back, #changebox-last .back").off("click").on("click", function() {
		localStorage.setItem("currentstage", stageid - 1);
		jQuery("#changebox").hide();
		jQuery("#changebox-last").hide();
		loadStageSelect();
	});

	jQuery("#selectbox").show();
	jQuery("#optionsbox-pregame").show();

}

function loadStart() {
	
	var hextaticAnimationStop = false;

	function hextaticAnimation(i) {
		if(hextaticAnimationStop === true) {
			return;
		}
		if(i === MAX_STAGES) {
			i = 0;
		}
		d3.select("#playbutton-inner")
			.transition()
			.duration(1000)
			.style("fill", hextaticColors[i])
			.on("end", function() {
				hextaticAnimation(i + 1);
			});
	}

	hextaticAnimation(0);

	jQuery("#playbutton").off("click").on("click", function() {
		hextaticAnimationStop = true;
		jQuery("#playbox").hide();
		loadStageSelect();
	});

	jQuery("#playbox").show();

}

function isStorageSupported() {

	return typeof(Storage) !== "undefined";

}