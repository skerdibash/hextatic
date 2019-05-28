var hextaticColors = [
	"#ab2828", // red
	"#378aff", // blue
	"#f6e000", // yellow
	"#16f300", // green
	"#ff6e22", // orange
	"#8cc2bf", // gray-bue
	"#d23ae5", // purple
];

function gameColors(color, i) {
	
	var colors = [
		{
			hexend:"#985b10",
			hexblock:"#000000",
			hexred:"#ab2828",
			hextest:"#378aff",
			hexempty:"#ffffff",
			hexon: "#a19191"
		},
		{
			hexend:"#985b10",
			hexblock:"#000000",
			hexred:"#378aff",
			hextest:"#378aff",
			hexempty:"#ffffff",
			hexon: "#a19191"
		},
		{
			hexend:"#985b10",
			hexblock:"#000000",
			hexred:"#f6e000",
			hextest:"#378aff",
			hexempty:"#ffffff",
			hexon: "#a19191"
		},
		{
			hexend:"#985b10",
			hexblock:"#000000",
			hexred:"#16f300",
			hextest:"#378aff",
			hexempty:"#ffffff",
			hexon: "#a19191"
		},
		{
			hexend:"#985b10",
			hexblock:"#000000",
			hexred:"#ff6e22",
			hextest:"#378aff",
			hexempty:"#ffffff",
			hexon: "#a19191"
		},
		{
			hexend:"#985b10",
			hexblock:"#000000",
			hexred:"#8cc2bf",
			hextest:"#378aff",
			hexempty:"#ffffff",
			hexon: "#a19191"
		},
		{
			hexend:"#985b10",
			hexblock:"#000000",
			hexred:"#d23ae5",
			hextest:"#378aff",
			hexempty:"#ffffff",
			hexon: "#a19191"
		}
	];
	
	return colors[i][color];
	
}

function hexColors(value, i) {

	if(value === 2) return gameColors("hexblock", i);
	else if(value === 3) return gameColors("hexred", i);
	else return gameColors("hexempty", i);

}


