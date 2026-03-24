/* --- geometry and timing of the menu --- 
	values are the lists with parameters for different menu levels
	for this menu: [blue_level, green_level, red_level]
*/
var MENU_POS1 = {
	// item sizes for different levels of menu
	'height': [24, 20, 20],
	'width': [120, 120, 120],
	// menu block offset from the origin:
	//	for root level origin is upper left corner of the page
	//	for other levels origin is upper left corner of parent item
	'block_top': [103, 23, 20],
	'block_left': [154, 0, 20],
	// offsets between items of the same level
	'top': [0, 19, 19],
	'left': [105, 0, 0],
	// time in milliseconds before menu is hidden after cursor has gone out
	// of any items
	'hide_delay': [200, 200, 200]
};


var MENU_POS2 = {
	// item sizes for different levels of menu
	'height': [24, 20, 20],
	'width': [120, 120, 120],
	// menu block offset from the origin:
	//	for root level origin is upper left corner of the page
	//	for other levels origin is upper left corner of parent item
	'block_top': [0, 23, 5],
	'block_left': [203, 0, 130],
	// offsets between items of the same level
	'top': [0, 19, 21],
	'left': [105, 0, 0],
	// time in milliseconds before menu is hidden after cursor has gone out
	// of any items
	'hide_delay': [200, 200, 200]
};

/* --- dynamic menu styles ---
note: you can add as many style properties as you wish but be not all browsers
are able to render them correctly. The only relatively safe properties are
'color' and 'background'.
*/


/* --- dynamic menu styles ---
note: you can add as many style properties as you wish but be not all browsers
are able to render them correctly. The only relatively safe properties are
'color' and 'background'.
*/
var MENU_STYLES1 = {
	// default item state when it is visible but doesn't have mouse over
	'onmouseout': [
		'color', ['#FFFFFF', '#000000', '#000000'], 
		'background', ['#4682B4', '#4682B4', '#5D74B6'],
		'textDecoration', ['none', 'none', 'none'],
		'fontWeight', ['normal', 'normal', 'normal'],
	],
	// state when item has mouse over it
	'onmouseover': [
		'color', ['#FFFFFF', '#000000', '#000000'], 
		'background', ['#4682B4', '#8AB0C7', '#5D74B6'],
		'textDecoration', ['underline', 'none', 'none'],
		'fontWeight', ['normal', 'bold', 'normal'],
	],
	// state when mouse button has been pressed on the item
	'onmousedown': [
		'color', ['#FFFFFF', '#000000', '#000000'], 
		'background', ['#35719B', '#35719B ', '#5D74B6'],
		'textDecoration', ['underline', 'none', 'none'],
		'fontWeight', ['normal', 'bold', 'normal'],
	]
};
	
