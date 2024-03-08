// Acid Rain
// By: Racquell Grey

/* jshint browser : true, devel : true, esversion : 5, freeze : true */
/* globals PS : true */

/*
PS.init( system, options )
Called once after engine is initialized but before event-polling begins.
This function doesn't have to do anything, although initializing the grid dimensions with PS.gridSize() is recommended.
If PS.grid() is not called, the default grid dimensions (8 x 8 beads) are applied.
Any value returned is ignored.
[system : Object] = A JavaScript object containing engine and host platform information properties; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

// UNCOMMENT the following code BLOCK to expose the PS.init() event handler:

var player;
var posX;
var countdownToWin = 60;
var timer; // Rain timer
var timer2; // Win Timer
var lose = false;
var win = false;
var RAIN = {

	GRID_WIDTH: 23, // width of grid
	GRID_HEIGHT: 23, // height of grid
	BOTTOM_ROW: 23, // last row of grid
	FRAME_RATE: 6,	// animation frame rate; 6/60ths = 10 fps
	BG_COLOR: 0x7C162B, // background color
	DROP_COLOR: 0x00FE21, // raindrop color
  PLAYER_COLOR: 0xFFFFFF,
	PLAYER_ROW: 22,

	// VARIABLES
	// Variable names are lower-case with camelCaps

	// These two arrays store the X and Y positions of active drops

	dropsX: [],
	dropsY: [],

	// FUNCTIONS
	// Function names are lower case with camelCaps

	// RAIN.splash()
	// "Splash" a bead when it reaches bottom row

	splash : function ( x, y ) {
		"use strict";

		// Paint using background color
		y = RAIN.PLAYER_ROW;

		PS.color( x, y, RAIN.BG_COLOR );

		// Play splash sound

		PS.audioPlay( "fx_drip2" );
	},

 winTimer : function () {
	 if (win = false){
	 		if (countdownToWin > 0){
 				countdownToWin -= 1; // decrement counter
			if (countdownToWin == 1){
					win = true;
				}
			if ((countdownToWin % 10) == 0){
				timer =	PS.timerStart( RAIN.FRAME_RATE +.1, RAIN.tick );
				}
			}
 		} else {

 					PS.statusText( "YOU WIN!" );
 					timer =	PS.timerStop (timer);
 					timer2 = PS.timerStop( timer2 ); // stop timer

 					PS.color( PS.ALL, PS.ALL, RAIN.BG_COLOR);

 					//The Letter Y
					PS.color (2, 5, RAIN.DROP_COLOR);
					PS.color (3, 6, RAIN.DROP_COLOR);
					PS.color (4, 7, RAIN.DROP_COLOR);
					PS.color (5, 8, RAIN.DROP_COLOR);
					PS.color (6, 7, RAIN.DROP_COLOR);
					PS.color (7, 6, RAIN.DROP_COLOR);
					PS.color (8, 5, RAIN.DROP_COLOR);
					PS.color (5, 9, RAIN.DROP_COLOR);
					PS.color (5, 10, RAIN.DROP_COLOR);
					PS.color (5, 11, RAIN.DROP_COLOR);
					PS.color (5, 12, RAIN.DROP_COLOR);

					//The Letter O
					PS.color (10, 5, RAIN.DROP_COLOR);
					PS.color (11, 5, RAIN.DROP_COLOR);
					PS.color (12, 5, RAIN.DROP_COLOR);
					PS.color (13, 5, RAIN.DROP_COLOR);
					PS.color (10, 12, RAIN.DROP_COLOR);
					PS.color (11, 12, RAIN.DROP_COLOR);
					PS.color (12, 12, RAIN.DROP_COLOR);
					PS.color (13, 12, RAIN.DROP_COLOR);
					PS.color (9, 6, RAIN.DROP_COLOR);
					PS.color (9, 7, RAIN.DROP_COLOR);
					PS.color (9, 8, RAIN.DROP_COLOR);
					PS.color (9, 9, RAIN.DROP_COLOR);
					PS.color (9, 10, RAIN.DROP_COLOR);
					PS.color (9, 11, RAIN.DROP_COLOR);
					PS.color (14, 6, RAIN.DROP_COLOR);
					PS.color (14, 7, RAIN.DROP_COLOR);
					PS.color (14, 8, RAIN.DROP_COLOR);
					PS.color (14, 9, RAIN.DROP_COLOR);
					PS.color (14, 10, RAIN.DROP_COLOR);
					PS.color (14, 11, RAIN.DROP_COLOR);

					//The Letter U
					PS.color (16, 5, RAIN.DROP_COLOR);
					PS.color (16, 6, RAIN.DROP_COLOR);
					PS.color (16, 7, RAIN.DROP_COLOR);
					PS.color (16, 8, RAIN.DROP_COLOR);
					PS.color (16, 9, RAIN.DROP_COLOR);
					PS.color (16, 10, RAIN.DROP_COLOR);
					PS.color (16, 11, RAIN.DROP_COLOR);
					PS.color (17, 12, RAIN.DROP_COLOR);
					PS.color (18, 12, RAIN.DROP_COLOR);
					PS.color (19, 12, RAIN.DROP_COLOR);
					PS.color (20, 12, RAIN.DROP_COLOR);
					PS.color (21, 5, RAIN.DROP_COLOR);
					PS.color (21, 6, RAIN.DROP_COLOR);
					PS.color (21, 7, RAIN.DROP_COLOR);
					PS.color (21, 8, RAIN.DROP_COLOR);
					PS.color (21, 9, RAIN.DROP_COLOR);
					PS.color (21, 10, RAIN.DROP_COLOR);
					PS.color (21, 11, RAIN.DROP_COLOR);

					//The Letter W
					PS.color (1, 14, RAIN.DROP_COLOR);
					PS.color (1, 15, RAIN.DROP_COLOR);
					PS.color (1, 16, RAIN.DROP_COLOR);
					PS.color (1, 17, RAIN.DROP_COLOR);
					PS.color (1, 18, RAIN.DROP_COLOR);
					PS.color (1, 19, RAIN.DROP_COLOR);
					PS.color (1, 20, RAIN.DROP_COLOR);
					PS.color (5, 14, RAIN.DROP_COLOR);
					PS.color (5, 15, RAIN.DROP_COLOR);
					PS.color (5, 16, RAIN.DROP_COLOR);
					PS.color (5, 17, RAIN.DROP_COLOR);
					PS.color (5, 18, RAIN.DROP_COLOR);
					PS.color (5, 19, RAIN.DROP_COLOR);
					PS.color (5, 20, RAIN.DROP_COLOR);
					PS.color (2, 20, RAIN.DROP_COLOR);
					PS.color (3, 19, RAIN.DROP_COLOR);
					PS.color (4, 20, RAIN.DROP_COLOR);

					//The Letter I
					PS.color (9, 14, RAIN.DROP_COLOR);
					PS.color (9, 15, RAIN.DROP_COLOR);
					PS.color (9, 16, RAIN.DROP_COLOR);
					PS.color (9, 17, RAIN.DROP_COLOR);
					PS.color (9, 18, RAIN.DROP_COLOR);
					PS.color (9, 19, RAIN.DROP_COLOR);
					PS.color (9, 20, RAIN.DROP_COLOR);
					PS.color (7, 20, RAIN.DROP_COLOR);
					PS.color (8, 20, RAIN.DROP_COLOR);
					PS.color (10, 20, RAIN.DROP_COLOR);
					PS.color (11, 20, RAIN.DROP_COLOR);
					PS.color (7, 14, RAIN.DROP_COLOR);
					PS.color (8, 14, RAIN.DROP_COLOR);
					PS.color (10, 14, RAIN.DROP_COLOR);
					PS.color (11, 14, RAIN.DROP_COLOR);

					//The Letter N
					PS.color (13, 14, RAIN.DROP_COLOR);
					PS.color (13, 15, RAIN.DROP_COLOR);
					PS.color (13, 16, RAIN.DROP_COLOR);
					PS.color (13, 17, RAIN.DROP_COLOR);
					PS.color (13, 18, RAIN.DROP_COLOR);
					PS.color (13, 19, RAIN.DROP_COLOR);
					PS.color (13, 20, RAIN.DROP_COLOR);
					PS.color (19, 14, RAIN.DROP_COLOR);
					PS.color (19, 15, RAIN.DROP_COLOR);
					PS.color (19, 16, RAIN.DROP_COLOR);
					PS.color (19, 17, RAIN.DROP_COLOR);
					PS.color (19, 18, RAIN.DROP_COLOR);
					PS.color (19, 19, RAIN.DROP_COLOR);
					PS.color (19, 20, RAIN.DROP_COLOR);
					PS.color (14, 15, RAIN.DROP_COLOR);
					PS.color (15, 16, RAIN.DROP_COLOR);
					PS.color (16, 17, RAIN.DROP_COLOR);
					PS.color (17, 18, RAIN.DROP_COLOR);
					PS.color (18, 19, RAIN.DROP_COLOR);

					//Exclamation Point
					PS.color (21, 14, RAIN.DROP_COLOR);
					PS.color (21, 15, RAIN.DROP_COLOR);
					PS.color (21, 16, RAIN.DROP_COLOR);
					PS.color (21, 17, RAIN.DROP_COLOR);
					PS.color (21, 18, RAIN.DROP_COLOR);
					PS.color (21, 20, RAIN.DROP_COLOR);

					PS.audioPlay( "fx_tada" );
 }
},

	// RAIN.tick()
	// Called on every clock tick
	// Used to animate the raindrops

	tick : function () {
		"use strict";
		var len;
		var i;
		var x = PS.random (RAIN.GRID_WIDTH-1); //random x
		var y = 0; //constant y - always spawn at the top

		// The length of the RAIN.DropsX array is the current number of drops

		len = RAIN.dropsX.length; // number of drops

		// If drop is above bottom row, start a drop

		if ( y < RAIN.BOTTOM_ROW ) {

			// Add initial X and Y positions of raindrop to animation list
			RAIN.dropsX.push( x );
			RAIN.dropsY.push( 0 );
			PS.color( x, y, RAIN.DROP_COLOR ); // set the color
			PS.audioPlay( "fx_drip1" ); // play drip sound
		} else {
		// Otherwise splash it immediately
			RAIN.splash( x, y );
		}

		// Loop through each active raindrop

		i = 0;
		while ( i < len )	{
			// get current position of raindrop

			x = RAIN.dropsX[ i ];
			y = RAIN.dropsY[ i ];

			// If bead is above last row, erase it and redraw one bead lower

			if ( y < RAIN.BOTTOM_ROW ) {
				// erase the existing drop

				PS.color( x, y, RAIN.BG_COLOR );

				// add 1 to y position

				y += 1;

				// update its y position in the array

				RAIN.dropsY[ i ] = y;

				// Has drop reached the bottom row yet?

				if ( y < RAIN.BOTTOM_ROW ) { // nope

				// Repaint the drop one bead lower

					PS.color( x, y, RAIN.DROP_COLOR );
				}

				// Drop has reached bottom! Splash it!

				else {
					RAIN.splash( x, y );
				}

				if ((x == posX) && (y == RAIN.PLAYER_ROW)){
					lose = true;

					if (lose = true){

					timer =	PS.timerStop (timer); // Stops random rain
					timer2 = PS.timerStop(timer2);

					PS.color( PS.ALL, PS.ALL, RAIN.BG_COLOR);

					PS.statusColor( 0,254,33 ); //Text color
					PS.statusText( "You Lose" );

					//The Letter Y
					PS.color (2, 5, RAIN.DROP_COLOR);
					PS.color (3, 6, RAIN.DROP_COLOR);
					PS.color (4, 7, RAIN.DROP_COLOR);
					PS.color (5, 8, RAIN.DROP_COLOR);
					PS.color (6, 7, RAIN.DROP_COLOR);
					PS.color (7, 6, RAIN.DROP_COLOR);
					PS.color (8, 5, RAIN.DROP_COLOR);
					PS.color (5, 9, RAIN.DROP_COLOR);
					PS.color (5, 10, RAIN.DROP_COLOR);
					PS.color (5, 11, RAIN.DROP_COLOR);
					PS.color (5, 12, RAIN.DROP_COLOR);

					//The Letter O
					PS.color (10, 5, RAIN.DROP_COLOR);
					PS.color (11, 5, RAIN.DROP_COLOR);
					PS.color (12, 5, RAIN.DROP_COLOR);
					PS.color (13, 5, RAIN.DROP_COLOR);
					PS.color (10, 12, RAIN.DROP_COLOR);
					PS.color (11, 12, RAIN.DROP_COLOR);
					PS.color (12, 12, RAIN.DROP_COLOR);
					PS.color (13, 12, RAIN.DROP_COLOR);
					PS.color (9, 6, RAIN.DROP_COLOR);
					PS.color (9, 7, RAIN.DROP_COLOR);
					PS.color (9, 8, RAIN.DROP_COLOR);
					PS.color (9, 9, RAIN.DROP_COLOR);
					PS.color (9, 10, RAIN.DROP_COLOR);
					PS.color (9, 11, RAIN.DROP_COLOR);
					PS.color (14, 6, RAIN.DROP_COLOR);
					PS.color (14, 7, RAIN.DROP_COLOR);
					PS.color (14, 8, RAIN.DROP_COLOR);
					PS.color (14, 9, RAIN.DROP_COLOR);
					PS.color (14, 10, RAIN.DROP_COLOR);
					PS.color (14, 11, RAIN.DROP_COLOR);

					//The Letter U
					PS.color (16, 5, RAIN.DROP_COLOR);
					PS.color (16, 6, RAIN.DROP_COLOR);
					PS.color (16, 7, RAIN.DROP_COLOR);
					PS.color (16, 8, RAIN.DROP_COLOR);
					PS.color (16, 9, RAIN.DROP_COLOR);
					PS.color (16, 10, RAIN.DROP_COLOR);
					PS.color (16, 11, RAIN.DROP_COLOR);
					PS.color (17, 12, RAIN.DROP_COLOR);
					PS.color (18, 12, RAIN.DROP_COLOR);
					PS.color (19, 12, RAIN.DROP_COLOR);
					PS.color (20, 12, RAIN.DROP_COLOR);
					PS.color (21, 5, RAIN.DROP_COLOR);
					PS.color (21, 6, RAIN.DROP_COLOR);
					PS.color (21, 7, RAIN.DROP_COLOR);
					PS.color (21, 8, RAIN.DROP_COLOR);
					PS.color (21, 9, RAIN.DROP_COLOR);
					PS.color (21, 10, RAIN.DROP_COLOR);
					PS.color (21, 11, RAIN.DROP_COLOR);

					//The Letter L
					PS.color (1, 14, RAIN.DROP_COLOR);
					PS.color (1, 15, RAIN.DROP_COLOR);
					PS.color (1, 16, RAIN.DROP_COLOR);
					PS.color (1, 17, RAIN.DROP_COLOR);
					PS.color (1, 18, RAIN.DROP_COLOR);
					PS.color (1, 19, RAIN.DROP_COLOR);
					PS.color (1, 20, RAIN.DROP_COLOR);
					PS.color (2, 20, RAIN.DROP_COLOR);
					PS.color (3, 20, RAIN.DROP_COLOR);
					PS.color (4, 20, RAIN.DROP_COLOR);
					PS.color (5, 20, RAIN.DROP_COLOR);

					//The Letter O again
					PS.color (7, 14, RAIN.DROP_COLOR);
					PS.color (8, 14, RAIN.DROP_COLOR);
					PS.color (9, 14, RAIN.DROP_COLOR);
					PS.color (10, 14, RAIN.DROP_COLOR);
					PS.color (7, 20, RAIN.DROP_COLOR);
					PS.color (8, 20, RAIN.DROP_COLOR);
					PS.color (9, 20, RAIN.DROP_COLOR);
					PS.color (10, 20, RAIN.DROP_COLOR);
					PS.color (6, 15, RAIN.DROP_COLOR);
					PS.color (6, 16, RAIN.DROP_COLOR);
					PS.color (6, 17, RAIN.DROP_COLOR);
					PS.color (6, 18, RAIN.DROP_COLOR);
					PS.color (6, 19, RAIN.DROP_COLOR);
					PS.color (11, 15, RAIN.DROP_COLOR);
					PS.color (11, 16, RAIN.DROP_COLOR);
					PS.color (11, 17, RAIN.DROP_COLOR);
					PS.color (11, 18, RAIN.DROP_COLOR);
					PS.color (11, 19, RAIN.DROP_COLOR);

					//The Letter S
					PS.color (13, 14, RAIN.DROP_COLOR);
					PS.color (14, 14, RAIN.DROP_COLOR);
					PS.color (15, 14, RAIN.DROP_COLOR);
					PS.color (16, 14, RAIN.DROP_COLOR);
					PS.color (13, 15, RAIN.DROP_COLOR);
					PS.color (13, 16, RAIN.DROP_COLOR);
					PS.color (13, 17, RAIN.DROP_COLOR);
					PS.color (14, 17, RAIN.DROP_COLOR);
					PS.color (15, 17, RAIN.DROP_COLOR);
					PS.color (16, 17, RAIN.DROP_COLOR);
					PS.color (16, 18, RAIN.DROP_COLOR);
					PS.color (16, 19, RAIN.DROP_COLOR);
					PS.color (13, 20, RAIN.DROP_COLOR);
					PS.color (14, 20, RAIN.DROP_COLOR);
					PS.color (15, 20, RAIN.DROP_COLOR);
					PS.color (16, 20, RAIN.DROP_COLOR);

					//The Letter E
					PS.color (18, 14, RAIN.DROP_COLOR);
					PS.color (19, 14, RAIN.DROP_COLOR);
					PS.color (20, 14, RAIN.DROP_COLOR);
					PS.color (21, 14, RAIN.DROP_COLOR);
					PS.color (18, 20, RAIN.DROP_COLOR);
					PS.color (19, 20, RAIN.DROP_COLOR);
					PS.color (20, 20, RAIN.DROP_COLOR);
					PS.color (21, 20, RAIN.DROP_COLOR);
					PS.color (18, 15, RAIN.DROP_COLOR);
					PS.color (18, 16, RAIN.DROP_COLOR);
					PS.color (18, 17, RAIN.DROP_COLOR);
					PS.color (18, 18, RAIN.DROP_COLOR);
					PS.color (18, 19, RAIN.DROP_COLOR);
					PS.color (19, 17, RAIN.DROP_COLOR);
					PS.color (20, 17, RAIN.DROP_COLOR);
					PS.color (21, 17, RAIN.DROP_COLOR);

					PS.audioPlay( "fx_wilhelm" );

					break;
					}
				}

				// point index to next drop

				i += 1;
			}

			// Bead has already been splashed, so remove it from animation list

			else
			{
				RAIN.dropsX.splice( i, 1 );
				RAIN.dropsY.splice( i, 1 );

				// Arrays are now one element smaller, so update the array length variable
				// But leave the index variable [i] alone!
				// It's already pointing at the next drop

				len -= 1;
			}
		}
	}
};

PS.init = function( system, options ) {
	"use strict"; // Do not remove this directive!

	// Uncomment the following code line
	// to verify operation:

	// PS.debug( "PS.init() called\n" );

	// This function should normally begin
	// with a call to PS.gridSize( x, y )
	// where x and y are the desired initial
	// dimensions of the grid.
	// Call PS.gridSize() FIRST to avoid problems!
	// The sample call below sets the grid to the
	// default dimensions (8 x 8).
	// Uncomment the following code line and change
	// the x and y parameters as needed.

	 PS.gridSize( RAIN.GRID_WIDTH, RAIN.GRID_HEIGHT );
   PS.gridColor(RAIN.BG_COLOR);
   PS.color( PS.ALL, PS.ALL, RAIN.BG_COLOR); //All bead colors
   PS.border( PS.ALL, PS.ALL, 0 ); //Border color


	// This is also a good place to display
	// your game title or a welcome message
	// in the status line above the grid.
	// Uncomment the following code line and
	// change the string parameter as needed.

	 PS.statusText( "Acid Rain" );
   PS.statusColor( 0,254,33 ); //Text color

	 posX = 11;
	 player = PS.color (posX, RAIN.PLAYER_ROW, RAIN.PLAYER_COLOR); // Player

	 // Start the animation timer

	 timer =	PS.timerStart( RAIN.FRAME_RATE, RAIN.tick );
	 PS.debug("Timer Start:" + timer);
	 timer2 =	PS.timerStart( 60, RAIN.winTimer );

	// Add any other initialization code you need here.
};

/*
PS.touch ( x, y, data, options )
Called when the left mouse button is clicked over bead(x, y), or when bead(x, y) is touched.
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

// UNCOMMENT the following code BLOCK to expose the PS.touch() event handler:

/*

PS.touch = function( x, y, data, options ) {
	"use strict"; // Do not remove this directive!

	// Uncomment the following code line
	// to inspect x/y parameters:

	// PS.debug( "PS.touch() @ " + x + ", " + y + "\n" );

	// Add code here for mouse clicks/touches
	// over a bead.
};

*/

