
var debug = true;
var active_rune = null;
var rune_casted = false;
var runes = new Array('fehu', 'uruz', 'thurisaz', 'ansuz', 'raidho', 'kenaz', 'gebo', 'wunjo', 'hagalaz', 'naudhiz', 'isa', 'jera', 'eihwaz', 'perthro', 'elhaz', 'sowilo', 'tiwaz', 'berkano', 'ehwaz', 'mannaz', 'laguz', 'ingwaz', 'dagaz', 'othala');
var casted_runes = new Array();

/*
	build_fehu:
			build the fehu rune on the canvas that is passed. If none
			is given the the default (fehu_canvas) is used.	
		
	Inputs:
		canvas: the canvas you want to draw fehu on 
*/
function build_fehu(canvas) {

	if (canvas == null) {
		canvas = 'fehu_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");
	// line from the top to bottom of fehu
	var line_length = stage.height - 10;
	var canvas_center = stage.width / 2;
	var line_quarter = line_length / 4;

        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center, line_length);
		
	// top line that goes at a diaginal of fehu	
        stage_context.moveTo(canvas_center + 50, 10);
        stage_context.lineTo(canvas_center, line_quarter * 2);

        stage_context.moveTo(canvas_center + 50, 10 + line_quarter);
        stage_context.lineTo(canvas_center, line_quarter * 3);

	// filling in the ink to the stroke
	draw_line(stage_context);
}

