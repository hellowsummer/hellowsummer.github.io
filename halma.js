// draw the gameboard
var gameboard = document.getElementById("gameboard");
var gameboard_context = gameboard.getContext("2d");

var size_of_block = 50;
var circle_radius = size_of_block / 2 * 0.75;
gameboard.width = size_of_block*9+1;
gameboard.height = size_of_block*9+1 + 50;

gameboard_context.beginPath();
for (var x=0; x<10; x++)="" {="" gameboard_context.moveto(x*size_of_block+0.5,="" 0);="" gameboard_context.lineto(x*size_of_block+0.5,="" size_of_block*9+0.5);="" }="" for="" (var="" y="0;" y<10;="" y++)="" gameboard_context.moveto(0,="" y*size_of_block+0.5);="" gameboard_context.lineto(size_of_block*9+0.5,="" gameboard_context.closepath();="" gameboard_context.strokestyle="#ccc" ;="" gameboard_context.stroke();="" var="" selected="{" "col":-1,="" "row":-1="" };="" exist="{};" block="0;" block<81;="" block++)="" exist[block]="false;" existon="function" (col,="" row)="" return="" exist[col*9+row];="" last_move="{};" last_move.jump="false;" last_move.end_col="-1;" last_move.end_row="-1;" jump="false;" label="" -="" moves="" updatemoves="function()" moves++;="" ystart="size_of_block*9+1+10;" gameboard_context.clearrect(0,="" ystart,="" gameboard.width,="" gameboard.height="" ystart);="" gameboard_context.font="24px sans-serif" gameboard_context.textbaseline="top" gameboard_context.filltext("moves:="" "="" +="" moves,="" 5,="" size_of_block*9+1+10);="" updatemoves();="" draw="" circles="" drawcircle="function" row,="" isselected)="" if="" ((col="">=0) && (col<9) &&="" (row="">=0) && (row<9)){ var="" x="col" *="" size_of_block="" +="" 2;="" y="row" gameboard_context.beginpath();="" gameboard_context.arc(x,="" y,="" circle_radius,="" 0,="" math.pi="" 2,="" false);="" gameboard_context.closepath();="" gameboard_context.strokestyle="#000" ;="" gameboard_context.stroke();="" if="" (isselected)="" {="" gameboard_context.fillstyle="#000" gameboard_context.fill();="" selected.col="col;" selected.row="row;" }="" exist[col*9+row]="true;" clear="" a="" block="" (col,="" row)="" ((col="">=0) && (col<9) &&="" (row="">=0) && (row</9)></9)){></9)></10;>