/*
PS.release ( x, y, data, options )
Called when the left mouse button is released, or when a touch is lifted, over bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

// UNCOMMENT the following code BLOCK to expose the PS.release() event handler:

/*

PS.release = function( x, y, data, options ) {
	"use strict"; // Do not remove this directive!

	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.release() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse button/touch is released over a bead.
};

*/

/*
PS.enter ( x, y, button, data, options )
Called when the mouse cursor/touch enters bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

// UNCOMMENT the following code BLOCK to expose the PS.enter() event handler:

/*

PS.enter = function( x, y, data, options ) {
	"use strict"; // Do not remove this directive!

	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch enters a bead.
};

*/

/*
PS.exit ( x, y, data, options )
Called when the mouse cursor/touch exits bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

// UNCOMMENT the following code BLOCK to expose the PS.exit() event handler:

/*

PS.exit = function( x, y, data, options ) {
	"use strict"; // Do not remove this directive!

	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.exit() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch exits a bead.
};

*/

/*
PS.exitGrid ( options )
Called when the mouse cursor/touch exits the grid perimeter.
This function doesn't have to do anything. Any value returned is ignored.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

// UNCOMMENT the following code BLOCK to expose the PS.exitGrid() event handler:

/*

PS.exitGrid = function( options ) {
	"use strict"; // Do not remove this directive!

	// Uncomment the following code line to verify operation:

	// PS.debug( "PS.exitGrid() called\n" );

	// Add code here for when the mouse cursor/touch moves off the grid.
};

*/