function build_uruz(canvas) {
	
	if (canvas == null) {
		canvas = 'uruz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");
	// line from the top to bottom of uruz 
	var line_length = stage.height - 10;
	var canvas_center = stage.width / 2;
	var line_quarter = line_length / 4;
		
	// longest line
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// second line 3/4 the height 
        stage_context.moveTo(canvas_center + 30, line_quarter);
        stage_context.lineTo(canvas_center + 30, line_length);
	
	// line to connect the two 
        stage_context.moveTo(canvas_center - 30, 10);
       	stage_context.lineTo(canvas_center + 30, line_quarter);
		

	// filling in the ink to the stroke
	draw_line(stage_context);
}

function build_thurisaz(canvas) {

	if (canvas == null) {
		canvas = 'thurisaz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

	var line_length = stage.height - 10;
	var canvas_center = stage.width / 2;
	var line_quarter = line_length / 4;

	// left line 
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// uppper triangle
        stage_context.moveTo(canvas_center - 30, line_quarter);
        stage_context.lineTo(canvas_center + 30, line_length / 2);

	// lower triangle 
        stage_context.moveTo(canvas_center - 30, line_length - line_quarter + 10);
        stage_context.lineTo(canvas_center + 30, line_length / 2);

	// filling in the ink to the stroke
	draw_line(stage_context);
}

function build_ansuz(canvas) {

	if (canvas == null) {
		canvas = 'ansuz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

	var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// left line
	stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// top down stroke
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center + 25, line_quarter + 10);

	// bottom (parallel to the top) stroke
        stage_context.moveTo(canvas_center - 30, line_quarter);
        stage_context.lineTo(canvas_center + 25, line_quarter * 2);

	// filling in the ink to the stroke
        draw_line(stage_context);
}

function build_naudhiz(canvas) {

	if (canvas == null) {
		canvas = 'naudhiz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// line down the center
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center, line_length);

	// diaginal line through the center
	stage_context.moveTo(canvas_center - 30, line_quarter + 20);
	stage_context.lineTo(canvas_center + 30, line_quarter * 2 + 30);

	// filling in the ink to the stroke
        draw_line(stage_context);
}

function build_kenaz(canvas) {

	if (canvas == null) {
		canvas = 'kenaz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// < top
	stage_context.moveTo(canvas_center, 20);
        stage_context.lineTo(canvas_center - 50, line_length / 2);
		
	// < bottom
	stage_context.moveTo(canvas_center, line_length - 15);
        stage_context.lineTo(canvas_center - 50, line_length / 2);


	// filling in the ink to the stroke
        draw_line(stage_context);
}

function build_isa(canvas) {

	if (canvas == null) {
		canvas = 'isa_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center, line_length);


	// filling in the ink to the stroke
        draw_line(stage_context);
}

function build_gebo(canvas) {

	if (canvas == null) {
		canvas = 'gebo_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// left to right part of the X
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center + 30, line_length);

	// right to left part of the X
        stage_context.moveTo(canvas_center + 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// filling in the ink to the stroke
        draw_line(stage_context);
}

function build_wunjo(canvas) {

	if (canvas == null) {
		canvas = 'wunjo_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;
	
	// long left line
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center, line_length);

	// top part of upper triangle  
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center + 30, line_quarter);

	// bottom part of upper triangle 
        stage_context.moveTo(canvas_center + 30, line_quarter);
        stage_context.lineTo(canvas_center, line_length / 2);

	// filling in the ink to the stroke
        draw_line(stage_context);
}

function build_hagalaz(canvas) {

	if (canvas == null) {
		canvas = 'hagalaz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// left line
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// right line
        stage_context.moveTo(canvas_center + 30, 10);
        stage_context.lineTo(canvas_center + 30, line_length);

	// diaginal line through the two parallel lines  
        stage_context.moveTo(canvas_center - 30, line_quarter);
        stage_context.lineTo(canvas_center + 30, line_length - line_quarter);

	// filling in the ink to the stroke
        draw_line(stage_context);
}

function build_jera(canvas) {

	if (canvas == null) {
		canvas = 'jera_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// lower left less then sign upper line
        stage_context.moveTo(canvas_center, line_quarter + 20);
        stage_context.lineTo(canvas_center - 40, line_quarter * 3 );

	// lower left less then sign lower line
        stage_context.moveTo(canvas_center - 40, line_quarter * 3);
        stage_context.lineTo(canvas_center, line_length);

	// upper right greater then sign upper line
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center + 40, line_quarter + 20);

	// upper right greater then sign lower line
        stage_context.moveTo(canvas_center + 40, line_quarter + 20);
        stage_context.lineTo(canvas_center, line_quarter * 3);


	// filling in the ink to the stroke
        draw_line(stage_context);
}

function build_othala(canvas) {
	
	if (canvas == null) {
		canvas = 'othala_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// left to right part of the X
        stage_context.moveTo(canvas_center - 30, line_quarter + 10);
        stage_context.lineTo(canvas_center + 30, line_length);

	// right to left part of the X
        stage_context.moveTo(canvas_center + 30, line_quarter + 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// top left  
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center - 30, line_quarter + 10);

	// top right 
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center + 30, line_quarter + 10);

	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_dagaz(canvas) {

	if (canvas == null) {
		canvas = 'dagaz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// left to right part of the X
        stage_context.moveTo(canvas_center - 30, 15);
        stage_context.lineTo(canvas_center + 30, line_length - 5);

	// right to left part of the X
        stage_context.moveTo(canvas_center + 30, 15);
        stage_context.lineTo(canvas_center - 30, line_length - 5);

	// outer left line
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// outer right line 
        stage_context.moveTo(canvas_center + 30, 10);
        stage_context.lineTo(canvas_center + 30, line_length);

	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_ingwaz(canvas) {

	if (canvas == null) {
		canvas = 'ingwaz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// top left part of square
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center - 30, line_quarter * 2);

	// top right part of square
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center + 30, line_quarter * 2);

	// bottom right part of square
        stage_context.moveTo(canvas_center - 30, line_quarter * 2);
        stage_context.lineTo(canvas_center, line_length);

	// bottom left part of square
        stage_context.moveTo(canvas_center + 30, line_quarter * 2);
        stage_context.lineTo(canvas_center, line_length);


	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_laguz(canvas) {
	
	if (canvas == null) {
		canvas = 'laguz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// center line
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center, line_length);

	// top right line 
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center + 30, line_quarter + 10);


	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_mannaz(canvas) {

	if (canvas == null) {
		canvas = 'mannaz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// left to right part of the X
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center + 30, line_length / 2);

	// right to left part of the X
        stage_context.moveTo(canvas_center + 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length / 2);

	// left line
        stage_context.moveTo(canvas_center + 30, 10);
        stage_context.lineTo(canvas_center + 30, line_length);

	// right line
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_ehwaz(canvas) {

	if (canvas == null) {
		canvas = 'ehwaz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// left top
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center, line_length / 2);

	// right top
        stage_context.moveTo(canvas_center + 30, 10);
        stage_context.lineTo(canvas_center, line_length / 2);

	// left line
        stage_context.moveTo(canvas_center + 30, 10);
        stage_context.lineTo(canvas_center + 30, line_length);

	// right line
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);


	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_berkano(canvas) {

	if (canvas == null) {
		canvas = 'berkano_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// center line
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// upper bump top
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center, line_quarter + 10);

	// upper bump bottom 
        stage_context.moveTo(canvas_center, line_quarter + 10);
        stage_context.lineTo(canvas_center - 30, line_quarter * 2);

	// lower bump top
        stage_context.moveTo(canvas_center - 30, line_quarter * 2);
        stage_context.lineTo(canvas_center, line_quarter * 3);

	// lower bump bottom 
        stage_context.moveTo(canvas_center, line_quarter * 3);
        stage_context.lineTo(canvas_center - 30, line_length);

	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_tiwaz(canvas) {

	if (canvas == null) {
		canvas = 'tiwaz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// line in the center 
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center, line_length);

	// top left line  
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center - 30, line_quarter + 10);

	// top right line 
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center + 30, line_quarter + 10);


	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_sowilo(canvas) {

	if (canvas == null) {
		canvas = 'sowilo_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// 1st top line
        stage_context.moveTo(canvas_center + 30, 10);
        stage_context.lineTo(canvas_center - 30, line_quarter + 10);

	// 2nd top line
        stage_context.moveTo(canvas_center - 30, line_quarter + 10);
        stage_context.lineTo(canvas_center + 30, line_quarter * 2 + 10);

	// 3rd top line
        stage_context.moveTo(canvas_center + 30, line_quarter * 2 + 10);
        stage_context.lineTo(canvas_center - 30, line_quarter * 3 + 10);



	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_elhaz(canvas) {

	if (canvas == null) {
		canvas = 'elhaz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// line down the center 
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center, line_length);

	// left top  
        stage_context.moveTo(canvas_center, line_quarter + 10);
        stage_context.lineTo(canvas_center - 30, 10);

	// right top  
        stage_context.moveTo(canvas_center, line_quarter + 10);
        stage_context.lineTo(canvas_center + 30, 10);


	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_perthro(canvas) {

	if (canvas == null) {
		canvas = 'perthro_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// line to the left
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// top left
        stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center, line_quarter + 10);

	// top right 
        stage_context.moveTo(canvas_center, line_quarter + 10);
        stage_context.lineTo(canvas_center + 30, 10);

	// bottom left
        stage_context.moveTo(canvas_center - 30, line_length);
        stage_context.lineTo(canvas_center, line_length - line_quarter);

	// bottom right 
        stage_context.moveTo(canvas_center, line_length - line_quarter);
        stage_context.lineTo(canvas_center + 30, line_length);

	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_eihwaz(canvas) {

	if (canvas == null) {
		canvas = 'eihwaz_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// center line 
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center, line_length);

	// top line 
        stage_context.moveTo(canvas_center, 10);
        stage_context.lineTo(canvas_center - 30, line_quarter + 10);

	// bottom line 
        stage_context.moveTo(canvas_center, line_length);
        stage_context.lineTo(canvas_center + 30, line_length - line_quarter);

	// filling in the ink to the stroke
        draw_line(stage_context);
}
function build_raidho(canvas) {

	if (canvas == null) {
		canvas = 'raidho_canvas';
	}

	stage = setup_stage(canvas);

        var stage_context = stage.getContext("2d");

        var line_length = stage.height - 10;
        var canvas_center = stage.width / 2;
        var line_quarter = line_length / 4;

	// left line
	stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center - 30, line_length);

	// top part of the R
	stage_context.moveTo(canvas_center - 30, 10);
        stage_context.lineTo(canvas_center + 30, line_quarter + 10);

	// bottom part of the R 
	stage_context.moveTo(canvas_center + 30, line_quarter + 10);
        stage_context.lineTo(canvas_center - 30, line_length / 2);

	// right leg 
	stage_context.moveTo(canvas_center - 30, line_length / 2);
        stage_context.lineTo(canvas_center + 30, line_length - 5);

	// filling in the ink to the stroke
        draw_line(stage_context);
}

function setup_stage(stage_id) {
	
        var stage = document.getElementById(stage_id);
	// reset the canvas to nothing 
	if (stage.width != null) {
		stage.width = stage.width;
	}
        if (window.console && debug) {
                        console.log(stage);
        }

	if (stage.getContext) {
		return stage;
	}

}

/* draw_line - 	take a canvas object, set the shadow and draw the lines.
		Broke this into it's own function to save on duplication of
		code, and to save on the 10k zipped :) 
*/
function draw_line(canvas) {

		canvas.shadowOffsetX = 4;
		canvas.shadowOffsetY = 4;
		canvas.shadowBlur = 5;
		canvas.shadowColor = "#000";
                canvas.strokeStyle = "#000";
		canvas.lineWidth = 5;
		canvas.lineCap = "round";
                canvas.stroke();

}



/*
$(window).resize(function() {	
	build_eihwaz();
});
*/

$(document).ready(function() {

        if (window.console && debug) {
                        console.log("your document is ready....");
        }

	/* we always start off with fehu */
	if (active_rune == null) {
		active_rune = 'fehu';
		// build our stage for the first time
		build_fehu();
	}

	/* button setup */
	build_fehu('fehu_button');
	build_fehu('fehu_button_small_back');
	build_fehu('fehu_button_small_forward');
	build_uruz('uruz_button');
	build_uruz('uruz_button_small_forward');
	build_uruz('uruz_button_small_back');
	build_thurisaz('thurisaz_button');
	build_thurisaz('thurisaz_button_small_forward');
	build_thurisaz('thurisaz_button_small_back');
	build_ansuz('ansuz_button');
	build_ansuz('ansuz_button_small_forward');
	build_ansuz('ansuz_button_small_back');
	build_raidho('raidho_button');
	build_raidho('raidho_button_small_forward');
	build_raidho('raidho_button_small_back');
	build_kenaz('kenaz_button');
	build_kenaz('kenaz_button_small_forward');
	build_kenaz('kenaz_button_small_back');
	build_gebo('gebo_button');
	build_gebo('gebo_button_small_forward');
	build_gebo('gebo_button_small_back');
	build_wunjo('wunjo_button');
	build_wunjo('wunjo_button_small_forward');
	build_wunjo('wunjo_button_small_back');
	build_hagalaz('hagalaz_button');
	build_hagalaz('hagalaz_button_small_forward');
	build_hagalaz('hagalaz_button_small_back');
	build_naudhiz('naudhiz_button');
	build_naudhiz('naudhiz_button_small_forward');
	build_naudhiz('naudhiz_button_small_back');
	build_isa('isa_button');
	build_isa('isa_button_small_forward');
	build_isa('isa_button_small_back');
	build_jera('jera_button');
	build_jera('jera_button_small_forward');
	build_jera('jera_button_small_back');
	build_eihwaz('eihwaz_button');
	build_eihwaz('eihwaz_button_small_forward');
	build_eihwaz('eihwaz_button_small_back');
	build_perthro('perthro_button');
	build_perthro('perthro_button_small_forward');
	build_perthro('perthro_button_small_back');
	build_elhaz('elhaz_button');
	build_elhaz('elhaz_button_small_forward');
	build_elhaz('elhaz_button_small_back');
	build_sowilo('sowilo_button');
	build_sowilo('sowilo_button_small_forward');
	build_sowilo('sowilo_button_small_back');
	build_tiwaz('tiwaz_button');
	build_tiwaz('tiwaz_button_small_forward');
	build_tiwaz('tiwaz_button_small_back');
	build_berkano('berkano_button');
	build_berkano('berkano_button_small_forward');
	build_berkano('berkano_button_small_back');
	build_ehwaz('ehwaz_button');
	build_ehwaz('ehwaz_button_small_forward');
	build_ehwaz('ehwaz_button_small_back');
	build_mannaz('mannaz_button');
	build_mannaz('mannaz_button_small_forward');
	build_mannaz('mannaz_button_small_back');
	build_laguz('laguz_button');
	build_laguz('laguz_button_small_forward');
	build_laguz('laguz_button_small_back');
	build_ingwaz('ingwaz_button');
	build_ingwaz('ingwaz_button_small_forward');
	build_ingwaz('ingwaz_button_small_back');
	build_dagaz('dagaz_button');
	build_dagaz('dagaz_button_small_forward');
	build_dagaz('dagaz_button_small_back');
	build_othala('othala_button');
	build_othala('othala_button_small_back');
	build_othala('othala_button_small_forward');

	// this is the little canvas button of the rune
	$(".button_canvas").click(function() {
		move_rune(this);
	});

	// this is the text link under the canvas button of the rune
	$(".button_link").click(function() {
		move_rune(this);
	});

	// precast sets the user up so they can do a good cast 
	$("#pre_cast_button").click(function() {
		$("#what_are_runes").fadeOut('slow');
		$("#how_to_cast").fadeIn('slow');
	});

	// button for casting 
	$("#cast_button").click(function() {
		if (rune_casted) {
			// now need to loop through and remove 
			for (var i = 0; i < casted_runes.length; i++) {
				var rune_casted_selector = "#" + casted_runes[i];
				$(rune_casted_selector).removeClass('show').addClass('hide').fadeOut('slow');
			}

			// now that we have turned them off, lets null out the whole thing
			casted_runes = new Array();
		}
			
		if (active_rune != null) {
			var active_rune_selector = "#" + active_rune;
			$(active_rune_selector).removeClass('show').addClass('hide').fadeOut('slow');
		}
		$("#nav_large_screen").fadeOut('slow');
		cast_rune();
		rune_casted = true;
	});

	// display the nav and the first rune (fehu)
	$("#explore_button").click(function() {
		if (rune_casted) {
			// now need to loop through and remove 
			for (var i = 0; i < casted_runes.length; i++) {
				var rune_casted_selector = "#" + casted_runes[i];
				$(rune_casted_selector).removeClass('show').addClass('hide').fadeOut('slow');
			}
		}
			
		$("#what_are_runes").fadeOut('slow');
		$("#fehu").removeClass('hide').addClass('show').fadeIn('slow');
		$("#nav_large_screen").fadeIn('slow');
	});
});	

function cast_rune() {

	for (var i = 0; i < 3; i++) {
		// randomly display three runes..
		var random_number = Math.floor(Math.random() * (23 - 0 + 1)) + 0;
	
		if (window.console && debug) {
			console.log("random #: " + runes[random_number]);
		}
		
		// build the rune on the canvas
		// need to find a better way then a huge if/else block to solve this 
		if (runes[random_number] == 'fehu') {
			build_fehu();
		} else if (runes[random_number] == 'uruz') {
			build_uruz();
		} else if (runes[random_number] == 'thurisaz') {
			build_thurisaz();
		} else if (runes[random_number] == 'ansuz') {
			build_ansuz();
		} else if (runes[random_number] == 'raidho') {
			build_raidho();
		} else if (runes[random_number] == 'kenaz') {
			build_kenaz();
		} else if (runes[random_number] == 'gebo') {
			build_gebo();
		} else if (runes[random_number] == 'wunjo') {
			build_wunjo();
		} else if (runes[random_number] == 'hagalaz') {
			build_hagalaz();
		} else if (runes[random_number] == 'naudhiz') {
			build_naudhiz();
		} else if (runes[random_number] == 'isa') {
			build_isa();
		} else if (runes[random_number] == 'jera') {
			build_jera();
		} else if (runes[random_number] == 'eihwaz') {
			build_eihwaz();
		} else if (runes[random_number] == 'perthro') {
			build_perthro();
		} else if (runes[random_number] == 'elhaz') {
			build_elhaz();
		} else if (runes[random_number] == 'sowilo') {
			build_sowilo();
		} else if (runes[random_number] == 'tiwaz') {
			build_tiwaz();
		} else if (runes[random_number] == 'berkano') {
			build_berkano();
		} else if (runes[random_number] == 'ehwaz') {
			build_ehwaz();
		} else if (runes[random_number] == 'mannaz') {
			build_mannaz();
		} else if (runes[random_number] == 'laguz') {
			build_laguz();
		} else if (runes[random_number] == 'ingwaz') {
			build_ingwaz();
		} else if (runes[random_number] == 'dagaz') {
			build_dagaz();
		} else if (runes[random_number] == 'othala') {
			build_othala();
		} // no else 

		
		var active_rune_selector = "#" + active_rune;
		var next_rune_selector = "#" + runes[random_number];
		$(active_rune_selector).removeClass('show').addClass('hide').fadeOut('slow');
		$(next_rune_selector).removeClass('hide').addClass('show').fadeIn('slow');
		casted_runes.push(runes[random_number]);
	}	

}

function move_rune(rune) {
		var rune_name = $(rune).data('name');
		var rune_selector = "#" + rune_name;
		
		if (window.console && debug) {
			console.log("just clicked a rune: " + rune_name);
		}

		var active_rune_selector = "#" + active_rune;
		// by setting the active rune's display to 'none' it will bump up the rune selected once it's display is 
		// set to 'block'
		$(active_rune_selector).removeClass('show').addClass('hide').fadeOut('slow');
		// build the rune on the canvas
		// need to find a better way then a huge if/else block to solve this 
		if (rune_name == 'fehu') {
			build_fehu();
		} else if (rune_name == 'uruz') {
			build_uruz();
		} else if (rune_name == 'thurisaz') {
			build_thurisaz();
		} else if (rune_name == 'ansuz') {
			build_ansuz();
		} else if (rune_name == 'raidho') {
			build_raidho();
		} else if (rune_name == 'kenaz') {
			build_kenaz();
		} else if (rune_name == 'gebo') {
			build_gebo();
		} else if (rune_name == 'wunjo') {
			build_wunjo();
		} else if (rune_name == 'hagalaz') {
			build_hagalaz();
		} else if (rune_name == 'naudhiz') {
			build_naudhiz();
		} else if (rune_name == 'isa') {
			build_isa();
		} else if (rune_name == 'jera') {
			build_jera();
		} else if (rune_name == 'eihwaz') {
			build_eihwaz();
		} else if (rune_name == 'perthro') {
			build_perthro();
		} else if (rune_name == 'elhaz') {
			build_elhaz();
		} else if (rune_name == 'sowilo') {
			build_sowilo();
		} else if (rune_name == 'tiwaz') {
			build_tiwaz();
		} else if (rune_name == 'berkano') {
			build_berkano();
		} else if (rune_name == 'ehwaz') {
			build_ehwaz();
		} else if (rune_name == 'mannaz') {
			build_mannaz();
		} else if (rune_name == 'laguz') {
			build_laguz();
		} else if (rune_name == 'ingwaz') {
			build_ingwaz();
		} else if (rune_name == 'dagaz') {
			build_dagaz();
		} else if (rune_name == 'othala') {
			build_othala();
		} // no else 
		

		$(rune_selector).removeClass('hide').fadeIn('slow');
		// let the rest of the app know who the active rune is
		active_rune = rune_name;
}