/*
PS.keyDown ( key, shift, ctrl, options )
Called when a key on the keyboard is pressed.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

// UNCOMMENT the following code BLOCK to expose the PS.keyDown() event handler:

PS.keyDown = function( key, shift, ctrl, options ) {
	"use strict"; // Do not remove this directive!

	if (key == PS.KEY_ARROW_LEFT && posX > 0){
		PS.color (posX, RAIN.PLAYER_ROW, RAIN.BG_COLOR);
		posX -=1;
		player = PS.color (posX, RAIN.PLAYER_ROW, RAIN.PLAYER_COLOR);
	}

	if (key == PS.KEY_ARROW_RIGHT && posX < RAIN.GRID_WIDTH-1){
		PS.color (posX, RAIN.PLAYER_ROW, RAIN.BG_COLOR);
		posX +=1;
		player = PS.color (posX, RAIN.PLAYER_ROW, RAIN.PLAYER_COLOR);
	}


	// Uncomment the following code line to inspect first three parameters:
	// PS.debug( "PS.keyDown(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );

};

keyDown (PS.KEY_ARROW_LEFT);
keyDown (PS.KEY_ARROW_RIGHT);

/*
PS.keyUp ( key, shift, ctrl, options )
Called when a key on the keyboard is released.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

// UNCOMMENT the following code BLOCK to expose the PS.keyUp() event handler:


/*
PS.keyUp = function( key, shift, ctrl, options ) {
	"use strict"; // Do not remove this directive!

	// Uncomment the following code line to inspect first three parameters:

	// PS.debug( "PS.keyUp(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );

	// Add code here for when a key is released.
};

*/

/*
PS.input ( sensors, options )
Called when a supported input device event (other than those above) is detected.
This function doesn't have to do anything. Any value returned is ignored.
[sensors : Object] = A JavaScript object with properties indicating sensor status; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
NOTE: Currently, only mouse wheel events are reported, and only when the mouse cursor is positioned directly over the grid.
*/

// UNCOMMENT the following code BLOCK to expose the PS.input() event handler:

/*

PS.input = function( sensors, options ) {
	"use strict"; // Do not remove this directive!

	// Uncomment the following code lines to inspect first parameter:

//	 var device = sensors.wheel; // check for scroll wheel
//
//	 if ( device ) {
//	   PS.debug( "PS.input(): " + device + "\n" );
//	 }

	// Add code here for when an input event is detected.
};

*/

/*
PS.shutdown ( options )
Called when the browser window running Perlenspiel is about to close.
This function doesn't have to do anything. Any value returned is ignored.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
NOTE: This event is generally needed only by applications utilizing networked telemetry.
*/

// UNCOMMENT the following code BLOCK to expose the PS.shutdown() event handler:

/*

PS.shutdown = function( options ) {
	"use strict"; // Do not remove this directive!

	// Uncomment the following code line to verify operation:

	// PS.debug( "“Dave. My mind is going. I can feel it.”\n" );

	// Add code here to tidy up when Perlenspiel is about to close.
};

*/
